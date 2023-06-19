import { type NextPage } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RootLayout from "../layout";

const Blog: NextPage = () => {
    return (
        <RootLayout>
            <Header active="Blog" />

            <Footer />
        </RootLayout>
    );
};

export default Blog;
