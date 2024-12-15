import { ABOUT_HYDPY } from '@/details';
import Image from 'next/image';
import Link from 'next/link';

export default function MeetOrganizers() {
  return (
    <div className="flex flex-col items-center mx-6 my-8">
      <h2 className="text-4xl font-bold text-center text-gray-950 dark:text-gray-50 mb-8">
        {ABOUT_HYDPY.title}
      </h2>
      <div className="flex flex-col lg:flex-row-reverse gap-3 lg:gap-0">
        <div className="flex flex-col items-center gap-3">
          <Image
            src={ABOUT_HYDPY.hydPyLogoUrl}
            alt={ABOUT_HYDPY.hydPyLogoAlt}
            className="rounded-lg"
            width={400}
            height={400}
          />
          <p className="text-lg md:text-xl">
            <Link
              className="text-gray-950 dark:text-gray-50 underline"
              href={ABOUT_HYDPY.hydPyUrl}
              target="_blank"
            >
              {ABOUT_HYDPY.hydPyLinkText}
            </Link>
          </p>
        </div>
        <p className="text-lg md:text-xl max-w-2xl  text-gray-600 dark:text-gray-400">
          {ABOUT_HYDPY.description}
        </p>
      </div>
    </div>
  );
}
