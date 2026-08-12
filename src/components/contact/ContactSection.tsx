import { useState } from 'react'
import { Button } from '../ui/Button.tsx'
import { SectionHeading } from '../ui/SectionHeading.tsx'
import { Reveal } from '../ui/Reveal.tsx'
import { Toast } from '../ui/Toast.tsx'
import type { ToastTone } from '../ui/Toast.tsx'
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard.ts'
import { profile } from '../../data/profile.ts'
import { socialLinks } from '../../data/socialLinks.ts'

export function ContactSection() {
  const { copy } = useCopyToClipboard()
  const [toast, setToast] = useState<{ message: string; tone: ToastTone } | null>(null)

  const handleCopyEmail = async () => {
    const ok = await copy(profile.email)
    if (ok) setToast({ message: 'Copied to clipboard!', tone: 'success' })
    else setToast({ message: 'Could not copy to clipboard', tone: 'error' })
  }

  return (
    <section id="contact" className="container-page section-pad">
      <SectionHeading
        title="Let&apos;s build something useful."
        subtitle="Have a project, opportunity, or idea? Let&apos;s talk."
      />
      <Reveal delay={100}>
        <div className="flex flex-col items-start gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="text-xl font-medium text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent-strong"
          >
            {profile.email}
          </a>
          <div className="flex flex-wrap items-center gap-5">
            <Button onClick={handleCopyEmail} variant="ghost">
              Copy Email
            </Button>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
            >
              Download CV
            </a>
            {socialLinks.length > 0
              ? socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-secondary transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))
              : null}
          </div>
        </div>
      </Reveal>
      <Toast
        message={toast?.message ?? null}
        tone={toast?.tone ?? 'success'}
        onDismiss={() => setToast(null)}
      />
    </section>
  )
}
