import React from 'react';
import { getTranslation } from '@/i18n';
import { WhatsAppIcon, LinkedInIcon, InstagramIcon } from '@/components/icons';

interface FooterProps {
  translations: unknown;
  isLanding?: boolean;
}

const SERVICE_PATHS: Record<string, string> = {
  wordpressFreelance: '/desarrolladora-wordpress-freelance',
  wordpressMigration: '/migrar-web-agencia-freelance',
  wordpressRescue: '/rescate-wordpress-urgente',
  wordpressRedesign: '/rediseno-web-wordpress',
  ecommerce: '/desarrollo-tienda-online',
  speed: '/optimizacion-velocidad-wordpress',
  vueNuxt: '/desarrollo-vue-nuxt-astro',
  pricing: '/precios-desarrollo-web',
};

const Footer: React.FC<FooterProps> = ({ translations, isLanding = false }) => {
  const currentYear = new Date().getFullYear();
  const copyrightText = getTranslation(translations, 'footer.copyright');
  const copyright = copyrightText.replace('{year}', currentYear.toString());

  const servicesConfig = (translations as { footer?: { services?: { title?: string; items?: Record<string, string> } } }).footer?.services;
  const servicesTitle: string | undefined = servicesConfig?.title;
  const serviceLabels: Record<string, string> = servicesConfig?.items || {};

  const servicesToShow = servicesTitle
    ? Object.entries(SERVICE_PATHS)
        .map(([id, href]) => ({ id, href, label: serviceLabels[id] }))
        .filter((item) => item.label)
    : [];

  const isDark = isLanding;

  const headingClasses = isDark
    ? 'text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3'
    : 'text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3';

  const linkClasses = isDark
    ? 'text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-150'
    : 'text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-150';

  const mutedClasses = isDark
    ? 'text-sm text-gray-500 dark:text-gray-400'
    : 'text-sm text-gray-500 dark:text-gray-400';

  const socialClasses = isDark
    ? 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors duration-200'
    : 'text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-white transition-colors duration-200';

  return (
    <footer className={isDark
      ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-800'
      : 'bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800'
    }>
      <div className={isDark
        ? 'border-b border-gray-200 dark:border-gray-800'
        : 'border-b border-gray-200 dark:border-gray-800'
      }>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={`text-base font-medium ${isDark ? 'text-gray-900 dark:text-white' : 'text-gray-900 dark:text-white'}`}>
            {getTranslation(translations, 'footer.cta')}
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] transition-all duration-200"
          >
            {getTranslation(translations, 'footer.ctaButton')}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-3 group">
              <img src="/favicon-96x96.png" alt="RimoByte" width={28} height={28} className="w-7 h-7" />
              <span className={`font-semibold text-lg ${isDark ? 'text-gray-900 dark:text-white' : 'text-gray-900 dark:text-white'}`}>
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

          <div>
            <h3 className={headingClasses}>
              {getTranslation(translations, 'footer.nav.title')}
            </h3>
            <ul className="space-y-2">
              <li><a href="/#services" className={linkClasses}>{getTranslation(translations, 'footer.nav.services')}</a></li>
              <li><a href="/#projects" className={linkClasses}>{getTranslation(translations, 'footer.nav.projects')}</a></li>
              <li><a href="/#process" className={linkClasses}>{getTranslation(translations, 'footer.nav.process')}</a></li>
              <li><a href="/#about" className={linkClasses}>{getTranslation(translations, 'footer.nav.about')}</a></li>
              <li><a href="/blog" className={linkClasses}>{getTranslation(translations, 'footer.nav.blog')}</a></li>
              <li><a href="/precios-desarrollo-web" className={linkClasses}>{getTranslation(translations, 'footer.nav.pricing')}</a></li>
            </ul>
          </div>

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

      <div className={isDark
        ? 'border-t border-gray-200 dark:border-gray-800'
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
