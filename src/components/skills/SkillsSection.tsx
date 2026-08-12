import { SectionHeading } from '../ui/SectionHeading.tsx'
import { Reveal } from '../ui/Reveal.tsx'
import { SkillMatrix } from './SkillMatrix.tsx'

interface SkillsSectionProps {
  activeSkill: string | null
  onSkillChange: (skill: string) => void
}

export function SkillsSection({ activeSkill, onSkillChange }: SkillsSectionProps) {
  return (
    <section id="skills" className="container-page section-pad">
      <SectionHeading
        title="Skills"
        subtitle="Technologies I use to build and ship products."
      />
      <Reveal delay={100}>
        <SkillMatrix activeSkill={activeSkill} onSkillChange={onSkillChange} />
      </Reveal>
    </section>
  )
}
