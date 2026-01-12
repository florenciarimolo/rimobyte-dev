import { getTranslation } from '../i18n';

export interface Template {
  id: string;
  name: string;
  shortDescription: string;
  techStack: string[];
  gumroadLink: string;
  liveLink: string;
  image?: string;
}

export const getTemplates = (translations: any): Template[] => {
  const templateKeys = ['ai-saas-landing-astro'];
  
  return templateKeys.map(key => ({
    id: key,
    name: getTranslation(translations, `templates.${key}.name`),
    shortDescription: getTranslation(translations, `templates.${key}.shortDescription`),
    techStack: getTranslation(translations, `templates.${key}.techStack`).split(', '),
    gumroadLink: getTranslation(translations, `templates.${key}.gumroadLink`),
    liveLink: getTranslation(translations, `templates.${key}.liveLink`),
    image: getTranslation(translations, `templates.${key}.image`) 
      ? '/assets/images/templates/' + getTranslation(translations, `templates.${key}.image`)
      : undefined
  }));
};
