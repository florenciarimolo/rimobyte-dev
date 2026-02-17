import React, { useState, useEffect } from 'react';
import WordPressLanguageSwitcher from '../wordpress-landing/WordPressLanguageSwitcher';
import { getTranslation, LANG } from '@/i18n';

interface MigrationNavbarProps {
  currentLang: typeof LANG.ENGLISH | typeof LANG.SPANISH;
  onLanguageChange: (lang: typeof LANG.ENGLISH | typeof LANG.SPANISH) => void;
  translations: any;
}

const MigrationNavbar: React.FC<MigrationNavbarProps> = ({ currentLang, onLanguageChange, translations }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'when', label: getTranslation(translations, 'migrationLanding.navbar.whenService') },
    { id: 'what', label: getTranslation(translations, 'migrationLanding.navbar.whatI Do') },
    { id: 'process', label: getTranslation(translations, 'migrationLanding.navbar.process') },
    { id: 'benefits', label: getTranslation(translations, 'migrationLanding.navbar.benefits') },
    { id: 'projects', label: getTranslation(translations, 'migrationLanding.navbar.projects') },
    { id: 'faq', label: getTranslation(translations, 'migrationLanding.navbar.faq') },
    { id: 'contact', label: getTranslation(translations, 'migrationLanding.navbar.contact') }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['hero', ...navItems.map(item => item.id)];
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        let section: HTMLElement | null = null;
        
        if (sectionId === 'hero') {
          // Hero is at the top
          if (window.scrollY < 300) {
            setActiveSection('hero');
            break;
          }
        } else {
          section = document.getElementById(sectionId);
          if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    // Call once on mount to set initial active section
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Close mobile menu when navigating
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-md border-b border-gray-800' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2 group">
              <img 
                src="/favicon-96x96.png" 
                alt="RimoByte" 
                className="w-8 h-8 transition-opacity duration-300" 
              />
              <span className="text-white group-hover:text-gray-200 transition-colors duration-200 font-semibold text-2xl">
                RimoByte
              </span>
            </a>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative group text-white/90 hover:text-white transition-colors duration-200"
              >
                {item.label}
                {/* Active indicator */}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" />
                )}
                {/* Hover indicator */}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="hidden md:flex items-center space-x-4">
            <WordPressLanguageSwitcher currentLang={currentLang} onLanguageChange={onLanguageChange} />
          </div>
            
          {/* Mobile menu button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-white/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
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

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-md border-t border-gray-800">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-white'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
                {/* Active indicator */}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
                )}
              </button>
            ))}
            <div className="flex items-center justify-start space-x-4 px-3 py-2 mt-2">
              <WordPressLanguageSwitcher currentLang={currentLang} onLanguageChange={onLanguageChange} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MigrationNavbar;
