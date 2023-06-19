import Header from "@/components/Header";
import RootLayout from "./layout";
import Hero from "@/components/index/Hero";
import Projects from "@/components/index/Projects";
import Reviews from "@/components/index/Reviews";
import ContactBlock from "@/components/index/ContactBlock";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <RootLayout>
            <Header active="Home" />
            <Hero />
            <Projects />
            <Reviews />
            <ContactBlock />
            <Footer />
        </RootLayout>
    );
}
