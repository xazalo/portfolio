import { Badge } from "../ui/Badge.tsx";
import { Button } from "../ui/Button.tsx";
import { Reveal } from "../ui/Reveal.tsx";
import { profile } from "../../data/profile.ts";

export function Hero() {
  return (
    <section
      id="about"
      className="
        relative isolate flex min-h-[100svh] w-full items-center
        overflow-hidden px-5 pb-16 pt-24
        sm:px-8 lg:px-12 lg:pt-20
      "
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="
            absolute left-[60%] top-[20%]
            h-[280px] w-[280px] -translate-x-1/2
            rounded-full bg-accent/10 blur-[110px]
            sm:h-[420px] sm:w-[420px]
          "
        />

        <div
          className="
            absolute -bottom-40 -left-40
            h-[400px] w-[400px]
            rounded-full bg-accent/5 blur-[120px]
          "
        />

        <div
          className="
            absolute inset-0 opacity-[0.018]
            [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        />
      </div>

      <div
        className="
          container-page mx-auto grid w-full
          items-center gap-14
          lg:grid-cols-[1.1fr_0.9fr] lg:gap-20
        "
      >
        {/* Content */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <Reveal delay={0}>
            <Badge
              variant="accent"
              className="
                border border-accent/20
                bg-accent/5
                px-3 py-1.5
                text-xs backdrop-blur-sm
                sm:text-sm
              "
            >
              <span
                className="
                  relative mr-2 inline-flex h-2 w-2
                  items-center justify-center
                "
                aria-hidden="true"
              >
                <span
                  className="
                    absolute h-2 w-2 animate-ping
                    rounded-full bg-accent/40
                  "
                />

                <span
                  className="
                    relative h-1.5 w-1.5
                    rounded-full bg-accent
                  "
                />
              </span>

              {profile.availability
                ? "Available for opportunities"
                : "Not currently available"}
            </Badge>
          </Reveal>

          <Reveal delay={100}>
            <p
              className="
                mt-6 text-sm font-medium uppercase
                tracking-[0.2em] text-muted
                sm:text-base
              "
            >
              Designer & Developer
            </p>
          </Reveal>

          <Reveal delay={150}>
            <h1
              className="
                mt-4 font-display
                text-[clamp(3rem,7vw,6rem)]
                font-semibold leading-[0.95]
                tracking-[-0.045em]
                text-foreground
              "
            >
              Hi, I&apos;m{" "}
              <span
                className="
                  bg-gradient-to-r from-accent
                  via-foreground to-muted
                  bg-clip-text text-transparent
                "
              >
                {profile.name}.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={250}>
            <p
              className="
                mx-auto mt-6 max-w-xl
                text-base leading-7 text-muted
                sm:text-lg sm:leading-8
                lg:mx-0
              "
            >
              {profile.bio}
            </p>
          </Reveal>

          <Reveal delay={350}>
            <div
              className="
    mt-8 flex w-full flex-col
    items-center gap-3

    sm:w-full sm:flex-row sm:flex-wrap
    sm:justify-center

    lg:w-fit lg:justify-start
  "
            >
              <Button
                href="#projects"
                size="lg"
                className="
                  min-w-[160px]
                  shadow-lg shadow-accent/10
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:shadow-xl hover:shadow-accent/20
                "
              >
                View my work
              </Button>

              <Button
                href="#contact"
                variant="ghost"
                size="lg"
                className="
                  min-w-[160px]
                  transition-all duration-300
                  hover:-translate-y-0.5
                "
              >
                Get in touch
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Avatar */}
        <div className="order-1 flex justify-center lg:order-2">
          <Reveal delay={150}>
            <div className="relative">
              {/* Main card */}
              <div
                className="
                  relative
                  h-64 w-64
                  rotate-2
                  overflow-hidden
                  rounded-[2rem]
                  border border-foreground/10
                  bg-muted/10
                  shadow-2xl
                  transition-transform duration-500
                  hover:rotate-0
                  sm:h-80 sm:w-80
                  lg:h-[380px] lg:w-[380px]
                "
              >
                {/* Background */}
                <div
                  aria-hidden="true"
                  className="
                    absolute inset-0
                    bg-gradient-to-br
                    from-accent/20
                    via-background
                    to-muted/20
                  "
                />

                {/* Decorative light */}
                <div
                  aria-hidden="true"
                  className="
                    absolute -right-16 -top-16
                    h-40 w-40
                    rounded-full
                    bg-accent/20
                    blur-3xl
                  "
                />

                {/* Temporary avatar */}
                <div
                  className="
                    relative flex h-full w-full
                    items-center justify-center
                  "
                >
                  <span
                    role="img"
                    aria-label={`Avatar placeholder for ${profile.name}`}
                    className="
                      select-none
                      text-[8rem]
                      leading-none
                      drop-shadow-2xl
                      transition-transform duration-500
                      hover:scale-110
                      sm:text-[10rem]
                      lg:text-[12rem]
                    "
                  >
                    👨‍💻
                  </span>
                </div>

                {/* Bottom gradient */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute inset-x-0 bottom-0 h-1/3
                    bg-gradient-to-t
                    from-background/30
                    to-transparent
                  "
                />

                {/* Status */}
                <div
                  className="
                    absolute bottom-4 left-4
                    flex items-center gap-2
                    rounded-full
                    border border-white/10
                    bg-background/70
                    px-3 py-1.5
                    text-[11px] font-medium
                    text-muted
                    backdrop-blur-md
                  "
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-accent"
                  />
                  Open to work
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
