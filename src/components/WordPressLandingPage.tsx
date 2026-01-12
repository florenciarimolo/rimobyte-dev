import React, { useEffect } from 'react';
import WordPressHeroSection from './wordpress-landing/WordPressHeroSection';
import WordPressProblemSection from './wordpress-landing/WordPressProblemSection';
import WordPressSolutionSection from './wordpress-landing/WordPressSolutionSection';
import WordPressServicesSection from './wordpress-landing/WordPressServicesSection';
import WordPressProcessSection from './wordpress-landing/WordPressProcessSection';
import WordPressProjectsSection from './wordpress-landing/WordPressProjectsSection';
import WordPressCTASection from './wordpress-landing/WordPressCTASection';
import WordPressFAQSection from './wordpress-landing/WordPressFAQSection';
import WordPressNavbar from './wordpress-landing/WordPressNavbar';
import ContactSection from './ContactSection';
import Footer from './Footer';
import { getI18N, LANG } from '@/i18n';
import { initScrollAnimations } from './wordpress-landing/scroll-animations';

// Declare UnicornStudio types
declare global {
  interface Window {
    UnicornStudio?: {
      isInitialized: boolean;
      init?: () => void;
    };
  }
}

interface WordPressLandingPageProps {
  cityName?: string;
  recaptchaSiteKey?: string;
  initialLocale?: typeof LANG.ENGLISH | typeof LANG.SPANISH;
}

const WordPressLandingPage: React.FC<WordPressLandingPageProps> = ({ cityName, recaptchaSiteKey, initialLocale = LANG.SPANISH }) => {
  const [currentLang, setCurrentLang] = React.useState<typeof LANG.ENGLISH | typeof LANG.SPANISH>(initialLocale);
  const translations = React.useMemo(() => getI18N({ currentLocale: currentLang }), [currentLang]);

  const handleLanguageChange = (lang: typeof LANG.ENGLISH | typeof LANG.SPANISH) => {
    setCurrentLang(lang);
    // Update URL - navigate to the correct language version
    const currentPath = window.location.pathname;
    let newPath = currentPath;
    
    // Handle base landing page
    if (currentPath === '/desarrolladora-wordpress-freelance' || currentPath.endsWith('/desarrolladora-wordpress-freelance')) {
      newPath = lang === LANG.ENGLISH ? '/en/desarrolladora-wordpress-freelance' : '/desarrolladora-wordpress-freelance';
    }
    // Handle city-specific pages
    else if (currentPath.includes('/desarrolladora-wordpress-freelance/')) {
      const cityPart = currentPath.split('/desarrolladora-wordpress-freelance/')[1];
      if (lang === LANG.ENGLISH) {
        newPath = `/en/desarrolladora-wordpress-freelance/${cityPart}`;
      } else {
        newPath = `/desarrolladora-wordpress-freelance/${cityPart}`;
      }
    }
    // Handle English version
    else if (currentPath.startsWith('/en/desarrolladora-wordpress-freelance')) {
      if (lang === LANG.SPANISH) {
        const cityPart = currentPath.replace('/en/desarrolladora-wordpress-freelance', '').replace(/^\//, '');
        newPath = cityPart ? `/desarrolladora-wordpress-freelance/${cityPart}` : '/desarrolladora-wordpress-freelance';
      }
    }
    
    if (newPath !== currentPath) {
      window.location.href = newPath;
    }
  };

  useEffect(() => {
    initScrollAnimations();
    // UnicornStudio initialization is now handled within individual sections (Hero and CTA)
  }, []);

  return (
    <div id="app" className="min-h-screen relative bg-black" style={{ zIndex: 1, position: 'relative' }}>
        <WordPressNavbar 
          currentLang={currentLang} 
          onLanguageChange={handleLanguageChange} 
          translations={translations}
        />
        
        <main className="relative bg-black" style={{ position: 'relative' }}>
          <WordPressHeroSection cityName={cityName} translations={translations} />
          <WordPressProblemSection translations={translations} />
          <WordPressSolutionSection translations={translations} />
          <WordPressServicesSection translations={translations} />
          <WordPressProcessSection translations={translations} />
          <WordPressProjectsSection translations={translations} />
          <WordPressCTASection translations={translations} />
          <WordPressFAQSection cityName={cityName} translations={translations} currentLang={currentLang} />
          <ContactSection translations={translations} currentLang={currentLang} recaptchaSiteKey={recaptchaSiteKey} isLanding={true} />
        </main>

        <Footer translations={translations} isLanding={true} />
    </div>
  );
};

export default WordPressLandingPage;
