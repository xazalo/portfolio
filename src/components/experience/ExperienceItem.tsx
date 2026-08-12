import { useId } from 'react'
import { ChevronDown } from 'lucide-react'
import type { Experience } from '../../data/experience.ts'
import { TechnologyTag } from '../ui/TechnologyTag.tsx'
import { cn } from '../../lib/utils'

interface ExperienceItemProps {
  item: Experience
  isOpen: boolean
  onToggle: () => void
}

export function ExperienceItem({ item, isOpen, onToggle }: ExperienceItemProps) {
  const panelId = useId()
  const headerId = useId()

  return (
    <li className="relative">
      <span
        className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent"
        aria-hidden="true"
      />
      <button
        type="button"
        id={headerId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="w-full rounded-lg p-2 text-left transition-colors hover:bg-surface"
      >
        <span className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <span className="font-display text-lg font-semibold text-foreground">{item.role}</span>
          <span className="text-sm text-muted">
            {item.startDate} — {item.endDate ?? 'Present'}
          </span>
        </span>
        <span className="mt-0.5 flex items-center justify-between gap-4">
          <span className="font-medium text-accent-strong">{item.company}</span>
          <ChevronDown
            className={cn(
              'h-4 w-4 shrink-0 text-muted transition-transform duration-200',
              isOpen && 'rotate-180',
            )}
          />
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={headerId}
        className={cn(
          'grid transition-[grid-template-rows,opacity] duration-300 ease-out',
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="px-2 pb-2 pt-3">
            <p className="text-sm leading-relaxed text-secondary">{item.description}</p>
            {item.responsibilities.length > 0 ? (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-secondary">
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            ) : null}
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
              {item.technologies.map((tech) => (
                <li key={tech}>
                  <TechnologyTag name={tech} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </li>
  )
}
