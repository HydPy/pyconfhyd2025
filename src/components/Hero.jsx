import Image from 'next/image';
import Link from 'next/link';
import { CONFERENCE, HERO_BANNER, ASSETS } from '@/details';
import Icon from '@/components/Icon';

const Hero = () => {
  return (
    <section className="px-8 py-4 sm:py-8">
      <div className="flex flex-col items-center">
        {/*  For SEO */}
        <h1 className="hidden">{CONFERENCE.title}</h1>
        <Image
          src={ASSETS.logoUrl}
          alt={ASSETS.logoAlt}
          priority={true}
          width={600}
          height={204.4}
        />
        <p className="my-6 text-gray-600 dark:text-gray-400 md:text-lg lg:text-1xl">
          {CONFERENCE.announcement}
        </p>
        <div className="flex flex-col sm:flex-row">
          <Link href={HERO_BANNER.volunteerFormUrl} target="_blank">
            <button className="inline-flex mt-1 items-center justify-center bg-secondary-light-600 px-5 py-3 font-medium hover:bg-secondary-light-700 text-center text-gray-50 border rounded-lg mr-4">
              <Icon name="VolunteerActivism" size={20} />
              <span className="ml-2">BECOME A VOLUNTEER</span>
            </button>
          </Link>
          <Link href={HERO_BANNER.cfpUrl} target="_blank">
            <button className="inline-flex mt-1 items-center justify-center bg-primary-light-700 px-5 py-3 font-medium hover:bg-primary-light-800 text-center text-gray-50 border rounded-lg">
              <Icon name="MdCampaign" size={20} />
              <span className="ml-2">SUBMIT YOUR PROPOSAL</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
