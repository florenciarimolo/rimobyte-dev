import React, { useState } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import ProjectsSection from './ProjectsSection';
import TemplatesSection from './TemplatesSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import { getI18N, LANG } from '@/i18n';

interface MainPageProps {
  recaptchaSiteKey?: string;
  initialLocale?: typeof LANG.ENGLISH | typeof LANG.SPANISH;
}

const MainPage: React.FC<MainPageProps> = ({ recaptchaSiteKey, initialLocale = LANG.SPANISH }) => {
  const [currentLang, setCurrentLang] = useState<typeof LANG.ENGLISH | typeof LANG.SPANISH>(initialLocale);
  const translations = getI18N({ currentLocale: currentLang });

  const handleLanguageChange = (lang: typeof LANG.ENGLISH | typeof LANG.SPANISH) => {
    setCurrentLang(lang);
    // Navigate to the correct language version
    const newPath = lang === LANG.ENGLISH ? '/en/' : '/';
    if (window.location.pathname !== newPath) {
      window.location.href = newPath;
    }
  };

  // Smooth scrolling for anchor links
  React.useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div id="app" className="min-h-screen relative" style={{ position: 'relative' }}>
      <Navbar currentLang={currentLang} onLanguageChange={handleLanguageChange} translations={translations} />
      
      <main className="relative z-10" style={{ position: 'relative' }}>
        <HeroSection translations={translations} />
        <AboutSection translations={translations} />
        <ProjectsSection translations={translations} />
        <TemplatesSection translations={translations} />
        <ExperienceSection translations={translations} />
        <EducationSection translations={translations} />
        <ContactSection translations={translations} currentLang={currentLang} recaptchaSiteKey={recaptchaSiteKey} />
      </main>

      <Footer translations={translations} />
    </div>
  );
};

export default MainPage;
