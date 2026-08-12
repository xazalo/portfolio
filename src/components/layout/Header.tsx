import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { cn } from '../../lib/utils'
import { profile } from '../../data/profile.ts'
import { NAV_LINKS } from './navLinks.ts'
import { MobileMenu } from './MobileMenu.tsx'

export function Header() {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 8)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300',
        scrolled
          ? 'border-border bg-background/80 backdrop-blur-sm'
          : 'border-transparent bg-transparent',
      )}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a
          href="#about"
          className="font-display text-lg font-semibold text-foreground"
        >
          {profile.name}
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-secondary transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="rounded-md p-2 text-foreground md:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}
