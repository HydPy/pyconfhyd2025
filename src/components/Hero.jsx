import Image from 'next/image';
import Link from 'next/link';
import { CONFERENCE, HERO_BANNER, ASSETS } from '@/details';
import Icon from '@/components/Icon';

const Hero = () => {
  return (
    <section className="flex flex-col mx-8 my-6 items-center justify-center h-[550px] sm:h-[500px]">
      {/*  For SEO */}
      <h1 className="hidden">{CONFERENCE.title}</h1>
      <Image
        src={ASSETS.logoUrl}
        alt={ASSETS.logoAlt}
        priority={true}
        width={600}
        height={201}
      />
      <p className="my-6 text-center text-gray-600 dark:text-gray-400 text-lg md:text-xl">
        {CONFERENCE.announcement}
      </p>
      <p className="text-2xl font-bold text-center text-gray-950 dark:text-gray-50 mb-8">
        {CONFERENCE.dates}
      </p>
      <div className="flex flex-col sm:flex-row">
        <Link
          href={HERO_BANNER.volunteerFormUrl}
          target="_blank"
          className="flex justify-center"
        >
          <button className="inline-flex mt-2 sm:mr-4 bg-secondary-light-600 px-5 py-3 font-medium hover:bg-secondary-light-700 text-gray-50 border rounded-lg">
            <Icon name="VolunteerActivism" size={20} />
            <span className="ml-2">BECOME A VOLUNTEER</span>
          </button>
        </Link>
        <Link href={HERO_BANNER.cfpUrl} target="_blank">
          <button className="inline-flex mt-2 bg-primary-light-700 px-5 py-3 font-medium hover:bg-primary-light-800 text-gray-50 border rounded-lg">
            <Icon name="MdCampaign" size={20} />
            <span className="ml-2">SUBMIT YOUR PROPOSAL</span>
          </button>
        </Link>
      </div>
      <Link href="https://forms.gle/d5cg5WpayP9mEfAm9" target="_blank">
        <button className="inline-flex mt-2 bg-primary-light-700 px-5 py-3 font-medium hover:bg-primary-light-800 text-gray-50 border rounded-lg">
          <Icon name="HandHoldingHeart" size={20} />
          <span className="ml-2">INTERESTED IN SPONSORING</span>
        </button>
      </Link>
    </section>
  );
};

export default Hero;
