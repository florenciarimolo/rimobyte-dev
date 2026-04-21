import React, { useState } from 'react';
import { getTranslation } from '@/i18n';
import { getProjects } from '@/data/projects';

interface FeaturedProjectsSectionProps {
  translations: any;
  projectIds?: string[];
  titleKey?: string | null;
  subtitleKey?: string | null;
  labelsBaseKey?: string;
  itemsBaseKey?: string;
  detailFields?: [string, string, string];
  visitLabelKey?: string;
  sectionClassName?: string;
}

const DEFAULTS = {
  projectIds: ['rocolegal', 'vilaLancisV2', 'decos', 'fenix', 'vibrantskin', 'ariadnaVilalta'],
  titleKey: 'sections.featuredProjects.title',
  subtitleKey: 'sections.featuredProjects.subtitle',
  labelsBaseKey: 'sections.featuredProjects.labels',
  itemsBaseKey: 'sections.featuredProjects.items',
  detailFields: ['challenge', 'solution', 'result'] as [string, string, string],
  visitLabelKey: 'visit',
  sectionClassName: 'py-20 bg-white dark:bg-gray-800',
};

const DETAIL_COLORS = ['text-blue-500', 'text-purple-500', 'text-green-500'];

const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionProps> = ({
  translations,
  projectIds = DEFAULTS.projectIds,
  titleKey: titleKeyProp,
  subtitleKey: subtitleKeyProp,
  labelsBaseKey = DEFAULTS.labelsBaseKey,
  itemsBaseKey = DEFAULTS.itemsBaseKey,
  detailFields = DEFAULTS.detailFields,
  visitLabelKey = DEFAULTS.visitLabelKey,
  sectionClassName = DEFAULTS.sectionClassName,
}) => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const allProjects = getProjects(translations);
  const projects = projectIds
    .map((id) => allProjects.find((p) => p.id === id))
    .filter(Boolean) as ReturnType<typeof getProjects>;

  const toggleProject = (key: string) => {
    setExpandedProject(expandedProject === key ? null : key);
  };

  const titleKey = titleKeyProp === undefined ? DEFAULTS.titleKey : titleKeyProp;
  const subtitleKey = subtitleKeyProp === undefined ? DEFAULTS.subtitleKey : subtitleKeyProp;

  const labels = detailFields.map((field) =>
    getTranslation(translations, `${labelsBaseKey}.${field}`)
  );
  const visitLabel = getTranslation(translations, `${labelsBaseKey}.${visitLabelKey}`);

  return (
    <section id="projects" className={sectionClassName}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-14">
          {titleKey && (
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              {getTranslation(translations, titleKey)}
            </h2>
          )}
          {subtitleKey && (
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-4">
              {getTranslation(translations, subtitleKey)}
            </p>
          )}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" aria-hidden="true"></div>
        </header>

        <div className="space-y-6">
          {projects.map((project) => {
            const isExpanded = expandedProject === project.id;

            return (
              <article
                key={project.id}
                className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleProject(project.id)}
                  className="w-full flex items-center gap-4 p-5 sm:p-6 text-left hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors duration-200"
                  aria-expanded={isExpanded}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover shrink-0"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white truncate">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                      {project.technologies.join(', ')}
                    </p>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 space-y-4 animate-[fadeIn_0.2s_ease-out]">
                    <div className="grid sm:grid-cols-3 gap-4">
                      {detailFields.map((field, i) => (
                        <div key={field} className="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                          <h4 className={`text-xs font-semibold uppercase tracking-wider ${DETAIL_COLORS[i]} mb-2`}>
                            {labels[i]}
                          </h4>
                          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            {getTranslation(translations, `${itemsBaseKey}.${project.id}.${field}`)}
                          </p>
                        </div>
                      ))}
                    </div>
                    {project.link && (
                      <div className="flex justify-end">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors"
                        >
                          {visitLabel}
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
