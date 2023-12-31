import { getSinglePost } from "@/lib/notion";
import RootLayout from "@/app/layout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";

interface Props {
    params: {
        slug: string;
    };
}

export default async function Post({ params }: Props) {
    const post = await getSinglePost(params.slug);
    return (
        <RootLayout>
            <Header active="Blog" />
            <article className="container my-16">
                <h1 className="text-[32px] font-bold text-primary max-w-2xl">
                    {post.metadata.title}
                </h1>
                <div className="flex gap-3 mt-3">
                    {post.metadata.tags.map((tech: any, index: number) => (
                        <span key={index} className="bage">
                            {tech}
                        </span>
                    ))}
                </div>
                <ReactMarkdown className="max-w-2xl mt-8 prose">
                    {post.markdown}
                </ReactMarkdown>
            </article>
            <Footer />
        </RootLayout>
    );
}
