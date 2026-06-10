import { Monitor, Headset, Cpu, Gauge, Layers, Wifi } from "lucide-react"

const platforms = [
  { icon: Monitor, name: "Desktop", detail: "Windows, macOS & Linux workstations" },
  { icon: Headset, name: "Quest Series", detail: "Standalone Quest 2, 3 & Pro headsets" },
]

const stats = [
  { icon: Gauge, value: "<20ms", label: "Network latency" },
  { icon: Layers, value: "4K/eye", label: "Render fidelity" },
  { icon: Wifi, value: "99.99%", label: "Uptime SLA" },
  { icon: Cpu, value: "Edge", label: "Compute clusters" },
]

export function Platforms() {
  return (
    <section id="platforms" className="border-y border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            Deploy everywhere
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            One build. Every platform.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Reduce redundant codebase overhead and optimize asset management for maximum
            performance. NexGem VR compiles your world once and delivers a consistent, seamless
            experience across desktop and standalone headsets.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {platforms.map((p) => (
              <div key={p.name} className="rounded-xl border border-border bg-background p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 self-center">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-start gap-3 rounded-xl border border-border bg-background p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <s.icon className="h-5 w-5" />
              </span>
              <div>
                <div className="font-mono text-2xl font-semibold tracking-tight">{s.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
