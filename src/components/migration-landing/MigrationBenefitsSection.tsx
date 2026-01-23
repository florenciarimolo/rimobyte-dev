import React from 'react';
import { getTranslation } from '@/i18n';
import { EyeIcon, CheckIcon, SettingsIcon } from '@/components/icons';

interface MigrationBenefitsSectionProps {
  translations: any;
}

const MigrationBenefitsSection: React.FC<MigrationBenefitsSectionProps> = ({ translations }) => {
  const benefits = [
    {
      title: getTranslation(translations, 'migrationLanding.benefits.items.control.title'),
      text: getTranslation(translations, 'migrationLanding.benefits.items.control.text'),
      icon: <EyeIcon />
    },
    {
      title: getTranslation(translations, 'migrationLanding.benefits.items.stability.title'),
      text: getTranslation(translations, 'migrationLanding.benefits.items.stability.text'),
      icon: <CheckIcon />
    },
    {
      title: getTranslation(translations, 'migrationLanding.benefits.items.maintenance.title'),
      text: getTranslation(translations, 'migrationLanding.benefits.items.maintenance.text'),
      icon: <SettingsIcon />
    }
  ];

  return (
    <section id="benefits" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <p className="text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            {getTranslation(translations, 'migrationLanding.benefits.intro')}
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-black/70 backdrop-blur-md rounded-xl p-6 border border-gray-800 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer scroll-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-300">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MigrationBenefitsSection;
