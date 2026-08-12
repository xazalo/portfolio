import { cn } from '../../lib/utils'

interface SkillBadgeProps {
  name: string
  active: boolean
  onToggle: (name: string) => void
}

export function SkillBadge({
  name,
  active,
  onToggle,
}: SkillBadgeProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={() => onToggle(name)}
      className={cn(
        `
          group/skill
          relative
          inline-flex
          items-center
          gap-2

          rounded-xl
          border

          px-3
          py-2

          text-sm
          font-medium

          transition-all
          duration-200
          ease-out

          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-emerald-400/40

          hover:-translate-y-0.5
        `,

        active
          ? `
              border-emerald-400/40
              bg-emerald-400/[0.10]
              text-emerald-600

              shadow-[
                0_2px_5px_rgba(0,0,0,0.06),
                0_6px_14px_rgba(52,211,153,0.14)
              ]

              hover:bg-emerald-400/[0.14]
              hover:shadow-[
                0_3px_7px_rgba(0,0,0,0.07),
                0_8px_18px_rgba(52,211,153,0.18)
              ]
            `
          : `
              border-black/[0.08]
              bg-white
              text-foreground

              shadow-[
                0_2px_4px_rgba(0,0,0,0.05),
                0_5px_10px_rgba(0,0,0,0.05)
              ]

              hover:border-emerald-400/30
              hover:bg-emerald-50/30
              hover:text-emerald-600

              hover:shadow-[
                0_3px_7px_rgba(0,0,0,0.07),
                0_8px_16px_rgba(0,0,0,0.08)
              ]
            `,
      )}
    >
      {/* Status indicator */}
      <span
        aria-hidden="true"
        className={cn(
          `
            h-1.5
            w-1.5
            shrink-0
            rounded-full

            transition-all
            duration-200
          `,
          active
            ? `
                bg-emerald-400
                shadow-[0_0_8px_rgba(52,211,153,0.65)]
              `
            : `
                bg-black/20
                group-hover/skill:bg-emerald-400/70
                group-hover/skill:shadow-[0_0_6px_rgba(52,211,153,0.35)]
              `,
        )}
      />

      <span>{name}</span>
    </button>
  )
}