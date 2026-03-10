import React from 'react';
import { getTranslation, LANG } from '@/i18n';
import { WhatsAppIcon, LinkedInIcon, InstagramIcon } from '@/components/icons';

interface FooterProps {
  translations: any;
  isLanding?: boolean;
  currentLang?: typeof LANG.ENGLISH | typeof LANG.SPANISH;
}

const Footer: React.FC<FooterProps> = ({ translations, isLanding = false, currentLang = LANG.SPANISH }) => {
  const currentYear = new Date().getFullYear();
  const copyrightText = getTranslation(translations, 'footer.copyright');
  const copyright = copyrightText.replace('{year}', currentYear.toString());

  const langKey: 'es' | 'en' = currentLang === LANG.ENGLISH ? 'en' : 'es';
  const langPrefix = currentLang === LANG.ENGLISH ? '/en' : '/es';

  const servicesConfig = translations.footer?.services;
  const servicesTitle: string | undefined = servicesConfig?.title;
  const serviceLabels: Record<string, string> = servicesConfig?.items || {};

  const allServiceLinks: { id: string; paths: { es?: string; en?: string } }[] = [
    { id: 'wordpressFreelance', paths: { es: '/es/desarrolladora-wordpress-freelance', en: '/en/desarrolladora-wordpress-freelance' } },
    { id: 'wordpressMigration', paths: { es: '/es/migrar-web-agencia-freelance', en: '/en/migrar-web-agencia-freelance' } },
    { id: 'wordpressRescue', paths: { es: '/es/rescate-wordpress-urgente', en: '/en/wordpress-emergency-rescue' } },
    { id: 'wordpressRedesign', paths: { es: '/es/rediseno-web-wordpress' } },
    { id: 'ecommerce', paths: { es: '/es/desarrollo-tienda-online' } },
    { id: 'speed', paths: { es: '/es/optimizacion-velocidad-wordpress' } },
    { id: 'vueNuxt', paths: { es: '/es/desarrollo-vue-nuxt-astro' } },
    { id: 'pricing', paths: { es: '/es/precios-desarrollo-web' } },
  ];

  const servicesToShow = servicesTitle
    ? allServiceLinks
        .map((service) => ({ id: service.id, href: service.paths[langKey], label: serviceLabels[service.id] }))
        .filter((item) => item.href && item.label)
    : [];

  const isDark = isLanding;

  const headingClasses = isDark
    ? 'text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3'
    : 'text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3';

  const linkClasses = isDark
    ? 'text-sm text-gray-300 hover:text-white transition-colors duration-150'
    : 'text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-150';

  const mutedClasses = isDark
    ? 'text-sm text-gray-400'
    : 'text-sm text-gray-500 dark:text-gray-400';

  const socialClasses = isDark
    ? 'text-gray-400 hover:text-white transition-colors duration-200'
    : 'text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-white transition-colors duration-200';

  return (
    <footer className={isDark
      ? 'bg-black/95 backdrop-blur-md border-t border-gray-800'
      : 'bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800'
    }>
      {/* Mini CTA bar */}
      <div className={isDark
        ? 'border-b border-gray-800'
        : 'border-b border-gray-200 dark:border-gray-800'
      }>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={`text-base font-medium ${isDark ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
            {getTranslation(translations, 'footer.cta')}
          </p>
          <a
            href={`${langPrefix}/#contact`}
            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] transition-all duration-200"
          >
            {getTranslation(translations, 'footer.ctaButton')}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {/* Column 1: Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href={`${langPrefix}/`} className="flex items-center gap-2 mb-3 group">
              <img src="/favicon-96x96.png" alt="RimoByte" width={28} height={28} className="w-7 h-7" />
              <span className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                RimoByte
              </span>
            </a>
            <p className={`${mutedClasses} leading-relaxed mb-4`}>
              {getTranslation(translations, 'footer.tagline')}
            </p>
            <div className="flex items-center gap-4">
              <a href="https://wa.me/34684713743" target="_blank" rel="noopener noreferrer" className={socialClasses} aria-label="WhatsApp">
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/florencia-rimolofigueira/" target="_blank" rel="noopener noreferrer" className={socialClasses} aria-label="LinkedIn">
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/rimobyte" target="_blank" rel="noopener noreferrer" className={socialClasses} aria-label="Instagram">
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className={headingClasses}>
              {getTranslation(translations, 'footer.nav.title')}
            </h3>
            <ul className="space-y-2">
              <li><a href={`${langPrefix}/#services`} className={linkClasses}>{getTranslation(translations, 'footer.nav.services')}</a></li>
              <li><a href={`${langPrefix}/#projects`} className={linkClasses}>{getTranslation(translations, 'footer.nav.projects')}</a></li>
              <li><a href={`${langPrefix}/#process`} className={linkClasses}>{getTranslation(translations, 'footer.nav.process')}</a></li>
              <li><a href={`${langPrefix}/#about`} className={linkClasses}>{getTranslation(translations, 'footer.nav.about')}</a></li>
              <li><a href={`${langPrefix}/blog`} className={linkClasses}>{getTranslation(translations, 'footer.nav.blog')}</a></li>
              <li><a href={`${langPrefix}/precios-desarrollo-web`} className={linkClasses}>{getTranslation(translations, 'footer.nav.pricing')}</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          {servicesToShow.length > 0 && (
            <div>
              <h3 className={headingClasses}>
                {servicesTitle}
              </h3>
              <ul className="space-y-2">
                {servicesToShow.map((service) => (
                  <li key={service.id}>
                    <a href={service.href} className={linkClasses}>{service.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Column 4: Contact */}
          <div>
            <h3 className={headingClasses}>
              {getTranslation(translations, 'footer.contactTitle')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@rimobyte.com" className={linkClasses}>
                  info@rimobyte.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/34684713743" target="_blank" rel="noopener noreferrer" className={linkClasses}>
                  +34 684 713 743
                </a>
              </li>
              <li>
                <p className={mutedClasses}>
                  {getTranslation(translations, 'footer.location')}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className={isDark
        ? 'border-t border-gray-800'
        : 'border-t border-gray-200 dark:border-gray-800'
      }>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className={`${mutedClasses} text-xs text-center`}>
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
