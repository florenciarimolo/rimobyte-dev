export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export const education: Education[] = [
  {
    id: '1',
    degree: 'Computer Engineering',
    institution: 'University of Technology',
    period: '2018 - 2022',
    description: 'Bachelor\'s degree in Computer Engineering with focus on software development and system architecture.'
  },
  {
    id: '2',
    degree: 'High School Diploma',
    institution: 'Technical High School',
    period: '2015 - 2018',
    description: 'Specialized in computer science and mathematics with honors.'
  }
];
