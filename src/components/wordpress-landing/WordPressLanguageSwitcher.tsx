import React, { useState, useEffect } from 'react';
import SpainFlag from '@/components/flags/Spain';
import UnitedKingdomFlag from '@/components/flags/UnitedKingdom';
import { LANG } from '@/i18n';
import { LANGUAGES } from '@/i18n/ui';

interface WordPressLanguageSwitcherProps {
  currentLang: typeof LANG.ENGLISH | typeof LANG.SPANISH;
  onLanguageChange: (lang: typeof LANG.ENGLISH | typeof LANG.SPANISH) => void;
}

const WordPressLanguageSwitcher: React.FC<WordPressLanguageSwitcherProps> = ({ currentLang, onLanguageChange }) => {
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
        className={`language-switcher relative flex items-center space-x-2 px-3 py-2 bg-black/70 backdrop-blur-md text-white rounded-xl border border-gray-800 hover:bg-black/60 transition-all duration-200 focus:outline-none ${
          isOpen ? 'text-white' : ''
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
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 overflow-hidden bg-black/70 backdrop-blur-md rounded-xl shadow-lg border border-gray-800 z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                onLanguageChange(language.code as typeof LANG.ENGLISH | typeof LANG.SPANISH);
                setIsOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-left text-white hover:bg-black/60 transition-colors duration-200 ${
                currentLang === language.code ? 'bg-black/60' : ''
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

export default WordPressLanguageSwitcher;
