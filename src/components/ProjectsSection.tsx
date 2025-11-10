import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { getTranslation } from '../i18n';
import { getProjects, categories } from '../data/projects';

interface ProjectsSectionProps {
  translations: any;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ translations }) => {
  const projects = getProjects(translations);

  // Project filtering functionality
  useEffect(() => {
    const filterButtons = document.querySelectorAll('[data-category]');
    const projectCards = document.querySelectorAll('[data-project]');

    const handleFilterClick = (e: Event) => {
      const button = e.target as HTMLElement;
      const category = button.getAttribute('data-category');
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('bg-blue-500', 'text-white'));
      button.classList.add('bg-blue-500', 'text-white');
      
      // Filter projects
      projectCards.forEach(card => {
        const projectCategory = card.getAttribute('data-project');
        if (category === 'all' || projectCategory === category) {
          (card as HTMLElement).style.display = 'block';
        } else {
          (card as HTMLElement).style.display = 'none';
        }
      });
    };

    filterButtons.forEach(button => {
      button.addEventListener('click', handleFilterClick);
    });

    return () => {
      filterButtons.forEach(button => {
        button.removeEventListener('click', handleFilterClick);
      });
    };
  }, []);

  return (
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
                className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                  category.id === 'all' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white'
                }`}
                data-category={category.id}
                aria-pressed={category.id === 'all'}
              >
                {getTranslation(translations, category.labelKey)}
              </button>
            ))}
          </nav>
        </header>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article key={project.id}>
              <ProjectCard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                image={project.image}
                link={project.link}
                github={project.github}
                data-project={project.category}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

