import React, { useState } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import ProblemsSection from './ProblemsSection';
import ServicesSection from './ServicesSection';
import FeaturedProjectsSection from './FeaturedProjectsSection';
import ProcessSection from './ProcessSection';
import AboutSection from './AboutSection';
import FAQSection from './FAQSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import { getI18N } from '@/i18n';

interface MainPageProps {
  recaptchaSiteKey?: string;
}

const MainPage: React.FC<MainPageProps> = ({ recaptchaSiteKey }) => {
  const translations = getI18N();

  const [showReviews, setShowReviews] = useState(false);
  const [LazyReviewsComponent, setLazyReviewsComponent] = useState<React.ComponentType | null>(null);
  const reviewsRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (showReviews || !reviewsRef.current || typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const target = reviewsRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
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
        rootMargin: '200px 0px',
        threshold: 0.1,
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [showReviews]);

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
      <Navbar translations={translations} />

      <main className="relative z-10" style={{ position: 'relative' }}>
        <HeroSection translations={translations} />
        <ProblemsSection translations={translations} />
        <ServicesSection translations={translations} />
        <FeaturedProjectsSection translations={translations} />
        <ProcessSection translations={translations} />
        <div ref={reviewsRef}>
          {showReviews && LazyReviewsComponent && (
            <React.Suspense fallback={null}>
              <LazyReviewsComponent />
            </React.Suspense>
          )}
        </div>
        <AboutSection translations={translations} />
        <FAQSection translations={translations} />
        <ContactSection translations={translations} recaptchaSiteKey={recaptchaSiteKey} />
      </main>

      <Footer translations={translations} />
    </div>
  );
};

export default MainPage;
