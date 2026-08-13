import { useId } from 'react'
import { GraduationCap, ChevronDown } from 'lucide-react'
import type { Education } from '../../data/education.ts'
import { TechnologyTag } from '../ui/TechnologyTag.tsx'
import { cn } from '../../lib/utils.ts'

interface EducationItemProps {
  item: Education
  isOpen: boolean
  onToggle: () => void
}

export function EducationItem({
  item,
  isOpen,
  onToggle,
}: EducationItemProps) {
  const panelId = useId()
  const headerId = useId()

  return (
    <li className="relative pl-7 sm:pl-10">
      {/* Timeline line */}
      <span
        aria-hidden="true"
        className="
          absolute bottom-0 left-[3px] top-0
          w-px
          bg-emerald-400/30
        "
      />

      {/* Active timeline line */}
      {isOpen && (
        <span
          aria-hidden="true"
          className="
            absolute left-[3px] top-0
            h-full w-px
            bg-gradient-to-b
            from-emerald-400
            via-emerald-400/70
            to-emerald-400/20
            shadow-[0_0_10px_rgba(52,211,153,0.45)]
          "
        />
      )}

      {/* Timeline point */}
      <span
        aria-hidden="true"
        className={cn(
          `
            absolute left-0 top-6 z-10
            flex h-2.5 w-2.5
            -translate-x-1/2
            items-center justify-center
            rounded-full
            bg-emerald-400
            ring-4 ring-background
            shadow-[0_0_12px_rgba(52,211,153,0.45)]
            transition-all duration-300
          `,
          isOpen &&
            `
              h-3.5 w-3.5
              shadow-[
                0_0_0_4px_rgba(52,211,153,0.12),
                0_0_18px_rgba(52,211,153,0.65)
              ]
            `,
        )}
      />

      {/* Card Wrapper */}
      <div
        className={cn(
          `
            relative
            overflow-hidden
            rounded-2xl
            border border-black/[0.08]
            bg-white
            shadow-[0_5px_18px_rgba(0,0,0,0.08)]
            transition-all duration-300
            hover:border-black/[0.12]
            hover:shadow-[0_10px_28px_rgba(0,0,0,0.11)]
          `,
          isOpen &&
            `
              border-emerald-400/20
              bg-white
              shadow-[
                0_18px_50px_rgba(0,0,0,0.15),
                0_6px_18px_rgba(0,0,0,0.09),
                0_0_30px_rgba(52,211,153,0.08)
              ]
            `,
        )}
      >
        <button
          type="button"
          id={headerId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="
            group
            w-full
            rounded-2xl
            p-4
            text-left
            transition-all duration-200
            hover:bg-black/[0.018]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-accent/40
            sm:p-5
          "
        >
          {/* Header */}
          <span
            className="
              flex flex-col gap-2
              sm:flex-row
              sm:items-start
              sm:justify-between
            "
          >
            <span className="flex items-start gap-3">
              {/* Icon */}
              <span
                aria-hidden="true"
                className="
                  mt-0.5
                  flex h-9 w-9 shrink-0
                  items-center justify-center
                  rounded-xl
                  border border-black/[0.08]
                  bg-white
                  text-muted
                  shadow-[0_4px_12px_rgba(0,0,0,0.10)]
                  transition-all duration-300
                  group-hover:-translate-y-0.5
                  group-hover:border-emerald-400/30
                  group-hover:text-emerald-500
                  group-hover:shadow-[0_6px_16px_rgba(0,0,0,0.12)]
                "
              >
                <GraduationCap className="h-4 w-4" />
              </span>

              <span className="min-w-0">
                <span
                  className="
                    block
                    font-display
                    text-lg font-semibold
                    tracking-tight
                    text-foreground
                    transition-colors duration-300
                    group-hover:text-emerald-500
                  "
                >
                  {item.degree}
                </span>

                <span
                  className="
                    mt-0.5 block
                    font-medium
                    text-accent-strong
                  "
                >
                  {item.institution}
                </span>
              </span>
            </span>

            {/* Date */}
            <span
              className="
                shrink-0
                pl-12
                text-xs font-medium
                uppercase
                tracking-[0.08em]
                text-muted
                sm:pl-0
                sm:pt-1
              "
            >
              {item.startDate ? `${item.startDate} — ` : ''}{item.endDate}
            </span>
          </span>

          {/* Toggle */}
          <span className="mt-4 flex items-center justify-between">
            <span
              className="
                text-xs
                text-muted/70
                transition-colors
                group-hover:text-muted
              "
            >
              {isOpen ? 'Hide details' : 'View details'}
            </span>

            <span
              className="
                flex h-8 w-8
                items-center justify-center
                rounded-full
                border border-black/[0.08]
                bg-white
                text-muted
                shadow-[0_4px_12px_rgba(0,0,0,0.10)]
                transition-all duration-300
                group-hover:-translate-y-0.5
                group-hover:border-emerald-400/30
                group-hover:bg-emerald-400/[0.06]
                group-hover:text-emerald-500
                group-hover:shadow-[0_6px_16px_rgba(0,0,0,0.12)]
              "
            >
              <ChevronDown
                className={cn(
                  'h-4 w-4 transition-transform duration-300',
                  isOpen && 'rotate-180 text-emerald-500',
                )}
              />
            </span>
          </span>
        </button>

        {/* Accordion Content */}
        <div
          id={panelId}
          role="region"
          aria-labelledby={headerId}
          className={cn(
            'grid transition-[grid-template-rows,opacity] duration-300 ease-out',
            isOpen
              ? 'grid-rows-[1fr] opacity-100'
              : 'grid-rows-[0fr] opacity-0',
          )}
        >
          <div className="min-h-0 overflow-hidden">
            <div
              className="
                border-t border-black/[0.06]
                bg-black/[0.008]
                px-4 pb-5 pt-5
                sm:px-5
              "
            >
              <p
                className="
                  max-w-2xl
                  text-sm leading-6
                  text-secondary
                "
              >
                {item.description}
              </p>

              {/* Highlights */}
              {item.highlights && item.highlights.length > 0 && (
                <ul
                  className="
                    mt-4
                    space-y-2
                    text-sm leading-6
                    text-secondary
                  "
                >
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3"
                    >
                      <span
                        aria-hidden="true"
                        className="
                          mt-[0.6rem]
                          h-1.5 w-1.5
                          shrink-0
                          rounded-full
                          bg-emerald-400
                          shadow-[0_0_8px_rgba(52,211,153,0.45)]
                        "
                      />

                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Technologies / Skills learned */}
              {item.technologies && item.technologies.length > 0 && (
                <div className="mt-5">
                  <p
                    className="
                      mb-2.5
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.18em]
                      text-muted/70
                    "
                  >
                    Skills & Technologies
                  </p>

                  <ul
                    className="flex flex-wrap gap-1.5"
                    aria-label="Technologies and skills"
                  >
                    {item.technologies.map((tech:any) => (
                      <li key={tech}>
                        <TechnologyTag name={tech} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}