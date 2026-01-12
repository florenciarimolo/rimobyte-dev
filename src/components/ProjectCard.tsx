import { getTranslation } from '@/i18n';
import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  translations?: any;
  'data-project'?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onClick,
  translations,
  'data-project': dataProject,
}) => {
  // Limit technologies to 3
  const displayTechnologies = project.technologies.slice(0, 3);

  return (
    <motion.div
      className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300"
      data-project={dataProject}
      onClick={onClick}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`View ${project.title} project`}
    >
      {/* Image Container - Preserves aspect ratio */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Dark Overlay on Hover - Desktop only, darker */}
        <div className="absolute inset-0 bg-black/75 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content Overlay - Fades in on hover (Desktop only) */}
        <div className="absolute inset-0 hidden md:flex flex-col justify-end p-6 text-white">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 w-full">
            <h3 className="font-bold mb-2 line-clamp-2 break-words overflow-hidden">
              {project.title}
            </h3>
            
            <p className="text-xs mb-4 text-gray-200">
              {project.shortDescription}
            </p>

            {/* Link */}
            {project.link && (
              <div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-xs text-white hover:text-gray-200 transition-colors duration-200 no-underline"
                >
                  {translations ? getTranslation(translations, 'sections.projects.viewProject') || 'View Project' : 'View Project'}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile/Non-hover Content - Always visible on mobile and as fallback */}
      <div className="p-4 md:hidden">
        <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 break-words overflow-hidden">
          {project.title}
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-2">
          {displayTechnologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
            >
              {tech.trim()}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
