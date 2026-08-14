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
        sm:px-8
        lg:px-12 lg:pt-20
      "
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="
            absolute left-[58%] top-[15%]
            h-[280px] w-[280px] -translate-x-1/2
            rounded-full bg-accent/10 blur-[110px]
            sm:h-[440px] sm:w-[440px]
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
          items-center
          lg:grid-cols-[1.15fr_0.85fr]
          lg:gap-12
        "
      >
        {/* Content */}
        <div className="text-center lg:text-left">
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
                mt-6
                text-sm font-medium uppercase
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
                mt-4 max-w-3xl
                font-display
                text-[clamp(3rem,6vw,5.5rem)]
                font-semibold
                leading-[0.92]
                tracking-[-0.045em]
                text-foreground
              "
            >
              Hi, I&apos;m{" "}
              <span
                className="
                  bg-gradient-to-r
                  from-accent
                  via-foreground
                  to-muted
                  bg-clip-text
                  text-transparent
                "
              >
                {profile.name}.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={250}>
            <p
              className="
                mx-auto mt-7 max-w-xl
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
                mt-8
                flex flex-col items-center gap-3
                sm:flex-row sm:justify-center
                lg:justify-start
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

        {/* Decorative typography */}
        <div
          aria-hidden="true"
          className="
            relative hidden
            h-[360px]
            items-center justify-center
            lg:flex
          "
        >
          <div
            className="
              absolute
              h-[280px] w-[280px]
              rounded-full
              border border-foreground/[0.06]
            "
          />

          <div
            className="
              absolute
              h-[210px] w-[210px]
              rounded-full
              border border-accent/[0.10]
            "
          />

          <div
            className="
              absolute
              h-[120px] w-[120px]
              rounded-full
              bg-accent/[0.04]
              blur-2xl
            "
          />

          <p
            className="
              relative
              max-w-[280px]
              text-center
              text-[11px]
              font-medium
              uppercase
              leading-[2.2]
              tracking-[0.45em]
              text-muted/40
            "
          >
            Design
            <br />
            Development
            <br />
            Digital
            <br />
            Experience
          </p>
        </div>
      </div>
    </section>
  );
}