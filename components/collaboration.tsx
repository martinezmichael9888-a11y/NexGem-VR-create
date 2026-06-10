import Link from "next/link"
import { Mic, UserCircle2, Radio } from "lucide-react"

const collaborators = [
  { name: "Aria", color: "bg-primary", initial: "A" },
  { name: "Mateo", color: "bg-accent", initial: "M" },
  { name: "Kai", color: "bg-sky-400", initial: "K" },
]

export function Collaboration() {
  return (
    <section id="collaboration" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-2 lg:order-1">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Radio className="h-4 w-4 text-primary" />
                Live session · 3 builders
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                Synced
              </span>
            </div>

            <div className="mt-6 space-y-3">
              {collaborators.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center justify-between rounded-lg border border-border bg-background p-3"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold text-background ${c.color}`}
                    >
                      {c.initial}
                    </span>
                    <div>
                      <div className="text-sm font-medium">{c.name}</div>
                      <div className="text-xs text-muted-foreground">Editing terrain mesh</div>
                    </div>
                  </div>
                  <Mic className="h-4 w-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Better together
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Create together, in real time
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Invite your remote team into a shared 3D space with multi-user avatars and spatial
            voice chat. Every change synchronizes instantly across server clusters, keeping
            everyone connected regardless of platform or hardware.
          </p>

          <ul className="mt-8 space-y-3">
            {[
              "Multi-user avatars with presence awareness",
              "Spatial voice chat with low-latency audio",
              "Conflict-free real-time scene synchronization",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <UserCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="leading-relaxed text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/studio"
            className="mt-8 inline-flex rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/50"
          >
            Open a session
          </Link>
        </div>
      </div>
    </section>
  )
}
