import React, { useState } from 'react';
import { getTranslation } from '@/i18n';

interface FeaturedProjectsSectionProps {
  translations: any;
}

const FEATURED_PROJECTS = [
  { key: 'rocolegal', image: 'rocolegal.webp', link: 'https://rocolegal.com', tech: 'WordPress, Elementor, Yoast SEO' },
  { key: 'vilaLancisV2', image: 'vila-lancis-v2.webp', link: 'https://vilalancis.com', tech: 'Elementor, Astra, Yoast SEO, Polylang' },
  { key: 'decos', image: 'decos.webp', link: 'https://decos.es', tech: 'WooCommerce, Elementor, Astra' },
  { key: 'fenix', image: 'fenix.webp', link: 'https://fenixinternacional360.com', tech: 'WordPress, Elementor, Systeme.io' },
] as const;

const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionProps> = ({ translations }) => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleProject = (key: string) => {
    setExpandedProject(expandedProject === key ? null : key);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            {getTranslation(translations, 'sections.featuredProjects.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-4">
            {getTranslation(translations, 'sections.featuredProjects.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" aria-hidden="true"></div>
        </header>

        <div className="space-y-6">
          {FEATURED_PROJECTS.map((project) => {
            const isExpanded = expandedProject === project.key;
            const projectTitle = getTranslation(translations, `projects.${project.key}.title`);

            return (
              <article
                key={project.key}
                className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleProject(project.key)}
                  className="w-full flex items-center gap-4 p-5 sm:p-6 text-left hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors duration-200"
                  aria-expanded={isExpanded}
                >
                  <img
                    src={`/assets/images/projects/${project.image}`}
                    alt={projectTitle}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover shrink-0"
                    width="64"
                    height="64"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white truncate">
                      {projectTitle}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{project.tech}</p>
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
                      <div className="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-500 mb-2">
                          {getTranslation(translations, 'sections.featuredProjects.labels.challenge')}
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                          {getTranslation(translations, `sections.featuredProjects.items.${project.key}.challenge`)}
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-500 mb-2">
                          {getTranslation(translations, 'sections.featuredProjects.labels.solution')}
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                          {getTranslation(translations, `sections.featuredProjects.items.${project.key}.solution`)}
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-green-500 mb-2">
                          {getTranslation(translations, 'sections.featuredProjects.labels.result')}
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                          {getTranslation(translations, `sections.featuredProjects.items.${project.key}.result`)}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors"
                      >
                        {getTranslation(translations, 'sections.featuredProjects.labels.visit')}
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </a>
                    </div>
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
