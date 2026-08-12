import { SectionHeading } from '../ui/SectionHeading.tsx'
import { Reveal } from '../ui/Reveal.tsx'
import { SkillMatrix } from './SkillMatrix.tsx'

interface SkillsSectionProps {
  activeSkill: string | null
  onSkillChange: (skill: string) => void
}

export function SkillsSection({ activeSkill, onSkillChange }: SkillsSectionProps) {
return (
  <section
    id="skills"
    className="
      container-page
      section-pad
    "
  >
    <SectionHeading
      title="Skills"
      subtitle="Technologies I use to build and ship products."
    />

    <Reveal delay={100}>
      <div
        className="
          relative
          mt-10
          overflow-hidden
          rounded-[2rem]

          border
          border-black/[0.06]

          bg-[#f7f9f8]

          px-5
          py-6

          sm:px-7
          sm:py-8

          lg:px-9
          lg:py-9

          shadow-[
            inset_0_1px_0_rgba(255,255,255,0.9),
            0_1px_2px_rgba(0,0,0,0.04),
            0_8px_20px_rgba(0,0,0,0.05)
          ]
        "
      >
        {/* Ambient light */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-32
            -top-32
            h-80
            w-80
            rounded-full
            bg-emerald-400/[0.07]
            blur-3xl
          "
        />

        {/* Bottom light */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-40
            left-1/3
            h-72
            w-72
            rounded-full
            bg-emerald-300/[0.035]
            blur-3xl
          "
        />

        {/* Subtle grid */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(rgba(0,0,0,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.5)_1px,transparent_1px)]
            [background-size:32px_32px]
          "
        />

        <div className="relative z-10">
          <SkillMatrix
            activeSkill={activeSkill}
            onSkillChange={onSkillChange}
          />
        </div>
      </div>
    </Reveal>
  </section>
)
}
