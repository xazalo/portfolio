import type { Project } from '../../data/projects.ts'
import { Badge } from '../ui/Badge.tsx'
import { Modal } from '../ui/Modal.tsx'
import { TechnologyTag } from '../ui/TechnologyTag.tsx'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const categoryLabel = project
    ? project.category.charAt(0).toUpperCase() + project.category.slice(1)
    : ''

  return (
    <Modal
      open={project !== null}
      title={project?.title ?? ''}
      onClose={onClose}
    >
      {project ? (
        <div className="space-y-6">
          {/* Project preview */}
          <div
            className="
              group relative flex aspect-[16/9]
              items-center justify-center
              overflow-hidden
              rounded-2xl
              border border-black/[0.07]
              bg-black/[0.025]
              shadow-inner
            "
            aria-hidden="true"
          >
            {/* Ambient green glow */}
            <div
              className="
                absolute left-1/2 top-1/2
                h-40 w-40
                -translate-x-1/2 -translate-y-1/2
                rounded-full
                bg-emerald-400/10
                blur-3xl
                transition-all duration-500
                group-hover:bg-emerald-400/20
              "
            />

            {/* Decorative grid */}
            <div
              className="
                absolute inset-0
                opacity-[0.035]
                [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
                [background-size:32px_32px]
              "
            />

            <span
              className="
                relative
                font-display
                text-7xl font-semibold
                tracking-tight
                text-foreground/10
                transition-all duration-500
                group-hover:scale-110
                group-hover:text-emerald-400/20
              "
            >
              {project.title.charAt(0)}
            </span>

            {/* Preview label */}
            <span
              className="
                absolute bottom-4 left-4
                rounded-full
                border border-black/[0.06]
                bg-white/80
                px-3 py-1.5
                text-[10px]
                font-medium
                uppercase
                tracking-[0.15em]
                text-muted
                shadow-sm
                backdrop-blur-md
              "
            >
              Project preview
            </span>
          </div>

          {/* Category */}
          <div>
            <Badge
              className="
                border border-emerald-400/20
                bg-emerald-400/[0.06]
                text-emerald-600
              "
            >
              {categoryLabel}
            </Badge>
          </div>

          {/* Description */}
          <div>
            <p
              className="
                text-sm
                leading-7
                text-secondary
                sm:text-base
              "
            >
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <p
              className="
                mb-3
                text-[10px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-muted/70
              "
            >
              Technologies
            </p>

            <ul
              className="flex flex-wrap gap-2"
              aria-label="Technologies"
            >
              {project.technologies.map((tech) => (
                <li key={tech}>
                  <TechnologyTag name={tech} />
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          {project.liveUrl || project.githubUrl ? (
            <div
              className="
                flex flex-col gap-3
                border-t border-black/[0.06]
                pt-5
                sm:flex-row
              "
            >
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    items-center justify-center
                    rounded-xl
                    bg-emerald-500
                    px-5 py-2.5
                    text-sm font-medium
                    text-white
                    shadow-sm
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:bg-emerald-400
                    hover:shadow-lg
                    hover:shadow-emerald-500/20
                  "
                >
                  View live project
                </a>
              ) : null}

              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    items-center justify-center
                    rounded-xl
                    border border-black/[0.08]
                    bg-black/[0.02]
                    px-5 py-2.5
                    text-sm font-medium
                    text-foreground
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-emerald-400/30
                    hover:bg-emerald-400/[0.05]
                    hover:text-emerald-600
                  "
                >
                  View on GitHub
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      ) : null}
    </Modal>
  )
}