import React from 'react';
import FeaturedProjectsSection from '@/components/FeaturedProjectsSection';

interface MigrationProjectsSectionProps {
  translations: any;
}

const MigrationProjectsSection: React.FC<MigrationProjectsSectionProps> = ({ translations }) => {
  return (
    <FeaturedProjectsSection
      translations={translations}
      projectIds={['decos', 'jlgki', 'vilaLancisV2']}
      titleKey={null}
      subtitleKey="migrationLanding.projects.context"
      labelsBaseKey="migrationLanding.projects.labels"
      itemsBaseKey="migrationLanding.projects.items"
      detailFields={['problem', 'proposal', 'result']}
      visitLabelKey="viewProject"
      sectionClassName="py-20"
    />
  );
};

export default MigrationProjectsSection;
