import { useState } from 'react'
import type { Project, ProjectCategory } from '../../data/projects.ts'
import { SectionHeading } from '../ui/SectionHeading.tsx'
import { Reveal } from '../ui/Reveal.tsx'
import { ProjectCard } from './ProjectCard.tsx'
import { projects } from '../../data/projects.ts'
import { cn } from '../../lib/utils'

type ProjectFilter = 'all' | ProjectCategory

const FILTERS: { id: ProjectFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
]

interface ProjectsSectionProps {
  activeSkill: string | null
  onSelect: (project: Project) => void
}

export function ProjectsSection({ activeSkill, onSelect }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<ProjectFilter>('all')

  const visibleProjects = projects.filter(
    (project) => filter === 'all' || project.category === filter,
  )

  return (
    <section id="projects" className="container-page section-pad">
      <SectionHeading title="Projects" subtitle="Selected work demonstrating what I build." />
      <Reveal>
        <div className="mb-8 flex flex-wrap gap-3" role="group" aria-label="Filter projects">
          {FILTERS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              aria-pressed={filter === id}
              onClick={() => setFilter(id)}
              className={cn(
                'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
                filter === id
                  ? 'border-accent bg-accent/10 text-accent-strong'
                  : 'border-border bg-background text-secondary hover:border-accent hover:text-foreground',
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </Reveal>
      <Reveal delay={100}>
        {visibleProjects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                activeSkill={activeSkill}
                onSelect={onSelect}
              />
            ))}
          </div>
        ) : (
          <p className="rounded-xl border border-border bg-surface p-8 text-center text-secondary">
            No projects found in this category.
          </p>
        )}
      </Reveal>
    </section>
  )
}
