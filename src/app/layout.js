import './globals.css';
import { CONFERENCE, ASSETS } from '@/details';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: CONFERENCE.title,
  description: CONFERENCE.description,
  icons: {
    icon: [
      { url: ASSETS.navbarLogoUrl },
      { url: ASSETS.navbarLogoUrl, sizes: '16x16', type: 'image/svg+xml' },
      { url: ASSETS.navbarLogoUrl, sizes: '32x32', type: 'image/svg+xml' },
    ],
    apple: { url: ASSETS.navbarLogoUrl },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
