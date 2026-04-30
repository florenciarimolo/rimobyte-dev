import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_URL } from '@/constants';

export const GET: APIRoute = async ({ request }) => {
  const currentDate = new Date().toISOString().split('T')[0];
  
  const requestUrl = new URL(request.url);
  const baseUrl = import.meta.env.APP_BASE_URL || SITE_URL || `${requestUrl.protocol}//${requestUrl.host}`;
  
  type SitemapUrl = {
    loc: string;
    lastmod: string;
    changefreq: string;
    priority: string;
  };

  const urls: SitemapUrl[] = [];

  const addPath = (path: string, priority: string, changefreq: string = 'monthly') => {
    const fullPath = path === '/' ? '/' : path.startsWith('/') ? path : `/${path}`;
    urls.push({
      loc: `${baseUrl}${fullPath === '/' ? '' : fullPath}`,
      lastmod: currentDate,
      changefreq,
      priority
    });
  };

  addPath('/', '1.0', 'weekly');
  addPath('/desarrolladora-wordpress-freelance', '0.9');
  addPath('/migrar-web-agencia-freelance', '0.9');
  addPath('/rescate-wordpress-urgente', '0.9', 'weekly');
  addPath('/precios-desarrollo-web', '0.9', 'monthly');
  addPath('/rediseno-web-wordpress', '0.8', 'monthly');
  addPath('/desarrollo-tienda-online', '0.8', 'monthly');
  addPath('/optimizacion-velocidad-wordpress', '0.8', 'monthly');
  addPath('/desarrollo-vue-nuxt-astro', '0.8', 'monthly');
  addPath('/blog', '0.7', 'weekly');

  const blogPosts = await getCollection('blog', ({ data }) => !data.draft);
  blogPosts.forEach(post => {
    const postDate = post.data.pubDate.toISOString().split('T')[0];
    urls.push({
      loc: `${baseUrl}/blog/${post.id}`,
      lastmod: postDate,
      changefreq: 'monthly',
      priority: '0.7'
    });
  });

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
