import type { Project } from '../../data/projects.ts'
import { Badge } from '../ui/Badge.tsx'
import { Modal } from '../ui/Modal.tsx'
import { TechnologyTag } from '../ui/TechnologyTag.tsx'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const categoryLabel = project ? project.category.charAt(0).toUpperCase() + project.category.slice(1) : ''

  return (
    <Modal open={project !== null} title={project?.title ?? ''} onClose={onClose}>
      {project ? (
        <>
          <div
            className="flex aspect-[16/9] items-center justify-center rounded-lg border border-border bg-surface font-display text-4xl font-semibold text-muted"
            aria-hidden="true"
          >
            {project.title.charAt(0)}
          </div>
          <div className="mt-4">
            <Badge>{categoryLabel}</Badge>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-secondary">{project.description}</p>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
            {project.technologies.map((tech) => (
              <li key={tech}>
                <TechnologyTag name={tech} />
              </li>
            ))}
          </ul>
          {project.liveUrl || project.githubUrl ? (
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground transition-colors hover:text-accent-strong"
                >
                  Live project
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
        </>
      ) : null}
    </Modal>
  )
}
