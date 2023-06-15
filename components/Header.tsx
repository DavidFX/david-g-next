import Link from "next/link";
import { FiMenu } from "react-icons/fi";

type HeaderProps = {
    active?: string;
};

export default function Header({ active }: HeaderProps) {
    return (
        <header className="container flex h-[100px] items-center justify-between font-space">
            <Link className=" text-[24px] font-medium" href="/">
                David G.
            </Link>
            <nav className="hidden gap-4 sm:flex">
                <Link href="/">Home</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/about">About</Link>
                {/* <Link href="/blog">Blog</Link> */}
                <Link href="/contact">Contact</Link>
            </nav>
            <FiMenu className="cursor-pointer text-[32px] sm:hidden" />
        </header>
    );
}
