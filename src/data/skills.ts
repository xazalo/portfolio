export type SkillCategory = 'frontend' | 'backend' | 'tooling'

export interface SkillGroup {
  category: SkillCategory
  label: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'frontend',
    label: 'Frontend',
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Framer Motion',
    ],
  },
  {
    category: 'backend',
    label: 'Backend',
    skills: ['Node.js', 'Express', 'REST APIs'],
  },
  {
    category: 'tooling',
    label: 'Tooling',
    skills: ['Git', 'GitHub', 'Vite', 'ESLint', 'Prettier'],
  },
]
