export type SkillCategory = 'frontend' | 'backend' | 'others'

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
      'Nuxt',
      'Vue',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Tailwind CSS',
    ],
  },
  {
    category: 'backend',
    label: 'Backend',
    skills: ['Node.js', 'Fastify', 'REST APIs'],
  },
  {
    category: 'others',
    label: 'Others',
    skills: ['Git', 'GitHub', 'Deployment', 'Docker', 'Rust', 'OpenCode'],
  },
]
