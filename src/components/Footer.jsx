import Link from 'next/link';
import React from 'react';

import Icon from '@/components/Icon';
import { CONFERENCE, SOCIALS } from '@/details';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary-light-800 to-secondary-light-800 text-gray-50 p-4">
      <div className="mx-auto w-full">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex sm:justify-center ">
            {SOCIALS.map((item, index) => (
              <Link
                key={index}
                className="text-gray-300 hover:text-gray-50 mr-2"
                href={item.url}
                target="_blank"
                aria-label={item.ariaLabel}
              >
                <Icon name={item.name} />
              </Link>
            ))}
          </div>
          <div className="text-sm mt-3 sm:mt-0 text-center">
            {CONFERENCE.copyrightTitle}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
