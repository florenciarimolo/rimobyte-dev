import React, { useEffect } from 'react';
import MigrationNavbar from './migration-landing/MigrationNavbar';
import MigrationHeroSection from './migration-landing/MigrationHeroSection';
import MigrationWhenSection from './migration-landing/MigrationWhenSection';
import MigrationWhatSection from './migration-landing/MigrationWhatSection';
import MigrationProcessSection from './migration-landing/MigrationProcessSection';
import MigrationBenefitsSection from './migration-landing/MigrationBenefitsSection';
import MigrationProjectsSection from './migration-landing/MigrationProjectsSection';
import MigrationFAQSection from './migration-landing/MigrationFAQSection';
import MigrationCTASection from './migration-landing/MigrationCTASection';
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

interface MigrationLandingPageProps {
  recaptchaSiteKey?: string;
}

const MigrationLandingPage: React.FC<MigrationLandingPageProps> = ({ recaptchaSiteKey }) => {
  const translations = React.useMemo(() => getI18N(), []);

  useEffect(() => {
    initScrollAnimations();
  }, []);

  return (
    <div id="app" className="min-h-screen relative bg-gray-50 dark:bg-gray-900" style={{ zIndex: 1, position: 'relative' }}>
        <MigrationNavbar translations={translations} />
        
        <main className="relative bg-gray-50 dark:bg-gray-900" style={{ position: 'relative' }}>
          <MigrationHeroSection translations={translations} />
          <MigrationWhenSection translations={translations} />
          <MigrationWhatSection translations={translations} />
          <MigrationProcessSection translations={translations} />
          <MigrationBenefitsSection translations={translations} />
          <MigrationProjectsSection translations={translations} />
          <GoogleReviewsSection variant="dark" />
          <MigrationCTASection translations={translations} />
          <MigrationFAQSection translations={translations} />
          <ContactSection translations={translations} recaptchaSiteKey={recaptchaSiteKey} isLanding={true} landingType="migration" />
        </main>

        <Footer translations={translations} isLanding={true} />
    </div>
  );
};

export default MigrationLandingPage;
