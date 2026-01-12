import React from 'react';
import TimelineItem from './TimelineItem';
import { getTranslation } from '@/i18n';
import { getExperience } from '@/data/experience';

interface ExperienceSectionProps {
  translations: any;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ translations }) => {
  const experienceData = getExperience(translations);

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            {getTranslation(translations, 'sections.experience.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" aria-hidden="true"></div>
        </header>
        
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <article key={exp.id}>
              <TimelineItem
                title={exp.title}
                subtitle={exp.company}
                period={exp.period}
                description={exp.description}
                technologies={exp.id === 'freelance' ? exp.technologies : []}
                isLast={index === experienceData.length - 1}
                isProminent={exp.id === 'freelance'}
                isCompact={exp.id !== 'freelance'}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

