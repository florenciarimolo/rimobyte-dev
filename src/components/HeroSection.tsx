import React from 'react';
import { getTranslation } from '@/i18n';

interface HeroSectionProps {
  translations: any;
}

const HeroSection: React.FC<HeroSectionProps> = ({ translations }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 bg-gray-50 dark:bg-gray-900" style={{ position: 'relative' }}>
      {/* Floating Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse opacity-60 dark:opacity-40"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-500 rounded-full animate-ping opacity-60 dark:opacity-40"></div>
        <div className="absolute top-60 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-50 dark:opacity-30" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-32 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60 dark:opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-80 left-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping opacity-50 dark:opacity-30" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-16 w-2.5 h-2.5 bg-purple-500 rounded-full animate-pulse opacity-60 dark:opacity-40" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 right-24 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-60 dark:opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-50 dark:opacity-30" style={{ animationDuration: '3.5s' }}></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60 dark:opacity-40" style={{ animationDelay: '1.8s' }}></div>
      </div>
      
      <div className="flex flex-col items-center relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="relative mb-4">
          <div className="w-[200px] h-[200px] rounded-full p-1 bg-gradient-to-r from-blue-500 to-purple-500 relative z-0">
            <img 
              src="/assets/images/programadora-web.webp" 
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
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">
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
            className="group relative inline-flex overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] focus:outline-none sm:w-auto text-base font-medium text-white w-full h-[54px] rounded-full px-8 items-center justify-center"
          >
            {/* Animated Border Beam - Using primary color (blue) */}
            <div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
              <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#3b82f6_360deg)] animate-[beam-spin_3s_linear_infinite]"></div>
              <div className="absolute inset-[1px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>

            {/* Inner Background & Effects - Keep current gradient */}
            <div className="overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px]">
              {/* Gradient Background Overlay */}
              <div className="bg-gradient-to-b from-blue-900/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>


              {/* Blue Glow on Hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-blue-500/20 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-blue-500/40"></div>
            </div>

            {/* Content */}
            <span className="transition-colors group-hover:text-white font-semibold text-white/90 tracking-tight z-10 relative">
              {getTranslation(translations, 'hero.cta.viewWork')}
            </span>
          </a>
          <a
            href="#contact"
            className="group flex items-center justify-center gap-2 px-8 py-3.5 text-base font-medium text-gray-700 dark:text-white bg-transparent border border-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5),0_0_10px_rgba(168,85,247,0.3),inset_0_0_10px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 hover:border-blue-400 hover:shadow-[0_0_35px_rgba(59,130,246,0.6),0_0_20px_rgba(168,85,247,0.4),inset_0_0_20px_rgba(59,130,246,0.4)] hover:scale-[1.02] transition-all duration-300"
          >
            {getTranslation(translations, 'hero.cta.getInTouch')}
          </a>
        </nav>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce flex items-center justify-center w-6" aria-hidden="true">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

