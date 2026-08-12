import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { cn } from '../../lib/utils'
import { profile } from '../../data/profile.ts'
import { NAV_LINKS } from './navLinks.ts'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement | null>(null)
  const onCloseRef = useRef(onClose)
  useEffect(() => {
    onCloseRef.current = onClose
  }, [onClose])

  useEffect(() => {
    if (!open) return
    const previouslyFocused = document.activeElement as HTMLElement | null
    panelRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onCloseRef.current()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      previouslyFocused?.focus()
    }
  }, [open])

  return (
    <div
      id="mobile-menu"
      className={cn(
        'fixed inset-0 z-50 transition-opacity duration-300 md:hidden',
        open ? 'opacity-100' : 'pointer-events-none opacity-0',
      )}
      inert={!open}
      aria-hidden={!open}
    >
      <div
        className={cn(
          'absolute inset-0 bg-foreground/40 transition-opacity duration-300',
          open ? 'opacity-100' : 'opacity-0',
        )}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        tabIndex={-1}
        className={cn(
          'absolute inset-y-0 right-0 flex w-72 max-w-[85%] flex-col gap-8 bg-background p-6 shadow-xl transition-transform duration-300',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex items-center justify-between">
          <span className="font-display text-lg font-semibold text-foreground">{profile.name}</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-md p-1.5 text-muted transition-colors hover:bg-surface hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col gap-4" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="text-lg font-medium text-foreground transition-colors hover:text-accent-strong"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
