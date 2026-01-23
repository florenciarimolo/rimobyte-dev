import { getTranslation } from '@/i18n';
import React from 'react';
import LockIcon from '@/components/icons/LockIcon';
import LayoutIcon from '@/components/icons/LayoutIcon';
import CurrencyIcon from '@/components/icons/CurrencyIcon';

interface WordPressProblemSectionProps {
  translations: any;
}

const WordPressProblemSection: React.FC<WordPressProblemSectionProps> = ({ translations }) => {
  const problems = [
    {
      title: getTranslation(translations, 'wordpressLanding.problems.items.lackOfControl.title'),
      text: getTranslation(translations, 'wordpressLanding.problems.items.lackOfControl.text'),
      icon: <LockIcon />
    },
    {
      title: getTranslation(translations, 'wordpressLanding.problems.items.inflexibleWebs.title'),
      text: getTranslation(translations, 'wordpressLanding.problems.items.inflexibleWebs.text'),
      icon: <LayoutIcon />
    },
    {
      title: getTranslation(translations, 'wordpressLanding.problems.items.inflatedCosts.title'),
      text: getTranslation(translations, 'wordpressLanding.problems.items.inflatedCosts.text'),
      icon: <CurrencyIcon />
    }
  ];

  return (
    <section id="problems" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            {getTranslation(translations, 'wordpressLanding.sections.problems.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" aria-hidden="true"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            {getTranslation(translations, 'wordpressLanding.problems.description')}
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-black/70 backdrop-blur-md rounded-xl p-6 border border-gray-800 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer scroll-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white mb-4">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-300">
                {problem.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-300 dark:text-gray-200 leading-relaxed whitespace-pre-line">
            {getTranslation(translations, 'wordpressLanding.problems.extraText')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WordPressProblemSection;
