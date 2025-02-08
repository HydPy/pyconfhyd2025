import React from 'react';
import Link from 'next/link';

import { Heading, Span } from '@/components/Typography';
import {
  COMMUNITY_PARTNERS_INFO,
  COMMUNITY_PARTNERS,
} from '@/communityPartners';
import { KEY_LINKS } from '@/conference';
import Image from 'next/image';

const PartnerCard = ({ name, title, logoUrl, logoAlt, hyperLink }) => {
  return (
    <Link
      href={hyperLink}
      className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-lg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex flex-col p-4 items-center bg-gray-50 dark:bg-gray-950 rounded-lg shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
        <Image
          src={logoUrl}
          alt={logoAlt}
          className="object-contain p-2"
          priority={true}
          width={250}
          height={150}
        />
        <Heading
          tagLevel={3}
          level={6}
          className="my-2 text-gray-950 dark:text-gray-50"
        >
          {name}
        </Heading>
        <Span>{title}</Span>
      </div>
    </Link>
  );
};

const CommunityPartners = () => {
  return (
    <section
      id="community-partners"
      className="scroll-mt-20 flex flex-col items-center py-6 w-11/12 lg:w-5/6 mx-auto"
    >
      <Heading
        tagLevel={2}
        level={1}
        className="text-center my-8 text-secondary-600 dark:text-secondary-400"
      >
        {COMMUNITY_PARTNERS_INFO.title}
      </Heading>
      <div className="flex flex-col items-center">
        {COMMUNITY_PARTNERS &&
          COMMUNITY_PARTNERS.map((partner, index) => (
            <PartnerCard key={index} {...partner} />
          ))}
      </div>
    </section>
  );
};

export default CommunityPartners;
