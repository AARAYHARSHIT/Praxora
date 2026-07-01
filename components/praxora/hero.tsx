"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { MagneticButton } from "./magnetic-button"
import { Parallax } from "./parallax"

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-20"
    >
      {/* Deep-space ambient glow */}
      <div
        aria-hidden="true"
        className="animate-pulse-glow pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]"
      />

      {/* Orbital rings + chrome orb */}
      <Parallax speed={0.08} className="relative mb-10">
        <div className="relative flex items-center justify-center">
          {/* Orbits */}
          <div
            aria-hidden="true"
            className="animate-orbit absolute size-[420px] rounded-full border border-border sm:size-[540px]"
          >
            <span className="absolute left-1/2 top-0 size-2 -translate-x-1/2 rounded-full bg-accent glow-cyan" />
          </div>
          <div
            aria-hidden="true"
            className="animate-orbit-rev absolute size-[300px] rounded-full border border-border sm:size-[380px]"
          >
            <span className="absolute bottom-0 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-primary" />
          </div>

          {/* Chrome orb */}
          <div className="animate-float-slow relative size-56 sm:size-72">
            <Image
              src="/praxora-chrome-orb.png"
              alt="Praxora chrome intelligence core"
              fill
              priority
              sizes="(max-width: 640px) 224px, 288px"
              style={{
                maskImage:
                  "radial-gradient(circle closest-side, #000 44%, transparent 74%)",
                WebkitMaskImage:
                  "radial-gradient(circle closest-side, #000 44%, transparent 74%)",
              }}
              className="object-contain drop-shadow-[0_20px_60px_oklch(0.85_0.13_200/0.25)]"
            />
          </div>

          {/* Floating geometric elements */}
          <div className="animate-float-med absolute -right-6 top-8 size-4 rotate-45 border border-accent/60 sm:-right-10" />
          <div className="animate-float-slow absolute -left-4 bottom-10 size-2.5 rounded-full bg-accent/70 sm:-left-8" />
        </div>
      </Parallax>

      {/* Copy */}
      <div className="relative z-10 max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs tracking-wide text-muted-foreground">
          <span className="size-1.5 rounded-full bg-accent glow-cyan" />
          Introducing Praxora OS · Spatial Intelligence
        </div>

        <h1 className="text-balance text-5xl font-light leading-[0.98] tracking-tight sm:text-6xl md:text-7xl">
          <span className="text-chrome">Intelligence,</span>{" "}
          <span className="font-serif italic text-accent">weightless.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Praxora is a concept platform exploring the future of spatial intelligence,
adaptive AI, and human-centered computing. Every interaction is designed
to anticipate intent, adapt to context, and feel invisible within the
experience.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <MagneticButton className="px-8 py-3.5">
            Request Access
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </MagneticButton>
          <MagneticButton variant="ghost" className="px-8 py-3.5">
            Explore the Platform
          </MagneticButton>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1.5">
          <span className="animate-float-med h-1.5 w-0.5 rounded-full bg-accent" />
        </div>
      </div>
    </section>
  )
}
