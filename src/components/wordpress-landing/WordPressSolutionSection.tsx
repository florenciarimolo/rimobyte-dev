import React from 'react';
import { getTranslation } from '@/i18n';

interface WordPressSolutionSectionProps {
  translations: any;
}

const WordPressSolutionSection: React.FC<WordPressSolutionSectionProps> = ({ translations }) => {
  const features = [
    getTranslation(translations, 'wordpressLanding.solution.features.directContact'),
    getTranslation(translations, 'wordpressLanding.solution.features.explainedDecisions'),
    getTranslation(translations, 'wordpressLanding.solution.features.lastingCode'),
    getTranslation(translations, 'wordpressLanding.solution.features.easyToScale')
  ];

  return (
    <section id="solution" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            {getTranslation(translations, 'wordpressLanding.sections.solution.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" aria-hidden="true"></div>
        </header>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left: Text */}
          <div>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              {getTranslation(translations, 'wordpressLanding.solution.description')}
            </p>
          </div>

          {/* Right: Feature List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 scroll-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WordPressSolutionSection;
