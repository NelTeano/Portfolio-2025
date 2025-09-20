import React, { useEffect, useRef } from "react";
import { SectionProps } from './types';
import Container from "../container";
import { $path } from 'next-typesafe-url';
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import Link from "next/link";

const navChildVariants: Variants = {
    hidden: { y: -35, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { ease: 'easeOut', duration: 0.8 } },
};

const containerVariants: Variants = {
    hidden: { y: 80, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { ease: 'easeOut', duration: 0.7 } },
};

const footerVariants: Variants = {
    hidden: { y: 60, opacity: 0, scale: 0.95 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { ease: 'easeOut', duration: 0.7 } },
};

const Contact: React.FC<SectionProps> = ({ sectionRef }) => {
    const ref = useRef(null);
    const controls = useAnimation();
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [inView, controls]);

    const navLinks = [
        { label: 'About', href: $path({ route: '/about' }) },
        { label: 'Projects', href: $path({ route: '/projects' }) },
        { label: 'Blog', href: $path({ route: '/blog' }) },
    ];

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
        >
            <Container maxWidth="full" className="relative z-10 bg-primary py-10">
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={footerVariants}
                    className="flex flex-row items-center justify-between w-full"
                >
                    <section className="flex flex-col">
                        <Link
                            href="/"
                            className="group text-white flex h-full cursor-pointer items-center pr-5 text-2xl font-black tracking-tight select-none lg:text-2xl"
                        >
                            <motion.span variants={navChildVariants} className="relative block">
                                <span className="text-primary-darker  absolute block">NELTEANO</span>
                                <span className="text-white relative block transition will-change-transform group-hover:-translate-y-[0.20rem]">
                                    NELTEANO
                                </span>
                            </motion.span>
                        </Link>
                    </section>
                    <section>
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="text-typography text-white mx-4 hover:underline">
                                {link.label}
                            </a>
                        ))}
                    </section>
                    <section className="text-white text-typography">
                        © 2025 - NelTeano
                    </section>
                </motion.div>
            </Container>
        </motion.div>
    )
}

export default Contact;
