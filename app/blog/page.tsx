import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RootLayout from "../layout";
import Image from "next/image";

import { getAllPosts } from "@/lib/notion";
import Link from "next/link";

const Blog = async () => {
    const posts = await getAllPosts();

    return (
        <RootLayout>
            <Header active="Blog" />
            <section
                className="container mt-[64px] flex flex-col mb-16
                "
                aria-label="About me"
            >
                <div className="font-medium text-center font-space">
                    <h3 className="text-primary"> - Blog -</h3>
                    <h2 className="text-[32px]">
                        Highlighting my experience and my thoughts
                    </h2>
                </div>

                <div className="flex flex-col gap-16 mt-16">
                    {posts.map((post, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-around gap-2 text-center lg:flex-row lg:text-left"
                        >
                            <Link
                                href={`/blog/${post.slug}`}
                                className="relative flex justify-center overflow-hidden text-center rounded-md cursor-pointer"
                            >
                                <Image
                                    src={post.image}
                                    width={325}
                                    height={250}
                                    alt={`${post.title} image`}
                                />
                                <div className="absolute flex items-center justify-center w-full h-full transition-opacity duration-500 opacity-0 bg-dark hover:opacity-50">
                                    <span className=" font-space text-[32px] font-medium text-light ">
                                        Preview
                                    </span>
                                </div>
                            </Link>
                            <Link
                                href={`/blog/${post.slug}`}
                                className="gap flex flex-col gap-[16px] max-w-xl lg:items-start items-center"
                            >
                                <h4 className="font-space text-[24px]">
                                    {post.title}
                                </h4>
                                <p className="max-w-xl">{post.description}</p>
                                <div className="flex justify-center gap-[8px] flex-wrap lg:justify-start">
                                    {post.tags.map(
                                        (tech: any, index: number) => (
                                            <span key={index} className="bage">
                                                {tech}
                                            </span>
                                        )
                                    )}
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </RootLayout>
    );
};

export default Blog;
