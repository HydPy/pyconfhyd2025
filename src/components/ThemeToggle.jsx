'use client';
import { useState, useEffect } from 'react';
import Icon from './Icon';

export const ThemeToggle = () => {
    const [theme, setTheme] = useState(null); // Start with `null` to indicate the theme is loading

    useEffect(() => {
        // Check initial theme preference
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
        setTheme(initialTheme);
        document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    if (theme === null) {
        // Prevent rendering until theme is determined
        return null;
    }

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Toggle theme"
        >
            {theme === 'light' ? (
                <Icon name="Moon" size={24} className="text-gray-800" />
            ) : (
                <Icon name="Sun" size={24} className="text-yellow-500" />
            )}
        </button>
    );
};
