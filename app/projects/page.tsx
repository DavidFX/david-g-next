import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RootLayout from "../layout";
import { getAllProjects } from "@/lib/notion";
import Image from "next/image";

export default async function Projects() {
    const projects = await getAllProjects();
    return (
        <RootLayout>
            <Header active="contact" />
            <section
                className="container mt-[64px] flex flex-col gap-16 mb-16
                "
                aria-label="Projects"
            >
                <div className="font-medium text-center font-space">
                    <h3 className="text-primary"> - My work -</h3>
                    <h2 className="text-[32px]">Projects I've done</h2>
                </div>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-around gap-2 text-center lg:flex-row lg:text-left"
                    >
                        <a
                            href={project.url}
                            target="_blank"
                            className="relative flex justify-center overflow-hidden text-center rounded-md cursor-pointer"
                        >
                            <Image
                                src={project.image}
                                width={325}
                                height={250}
                                alt={`${project.title} image`}
                            />
                            <div className="absolute flex items-center justify-center w-full h-full transition-opacity duration-500 opacity-0 bg-dark hover:opacity-50">
                                <span className=" font-space text-[32px] font-medium text-light ">
                                    Preview
                                </span>
                            </div>
                        </a>
                        <div className="gap flex flex-col gap-[16px] lg:items-start items-center">
                            <h4 className="font-space text-[24px]">
                                {project.title}
                            </h4>
                            <p className="max-w-xl">{project.description}</p>
                            <div className="flex justify-center gap-[8px] lg:justify-start">
                                {project.stack.map(
                                    (tech: any, index: number) => (
                                        <span key={index} className="bage">
                                            {tech}
                                        </span>
                                    )
                                )}
                            </div>
                            <a
                                target="_blank"
                                href={project.github}
                                className="btn"
                            >
                                GITHUB
                            </a>
                        </div>
                    </div>
                ))}
            </section>

            <Footer />
        </RootLayout>
    );
}
