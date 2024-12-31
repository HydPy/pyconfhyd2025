import Image from 'next/image';
import Link from 'next/link';
import { CONFERENCE, KEY_LINKS, ASSETS } from '@/details';
import Icon from '@/components/Icon';

import { Heading, Paragraph, Span } from '@/components/Typography';

const Hero = () => {
  return (
    <section className="flex flex-col py-6 items-center w-11/12 lg:w-5/6 mx-auto">
      {/*  For SEO */}
      <Heading tagLevel={2} level={1} className="hidden">
        {CONFERENCE.title}
      </Heading>
      <div className="relative w-full sm:w-3/4 md:w-1/2 aspect-[2/1]">
        <Image src={ASSETS.logoUrl} alt={ASSETS.logoAlt} priority={true} fill />
      </div>
      <Span
        level={1}
        className="text-center font-semibold text-secondary-600 dark:text-secondary-400"
      >
        {CONFERENCE.dates}
      </Span>
      <Paragraph className="mt-3 mb-6 text-center text-gray-600 dark:text-gray-400">
        {CONFERENCE.announcement}
      </Paragraph>
      <div className="flex flex-col sm:flex-row">
        <Link
          href={KEY_LINKS.volunteerFormUrl}
          target="_blank"
          className="flex justify-center"
        >
          <button className="inline-flex mt-2 sm:mr-4 items-center bg-secondary-600 px-5 py-3 font-medium hover:bg-secondary-700 text-gray-50 border rounded-lg">
            <Icon name="VolunteerActivism" size={20} />
            <Span className="ml-2">BECOME A VOLUNTEER</Span>
          </button>
        </Link>
        <Link href={KEY_LINKS.cfpUrl} target="_blank">
          <button className="inline-flex mt-2 items-center bg-primary-700 px-5 py-3 font-medium hover:bg-primary-800 text-gray-50 border rounded-lg">
            <Icon name="MdCampaign" size={20} />
            <Span className="ml-2">SUBMIT YOUR PROPOSAL</Span>
          </button>
        </Link>
      </div>
      <Link href={KEY_LINKS.interestedInSponsoringUrl} target="_blank">
        <button className="inline-flex mt-2 items-center bg-primary-700 px-5 py-3 font-medium hover:bg-primary-800 text-gray-50 border rounded-lg">
          <Icon name="HandHoldingHeart" size={20} />
          <Span className="ml-2">INTERESTED IN SPONSORING</Span>
        </button>
      </Link>
    </section>
  );
};

export default Hero;
