import React, { useState, useEffect } from 'react';
import SpainFlag from '@/components/flags/Spain';
import UnitedKingdomFlag from '@/components/flags/UnitedKingdom';
import { LANG } from '@/i18n';
import { LANGUAGES } from '@/i18n/ui';

interface LanguageSwitcherProps {
  currentLang: 'en' | 'es';
  onLanguageChange: (lang: 'en' | 'es') => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: LANG.ENGLISH, name: 'English', flag: UnitedKingdomFlag },
    { code: LANG.SPANISH, name: 'Español', flag: SpainFlag }
  ];

  const currentLanguage = languages.find(lang => lang.code === currentLang);
  const currentLocaleData = LANGUAGES[currentLang]

  // close the dropdown when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    if (isOpen && !(event.target as HTMLElement)?.closest('.language-switcher')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`language-switcher relative flex items-center space-x-2 px-3 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          isOpen ? 'text-gray-900 dark:text-white' : ''
        }`}
        aria-label="Select language"
      >
        <currentLocaleData.flag />
        <span className="text-sm font-medium">{currentLanguage?.code.toUpperCase()}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        {/* Active indicator */}
        {isOpen && (
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg border border-gray-400 dark:border-gray-700 z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                onLanguageChange(language.code as 'en' | 'es');
                setIsOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 ${
                currentLang === language.code ? 'bg-gray-200 dark:bg-gray-700' : ''
              }`}
            >
              <language.flag />
              <span className="text-sm font-medium">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
