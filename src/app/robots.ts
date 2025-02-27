import { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export const revalidate = 60; // Revalidate every 60 seconds

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/'],
    },
    sitemap: ['https://2025.pyconfhyd.org/sitemap.xml'],
  };
}
