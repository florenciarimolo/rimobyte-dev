import React from 'react';
import { getTranslation } from '@/i18n';

interface MigrationWhenSectionProps {
  translations: any;
}

const MigrationWhenSection: React.FC<MigrationWhenSectionProps> = ({ translations }) => {
  const items = [
    {
      title: getTranslation(translations, 'migrationLanding.when.items.agencyDependency.title'),
      text: getTranslation(translations, 'migrationLanding.when.items.agencyDependency.text'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: getTranslation(translations, 'migrationLanding.when.items.hardToMaintain.title'),
      text: getTranslation(translations, 'migrationLanding.when.items.hardToMaintain.text'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    {
      title: getTranslation(translations, 'migrationLanding.when.items.performanceIssues.title'),
      text: getTranslation(translations, 'migrationLanding.when.items.performanceIssues.text'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: getTranslation(translations, 'migrationLanding.when.items.needChange.title'),
      text: getTranslation(translations, 'migrationLanding.when.items.needChange.text'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A1.414 1.414 0 0 1 21.582 7H19v2a1.414 1.414 0 0 1-1.414 1.414H15m-5 5v-5h.582m15.356 2A1.414 1.414 0 0 1 21.582 17H19v-2a1.414 1.414 0 0 0-1.414-1.414H15" />
        </svg>
      )
    }
  ];

  return (
    <section id="when" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            {getTranslation(translations, 'migrationLanding.when.intro')}
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-black/70 backdrop-blur-md rounded-xl p-6 border border-gray-800 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer scroll-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MigrationWhenSection;
