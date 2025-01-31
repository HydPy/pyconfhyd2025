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
          speaker: {
            name: 'PyConf Hyderabad Team',
            title: 'Organizers',
            imgUrl: '/images/speakers/placeholder-1.svg',
          },
          location: 'Main Hall',
        },
      ],
      [
        {
          title:
            'Think, Code, Innovate: Srivardhan’s Logical Leap from Beginner to Advanced Python',
          time: '09:10 - 09:25 AM',
          speaker: {
            name: 'Srivardhan',
            imgUrl: '/images/speakers/placeholder-2.svg',
          },
          location: 'Main Hall',
        },
      ],
      [
        {
          title: 'Keynote by Anthony Shaw',
          time: '09:25 - 10:15 AM',
          speaker: {
            name: 'Anthony Shaw',
            imgUrl: '/images/speakers/placeholder-1.svg',
          },
          location: 'Main Hall',
        },
      ],
      [
        {
          title:
            'Python in IoT and Robotics: Backend Solutions for Connected Systems',
          time: '10:15 - 10:45 AM',
          speaker: {
            name: 'Harsh Mittal',
            imgUrl: '/images/speakers/placeholder-1.svg',
          },
          location: 'Main Hall',
        },
      ],
      [
        {
          title:
            'From Raw to Reliable: Automated Data Validation with Great Expectations',
          time: '10:45 - 11:15 AM',
          speaker: {
            name: 'Vivek Keshore',
            imgUrl: '/images/speakers/placeholder-2.svg',
          },
          location: 'Main Hall',
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
          time: '11:30 - 12:00 PM',
          speaker: {
            name: 'Ria Bhatia',
            imgUrl: '/images/speakers/placeholder-1.svg',
          },
          location: 'Main Hall',
        },
      ],
      [
        {
          title: "Let's enhance our technical writing by reading PEPs",
          time: '12:00 - 12:30 PM',
          speaker: {
            name: 'Sai Rahul Poruri',
            imgUrl: '/images/speakers/placeholder-1.svg',
          },
          location: 'Main Hall',
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
          time: '02:25 - 02:55 PM',
          speaker: {
            name: 'Sejal Gupta',
            imgUrl: '/images/speakers/placeholder-2.svg',
          },
          location: 'Main Hall',
        },
      ],
      [
        {
          title: 'uv - MEGA: Make Environments Great Again',
          time: '02:55 - 03:25 PM',
          speaker: {
            name: 'S Anand',
            imgUrl: '/images/speakers/placeholder-1.svg',
          },
          location: 'Main Hall',
        },
      ],
      [
        {
          title: 'Understanding API dispatching',
          time: '03:25 - 03:55 PM',
          speaker: {
            name: 'Aditi Juneja',
            imgUrl: '/images/speakers/placeholder-1.svg',
          },
          location: 'Main Hall',
        },
      ],
      [
        {
          title: 'Multimodal Agents RAG Workflow',
          time: '03:55 - 04:25 PM',
          speaker: {
            name: 'Tarun Jain',
            imgUrl: '/images/speakers/placeholder-2.svg',
          },
          location: 'Main Hall',
        },
      ],
      [
        {
          title: 'Coffee Break',
          time: '04:25 - 04:40 PM',
          location: 'Main Hall',
        },
      ],
      [
        {
          title: 'Turn your old laptop to a home server',
          time: '04:40 - 05:10  PM',
          speaker: {
            name: 'Akhil Teja',
            imgUrl: '/images/speakers/placeholder-2.svg',
          },
          location: 'Main Hall',
        },
      ],
      [
        {
          title: 'TBD',
          time: '05:10 - 06:00 PM',
          location: 'Cafeteria',
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
          title:
            'Mastering Test Driven Development in Django: A Comprehensive Guide with factory_boy and faker',
          speaker: {
            name: 'Kuldeep Pisda',
            imgUrl: '/images/speakers/placeholder-1.svg',
          },
          location: 'Track 1',
        },
        {
          time: '10:00 - 11:30 AM',
          title:
            'Causal Inference & Uplift Modeling in Python: Beyond Correlation',
          speaker: {
            name: 'Sonu Kumar',
            imgUrl: '/images/speakers/placeholder-2.svg',
          },
          location: 'Track 2',
        },
        {
          time: '10:00 - 11:30 AM',
          title: 'Writing bug free python code with functional programming',
          speaker: {
            name: 'Siddharta Govindaraj',
            imgUrl: '/images/speakers/placeholder-2.svg',
          },
          location: 'Track 3',
        },
      ],
      [
        {
          time: '11:30 - 1:00 PM',
          title:
            'Duckdb: In-Process Analytics Database that saves you millions and makes you look smart',
          speaker: {
            name: 'Ankur Gupta',
            imgUrl: '/images/speakers/placeholder-1.svg',
          },
          location: 'Track 1',
        },
        {
          time: '11:30 - 1:00 PM',
          title: 'Debugging Python applications like a Pro',
          speaker: {
            name: 'Satyam Soni',
            imgUrl: '/images/speakers/placeholder-2.svg',
          },
          location: 'Track 2',
        },
        {
          time: '11:30 - 1:00 PM',
          title:
            'Unveiling the lazy execution benefit of FireDucks - A Multithreaded DataFrame Library with JIT compiler',
          speaker: {
            name: 'Sourav Saha',
            imgUrl: '/images/speakers/placeholder-2.svg',
          },
          location: 'Track 3',
        },
      ],
      [
        {
          time: '2:00 - 3:30 PM',
          title: 'TBD',
          speaker: {
            name: 'Anthony Shaw',
            imgUrl: '/images/speakers/placeholder-1.svg',
          },
          location: 'Track 1',
        },
        {
          time: '2:00 - 3:30 PM',
          title: 'Snowflake Workshop',
          location: 'Track 2',
        },
        {
          time: '2:00 - 3:30 PM',
          title: 'Distributed Computing',
          speaker: {
            name: 'Bhagirathi Hegde',
            imgUrl: '/images/speakers/placeholder-2.svg',
          },
          location: 'Track 3',
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
