import { Client } from "@notionhq/client";
import { log } from "console";
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({
    auth: process.env.NEXT_PUBLIC_NOTION_API_KEY,
});

const n2m = new NotionToMarkdown({
    notionClient: notion,
});

export const getAllPosts = async () => {
    const posts = await notion.databases.query({
        database_id: `${process.env.NEXT_PUBLIC_NOTION_BLOG_ID}`,
        filter: {
            property: "Published",
            checkbox: {
                equals: true,
            },
        },
    });

    const allPosts = posts.results;

    return allPosts.map((post) => {
        return getPostMetadata(post);
    });
};

export const getSinglePost = async (slug: any) => {
    const response = await notion.databases.query({
        database_id: `${process.env.NEXT_PUBLIC_NOTION_BLOG_ID}`,
        filter: {
            property: "Slug",
            formula: {
                string: {
                    equals: slug,
                },
            },
        },
    });

    const post = response.results[0];
    const metadata = getPostMetadata(post);
    const mdBlocks = await n2m.pageToMarkdown(post.id);
    const mdString = await n2m.toMarkdownString(mdBlocks);

    return {
        metadata,
        markdown: mdString.parent,
    };
};

const getProjectMetadata = (project: any) => {
    const getTags = (tags: any) => {
        const allTags = tags.map((tag: any) => {
            return tag.name;
        });

        return allTags;
    };
    return {
        id: project.id,
        title: project.properties.Name.title[0].plain_text,
        stack: getTags(project.properties.Stack.multi_select),
        description: project.properties.Description.rich_text[0].plain_text,
        slug: project.properties.Slug.rich_text[0].plain_text,
        image: project.properties.Image.rich_text[0].plain_text,
        url: project.properties.URL.rich_text[0].plain_text,
        github: project.properties.Github.rich_text[0].plain_text,
    };
};

const getPostMetadata = (post: any) => {
    const getTags = (tags: any) => {
        const allTags = tags.map((tag: any) => {
            return tag.name;
        });

        return allTags;
    };
    return {
        id: post.id,
        title: post.properties.Title.title[0].plain_text,
        slug: post.properties.Slug.rich_text[0].plain_text,
        tags: getTags(post.properties.Tags.multi_select),
        description: post.properties.Description.rich_text[0].plain_text,
        image: post.properties.Image.rich_text[0].plain_text,
    };
};

export const getAllProjects = async () => {
    const projects = await notion.databases.query({
        database_id: `${process.env.NEXT_PUBLIC_NOTION_PROJECTS_ID}`,
    });

    const allProjects = projects.results;

    return allProjects.map((project) => {
        return getProjectMetadata(project);
    });
};

export const getFeaturedProjects = async () => {
    const projects = await notion.databases.query({
        database_id: `${process.env.NEXT_PUBLIC_NOTION_PROJECTS_ID}`,
        filter: {
            property: "Featured",
            checkbox: {
                equals: true,
            },
        },
    });

    const allProjects = projects.results;

    return allProjects.map((project) => {
        return getProjectMetadata(project);
    });
};
