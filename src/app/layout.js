import './globals.css';
import { metadata } from '@/metadata';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ThemeProvider } from '@/components/ThemeContext';

export { metadata };

export default function RootLayout({ children }) {
  const setInitialTheme = `
    (function() {
      try {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = savedTheme || (prefersDark ? 'dark' : 'light');
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {
        console.warn('Theme init failed:', e);
      }
    })();
  `;

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* This runs before the React app mounts, preventing flicker */}
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
      </head>
      <body className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100">
        <ThemeProvider>
          <Header themeToggle={<ThemeToggle />} />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
