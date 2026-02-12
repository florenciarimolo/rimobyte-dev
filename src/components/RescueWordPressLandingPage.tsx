import React, { useEffect } from 'react';
import { LANG, getI18N } from '@/i18n';
import { initScrollAnimations } from '@/components/wordpress-landing/scroll-animations';
import RescueWordPressHeroSection from '@/components/rescue-wordpress/RescueWordPressHeroSection';
import RescueWordPressSymptomsSection from '@/components/rescue-wordpress/RescueWordPressSymptomsSection';
import RescueWordPressProcessSection from '@/components/rescue-wordpress/RescueWordPressProcessSection';
import RescueWordPressServicesSection from '@/components/rescue-wordpress/RescueWordPressServicesSection';
import RescueWordPressFAQSection from '@/components/rescue-wordpress/RescueWordPressFAQSection';
import RescueWordPressCTASection from '@/components/rescue-wordpress/RescueWordPressCTASection';

interface RescueWordPressLandingPageProps {
  initialLocale?: string;
}

const RescueWordPressLandingPage: React.FC<RescueWordPressLandingPageProps> = ({ 
  initialLocale = LANG.SPANISH 
}) => {
  const translations = getI18N({ currentLocale: initialLocale });

  useEffect(() => {
    // Initialize scroll animations
    initScrollAnimations();
  }, []);

  return (
    <div className="relative">
      <RescueWordPressHeroSection translations={translations} />
      <RescueWordPressSymptomsSection translations={translations} />
      <RescueWordPressProcessSection translations={translations} />
      <RescueWordPressServicesSection translations={translations} />
      <RescueWordPressFAQSection translations={translations} />
      <RescueWordPressCTASection translations={translations} />
    </div>
  );
};

export default RescueWordPressLandingPage;
