import React from 'react';
import { getTranslation } from '@/i18n';
import GlobeIcon from '@/components/icons/GlobeIcon';
import ShoppingBagIcon from '@/components/icons/ShoppingBagIcon';
import SettingsIcon from '@/components/icons/SettingsIcon';
import CloudUploadIcon from '@/components/icons/CloudUploadIcon';
import LightningIcon from '@/components/icons/LightningIcon';

interface WordPressServicesSectionProps {
  translations: any;
}

const WordPressServicesSection: React.FC<WordPressServicesSectionProps> = ({ translations }) => {
  const services = [
    {
      title: getTranslation(translations, 'wordpressLanding.services.items.corporateWeb.title'),
      description: getTranslation(translations, 'wordpressLanding.services.items.corporateWeb.description'),
      price: getTranslation(translations, 'wordpressLanding.services.items.corporateWeb.price'),
      icon: <GlobeIcon />
    },
    {
      title: getTranslation(translations, 'wordpressLanding.services.items.onlineStores.title'),
      description: getTranslation(translations, 'wordpressLanding.services.items.onlineStores.description'),
      price: getTranslation(translations, 'wordpressLanding.services.items.onlineStores.price'),
      icon: <ShoppingBagIcon />
    },
    {
      title: getTranslation(translations, 'wordpressLanding.services.items.maintenance.title'),
      description: getTranslation(translations, 'wordpressLanding.services.items.maintenance.description'),
      price: getTranslation(translations, 'wordpressLanding.services.items.maintenance.price'),
      icon: <SettingsIcon />
    },
    {
      title: getTranslation(translations, 'wordpressLanding.services.items.migrations.title'),
      description: getTranslation(translations, 'wordpressLanding.services.items.migrations.description'),
      price: getTranslation(translations, 'wordpressLanding.services.items.migrations.price'),
      icon: <CloudUploadIcon />
    },
    {
      title: getTranslation(translations, 'wordpressLanding.services.items.expressFix.title'),
      description: getTranslation(translations, 'wordpressLanding.services.items.expressFix.description'),
      price: getTranslation(translations, 'wordpressLanding.services.items.expressFix.price'),
      icon: <LightningIcon />
    }
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
                className="bg-black/70 backdrop-blur-md rounded-xl p-6 border border-gray-800 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer scroll-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 whitespace-pre-line">
                  {service.description}
                </p>
                {service.price && (
                  <p className="text-white font-semibold mt-3">
                    {service.price}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Segunda fila: 2 servicios centrados */}
          <div className="grid md:grid-cols-2 gap-6 md:max-w-3xl mx-auto">
            {services.slice(3).map((service, index) => (
              <div
                key={index}
                className="bg-black/70 backdrop-blur-md rounded-xl p-6 border border-gray-800 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer scroll-fade-in"
                style={{ animationDelay: `${(index + 3) * 50}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 whitespace-pre-line">
                  {service.description}
                </p>
                {service.price && (
                  <p className="text-white font-semibold mt-3">
                    {service.price}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WordPressServicesSection;
