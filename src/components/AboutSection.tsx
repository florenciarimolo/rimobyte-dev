import React from 'react';
import { getTranslation } from '@/i18n';

interface AboutSectionProps {
  translations: any;
}

const HIGHLIGHT_ICONS: Record<string, React.ReactNode> = {
  engineering: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
  ),
  experience: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  ),
  enterprise: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
  ),
  freelance: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
  ),
  directWork: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  ),
  guarantee: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
  ),
};

const HIGHLIGHT_KEYS = ['engineering', 'experience', 'enterprise', 'freelance', 'directWork', 'guarantee'] as const;

const TECH_BADGES = [
  'WordPress', 'WooCommerce', 'Shopify', 'Vue.js', 'Nuxt', 'Astro',
  'React', 'TypeScript', 'TailwindCSS', 'Java', 'Python', 'PostgreSQL',
];

const AboutSection: React.FC<AboutSectionProps> = ({ translations }) => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {getTranslation(translations, 'sections.about.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" aria-hidden="true"></div>
        </header>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-3 space-y-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
              {getTranslation(translations, 'sections.about.description')}
            </p>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                <div className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></div>
                <span className="text-sm">{getTranslation(translations, 'sections.about.status.available')}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                <div className="w-2 h-2 bg-blue-500 rounded-full" aria-hidden="true"></div>
                <span className="text-sm">{getTranslation(translations, 'sections.about.status.remote')}</span>
              </div>
            </div>
          </div>

          <aside className="md:col-span-2 space-y-3">
            {HIGHLIGHT_KEYS.map((key) => (
              <div key={key} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                <span className="shrink-0 text-blue-500 dark:text-blue-400">
                  {HIGHLIGHT_ICONS[key]}
                </span>
                {getTranslation(translations, `sections.about.highlights.${key}`)}
              </div>
            ))}
          </aside>
        </div>

        {/* Technology badges */}
        <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4 text-center">
            {getTranslation(translations, 'sections.about.technologies')}
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {TECH_BADGES.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
