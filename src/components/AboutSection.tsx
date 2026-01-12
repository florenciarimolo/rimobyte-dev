import React from 'react';
import { getTranslation } from '@/i18n';

interface AboutSectionProps {
  translations: any;
}

const AboutSection: React.FC<AboutSectionProps> = ({ translations }) => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            {getTranslation(translations, 'sections.about.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" aria-hidden="true"></div>
        </header>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <article className="space-y-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {getTranslation(translations, 'sections.about.description1')}
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {getTranslation(translations, 'sections.about.description2')}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                <div className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></div>
                <span>{getTranslation(translations, 'sections.about.status.available')}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                <div className="w-2 h-2 bg-blue-500 rounded-full" aria-hidden="true"></div>
                <span>{getTranslation(translations, 'sections.about.status.remote')}</span>
              </div>
            </div>
          </article>
          
          <aside className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              {getTranslation(translations, 'sections.about.skills.title')}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-medium text-blue-400">
                  {getTranslation(translations, 'sections.about.skills.frontend')}
                </h4>
                <dl className="space-y-2">
                  <div className="flex items-center gap-2 justify-between">
                    <dt className="text-gray-700 dark:text-gray-300">Vue.js</dt>
                    <dd className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }} aria-label="Vue.js skill level: 90%"></div>
                    </dd>
                  </div>
                  <div className="flex items-center gap-2 justify-between">
                    <dt className="text-gray-700 dark:text-gray-300">Astro</dt>
                    <dd className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }} aria-label="Astro skill level: 85%"></div>
                    </dd>
                  </div>
                  <div className="flex items-center gap-2 justify-between">
                    <dt className="text-gray-700 dark:text-gray-300">TypeScript</dt>
                    <dd className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }} aria-label="TypeScript skill level: 85%"></div>
                    </dd>
                  </div>
                  <div className="flex items-center gap-2 justify-between">
                    <dt className="text-gray-700 dark:text-gray-300">TailwindCSS</dt>
                    <dd className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '95%' }} aria-label="TailwindCSS skill level: 95%"></div>
                    </dd>
                  </div>
                  <div className="flex items-center gap-2 justify-between">
                    <dt className="text-gray-700 dark:text-gray-300">React</dt>
                    <dd className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }} aria-label="React skill level: 65%"></div>
                    </dd>
                  </div>
                </dl>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium text-purple-400">
                  {getTranslation(translations, 'sections.about.skills.backend')}
                </h4>
                <dl className="space-y-2">
                  <div className="flex items-center gap-2 justify-between">
                    <dt className="text-gray-700 dark:text-gray-300">Java</dt>
                    <dd className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '88%' }} aria-label="Java skill level: 88%"></div>
                    </dd>
                  </div>
                  <div className="flex items-center gap-2 justify-between">
                    <dt className="text-gray-700 dark:text-gray-300">Python</dt>
                    <dd className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '75%' }} aria-label="Python skill level: 75%"></div>
                    </dd>
                  </div>
                  <div className="flex items-center gap-2 justify-between">
                    <dt className="text-gray-700 dark:text-gray-300">PostgreSQL</dt>
                    <dd className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '80%' }} aria-label="PostgreSQL skill level: 80%"></div>
                    </dd>
                  </div>
                  <div className="flex items-center gap-2 justify-between">
                    <dt className="text-gray-700 dark:text-gray-300">Firebase</dt>
                    <dd className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '65%' }} aria-label="Firebase skill level: 65%"></div>
                    </dd>
                  </div>
                  <div className="flex items-center gap-2 justify-between">
                    <dt className="text-gray-700 dark:text-gray-300">MongoDB</dt>
                    <dd className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '75%' }} aria-label="MongoDB skill level: 75%"></div>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

