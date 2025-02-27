export const SPONSORS_INFO = {
  title: 'Sponsors',
  description:
    'PyConf Hyderabad is completely driven by volunteers. Sponsoring the event helps to sustain and grow the conference as well as the Community. Sponsor help in making the conference affordable, and maintaining the inventory for the conference.',
};

export const getSponsor = (name) => {
  for (const category in SPONSORS) {
    const sponsor = SPONSORS[category].find((s) => s.name === name);
    if (sponsor) {
      return sponsor;
    }
  }
  return null;
};

export const getSponsors = () => {
  const sponsors = [];
  for (const category in SPONSORS) {
    SPONSORS[category].forEach((sponsor) => {
      sponsors.push(sponsor);
    });
  }
  return sponsors;
};

export const SPONSORS = {
  Platinum: [
    {
      name: 'Snowflake',
      hyperLink: '/blogs/snowflake-platinum-sponsor/',
      imgUrl: '/images/sponsors/snowflake.svg',
      imgAlt: 'Snowflake logo',
      socials: [
        {
          name: 'X',
          url: 'https://twitter.com/SnowflakeDB',
          ariaLabel: 'Hyperlink to Snowflake X page.',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/company/snowflake-computing',
          ariaLabel: 'Hyperlink to Snowflake LinkedIn page.',
        },
        {
          name: 'Facebook',
          url: 'https://www.facebook.com/Snowflake-Computing-709171695819345/',
          ariaLabel: 'Hyperlink to Snowflake Facebook page.',
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/_snowflake_inc/?hl=en',
          ariaLabel: 'Hyperlink to Snowflake Instagram page.',
        },
        {
          name: 'Globe',
          url: 'https://snowflake.com/',
          ariaLabel: 'Hyperlink to Snowflake website.',
        },
      ],
    },
  ],
  Gold: [
    {
      name: 'LangDB.ai',
      hyperLink: '/blogs/langdb-ai-gold-sponsor/',
      imgUrl: '/images/sponsors/langdb.png',
      imgAlt: 'LangDB.ai logo',
      socials: [
        {
          name: 'X',
          url: 'https://x.com/LangdbAi/',
          ariaLabel: 'Hyperlink to LangDB.ai X page.',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/company/langdb/',
          ariaLabel: 'Hyperlink to LangDB.ai LinkedIn page.',
        },
        {
          name: 'Globe',
          url: 'https://langdb.ai/',
          ariaLabel: 'Hyperlink to LangDB.ai website.',
        },
      ],
    },
    {
      name: 'Cognida.ai',
      hyperLink: '/blogs/cognida-ai-gold-sponsor/',
      imgUrl: '/images/sponsors/cognidaaai.png',
      imgAlt: 'Cognida.ai logo',
      socials: [
        {
          name: 'X',
          url: 'https://x.com/CognidaInc/',
          ariaLabel: 'Hyperlink to Cognida.ai X page.',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/company/cognida-ai/',
          ariaLabel: 'Hyperlink to Cognida.ai LinkedIn page.',
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/cognidainc/',
          ariaLabel: 'Hyperlink to Cognida.ai Instagram page.',
        },
        {
          name: 'Globe',
          url: 'https://www.cognida.ai/',
          ariaLabel: 'Hyperlink to Cognida.ai website',
        },
      ],
    },
    {
      name: 'Storable India',
      hyperLink: '/blogs/storable-india-gold-sponsor/',
      imgUrl: '/images/sponsors/storable.jpg',
      imgAlt: 'Storable India logo',
      socials: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/company/storable-india/',
          ariaLabel: 'Hyperlink to Storable India LinkedIn page.',
        },
        {
          name: 'Globe',
          url: 'https://www.storable.com',
          ariaLabel: 'Hyperlink to Storable India website.',
        },
      ],
    },
    {
      name: 'Tiger Analytics',
      hyperLink: '/blogs/tiger-analytics-gold-sponsor/',
      imgUrl: '/images/sponsors/tiger-analytics-black.png',
      imgAlt: 'Tiger Analytics logo',
      socials: [
        {
          name: 'X',
          url: 'https://twitter.com/tigeranalytics',
          ariaLabel: 'Hyperlink to Tiger Analytics X page.',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/company/tiger-analytics/',
          ariaLabel: 'Hyperlink to Tiger Analytics LinkedIn page.',
        },
        {
          name: 'Facebook',
          url: 'https://www.facebook.com/share/1H4etXYa6C/',
          ariaLabel: 'Hyperlink to Tiger Analytics Facebook page.',
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/tigeranalytics',
          ariaLabel: 'Hyperlink to Tiger Analytics Instagram page.',
        },
        {
          name: 'Globe',
          url: 'https://www.tigeranalytics.com/',
          ariaLabel: 'Hyperlink to Tiger Analytics website.',
        },
      ],
    },
  ],
  Silver: [
    {
      name: 'Gridlex',
      hyperLink: '/blogs/gridlex-silver-sponsor/',
      imgUrl: '/images/sponsors/gridlex.png',
      imgAlt: 'Gridlex logo',
      socials: [
        {
          name: 'X',
          url: 'https://x.com/Gridlex3/',
          ariaLabel: 'Hyperlink to Gridlex X page.',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/company/gridlex/',
          ariaLabel: 'Hyperlink to Gridlex LinkedIn page.',
        },
        {
          name: 'Facebook',
          url: 'https://www.facebook.com/GridlexApps/',
          ariaLabel: 'Hyperlink to Gridlex Facebook page.',
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/gridlex_software/',
          ariaLabel: 'Hyperlink to Gridlex Instagram page.',
        },
        {
          name: 'Globe',
          url: 'https://gridlex.com/',
          ariaLabel: 'Hyperlink to Gridlex website.',
        },
      ],
    },
  ],
  Associate: [
    {
      name: 'GlueOps',
      hyperLink: '/blogs/glueops-associate-sponsor/',
      imgUrl: '/images/sponsors/glueops.png',
      imgAlt: 'GlueOps logo',
      socials: [
        {
          name: 'X',
          url: 'https://x.com/GlueOps',
          ariaLabel: 'Hyperlink to GlueOps X page.',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/company/glueops',
          ariaLabel: 'Hyperlink to GlueOps LinkedIn page.',
        },
        {
          name: 'Facebook',
          url: 'https://www.facebook.com/glueops',
          ariaLabel: 'Hyperlink to GlueOps Facebook page.',
        },
        {
          name: 'Globe',
          url: 'https://www.glueops.dev/?utm_source=pyconfhyd',
          ariaLabel: 'Hyperlink to GlueOps website.',
        },
      ],
    },
    {
      name: 'Sporo Health',
      hyperLink: '/blogs/sporo-health-associate-sponsor/',
      imgUrl: '/images/sponsors/sporo-health.png',
      imgAlt: 'Sporo Health logo',
      socials: [
        {
          name: 'X',
          url: 'https://x.com/SporoHealth',
          ariaLabel: 'Hyperlink to Sporo Health X page.',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/company/sporo-health/',
          ariaLabel: 'Hyperlink to Sporo Health LinkedIn page.',
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/sporohealth/',
          ariaLabel: 'Hyperlink to Sporo Health Instagram page.',
        },
        {
          name: 'Globe',
          url: 'https://sporohealth.com/',
          ariaLabel: 'Hyperlink to Sporo Health website.',
        },
      ],
    },
  ],
  'Workshop Venue': [
    {
      name: 'EPAM Systems',
      imgUrl: '/images/sponsors/epam.svg',
      imgAlt: 'EPAM Systems logo',
      hyperLink: 'https://www.epam.com/',
    },
  ],
};
