'use client';
import { useTheme } from '@/components/ThemeContext';
import Icon from '@/components/Icon';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

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
