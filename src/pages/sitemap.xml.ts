import type { APIRoute } from 'astro';
import { SITE_URL } from '@/constants';
import { allowedCities } from '@/constants/cities';

// Generate sitemap.xml at build time
export const GET: APIRoute = ({ request }) => {
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Use APP_BASE_URL for local development, SITE_URL for production
  // Fallback to request origin if neither is available
  const requestUrl = new URL(request.url);
  const baseUrl = import.meta.env.APP_BASE_URL || SITE_URL || `${requestUrl.protocol}//${requestUrl.host}`;
  
  // Base URLs to include
  const urls: Array<{
    loc: string;
    lastmod: string;
    changefreq: string;
    priority: string;
  }> = [
    // Homepage
    {
      loc: `${baseUrl}/`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '1.0'
    },
    // Main landing pages
    {
      loc: `${baseUrl}/desarrolladora-wordpress-freelance`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.9'
    },
    {
      loc: `${baseUrl}/en/desarrolladora-wordpress-freelance`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.9'
    }
  ];

  // Add city landing pages for Spanish
  Object.keys(allowedCities).forEach(city => {
    urls.push({
      loc: `${baseUrl}/desarrolladora-wordpress-freelance/${city}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    });
  });

  // Add city landing pages for English
  Object.keys(allowedCities).forEach(city => {
    urls.push({
      loc: `${baseUrl}/en/desarrolladora-wordpress-freelance/${city}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    });
  });

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
