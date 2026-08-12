export type ProjectCategory = 'frontend' | 'backend'

export interface Project {
  id: string
  title: string
  description: string
  category: ProjectCategory
  technologies: string[]
  image?: string
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'project-one',
    title: 'Project One',
    description: 'Short description of this placeholder project.',
    category: 'frontend',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    featured: true,
  },
  {
    id: 'project-two',
    title: 'Project Two',
    description: 'Short description of this placeholder project.',
    category: 'backend',
    technologies: ['Node.js', 'Express', 'REST APIs'],
  },
  {
    id: 'project-three',
    title: 'Project Three',
    description: 'Short description of this placeholder project.',
    category: 'frontend',
    technologies: ['React', 'Framer Motion', 'Vite'],
  },
  {
    id: 'project-four',
    title: 'Project Four',
    description: 'Short description of this placeholder project.',
    category: 'backend',
    technologies: ['Node.js', 'TypeScript', 'REST APIs'],
  },
]
