"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageProvider";

export default function Header() {
    const { language, setLanguage, t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { href: "#skills", label: t.nav.skills },
        { href: "#projects", label: t.nav.projects },
        { href: "#about", label: t.nav.about },
        { href: "#contact", label: t.nav.contact },
    ];

    const handleClose = () => setIsOpen(false);

    return (
        <header className="fixed left-0 top-0 z-50 w-full bg-[#f7f3ee]/78 backdrop-blur-md">
            <div className="container-main flex items-center justify-between px-5 py-5 md:px-8 md:py-6 lg:px-12">
                {/* LOGO */}
                <a
                    href="#hero"
                    aria-label="Go to hero section"
                    onClick={handleClose}
                    className="group inline-flex items-center justify-center"
                >
                    <Image
                        src="/images/logo.png"
                        alt="SA logo"
                        width={64}
                        height={64}
                        priority
                        className="object-contain opacity-80 transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-[1.03] group-hover:opacity-100 group-hover:drop-shadow-[0_0_6px_rgba(200,170,120,0.28)]"
                    />
                </a>

                {/* DESKTOP NAV */}
                <div className="hidden items-center gap-5 md:flex lg:gap-8">
                    <nav
                        aria-label="Primary navigation"
                        className="flex items-center gap-4 lg:gap-8"
                    >
                        {navItems.map((item) => (
                            <a key={item.href} href={item.href} className="nav-a">
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center">
                        <button
                            type="button"
                            onClick={() => setLanguage(language === "en" ? "es" : "en")}
                            aria-label="Change language"
                            className="inline-flex items-center rounded-full border border-[#d8cbc1] bg-[#f7f3ee] p-1"
                        >
                            <span
                                className={`px-3 py-1 text-[11px] uppercase tracking-[0.2em] rounded-full transition ${language === "en"
                                    ? "bg-[#4f433b] text-white"
                                    : "text-[#6f6258]"
                                    }`}
                            >
                                EN
                            </span>

                            <span
                                className={`px-3 py-1 text-[11px] uppercase tracking-[0.2em] rounded-full transition ${language === "es"
                                    ? "bg-[#4f433b] text-white"
                                    : "text-[#6f6258]"
                                    }`}
                            >
                                ES
                            </span>
                        </button>
                    </div>
                </div>

                {/* MOBILE */}
                <div className="flex items-center gap-3 md:hidden">
                    <button
                        type="button"
                        onClick={() => setLanguage(language === "en" ? "es" : "en")}
                        aria-label="Change language"
                        className="inline-flex items-center rounded-full border border-[#d8cbc1] bg-[#f7f3ee] p-1"
                    >
                        <span
                            className={`px-3 py-1 text-[11px] uppercase tracking-[0.2em] rounded-full transition ${language === "en"
                                ? "bg-[#4f433b] text-white"
                                : "text-[#6f6258]"
                                }`}
                        >
                            EN
                        </span>

                        <span
                            className={`px-3 py-1 text-[11px] uppercase tracking-[0.2em] rounded-full transition ${language === "es"
                                ? "bg-[#4f433b] text-white"
                                : "text-[#6f6258]"
                                }`}
                        >
                            ES
                        </span>
                    </button>

                    <button
                        type="button"
                        aria-label="Toggle navigation menu"
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e5ded5] bg-white/70 text-[#6f6258] transition duration-300 hover:bg-[#f1ebe5]"
                    >
                        <span className="relative block h-4 w-4">
                            <span
                                className={`absolute left-0 top-0.5 h-px w-4 bg-current transition-all duration-300 ${isOpen ? "top-2 rotate-45" : ""
                                    }`}
                            />
                            <span
                                className={`absolute left-0 top-2 h-px w-4 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""
                                    }`}
                            />
                            <span
                                className={`absolute left-0 top-3 h-px w-4 bg-current transition-all duration-300 ${isOpen ? "top-2 -rotate-45" : ""
                                    }`}
                            />
                        </span>
                    </button>


                </div>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0, y: -8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.98 }}
                            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute left -4 right-4 top-20 z-50 rounded-3xl border border-[#e3d8cf] bg-[#f7f3ee] p-4 shadow-[0_18px_50px_rgba(0,0,0,0.08)] md:hidden"
                        >
                            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
                                {navItems.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className="rounded-full px-4 py-2.5 text-[11px] uppercase tracking-[0.22em] text-[#6f6258] transition hover:bg-white/60 hover:text-[#4f433b]"
                                        onClick={handleClose}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}