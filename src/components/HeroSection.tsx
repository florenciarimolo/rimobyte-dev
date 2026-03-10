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

      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 relative z-10 px-4 max-w-5xl mx-auto">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              {getTranslation(translations, 'hero.headline')}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
            {getTranslation(translations, 'hero.tagline')}
          </p>

          {/* Trust bar */}
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 mb-8 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {getTranslation(translations, 'hero.trustBar.experience')}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {getTranslation(translations, 'hero.trustBar.projects')}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              {getTranslation(translations, 'hero.trustBar.rating')}
            </span>
          </div>

          {/* CTAs */}
          <nav className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start" aria-label="Main navigation">
            <a
              href="#services"
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
                {getTranslation(translations, 'hero.cta.viewServices')}
              </span>
            </a>
            <a
              href="https://wa.me/34684713743"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-8 py-3.5 text-base font-medium text-gray-700 dark:text-white bg-transparent border border-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5),0_0_10px_rgba(168,85,247,0.3),inset_0_0_10px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 hover:border-blue-400 hover:shadow-[0_0_35px_rgba(59,130,246,0.6),0_0_20px_rgba(168,85,247,0.4),inset_0_0_20px_rgba(59,130,246,0.4)] hover:scale-[1.02] transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              {getTranslation(translations, 'hero.cta.whatsapp')}
            </a>
          </nav>
        </div>

        {/* Photo + name */}
        <div className="flex flex-col items-center shrink-0">
          <div className="relative mb-4">
            <div className="w-[180px] h-[180px] md:w-[200px] md:h-[200px] rounded-full p-1 bg-gradient-to-r from-blue-500 to-purple-500 relative z-0">
              <img
                src="/assets/images/programadora-web-200w.webp"
                srcSet="/assets/images/programadora-web-200w.webp 200w, /assets/images/programadora-web-400w.webp 400w"
                sizes="200px"
                alt={getTranslation(translations, 'hero.headline') + ' - Florencia Rímolo'}
                className="w-full h-full rounded-full object-cover relative z-0"
                width="200"
                height="200"
                loading="eager"
                fetchPriority="high"
              />
            </div>
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
          <p className="text-lg font-semibold text-gray-900 dark:text-white">Florencia Rímolo</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">RimoByte</p>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
