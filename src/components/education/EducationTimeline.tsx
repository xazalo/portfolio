import type { ReactNode } from 'react'

export function EducationTimeline({ children }: { children: ReactNode }) {
  return <ol className="relative mt-12 space-y-10 border-l border-border pl-8">{children}</ol>
}
