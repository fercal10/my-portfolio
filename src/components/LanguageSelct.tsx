"use client"
import { useEffect, useState } from 'react'

type Props = {
    language: string,
    setLanguage: (input: string) => void,
}

export default function LanguageSelct({ language, setLanguage }: Props) {



    const toggleLanguage = () => {
        if (language === "en") {
            changeLanguage("es");
        } else {
            changeLanguage("en");
        }
    };

    const changeLanguage = (lng: string) => {
        if (lng === language) return;
        setLanguage(lng);
        localStorage.setItem("language", lng);
    };

    //   useEffect(() => {
    //     // changeLanguage(i18n.language);
    //   }, [i18n.language]);

    return (
        <div
            onClick={toggleLanguage}
            className="flex flex-col justify-center p-3 items-center bg-[#1c053a9c] dark:bg-[#af72ff56] rounded-xl relative overflow-hidden  aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out"
        >
            <p className="font-semibold mt-2 uppercase text-white dark:text-white text-lg md:text-xl">
                {language}
            </p>
            <p className="font-bold transition duration-300 ease-in-out text-[8px] ">
                <span className={language === "en" ? "text-purple-400" : "text-white"}>EN</span>{" "}
                <span className={language === "es" ? "text-purple-400" : "text-white"}>ES</span>
            </p>
        </div>
    )
}