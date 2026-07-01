"use client"

import { ArrowUpRight } from "lucide-react"
import { MagneticButton } from "./magnetic-button"
import { Reveal } from "./reveal"

export function CTA() {
  return (
    <section id="access" className="relative px-6 pb-32">
      <Reveal className="mx-auto max-w-5xl">
        <div className="glass relative overflow-hidden rounded-[2.5rem] px-8 py-20 text-center sm:px-16">
          {/* Ambient glow + orbit */}
          <div
            aria-hidden="true"
            className="animate-pulse-glow pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[50vh] w-[50vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[100px]"
          />
          <div
            aria-hidden="true"
            className="animate-orbit absolute left-1/2 top-1/2 -z-10 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border"
          />

          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-accent">
            Early Access
          </p>
          <h2 className="mx-auto max-w-2xl text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
            <span className="text-chrome">Step into a lighter</span>{" "}
            <span className="font-serif italic text-accent">
              kind of intelligence.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-pretty leading-relaxed text-muted-foreground">
            Join the first wave shaping Praxora. Access is limited and
            invitation-based — reserve your place today.
          </p>

          <form
            className="mx-auto mt-10 flex max-w-md flex-col items-center gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="you@company.com"
              aria-label="Email address"
              className="w-full flex-1 rounded-full border border-border bg-background/60 px-6 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent/60"
            />
            <MagneticButton type="submit" className="w-full px-7 py-3.5 sm:w-auto">
              Request Access
              <ArrowUpRight className="size-4" />
            </MagneticButton>
          </form>
        </div>
      </Reveal>
    </section>
  )
}
