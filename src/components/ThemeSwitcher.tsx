import React, { useState, useEffect } from 'react';

const ThemeSwitcher: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Get theme from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const isDarkTheme = savedTheme === 'dark';
    
    setIsDark(isDarkTheme);
    
    // Apply theme to document
    if (isDarkTheme) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    localStorage.setItem('theme', newTheme);
    
    // Update document classes
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
    
    // Dispatch custom event for other components to listen to
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: newTheme } }));
  };

  // Don't render until mounted to avoid SSR issues
  if (!mounted) {
    return (
      <button
        className="relative w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        aria-label="Toggle theme"
        disabled
      >
        <div className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-md" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-16 h-7 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
      aria-label="Toggle theme"
    >
      <div className="flex justify-between items-center gap-x-3 h-full px-1">
        {/* Sun icon (light theme) */}
        <svg
          className={`w-5 h-5 z-10 transition-all duration-300 ${
            isDark ? 'text-gray-400' : 'text-yellow-400 bg-gray-400 dark:bg-gray-800 rounded-full p-1'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>
        {/* Moon icon (dark theme) */}
        <svg
          className={`w-5 h-5 z-10 transition-all duration-300 ${
            isDark ? 'text-blue-400 bg-gray-400 dark:bg-gray-800 rounded-full p-1' : 'text-gray-400'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </div>
    </button>
  );
};

export default ThemeSwitcher;
