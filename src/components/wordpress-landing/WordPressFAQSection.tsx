import React from 'react';
import { getTranslation, LANG } from '@/i18n';

interface WordPressFAQSectionProps {
  cityName?: string;
  translations: any;
  currentLang?: typeof LANG.ENGLISH | typeof LANG.SPANISH;
}

const WordPressFAQSection: React.FC<WordPressFAQSectionProps> = ({ cityName, translations, currentLang = LANG.SPANISH }) => {
  const faqs = [
    {
      question: getTranslation(translations, 'wordpressLanding.faq.items.onlyWordPress.question'),
      answer: getTranslation(translations, 'wordpressLanding.faq.items.onlyWordPress.answer')
    },
    {
      question: getTranslation(translations, 'wordpressLanding.faq.items.freelanceOrAgency.question'),
      answer: getTranslation(translations, 'wordpressLanding.faq.items.freelanceOrAgency.answer')
    },
    {
      question: getTranslation(translations, 'wordpressLanding.faq.items.canMaintain.question'),
      answer: getTranslation(translations, 'wordpressLanding.faq.items.canMaintain.answer')
    },
    {
      question: cityName 
        ? getTranslation(translations, 'wordpressLanding.faq.items.cityBusinesses.question').replace('{city}', cityName)
        : getTranslation(translations, 'wordpressLanding.faq.items.smallBusinesses.question'),
      answer: cityName
        ? getTranslation(translations, 'wordpressLanding.faq.items.cityBusinesses.answer').replace('{city}', cityName)
        : getTranslation(translations, 'wordpressLanding.faq.items.smallBusinesses.answer')
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">
            {getTranslation(translations, 'wordpressLanding.faq.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" aria-hidden="true"></div>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-black/60 backdrop-blur-md rounded-xl p-6 border border-gray-800 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              itemScope
              itemType="https://schema.org/Question"
            >
              <h3 className="text-lg font-semibold text-white mb-3 flex items-start gap-2" itemProp="name">
                <span className="text-purple-500 flex-shrink-0">{currentLang === LANG.SPANISH ? 'P:' : 'Q:'}</span>
                <span>{faq.question}</span>
              </h3>
              <div itemScope itemType="https://schema.org/Answer">
                <p className="text-gray-300 leading-relaxed pl-6" itemProp="text">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WordPressFAQSection;
