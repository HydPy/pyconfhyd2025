import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export const revalidate = 60; // Revalidate every 60 seconds

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://2025.pyconfhyd.org',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://2025.pyconfhyd.org/faq',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://2025.pyconfhyd.org/code-of-conduct',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://2025.pyconfhyd.org/schedule',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://2025.pyconfhyd.org/reporting-guide',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}
