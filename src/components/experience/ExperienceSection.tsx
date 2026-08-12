import { useState } from 'react'
import { SectionHeading } from '../ui/SectionHeading.tsx'
import { Reveal } from '../ui/Reveal.tsx'
import { ExperienceTimeline } from './ExperienceTimeline.tsx'
import { ExperienceItem } from './ExperienceItem.tsx'
import { experience } from '../../data/experience.ts'

export function ExperienceSection() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section id="experience" className="container-page section-pad">
      <SectionHeading
        title="Experience"
        subtitle="A timeline of where I&apos;ve worked and what I&apos;ve built."
      />
      <Reveal delay={100}>
        <ExperienceTimeline>
          {experience.map((item) => (
            <ExperienceItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId((current) => (current === item.id ? null : item.id))}
            />
          ))}
        </ExperienceTimeline>
      </Reveal>
    </section>
  )
}
