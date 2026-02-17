import React, { useState, useEffect } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';
import { LANG } from '@/i18n';

interface BlogNavbarProps {
  currentLang: typeof LANG.ENGLISH | typeof LANG.SPANISH;
}

const BlogNavbar: React.FC<BlogNavbarProps> = ({ currentLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (lang: typeof LANG.ENGLISH | typeof LANG.SPANISH) => {
    const currentPath = window.location.pathname;
    // Replace /es/ with /en/ or vice versa
    let newPath: string;
    if (currentPath.startsWith('/es/')) {
      newPath = currentPath.replace('/es/', '/en/');
    } else if (currentPath.startsWith('/en/')) {
      newPath = currentPath.replace('/en/', '/es/');
    } else {
      newPath = `/${lang}/blog`;
    }
    window.location.href = newPath;
  };

  const homeUrl = currentLang === LANG.SPANISH ? '/es' : '/en';
  const blogUrl = currentLang === LANG.SPANISH ? '/es/blog' : '/en/blog';
  const blogLabel = currentLang === LANG.SPANISH ? 'Blog' : 'Blog';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b ${
          isScrolled
            ? 'shadow-sm border-gray-200 dark:border-gray-800'
            : 'border-gray-100 dark:border-gray-800/50'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo + Blog */}
            <div className="flex items-center gap-6">
              <a href={homeUrl} className="flex items-center space-x-2 group">
                <img
                  src="/favicon-96x96.png"
                  alt="RimoByte"
                  className="w-8 h-8 transition-opacity duration-300"
                />
                <span className="text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200 font-semibold text-lg">
                  RimoByte
                </span>
              </a>
              <a
                href={blogUrl}
                className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 border-l border-gray-300 dark:border-gray-700 pl-6"
              >
                {blogLabel}
              </a>
            </div>

            {/* Right: Theme + Language */}
            <div className="flex items-center gap-3">
              <ThemeSwitcher />
              <LanguageSwitcher
                currentLang={currentLang}
                onLanguageChange={handleLanguageChange}
              />
            </div>
          </div>
        </div>
      </nav>
      {/* Spacer */}
      <div className="h-16" />
    </>
  );
};

export default BlogNavbar;
