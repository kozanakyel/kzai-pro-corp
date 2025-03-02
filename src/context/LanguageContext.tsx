'use client';

import { createContext, useState, useContext, ReactNode } from 'react';
import { en } from '../translations/en';
import { tr } from '../translations/tr';

type LanguageContextType = {
    language: string;
    setLanguage: (lang: string) => void;
    t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
    language: 'tr',
    setLanguage: () => { },
    t: () => '',
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState('tr');

    const translations: { [key: string]: { [key: string]: string } } = {
        en: en,
        tr: tr,
    };

    const t = (key: string): string => {
        if (!translations[language]) return key;
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};
