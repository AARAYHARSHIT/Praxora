import { Reveal } from "./reveal"

const partners = [
  "AXION",
  "NOVASYS",
  "HELIX",
  "ORBIT LABS",
  "VANTA",
  "LUMENOS",
  "STRATA",
]

export function LogoMarquee() {
  return (
    <section className="relative border-y border-border py-10">
      <Reveal className="mb-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Trusted by teams building the next frontier
        </p>
      </Reveal>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-[orbit-spin_none] gap-14 [animation:marquee_30s_linear_infinite]">
          {[...partners, ...partners].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-lg font-medium tracking-tight text-muted-foreground/70"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
