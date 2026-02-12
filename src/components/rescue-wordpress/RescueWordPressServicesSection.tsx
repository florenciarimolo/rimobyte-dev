import React from 'react';
import { getTranslation } from '@/i18n';
import LightningIcon from '@/components/icons/LightningIcon';
import ShieldIcon from '@/components/icons/ShieldIcon';
import DatabaseIcon from '@/components/icons/DatabaseIcon';
import SettingsIcon from '@/components/icons/SettingsIcon';

interface RescueWordPressServicesSectionProps {
  translations: any;
}

const RescueWordPressServicesSection: React.FC<RescueWordPressServicesSectionProps> = ({ translations }) => {
  const services = [
    {
      title: getTranslation(translations, 'rescueWordPressLanding.services.items.emergency.title'),
      description: getTranslation(translations, 'rescueWordPressLanding.services.items.emergency.description'),
      price: getTranslation(translations, 'rescueWordPressLanding.services.items.emergency.price'),
      icon: <LightningIcon />
    },
    {
      title: getTranslation(translations, 'rescueWordPressLanding.services.items.malware.title'),
      description: getTranslation(translations, 'rescueWordPressLanding.services.items.malware.description'),
      price: getTranslation(translations, 'rescueWordPressLanding.services.items.malware.price'),
      icon: <ShieldIcon />
    },
    {
      title: getTranslation(translations, 'rescueWordPressLanding.services.items.recovery.title'),
      description: getTranslation(translations, 'rescueWordPressLanding.services.items.recovery.description'),
      price: getTranslation(translations, 'rescueWordPressLanding.services.items.recovery.price'),
      icon: <DatabaseIcon />
    },
    {
      title: getTranslation(translations, 'rescueWordPressLanding.services.items.maintenance.title'),
      description: getTranslation(translations, 'rescueWordPressLanding.services.items.maintenance.description'),
      price: getTranslation(translations, 'rescueWordPressLanding.services.items.maintenance.price'),
      icon: <SettingsIcon />
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {getTranslation(translations, 'rescueWordPressLanding.sections.services.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" aria-hidden="true"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {getTranslation(translations, 'rescueWordPressLanding.services.intro')}
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-gray-800 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer scroll-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300 whitespace-pre-line mb-4">
                {service.description}
              </p>
              {service.price && (
                <p className="text-white font-bold text-lg">
                  {service.price}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Guarantees section */}
        <div className="mt-12 bg-black/40 backdrop-blur-md rounded-xl p-8 border border-gray-800">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            {getTranslation(translations, 'rescueWordPressLanding.guarantees.title')}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.keys(translations.rescueWordPressLanding.guarantees.items).map((key, index) => (
              <div key={key} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-300">
                  {getTranslation(translations, `rescueWordPressLanding.guarantees.items.${key}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RescueWordPressServicesSection;
