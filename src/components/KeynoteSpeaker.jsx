import Image from 'next/image';
import { KEYNOTE_SPEAKER } from '@/speakers';
import { Heading, Paragraph } from './Typography';

export function KeynoteSpeaker() {
  const {
    name,
    title,
    description,
    speakerImgUrl,
    speakerImgAlt,
    recognitionsLabel,
    recognitions,
    authorLabel,
    author,
    contributionsLabel,
    contributions,
  } = KEYNOTE_SPEAKER;
  return (
    <section
      id="organizers"
      className="scroll-mt-20 flex flex-col items-center py-6 w-11/12 lg:w-5/6 mx-auto"
    >
      <Heading
        tagLevel={2}
        level={1}
        className="text-center my-8 text-secondary-600 dark:text-secondary-400"
      >
        {title}
      </Heading>
      <div className="flex flex-col gap-3 items-center lg:pl-20 lg:pr-20">
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-lg overflow-hidden">
          {/* Left Section */}
          <div className="space-y-8 justify-center items-center text-center md:text-left">
            {/* Speaker Photo */}
            <div className="relative lg:w-3xl lg:h-3xl w-2xl h-2xl">
              <Image
                src={speakerImgUrl}
                alt={speakerImgAlt}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Speaker Name */}
            <h1 className="text-gray-600 dark:text-gray-400 text-4xl font-bold text-center">
              {name}
            </h1>
          </div>

          {/* Right Section */}
          <div className="bg-primary p-8 text-white relative">
            <div className="space-y-8 relative z-10">
              <Paragraph className="text-gray-600 dark:text-gray-400 lg:w-4xl w-3xl">
                {description}
              </Paragraph>
              {/* Fellow Recognition */}
              <div className="text-gray-700 text-lg">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold mb-4">
                    {contributionsLabel}:
                  </h3>
                  <p className="ml-6">{contributions}</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold mt-6 mb-4">
                    {recognitionsLabel}:
                  </h3>
                  <ul className="list-disc ml-10">
                    {recognitions.map((value, index) => (
                      <li key={index}>{value}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold mt-6">{authorLabel}:</h3>
                  <p className="ml-6">{author}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
