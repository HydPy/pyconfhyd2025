'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Icon from '@/components/Icon';

export const ThemeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        aria-label="Toggle theme"
      >
        <Icon name="Moon" size={24} className="text-gray-800" />
      </button>
    );
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;

  const toggleTheme = () => {
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
      aria-label="Toggle theme"
    >
      {currentTheme === 'light' ? (
        <Icon name="Moon" size={24} className="text-gray-800" />
      ) : (
        <Icon name="Sun" size={24} className="text-yellow-500" />
      )}
    </button>
  );
};
