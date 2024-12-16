import React from 'react';
import dynamic from 'next/dynamic';
import SponsorCard from './SponsorCard';
import {SPONSORS} from '@/sponsors';

const SponsorsSection = () => {
  const {
    platinumSponsors,
    goldSponsors,
    silverSponsors,
  } = SPONSORS;

  return (
    <section className="py-4 sm:py-8 lg:py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <h2 className="text-4xl font-bold text-primary dark:text-gray-50 mb-4 text-center">
        Sponsors
      </h2>
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 max-w-4xl">
        {/* Platinum Sponsors */}
        {platinumSponsors.length > 0 && (
          <div className="mb-12 sm:mb-20">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#00857C] text-center mb-8 sm:mb-12 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:w-16 after:h-1 after:bg-[#FF8C00] after:transform after:-translate-x-1/2">
              Platinum Sponsors
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mx-auto max-w-3xl">
              {platinumSponsors.map((sponsor) => (
                <SponsorCard key={sponsor.id} {...sponsor} />
              ))}
            </div>
          </div>
        )}

        {/* Gold Sponsors */}
        {goldSponsors.length > 0 && (
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#00857C] text-center mb-6 sm:mb-8 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:w-16 after:h-1 after:bg-[#FF8C00] after:transform after:-translate-x-1/2">
              Gold Sponsors
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {goldSponsors.map((sponsor) => (
                <SponsorCard key={sponsor.id} {...sponsor} />
              ))}
            </div>
          </div>
        )}

        {/* Silver Sponsors */}
        {silverSponsors.length > 0 && (
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#00857C] text-center mb-6 sm:mb-8 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:w-16 after:h-1 after:bg-[#FF8C00] after:transform after:-translate-x-1/2">
              Silver Sponsors
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {silverSponsors.map((sponsor) => (
                <SponsorCard key={sponsor.id} {...sponsor} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SponsorsSection;