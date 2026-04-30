import React, { useState, useEffect } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { getTranslation } from '@/i18n';

interface NavbarProps {
  translations: unknown;
  hideThemeSwitcher?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ translations, hideThemeSwitcher = false }) => {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'services', label: getTranslation(translations, 'navbar.services') },
    { id: 'projects', label: getTranslation(translations, 'navbar.projects') },
    { id: 'process', label: getTranslation(translations, 'navbar.process') },
    { id: 'about', label: getTranslation(translations, 'navbar.about') },
    { id: 'contact', label: getTranslation(translations, 'navbar.contact') }
  ];

  useEffect(() => {
    let rafId: number | null = null;
    let tickScheduled = false;

    const sectionIds = navItems.map((item) => item.id);

    const updateFromScroll = () => {
      tickScheduled = false;
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      const scrollPosition = scrollY + 150;
      let newActive = sectionIds[0];

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            newActive = sectionIds[i];
            break;
          }
        }
      }
      setActiveSection(newActive);
    };

    const onScroll = () => {
      if (tickScheduled) return;
      tickScheduled = true;
      rafId = requestAnimationFrame(updateFromScroll);
    };

    rafId = requestAnimationFrame(updateFromScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2 group">
              <img 
                src="/favicon-96x96.png" 
                alt="RimoByte" 
                width={32}
                height={32}
                className="w-8 h-8 transition-opacity duration-300" 
              />
              <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200 font-semibold text-lg">
                RimoByte
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative group text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" />
                )}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {!hideThemeSwitcher && <ThemeSwitcher />}
          </div>
            
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-800">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
                )}
              </button>
            ))}
            <div className="flex items-center justify-start space-x-4 px-3 py-2 mt-2">
              {!hideThemeSwitcher && <ThemeSwitcher />}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
