import { SITE_URL } from '@/constants';

/**
 * Canonical URL for the current pathname (single-language site, Spanish).
 */
export function getCanonicalUrl(pathname: string): string {
  return `${SITE_URL}${pathname}`;
}
