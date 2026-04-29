"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Header from "./Header";
import { useLanguage } from "../i18n/LanguageProvider";

export default function Hero() {
    const { t } = useLanguage();

    const phrases = t.hero.phrases;
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) return;

        const currentPhrase = phrases[phraseIndex % phrases.length];
        let charIndex = 0;

        let typingInterval: ReturnType<typeof setInterval>;
        let nextPhraseTimeout: ReturnType<typeof setTimeout>;

        const startTyping = setTimeout(() => {
            setDisplayText("");
            typingInterval = setInterval(() => {
                charIndex += 1;
                setDisplayText(currentPhrase.slice(0, charIndex));
                if (charIndex === currentPhrase.length) {
                    clearInterval(typingInterval);
                    nextPhraseTimeout = setTimeout(() => {
                        setPhraseIndex((prev) => (prev + 1) % phrases.length);
                    }, 1600);
                }
            }, 45);
        }, 0);

        return () => {
            clearTimeout(startTyping);
            clearTimeout(nextPhraseTimeout);
            clearInterval(typingInterval);
        };
    }, [phraseIndex, phrases, prefersReducedMotion]);

    return (
        <section
            id="hero"
            className="relative flex min-h-[78svh] scroll-mt-24 items-center justify-center overflow-hidden bg-[#f7f3ee] pt-24 pb-6 md:min-h-[84svh] md:pt-28 md:pb-8 lg:min-h-[88svh] lg:pt-32 lg:pb-10"
        >
            <Header />
            <div
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
                aria-hidden="true"
            >
                <span className="font-editorial select-none text-[7rem] leading-none text-[#d9cec2]/18 sm:text-[10rem] md:text-[14rem] lg:text-[18rem]">
                    SA
                </span>
            </div>
            <div className="container-main relative z-10 flex flex-col items-center justify-center px-6 text-center">
                <motion.h1
                    initial={prefersReducedMotion ? false : { opacity: 0.98, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.22 }}
                    className="font-editorial text-[3.1rem] leading-[0.95] text-[#4f433b] sm:text-[4.4rem] md:text-[5.8rem] lg:text-[6.8rem]"
                >
                    Sheyla Aguilar
                </motion.h1>
                <div className="mt-5 flex min-h-10.5 w-full items-center justify-center sm:min-h-11.5">
                    <div className="inline-flex max-w-full items-center justify-center rounded-full border border-[#e8dfd7] bg-white/45 px-4 py-3 uppercase shadow-[0_12px_30px_rgba(0,0,0,0.025)] sm:px-5">
                        <p className="min-w-76 text-center text-[0.95rem] font-medium leading-none text-[#6f6258] sm:min-w-[24rem] sm:text-[1.05rem] md:text-[1.12rem]">
                            {prefersReducedMotion
                                ? phrases[phraseIndex % phrases.length]
                                : displayText}
                            <motion.span
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{
                                    duration: 0.9,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="ml-1 inline-block text-[#9c8f84]"
                            >
                                |
                            </motion.span>
                        </p>
                    </div>
                </div>
                <motion.p
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: 0.04 }}
                    className="mt-5 max-w-152 text-[0.98rem] leading-7 text-[#6f6258] sm:text-[1rem] md:text-[1.04rem]"
                >
                    {t.hero.description}
                </motion.p>
                <motion.div
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: 0.08 }}
                    className="mt-7"
                >
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 rounded-full border border-[#d8cbc1] px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-[#6f6258] transition hover:bg-[#f1ebe5]"
                    >
                        {t.hero.cta}
                        <span aria-hidden="true">→</span>
                    </a>
                </motion.div>
                <div className="mt-8">
                    <a
                        href="#skills"
                        className="text-[10px] uppercase tracking-[0.24em] text-[#75695f]"
                    >
                        {t.hero.scroll}
                    </a>
                </div>
            </div>
        </section>
    );
}