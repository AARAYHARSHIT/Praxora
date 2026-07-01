const groups = [
  {
    heading: "Platform",
    links: ["Overview", "Intelligence Core", "Spatial OS", "Security"],
  },
  {
    heading: "Company",
    links: ["About", "Research", "Careers", "Press"],
  },
  {
    heading: "Resources",
    links: ["Documentation", "Changelog", "System Status", "Contact"],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="relative flex size-7 items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-chrome" />
              <span className="absolute inset-[3px] rounded-full bg-background" />
              <span className="absolute size-1.5 rounded-full bg-accent glow-cyan" />
            </span>
            <span className="text-base font-semibold tracking-tight text-chrome">
              Praxora
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Advanced intelligence, engineered to feel weightless. Built for the
            next era of computing.
          </p>
        </div>

        {groups.map((g) => (
          <nav key={g.heading} aria-label={g.heading}>
            <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {g.heading}
            </h3>
            <ul className="space-y-3">
              {g.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm text-foreground/80 transition-colors hover:text-accent"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Praxora Systems. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="transition-colors hover:text-foreground">
            Privacy
          </a>
          <a href="#" className="transition-colors hover:text-foreground">
            Terms
          </a>
          <a href="#" className="transition-colors hover:text-foreground">
            Security
          </a>
        </div>
      </div>
    </footer>
  )
}
