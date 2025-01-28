export const NAV_ITEMS = [
  {
    name: 'Home',
    target: '_self',
    path: '/',
    children: [
      {
        name: 'Tickets',
        path: '/#tickets',
        target: '_self',
      },
      {
        name: 'Keynote Speaker',
        path: '/#keynote-speaker',
        target: '_self',
      },
      {
        name: 'Sponsors',
        path: '/#sponsors',
        target: '_self',
      },

      {
        name: 'Community Partners',
        path: '/#community-partners',
        target: '_self',
      },
      {
        name: 'Meet our Organizers',
        path: '/#organizers',
        target: '_self',
      },
    ],
  },
  // {
  //   name: 'Speakers',
  //   path: '/speakers',
  //   target: '_self',
  // },
  {
    name: 'Schedule',
    path: '/schedule',
    target: '_self',
  },
  {
    name: 'FAQ',
    path: '/faq',
    target: '_self',
  },
  {
    name: 'Code Of Conduct',
    path: '/code-of-conduct',
    target: '_self',
    children: [
      {
        name: 'Code Of Conduct Policy',
        path: '/code-of-conduct',
        target: '_self',
      },
      {
        name: 'Reporting Guide',
        path: '/reporting-guide',
        target: '_self',
      },
    ],
  },
];
