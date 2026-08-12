import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { cn } from '../../lib/utils'
import { profile } from '../../data/profile.ts'
import { NAV_LINKS } from './navLinks.ts'
import { MobileMenu } from './MobileMenu.tsx'

export function Header() {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 16)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16)
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'pt-3' : 'pt-0',
      )}
    >
      <div
        className={cn(
          'container-page mx-auto transition-all duration-300',
          scrolled ? 'px-3 sm:px-6' : '',
        )}
      >
        <div
          className={cn(
            'flex h-16 items-center justify-between',
            'border-b border-transparent',
            'transition-all duration-300',
            scrolled
              ? 'rounded-2xl border-border/60 bg-background/75 px-4 shadow-lg shadow-black/[0.03] backdrop-blur-xl sm:px-5'
              : '',
          )}
        >
          {/* Logo */}
          <a
            href="#about"
            className="
              group flex items-center gap-2
              font-display text-lg font-semibold
              tracking-tight text-foreground
            "
          >
            <span
              aria-hidden="true"
              className="
                h-2 w-2 rounded-full bg-accent
                transition-all duration-300
                group-hover:scale-125
                group-hover:shadow-[0_0_10px_rgba(255,255,255,0.3)]
              "
            />

            <span
              className="
                transition-colors duration-300
                group-hover:text-accent
              "
            >
              {profile.name}
            </span>
          </a>

          {/* Desktop navigation */}
          <nav
            className="
              hidden items-center gap-1
              md:flex
            "
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  group relative
                  rounded-full
                  px-4 py-2
                  text-sm font-medium
                  text-secondary
                  transition-all duration-300
                  hover:bg-foreground/[0.04]
                  hover:text-foreground
                "
              >
                <span className="relative z-10">
                  {link.label}
                </span>

                {/* Accent underline */}
                <span
                  aria-hidden="true"
                  className="
                    absolute bottom-1 left-1/2
                    h-0.5 w-0
                    -translate-x-1/2
                    rounded-full
                    bg-accent
                    opacity-0
                    transition-all duration-300
                    group-hover:w-5
                    group-hover:opacity-100
                  "
                />
              </a>
            ))}
          </nav>

          {/* Mobile menu */}
          <button
            type="button"
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-xl
              border border-transparent
              text-foreground
              transition-all duration-200
              hover:border-border
              hover:bg-foreground/[0.04]
              active:scale-95
              md:hidden
            "
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="h-5 w-5 transition-transform duration-300" />
          </button>
        </div>
      </div>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </header>
  )
}