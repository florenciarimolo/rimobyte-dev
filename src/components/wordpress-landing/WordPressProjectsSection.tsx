import React from 'react';
import FeaturedProjectsSection from '@/components/FeaturedProjectsSection';

interface WordPressProjectsSectionProps {
  translations: any;
}

const WordPressProjectsSection: React.FC<WordPressProjectsSectionProps> = ({ translations }) => {
  return (
    <FeaturedProjectsSection
      translations={translations}
      projectIds={['rocolegal', 'vilaLancisV2', 'decos', 'reset7', 'luciaNails', 'fenix']}
      titleKey="wordpressLanding.projects.title"
      subtitleKey="wordpressLanding.projects.context"
      labelsBaseKey="wordpressLanding.projects.labels"
      itemsBaseKey="wordpressLanding.projects.items"
      detailFields={['problem', 'proposal', 'result']}
      visitLabelKey="viewProject"
      sectionClassName="py-20"
    />
  );
};

export default WordPressProjectsSection;
