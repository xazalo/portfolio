import { useState } from 'react'
import type { Project, ProjectCategory } from '../../data/projects.ts'
import { SectionHeading } from '../ui/SectionHeading.tsx'
import { Reveal } from '../ui/Reveal.tsx'
import { ProjectCard } from './ProjectCard.tsx'
import { projects } from '../../data/projects.ts'
import { cn } from '../../lib/utils'

type ProjectFilter = 'all' | ProjectCategory

const FILTERS: { id: ProjectFilter; label: string }[] = [
  { id: 'all', label: 'All projects' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'fullstack', label: 'Full Stack' },
]

interface ProjectsSectionProps {
  activeSkill: string | null
  onSelect: (project: Project) => void
}

export function ProjectsSection({
  activeSkill,
  onSelect,
}: ProjectsSectionProps) {
  const [filter, setFilter] = useState<ProjectFilter>('all')

  const visibleProjects = projects.filter(
    (project) => filter === 'all' || project.category === filter,
  )

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        sm:py-28
      "
    >
      {/* Ambient green light */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -right-40 top-20
          h-80 w-80
          rounded-full
          bg-emerald-400/[0.035]
          blur-3xl
        "
      />

      <div className="container-page relative mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="Selected work demonstrating what I build."
        />

        {/* Filters */}
        <Reveal>
          <div
            className="
              mt-8 mb-10
              flex flex-col gap-4
              sm:flex-row sm:items-center sm:justify-between
            "
          >
            <div
              className="
                inline-flex w-fit
                rounded-xl
                border border-black/[0.06]
                bg-background/70
                p-1
                shadow-sm
                backdrop-blur-sm
              "
              role="group"
              aria-label="Filter projects"
            >
              {FILTERS.map(({ id, label }) => {
                const isActive = filter === id

                return (
                  <button
                    key={id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setFilter(id)}
                    className={cn(
                      `
                        relative
                        rounded-lg
                        px-3.5 py-2
                        text-xs font-medium
                        transition-all duration-200
                        sm:px-4 sm:text-sm
                      `,
                      isActive
                        ? `
                          bg-emerald-500
                          text-white
                          shadow-sm
                          shadow-emerald-500/20
                        `
                        : `
                          text-muted
                          hover:bg-black/[0.035]
                          hover:text-foreground
                        `,
                    )}
                  >
                    {label}
                  </button>
                )
              })}
            </div>

            {/* Project count */}
            <span className="text-xs font-medium text-muted">
              {visibleProjects.length}{' '}
              {visibleProjects.length === 1 ? 'project' : 'projects'}
            </span>
          </div>
        </Reveal>

        {/* Projects */}
        <Reveal delay={100}>
          {visibleProjects.length > 0 ? (
            <div
              className="
                grid
                gap-5
                sm:gap-6
                md:grid-cols-2
                lg:grid-cols-3
              "
            >
              {visibleProjects.map((project, index) => (
                <Reveal
                  key={project.id}
                  delay={Math.min(index * 60, 240)}
                >
                  <ProjectCard
                    project={project}
                    activeSkill={activeSkill}
                    onSelect={onSelect}
                  />
                </Reveal>
              ))}
            </div>
          ) : (
            <div
              className="
                rounded-2xl
                border border-black/[0.06]
                bg-background/70
                px-6 py-12
                text-center
                shadow-sm
              "
            >
              <p className="text-sm text-secondary">
                No projects found in this category.
              </p>

              <button
                type="button"
                onClick={() => setFilter('all')}
                className="
                  mt-4
                  text-sm font-medium
                  text-emerald-600
                  transition-colors
                  hover:text-emerald-500
                "
              >
                View all projects
              </button>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  )
}