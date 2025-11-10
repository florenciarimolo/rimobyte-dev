import React from 'react';
import TimelineItem from './TimelineItem';
import { getTranslation } from '../i18n';
import { getEducation } from '../data/education';

interface EducationSectionProps {
  translations: any;
}

const EducationSection: React.FC<EducationSectionProps> = ({ translations }) => {
  const educationData = getEducation(translations);

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {getTranslation(translations, 'sections.education.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" aria-hidden="true"></div>
        </header>
        
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <article key={edu.id}>
              <TimelineItem
                title={edu.title}
                subtitle={edu.institution}
                period={edu.period}
                description={edu.description}
                isLast={index === educationData.length - 1}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

