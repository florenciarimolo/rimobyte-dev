export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'landing-page' | 'ecommerce' | 'web-app' | 'mobile-app' | 'api';
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and payment processing.',
    category: 'ecommerce',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'TailwindCSS'],
    image: '/assets/images/ecommerce.jpg',
    link: 'https://example.com',
    github: 'https://github.com/example/ecommerce'
  },
  {
    id: '2',
    title: 'Landing Page Template',
    description: 'A responsive landing page template with modern design and smooth animations.',
    category: 'landing-page',
    technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    image: '/assets/images/landing.jpg',
    link: 'https://example.com',
    github: 'https://github.com/example/landing'
  },
  {
    id: '3',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    category: 'web-app',
    technologies: ['Vue.js', 'Firebase', 'Vuex', 'Vuetify'],
    image: '/assets/images/task-app.jpg',
    link: 'https://example.com',
    github: 'https://github.com/example/task-app'
  },
  {
    id: '4',
    title: 'Weather API',
    description: 'A RESTful weather API with caching and rate limiting features.',
    category: 'api',
    technologies: ['Express.js', 'Redis', 'JWT', 'OpenWeather API'],
    image: '/assets/images/weather-api.jpg',
    github: 'https://github.com/example/weather-api'
  },
  {
    id: '5',
    title: 'Mobile Fitness App',
    description: 'A cross-platform mobile app for tracking workouts and nutrition.',
    category: 'mobile-app',
    technologies: ['React Native', 'Expo', 'Redux', 'Firebase'],
    image: '/assets/images/fitness-app.jpg',
    link: 'https://example.com',
    github: 'https://github.com/example/fitness-app'
  },
  {
    id: '6',
    title: 'Portfolio Website',
    description: 'A personal portfolio website with dark/light theme and multilingual support.',
    category: 'landing-page',
    technologies: ['Astro', 'TypeScript', 'TailwindCSS', 'React'],
    image: '/assets/images/portfolio.jpg',
    link: 'https://example.com',
    github: 'https://github.com/example/portfolio'
  }
];

export const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'landing-page', label: 'Landing Pages' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'web-app', label: 'Web Apps' },
  { id: 'mobile-app', label: 'Mobile Apps' },
  { id: 'api', label: 'APIs' }
];
