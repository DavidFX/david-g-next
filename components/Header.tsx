"use client";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type HeaderProps = {
    active?: string;
};

const variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            type: "spring",
        },
    },
    closed: {
        opacity: 0,
        y: "-100%",
        transition: {
            duration: 0.5,
            type: "spring",
        },
    },
};

export default function Header({ active }: HeaderProps) {
    const [status, setStatus] = useState(false);

    const links = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "Projects",
            href: "/projects",
        },
        {
            name: "About",
            href: "/about",
        },
        // {
        //     name: "Blog",
        //     href: "/blog",
        // },
        {
            name: "Contact",
            href: "/contact",
        },
    ];

    const activeLink = links.find((link) => link.name === active);

    const toggleMenu = () => {
        setStatus(!status);
    };

    return (
        <header className="container flex h-[100px] items-center justify-between font-space">
            <Link className=" text-[24px] font-medium" href="/">
                David G.
            </Link>
            <nav className="hidden gap-4 sm:flex">
                {links.map((link) => (
                    <Link
                        className="font-space"
                        key={link.name}
                        href={link.href}
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
            <FiMenu
                onClick={toggleMenu}
                className="cursor-pointer text-[32px] sm:hidden"
            />

            <AnimatePresence>
                {status && (
                    <motion.div
                        initial={{ opacity: 0, x: "-100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "-100%" }}
                        transition={{
                            duration: 0.5,
                            delay: 0.2,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        className="fixed top-0 left-0 z-50 w-screen h-screen text-light bg-dark"
                    >
                        <div className="">
                            <div className="container flex h-[100px] items-center justify-end">
                                <FiX
                                    onClick={toggleMenu}
                                    className="text-4xl cursor-pointer "
                                />
                            </div>
                            <nav className="flex flex-col items-center justify-center text-[64px]">
                                {links.map((link) => (
                                    <Link
                                        onClick={
                                            active === link.name
                                                ? toggleMenu
                                                : undefined
                                        }
                                        className="container font-space"
                                        key={link.name}
                                        href={link.href}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
