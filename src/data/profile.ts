export const profile = {
  name: 'Your Name',
  role: 'Software Developer',
  email: 'you@example.com',
  availability: true,
  bio: 'I build thoughtful digital experiences for the web.',
  resumeUrl: '/resume.pdf',
} as const

export type Profile = typeof profile
