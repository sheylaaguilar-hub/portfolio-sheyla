"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Rocket, Heart, ShieldCheck, Sparkles } from "lucide-react";
import { useLanguage } from "../i18n/LanguageProvider";

const qualityIcons = [Rocket, Heart, ShieldCheck, Sparkles];

export default function About() {
    const { t } = useLanguage();
    const prefersReducedMotion = useReducedMotion();

    return (
        <section
            id="about"
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
                    className="mx-auto max-w-232 text-center"
                >
                    <p className="mb-5 text-[11px] uppercase tracking-[0.22em] text-[#75695f]">
                        {t.about.label}
                    </p>

                    <h2 className="font-editorial text-[3rem] leading-[0.95] tracking-tight text-[#4f433b] sm:text-[4rem] lg:text-[5rem]">
                        {t.about.title}
                    </h2>

                    <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[#6f6258] md:text-base">
                        {t.about.description}
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
                    className="mx-auto mt-12 grid max-w-248 grid-cols-1 gap-4 sm:grid-cols-2 md:mt-14"
                >
                    {t.about.qualities.map((item, index) => {
                        const Icon = qualityIcons[index];

                        return (
                            <motion.article
                                key={item.title}
                                initial={
                                    prefersReducedMotion
                                        ? false
                                        : { opacity: 0, y: 24, filter: "blur(6px)" }
                                }
                                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.08 + index * 0.05,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                whileHover={prefersReducedMotion ? undefined : { y: -3 }}
                                className="rounded-[22px] border border-[#ded3c8] bg-white/45 p-5 shadow-[0_10px_28px_rgba(0,0,0,0.025)] transition-all duration-300 hover:border-[#d3c5b7] hover:bg-white/60"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d8cbc1] bg-[#f7f3ee] text-[#6f6258]">
                                        <Icon aria-hidden="true" size={20} strokeWidth={1.5} />
                                    </div>

                                    <div>
                                        <h3 className="font-editorial text-[1.45rem] leading-none text-[#4f433b]">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-[#6f6258]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}