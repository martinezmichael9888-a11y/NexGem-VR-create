import Link from "next/link"
import { Boxes } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Boxes className="h-4 w-4" />
            </span>
            <span className="font-semibold tracking-tight">
              NexGem<span className="text-primary"> VR</span>
            </span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Build once. Deploy everywhere. Create immersive worlds.
          </p>
          <p className="font-mono text-xs text-muted-foreground">© 2026 NexGem VR</p>
        </div>
      </div>
    </footer>
  )
}
