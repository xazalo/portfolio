import { SkillBadge } from './SkillBadge.tsx'
import { skillGroups } from '../../data/skills.ts'

interface SkillMatrixProps {
  activeSkill: string | null
  onSkillChange: (skill: string) => void
}

export function SkillMatrix({ activeSkill, onSkillChange }: SkillMatrixProps) {
  return (
    <div className="grid gap-10 md:grid-cols-3">
      {skillGroups.map((group) => (
        <div key={group.category}>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-muted">
            {group.label}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
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
