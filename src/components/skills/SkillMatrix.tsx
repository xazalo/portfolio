import { SkillBadge } from './SkillBadge.tsx'
import { skillGroups } from '../../data/skills.ts'

interface SkillMatrixProps {
  activeSkill: string | null
  onSkillChange: (skill: string) => void
}

export function SkillMatrix({
  activeSkill,
  onSkillChange,
}: SkillMatrixProps) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {skillGroups.map((group) => (
        <div
          key={group.category}
          className="
            group
            relative
            overflow-hidden
            rounded-2xl

            border
            border-black/[0.14]

            bg-white

            px-5
            py-5

            shadow-[
              0_1px_0_rgba(255,255,255,0.95)_inset,
              0_-1px_0_rgba(0,0,0,0.04)_inset,
              0_2px_5px_rgba(0,0,0,0.08),
              0_8px_18px_rgba(0,0,0,0.10),
              0_18px_35px_rgba(0,0,0,0.09)
            ]

            transition-all
            duration-300
            ease-out

            hover:-translate-y-1
            hover:border-black/[0.20]

            hover:shadow-[
              0_1px_0_rgba(255,255,255,0.95)_inset,
              0_-1px_0_rgba(0,0,0,0.05)_inset,
              0_3px_7px_rgba(0,0,0,0.10),
              0_10px_22px_rgba(0,0,0,0.13),
              0_24px_45px_rgba(0,0,0,0.12)
            ]
          "
        >
          {/* Subtle accent glow */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-10
              -top-10
              h-24
              w-24
              rounded-full
              bg-emerald-400/[0.06]
              blur-2xl
              transition-all
              duration-500
              group-hover:scale-150
              group-hover:bg-emerald-400/[0.10]
            "
          />

          {/* Header */}
          <div
            className="
              relative
              flex
              items-center
              gap-3
            "
          >
            <span
              aria-hidden="true"
              className="
                h-2
                w-2
                rounded-full
                bg-emerald-400
                shadow-[0_0_10px_rgba(52,211,153,0.45)]
              "
            />

            <h3
              className="
                font-display
                text-sm
                font-semibold
                uppercase
                tracking-[0.14em]
                text-foreground
              "
            >
              {group.label}
            </h3>

            <span
              aria-hidden="true"
              className="
                ml-auto
                h-px
                flex-1
                bg-gradient-to-r
                from-black/[0.10]
                to-transparent
              "
            />
          </div>

          {/* Skills */}
          <ul
            className="
              relative
              mt-5
              flex
              flex-wrap
              gap-2
            "
          >
            {group.skills.map((skill) => (
              <li key={skill}>
                <SkillBadge
                  name={skill}
                  active={activeSkill === skill}
                  onToggle={onSkillChange}
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}