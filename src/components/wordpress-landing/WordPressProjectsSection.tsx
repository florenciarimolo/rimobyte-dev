import React from 'react';
import LandingCaseStudiesSection from '@/components/LandingCaseStudiesSection';

interface WordPressProjectsSectionProps {
  translations: any;
}

const WordPressProjectsSection: React.FC<WordPressProjectsSectionProps> = ({ translations }) => {
  return (
    <LandingCaseStudiesSection
      translations={translations}
      titleKey="wordpressLanding.projects.title"
      contextKey="wordpressLanding.projects.context"
      labelsBaseKey="wordpressLanding.projects.labels"
      itemsBaseKey="wordpressLanding.projects.items"
      projectIds={['rocolegal', 'vilaLancisV2', 'decos', 'reset7', 'luciaNails']}
    />
  );
};

export default WordPressProjectsSection;
