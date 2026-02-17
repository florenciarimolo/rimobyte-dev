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
import { getI18N, LANG, LANG_PREFIXES } from '@/i18n';

interface MainPageProps {
  recaptchaSiteKey?: string;
  initialLocale?: typeof LANG.ENGLISH | typeof LANG.SPANISH;
}

const MainPage: React.FC<MainPageProps> = ({ recaptchaSiteKey, initialLocale = LANG.SPANISH }) => {
  const [currentLang, setCurrentLang] = useState<typeof LANG.ENGLISH | typeof LANG.SPANISH>(initialLocale);
  const translations = getI18N({ currentLocale: currentLang });

  // Defer loading of GoogleReviewsSection until it is close to viewport
  const [showReviews, setShowReviews] = useState(false);
  const [LazyReviewsComponent, setLazyReviewsComponent] = useState<React.ComponentType<{ locale: 'es' | 'en' }> | null>(null);
  const reviewsRef = React.useRef<HTMLDivElement | null>(null);

  const handleLanguageChange = (lang: typeof LANG.ENGLISH | typeof LANG.SPANISH) => {
    setCurrentLang(lang);
    // Navigate to the correct language version with prefix
    const currentPath = window.location.pathname;
    const langPrefix = lang === LANG.ENGLISH ? LANG_PREFIXES.ENGLISH : LANG_PREFIXES.SPANISH;
    const newPath = `${langPrefix}/`;
    if (currentPath !== newPath) {
      window.location.href = newPath;
    }
  };

  // Observe when the reviews section is near the viewport, then dynamically import it.
  React.useEffect(() => {
    if (showReviews || !reviewsRef.current || typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const target = reviewsRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // Mark as visible and dynamically load the component (code-split bundle).
          setShowReviews(true);
          import('./GoogleReviewsSection')
            .then((mod) => {
              setLazyReviewsComponent(() => mod.default);
            })
            .catch((error) => {
              if (import.meta.env.MODE === 'development') {
                console.error('Error loading GoogleReviewsSection lazily', error);
              }
            });
          observer.disconnect();
        }
      },
      {
        root: null,
        // Start loading a bit antes de que el usuario llegue a la sección
        rootMargin: '200px 0px',
        threshold: 0.1,
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [showReviews]);

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
        {/* Placeholder container used for intersection observing; reviews hydrate lazily */}
        <div ref={reviewsRef}>
          {showReviews && LazyReviewsComponent && (
            // Simple fallback avoids blocking initial render while the chunk loads
            <React.Suspense fallback={null}>
              <LazyReviewsComponent locale={currentLang === LANG.ENGLISH ? 'en' : 'es'} />
            </React.Suspense>
          )}
        </div>
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
