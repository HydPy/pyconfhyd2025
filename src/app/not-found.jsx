import { Heading, Paragraph, Span } from '@/components/Typography';
import Image from 'next/image';
import { ASSETS } from '@/conference';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="w-full h-[70vh] flex flex-col items-center justify-center">
      <div className="relative">
        <Image
          className="animate-bounce"
          src={ASSETS.navbarLogoUrl}
          alt="PyConf Hyderabad 2025 Logo"
          width={100}
          height={100}
        />
      </div>
      <Heading
        tagLevel={1}
        level={1}
        className="text-center my-3 text-secondary-600 dark:text-secondary-400"
      >
        404 - Page Not Found
      </Heading>
      <Paragraph className="px-10 font-semibold text-center text-gray-900 dark:text-gray-100 ">
        This page slipped through our Pythonic loops — let’s get you back on
        track!
      </Paragraph>
      <Link href={'/'} className="mt-5   px-5 py-3 bg-secondary-600 hover:bg-secondary-700 border rounded-lg">
        <div className="inline-flex items-center font-medium text-gray-50">
          <Span>Home.py🐍</Span>
        </div>
      </Link>
    </div>
  );
};
export default NotFound;
