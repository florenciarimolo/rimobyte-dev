import React from 'react';
import TemplateCard from './TemplateCard';
import { getTranslation } from '@/i18n';
import { getTemplates } from '@/data/templates';

interface TemplatesSectionProps {
  translations: any;
}

const TemplatesSection: React.FC<TemplatesSectionProps> = ({ translations }) => {
  const templates = getTemplates(translations);

  return (
    <section id="templates" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            {getTranslation(translations, 'sections.templates.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" aria-hidden="true"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-base">
            {getTranslation(translations, 'sections.templates.intro')}
          </p>
        </header>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              translations={translations}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;
