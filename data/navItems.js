export const NAV_ITEMS = [
  {
    name: 'Home',
    pageUrl: '/',
    target: '_self',
    children: [
      {
        name: 'Tickets',
        path: '/#tickets',
        pageUrl: '/',
        target: '_self',
      },
      {
        name: 'Keynote Speaker',
        path: '/#keynote-speaker',
        pageUrl: '/',
        target: '_self',
      },
      {
        name: 'Sponsors',
        path: '/#sponsors',
        pageUrl: '/',
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
        pageUrl: '/',
        target: '_self',
      },
    ],
  },
  {
    name: 'Schedule',
    path: '/schedule',
    pageUrl: '/schedule',
    target: '_self',
  },
  {
    name: 'FAQ',
    path: '/faq',
    pageUrl: '/faq',
    target: '_self',
  },
  {
    name: 'Code Of Conduct',
    target: '_self',
    pageUrl: '/code-of-conduct',
    children: [
      {
        name: 'Code Of Conduct Policy',
        path: '/code-of-conduct',
        pageUrl: '/code-of-conduct',
        target: '_self',
      },
      {
        name: 'Reporting Guide',
        path: '/reporting-guide',
        pageUrl: '/reporting-guide',
        target: '_self',
      },
    ]
  },
];
