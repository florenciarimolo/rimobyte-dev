import React from 'react';
import { getTranslation } from '@/i18n';

interface ProcessSectionProps {
  translations: any;
}

const STEPS = [
  { key: 'consultation', number: '01', color: 'from-blue-500 to-blue-600' },
  { key: 'proposal', number: '02', color: 'from-blue-500 to-purple-500' },
  { key: 'development', number: '03', color: 'from-purple-500 to-purple-600' },
  { key: 'delivery', number: '04', color: 'from-purple-500 to-pink-500' },
] as const;

const ProcessSection: React.FC<ProcessSectionProps> = ({ translations }) => {
  return (
    <section id="process" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            {getTranslation(translations, 'sections.process.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-4">
            {getTranslation(translations, 'sections.process.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" aria-hidden="true"></div>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, index) => (
            <div key={step.key} className="relative flex flex-col items-center text-center">
              {/* Connector line (hidden on first item and on mobile) */}
              {index > 0 && (
                <div className="hidden lg:block absolute top-7 -left-3 w-6 h-px bg-gradient-to-r from-gray-300 to-gray-300 dark:from-gray-600 dark:to-gray-600" aria-hidden="true" />
              )}

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-lg font-bold mb-4 shadow-lg`}>
                {step.number}
              </div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                {getTranslation(translations, `sections.process.steps.${step.key}.title`)}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {getTranslation(translations, `sections.process.steps.${step.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
