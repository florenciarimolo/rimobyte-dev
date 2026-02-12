import React from 'react';
import { getTranslation } from '@/i18n';
import AlertCircleIcon from '@/components/icons/AlertCircleIcon';
import ShieldIcon from '@/components/icons/ShieldIcon';
import AlertTriangleIcon from '@/components/icons/AlertTriangleIcon';
import LockIcon from '@/components/icons/LockIcon';
import SettingsIcon from '@/components/icons/SettingsIcon';

interface RescueWordPressSymptomsSectionProps {
  translations: any;
}

const RescueWordPressSymptomsSection: React.FC<RescueWordPressSymptomsSectionProps> = ({ translations }) => {
  const symptoms = [
    {
      title: getTranslation(translations, 'rescueWordPressLanding.symptoms.items.siteDown.title'),
      description: getTranslation(translations, 'rescueWordPressLanding.symptoms.items.siteDown.description'),
      icon: <AlertCircleIcon />
    },
    {
      title: getTranslation(translations, 'rescueWordPressLanding.symptoms.items.hacked.title'),
      description: getTranslation(translations, 'rescueWordPressLanding.symptoms.items.hacked.description'),
      icon: <ShieldIcon />
    },
    {
      title: getTranslation(translations, 'rescueWordPressLanding.symptoms.items.criticalError.title'),
      description: getTranslation(translations, 'rescueWordPressLanding.symptoms.items.criticalError.description'),
      icon: <AlertTriangleIcon />
    },
    {
      title: getTranslation(translations, 'rescueWordPressLanding.symptoms.items.cannotAccess.title'),
      description: getTranslation(translations, 'rescueWordPressLanding.symptoms.items.cannotAccess.description'),
      icon: <LockIcon />
    },
    {
      title: getTranslation(translations, 'rescueWordPressLanding.symptoms.items.slowOrBroken.title'),
      description: getTranslation(translations, 'rescueWordPressLanding.symptoms.items.slowOrBroken.description'),
      icon: <SettingsIcon />
    }
  ];

  return (
    <section id="symptoms" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {getTranslation(translations, 'rescueWordPressLanding.sections.symptoms.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" aria-hidden="true"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {getTranslation(translations, 'rescueWordPressLanding.symptoms.intro')}
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {symptoms.map((symptom, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-gray-800 hover:border-red-500 hover:shadow-lg hover:shadow-red-500/20 hover:-translate-y-1 transition-all duration-300 scroll-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center text-white mb-4">
                {symptom.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {symptom.title}
              </h3>
              <p className="text-gray-300">
                {symptom.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RescueWordPressSymptomsSection;
