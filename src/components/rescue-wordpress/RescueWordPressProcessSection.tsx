import React from 'react';
import { getTranslation } from '@/i18n';
import SearchIcon from '@/components/icons/SearchIcon';
import DatabaseIcon from '@/components/icons/DatabaseIcon';
import ToolIcon from '@/components/icons/ToolIcon';
import ShieldIcon from '@/components/icons/ShieldIcon';

interface RescueWordPressProcessSectionProps {
  translations: any;
}

const RescueWordPressProcessSection: React.FC<RescueWordPressProcessSectionProps> = ({ translations }) => {
  const steps = [
    {
      title: getTranslation(translations, 'rescueWordPressLanding.process.steps.analysis.title'),
      description: getTranslation(translations, 'rescueWordPressLanding.process.steps.analysis.description'),
      icon: <SearchIcon />
    },
    {
      title: getTranslation(translations, 'rescueWordPressLanding.process.steps.backup.title'),
      description: getTranslation(translations, 'rescueWordPressLanding.process.steps.backup.description'),
      icon: <DatabaseIcon />
    },
    {
      title: getTranslation(translations, 'rescueWordPressLanding.process.steps.repair.title'),
      description: getTranslation(translations, 'rescueWordPressLanding.process.steps.repair.description'),
      icon: <ToolIcon />
    },
    {
      title: getTranslation(translations, 'rescueWordPressLanding.process.steps.prevention.title'),
      description: getTranslation(translations, 'rescueWordPressLanding.process.steps.prevention.description'),
      icon: <ShieldIcon />
    }
  ];

  return (
    <section id="process" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {getTranslation(translations, 'rescueWordPressLanding.sections.process.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" aria-hidden="true"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {getTranslation(translations, 'rescueWordPressLanding.process.intro')}
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-md rounded-xl p-8 border border-gray-800 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 scroll-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RescueWordPressProcessSection;
