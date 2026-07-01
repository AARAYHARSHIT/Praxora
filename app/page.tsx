import { MouseSpotlight } from "@/components/praxora/mouse-spotlight"
import { SiteNav } from "@/components/praxora/site-nav"
import { Hero } from "@/components/praxora/hero"
import { LogoMarquee } from "@/components/praxora/logo-marquee"
import { Features } from "@/components/praxora/features"
import { Showcase } from "@/components/praxora/showcase"
import { Systems } from "@/components/praxora/systems"
import { CTA } from "@/components/praxora/cta"
import { SiteFooter } from "@/components/praxora/site-footer"

export default function Page() {
  return (
    <>
      <MouseSpotlight />
      <SiteNav />
      <main className="relative">
        <Hero />
        <LogoMarquee />
        <Features />
        <Showcase />
        <Systems />
        <CTA />
      </main>
      <SiteFooter />
    </>
  )
}
