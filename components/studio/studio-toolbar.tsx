"use client"

import { Box, Circle, Cylinder, Cone, Donut, Move3d, Rotate3d, Maximize, MousePointer2 } from "lucide-react"
import type { PrimitiveType } from "./studio-types"

const primitives: { type: PrimitiveType; icon: typeof Box; label: string }[] = [
  { type: "box", icon: Box, label: "Cube" },
  { type: "sphere", icon: Circle, label: "Sphere" },
  { type: "cylinder", icon: Cylinder, label: "Cylinder" },
  { type: "cone", icon: Cone, label: "Cone" },
  { type: "torus", icon: Donut, label: "Torus" },
]

const gizmos = [
  { mode: "translate" as const, icon: Move3d, label: "Move" },
  { mode: "rotate" as const, icon: Rotate3d, label: "Rotate" },
  { mode: "scale" as const, icon: Maximize, label: "Scale" },
]

export function StudioToolbar({
  gizmo,
  onAdd,
  onGizmo,
}: {
  gizmo: "translate" | "rotate" | "scale"
  onAdd: (type: PrimitiveType) => void
  onGizmo: (mode: "translate" | "rotate" | "scale") => void
}) {
  return (
    <aside className="flex w-16 flex-col items-center gap-6 border-r border-border bg-card/60 py-4">
      <div className="flex flex-col items-center gap-1.5">
        <span className="mb-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          Add
        </span>
        {primitives.map((p) => (
          <button
            key={p.type}
            onClick={() => onAdd(p.type)}
            title={`Add ${p.label}`}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
          >
            <p.icon className="h-5 w-5" />
          </button>
        ))}
      </div>

      <div className="h-px w-8 bg-border" />

      <div className="flex flex-col items-center gap-1.5">
        <span className="mb-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          Tool
        </span>
        {gizmos.map((g) => (
          <button
            key={g.mode}
            onClick={() => onGizmo(g.mode)}
            title={g.label}
            className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
              gizmo === g.mode
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            <g.icon className="h-5 w-5" />
          </button>
        ))}
      </div>
    </aside>
  )
}
