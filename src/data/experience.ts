export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export const experience: Experience[] = [
  {
    id: '1',
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    period: '2023 - Present',
    description: 'Leading development of enterprise web applications using modern technologies. Mentoring junior developers and implementing best practices.',
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS']
  },
  {
    id: '2',
    title: 'Frontend Developer',
    company: 'Digital Innovations Ltd',
    period: '2021 - 2023',
    description: 'Developed responsive web applications and improved user experience. Collaborated with design and backend teams.',
    technologies: ['Vue.js', 'JavaScript', 'CSS3', 'REST APIs', 'Git']
  },
  {
    id: '3',
    title: 'Junior Developer',
    company: 'StartUp Hub',
    period: '2020 - 2021',
    description: 'Built features for a SaaS platform and maintained existing codebase. Participated in code reviews and agile development.',
    technologies: ['React', 'Python', 'Django', 'MySQL', 'Docker']
  },
  {
    id: '4',
    title: 'Freelance Developer',
    company: 'Self-employed',
    period: '2019 - 2020',
    description: 'Developed websites and web applications for various clients. Managed projects from conception to deployment.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'WordPress']
  }
];
