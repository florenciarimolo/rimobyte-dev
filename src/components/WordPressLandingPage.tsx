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
import GoogleReviewsSection from './GoogleReviewsSection';
import { getI18N } from '@/i18n';
import { initScrollAnimations } from './wordpress-landing/scroll-animations';

declare global {
  interface Window {
    UnicornStudio?: {
      isInitialized: boolean;
      init?: () => void;
    };
  }
}

interface WordPressLandingPageProps {
  recaptchaSiteKey?: string;
}

const WordPressLandingPage: React.FC<WordPressLandingPageProps> = ({ recaptchaSiteKey }) => {
  const translations = React.useMemo(() => getI18N(), []);

  useEffect(() => {
    initScrollAnimations();
  }, []);

  return (
    <div id="app" className="min-h-screen relative bg-gray-50 dark:bg-gray-900" style={{ zIndex: 1, position: 'relative' }}>
        <WordPressNavbar translations={translations} />
        
        <main className="relative bg-gray-50 dark:bg-gray-900" style={{ position: 'relative' }}>
          <WordPressHeroSection translations={translations} />
          <WordPressProblemSection translations={translations} />
          <WordPressSolutionSection translations={translations} />
          <WordPressServicesSection translations={translations} />
          <WordPressProcessSection translations={translations} />
          <WordPressProjectsSection translations={translations} />
          <GoogleReviewsSection variant="dark" />
          <WordPressCTASection translations={translations} />
          <WordPressFAQSection translations={translations} />
          <ContactSection translations={translations} recaptchaSiteKey={recaptchaSiteKey} isLanding={true} landingType="wordpress" />
        </main>

        <Footer translations={translations} isLanding={true} />
    </div>
  );
};

export default WordPressLandingPage;
