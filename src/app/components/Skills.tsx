"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageProvider";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGitAlt,
    FaGithub,
    FaAngular,
    FaJava,
} from "react-icons/fa";
import {
    SiTypescript,
    SiNextdotjs,
    SiTailwindcss,
    SiSass,
    SiDocker,
    SiMysql,
} from "react-icons/si";

const row1 = [
    { name: "HTML", icon: <FaHtml5 size={20} aria-hidden="true" /> },
    { name: "CSS", icon: <FaCss3Alt size={20} aria-hidden="true" /> },
    { name: "Sass", icon: <SiSass size={20} aria-hidden="true" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={20} aria-hidden="true" /> },
    { name: "JavaScript", icon: <FaJs size={20} aria-hidden="true" /> },
    { name: "TypeScript", icon: <SiTypescript size={20} aria-hidden="true" /> },
    { name: "Java", icon: <FaJava size={20} aria-hidden="true" /> },
];

const row2 = [
    { name: "React", icon: <FaReact size={20} aria-hidden="true" /> },
    { name: "Next.js", icon: <SiNextdotjs size={20} aria-hidden="true" /> },
    { name: "Angular", icon: <FaAngular size={20} aria-hidden="true" /> },
    { name: "Git", icon: <FaGitAlt size={20} aria-hidden="true" /> },
    { name: "GitHub", icon: <FaGithub size={20} aria-hidden="true" /> },
    { name: "Docker", icon: <SiDocker size={20} aria-hidden="true" /> },
    { name: "SQL", icon: <SiMysql size={20} aria-hidden="true" /> },
];

const duplicatedRow1 = [...row1, ...row1];
const duplicatedRow2 = [...row2, ...row2];

export default function Skills() {
    const { t } = useLanguage();
    const [isPaused, setIsPaused] = useState(false);
    const prefersReducedMotion = useReducedMotion();

    return (
        <section
            id="skills"
            className="scroll-mt-24 bg-[#f7f3ee] px-6 py-14 md:px-12 md:py-18 lg:px-20 lg:py-20"
        >
            <div className="container-main">
                <motion.div
                    initial={
                        prefersReducedMotion
                            ? false
                            : { opacity: 0, y: 46, filter: "blur(10px)" }
                    }
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.55 }}
                    transition={{
                        duration: 0.9,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <motion.p
                        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: 0.05 }}
                        className="mb-5 text-[11px] uppercase tracking-[0.22em] text-[#75695f]"
                    >
                        {t.skills.label}
                    </motion.p>

                    <motion.h2
                        initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.12 }}
                        className="font-editorial text-[3rem] leading-[0.95] tracking-tight text-[#4f433b] sm:text-[4rem] lg:text-[5rem]"
                    >
                        {t.skills.title}
                    </motion.h2>

                    <motion.p
                        initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.18 }}
                        className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#6f6258] md:text-base"
                    >
                        {t.skills.description}
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={
                        prefersReducedMotion
                            ? false
                            : { opacity: 0, y: 50, filter: "blur(10px)" }
                    }
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                        duration: 0.95,
                        delay: 0.12,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mx-auto mt-14 max-w-7xl space-y-9 overflow-hidden md:mt-16"
                >
                    <div>
                        <p className="mb-4 text-center text-[10px] uppercase tracking-[0.22em] text-[#75695f]">
                            {t.skills.band1}
                        </p>

                        <div
                            className="relative overflow-hidden rounded-full px-8 md:px-14 lg:px-20"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            <motion.div
                                className="flex w-max gap-3 md:gap-4"
                                animate={
                                    prefersReducedMotion || isPaused ? {} : { x: ["0%", "-50%"] }
                                }
                                transition={{
                                    duration: 32,
                                    ease: "linear",
                                    repeat: prefersReducedMotion || isPaused ? 0 : Infinity,
                                }}
                            >
                                {duplicatedRow1.map((skill, index) => (
                                    <div
                                        key={`${skill.name}-row1-${index}`}
                                        className="flex min-w-33 items-center gap-3 rounded-full border border-[#ded3c8] bg-white/65 px-4 py-3 text-[#6f6258] shadow-[0_4px_14px_rgba(0,0,0,0.025)] md:min-w-37 md:px-5 md:backdrop-blur-sm"
                                    >
                                        <span className="shrink-0 opacity-85">{skill.icon}</span>
                                        <span className="whitespace-nowrap text-[13px] md:text-sm">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </motion.div>

                            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-[#f7f3ee] via-[#f7f3ee]/95 to-transparent md:w-32" />
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-[#f7f3ee] via-[#f7f3ee]/95 to-transparent md:w-32" />
                        </div>
                    </div>

                    <div>
                        <p className="mb-4 text-center text-[10px] uppercase tracking-[0.22em] text-[#75695f]">
                            {t.skills.band2}
                        </p>

                        <div
                            className="relative overflow-hidden rounded-full px-8 md:px-14 lg:px-20"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            <motion.div
                                className="flex w-max gap-3 md:gap-4"
                                animate={
                                    prefersReducedMotion || isPaused ? {} : { x: ["-50%", "0%"] }
                                }
                                transition={{
                                    duration: 32,
                                    ease: "linear",
                                    repeat: prefersReducedMotion || isPaused ? 0 : Infinity,
                                }}
                            >
                                {duplicatedRow2.map((skill, index) => (
                                    <div
                                        key={`${skill.name}-row2-${index}`}
                                        className="flex min-w-33 items-center gap-3 rounded-full border border-[#ded3c8] bg-white/65 px-4 py-3 text-[#6f6258] shadow-[0_4px_14px_rgba(0,0,0,0.025)] md:min-w-37 md:px-5 md:backdrop-blur-sm"
                                    >
                                        <span className="shrink-0 opacity-85">{skill.icon}</span>
                                        <span className="whitespace-nowrap text-[13px] md:text-sm">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </motion.div>

                            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-[#f7f3ee] via-[#f7f3ee]/95 to-transparent md:w-32" />
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-[#f7f3ee] via-[#f7f3ee]/95 to-transparent md:w-32" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}