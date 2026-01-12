import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { getI18N, getTranslation, LANG } from '@/i18n';

const NotFoundPage: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<typeof LANG.ENGLISH | typeof LANG.SPANISH>(LANG.SPANISH);
  const translations = getI18N({ currentLocale: currentLang });

  const handleLanguageChange = (lang: typeof LANG.ENGLISH | typeof LANG.SPANISH) => {
    setCurrentLang(lang);
  };

  return (
    <div id="app" className="min-h-screen">
      {/* Navbar */}
      <Navbar currentLang={currentLang} onLanguageChange={handleLanguageChange} translations={translations} />

      {/* 404 Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-blue-100/20 to-purple-100/20 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-purple-500 rounded-full animate-ping"></div>
          <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 right-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        </div>

        <div className="flex flex-col items-center relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* 404 Number */}
          <h1 className="text-9xl md:text-[12rem] font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              {getTranslation(translations, 'notFound.title')}
            </span>
          </h1>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {getTranslation(translations, 'notFound.heading')}
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            {getTranslation(translations, 'notFound.description')}
          </p>

          {/* Home Button */}
          <a
            href="/"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {getTranslation(translations, 'notFound.button')}
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer translations={translations} />
    </div>
  );
};

export default NotFoundPage;

