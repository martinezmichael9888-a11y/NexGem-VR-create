"use client"

import Link from "next/link"
import { ArrowRight, Headset } from "lucide-react"
import { HeroScene } from "@/components/hero-scene"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-fade" aria-hidden="true" />

      <div className="absolute inset-0 -z-0 opacity-90">
        <HeroScene />
      </div>

      <div className="pointer-events-none relative mx-auto flex max-w-7xl flex-col items-center px-4 pb-28 pt-24 text-center sm:px-6 lg:px-8 lg:pb-40 lg:pt-32">
        <span className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
          <Headset className="h-3.5 w-3.5 text-primary" />
          Spatial computing for creative teams
        </span>

        <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
          Build immersive 3D worlds,{" "}
          <span className="text-primary">together</span>
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          A VR world builder studio with gesture-based tools, real-time collaboration, and
          high-fidelity rendering — deployable to desktop and Quest headsets from a single build.
        </p>

        <div className="pointer-events-auto mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/studio"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Launch Studio
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/70 px-6 py-3 text-sm font-medium backdrop-blur transition-colors hover:border-primary/50"
          >
            Explore features
          </a>
        </div>
      </div>
    </section>
  )
}
