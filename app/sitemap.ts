import { MetadataRoute } from 'next';
import { headers } from 'next/headers';

export default function sitemap(): MetadataRoute.Sitemap {
  const headersList = headers();
  const host = headersList?.get?.('x-forwarded-host') ?? process.env.NEXTAUTH_URL ?? 'http://localhost:3000';
  const baseUrl = host?.startsWith?.('http') ? host : `https://${host}`;

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/professional`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/cybersafett`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/volunteerism`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/digital-footprint`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];
}
