import Image from 'next/image';
import { KEYNOTE_SPEAKER } from '@/speakers';
import { Heading } from './Typography';
import MdxLayout from '@/components/MdxLayout';
import AnthonyShawDescription from '@/keynotes/anthonyShaw.mdx';
import Icon from '@/components/Icon';
import Link from 'next/link';

export function KeynoteSpeaker() {
  const { name, title, speakerImgUrl, speakerImgAlt, socials } = KEYNOTE_SPEAKER;
  return (
    <section
      id="keynote-speaker"
      className="scroll-mt-20 flex flex-col items-center py-6 w-11/12 lg:w-5/6 mx-auto"
    >
      <Heading
        tagLevel={2}
        level={1}
        className="text-center my-8 text-secondary-600 dark:text-secondary-400"
      >
        {title}
      </Heading>
      <div className="flex flex-col items-center">
        <div className="flex md:flex-row flex-col">
          {/* Left Section */}
          <div className="flex flex-col md:w-1/2 items-center">
            {/* Speaker Photo */}
            <div className="w-10/12 md:w-100">
              <Image
                src={speakerImgUrl}
                alt={speakerImgAlt}
                width={240}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Speaker Name */}
            <Heading
              tagLevel={3}
              level={2}
              className="text-center my-4 text-secondary-600 dark:text-secondary-400"
            >
              {name}
            </Heading>
          </div>
          {/* Right Section */}
          <div className="bg-primary dark:bg-secondary md:mt-8 text-gray-50 md:w-2/5">
            <div className="">
              <MdxLayout className="text-gray-600 dark:text-gray-400">
                <AnthonyShawDescription />
              </MdxLayout>
            </div>
            <div className="flex flex-row flex-wrap mt-8 justify-center">
              {socials.map((item, index) => (
                <Link
                  key={index}
                  className="text-secondary-600 hover:text-secondary-950 dark:text-secondary-400 dark:hover:text-gray-50 mr-2"
                  href={item.url}
                  target="_blank"
                  aria-label={item.ariaLabel}
                  rel="noopener noreferrer"
                >
                  <Icon name={item.name} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
