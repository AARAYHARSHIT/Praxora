"use client"

import type React from "react"
import { useRef, useCallback } from "react"
import { cn } from "@/lib/utils"

type Variant = "primary" | "ghost"

interface MagneticButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  strength?: number
}

/**
 * A button that magnetically eases toward the cursor on hover, then springs back.
 */
export function MagneticButton({
  children,
  className,
  variant = "primary",
  strength = 0.4,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const el = ref.current
      if (!el) return
      if (window.matchMedia("(pointer: coarse)").matches) return
      const rect = el.getBoundingClientRect()
      const x = e.clientX - (rect.left + rect.width / 2)
      const y = e.clientY - (rect.top + rect.height / 2)
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
    },
    [strength],
  )

  const handleLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)"
  }, [])

  return (
    <button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-tight transition-[transform,box-shadow,background-color] duration-300 ease-out will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variant === "primary" &&
          "bg-primary text-primary-foreground hover:glow-cyan",
        variant === "ghost" &&
          "glass text-foreground hover:border-accent/50 hover:text-accent",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
