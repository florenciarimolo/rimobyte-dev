import { SITE_URL } from '@/constants';

/**
 * Generate Open Graph image URL
 * @param title - Page title (required)
 * @param description - Page description (optional)
 * @param city - City name for city-based pages (optional)
 * @param lang - Language code ('es' or 'en', default: 'es')
 * @returns Absolute URL to the OG image endpoint
 */
export function getOgImageUrl(
  title: string,
  description?: string | null,
  city?: string | null,
  lang: 'es' | 'en' = 'es'
): string {
  const params = new URLSearchParams();
  params.set('title', title);
  
  if (description) {
    params.set('description', description);
  }
  
  if (city) {
    params.set('city', city);
  }
  
  params.set('lang', lang);
  
  return `${SITE_URL}/api/og-image?${params.toString()}`;
}
