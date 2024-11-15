import Image from 'next/image';
import Link from 'next/link';
import { CONFERENCE } from '@/details';
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
          <Link href={CONFERENCE.volunteerFormUrl} target="_blank">
            <button className="inline-flex items-center justify-center bg-accent-light-600 px-5 py-3 font-medium hover:bg-accent-light-700 text-center text-gray-50 border rounded-lg">
              BECOME A VOLUNTEER
              <Icon name="VolunteerActivism" className="ms-2" size={20} />
            </button>
          </Link>
        </div>
        <div className="col-span-12 lg:col-span-5 mt-4 lg:mt-0">
          <Image
            src={CONFERENCE.heroBannerUrl}
            alt={CONFERENCE.title}
            priority={true}
            width={1920}
            height={1280}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
            aria-label={CONFERENCE.heroBannerAriaLabel}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
