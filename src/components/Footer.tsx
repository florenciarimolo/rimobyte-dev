import React from 'react';
import { getTranslation, LANG } from '@/i18n';
import { WhatsAppIcon, GithubIcon, LinkedInIcon, TwitterXIcon, InstagramIcon } from '@/components/icons';

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

  const servicesConfig = translations.footer?.services;
  const servicesTitle: string | undefined = servicesConfig?.title;
  const serviceLabels: Record<string, string> = servicesConfig?.items || {};

  const allServiceLinks: {
    id: string;
    paths: { es?: string; en?: string };
  }[] = [
    {
      id: 'wordpressFreelance',
      paths: {
        es: '/es/desarrolladora-wordpress-freelance',
        en: '/en/desarrolladora-wordpress-freelance',
      },
    },
    {
      id: 'wordpressMigration',
      paths: {
        es: '/es/migrar-web-agencia-freelance',
        en: '/en/migrar-web-agencia-freelance',
      },
    },
    {
      id: 'wordpressRescue',
      paths: {
        es: '/es/rescate-wordpress-urgente',
        en: '/en/wordpress-emergency-rescue',
      },
    },
    {
      id: 'wordpressRedesign',
      paths: {
        es: '/es/rediseno-web-wordpress',
        // No English page yet
      },
    },
    {
      id: 'ecommerce',
      paths: {
        es: '/es/desarrollo-tienda-online',
        // No English page yet
      },
    },
    {
      id: 'speed',
      paths: {
        es: '/es/optimizacion-velocidad-wordpress',
        // No English page yet
      },
    },
    {
      id: 'vueNuxt',
      paths: {
        es: '/es/desarrollo-vue-nuxt-astro',
        // No English page yet
      },
    },
    {
      id: 'pricing',
      paths: {
        es: '/es/precios-desarrollo-web',
        // No English page yet
      },
    },
  ];

  const servicesToShow = servicesTitle
    ? allServiceLinks
        .map((service) => ({
          id: service.id,
          href: service.paths[langKey],
          label: serviceLabels[service.id],
        }))
        .filter((item) => item.href && item.label)
    : [];

  const servicesTitleClasses = isLanding
    ? 'text-sm font-semibold text-gray-200 mb-3'
    : 'text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3';

  const servicesLinkClasses = isLanding
    ? 'text-sm text-gray-300 hover:text-white transition-colors'
    : 'text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors';

  const copyrightClasses = isLanding
    ? 'text-gray-300 text-sm text-center md:text-left'
    : 'text-gray-500 dark:text-gray-400 text-sm text-center md:text-left';

  const socialLinkClasses = isLanding
    ? 'text-gray-300 hover:text-white transition-colors duration-200'
    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors duration-200';
  
  return (
    <footer className={isLanding 
      ? "bg-black/95 backdrop-blur-md border-t border-gray-800 py-8"
      : "bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8"
    }>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:items-start">
          {servicesToShow.length > 0 && (
            <div>
              <h3 className={servicesTitleClasses}>
                {servicesTitle}
              </h3>
              <ul className="space-y-1.5">
                {servicesToShow.map((service) => (
                  <li key={service.id}>
                    <a href={service.href} className={servicesLinkClasses}>
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex space-x-6 md:ml-auto">
            <a
              href="https://wa.me/34684713743"
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkClasses}
            >
              <span className="sr-only">WhatsApp</span>
              <WhatsAppIcon className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/florenciarimolo"
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkClasses}
            >
              <span className="sr-only">GitHub</span>
              <GithubIcon className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/florencia-rimolofigueira/"
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkClasses}
            >
              <span className="sr-only">LinkedIn</span>
              <LinkedInIcon className="h-6 w-6" />
            </a>
            <a
              href="https://x.com/rimobyte"
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkClasses}
            >
              <span className="sr-only">X (Twitter)</span>
              <TwitterXIcon className="h-6 w-6" />
            </a>
            <a
              href="https://instagram.com/rimobyte"
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkClasses}
            >
              <span className="sr-only">Instagram</span>
              <InstagramIcon className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="mt-6">
          <div className={copyrightClasses}>
            {copyright}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

