import { getTranslation } from '../i18n';

export interface Education {
  id: string;
  title: string;
  institution: string;
  period: string;
  description: string;
}

export const getEducation = (translations: any): Education[] => {
  const educationKeys = ['computer', 'highSchool'];
  
  return educationKeys.map(key => ({
    id: key,
    title: getTranslation(translations, `education.${key}.title`),
    institution: getTranslation(translations, `education.${key}.institution`),
    period: getTranslation(translations, `education.${key}.period`),
    description: getTranslation(translations, `education.${key}.description`)
  }));
};