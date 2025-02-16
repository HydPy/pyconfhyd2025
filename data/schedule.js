import { SPEAKERS } from '@/speakers';

export const getSpeaker = (slug) => {
  return SPEAKERS.find((speaker) => speaker.slug === slug);
};

export const SCHEDULE = {
  day1: {
    title: 'Conference',
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
          speakers: [getSpeaker('pyconf-hyderabad-team')],
        },
      ],
      [
        {
          title:
            'Think, Code, Innovate: Srivardhan’s Logical Leap from Beginner to Advanced Python',
          type: 'Talk',
          time: '09:10 - 09:25 AM',
          location: 'Main Hall',
          speakers: [getSpeaker('srivardhan')],
        },
      ],
      [
        {
          title: 'Keynote: When will AI take my job and what can I do about it',
          type: 'Talk',
          keynote: true,
          time: '09:25 - 10:15 AM',
          location: 'Main Hall',
          speakers: [getSpeaker('anthony-shaw')],
        },
      ],
      [
        {
          title:
            'Python in IoT and Robotics: Backend Solutions for Connected Systems',
          type: 'Talk',
          time: '10:15 - 10:45 AM',
          location: 'Main Hall',
          speakers: [getSpeaker('harsh-mittal')],
        },
      ],
      [
        {
          title:
            'From Raw to Reliable: Automated Data Validation with Great Expectations',
          type: 'Talk',
          time: '10:45 - 11:15 AM',
          location: 'Main Hall',
          speakers: [getSpeaker('vivek-keshore')],
        },
      ],
      [
        {
          title: 'Break',
          break: true,
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
          speakers: [getSpeaker('ria-bhatia')],
        },
      ],
      [
        {
          title: "Let's enhance our technical writing by reading PEPs",
          type: 'Talk',
          time: '12:00 - 12:30 PM',
          location: 'Main Hall',
          speakers: [getSpeaker('sai-rahul-poruri')],
        },
      ],
      [
        {
          title: '🍱 Lunch Break',
          break: true,
          time: '12:30 - 01:30 PM',
          location: 'Cafeteria',
        },
      ],
      [
        {
          title: '⚡️ Lightning Talks',
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
          speakers: [getSpeaker('sejal-gupta'), getSpeaker('sidhant-gupta')],
        },
      ],
      [
        {
          title: 'uv - MEGA: Make Environments Great Again',
          type: 'Talk',
          time: '02:55 - 03:25 PM',
          location: 'Main Hall',
          speakers: [getSpeaker('s-anand')],
        },
      ],
      [
        {
          title: 'Understanding API dispatching',
          type: 'Talk',
          time: '03:25 - 03:55 PM',
          location: 'Main Hall',
          speakers: [getSpeaker('aditi-juneja')],
        },
      ],
      [
        {
          title: 'Keynote: Open Source: One Idea, Many Journeys',
          keynote: true,
          time: '03:55 - 04:45 PM',
          speakers: [getSpeaker('bowrna-prabhakaran')],
          location: 'Main Hall',
        },
      ],
      [
        {
          title: '☕️ Tea/Coffee Break',
          break: true,
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
          speakers: [getSpeaker('tarun-jain')],
        },
      ],
      [
        {
          title: 'Turn your old laptop to a home server',
          type: 'Talk',
          time: '05:30 - 06:00 PM',
          location: 'Main Hall',
          speakers: [getSpeaker('g-r-akhil-teja')],
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
    title: 'Workshop',
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
          speakers: [getSpeaker('kuldeep-pisda')],
        },
        {
          time: '10:00 - 11:30 AM',
          type: 'Workshop',
          title:
            'Causal Inference & Uplift Modeling in Python: Beyond Correlation',
          speakers: [getSpeaker('sonu-kumar')],
          location: 'Track 2',
        },
        {
          time: '10:00 - 11:30 AM',
          type: 'Workshop',
          title: 'Writing bug free python code with functional programming',
          speakers: [getSpeaker('siddharta-govindaraj')],
          location: 'Track 3',
        },
      ],
      [
        {
          time: '11:30 - 1:00 PM',
          type: 'Workshop',
          title:
            'Duckdb: In-Process Analytics Database that saves you millions and makes you look smart',
          speakers: [getSpeaker('ankur-gupta')],
          location: 'Track 1',
        },
        {
          time: '11:30 - 01:00 PM',
          type: 'Workshop',
          title: 'Building AI Agents',
          location: 'Track 2',
          speakers: [getSpeaker('anthony-shaw')],
        },
        {
          time: '11:30 - 1:00 PM',
          type: 'Workshop',
          title:
            'Unveiling the lazy execution benefit of FireDucks - A Multithreaded DataFrame Library with JIT compiler',
          location: 'Track 3',
          speakers: [getSpeaker('sourav-saha')],
        },
      ],
      [
        {
          time: '2:00 - 3:30 PM',
          type: 'Workshop',
          title: 'Debugging Python applications like a Pro',
          location: 'Track 1',
          speakers: [getSpeaker('satyam-soni')],
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
          title: 'Distributed Computing with Ray: Transforming Local Python Applications into Scalable Systems',
          location: 'Track 3',
          speakers: [
            getSpeaker('bhagirathi-hegde'),
            getSpeaker('sarath-srinivas'),
          ],
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
