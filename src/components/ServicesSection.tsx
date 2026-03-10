import React from 'react';
import { getTranslation, LANG } from '@/i18n';

interface ServicesSectionProps {
  translations: any;
  currentLang?: typeof LANG.ENGLISH | typeof LANG.SPANISH;
}

const SERVICE_KEYS = ['corporateWeb', 'ecommerce', 'webApp', 'redesign', 'speed', 'maintenance'] as const;

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  corporateWeb: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
  ),
  ecommerce: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /></svg>
  ),
  webApp: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
  ),
  redesign: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
  ),
  speed: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  ),
  maintenance: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  ),
};

const SERVICE_LINKS_ES: Record<string, string> = {
  corporateWeb: '/es/desarrolladora-wordpress-freelance',
  ecommerce: '/es/desarrollo-tienda-online',
  webApp: '/es/desarrollo-vue-nuxt-astro',
  redesign: '/es/rediseno-web-wordpress',
  speed: '/es/optimizacion-velocidad-wordpress',
  maintenance: '/es/precios-desarrollo-web',
};

const SERVICE_LINKS_EN: Record<string, string> = {
  corporateWeb: '/en/desarrolladora-wordpress-freelance',
  ecommerce: '/es/desarrollo-tienda-online',
  webApp: '/es/desarrollo-vue-nuxt-astro',
  redesign: '/es/rediseno-web-wordpress',
  speed: '/es/optimizacion-velocidad-wordpress',
  maintenance: '/es/precios-desarrollo-web',
};

const ServicesSection: React.FC<ServicesSectionProps> = ({ translations, currentLang = LANG.SPANISH }) => {
  const links = currentLang === LANG.ENGLISH ? SERVICE_LINKS_EN : SERVICE_LINKS_ES;
  const pricingLink = currentLang === LANG.ENGLISH ? '/es/precios-desarrollo-web' : '/es/precios-desarrollo-web';

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            {getTranslation(translations, 'sections.services.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-4">
            {getTranslation(translations, 'sections.services.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" aria-hidden="true"></div>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_KEYS.map((key) => (
            <a
              key={key}
              href={links[key]}
              className="group flex flex-col p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-500/50 dark:hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white mb-4">
                {SERVICE_ICONS[key]}
              </div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1.5">
                {getTranslation(translations, `sections.services.items.${key}.title`)}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 flex-1">
                {getTranslation(translations, `sections.services.items.${key}.description`)}
              </p>
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                {getTranslation(translations, `sections.services.items.${key}.price`)}
              </span>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={pricingLink}
            className="inline-flex items-center gap-2 text-base font-medium text-blue-500 hover:text-blue-400 transition-colors duration-200"
          >
            {getTranslation(translations, 'sections.services.viewAllPrices')}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
