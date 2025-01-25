import React from 'react';
import Link from 'next/link';

import { Heading, Paragraph, Span } from '@/components/Typography';
import { COMMUNITY_PARTNERS_INFO } from '@/communityPartners';
import { KEY_LINKS } from '@/conference';

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
        <Paragraph className="lg:text-center text-gray-600 dark:text-gray-400 lg:w-11/12">
          {COMMUNITY_PARTNERS_INFO.description}
        </Paragraph>
        <div className="flex flex-col sm:flex-row justify-center my-2">
          <Link
            href={KEY_LINKS.CommunityPartnersProspectusUrl}
            target="_blank"
            className="flex justify-center items-center"
            rel="noopener noreferrer"
          >
            <button className="inline-flex mt-2 sm:mr-4 items-center bg-secondary-600 px-5 py-3 font-medium hover:bg-secondary-700 text-gray-50 border rounded-lg">
              <Span>{KEY_LINKS.CommunityPartnersProspectusLabel}</Span>
            </button>
          </Link>
          <Link
            href={KEY_LINKS.CommunityPartnersProspectusRegisterFormUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="inline-flex mt-2 items-center bg-primary-700 px-5 py-3 font-medium hover:bg-primary-800 text-gray-50 border rounded-lg">
              <Span>
                {KEY_LINKS.CommunityPartnersProspectusRegisterFormLabel}
              </Span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommunityPartners;
