// Whitelist of allowed cities for WordPress landing pages
// This list is used for validation and sitemap generation
export const allowedCities: Record<string, string> = {
  'barcelona': 'Barcelona',
  'madrid': 'Madrid',
  'valencia': 'Valencia',
  'sevilla': 'Sevilla',
  'bilbao': 'Bilbao',
  'zaragoza': 'Zaragoza'
};

// Cities that should be indexable (index=true)
// Note: All cities in allowedCities are included in sitemap,
// but only these have index meta tag
export const indexableCities = ['barcelona', 'madrid'];
