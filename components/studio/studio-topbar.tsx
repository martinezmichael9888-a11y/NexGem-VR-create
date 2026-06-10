"use client"

import Link from "next/link"
import { Boxes, Mic, Radio, Save, Wifi } from "lucide-react"

const collaborators = [
  { initial: "A", color: "#2dd4bf" },
  { initial: "M", color: "#f59e0b" },
  { initial: "K", color: "#38bdf8" },
]

export function StudioTopbar({ objectCount }: { objectCount: number }) {
  return (
    <header className="flex h-14 items-center justify-between border-b border-border bg-card/60 px-4">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Boxes className="h-4 w-4" />
          </span>
          <span className="text-sm font-semibold tracking-tight">NexGem VR</span>
        </Link>
        <span className="h-5 w-px bg-border" />
        <span className="text-sm text-muted-foreground">Untitled World</span>
        <span className="flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          Synced
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden items-center gap-3 text-xs text-muted-foreground sm:flex">
          <span className="flex items-center gap-1.5">
            <Radio className="h-3.5 w-3.5 text-primary" />
            Live session
          </span>
          <span className="flex items-center gap-1.5">
            <Wifi className="h-3.5 w-3.5" />
            18ms
          </span>
          <span>{objectCount} objects</span>
        </div>

        <div className="flex -space-x-2">
          {collaborators.map((c) => (
            <span
              key={c.initial}
              className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-card text-xs font-semibold text-background"
              style={{ backgroundColor: c.color }}
            >
              {c.initial}
            </span>
          ))}
          <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-card bg-muted text-xs text-muted-foreground">
            <Mic className="h-3 w-3" />
          </span>
        </div>

        <button className="flex items-center gap-2 rounded-lg bg-primary px-3.5 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
          <Save className="h-4 w-4" />
          Save
        </button>
      </div>
    </header>
  )
}
