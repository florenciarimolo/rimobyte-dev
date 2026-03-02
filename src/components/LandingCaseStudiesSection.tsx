import React from 'react';
import { getProjects } from '@/data/projects';
import { getTranslation } from '@/i18n';
import type { Project } from '@/data/projects';

interface LandingCaseStudiesSectionProps {
  translations: any;
  titleKey?: string;
  contextKey: string;
  labelsBaseKey: string;
  itemsBaseKey: string;
  projectIds: string[];
}

const LandingCaseStudiesSection: React.FC<LandingCaseStudiesSectionProps> = ({
  translations,
  titleKey,
  contextKey,
  labelsBaseKey,
  itemsBaseKey,
  projectIds,
}) => {
  const allProjects = getProjects(translations);

  const displayedProjects: Project[] = projectIds
    .map((id) => allProjects.find((project) => project.id === id))
    .filter((project): project is Project => Boolean(project));

  const problemLabel = getTranslation(translations, `${labelsBaseKey}.problem`);
  const proposalLabel = getTranslation(translations, `${labelsBaseKey}.proposal`);
  const resultLabel = getTranslation(translations, `${labelsBaseKey}.result`);
  const viewProjectLabel = getTranslation(translations, `${labelsBaseKey}.viewProject`);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          {titleKey && (
            <>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                {getTranslation(translations, titleKey)}
              </h2>
              <div
                className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"
                aria-hidden="true"
              ></div>
            </>
          )}
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {getTranslation(translations, contextKey)}
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-10">
          {displayedProjects.map((project: Project) => {
            const problemText = getTranslation(translations, `${itemsBaseKey}.${project.id}.problem`);
            const proposalText = getTranslation(translations, `${itemsBaseKey}.${project.id}.proposal`);
            const resultText = getTranslation(translations, `${itemsBaseKey}.${project.id}.result`);

            return (
              <article
                key={project.id}
                className="bg-white/5 dark:bg-gray-900/60 border border-white/10 dark:border-gray-700 rounded-2xl overflow-hidden shadow-xl backdrop-blur"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    srcSet={`${project.image.replace(/\.webp$/, '-400w.webp')} 400w, ${project.image.replace(
                      /\.webp$/,
                      '-664w.webp',
                    )} 664w, ${project.image.replace(/\.webp$/, '-1328w.webp')} 1328w`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 480px"
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="p-6 sm:p-7 space-y-5">
                  <header>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {project.title}
                    </h3>
                  </header>

                  <div className="space-y-4 text-sm text-gray-800 dark:text-gray-200">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300 mb-1.5">
                        {problemLabel}
                      </p>
                      <p className="leading-relaxed">{problemText}</p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300 mb-1.5">
                        {proposalLabel}
                      </p>
                      <p className="leading-relaxed">{proposalText}</p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300 mb-1.5">
                        {resultLabel}
                      </p>
                      <p className="leading-relaxed">{resultText}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs font-medium rounded-full bg-white/60 text-gray-800 dark:bg-gray-800 dark:text-gray-100"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-blue-700 dark:text-blue-300 hover:text-blue-500 dark:hover:text-blue-200 transition-colors"
                      >
                        {viewProjectLabel}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LandingCaseStudiesSection;

