import Image from 'next/image';
import Link from 'next/link';
import { CONFERENCE, HERO_BANNER } from '@/details';
import Icon from '@/components/Icon';

const Hero = () => {
  return (
    <section className="px-4 py-8">
      <div className="grid grid-cols-12 w-full">
        <div className="place-self-center col-span-12 lg:col-span-7">
          <h1 className="mb-4 text-3xl font-bold tracking-tight leading-none md:text-4xl lg:text-5xl">
            {CONFERENCE.title}
          </h1>
          <p className="mb-6 text-gray-600 md:text-lg lg:text-1xl">
            {CONFERENCE.announcement}
          </p>
          <Link href={HERO_BANNER.volunteerFormUrl} target="_blank">
            <button className="inline-flex mt-1 items-center justify-center bg-accent-light-600 px-5 py-3 font-medium hover:bg-accent-light-700 text-center text-gray-50 border rounded-lg mr-4">
              <Icon name="VolunteerActivism" size={20} />
              <span className="ml-2">BECOME A VOLUNTEER</span>
            </button>
          </Link>
          <Link href={HERO_BANNER.cfpUrl} target="_blank">
            <button className="inline-flex mt-1 items-center justify-center bg-accent-light-600 px-5 py-3 font-medium hover:bg-accent-light-700 text-center text-gray-50 border rounded-lg">
              <Icon name="MdCampaign" size={20} />
              <span className="ml-2">SUBMIT YOUR PROPOSAL</span>
            </button>
          </Link>
        </div>
        <div className="col-span-12 lg:col-span-5 mt-4 lg:mt-0">
          <Image
            src={HERO_BANNER.imageUrl}
            alt={HERO_BANNER.imageAlt}
            priority={true}
            width={1920}
            height={1280}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
