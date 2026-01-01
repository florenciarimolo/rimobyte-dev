import { getTranslation } from '../i18n';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
}

export const getProjects = (translations: any): Project[] => {
  const projectKeys = ['rocolegal', 'upnext', 'jlgki', 'vibrantskin', 'bandidamezcal', 'reset7', 'decos', 'rockzone', 'luciaNails', 'vilaLancisV2', 'vilaLancisV1'];
  
  return projectKeys.map(key => ({
    id: key,
    title: getTranslation(translations, `projects.${key}.title`),
    description: getTranslation(translations, `projects.${key}.description`),
    technologies: getTranslation(translations, `projects.${key}.technologies`).split(', '),
    link: getTranslation(translations, `projects.${key}.link`),
    image: '/assets/images/' + getTranslation(translations, `projects.${key}.image`),
    category: getTranslation(translations, `projects.${key}.category`)
  }));
};

export const categories = [
  { id: 'all', labelKey: 'sections.projects.filters.all' },
  { id: 'ecommerce', labelKey: 'sections.projects.filters.ecommerce' },
  { id: 'web-app', labelKey: 'sections.projects.filters.webApps' },
  { id: 'services', labelKey: 'sections.projects.filters.services' },
  { id: 'events', labelKey: 'sections.projects.filters.events' }
];