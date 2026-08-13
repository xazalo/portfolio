export const profile = {
  name: 'Xavier Zamora',
  role: 'Software Developer',
  email: 'xaviza11@gmail.com',
  availability: true,
  bio: 'I love build thoughtful digital experiences for the web.',
  resumeUrl: '/resume.pdf',
} as const

export type Profile = typeof profile
