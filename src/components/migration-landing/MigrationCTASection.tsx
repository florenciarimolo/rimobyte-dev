import React from 'react';
import { getTranslation } from '@/i18n';

interface MigrationCTASectionProps {
  translations: any;
}

const MigrationCTASection: React.FC<MigrationCTASectionProps> = ({ translations }) => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Fixed purple blur background element */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl font-bold text-white mb-6 text-center">
          {getTranslation(translations, 'migrationLanding.cta.title')}
        </h2>
        
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 pl-6 pr-5 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-all duration-200 font-sans whitespace-nowrap mb-4"
        >
          <span className="font-sans">
            {getTranslation(translations, 'migrationLanding.cta.button')}
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default MigrationCTASection;
