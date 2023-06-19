import { type NextPage } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RootLayout from "../layout";
import Image from "next/image";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiPython,
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiFigma,
    SiVercel,
    SiNetlify,
    SiAstro,
    SiWordpress,
    SiElementor,
} from "react-icons/si";

const About: NextPage = () => {
    return (
        <RootLayout>
            <Header active="About" />

            <section
                className="container mt-[64px] flex flex-col mb-16
                "
                aria-label="About me"
            >
                <div className="font-medium text-center font-space">
                    <h3 className="text-primary"> - About Me -</h3>
                    <h2 className="text-[32px]">My skills and interests</h2>
                </div>

                <div className="flex flex-col items-center justify-between gap-16 lg:flex-row">
                    <Image
                        src="coder2.svg"
                        alt="About Me image"
                        width={500}
                        height={500}
                    />

                    <div className="flex flex-col text-center lg:text-left">
                        <h3 className="text-primary font-medium font-space text-[32px]">
                            Who am I?
                        </h3>
                        <p className="mt-4 ">
                            I am a front-end web developer with a passion for
                            creating beautiful and functional websites. I am
                            currently a student at the Moldova State University,
                            pursuing a Bachelor of Science in Computer Science.
                            I am also a freelancer, working on various projects
                            for clients around the world.
                        </p>
                    </div>
                </div>
                <div className="my-12 font-medium text-center font-space">
                    <h3 className="text-primary">- TECH STACK -</h3>
                    <h2 className="text-[32px]">
                        What I&apos;ve been working with
                    </h2>
                </div>
                <div className="flex flex-col gap-4 mx-auto text-center">
                    <div className="flex flex-col gap-3">
                        <h3 className="text-primary font-medium font-space text-[32px]">
                            Languages
                        </h3>
                        <div className="flex items-center gap-3">
                            <SiHtml5 className="text-5xl text-dark" />
                            <SiCss3 className="text-5xl text-dark" />
                            <SiJavascript className="text-5xl text-dark" />
                            <SiTypescript className="text-5xl text-dark" />
                            <SiPython className="text-5xl text-dark" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-primary font-medium font-space text-[32px]">
                            Frameworks
                        </h3>
                        <div className="flex justify-center gap-3">
                            <SiReact className="text-5xl text-dark" />
                            <SiNextdotjs className="text-5xl text-dark" />
                            <SiAstro className="text-5xl text-dark" />
                            <SiTailwindcss className="text-5xl text-dark" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-primary font-medium font-space text-[32px]">
                            Other Tools
                        </h3>
                        <div className="flex justify-center gap-3">
                            <SiFigma className="text-5xl text-dark" />
                            <SiVercel className="text-5xl text-dark" />
                            <SiNetlify className="text-5xl text-dark" />
                            <SiWordpress className="text-5xl text-dark" />
                            <SiElementor className="text-5xl text-dark" />
                        </div>
                    </div>
                </div>
                {/* <div className="my-12 font-medium text-left font-space">
                    <h3 className="text-primary">Experience -</h3>
                    <h2 className="text-[32px]">
                        What I&apos;ve been working on
                    </h2>
                </div>
                <div className="flex flex-col gap-4 mx-auto text-center">
                    <div className="flex flex-col gap-3">
                        <h3 className="text-primary font-medium font-space text-[32px]">
                            Freelance
                        </h3>
                        <div className="flex items-center gap-3">
                            <p className="text-dark">
                                I have been working as a freelancer for the past
                                2 years, working on various projects for clients
                                around the world. I have worked on projects
                                ranging from simple landing pages to complex
                                web-applications.
                            </p>
                        </div>
                    </div>
                </div> */}
            </section>
            <Footer />
        </RootLayout>
    );
};

export default About;
