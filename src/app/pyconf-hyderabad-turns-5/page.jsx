'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { Heading, Paragraph } from '@/components/Typography';
import { PEOPLE_IMAGES } from '@/people';

function PhotoFlicker({ images }) {
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndexes(
        images
          .map((_, index) => (Math.random() > 0.25 ? index : -1))
          .filter((i) => i !== -1)
      );
    }, 2000); // Adjust flicker speed

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative grid grid-cols-4 md:grid-cols-8 lg:grid-cols-8 xl:grid-cols-10 gap-4 p-4">
      {images.map((image, index) => (
        <figure className="w-16 h-16 lg:w-32 lg:h-32" key={index}>
          <div className="relative h-full w-full rounded-xl">
            <Image
              className={`w-full object-cover rounded-lg shadow-lg transition-opacity duration-500 ${
                visibleIndexes.includes(index) ? 'opacity-100' : 'opacity-0'
              }`}
              src={image.imgUrl}
              alt={image.imgAlt}
              fill
            />
          </div>
          <figcaption className="sr-only">{image.imgAlt}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <section className="flex flex-col items-center py-6 w-11/12 mx-auto">
      <Heading
        tagLevel={1}
        level={1}
        className="text-center my-8 text-secondary-600 dark:text-secondary-400"
      >
        🎉 PyConf Hyderabad Turns Five
      </Heading>
      <Paragraph className="my-2 text-center">
        A heartfelt thank you to all our volunteers, speakers and sponsors who have been
        the driving force behind every edition of PyConf Hyderabad. Your
        dedication, passion, and efforts have made all five editions possible,
        shaping a thriving community for Python enthusiasts. We couldn’t have
        done it without you!
      </Paragraph>
      <PhotoFlicker images={PEOPLE_IMAGES} />
    </section>
  );
}
