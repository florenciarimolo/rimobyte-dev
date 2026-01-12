import React from 'react';
import { getTranslation } from '@/i18n';

interface MigrationWhatSectionProps {
  translations: any;
}

const MigrationWhatSection: React.FC<MigrationWhatSectionProps> = ({ translations }) => {
  const checklistItems = [
    getTranslation(translations, 'migrationLanding.what.checklist.audit'),
    getTranslation(translations, 'migrationLanding.what.checklist.review'),
    getTranslation(translations, 'migrationLanding.what.checklist.migration'),
    getTranslation(translations, 'migrationLanding.what.checklist.cleanup'),
    getTranslation(translations, 'migrationLanding.what.checklist.base')
  ];

  return (
    <section id="what" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              {getTranslation(translations, 'migrationLanding.what.intro')}
            </p>
          </div>

          {/* Right: Checklist */}
          <div className="space-y-4">
            {checklistItems.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-black/70 backdrop-blur-md rounded-lg p-4 border border-gray-800 scroll-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MigrationWhatSection;
