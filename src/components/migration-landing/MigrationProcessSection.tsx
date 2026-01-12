import React from 'react';
import { getTranslation } from '@/i18n';

interface MigrationProcessSectionProps {
  translations: any;
}

const MigrationProcessSection: React.FC<MigrationProcessSectionProps> = ({ translations }) => {
  const steps = [
    {
      title: getTranslation(translations, 'migrationLanding.process.steps.analysis.title'),
      description: getTranslation(translations, 'migrationLanding.process.steps.analysis.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      )
    },
    {
      title: getTranslation(translations, 'migrationLanding.process.steps.proposal.title'),
      description: getTranslation(translations, 'migrationLanding.process.steps.proposal.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
      )
    },
    {
      title: getTranslation(translations, 'migrationLanding.process.steps.migration.title'),
      description: getTranslation(translations, 'migrationLanding.process.steps.migration.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>
      )
    },
    {
      title: getTranslation(translations, 'migrationLanding.process.steps.delivery.title'),
      description: getTranslation(translations, 'migrationLanding.process.steps.delivery.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 18H18a2.25 2.25 0 002.25-2.25V9.75A2.25 2.25 0 0018 7.5h-1.5m-9 3.75V18a2.25 2.25 0 002.25 2.25h6A2.25 2.25 0 0018 18V9.75a2.25 2.25 0 00-2.25-2.25h-6A2.25 2.25 0 007.5 9.75v.75m0 0H4.5m3 0h3m-3 0v-1.5m0 1.5v-1.5m3 1.5H7.5m0 0v-1.5m0 1.5H4.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
        </svg>
      )
    }
  ];

  return (
    <section id="process" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vertical list layout - icon left, text right, centered horizontally */}
        <div className="space-y-8 md:space-y-6 max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-4 md:gap-6 justify-center scroll-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon - left */}
              <div className="flex-shrink-0">
                <div className="w-10 h-10 flex items-center justify-center text-blue-500">
                  {step.icon}
                </div>
              </div>
              
              {/* Content - right */}
              <div className="flex-1 max-w-2xl">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MigrationProcessSection;
