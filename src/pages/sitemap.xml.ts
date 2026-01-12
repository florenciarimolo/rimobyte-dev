import type { APIRoute } from 'astro';
import { SITE_URL } from '@/constants';
import { allowedCities } from '@/constants/cities';
import { LANG, LANG_PREFIXES } from '@/i18n/index';

// Generate sitemap.xml at build time
export const GET: APIRoute = ({ request }) => {
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Use APP_BASE_URL for local development, SITE_URL for production
  // Fallback to request origin if neither is available
  const requestUrl = new URL(request.url);
  const baseUrl = import.meta.env.APP_BASE_URL || SITE_URL || `${requestUrl.protocol}//${requestUrl.host}`;
  
  type SitemapUrl = {
    loc: string;
    lastmod: string;
    changefreq: string;
    priority: string;
  };

  const urls: SitemapUrl[] = [];

  // Helper function to add URL with language prefix
  const addUrl = (path: string, priority: string, changefreq: string = 'monthly') => {
    [LANG_PREFIXES.SPANISH, LANG_PREFIXES.ENGLISH].forEach(prefix => {
      const fullPath = path === '/' ? `${prefix}/` : `${prefix}${path}`;
      urls.push({
        loc: `${baseUrl}${fullPath}`,
        lastmod: currentDate,
        changefreq,
        priority
      });
    });
  };

  // Homepage
  addUrl('/', '1.0');

  // Main landing pages
  addUrl('/desarrolladora-wordpress-freelance', '0.9');
  addUrl('/migrar-web-agencia-freelance', '0.9');

  // City landing pages - WordPress
  Object.keys(allowedCities).forEach(city => {
    addUrl(`/desarrolladora-wordpress-freelance/${city}`, '0.8');
  });

  // City landing pages - Migration
  Object.keys(allowedCities).forEach(city => {
    addUrl(`/migrar-web-agencia-freelance/${city}`, '0.8');
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
