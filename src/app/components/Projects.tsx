"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
    FaReact,
    FaCss3Alt,
    FaGithub,
    FaAngular,
    FaHtml5,
    FaJs,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { useLanguage } from "../i18n/LanguageProvider";

const projectsData = [
    {
        image: "/images/project-1.png",
        github: "https://github.com/SoYuDev/ecommerce-analytics-storefront",
        technologies: [
            { name: "Next.js", icon: "next" },
            { name: "React", icon: "react" },
            { name: "TypeScript", icon: "typescript" },
            { name: "Zustand", icon: "zustand" },
            { name: "CSS", icon: "css" },
        ],
    },
    {
        image: "/images/project-2.png",
        github: "https://github.com/sheylaaguilar-hub",
        technologies: [
            { name: "Angular", icon: "angular" },
            { name: "HTML", icon: "html" },
            { name: "JavaScript", icon: "javascript" },
            { name: "CSS", icon: "css" },
            { name: "Firebase", icon: "firebase" },
        ],
    },
    {
        image: "/images/project-3.png",
        github: "https://github.com/sheylaaguilar-hub",
        technologies: [
            { name: "HTML", icon: "html" },
            { name: "JavaScript", icon: "javascript" },
            { name: "CSS", icon: "css" },
            { name: "Supabase", icon: "supabase" },
        ],
    },
];

