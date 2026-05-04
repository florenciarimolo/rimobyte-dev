import React from 'react';
import { getI18N } from '@/i18n';
import { getTranslation } from '@/i18n';
import { getProjects } from '@/data/projects';

/** Proyectos con caso detallado en i18n (sections.featuredProjects.items). */
const PORTFOLIO_PROJECT_IDS = [
  'rocolegal',
  'vilaLancisV2',
  'decos',
  'fenix',
  'vibrantskin',
  'ariadnaVilalta',
  'reset7',
  'luciaNails',
] as const;

const LABEL_KEYS = ['challenge', 'solution', 'result'] as const;
const LABEL_STYLES = ['text-blue-500', 'text-purple-500', 'text-green-500'] as const;

const ITEMS_BASE = 'sections.featuredProjects.items';
const LABELS_BASE = 'sections.featuredProjects.labels';

const ProjectsPortfolioGrid: React.FC = () => {
  const translations = getI18N();
  const all = getProjects(translations);
  const rows = PORTFOLIO_PROJECT_IDS.map((id) => all.find((p) => p.id === id)).filter(Boolean) as ReturnType<
    typeof getProjects
  >;

  const visitLabel = getTranslation(translations, `${LABELS_BASE}.visit`);

  return (
    <section id="portfolio" className="relative py-12 md:py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {rows.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 overflow-hidden flex flex-col"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-gray-200 dark:bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  width="640"
                  height="400"
                  loading="lazy"
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">{project.title}</h2>
                <div className="space-y-5 flex-1">
                  {LABEL_KEYS.map((field, i) => (
                    <div key={field}>
                      <h3 className={`text-xs font-semibold uppercase tracking-wider ${LABEL_STYLES[i]} mb-2`}>
                        {getTranslation(translations, `${LABELS_BASE}.${field}`)}
                      </h3>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        {getTranslation(translations, `${ITEMS_BASE}.${project.id}.${field}`)}
                      </p>
                    </div>
                  ))}
                </div>
                {project.link ? (
                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-500 hover:text-blue-400 transition-colors"
                    >
                      {visitLabel}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPortfolioGrid;
