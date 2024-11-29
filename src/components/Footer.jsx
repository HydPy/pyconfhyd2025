import Link from 'next/link';
import React from 'react';

import Icon from '@/components/Icon';
import { CONFERENCE, SOCIALS, PAST_EDITIONS, ASSETS } from '@/details';

const Footer = () => {
  return (
    <footer>
      <div
        className="mt-4"
        style={{
          backgroundImage: `url(${ASSETS.monumentsSketchUrl})`,
          backgroundPosition: 'center',
          height: '100px',
          ariaLabel: ASSETS.monumentsSketchAlt,
        }}
      ></div>
      <div className="bg-gradient-to-r from-secondary-light-700 to-secondary-light-800 p-4">
        <div className="sm:w-4/6 flex flex-wrap justify-between mx-auto">
          <div className="flex flex-col flex-wrap">
            <div className="font-medium text-gray-50">Contact Us On</div>
            <div className="flex flex-row my-2">
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
          </div>
          <div className="flex flex-col my-2">
            <div className="col font-medium text-gray-50">Past Editions</div>
            {PAST_EDITIONS.map((item, index) => (
              <Link
                className="col text-gray-300 hover:text-gray-50 mt-1"
                key={index}
                href={item.url}
                target="_blank"
                aria-label={item.ariaLabel}
              >
                {item.year}
              </Link>
            ))}
          </div>
        </div>
        <hr className="h-px mt-2 text-gray-50" />
        <div className="text-center mt-4 text-gray-100">
          {CONFERENCE.copyrightTitle}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
