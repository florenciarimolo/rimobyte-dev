export interface Education {
  id: string;
  degreeKey: string;
  institution: string;
  period: string;
  descriptionKey: string;
}

export const education: Education[] = [
  {
    id: '1',
    degreeKey: 'education.computer.title',
    institution: 'University of Technology',
    period: '2018 - 2022',
    descriptionKey: 'education.computer.description'
  },
  {
    id: '2',
    degreeKey: 'education.highSchool.title',
    institution: 'Technical High School',
    period: '2015 - 2018',
    descriptionKey: 'education.highSchool.description'
  }
];
