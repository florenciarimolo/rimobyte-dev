import React from 'react';
import { getTranslation } from '@/i18n';
import type { Template } from '@/data/templates';

interface TemplateCardProps {
  template: Template;
  translations?: any;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template, translations }) => {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300">
      {/* Image */}
      {template.image && (
        <div className="relative aspect-video overflow-hidden">
          <img
            src={template.image}
            alt={template.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full mb-3">
            {translations ? getTranslation(translations, 'sections.templates.digitalProduct') : 'Producto digital'}
          </span>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {template.name}
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            {template.shortDescription}
          </p>
        </div>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {template.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={template.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-gray-700 dark:text-gray-300 hover:text-blue-400 transition-colors duration-200"
          >
            {translations ? getTranslation(translations, 'sections.templates.viewTemplate') : 'Ver template'}
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a
            href={template.gumroadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-gray-700 dark:text-gray-300 hover:text-blue-400 transition-colors duration-200"
          >
            {translations ? getTranslation(translations, 'sections.templates.viewResource') : 'Ver recurso'}
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
};

export default TemplateCard;
