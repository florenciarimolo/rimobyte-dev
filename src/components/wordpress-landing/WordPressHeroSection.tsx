import React, { useEffect } from 'react';
import { getTranslation } from '@/i18n';

// Declare UnicornStudio types
declare global {
  interface Window {
    UnicornStudio?: {
      isInitialized: boolean;
      init?: () => void;
    };
  }
}

interface WordPressHeroSectionProps {
  cityName?: string;
  translations: any;
}

const WordPressHeroSection: React.FC<WordPressHeroSectionProps> = ({ cityName, translations }) => {
  const localSeoText = cityName 
    ? getTranslation(translations, 'wordpressLanding.hero.localSeo').replace('{city}', cityName)
    : getTranslation(translations, 'wordpressLanding.hero.localSeoDefault');

  useEffect(() => {
    // Ensure Unicorn Studio initializes (script loads from MainLayout.astro)
    // The div is scoped to this Hero section only
    let retryCount = 0;
    const maxRetries = 20;

    const initUnicornStudio = () => {
      const heroSection = document.querySelector('section.hero-section');
      const div = document.getElementById('hero-unicorn-bg') as HTMLElement;
      const UnicornStudioGlobal = (window as any).UnicornStudio;
      
      if (div && heroSection) {
        // Ensure div has proper dimensions and positioning
        const sectionRect = heroSection.getBoundingClientRect();
        div.style.position = 'absolute';
        div.style.top = '0';
        div.style.left = '0';
        div.style.width = '100%';
        div.style.height = '100%';
        div.style.zIndex = '0';
        div.style.pointerEvents = 'none';
        
        console.log('🔍 Hero section found:', {
          divExists: !!div,
          sectionHeight: sectionRect.height,
          sectionWidth: sectionRect.width,
          UnicornStudioExists: !!UnicornStudioGlobal
        });
        
        if (UnicornStudioGlobal) {
          // Wait for UnicornStudio to be ready
          if (typeof UnicornStudioGlobal.init === 'function') {
            try {
              // Force re-initialization
              if (window.UnicornStudio) {
                window.UnicornStudio.isInitialized = false;
              }
              UnicornStudioGlobal.init();
              if (window.UnicornStudio) {
                window.UnicornStudio.isInitialized = true;
              }
              console.log('✅ UnicornStudio initialized for Hero section');
              
              // Check if canvas was created
              setTimeout(() => {
                const canvas = div.querySelector('canvas');
                console.log('🎨 Canvas in Hero:', !!canvas, canvas ? { 
                  width: canvas.width, 
                  height: canvas.height,
                  display: window.getComputedStyle(canvas).display
                } : null);
              }, 500);
            } catch (error) {
              console.error('❌ Error initializing UnicornStudio:', error);
            }
          } else if (retryCount < maxRetries) {
            // init function not available yet, retry
            retryCount++;
            setTimeout(initUnicornStudio, 300);
          }
        } else if (retryCount < maxRetries) {
          // Script not loaded yet, retry
          retryCount++;
          setTimeout(initUnicornStudio, 300);
        }
      } else if (retryCount < maxRetries) {
        // Div or section not found yet, retry
        retryCount++;
        setTimeout(initUnicornStudio, 200);
      }
    };
    
    // Start initialization after a short delay to ensure DOM is ready
    setTimeout(initUnicornStudio, 100);
    setTimeout(initUnicornStudio, 500);
    setTimeout(initUnicornStudio, 1000);
    setTimeout(initUnicornStudio, 2000);
  }, []);

  return (
    <section className="hero-section relative py-20 md:py-32 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Unicorn Studio Background - Scoped to Hero section only, reduced intensity */}
      <div 
        data-us-project="p7Ff6pfTrb5Gs59C7nLC" 
        id="hero-unicorn-bg"
        className="absolute inset-0 z-0 pointer-events-none bg-black/20"
        style={{ 
          opacity: 0.9,
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      ></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up drop-shadow-lg text-center">
            {getTranslation(translations, 'wordpressLanding.hero.title')}
          </h1>
          
          <p className="text-lg text-gray-200 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {getTranslation(translations, 'wordpressLanding.hero.subtitle')}
          </p>

          <p className="text-sm text-gray-400 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            {localSeoText}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <a
              href="/#contact"
              className="group flex items-center gap-2 pl-6 pr-5 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-all duration-200 font-sans whitespace-nowrap w-full sm:w-auto justify-center"
            >
              <span className="font-sans">
                {getTranslation(translations, 'wordpressLanding.hero.cta.contact')}
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
            <a
              href="/#projects"
              className="group flex items-center justify-center gap-2 px-8 py-3.5 text-base font-medium text-white bg-transparent border border-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5),0_0_10px_rgba(168,85,247,0.3),inset_0_0_10px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 hover:border-blue-400 hover:shadow-[0_0_35px_rgba(59,130,246,0.6),0_0_20px_rgba(168,85,247,0.4),inset_0_0_20px_rgba(59,130,246,0.4)] hover:scale-[1.02] transition-all duration-300"
            >
              {getTranslation(translations, 'wordpressLanding.hero.cta.viewProjects')}
            </a>
          </div>

          {/* Project Screenshots Visual Element */}
          <div className="mt-16 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-center gap-3 md:gap-4 lg:gap-6 w-full max-w-4xl mx-auto px-4">
                {/* Screenshot 1 - Slightly rotated left */}
                <div className="relative z-10 transform -rotate-2 hidden sm:block">
                  <img
                    src="/assets/images/projects/rocolegal.webp"
                    alt="Roco Legal - WordPress Project"
                    className="w-full max-w-[200px] md:max-w-[240px] lg:max-w-[280px] rounded-lg shadow-xl border border-gray-800/50"
                    loading="lazy"
                  />
                </div>
                
                {/* Screenshot 2 - Center, no rotation */}
                <div className="relative z-20 transform translate-y-2">
                  <img
                    src="/assets/images/projects/upnext.webp"
                    alt="UpNext - WordPress Project"
                    className="w-full max-w-[240px] md:max-w-[280px] lg:max-w-[320px] rounded-lg shadow-xl border border-gray-800/50"
                    loading="lazy"
                  />
                </div>
                
                {/* Screenshot 3 - Slightly rotated right */}
                <div className="relative z-10 transform rotate-2 hidden sm:block">
                  <img
                    src="/assets/images/projects/reset7.webp"
                    alt="RESET7 - WordPress Project"
                    className="w-full max-w-[200px] md:max-w-[240px] lg:max-w-[280px] rounded-lg shadow-xl border border-gray-800/50"
                    loading="lazy"
                  />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WordPressHeroSection;
