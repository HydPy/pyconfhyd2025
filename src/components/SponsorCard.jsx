import React from 'react';
import Image from 'next/image';

const SponsorCard = ({ name, description, website, logoUrl }) => {

  return (
    <div className="sponsor-card group">
      <a 
        href={website} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block h-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-lg"
      >
        <div className="h-full bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-lg p-3 transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
          <div className="flex justify-center items-center h-20 sm:h-24 md:h-28 lg:h-32 sm:mb-3 md:mb-4">
            <div className="relative w-full h-full">
                <Image
                    src={logoUrl}
                    alt={`${name} logo`}
                    fill
                    className="object-contain p-2 sm:p-3"
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    priority={true}
                />
            </div>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-primary dark:text-primary mb-1 sm:mb-2 group-hover:text-primary-dark dark:group-hover:text-primary truncate">
            {name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm line-clamp-3">{description}</p>
        </div>
      </a>
    </div>
  );
};

export default SponsorCard;
