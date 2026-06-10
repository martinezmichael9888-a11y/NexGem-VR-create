import Link from "next/link"
import { Boxes } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Boxes className="h-5 w-5" />
          </span>
          <span className="text-lg font-semibold tracking-tight">
            NexGem<span className="text-primary"> VR</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Features
          </a>
          <a href="#platforms" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Platforms
          </a>
          <a href="#collaboration" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Collaboration
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/studio"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Launch Studio
          </Link>
        </div>
      </div>
    </header>
  )
}
