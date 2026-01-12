import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { getTranslation } from '../i18n';
import { getProjects, categories } from '../data/projects';
import type { Project } from '../data/projects';

interface ProjectsSectionProps {
  translations: any;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ translations }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const allProjects = getProjects(translations);
  
  const filteredProjects = selectedCategory === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section id="projects" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {getTranslation(translations, 'sections.projects.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" aria-hidden="true"></div>
            
            {/* Project Filters */}
            <nav className="flex flex-wrap justify-center gap-4 mb-12" aria-label="Project filters">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white'
                  }`}
                  aria-pressed={selectedCategory === category.id}
                >
                  {getTranslation(translations, category.labelKey)}
                </button>
              ))}
            </nav>
          </header>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <article key={project.id}>
                <ProjectCard
                  project={project}
                  onClick={() => handleProjectClick(project)}
                  data-project={project.category}
                  translations={translations}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        translations={translations}
      />
    </>
  );
};

export default ProjectsSection;
