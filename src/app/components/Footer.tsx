"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useLanguage } from "../i18n/LanguageProvider";

export default function Footer() {
    const prefersReducedMotion = useReducedMotion();
    const { t } = useLanguage();

    const socialLinks = [
        {
            href: "mailto:aguilargutierrezsheyla@gmail.com",
            label: t.footer.cta,
            icon: <FiMail size={18} aria-hidden="true" />,
        },
        {
            href: "https://es.linkedin.com/",
            label: "LinkedIn",
            icon: <FaLinkedinIn size={16} aria-hidden="true" />,
        },
        {
            href: "https://github.com/sheylaaguilar-hub",
            label: "GitHub",
            icon: <FaGithub size={18} aria-hidden="true" />,
        },
    ];

    return (
        <footer
            id="contact"
            className="scroll-mt-24 bg-[#f7f3ee] px-5 pt-16 pb-8 md:px-8 md:pt-20 lg:px-12 lg:pt-2"
        >
            <div className="container-main">
                <motion.div
                    initial={
                        prefersReducedMotion
                            ? false
                            : { opacity: 0, y: 80, filter: "blur(16px)", scale: 0.98 }
                    }
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        scale: 1,
                    }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                        duration: 1.15,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative mx-auto max-w-350 overflow-hidden rounded-[30px] border border-[#e2d8ce] bg-[#f3ede7] px-6 py-12 text-center shadow-[0_14px_38px_rgba(0,0,0,0.035)] md:px-10 md:py-14 lg:px-10"
                >
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-linear-to-r from-transparent via-[#c8aa78]/45 to-transparent"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/35 blur-3xl"
                    />

                    <div className="relative z-10">
                        <p className="mb-5 text-[10px] uppercase tracking-[0.24em] text-[#75695f]">
                            {t.footer.label}
                        </p>

                        <h2 className="font-editorial text-[2.60rem] leading-[0.98] tracking-tight text-[#4f433b] sm:text-[3rem]">
                            {t.footer.title}
                        </h2>

                        <p className="mx-auto mt-6 max-w-136 text-sm leading-6 text-[#6f6258] md:text-base">
                            {t.footer.description}
                        </p>

                        <div className="mt-8 flex flex-col items-center gap-5">
                            <a
                                href="mailto:aguilargutierrezsheyla@gmail.com"
                                aria-label={t.footer.cta}
                                className="group inline-flex items-center gap-2 rounded-full border border-[#d8cbc1] bg-[#f7f3ee]/70 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-[#4f433b] transition-all duration-300 hover:bg-white/80 hover:shadow-[0_0_20px_rgba(200,170,120,0.22)]"
                            >
                                {t.footer.cta}
                                <span
                                    aria-hidden="true"
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                >
                                    →
                                </span>
                            </a>

                            <div className="flex items-center justify-center gap-3 text-[#6f6258]">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        aria-label={link.label}
                                        target={link.href.startsWith("http") ? "_blank" : undefined}
                                        rel={
                                            link.href.startsWith("http")
                                                ? "noopener noreferrer"
                                                : undefined
                                        }
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8cbc1] bg-[#f7f3ee]/65 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/80 hover:text-[#4f433b]"
                                    >
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* bottom */}
                <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-[#e8dfd7] pt-6 text-center md:flex-row md:text-left">
                    <p className="text-xs text-[#75695f]">
                        © {new Date().getFullYear()} Sheyla Aguilar. {t.footer.rights}
                    </p>

                    <a
                        href="#hero"
                        className="text-[10px] uppercase tracking-[0.22em] text-[#75695f] transition hover:text-[#4f433b]"
                    >
                        {t.footer.backToTop}
                    </a>
                </div>
            </div>
        </footer>
    );
}