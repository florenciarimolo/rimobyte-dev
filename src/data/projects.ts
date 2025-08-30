export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  category: 'landing-page' | 'ecommerce' | 'web-app' | 'mobile-app' | 'api';
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    titleKey: 'projects.ecommerce.title',
    descriptionKey: 'projects.ecommerce.description',
    category: 'ecommerce',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'TailwindCSS'],
    image: '/assets/images/ecommerce.jpg',
    link: 'https://example.com',
    github: 'https://github.com/example/ecommerce'
  },
  {
    id: '2',
    titleKey: 'projects.landing.title',
    descriptionKey: 'projects.landing.description',
    category: 'landing-page',
    technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    image: '/assets/images/landing.jpg',
    link: 'https://example.com',
    github: 'https://github.com/example/landing'
  },
  {
    id: '3',
    titleKey: 'projects.taskApp.title',
    descriptionKey: 'projects.taskApp.description',
    category: 'web-app',
    technologies: ['Vue.js', 'Firebase', 'Vuex', 'Vuetify'],
    image: '/assets/images/task-app.jpg',
    link: 'https://example.com',
    github: 'https://github.com/example/task-app'
  },
  {
    id: '4',
    titleKey: 'projects.weatherApi.title',
    descriptionKey: 'projects.weatherApi.description',
    category: 'api',
    technologies: ['Express.js', 'Redis', 'JWT', 'OpenWeather API'],
    image: '/assets/images/weather-api.jpg',
    github: 'https://github.com/example/weather-api'
  },
  {
    id: '5',
    titleKey: 'projects.fitnessApp.title',
    descriptionKey: 'projects.fitnessApp.description',
    category: 'mobile-app',
    technologies: ['React Native', 'Expo', 'Redux', 'Firebase'],
    image: '/assets/images/fitness-app.jpg',
    link: 'https://example.com',
    github: 'https://github.com/example/fitness-app'
  },
  {
    id: '6',
    titleKey: 'projects.portfolio.title',
    descriptionKey: 'projects.portfolio.description',
    category: 'landing-page',
    technologies: ['Astro', 'TypeScript', 'TailwindCSS', 'React'],
    image: '/assets/images/portfolio.jpg',
    link: 'https://example.com',
    github: 'https://github.com/example/portfolio'
  }
];

export const categories = [
  { id: 'all', labelKey: 'filters.all' },
  { id: 'landing-page', labelKey: 'filters.landingPages' },
  { id: 'ecommerce', labelKey: 'filters.ecommerce' },
  { id: 'web-app', labelKey: 'filters.webApps' },
  { id: 'mobile-app', labelKey: 'filters.mobileApps' },
  { id: 'api', labelKey: 'filters.apis' }
];
