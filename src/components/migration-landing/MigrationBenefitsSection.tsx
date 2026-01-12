import React from 'react';
import { getTranslation } from '@/i18n';

interface MigrationBenefitsSectionProps {
  translations: any;
}

const MigrationBenefitsSection: React.FC<MigrationBenefitsSectionProps> = ({ translations }) => {
  const benefits = [
    {
      title: getTranslation(translations, 'migrationLanding.benefits.items.control.title'),
      text: getTranslation(translations, 'migrationLanding.benefits.items.control.text'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: getTranslation(translations, 'migrationLanding.benefits.items.stability.title'),
      text: getTranslation(translations, 'migrationLanding.benefits.items.stability.text'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: getTranslation(translations, 'migrationLanding.benefits.items.maintenance.title'),
      text: getTranslation(translations, 'migrationLanding.benefits.items.maintenance.text'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
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
