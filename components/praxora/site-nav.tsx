"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { MagneticButton } from "./magnetic-button"
import { cn } from "@/lib/utils"

const links = [
  { label: "Platform", href: "#platform" },
  { label: "Intelligence", href: "#intelligence" },
  { label: "Systems", href: "#systems" },
  { label: "Access", href: "#access" },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={cn(
          "flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500",
          scrolled ? "glass" : "border border-transparent",
        )}
        aria-label="Primary"
      >
        <a href="#top" className="flex items-center gap-2.5">
          <span className="relative flex size-7 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-chrome" />
            <span className="absolute inset-[3px] rounded-full bg-background" />
            <span className="absolute size-1.5 rounded-full bg-accent glow-cyan" />
          </span>
          <span className="text-base font-semibold tracking-tight text-chrome">
            Praxora
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <MagneticButton className="px-5 py-2 text-sm" strength={0.5}>
            Request Access
          </MagneticButton>
        </div>

        <button
          className="text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="glass absolute inset-x-4 top-20 rounded-3xl p-4 md:hidden">
          <div className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#access"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground"
            >
              Request Access
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
