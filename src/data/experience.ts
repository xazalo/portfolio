export interface Experience {
  id: string
  company: string
  role: string
  startDate: string
  endDate?: string
  description: string
  responsibilities: string[]
  technologies: string[]
}

export const experience: Experience[] = [
  {
    id: 'experience-one',
    company: 'Company One',
    role: 'Your Role',
    startDate: 'Start date',
    endDate: 'Present',
    description: 'Describe your responsibilities and impact in this role.',
    responsibilities: ['Add your key responsibilities here'],
    technologies: ['React', 'TypeScript', 'Node.js'],
  },
  {
    id: 'experience-two',
    company: 'Company Two',
    role: 'Your Role',
    startDate: 'Start date',
    description: 'Describe your responsibilities and impact in this role.',
    responsibilities: ['Add your key responsibilities here'],
    technologies: ['JavaScript', 'Express', 'REST APIs'],
  },
]
