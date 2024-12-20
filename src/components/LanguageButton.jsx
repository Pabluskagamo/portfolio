
import React, { useState } from "react";
import { GB, ES } from 'country-flag-icons/react/3x2'


const LngButton = () => {
    const [language, setLanguage] = useState("English");

    const changeLanguage = () => {
        if (language === 'English') {
            setLanguage('Español')
        } else {
            setLanguage('English')
        }
    }

    return (
        <button 
            className="px-2 py-2 text-xs flex flex-row content-center border text-center rounded-lg border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:focus:ring-blue-800"
            onClick={changeLanguage}
            >
            {language === 'English' ? <GB title="United States" className="size-4"/> : <ES title="United States" className="size-4"/>}
            <span className="px-1">{language}</span>
        </button>
    );
};


export default LngButton;

