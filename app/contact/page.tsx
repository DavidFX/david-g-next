import { type NextPage } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RootLayout from "../layout";
import ContanctForm from "@/components/utility/ContactForm";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";
import Image from "next/image";

const Blog: NextPage = () => {
    const socials = [
        {
            icon: "SiGithub",
            link: "https://github.com/DavidFX",
        },
        {
            icon: "SiLinkedin",
            link: "https://www.linkedin.com/in/david-gherlovanu-6032b7260/",
        },
        {
            icon: "SiTwitter",
            link: "https://twitter.com/DavidGherlovanu",
        },
    ];

    return (
        <RootLayout>
            <Header active="Contact" />
            <section
                className="container flex flex-col gap-16 my-16"
                aria-label="About me"
            >
                <div className="font-medium text-center font-space">
                    <h3 className="text-primary"> - Contact Me -</h3>
                    <h2 className="text-[32px]">
                        My social networks and email
                    </h2>
                </div>

                <div className="flex flex-col items-center justify-between w-full gap-8 lg:gap-0 lg:flex-row">
                    <Image
                        src="/contact.svg"
                        alt="Contact image"
                        width={500}
                        height={500}
                    />
                    <div className="flex flex-col">
                        <div className="flex items-center justify-center gap-8">
                            {socials.map((social) => (
                                <a
                                    key={social.icon}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-3xl transition-colors duration-150 ease-in-out hover:text-primary "
                                >
                                    {social.icon === "SiGithub" && <SiGithub />}
                                    {social.icon === "SiLinkedin" && (
                                        <SiLinkedin />
                                    )}
                                    {social.icon === "SiTwitter" && (
                                        <SiTwitter />
                                    )}
                                </a>
                            ))}
                        </div>
                        <ContanctForm />
                    </div>
                </div>
            </section>
            <Footer />
        </RootLayout>
    );
};

export default Blog;
