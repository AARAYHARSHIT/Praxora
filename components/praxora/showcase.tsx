import Image from "next/image"
import { Reveal } from "./reveal"
import { Parallax } from "./parallax"

const specs = [
  { label: "Neural throughput", value: "3.2 PFLOPs" },
  { label: "Response window", value: "< 8 ms" },
  { label: "Spatial channels", value: "128" },
]

export function Showcase() {
  return (
    <section id="intelligence" className="relative overflow-hidden px-6 py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[130px]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-accent">
            The Intelligence
          </p>
          <h2 className="text-balance text-4xl font-light leading-tight tracking-tight sm:text-5xl">
            <span className="text-chrome">A core that thinks</span>{" "}
            <span className="font-serif italic text-accent">in silence.</span>
          </h2>
          <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Praxora&apos;s intelligence core runs beneath the surface — quiet,
            constant, and impossibly fast. It anticipates rather than reacts, so
            the experience always feels one step ahead.
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-4">
            {specs.map((s) => (
              <div
                key={s.label}
                className="glass rounded-2xl p-4 text-center"
              >
                <dt className="mb-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </dt>
                <dd className="text-lg font-medium text-chrome">{s.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={120} className="relative">
          <Parallax speed={0.12}>
            <div className="relative flex items-center justify-center">
              <div
                aria-hidden="true"
                className="animate-orbit absolute size-[360px] rounded-full border border-border sm:size-[440px]"
              />
              <div className="animate-float-slow relative aspect-square w-full max-w-md">
                <Image
                  src="/praxora-device.png"
                  alt="Praxora spatial computing device"
                  fill
                  sizes="(max-width: 1024px) 90vw, 448px"
                  style={{
                    maskImage:
                      "radial-gradient(ellipse 82% 66% at 50% 50%, #000 55%, transparent 100%)",
                    WebkitMaskImage:
                      "radial-gradient(ellipse 82% 66% at 50% 50%, #000 55%, transparent 100%)",
                  }}
                  className="object-contain drop-shadow-[0_30px_80px_oklch(0.85_0.13_200/0.2)]"
                />
              </div>
              <div className="glass animate-float-med absolute right-2 top-6 rounded-2xl px-4 py-3">
                <p className="text-[11px] text-muted-foreground">Status</p>
                <p className="text-sm font-medium text-accent">Synchronized</p>
              </div>
            </div>
          </Parallax>
        </Reveal>
      </div>
    </section>
  )
}
