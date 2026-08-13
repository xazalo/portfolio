export interface Education {
  id: string
  institution: string
  degree: string
  startDate?: string
  endDate: string
  description: string
  highlights?: string[]
  technologies?: string[]
}

export const education: Education[] = [
  {
    id: 'uoc-certificate',
    institution: 'Universitat Oberta de Catalunya (UOC)',
    degree: 'Javascript C1 / Course',
    startDate: '2025',
    endDate: '2026',
    description:
      'University specialization focused on practical skills and applied technical knowledge.',
    highlights: [
      'Successfully completed continuous assessment projects through online methodology',
      'Acquired theoretical and practical fundamentals oriented toward the technology sector',
    ],
    technologies: ['Javascript', 'Vue'],
  },
  {
    id: 'self-taught-learning',
    institution: 'Self-Taught / Independent Learning',
    degree: 'Independent Software Development',
    startDate: '2022',
    endDate: 'Present',
    description:
      'Continuous and self-directed learning focused on modern technologies, clean code practices, and building real-world projects.',
    highlights: [
      'Built personal and hands-on projects using official documentation and specialized technical resources',
      'Demonstrated high adaptability and quick learning in acquiring new tools across the software ecosystem',
    ],
    technologies: ['Nuxt', 'TypeScript', 'Node.js', 'Git'],
  },
]