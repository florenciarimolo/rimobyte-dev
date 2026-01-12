import { LANG, LANG_PREFIXES } from '@/i18n';
import { SITE_URL } from '@/constants';

/**
 * Get language from URL pathname
 * Returns 'es' or 'en' based on URL prefix
 */
export function getLangFromPathname(pathname: string): typeof LANG.ENGLISH | typeof LANG.SPANISH {
  if (pathname.startsWith(`${LANG_PREFIXES.ENGLISH}/`) || pathname === LANG_PREFIXES.ENGLISH) {
    return LANG.ENGLISH;
  }
  return LANG.SPANISH;
}

/**
 * Get the current path without language prefix
 * Example: /en/desarrolladora-wordpress-freelance -> /desarrolladora-wordpress-freelance
 */
export function getPathWithoutLang(pathname: string): string {
  if (pathname.startsWith(`${LANG_PREFIXES.ENGLISH}/`)) {
    return pathname.replace(LANG_PREFIXES.ENGLISH, '');
  }
  if (pathname.startsWith(`${LANG_PREFIXES.SPANISH}/`)) {
    return pathname.replace(LANG_PREFIXES.SPANISH, '');
  }
  if (pathname === LANG_PREFIXES.ENGLISH || pathname === LANG_PREFIXES.SPANISH) {
    return '/';
  }
  // If no prefix, assume it's Spanish (shouldn't happen in production)
  return pathname;
}

/**
 * Generate URL with language prefix
 */
export function getUrlWithLang(path: string, lang: typeof LANG.ENGLISH | typeof LANG.SPANISH): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const pathWithoutLang = getPathWithoutLang(cleanPath);
  const basePath = pathWithoutLang === '/' ? '' : pathWithoutLang;
  
  const langPrefix = lang === LANG.ENGLISH ? LANG_PREFIXES.ENGLISH : LANG_PREFIXES.SPANISH;
  return `${SITE_URL}${langPrefix}${basePath}`;
}

/**
 * Generate alternate language URLs for hreflang
 * Returns object with 'es' and 'en' URLs
 */
export function getAlternateUrls(pathname: string): { es: string; en: string } {
  const pathWithoutLang = getPathWithoutLang(pathname);
  const basePath = pathWithoutLang === '/' ? '' : pathWithoutLang;
  
  return {
    es: `${SITE_URL}${LANG_PREFIXES.SPANISH}${basePath}`,
    en: `${SITE_URL}${LANG_PREFIXES.ENGLISH}${basePath}`
  };
}

/**
 * Get canonical URL for current page
 */
export function getCanonicalUrl(pathname: string): string {
  return `${SITE_URL}${pathname}`;
}
