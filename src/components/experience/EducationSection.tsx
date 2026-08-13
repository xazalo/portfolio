import { useState } from 'react'
import { SectionHeading } from '../ui/SectionHeading.tsx'
import { Reveal } from '../ui/Reveal.tsx'
import { EducationTimeline } from './EducationTimeline.tsx'
import { EducationItem } from './EducationItem.tsx'
import { education } from '../../data/education.ts'

export function EducationSection() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section id="education" className="container-page section-pad">
      <SectionHeading
        title="Education"
        subtitle="Certifications, academic background, and self-directed learning."
      />
      <Reveal delay={100}>
        <EducationTimeline>
          {education.map((item) => (
            <EducationItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() =>
                setOpenId((current) => (current === item.id ? null : item.id))
              }
            />
          ))}
        </EducationTimeline>
      </Reveal>
    </section>
  )
}