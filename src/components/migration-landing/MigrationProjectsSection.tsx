import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import { getProjects } from '@/data/projects';
import { getTranslation } from '@/i18n';
import type { Project } from '@/data/projects';

interface MigrationProjectsSectionProps {
  translations: any;
}

const MigrationProjectsSection: React.FC<MigrationProjectsSectionProps> = ({ translations }) => {
  const allProjects = getProjects(translations);
  
  // Show 6 projects
  const displayedProjects = allProjects.slice(0, 6);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {getTranslation(translations, 'migrationLanding.projects.context')}
          </p>
        </header>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project: Project) => (
            <article key={project.id}>
              <ProjectCard
                project={project}
                onClick={() => {
                  // Navigate to project or open modal
                  if (project.link) {
                    window.open(project.link, '_blank');
                  }
                }}
                translations={translations}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MigrationProjectsSection;
