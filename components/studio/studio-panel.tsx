"use client"

import { Box, Circle, Cylinder, Cone, Donut, Trash2, Layers } from "lucide-react"
import { PALETTE, type PrimitiveType, type SceneObject } from "./studio-types"

const typeIcon: Record<PrimitiveType, typeof Box> = {
  box: Box,
  sphere: Circle,
  cylinder: Cylinder,
  cone: Cone,
  torus: Donut,
}

export function StudioPanel({
  objects,
  selectedId,
  onSelect,
  onColor,
  onDelete,
}: {
  objects: SceneObject[]
  selectedId: string | null
  onSelect: (id: string | null) => void
  onColor: (id: string, color: string) => void
  onDelete: (id: string) => void
}) {
  const selected = objects.find((o) => o.id === selectedId) ?? null

  return (
    <aside className="flex w-72 flex-col border-l border-border bg-card/60">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <Layers className="h-4 w-4 text-primary" />
        <span className="text-sm font-medium">Scene Layers</span>
        <span className="ml-auto rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
          {objects.length}
        </span>
      </div>

      <div className="flex-1 overflow-y-auto p-2">
        {objects.length === 0 ? (
          <p className="px-2 py-8 text-center text-sm text-muted-foreground">
            Add primitives from the toolbar to start building your world.
          </p>
        ) : (
          <ul className="space-y-1">
            {objects.map((o) => {
              const Icon = typeIcon[o.type]
              return (
                <li key={o.id}>
                  <button
                    onClick={() => onSelect(o.id)}
                    className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm transition-colors ${
                      o.id === selectedId
                        ? "bg-primary/10 text-foreground"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    <span
                      className="flex h-6 w-6 items-center justify-center rounded"
                      style={{ backgroundColor: `${o.color}22`, color: o.color }}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="truncate">{o.name}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        )}
      </div>

      <div className="border-t border-border p-4">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Inspector
        </span>
        {selected ? (
          <div className="mt-3 space-y-4">
            <div>
              <span className="text-xs text-muted-foreground">Name</span>
              <p className="mt-0.5 text-sm font-medium">{selected.name}</p>
            </div>

            <div>
              <span className="text-xs text-muted-foreground">Position (x, y, z)</span>
              <p className="mt-0.5 font-mono text-xs">
                {selected.position.map((n) => n.toFixed(1)).join(",  ")}
              </p>
            </div>

            <div>
              <span className="text-xs text-muted-foreground">Color</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {PALETTE.map((c) => (
                  <button
                    key={c}
                    onClick={() => onColor(selected.id, c)}
                    className={`h-6 w-6 rounded-full ring-2 transition-transform hover:scale-110 ${
                      selected.color === c ? "ring-foreground" : "ring-transparent"
                    }`}
                    style={{ backgroundColor: c }}
                    aria-label={`Set color ${c}`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={() => onDelete(selected.id)}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background py-2 text-sm text-muted-foreground transition-colors hover:border-red-500/50 hover:text-red-400"
            >
              <Trash2 className="h-4 w-4" />
              Delete object
            </button>
          </div>
        ) : (
          <p className="mt-3 text-sm text-muted-foreground">
            Select an object to edit its properties.
          </p>
        )}
      </div>
    </aside>
  )
}
