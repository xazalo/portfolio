import { ExternalLink, Eye } from 'lucide-react'
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

export function ProjectCard({
  project,
  activeSkill,
  onSelect,
}: ProjectCardProps) {
  const categoryLabel =
    project.category.charAt(0).toUpperCase() +
    project.category.slice(1)

  const isHighlighted =
    activeSkill !== null &&
    project.technologies.includes(activeSkill)

  const isDimmed =
    activeSkill !== null &&
    !isHighlighted

  return (
    <Card
      className={cn(
        `
          group
          relative
          flex flex-col
          overflow-hidden
          rounded-2xl

          border
          border-black/[0.12]

          bg-white

          shadow-[
            0_2px_4px_rgba(0,0,0,0.10),
            0_6px_12px_rgba(0,0,0,0.12),
            0_14px_24px_rgba(0,0,0,0.14),
            0_28px_55px_rgba(0,0,0,0.12)
          ]

          transition-all
          duration-300
          ease-out

          hover:-translate-y-2
          hover:border-black/[0.16]

          hover:shadow-[
            0_3px_6px_rgba(0,0,0,0.12),
            0_8px_16px_rgba(0,0,0,0.15),
            0_18px_32px_rgba(0,0,0,0.18),
            0_35px_70px_rgba(0,0,0,0.18)
          ]
        `,

        isDimmed &&
          `
            opacity-40
          `,

        isHighlighted &&
          `
            border-emerald-400/40
            ring-2
            ring-emerald-400/30

            shadow-[
              0_3px_6px_rgba(0,0,0,0.10),
              0_10px_20px_rgba(0,0,0,0.14),
              0_24px_45px_rgba(0,0,0,0.16),
              0_0_35px_rgba(52,211,153,0.20)
            ]

            hover:shadow-[
              0_4px_8px_rgba(0,0,0,0.12),
              0_12px_24px_rgba(0,0,0,0.16),
              0_26px_50px_rgba(0,0,0,0.18),
              0_0_45px_rgba(52,211,153,0.25)
            ]
          `,
      )}
    >
      {/* Project preview */}
      <button
        type="button"
        onClick={() => onSelect(project)}
        aria-label={`Quick view of ${project.title}`}
        className="
          group/preview
          relative
          flex
          aspect-[16/9]
          items-center
          justify-center
          overflow-hidden

          border-b
          border-black/[0.10]

          bg-gradient-to-br
          from-surface
          via-white
          to-surface

          font-display
          text-4xl
          font-semibold
          text-muted

          shadow-[inset_0_-2px_6px_rgba(0,0,0,0.04)]

          transition-all
          duration-300

          hover:from-surface
          hover:via-white
          hover:to-emerald-50/50
        "
      >
        {/* Render Image if available, otherwise display Initial */}
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover/preview:scale-105"
          />
        ) : (
          <>
            {/* Background glow */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-32
                w-32

                -translate-x-1/2
                -translate-y-1/2

                rounded-full

                bg-emerald-400/0
                blur-3xl

                transition-all
                duration-500

                group-hover/preview:scale-[2]
                group-hover/preview:bg-emerald-400/15
              "
            />

            {/* Inner depth */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0

                bg-gradient-to-b
                from-white/60
                via-transparent
                to-black/[0.025]

                opacity-70
              "
            />

            {/* Project initial */}
            <span
              className="
                relative
                z-10

                transition-all
                duration-300
                ease-out

                group-hover/preview:-translate-y-1
                group-hover/preview:scale-110
                group-hover/preview:text-emerald-500

                group-hover/preview:[text-shadow:0_10px_25px_rgba(52,211,153,0.30)]
              "
            >
              {project.title.charAt(0)}
            </span>
          </>
        )}

        {/* Quick view overlay */}
        <span
          className="
            absolute
            inset-0
            z-20

            flex
            items-center
            justify-center

            bg-black/0

            text-sm
            font-medium
            text-foreground

            opacity-0

            backdrop-blur-0

            transition-all
            duration-300

            group-hover/preview:bg-black/[0.04]
            group-hover/preview:opacity-100
            group-hover/preview:backdrop-blur-[2px]
          "
        >
          <span
            className="
              flex
              items-center
              gap-2

              rounded-full

              border
              border-black/[0.10]

              bg-white/95

              px-4
              py-2

              shadow-[
                0_3px_6px_rgba(0,0,0,0.10),
                0_8px_18px_rgba(0,0,0,0.14),
                0_16px_30px_rgba(0,0,0,0.12)
              ]

              transition-all
              duration-300

              group-hover/preview:-translate-y-0.5
            "
          >
            <Eye className="h-4 w-4 text-emerald-500" />
            Quick view
          </span>
        </span>
      </button>

      {/* Content */}
      <div
        className="
          relative
          flex
          flex-1
          flex-col
          p-5
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-3">
          <h3
            className="
              font-display
              text-lg
              font-semibold
              tracking-tight
              text-foreground

              transition-all
              duration-300

              group-hover:text-emerald-500
            "
          >
            {project.title}
          </h3>

          <Badge>{categoryLabel}</Badge>
        </div>

        {/* Description */}
        <p
          className="
            mt-2
            flex-1
            text-sm
            leading-relaxed
            text-secondary
          "
        >
          {project.description}
        </p>

        {/* Technologies */}
        <ul
          className="
            mt-4
            flex
            flex-wrap
            gap-2
          "
          aria-label="Technologies"
        >
          {project.technologies.map((tech) => (
            <li key={tech}>
              <TechnologyTag name={tech} />
            </li>
          ))}
        </ul>

        {/* Action Links */}
        {project.liveUrl || project.githubUrl ? (
          <div
            className="
              mt-6
              flex
              items-center
              gap-3
              pt-4
              border-t
              border-black/[0.06]
            "
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit live demo for ${project.title}`}
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-lg
                  border
                  border-emerald-500/20
                  bg-emerald-50/50
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  text-emerald-700
                  transition-all
                  duration-200
                  hover:bg-emerald-500
                  hover:text-white
                  hover:border-emerald-500
                  hover:shadow-[0_2px_8px_rgba(52,211,153,0.30)]
                "
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live Demo
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View GitHub repository for ${project.title}`}
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-lg
                  border
                  border-black/[0.10]
                  bg-white
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  text-foreground
                  transition-all
                  duration-200
                  hover:border-black/[0.20]
                  hover:bg-black/[0.03]
                  hover:text-emerald-600
                "
              >
                Source Code
              </a>
            )}
          </div>
        ) : null}
      </div>
    </Card>
  )
}