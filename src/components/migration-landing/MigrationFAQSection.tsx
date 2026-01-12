import React, { useState } from 'react';
import { getTranslation, LANG } from '@/i18n';

interface MigrationFAQSectionProps {
  translations: any;
  currentLang?: typeof LANG.ENGLISH | typeof LANG.SPANISH;
}

const MigrationFAQSection: React.FC<MigrationFAQSectionProps> = ({ translations, currentLang = LANG.SPANISH }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: getTranslation(translations, 'migrationLanding.faq.items.contentLoss.question'),
      answer: getTranslation(translations, 'migrationLanding.faq.items.contentLoss.answer')
    },
    {
      question: getTranslation(translations, 'migrationLanding.faq.items.changeHosting.question'),
      answer: getTranslation(translations, 'migrationLanding.faq.items.changeHosting.answer')
    },
    {
      question: getTranslation(translations, 'migrationLanding.faq.items.agencyWebs.question'),
      answer: getTranslation(translations, 'migrationLanding.faq.items.agencyWebs.answer')
    },
    {
      question: getTranslation(translations, 'migrationLanding.faq.items.canMaintain.question'),
      answer: getTranslation(translations, 'migrationLanding.faq.items.canMaintain.answer')
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">
            {getTranslation(translations, 'migrationLanding.faq.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" aria-hidden="true"></div>
        </header>

        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-black/60 backdrop-blur-md rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300"
              itemScope
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between"
              >
                <h3 className="text-xl font-semibold text-white flex items-start gap-2" itemProp="name">
                  <span className="text-purple-500 flex-shrink-0">{currentLang === LANG.SPANISH ? 'P:' : 'Q:'}</span>
                  <span>{faq.question}</span>
                </h3>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ml-4 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6" itemScope itemType="https://schema.org/Answer">
                  <p className="text-gray-300 leading-relaxed pl-6" itemProp="text">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MigrationFAQSection;
