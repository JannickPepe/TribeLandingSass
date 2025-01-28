"use client";

import Image from "next/image";
import logoImage from '../assets/images/logo.svg';
import Button from "@/components/Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
    { label: "Features", href: "/features" },
    { label: "Integrations", href: "/integrations" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
];


const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: index * 0.2,
            duration: 0.4,
        },
    }),
};


export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <main className="py-4 lg:py-8 fixed w-full top-0 z-[50]">
                <section className="container max-w-5xl">
                    <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur">
                        <div className="grid grid-cols-2 lg:grid-cols-3 items-center p-2 px-4 md:pr-2">
                            <Link href={'/'}>
                                <Image src={logoImage} alt="Logo" className="h-9 md:h-auto w-auto" />
                            </Link>
                            <div className="lg:flex justify-center items-center hidden">
                                <nav className="flex gap-6 font-medium">
                                    {navLinks.map((link, index) => (
                                        <a key={index} href={link.href} className="text-neutral-200 font-medium hover:text-primary-500 hover:scale-105 hover:text-lime-500 transition-all">
                                            {link.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            <div className="flex justify-end gap-4">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    className="feather feather-menu md:hidden"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <line x1="3" y1="6" x2="21" y2="6" className={twMerge("origin-left transition", isOpen && 'rotate-45 -translate-y-1')}></line>
                                    <line x1="3" y1="12" x2="21" y2="12" className={twMerge("transition", isOpen && 'opacity-0')}></line>
                                    <line x1="3" y1="18" x2="21" y2="18" className={twMerge("origin-left transition", isOpen && '-rotate-45 translate-y-1')}></line>
                                </svg>
                                
                                <Button variant="secondary" className="hidden md:inline-flex items-center hover:border-transparent transition">Login</Button>
                                <Button variant="primary" className="hidden md:inline-flex items-center hover:bg-lime-500 transition-colors">Sign Up</Button>
                            </div>
                        </div>

                        <AnimatePresence>
                            {isOpen && (
                                <motion.div 
                                    initial={{ height: 0, }}
                                    animate={{ height: "auto",  }}
                                    exit={{ height: 0,  }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-col items-center gap-4 py-4">
                                        {navLinks.map((link, index) => (
                                            <motion.a
                                            key={index}
                                            href={link.href}
                                            className="text-neutral-200 font-medium hover:text-primary-500"
                                            custom={index}
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                            variants={linkVariants}
                                        >
                                                {link.label}
                                            </motion.a>
                                        ))}

                                        <div className="flex-none space-x-4 md:space-x-0 md:flex">
                                        <Button variant="secondary">Login</Button>
                                        <Button variant="primary">Sign Up</Button>
                                        </div>
                                        
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </section>
            </main>

            <div className="pb-[40px] md:pb-[50px] lg:pb-[70px]"></div>
        </>
        
    )
}
