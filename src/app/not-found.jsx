import { Heading, Paragraph } from '@/components/Typography';
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
      <Paragraph className="px-10 font-semibold text-center text-gray-950 dark:text-gray-50 ">
        This page slipped through our Pythonic loops — let’s get you back on
        track!
      </Paragraph>
      <Link href={"/"}>
      <button className="mt-4 bg-[#FA8624] hover:bg-[#009EA8] duration-300 ease-in-out font-semibold text-xl text-white px-4 py-3 rounded-md">Home.py🐍</button>
      </Link>
    </div>
  );
};
export default NotFound;
