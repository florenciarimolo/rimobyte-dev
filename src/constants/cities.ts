// City configuration with country information
export interface CityInfo {
  name: string;
  country: string;
  countryCode: string;
}

// Spanish cities (available for both ES and EN routes)
export const spanishCities: Record<string, CityInfo> = {
  'barcelona': { name: 'Barcelona', country: 'Spain', countryCode: 'ES' },
  'madrid': { name: 'Madrid', country: 'Spain', countryCode: 'ES' },
  'valencia': { name: 'Valencia', country: 'Spain', countryCode: 'ES' },
  'sevilla': { name: 'Sevilla', country: 'Spain', countryCode: 'ES' },
  'bilbao': { name: 'Bilbao', country: 'Spain', countryCode: 'ES' },
  'zaragoza': { name: 'Zaragoza', country: 'Spain', countryCode: 'ES' }
};

// International cities (available only for EN routes)
export const internationalCities: Record<string, CityInfo> = {
  'london': { name: 'London', country: 'United Kingdom', countryCode: 'GB' },
  'new-york': { name: 'New York', country: 'United States', countryCode: 'US' },
  'berlin': { name: 'Berlin', country: 'Germany', countryCode: 'DE' },
  'amsterdam': { name: 'Amsterdam', country: 'Netherlands', countryCode: 'NL' }
};

// Legacy export for backward compatibility (only Spanish cities)
export const allowedCities: Record<string, string> = Object.fromEntries(
  Object.entries(spanishCities).map(([key, value]) => [key, value.name])
);

// Get all cities for a specific language
export function getAllowedCities(lang: 'es' | 'en'): Record<string, CityInfo> {
  if (lang === 'es') {
    return spanishCities;
  }
  // English: Spanish cities + international cities
  return { ...spanishCities, ...internationalCities };
}

// Get city info by slug
export function getCityInfo(slug: string): CityInfo | null {
  const normalizedSlug = slug.toLowerCase();
  return spanishCities[normalizedSlug] || internationalCities[normalizedSlug] || null;
}

// Check if city is valid for a specific language
export function isValidCityForLang(slug: string, lang: 'es' | 'en'): boolean {
  const normalizedSlug = slug.toLowerCase();
  if (lang === 'es') {
    return normalizedSlug in spanishCities;
  }
  return normalizedSlug in spanishCities || normalizedSlug in internationalCities;
}

// Cities that should be indexable (index=true)
// Note: All cities in allowedCities are included in sitemap,
// but only these have index meta tag
export const indexableCities = ['barcelona', 'madrid'];
