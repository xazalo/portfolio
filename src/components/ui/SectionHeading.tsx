import { Reveal } from './Reveal.tsx'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <Reveal className={className}>
      <header>
        <h2 className="font-display text-section font-semibold leading-tight tracking-tight text-foreground">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{subtitle}</p>
        ) : null}
      </header>
    </Reveal>
  )
}
