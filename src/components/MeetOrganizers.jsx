import { ABOUT_HYDPY } from '@/details';
import Image from 'next/image';

export default function MeetOrganizers() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center p-6 pt-12 pb-12 border-t-2 border-gray-300">
      <div className="max-w-3xl lg:mr-20">
        <h1 className="text-4xl font-bold text-[#001ccf] dark:text-white mb-4">
          {ABOUT_HYDPY.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
          {ABOUT_HYDPY.description}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <Image
          src={ABOUT_HYDPY.hydPyLogoUrl}
          alt="Event Design"
          className="rounded-lg"
          width={400}
          height={400}
        />
        <p className="text-lg md:text-xl mb-8">
          <a
            className="text-[#001ccf] dark:text-white underline"
            href={ABOUT_HYDPY.hydPyLinkUrl}
            target="_blank"
          >
            {ABOUT_HYDPY.hydPyLinkText}
          </a>
        </p>
      </div>
    </div>
  );
}
