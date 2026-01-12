import React from 'react';
import { getTranslation } from '../i18n';

interface HeroSectionProps {
  translations: any;
}

const HeroSection: React.FC<HeroSectionProps> = ({ translations }) => {
  return (
    <header className="relative min-h-screen flex items-center justify-center py-20">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-animated-gradient"></div>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-500 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
      </div>

      <div className="flex flex-col items-center relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="relative mb-4">
          <div className="w-[200px] h-[200px] rounded-full p-1 bg-gradient-to-r from-blue-500 to-purple-500 relative z-0">
            <img 
              src="assets/images/programadora-web.webp" 
              alt={getTranslation(translations, 'hero.tagline') + ' - Florencia Rímolo'} 
              className="w-full h-full rounded-full object-cover relative z-0"
              width="200"
              height="200"
              loading="eager"
            />
          </div>
          {/* Available Pill */}
          <div 
            className="absolute top-2 right-0 translate-x-1/2 -translate-y-1/2 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 dark:bg-green-500/5 text-green-600 dark:text-green-300/90 border border-green-500/30 dark:border-green-500/20 shadow-[0_0_15px_-5px_rgba(34,197,94,0.3)] hover:bg-green-500/20 dark:hover:bg-green-500/10 cursor-default whitespace-nowrap z-50"
            style={{ position: 'absolute' }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400"></span>
            </span>
            {getTranslation(translations, 'hero.available') || 'Disponible'}
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Florencia Rímolo
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          {getTranslation(translations, 'hero.tagline')}
        </p>
        <nav className="flex flex-col sm:flex-row gap-4 justify-center" aria-label="Main navigation">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
          >
            {getTranslation(translations, 'hero.cta.viewWork')}
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-all duration-300"
          >
            {getTranslation(translations, 'hero.cta.getInTouch')}
          </a>
        </nav>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </header>
  );
};

export default HeroSection;

