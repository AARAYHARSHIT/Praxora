import Image from "next/image"
import { Reveal } from "./reveal"
import { Parallax } from "./parallax"

const stats = [
  { value: "99.99%", label: "Uptime across the mesh" },
  { value: "40+", label: "Autonomous subsystems" },
  { value: "180ms", label: "Global edge round-trip" },
  { value: "∞", label: "Composable workflows" },
]

export function Systems() {
  return (
    <section id="systems" className="relative">
      {/* Cinematic chrome band */}
      <div className="relative isolate overflow-hidden">
        <Parallax speed={-0.12} className="absolute inset-0 -z-10">
          <Image
            src="/praxora-chrome-ribbon.png"
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            className="scale-125 object-cover opacity-60"
          />
        </Parallax>
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/40 to-background"
        />

        <div className="mx-auto max-w-4xl px-6 py-40 text-center">
          <Reveal>
            <h2 className="text-balance text-4xl font-light leading-tight tracking-tight sm:text-6xl">
              <span className="text-chrome">One system.</span>{" "}
              <span className="font-serif italic text-accent">
                Infinite motion.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Praxora orchestrates every layer — sensing, reasoning, and acting
              — as one continuous, weightless flow.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto max-w-6xl px-6 pb-28">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="bg-background">
              <div className="flex h-full flex-col items-center justify-center gap-2 p-8 text-center">
                <span className="text-4xl font-light tracking-tight text-chrome">
                  {s.value}
                </span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
