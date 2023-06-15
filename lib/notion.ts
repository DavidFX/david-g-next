import { Client } from "@notionhq/client";

const notion = new Client({
    auth: process.env.NEXT_PUBLIC_NOTION_API_KEY,
});

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
