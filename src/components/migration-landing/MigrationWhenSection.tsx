import React from 'react';
import { getTranslation } from '@/i18n';
import { LockIcon, AlertTriangleIcon, LightningIcon, ArrowForwardIcon } from '@/components/icons';

interface MigrationWhenSectionProps {
  translations: any;
}

const MigrationWhenSection: React.FC<MigrationWhenSectionProps> = ({ translations }) => {
  const items = [
    {
      title: getTranslation(translations, 'migrationLanding.when.items.agencyDependency.title'),
      text: getTranslation(translations, 'migrationLanding.when.items.agencyDependency.text'),
      icon: <LockIcon />
    },
    {
      title: getTranslation(translations, 'migrationLanding.when.items.hardToMaintain.title'),
      text: getTranslation(translations, 'migrationLanding.when.items.hardToMaintain.text'),
      icon: <AlertTriangleIcon />
    },
    {
      title: getTranslation(translations, 'migrationLanding.when.items.performanceIssues.title'),
      text: getTranslation(translations, 'migrationLanding.when.items.performanceIssues.text'),
      icon: <LightningIcon />
    },
    {
      title: getTranslation(translations, 'migrationLanding.when.items.needChange.title'),
      text: getTranslation(translations, 'migrationLanding.when.items.needChange.text'),
      icon: <ArrowForwardIcon />
    }
  ];

  return (
    <section id="when" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <p className="text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
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
              <h3 className="text-2xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-300 dark:text-gray-200 leading-relaxed whitespace-pre-line">
            {getTranslation(translations, 'migrationLanding.when.extraText')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MigrationWhenSection;
