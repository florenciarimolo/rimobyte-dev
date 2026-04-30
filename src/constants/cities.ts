// City configuration with country information (Spain only)
export interface CityInfo {
  name: string;
  country: string;
  countryCode: string;
}

export const spanishCities: Record<string, CityInfo> = {
  'barcelona': { name: 'Barcelona', country: 'Spain', countryCode: 'ES' },
  'madrid': { name: 'Madrid', country: 'Spain', countryCode: 'ES' },
  'valencia': { name: 'Valencia', country: 'Spain', countryCode: 'ES' },
  'sevilla': { name: 'Sevilla', country: 'Spain', countryCode: 'ES' },
  'bilbao': { name: 'Bilbao', country: 'Spain', countryCode: 'ES' },
  'zaragoza': { name: 'Zaragoza', country: 'Spain', countryCode: 'ES' }
};

// Legacy export for backward compatibility
export const allowedCities: Record<string, string> = Object.fromEntries(
  Object.entries(spanishCities).map(([key, value]) => [key, value.name])
);

export function getAllowedCities(): Record<string, CityInfo> {
  return spanishCities;
}

// Get city info by slug
export function getCityInfo(slug: string): CityInfo | null {
  const normalizedSlug = slug.toLowerCase();
  return spanishCities[normalizedSlug] || null;
}

export function isValidCity(slug: string): boolean {
  const normalizedSlug = slug.toLowerCase();
  return normalizedSlug in spanishCities;
}

export const indexableCities = Object.keys(spanishCities);
