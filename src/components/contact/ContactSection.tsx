import { ArrowUpRight, Download, Mail } from 'lucide-react'
import { Reveal } from '../ui/Reveal.tsx'
import { profile } from '../../data/profile.ts'
import { socialLinks } from '../../data/socialLinks.ts'

export function ContactSection() {
  return (
    <section
      id="contact"
      className="
        relative
        mt-16
        overflow-hidden

        border-y
        border-black/[0.10]

        bg-[#17201d]

        py-20
        sm:py-24
        lg:py-28

        shadow-[
          0_12px_35px_rgba(0,0,0,0.08)_inset,
          0_-12px_35px_rgba(0,0,0,0.05)_inset
        ]
      "
    >
      {/* Main ambient glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40

          h-[32rem]
          w-[32rem]

          rounded-full

          bg-emerald-400/[0.08]

          blur-3xl
        "
      />

      {/* Secondary glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-48
          left-1/4

          h-96
          w-96

          rounded-full

          bg-emerald-300/[0.05]

          blur-3xl
        "
      />

      {/* Grid texture */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0

          opacity-[0.025]

          [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
          [background-size:40px_40px]
        "
      />

      {/* Top highlight */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px

          bg-gradient-to-r
          from-transparent
          via-emerald-400/40
          to-transparent
        "
      />

      <Reveal
        delay={100}
        className="container-page relative z-10"
      >
        <div
          className="
            grid
            gap-12

            lg:grid-cols-[1fr_auto]
            lg:items-end
          "
        >
          {/* Main content */}
          <div className="max-w-3xl">
            <div
              className="
                mb-5
                flex
                items-center
                gap-2

                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                text-emerald-300
              "
            >
              <span
                aria-hidden="true"
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-emerald-400

                  shadow-[0_0_12px_rgba(52,211,153,0.7)]
                "
              />

              Open to full-time roles
            </div>

            <h2
              className="
                font-display
                text-4xl
                font-semibold
                tracking-[-0.03em]
                text-white

                sm:text-5xl
                lg:text-6xl
              "
            >
              Looking for my next
              <span className="text-emerald-400">
                {' '}
                engineering role.
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-2xl

                text-base
                leading-7
                text-white/55

                sm:text-lg
                sm:leading-8
              "
            >
              I&apos;m actively seeking opportunities to join an innovative tech team.
              Whether you have an open position, a referral, or just want to review my code,
              I&apos;d love to connect.
            </p>
          </div>

          {/* Actions */}
          <div
            className="
              flex
              flex-col
              gap-3

              sm:flex-row

              lg:flex-col
            "
          >
            <a
              href={`mailto:${profile.email}`}
              className="
                group/contact

                inline-flex
                items-center
                justify-center
                gap-2

                rounded-xl

                border
                border-emerald-400/30

                bg-emerald-400
                px-6
                py-3.5

                text-sm
                font-semibold
                text-[#102019]

                shadow-[
                  0_2px_5px_rgba(0,0,0,0.20),
                  0_8px_20px_rgba(52,211,153,0.20)
                ]

                transition-all
                duration-200

                hover:-translate-y-1
                hover:bg-emerald-300

                hover:shadow-[
                  0_4px_8px_rgba(0,0,0,0.25),
                  0_12px_28px_rgba(52,211,153,0.30)
                ]
              "
            >
              <Mail className="h-4 w-4" />

              Contact me

              <ArrowUpRight
                className="
                  h-4
                  w-4

                  transition-transform
                  duration-200

                  group-hover/contact:-translate-y-0.5
                  group-hover/contact:translate-x-0.5
                "
              />
            </a>

            <a
              href={profile.resumeUrl}
              download
              className="
                inline-flex
                items-center
                justify-center
                gap-2

                rounded-xl

                border
                border-white/[0.14]

                bg-white/[0.06]

                px-6
                py-3.5

                text-sm
                font-semibold
                text-white

                shadow-[0_4px_12px_rgba(0,0,0,0.15)]

                backdrop-blur-sm

                transition-all
                duration-200

                hover:-translate-y-1
                hover:border-white/[0.22]
                hover:bg-white/[0.10]
              "
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </div>

        {/* Social links */}
        {socialLinks.length > 0 ? (
          <div
            className="
              mt-16
              flex
              flex-wrap
              items-center
              gap-x-6
              gap-y-3

              border-t
              border-white/[0.10]

              pt-6
            "
          >
            <span
              className="
                mr-2

                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-white/30
              "
            >
              Connect with me
            </span>

            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="
                  group/social

                  inline-flex
                  items-center
                  gap-1.5

                  text-sm
                  font-medium
                  text-white/55

                  transition-colors
                  duration-200

                  hover:text-emerald-300
                "
              >
                {link.label}

                <ArrowUpRight
                  className="
                    h-3.5
                    w-3.5

                    transition-transform
                    duration-200

                    group-hover/social:-translate-y-0.5
                    group-hover/social:translate-x-0.5
                  "
                />
              </a>
            ))}
          </div>
        ) : null}
      </Reveal>
    </section>
  )
}