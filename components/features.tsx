import {
  Hand,
  Users,
  Sparkles,
  Globe,
  CloudUpload,
  ShieldCheck,
  Activity,
  Languages,
} from "lucide-react"

const features = [
  {
    icon: Hand,
    title: "Gesture-Based Tools",
    description:
      "Sculpt, place, and manipulate 3D environments with intuitive spatial gestures designed for VR-native workflows.",
  },
  {
    icon: Users,
    title: "Real-Time Collaboration",
    description:
      "Bring remote creative teams into the same space with multi-user avatars and spatial voice chat.",
  },
  {
    icon: Sparkles,
    title: "High-Fidelity Rendering",
    description:
      "Photoreal asset rendering with offline sync, so your worlds look stunning whether you're connected or not.",
  },
  {
    icon: Globe,
    title: "Cross-Platform",
    description:
      "Build once, deploy everywhere — from desktop workstations to standalone Quest series headsets.",
  },
  {
    icon: CloudUpload,
    title: "Cloud Saving & Multiplayer",
    description:
      "Seamless cross-platform social interactions with low-latency network protocols and cloud-synced scenes.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    description:
      "End-to-end encryption and multi-factor authentication keep every account and world protected.",
  },
  {
    icon: Activity,
    title: "Monitoring & Uptime",
    description:
      "Real-time monitoring with automated diagnostics ensures high availability during peak usage.",
  },
  {
    icon: Languages,
    title: "Multi-Language Sync",
    description:
      "Manage your data everywhere with synchronized multi-language support across all your devices.",
  },
]

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-medium uppercase tracking-widest text-primary">
          Capabilities
        </span>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Everything you need to build immersive worlds
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          A complete spatial creation toolkit engineered for performance, collaboration, and scale.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <feature.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-semibold tracking-tight">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