export default function Projects() {
    const { t } = useLanguage();

    const [page, setPage] = useState(0);
    const [direction, setDirection] = useState(1);
    const prefersReducedMotion = useReducedMotion();

    const project = projectsData[page];
    const projectText = t.projects.items[page];

    const handlePrev = () => {
        setDirection(-1);
        setPage((prev) => (prev - 1 + projectsData.length) % projectsData.length);
    };

    const handleNext = () => {
        setDirection(1);
        setPage((prev) => (prev + 1) % projectsData.length);
    };

    return (
        <section
            id="projects"
            className="scroll-mt-24 bg-[#f7f3ee] px-5 py-16 md:px-8 md:py-20 lg:px-12 lg:py-24"
        >
            <div className="container-main">
                <motion.div
                    initial={
                        prefersReducedMotion
                            ? false
                            : { opacity: 0, y: 46, filter: "blur(10px)" }
                    }
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                        duration: 0.9,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mx-auto max-w-208 text-center"
                >
                    <p className="mb-5 text-[11px] uppercase tracking-[0.22em] text-[#75695f]">
                        {t.projects.label}
                    </p>

                    <h2 className="font-editorial text-[3rem] leading-[0.95] tracking-tight text-[#4f433b] sm:text-[4rem] lg:text-[5rem]">
                        {t.projects.title}
                    </h2>

                    <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#6f6258] md:text-base">
                        {t.projects.description}
                    </p>
                </motion.div>

                <motion.div
                    initial={
                        prefersReducedMotion
                            ? false
                            : { opacity: 0, y: 50, filter: "blur(10px)" }
                    }
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                        duration: 0.95,
                        delay: 0.1,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mx-auto mt-12 max-w-2xl md:mt-14"
                >
                    <div className="relative flex items-center justify-center">
                        <button
                            type="button"
                            onClick={handlePrev}
                            aria-label={t.projects.previous}
                            className="absolute -left-8 top-[36%] z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#d8cbc1] bg-[#f7f3ee]/90 text-lg text-[#6f6258] transition hover:scale-105 hover:bg-[#f1ebe5] md:flex"
                        >
                            ←
                        </button>

                        <div className="w-full max-w-136">
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.article
                                    key={page}
                                    initial={
                                        prefersReducedMotion
                                            ? { opacity: 1, x: 0 }
                                            : { opacity: 0, x: direction > 0 ? 34 : -34 }
                                    }
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={
                                        prefersReducedMotion
                                            ? { opacity: 1, x: 0 }
                                            : { opacity: 0, x: direction > 0 ? -34 : 34 }
                                    }
                                    whileHover={
                                        prefersReducedMotion ? undefined : { y: -5, scale: 1.006 }
                                    }
                                    transition={{
                                        duration: 0.55,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="group overflow-hidden rounded-[28px] border border-[#ded3c8] bg-white/50 shadow-[0_16px_42px_rgba(0,0,0,0.04)]"
                                >
                                    <div className="relative aspect-video w-full overflow-hidden bg-[#f1ebe5]">
                                        <Image
                                            src={project.image}
                                            alt={projectText.title}
                                            fill
                                            sizes="(max-width: 768px) 92vw, 544px"
                                            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                                        />

                                        <div className="absolute inset-0 flex items-center justify-center bg-[#4f433b]/0 transition-all duration-500 group-hover:bg-[#4f433b]/30">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${t.projects.viewGithub}: ${projectText.title}`}
                                                className="flex scale-90 items-center justify-center rounded-full bg-white/90 p-5 opacity-0 shadow-[0_14px_34px_rgba(0,0,0,0.12)] transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
                                            >
                                                <FaGithub
                                                    aria-hidden="true"
                                                    className="text-2xl text-[#4f433b]"
                                                />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="px-5 py-5 text-center md:px-7 md:py-6">
                                        <h3 className="mb-2 text-[11px] uppercase tracking-[0.22em] text-[#75695f]">
                                            {projectText.title}
                                        </h3>

                                        <p className="mx-auto max-w-140 text-sm leading-6 text-[#6f6258]">
                                            {projectText.description}
                                        </p>

                                        <div className="mt-5 flex flex-wrap justify-center gap-3">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech.name}
                                                    className="flex items-center gap-2 rounded-full border border-[#e5ded5] bg-white/65 px-4 py-2 text-[12px] text-[#6f6258]"
                                                >
                                                    {tech.icon === "react" && (
                                                        <FaReact aria-hidden="true" className="opacity-80" />
                                                    )}
                                                    {tech.icon === "next" && (
                                                        <SiNextdotjs
                                                            aria-hidden="true"
                                                            className="opacity-80"
                                                        />
                                                    )}
                                                    {tech.icon === "typescript" && (
                                                        <SiTypescript
                                                            aria-hidden="true"
                                                            className="opacity-80"
                                                        />
                                                    )}
                                                    {tech.icon === "css" && (
                                                        <FaCss3Alt
                                                            aria-hidden="true"
                                                            className="opacity-80"
                                                        />
                                                    )}
                                                    {tech.icon === "angular" && (
                                                        <FaAngular
                                                            aria-hidden="true"
                                                            className="opacity-80"
                                                        />
                                                    )}
                                                    {tech.icon === "html" && (
                                                        <FaHtml5
                                                            aria-hidden="true"
                                                            className="opacity-80"
                                                        />
                                                    )}
                                                    {tech.icon === "javascript" && (
                                                        <FaJs aria-hidden="true" className="opacity-80" />
                                                    )}

                                                    {tech.icon === "zustand" && (
                                                        <span
                                                            aria-hidden="true"
                                                            className="flex h-5 w-5 items-center justify-center rounded-full bg-[#928476] text-[10px] font-medium text-[#f9f9f9]"
                                                        >
                                                            Z
                                                        </span>
                                                    )}

                                                    {tech.icon === "firebase" && (
                                                        <span
                                                            aria-hidden="true"
                                                            className="flex h-5 w-5 items-center justify-center rounded-full bg-[#928476] text-[10px] font-medium text-[#f9f9f9]"
                                                        >
                                                            F
                                                        </span>
                                                    )}

                                                    {tech.icon === "supabase" && (
                                                        <span
                                                            aria-hidden="true"
                                                            className="flex h-5 w-5 items-center justify-center rounded-full bg-[#928476] text-[10px] font-medium text-[#f9f9f9]"
                                                        >
                                                            S
                                                        </span>
                                                    )}

                                                    <span>{tech.name}</span>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.article>
                            </AnimatePresence>
                        </div>

                        <button
                            type="button"
                            onClick={handleNext}
                            aria-label={t.projects.next}
                            className="absolute -right-8 top-[36%] z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#d8cbc1] bg-[#f7f3ee]/90 text-lg text-[#6f6258] transition hover:scale-105 hover:bg-[#f1ebe5] md:flex"
                        >
                            →
                        </button>
                    </div>

                    <div className="mt-6 flex items-center justify-center gap-6">
                        <button
                            type="button"
                            onClick={handlePrev}
                            aria-label={t.projects.previous}
                            className="text-2xl text-[#6f6258] transition hover:opacity-70 md:hidden"
                        >
                            ←
                        </button>

                        <span className="text-[11px] uppercase tracking-[0.24em] text-[#75695f]">
                            {page + 1} / {projectsData.length}
                        </span>

                        <button
                            type="button"
                            onClick={handleNext}
                            aria-label={t.projects.next}
                            className="text-2xl text-[#6f6258] transition hover:opacity-70 md:hidden"
                        >
                            →
                        </button>
                    </div>
                </motion.div>
            </div >
        </section >
    );
}