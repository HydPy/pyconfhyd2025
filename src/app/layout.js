import './globals.css';
import { CONFERENCE } from '@/conference';
import { metadata } from '@/metadata';
import { ThemeProvider } from 'next-themes';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeToggle } from '@/components/ThemeToggle';

import InfoAlert from '@/components/InfoAlert';
import Link from 'next/link';
import { Span } from '@/components/Typography';
export { metadata };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <InfoAlert>
            <Span level={5} >
              You are browsing the archive for the 2025 event. Check out the
              <Link href={CONFERENCE.latestYearSiteURL} className="px-1 underline">
                latest edition
              </Link>
              instead!
            </Span>
          </InfoAlert>
          <Header themeToggle={<ThemeToggle />} />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
