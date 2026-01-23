import React from 'react';
import { getTranslation } from '@/i18n';
import { SearchIcon, DocumentIcon, CodeIcon, CheckCircleIcon } from '@/components/icons';

interface MigrationProcessSectionProps {
  translations: any;
}

const MigrationProcessSection: React.FC<MigrationProcessSectionProps> = ({ translations }) => {
  const steps = [
    {
      title: getTranslation(translations, 'migrationLanding.process.steps.analysis.title'),
      description: getTranslation(translations, 'migrationLanding.process.steps.analysis.description'),
      icon: <SearchIcon strokeWidth={1.5} />
    },
    {
      title: getTranslation(translations, 'migrationLanding.process.steps.proposal.title'),
      description: getTranslation(translations, 'migrationLanding.process.steps.proposal.description'),
      icon: <DocumentIcon strokeWidth={1.5} />
    },
    {
      title: getTranslation(translations, 'migrationLanding.process.steps.migration.title'),
      description: getTranslation(translations, 'migrationLanding.process.steps.migration.description'),
      icon: <CodeIcon strokeWidth={1.5} />
    },
    {
      title: getTranslation(translations, 'migrationLanding.process.steps.delivery.title'),
      description: getTranslation(translations, 'migrationLanding.process.steps.delivery.description'),
      icon: <CheckCircleIcon className="w-8 h-8" strokeWidth={1.5} />
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

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-300 dark:text-gray-200 font-medium">
            {getTranslation(translations, 'migrationLanding.process.pricing')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MigrationProcessSection;
