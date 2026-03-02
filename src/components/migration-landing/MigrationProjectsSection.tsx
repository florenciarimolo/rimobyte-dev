import React from 'react';
import LandingCaseStudiesSection from '@/components/LandingCaseStudiesSection';

interface MigrationProjectsSectionProps {
  translations: any;
}

const MigrationProjectsSection: React.FC<MigrationProjectsSectionProps> = ({ translations }) => {
  return (
    <LandingCaseStudiesSection
      translations={translations}
      contextKey="migrationLanding.projects.context"
      labelsBaseKey="migrationLanding.projects.labels"
      itemsBaseKey="migrationLanding.projects.items"
      projectIds={['decos', 'jlgki', 'vilaLancisV2']}
    />
  );
};

export default MigrationProjectsSection;
