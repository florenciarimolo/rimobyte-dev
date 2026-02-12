import React, { useState } from 'react';
import { getTranslation } from '@/i18n';

interface RescueWordPressFAQSectionProps {
  translations: any;
}

const RescueWordPressFAQSection: React.FC<RescueWordPressFAQSectionProps> = ({ translations }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: getTranslation(translations, 'rescueWordPressLanding.faq.items.howLong.question'),
      answer: getTranslation(translations, 'rescueWordPressLanding.faq.items.howLong.answer')
    },
    {
      question: getTranslation(translations, 'rescueWordPressLanding.faq.items.guaranteed.question'),
      answer: getTranslation(translations, 'rescueWordPressLanding.faq.items.guaranteed.answer')
    },
    {
      question: getTranslation(translations, 'rescueWordPressLanding.faq.items.dataLoss.question'),
      answer: getTranslation(translations, 'rescueWordPressLanding.faq.items.dataLoss.answer')
    },
    {
      question: getTranslation(translations, 'rescueWordPressLanding.faq.items.afterHours.question'),
      answer: getTranslation(translations, 'rescueWordPressLanding.faq.items.afterHours.answer')
    },
    {
      question: getTranslation(translations, 'rescueWordPressLanding.faq.items.cannotAccess.question'),
      answer: getTranslation(translations, 'rescueWordPressLanding.faq.items.cannotAccess.answer')
    },
    {
      question: getTranslation(translations, 'rescueWordPressLanding.faq.items.prevention.question'),
      answer: getTranslation(translations, 'rescueWordPressLanding.faq.items.prevention.answer')
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {getTranslation(translations, 'rescueWordPressLanding.sections.faq.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" aria-hidden="true"></div>
        </header>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-md rounded-xl border border-gray-800 overflow-hidden scroll-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-900/50 transition-colors duration-200"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-blue-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RescueWordPressFAQSection;
