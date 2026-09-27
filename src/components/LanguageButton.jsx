import React, { useEffect, useRef, useState } from "react";
import { HiChevronDown, HiOutlineGlobeAlt, HiCheck } from "react-icons/hi2";

const languages = [
    {
        code: "ES",
        locale: "es",
        label: "Español"
    },
    {
        code: "EN",
        locale: "en",
        label: "English"
    },
];

const LanguageButton = () => {
    const [open, setOpen] = useState(false);
    const [language, setLanguage] = useState("ES");
    const menuRef = useRef(null);

    useEffect(() => {
        const isEnglish = window.location.pathname.startsWith("/en");

        setLanguage(isEnglish ? "EN" : "ES");
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const currentLanguage = languages.find(
        (item) => item.code === language
    );

    const changeLanguage = (code) => {
        const selectedLanguage = languages.find(
            (item) => item.code === code
        );

        if (!selectedLanguage) return;

        const currentPath = window.location.pathname;
        const currentHash = window.location.hash;

        let newPath;

        if (selectedLanguage.locale === "en") {
            newPath = currentPath.replace(/^\/es(?=\/|$)/, "/en");
        } else {
            newPath = currentPath.replace(/^\/en(?=\/|$)/, "/es");
        }

        setLanguage(code);
        setOpen(false);

        window.location.href = `${newPath}${currentHash}`;
    };

    return (
        <div ref={menuRef} className="relative">
            <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                aria-haspopup="menu"
                aria-expanded={open}
                aria-label="Seleccionar idioma"
                className="
                    flex items-center gap-2
                    rounded-xl
                    border border-gray-200
                    bg-white/70
                    px-3 py-2
                    text-sm font-medium
                    text-gray-700
                    shadow-sm
                    backdrop-blur
                    transition-all duration-200
                    hover:border-gray-300
                    hover:bg-white
                    dark:border-gray-800
                    dark:bg-gray-900/70
                    dark:text-gray-200
                    dark:hover:border-gray-700
                    dark:hover:bg-gray-900
                "
            >
                <HiOutlineGlobeAlt className="h-4 w-4 text-gray-500 dark:text-gray-400" />

                <span>{currentLanguage.code}</span>

                <HiChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""
                        }`}
                />
            </button>

            {open && (
                <div
                    role="menu"
                    className="
                        absolute left-0 top-full mt-2
                        min-w-40
                        overflow-hidden
                        rounded-xl
                        border border-gray-200
                        bg-white/95
                        p-1
                        shadow-xl
                        backdrop-blur
                        dark:border-gray-800
                        dark:bg-gray-900/95
                        lg:bottom-full lg:top-auto lg:mt-0 lg:mb-2
                    "
                >
                    {languages.map(({ code, label }) => (
                        <button
                            key={code}
                            type="button"
                            role="menuitem"
                            onClick={() => changeLanguage(code)}
                            className="
                                flex w-full items-center gap-3
                                rounded-lg
                                px-3 py-2
                                text-sm
                                text-gray-700
                                transition
                                hover:bg-gray-100
                                dark:text-gray-200
                                dark:hover:bg-gray-800
                            "
                        >

                            <span className="flex-1 text-left">
                                {label}
                            </span>

                            {language === code && (
                                <HiCheck className="h-4 w-4 text-yellow-500" />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageButton;