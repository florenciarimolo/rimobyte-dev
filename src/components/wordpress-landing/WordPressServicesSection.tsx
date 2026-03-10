import React from 'react';
import { getTranslation, LANG } from '@/i18n';
import GlobeIcon from '@/components/icons/GlobeIcon';
import ShoppingBagIcon from '@/components/icons/ShoppingBagIcon';
import SettingsIcon from '@/components/icons/SettingsIcon';
import CloudUploadIcon from '@/components/icons/CloudUploadIcon';
import LightningIcon from '@/components/icons/LightningIcon';

interface WordPressServicesSectionProps {
  translations: any;
  currentLang: typeof LANG.ENGLISH | typeof LANG.SPANISH;
}

const WordPressServicesSection: React.FC<WordPressServicesSectionProps> = ({ translations, currentLang }) => {
  const learnMoreLabel = getTranslation(translations, 'wordpressLanding.services.learnMore');

  const currentLangKey: 'es' | 'en' = currentLang === LANG.ENGLISH ? 'en' : 'es';

  const serviceLinks: Record<
    string,
    {
      es: string;
      en: string;
    }
  > = {
    // Web corporativa y mantenimiento apuntan a la página de precios (solo en ES por ahora)
    corporateWeb: {
      es: '/es/precios-desarrollo-web',
      en: '/es/precios-desarrollo-web',
    },
    onlineStores: {
      es: '/es/desarrollo-tienda-online',
      en: '/es/desarrollo-tienda-online',
    },
    maintenance: {
      es: '/es/precios-desarrollo-web',
      en: '/es/precios-desarrollo-web',
    },
    migrations: {
      es: '/es/migrar-web-agencia-freelance',
      en: '/en/migrar-web-agencia-freelance',
    },
    expressFix: {
      es: '/es/rescate-wordpress-urgente',
      en: '/en/wordpress-emergency-rescue',
    },
  };

  const services = [
    {
      id: 'corporateWeb',
      title: getTranslation(translations, 'wordpressLanding.services.items.corporateWeb.title'),
      description: getTranslation(translations, 'wordpressLanding.services.items.corporateWeb.description'),
      price: getTranslation(translations, 'wordpressLanding.services.items.corporateWeb.price'),
      icon: <GlobeIcon />,
      href: serviceLinks.corporateWeb[currentLangKey],
    },
    {
      id: 'onlineStores',
      title: getTranslation(translations, 'wordpressLanding.services.items.onlineStores.title'),
      description: getTranslation(translations, 'wordpressLanding.services.items.onlineStores.description'),
      price: getTranslation(translations, 'wordpressLanding.services.items.onlineStores.price'),
      icon: <ShoppingBagIcon />,
      href: serviceLinks.onlineStores[currentLangKey],
    },
    {
      id: 'maintenance',
      title: getTranslation(translations, 'wordpressLanding.services.items.maintenance.title'),
      description: getTranslation(translations, 'wordpressLanding.services.items.maintenance.description'),
      price: getTranslation(translations, 'wordpressLanding.services.items.maintenance.price'),
      icon: <SettingsIcon />,
      href: serviceLinks.maintenance[currentLangKey],
    },
    {
      id: 'migrations',
      title: getTranslation(translations, 'wordpressLanding.services.items.migrations.title'),
      description: getTranslation(translations, 'wordpressLanding.services.items.migrations.description'),
      price: getTranslation(translations, 'wordpressLanding.services.items.migrations.price'),
      icon: <CloudUploadIcon />,
      href: serviceLinks.migrations[currentLangKey],
    },
    {
      id: 'expressFix',
      title: getTranslation(translations, 'wordpressLanding.services.items.expressFix.title'),
      description: getTranslation(translations, 'wordpressLanding.services.items.expressFix.description'),
      price: getTranslation(translations, 'wordpressLanding.services.items.expressFix.price'),
      icon: <LightningIcon />,
      href: serviceLinks.expressFix[currentLangKey],
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            {getTranslation(translations, 'wordpressLanding.sections.services.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" aria-hidden="true"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {getTranslation(translations, 'wordpressLanding.services.intro')}
          </p>
        </header>

        <div className="space-y-8">
          {/* Primera fila: 3 servicios */}
          <div className="grid md:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-black/70 backdrop-blur-md rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer scroll-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center justify-between gap-3">
                  {service.price && (
                    <p className="text-gray-900 dark:text-white font-semibold">
                      {service.price}
                    </p>
                  )}
                  {service.href && (
                    <a
                      href={service.href}
                      className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium rounded-full border border-blue-400 text-blue-600 dark:text-blue-100 hover:bg-blue-500/10 hover:border-blue-300 transition-colors"
                    >
                      {learnMoreLabel}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Segunda fila: 2 servicios centrados */}
          <div className="grid md:grid-cols-2 gap-6 md:max-w-3xl mx-auto">
            {services.slice(3).map((service, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-black/70 backdrop-blur-md rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer scroll-fade-in"
                style={{ animationDelay: `${(index + 3) * 50}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center justify-between gap-3">
                  {service.price && (
                    <p className="text-gray-900 dark:text-white font-semibold">
                      {service.price}
                    </p>
                  )}
                  {service.href && (
                    <a
                      href={service.href}
                      className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium rounded-full border border-blue-400 text-blue-600 dark:text-blue-100 hover:bg-blue-500/10 hover:border-blue-300 transition-colors"
                    >
                      {learnMoreLabel}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WordPressServicesSection;
