import { Eye } from 'lucide-react'
import type { Project } from '../../data/projects.ts'
import { Badge } from '../ui/Badge.tsx'
import { Card } from '../ui/Card.tsx'
import { TechnologyTag } from '../ui/TechnologyTag.tsx'
import { cn } from '../../lib/utils'

interface ProjectCardProps {
  project: Project
  activeSkill: string | null
  onSelect: (project: Project) => void
}

export function ProjectCard({ project, activeSkill, onSelect }: ProjectCardProps) {
  const categoryLabel = project.category.charAt(0).toUpperCase() + project.category.slice(1)
  const isHighlighted = activeSkill !== null && project.technologies.includes(activeSkill)
  const isDimmed = activeSkill !== null && !isHighlighted

  return (
    <Card
      className={cn(
        'group flex flex-col overflow-hidden transition-[opacity,translate] duration-300 hoverable:-translate-y-1',
        isDimmed && 'opacity-40',
        isHighlighted && 'ring-2 ring-accent',
      )}
    >
      <button
        type="button"
        onClick={() => onSelect(project)}
        aria-label={`Quick view of ${project.title}`}
        className="relative flex aspect-[16/9] items-center justify-center border-b border-border bg-surface font-display text-4xl font-semibold text-muted transition-colors hover:bg-surface/70"
      >
        {project.title.charAt(0)}
        <span className="absolute inset-0 flex items-center justify-center gap-2 bg-foreground/0 text-sm font-medium text-foreground opacity-0 transition-opacity duration-200 hoverable:bg-foreground/5 hoverable:opacity-100">
          <Eye className="h-4 w-4" />
          Quick view
        </span>
      </button>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-foreground">{project.title}</h3>
          <Badge>{categoryLabel}</Badge>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-secondary">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
          {project.technologies.map((tech) => (
            <li key={tech}>
              <TechnologyTag name={tech} />
            </li>
          ))}
        </ul>
        {project.liveUrl || project.githubUrl ? (
          <div className="mt-5 flex gap-4 text-sm font-medium">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="text-foreground transition-colors hover:text-accent-strong"
              >
                Live
              </a>
            ) : null}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-foreground transition-colors hover:text-accent-strong"
              >
                GitHub
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </Card>
  )
}
