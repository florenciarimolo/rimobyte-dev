import { getTranslation } from '@/i18n';

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export const getExperience = (translations: any): Experience[] => {
  const experienceKeys = ['freelance', 'ithinkupc','flanks', 'inlabfib'];
  
  const technologiesMap = {
    'ithinkupc': ['GitLab', 'Spring Boot', 'Vue.js', 'Java', 'TypeScript', 'Markdown', 'Oracle SQL', 'MongoDB'],
    'freelance': ['WordPress', 'Elementor', 'Astra', 'Divi', 'WooCommerce', 'Yoast SEO', 'CSS', 'JavaScript'],
    'flanks': ['Django', 'Vue.js', 'Docker', 'Kubernetes', 'Python', 'Scraping'],
    'inlabfib': ['Django REST Framework', 'Java', 'Python', 'Oracle SQL', 'MongoDB']
  };
  
  return experienceKeys.map(key => ({
    id: key,
    title: getTranslation(translations, `experience.${key}.title`),
    company: key === 'ithinkupc' ? 'iThinkUPC' : key === 'freelance' ? 'Freelance' : key === 'flanks' ? 'Flanks' : 'inLabFIB',
    period: getTranslation(translations, `experience.${key}.period`),
    description: getTranslation(translations, `experience.${key}.description`),
    technologies: technologiesMap[key as keyof typeof technologiesMap]
  }));
};