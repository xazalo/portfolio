import { cn } from '../../lib/utils'

interface SkillBadgeProps {
  name: string
  active: boolean
  onToggle: (name: string) => void
}

export function SkillBadge({ name, active, onToggle }: SkillBadgeProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={() => onToggle(name)}
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1.5 text-sm font-medium transition-colors',
        active
          ? 'border-accent bg-accent/10 text-accent-strong'
          : 'border-border bg-surface text-foreground hover:border-accent hover:text-accent-strong',
      )}
    >
      {name}
    </button>
  )
}
