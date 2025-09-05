import { getTranslation } from '../i18n';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'landing-page' | 'ecommerce' | 'web-app' | 'mobile-app' | 'api';
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
}

export const getProjects = (translations: any): Project[] => {
  const projectKeys = ['reset7', 'decos', 'rockzone', 'luciaNails', 'vilaLancisV2', 'vilaLancisV1'];
  
  return projectKeys.map(key => ({
    id: key,
    title: getTranslation(translations, `projects.${key}.title`),
    description: getTranslation(translations, `projects.${key}.description`),
    technologies: getTranslation(translations, `projects.${key}.technologies`).split(', '),
    link: getTranslation(translations, `projects.${key}.link`),
    image: '/assets/images/placeholder.jpg',
    category: key === 'decos' ? 'ecommerce' : 'web-app'
  }));
};

export const categories = [
  { id: 'all', labelKey: 'sections.projects.filters.all' },
  { id: 'ecommerce', labelKey: 'sections.projects.filters.ecommerce' },
  { id: 'web-app', labelKey: 'sections.projects.filters.webApps' }
];