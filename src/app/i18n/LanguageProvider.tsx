"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations, type Language } from "./translations";

type LanguageContextType = {
    language: Language;
    setLanguage: (language: Language) => void;
    t: (typeof translations)[Language];
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>("en");

    useEffect(() => {
        const savedLanguage = localStorage.getItem("language") as Language | null;

        if (savedLanguage === "en" || savedLanguage === "es") {
            requestAnimationFrame(() => {
                setLanguageState(savedLanguage);
            });
        }
    }, []);

    const setLanguage = (newLanguage: Language) => {
        setLanguageState(newLanguage);
        localStorage.setItem("language", newLanguage);
    };

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage,
                t: translations[language],
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error("useLanguage must be used inside LanguageProvider");
    }

    return context;
}