"use client"

import type React from "react"
import { useRef, useCallback } from "react"
import { Orbit, Layers, Gauge, Sparkles, ShieldCheck, Waves } from "lucide-react"
import { Reveal } from "./reveal"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Orbit,
    title: "Spatial Reasoning",
    body: "Models that perceive depth, context, and intent — computing that understands the world in three dimensions.",
  },
  {
    icon: Gauge,
    title: "Zero-Latency Core",
    body: "A weightless inference engine tuned for instant response, so intelligence feels like an extension of thought.",
  },
  {
    icon: Layers,
    title: "Adaptive Layers",
    body: "Composable intelligence that reshapes itself around your workflow, surfacing only what matters, when it matters.",
  },
  {
    icon: ShieldCheck,
    title: "Sovereign Privacy",
    body: "On-device by default, encrypted end to end. Your data stays yours — an auditable, secure record for every action.",
  },
  {
    icon: Waves,
    title: "Fluid Interfaces",
    body: "Glass-clear surfaces and effortless motion. Every interaction is designed to feel calm, cinematic, and precise.",
  },
  {
    icon: Sparkles,
    title: "Continuous Evolution",
    body: "A platform that refines itself over time, learning quietly in the background to stay a step ahead.",
  },
]

function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el || window.matchMedia("(pointer: coarse)").matches) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(900px) rotateX(${(-py * 6).toFixed(2)}deg) rotateY(${(px * 6).toFixed(2)}deg) translateY(-4px)`
  }, [])

  const onLeave = useCallback(() => {
    if (ref.current)
      ref.current.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)"
  }, [])

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        "transition-transform duration-300 ease-out will-change-transform",
        className,
      )}
    >
      {children}
    </div>
  )
}

export function Features() {
  return (
    <section id="platform" className="relative mx-auto max-w-6xl px-6 py-28">
      <Reveal className="mx-auto mb-16 max-w-2xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-accent">
          The Platform
        </p>
        <h2 className="text-balance text-4xl font-light tracking-tight sm:text-5xl">
          <span className="text-chrome">Engineered to feel like</span>{" "}
          <span className="font-serif italic text-accent">nothing at all.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Every layer of Praxora is built around a single principle: remove
          friction until only intelligence remains.
        </p>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={(i % 3) * 90}>
            <TiltCard>
              <article className="group glass relative h-full overflow-hidden rounded-3xl p-7 transition-colors duration-500 hover:border-accent/40">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="mb-5 inline-flex size-11 items-center justify-center rounded-2xl bg-secondary text-accent ring-1 ring-border">
                  <f.icon className="size-5" />
                </div>
                <h3 className="mb-2 text-lg font-medium tracking-tight text-foreground">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {f.body}
                </p>
              </article>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
