export interface Experience {
  id: string;
  titleKey: string;
  company: string;
  period: string;
  descriptionKey: string;
  technologies: string[];
}

export const experience: Experience[] = [
  {
    id: '1',
    titleKey: 'experience.senior.title',
    company: 'TechCorp Solutions',
    period: '2023 - Present',
    descriptionKey: 'experience.senior.description',
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS']
  },
  {
    id: '2',
    titleKey: 'experience.frontend.title',
    company: 'Digital Innovations Ltd',
    period: '2021 - 2023',
    descriptionKey: 'experience.frontend.description',
    technologies: ['Vue.js', 'JavaScript', 'CSS3', 'REST APIs', 'Git']
  },
  {
    id: '3',
    titleKey: 'experience.junior.title',
    company: 'StartUp Hub',
    period: '2020 - 2021',
    descriptionKey: 'experience.junior.description',
    technologies: ['React', 'Python', 'Django', 'MySQL', 'Docker']
  },
  {
    id: '4',
    titleKey: 'experience.freelance.title',
    company: 'Self-employed',
    period: '2019 - 2020',
    descriptionKey: 'experience.freelance.description',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'WordPress']
  }
];
