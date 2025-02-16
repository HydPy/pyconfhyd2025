'use client';
import { useState } from 'react';
import { Heading, Span } from '@/components/Typography';
import Icon from '@/components/Icon';
import Image from 'next/image';

import { SCHEDULE } from '@/schedule';
import Link from 'next/link';
import { CONFERENCE } from '@/conference';
import Script from 'next/script';

const TimeBadge = ({ time }) => (
  <div className="inline-flex items-center px-3 py-1.5 bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 rounded-full">
    <Icon name="Clock" size={16} className="mr-2" />
    <Span level={6} className="font-medium">
      {time}
    </Span>
  </div>
);

const LocationBadge = ({ location, className = '' }) => {
  return (
    <div
      className={`inline-flex items-center px-3 py-1.5 bg-primary-600 dark:bg-primary-700 text-white shadow-sm rounded-full ${className}`}
    >
      <Icon name="LocationDot" className="w-4 h-4 mr-2" />
      <Span level={6} className="font-medium">
        {location}
      </Span>
    </div>
  );
};

const SpeakerCard = ({ speaker }) => {
  return (
    <div className="flex flex-row items-center my-1">
      <div className="w-12 h-12 md:w-12 md:h-12">
        <div className="relative shadow-md h-full w-full rounded-full overflow-hidden border-1">
          <Image
            className="object-cover rounded-sm"
            src={speaker.imgUrl}
            alt={`Placeholder image of ${speaker.name}`}
            fill
          />
        </div>
      </div>
      <div className="flex flex-col ml-2">
        {speaker.name && (
          <Span className="text-gray-950 dark:text-gray-50" level={4}>
            {speaker.name}
          </Span>
        )}
        {speaker.title && (
          <Span className="text-gray-700 dark:text-gray-200" level={5}>
            {speaker.title}
          </Span>
        )}
      </div>
    </div>
  );
};

const ScheduleItem = ({
  time,
  title,
  location,
  speakers,
  isKeynote,
  isBreak,
}) => {
  const getBGColor = () => {
    if (isKeynote) {
      return 'bg-primary-50 dark:bg-primary-800';
    }
    if (isBreak) {
      return 'border-secondary-500 dark:border-secondary-500 dark:bg-gray-700';
    }
  };
  return (
    <article
      tabIndex="0"
      className={`w-full focus:outline-none focus:ring-2 focus:ring-primary-600 flex flex-col p-6 mb-6 border-l-4 border-primary-600 dark:border-primary-400 dark:bg-gray-900 shadow-md transition-transform transform hover:scale-[1.02] ${getBGColor()}`}
    >
      <header className="flex flex-row justify-between items-center mb-4">
        <TimeBadge time={time} />
        <LocationBadge location={location} />
      </header>
      <Heading
        level={4}
        tagLevel={3}
        className="text-gray-800 dark:text-gray-200 mb-3 font-semibold"
      >
        {title}
      </Heading>
      <div className="flex flex-col">
        {speakers &&
          speakers.map((speaker, index) =>
            speaker.activeSpeakerPage ? (
              <Link
                href={`/speakers/${speaker.slug}`}
                target="_self"
                className="flex flex-col space-y-2 my-1"
                key={index}
              >
                <SpeakerCard key={index} speaker={speaker} />
              </Link>
            ) : (
              <SpeakerCard key={index} speaker={speaker} />
            )
          )}
      </div>
    </article>
  );
};

const Schedule = () => {
  const [activeDay, setActiveDay] = useState('day1');
  const { sessions } = SCHEDULE[activeDay];

  return (
    <div className="my-8 w-full">
      <div className="flex justify-center gap-4 mb-8">
        {Object.keys(SCHEDULE).map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`flex flex-col items-center px-2 md:px-12 py-2 border border-gray-800 rounded-full ${
              activeDay === day
                ? 'bg-secondary-600 dark:bg-secondary-700 text-gray-50  dark:text-gray-50'
                : 'text-gray-950 dark:text-gray-50'
            }`}
          >
            <Heading tagLevel={2} level={5}>
              {SCHEDULE[day].title}
            </Heading>
            <Span level={4}>
              {SCHEDULE[day].date} &#x2022; {SCHEDULE[day].day}
            </Span>
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center space-y-4">
        {sessions.map((session, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row gap-4 w-full ${session.length == 1 ? 'md:w-3/4' : ''}`}
          >
            {session.map((parallelSession, subIndex) => (
              <ScheduleItem
                key={subIndex}
                time={parallelSession.time}
                title={parallelSession.title}
                location={parallelSession.location}
                speakers={parallelSession.speakers}
                isKeynote={parallelSession.keynote}
                isBreak={parallelSession.break}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <>
      <Script
        id="event-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="flex flex-col items-center py-6 w-11/12 lg:w-5/6 mx-auto">
        <Heading
          tagLevel={1}
          level={1}
          className="text-center my-6 text-secondary-600 dark:text-secondary-400"
        >
          Schedule
        </Heading>
        <Schedule />
      </section>
    </>
  );
}

// structuredData
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: CONFERENCE.title,
  eventStatus: 'https://schema.org/EventScheduled',
  image: ['https://pyconf.hydpy.org/images/logo.svg'],
  description: CONFERENCE.description,
  organizer: {
    '@type': 'Organization',
    name: CONFERENCE.creator,
    url: 'https://hydpy.org',
  },
  subEvent: [
    {
      '@type': 'Event',
      name: 'PyConf Hyderabad 2025 Conference',
      startDate: '2025-02-22',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: {
        '@type': 'Place',
        name: CONFERENCE.conferenceVenue,
        address: {
          '@type': 'PostalAddress',
          postalCode: '500032',
          addressLocality: 'Hyderabad',
          addressCountry: 'IN',
        },
      },
    },
    {
      '@type': 'Event',
      name: 'PyConf Hyderabad 2025 Workshop',
      startDate: '2025-02-23',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: {
        '@type': 'Place',
        name: CONFERENCE.workshopVenue,
        address: {
          '@type': 'PostalAddress',
          postalCode: '500032',
          addressLocality: 'Hyderabad',
          addressCountry: 'IN',
        },
      },
    },
  ],
};
