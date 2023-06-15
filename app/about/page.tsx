import { type NextPage } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RootLayout from "../layout";

const About: NextPage = () => {
    return (
        <RootLayout>
            <Header active="contact" />

            <section
                className="container mt-[64px] flex flex-col gap-16 mb-16
                "
                aria-label="About me"
            >
                <div className="font-medium text-center font-space">
                    <h3 className="text-primary"> - About Me -</h3>
                    <h2 className="text-[32px]">My skills and interests</h2>
                </div>
            </section>
            <Footer />
        </RootLayout>
    );
};

export default About;
