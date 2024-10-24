"use client"

import React, { useEffect, useState } from 'react';
import { LuSunMedium, LuMoon } from "react-icons/lu";

function ThemeButton() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        const htmlElement = document.documentElement;
        const newIsDarkMode = htmlElement.classList.toggle('dark');
        setIsDarkMode(newIsDarkMode);
        localStorage.setItem('theme', newIsDarkMode ? 'dark' : 'light');
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const isDark = savedTheme === 'dark';
        setIsDarkMode(isDark);
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    return (
        <label className="swap swap-rotate btn btn-ghost">
            <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />

            <LuSunMedium className="swap-on text-xl" aria-label="Açık Tema" />
            <LuMoon className="swap-off text-xl" aria-label="Koyu Tema"  />
        </label>
    );
}

export default ThemeButton;
