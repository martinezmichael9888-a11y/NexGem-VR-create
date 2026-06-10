import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Platforms } from "@/components/platforms"
import { Collaboration } from "@/components/collaboration"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <Platforms />
        <Collaboration />
      </main>
      <SiteFooter />
    </div>
  )
}
