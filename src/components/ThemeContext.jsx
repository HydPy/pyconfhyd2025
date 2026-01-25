'use client';

import { createContext, useContext, useState, useEffect } from 'react';

// Wrap the next-themes provider so server `layout.js` can import and use it
export const ThemeProvider = ({ children }) => {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      enableColorScheme
    >
      {children}
    </NextThemeProvider>
  );
};

// Small adapter hook to expose a simple { theme, toggleTheme } API
export const useTheme = () => {
  const { resolvedTheme, setTheme } = useNextTheme();

  const theme = resolvedTheme || 'light';

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [setTheme, theme]);

  return { theme, toggleTheme };
};
