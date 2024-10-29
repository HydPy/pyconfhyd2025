import './globals.css';
import { CONFERENCE } from '@/details';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: CONFERENCE.title,
  description: CONFERENCE.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
