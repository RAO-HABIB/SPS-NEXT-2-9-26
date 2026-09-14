import type { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://spsnet.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/products', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/verticals', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/About/Story', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/About/Careers', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/Contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/Contracts/VITA/pricing', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/Activities/Webinars', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/Activities/Webinars/upcoming', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/Activities/Webinars/past', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/Activities/workshops', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/Activities/workshops/upcoming', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/Activities/workshops/past', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/Activities/training', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/Activities/special-interest-groups', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/Activities/special-interest-groups/ai', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/Activities/special-interest-groups/cybersecurity', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/Activities/Internship', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/Activities/Internship/apply', priority: 0.7, changeFrequency: 'monthly' as const },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
