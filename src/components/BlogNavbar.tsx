import React, { useState, useEffect } from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const BlogNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            <div className="flex items-center gap-6">
              <a href="/" className="flex items-center space-x-2 group">
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
                href="/blog"
                className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 border-l border-gray-300 dark:border-gray-700 pl-6"
              >
                Blog
              </a>
            </div>

            <div className="flex items-center gap-3">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </nav>
      <div className="h-16" />
    </>
  );
};

export default BlogNavbar;
