import { Badge } from '../ui/Badge.tsx'
import { Button } from '../ui/Button.tsx'
import { Reveal } from '../ui/Reveal.tsx'
import { profile } from '../../data/profile.ts'

export function Hero() {
  return (
    <section
      id="about"
      className="container-page flex min-h-[100svh] flex-col items-center justify-center pt-16 text-center"
    >
      <Reveal delay={0}>
        <Badge variant="accent">
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          {profile.availability ? 'Available for opportunities' : 'Not currently available'}
        </Badge>
      </Reveal>
      <Reveal delay={100} className="w-full">
        <h1 className="mt-6 font-display text-hero font-semibold leading-[1.05] tracking-tight text-foreground">
          Hi, I&apos;m {profile.name}.
        </h1>
      </Reveal>
      <Reveal delay={200} className="w-full">
        <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-muted">{profile.bio}</p>
      </Reveal>
      <Reveal delay={300}>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button href="#projects" size="lg">
            View my work
          </Button>
          <Button href="#contact" variant="ghost" size="lg">
            Get in touch
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
