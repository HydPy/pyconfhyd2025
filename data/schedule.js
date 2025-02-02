import { SPEAKERS } from '@/speakers';

export const getSpeaker = (slug) => {
  return SPEAKERS.find((speaker) => speaker.slug === slug);
};

export const SCHEDULE = {
  day1: {
    title: 'Conference Day',
    date: '22 Feb', 
    day: 'Saturday',
    sessions: [
      [
        {
          title: 'Registrations',
          time: '08:00 - 09:00 AM',
          location: 'Registration Desk',
        },
      ],
      [
        {
          title: 'Opening Note',
          time: '09:00 - 09:10 AM',
          location: 'Main Hall',
          speaker: getSpeaker('pyconf-hyderabad-team'),
        },
      ],
      [
        {
          title:
            'Think, Code, Innovate: Srivardhan’s Logical Leap from Beginner to Advanced Python',
          type: 'Talk',
          time: '09:10 - 09:25 AM',
          location: 'Main Hall',
          speaker: getSpeaker('srivardhan'),
        },
      ],
      [
        {
          title: 'Keynote by Anthony Shaw',
          type: 'Talk',
          time: '09:25 - 10:15 AM',
          location: 'Main Hall',
          speaker: getSpeaker('anthony-shaw'),
        },
      ],
      [
        {
          title:
            'Python in IoT and Robotics: Backend Solutions for Connected Systems',
            type: 'Talk',
            time: '10:15 - 10:45 AM',
          location: 'Main Hall',
          speaker: getSpeaker('harsh-mittal'),
        },
      ],
      [
        {
          title:
            'From Raw to Reliable: Automated Data Validation with Great Expectations',
            type: 'Talk',
            time: '10:45 - 11:15 AM',
          location: 'Main Hall',
          speaker: getSpeaker('vivek-keshore'),
        },
      ],
      [
        {
          title: 'Break',
          time: '11:15 - 11:30 AM',
          location: 'Main Hall',
        },
      ],
      [
        {
          title: 'Spicing Up Automation: A Taste of Python and SaltStack',
          type: 'Talk',
          time: '11:30 - 12:00 PM',
          location: 'Main Hall',
          speaker: getSpeaker('ria-bhatia'),
        },
      ],
      [
        {
          title: "Let's enhance our technical writing by reading PEPs",
          type: 'Talk',
          time: '12:00 - 12:30 PM',
          location: 'Main Hall',
          speaker: getSpeaker('sai-rahul-poruri'),
        },
      ],
      [
        {
          title: 'Lunch Break',
          time: '12:30 - 01:30 PM',
          location: 'Cafeteria',
        },
      ],
      [
        {
          title: 'Lightning Talks',
          time: '01:30 - 02:25 PM',
          location: 'Main Hall',
        },
      ],
      [
        {
          title:
            'Organized Chaos: Demystifying Memory Management & Garbage Collection in Python',
            type: 'Talk',
            time: '02:25 - 02:55 PM',
          location: 'Main Hall',
          speaker: getSpeaker('sejal-gupta'),
        },
      ],
      [
        {
          title: 'uv - MEGA: Make Environments Great Again',
          type: 'Talk',
          time: '02:55 - 03:25 PM',
          location: 'Main Hall',
          speaker: getSpeaker('s-anand'),
        },
      ],
      [
        {
          title: 'Understanding API dispatching',
          type: 'Talk',
          time: '03:25 - 03:55 PM',
          location: 'Main Hall',
          speaker: getSpeaker('aditi-juneja'),
        },
      ],
      [
        {
          title: 'Keynote by Bowrna Prabhakaran',
          time: '03:55 - 04:45 PM',
          speaker: 'bowrna-prabhakaran',
          location: 'Main Hall',
        },
      ],
      [
        {
          title: 'Coffee Break',
          time: '04:45 - 05:00 PM',
          location: 'Main Hall',
        },
      ],
      [
        {
          title: 'Multimodal Agents RAG Workflow',
          type: 'Talk',
          time: '05:00 - 05:30 PM',
          location: 'Main Hall',
          speaker: getSpeaker('tarun-jain'),
        },
      ],
      [
        {
          title: 'Turn your old laptop to a home server',
          type: 'Talk',
          time: '05:30 - 06:00 PM',
          location: 'Main Hall',
          speaker: getSpeaker('akhil-teja'),
        },
      ],
      [
        {
          title: 'Closing Note',
          time: '06:00 - 06:10 PM',
          location: 'Main Hall',
        },
      ],
    ],
  },
  day2: {
    title: 'Workshop Day',
    date: '23 Feb',
    day: 'Sunday',
    sessions: [
      [
        {
          title: 'Registrations',
          time: '09:00 - 10:00 AM',
          location: 'Registration Desk',
        },
      ],
      [
        {
          time: '10:00 - 11:30 AM',
          type: 'Workshop',
          title:
            'Mastering Test Driven Development in Django: A Comprehensive Guide with factory_boy and faker',
          location: 'Track 1',
          speaker: getSpeaker('kuldeep-pisda'),
        },
        {
          time: '10:00 - 11:30 AM',
          type: 'Workshop',
          title:
            'Causal Inference & Uplift Modeling in Python: Beyond Correlation',
          speaker: getSpeaker('sonu-kumar'),
          location: 'Track 2',
        },
        {
          time: '10:00 - 11:30 AM',
          type: 'Workshop',
          title: 'Writing bug free python code with functional programming',
          speaker: getSpeaker('siddharta-govindaraj'),
          location: 'Track 3',
        },
      ],
      [
        {
          time: '11:30 - 1:00 PM',
          type: 'Workshop',
          title:
            'Duckdb: In-Process Analytics Database that saves you millions and makes you look smart',
          speaker: getSpeaker('ankur-gupta'),
          location: 'Track 1',
        },
        {
          time: '11:30 - 01:00 PM',
          type: 'Workshop',
          title: 'Building AI Agents',
          location: 'Track 2',
          speaker: getSpeaker('anthony-shaw'),
        },
        {
          time: '11:30 - 1:00 PM',
          type: 'Workshop',
          title:
            'Unveiling the lazy execution benefit of FireDucks - A Multithreaded DataFrame Library with JIT compiler',
          location: 'Track 3',
          speaker: getSpeaker('sourav-saha'),
        },
      ],
      [
        {
          time: '2:00 - 3:30 PM',
          type: 'Workshop',
          title: 'Debugging Python applications like a Pro',
          location: 'Track 1',
          speaker: getSpeaker('satyam-soni'),
        },
        {
          time: '2:00 - 3:30 PM',
          type: 'Workshop',
          title: 'Snowflake Workshop',
          location: 'Track 2',
        },
        {
          time: '2:00 - 3:30 PM',
          type: 'Workshop',
          title: 'Distributed Computing',
          location: 'Track 3',
          speaker: getSpeaker('bhagirathi-hegde'),
        },
      ],
      [
        {
          time: '3:30 - 5:00 PM',
          title: 'Networking',
          location: 'Workshop Venue',
        },
      ],
    ],
  },
};
