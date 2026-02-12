import React from 'react';
import { getTranslation } from '@/i18n';
import { WhatsAppIcon, GithubIcon, LinkedInIcon, TwitterXIcon } from '@/components/icons';

interface FooterProps {
  translations: any;
  isLanding?: boolean;
}

const Footer: React.FC<FooterProps> = ({ translations, isLanding = false }) => {
  const currentYear = new Date().getFullYear();
  const copyrightText = getTranslation(translations, 'footer.copyright');
  const copyright = copyrightText.replace('{year}', currentYear.toString());
  
  return (
    <footer className={isLanding 
      ? "bg-black/95 backdrop-blur-md border-t border-gray-800 py-8"
      : "bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8"
    }>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className={isLanding ? "text-gray-300 text-sm" : "text-gray-500 dark:text-gray-400 text-sm"}>
            {copyright}
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://wa.me/34684713743"
              target="_blank"
              rel="noopener noreferrer"
              className={isLanding 
                ? "text-gray-300 hover:text-green-400 transition-colors duration-200"
                : "text-gray-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-200"
              }
            >
              <span className="sr-only">WhatsApp</span>
              <WhatsAppIcon className="h-6 w-6" />
            </a>
            <a href="https://github.com/florenciarimolo" target="_blank" rel="noopener noreferrer" className={isLanding 
              ? "text-gray-300 hover:text-white transition-colors duration-200"
              : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors duration-200"
            }>
              <span className="sr-only">GitHub</span>
              <GithubIcon className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/florencia-rimolofigueira/" target="_blank" rel="noopener noreferrer" className={isLanding 
              ? "text-gray-300 hover:text-white transition-colors duration-200"
              : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors duration-200"
            }>
              <span className="sr-only">LinkedIn</span>
              <LinkedInIcon className="h-6 w-6" />
            </a>
            <a href="https://x.com/rimobyte" target="_blank" rel="noopener noreferrer" className={isLanding 
              ? "text-gray-300 hover:text-white transition-colors duration-200"
              : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors duration-200"
            }>
              <span className="sr-only">X (Twitter)</span>
              <TwitterXIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

