import project1Image from '../assets/1.png'
import project2Image from '../assets/2.png'
import project3Image from '../assets/3.png'

export type ProjectCategory = 'frontend' | 'fullstack'

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
    id: 'camel-up',
    title: 'Camel Up Game',
    description:
      'A real-time multiplayer implementation of the board game, featuring dynamic betting logic, WebSockets for live sync, and an interactive user interface.',
    category: 'fullstack',
    technologies: ['Vue 3', 'TypeScript', 'WebSockets'],
    featured: true,
    liveUrl: 'https://camelup-camelup-tzqanr-1f0d01-138-199-214-210.sslip.io/',
    githubUrl: 'https://github.com/xazalo/CamelUp-deploy',
    image: project1Image,
  },
  {
    id: 'zalor-studio',
    title: 'Zalor Studio Platform',
    description:
      'Digital platform designed as the foundation for an independent creative agency, create websites, featuring service showcases, client onboarding.',
    category: 'frontend',
    technologies: ['Node.js', 'Nuxt', 'CSS'],
    featured: true,
    liveUrl: 'https://zalorstudio.com',
    githubUrl: 'https://github.com/tu-usuario/zalor-studio',
    image: project2Image,
  },
  {
    id: 'developer-portfolio',
    title: 'Interactive Portfolio',
    description:
      'Modern personal portfolio and developer showcase featuring dynamic skill filtering, fluid page flow, fast build tooling, and a responsive design.',
    category: 'frontend',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    featured: true,
    githubUrl: 'https://github.com/xazalo/portfolio',
    image: project3Image,
  },
]