import { Reveal } from '../ui/Reveal.tsx'
import { profile } from '../../data/profile.ts'
import { socialLinks } from '../../data/socialLinks.ts'

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Reveal className="container-page">
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="font-display text-sm font-semibold text-foreground">{profile.name}</p>
          {socialLinks.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-5">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-secondary transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </Reveal>
    </footer>
  )
}
