import React from 'react';
import { getI18N } from '@/i18n';
import { getTranslation } from '@/i18n';

const ProjectsPageHero: React.FC = () => {
  const translations = getI18N();

  return (
    <section
      className="relative min-h-[70vh] flex items-center justify-center py-16 md:py-20 bg-gray-50 dark:bg-gray-900"
      style={{ position: 'relative' }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse opacity-60 dark:opacity-40"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-500 rounded-full animate-ping opacity-60 dark:opacity-40"></div>
        <div
          className="absolute top-60 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-50 dark:opacity-30"
          style={{ animationDuration: '3s' }}
        ></div>
        <div
          className="absolute top-32 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60 dark:opacity-40"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-80 left-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping opacity-50 dark:opacity-30"
          style={{ animationDelay: '0.5s' }}
        ></div>
        <div
          className="absolute top-1/2 left-16 w-2.5 h-2.5 bg-purple-500 rounded-full animate-pulse opacity-60 dark:opacity-40"
          style={{ animationDelay: '1.5s' }}
        ></div>
        <div
          className="absolute top-1/2 right-24 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-60 dark:opacity-40"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-50 dark:opacity-30"
          style={{ animationDuration: '3.5s' }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60 dark:opacity-40"
          style={{ animationDelay: '1.8s' }}
        ></div>
      </div>

      <div className="relative z-10 px-4 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Casos reales que ya están online.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Trabajos con empresas y autónomos que ya facturan online. Cada uno arrancó con alcance y plan bien definidos.
        </p>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 text-sm text-gray-600 dark:text-gray-400">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {getTranslation(translations, 'hero.trustBar.experience')}
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {getTranslation(translations, 'hero.trustBar.projects')}
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {getTranslation(translations, 'hero.trustBar.rating')}
          </span>
        </div>

        <nav className="flex flex-col sm:flex-row gap-4 justify-center" aria-label="En proyectos">
          <a
            href="#contact"
            className="group relative inline-flex overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] focus:outline-none sm:w-auto text-base font-medium text-white w-full h-[54px] rounded-full px-8 items-center justify-center"
          >
            <div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
              <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#3b82f6_360deg)] animate-[beam-spin_3s_linear_infinite]"></div>
              <div className="absolute inset-[1px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
            <div className="overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px]">
              <div className="bg-gradient-to-b from-blue-900/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-blue-500/20 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-blue-500/40"></div>
            </div>
            <span className="transition-colors group-hover:text-white font-semibold text-white/90 tracking-tight z-10 relative">
              {getTranslation(translations, 'hero.cta.primary') || getTranslation(translations, 'hero.cta.viewServices')}
            </span>
          </a>
          <a
            href="#portfolio"
            className="group flex items-center justify-center px-8 py-3 text-sm font-medium text-gray-600 dark:text-gray-400 bg-transparent border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100/80 dark:hover:bg-gray-800/80 hover:border-gray-400 dark:hover:border-gray-500 transition-colors duration-200 sm:w-auto w-full min-h-[48px]"
          >
            {getTranslation(translations, 'hero.cta.secondary') || getTranslation(translations, 'hero.cta.whatsapp')}
          </a>
        </nav>
      </div>
    </section>
  );
};

export default ProjectsPageHero;
