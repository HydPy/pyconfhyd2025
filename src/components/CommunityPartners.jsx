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
        <div className="flex flex-col sm:flex-row justify-center items-center my-2">
          <div className="flex flex-col sm:flex-row justify-center items-center my-2">
            <Link
              href={KEY_LINKS.CommunityPartnersProspectusUrl}
              target="_blank"
              className="mt-2 sm:mr-4 px-5 py-3 bg-secondary-600 hover:bg-secondary-700 border rounded-lg"
              rel="noopener noreferrer"
            >
              <div className="inline-flex items-center font-medium text-gray-50">
                <Span>{KEY_LINKS.CommunityPartnersProspectusLabel}</Span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityPartners;
