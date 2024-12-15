import { ABOUT_HYDPY } from '@/details';
import Image from 'next/image';
import Link from 'next/link';

export default function MeetOrganizers() {
  return (
    <div className="flex flex-col lg:flex-col md:flex-start justify-center items-center p-6 pt-24 pb-12">
      <h2 className="text-4xl font-bold text-primary dark:text-gray-50 mb-4 text-center">
          {ABOUT_HYDPY.title}
      </h2>
      <div className="flex flex-col lg:flex-row-reverse md:flex-col gap-6">
        <div className="flex flex-col justify-center items-center gap-3">
          <Image
            src={ABOUT_HYDPY.hydPyLogoUrl}
            alt={ABOUT_HYDPY.hydPyLogoAlt}
            className="rounded-lg"
            width={400}
            height={400}
          />
          <p className="text-lg md:text-xl mb-8">
            <Link
              className="text-primary dark:text-white underline"
              href={ABOUT_HYDPY.hydPyUrl}
            >
              {ABOUT_HYDPY.hydPyLinkText}
            </Link>
          </p>
        </div>
        <p className="text-lg md:text-xl max-w-2xl text-gray-600 dark:text-gray-400 mb-8">
          {ABOUT_HYDPY.description}
        </p>
      </div>
    </div>
  );
}
