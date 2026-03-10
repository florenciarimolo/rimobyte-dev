import React, { useState } from 'react';
import { getTranslation } from '@/i18n';

interface FAQSectionProps {
  translations: any;
}

const FAQ_KEYS = ['howMuch', 'howLong', 'onlyWordPress', 'canMaintain', 'remote', 'whatMaintenance'] as const;

const FAQSection: React.FC<FAQSectionProps> = ({ translations }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {getTranslation(translations, 'sections.faq.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" aria-hidden="true"></div>
        </header>

        <div className="space-y-3">
          {FAQ_KEYS.map((key, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={key}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-150"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-gray-900 dark:text-white pr-4">
                    {getTranslation(translations, `sections.faq.items.${key}.question`)}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 animate-[fadeIn_0.2s_ease-out]">
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {getTranslation(translations, `sections.faq.items.${key}.answer`)}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
