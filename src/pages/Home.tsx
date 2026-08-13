import { useState } from 'react'
import type { Project } from '../data/projects.ts'
import { Header } from '../components/layout/Header.tsx'
import { Footer } from '../components/layout/Footer.tsx'
import { Hero } from '../components/hero/Hero.tsx'
import { ProjectsSection } from '../components/projects/ProjectsSection.tsx'
import { ProjectModal } from '../components/projects/ProjectModal.tsx'
import { EducationSection } from '../components/experience/EducationSection.tsx'
import { SkillsSection } from '../components/skills/SkillsSection.tsx'
import { ContactSection } from '../components/contact/ContactSection.tsx'

function Home() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const handleSkillToggle = (skill: string) => {
    setActiveSkill((current) => (current === skill ? null : skill))
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProjectsSection activeSkill={activeSkill} onSelect={setSelectedProject} />
        <EducationSection />
        <SkillsSection activeSkill={activeSkill} onSkillChange={handleSkillToggle} />
        <ContactSection />
      </main>
      <Footer />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  )
}

export default Home
