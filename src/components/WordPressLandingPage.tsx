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
import { getI18N, LANG, LANG_PREFIXES } from '@/i18n';
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
    // Update URL - navigate to the correct language version with prefix
    const currentPath = window.location.pathname;
    let newPath = currentPath;
    
    // Extract the path without language prefix
    let pathWithoutLang = currentPath;
    if (currentPath.startsWith(`${LANG_PREFIXES.ENGLISH}/`)) {
      pathWithoutLang = currentPath.replace(LANG_PREFIXES.ENGLISH, '');
    } else if (currentPath.startsWith(`${LANG_PREFIXES.SPANISH}/`)) {
      pathWithoutLang = currentPath.replace(LANG_PREFIXES.SPANISH, '');
    }
    
    // Build new path with correct language prefix
    const langPrefix = lang === LANG.ENGLISH ? LANG_PREFIXES.ENGLISH : LANG_PREFIXES.SPANISH;
    newPath = pathWithoutLang === '/' ? `${langPrefix}/` : `${langPrefix}${pathWithoutLang}`;
    
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
