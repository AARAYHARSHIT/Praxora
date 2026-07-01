"use client"

import { useEffect, useRef } from "react"

/**
 * A cursor-following radial glow rendered on a fixed full-viewport layer.
 * Uses rAF + direct style writes to avoid re-renders for smoothness.
 */
export function MouseSpotlight() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return

    let raf = 0
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const current = { ...target }

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX
      target.y = e.clientY
    }

    const tick = () => {
      current.x += (target.x - current.x) * 0.12
      current.y += (target.y - current.y) * 0.12
      if (ref.current) {
        ref.current.style.background = `radial-gradient(600px circle at ${current.x}px ${current.y}px, oklch(0.85 0.13 200 / 0.10), transparent 70%)`
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener("mousemove", onMove)
    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 hidden md:block"
    />
  )
}
