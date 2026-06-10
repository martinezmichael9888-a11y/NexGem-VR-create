"use client"

import dynamic from "next/dynamic"
import { useCallback, useMemo, useState } from "react"
import { StudioTopbar } from "./studio-topbar"
import { StudioToolbar } from "./studio-toolbar"
import { StudioPanel } from "./studio-panel"
import { PALETTE, type PrimitiveType, type SceneObject } from "./studio-types"

const StudioViewport = dynamic(
  () => import("./studio-viewport").then((m) => m.StudioViewport),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center bg-background">
        <span className="text-sm text-muted-foreground">Loading 3D viewport…</span>
      </div>
    ),
  },
)

const typeLabel: Record<PrimitiveType, string> = {
  box: "Cube",
  sphere: "Sphere",
  cylinder: "Cylinder",
  cone: "Cone",
  torus: "Torus",
}

const initialObjects: SceneObject[] = [
  { id: "obj-1", name: "Cube 1", type: "box", position: [0, 0, 0], color: "#2dd4bf" },
  { id: "obj-2", name: "Sphere 1", type: "sphere", position: [2.2, 0, -1], color: "#f59e0b" },
  { id: "obj-3", name: "Torus 1", type: "torus", position: [-2.2, 0, 1], color: "#38bdf8" },
]

export function StudioClient() {
  const [objects, setObjects] = useState<SceneObject[]>(initialObjects)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [gizmo, setGizmo] = useState<"translate" | "rotate" | "scale">("translate")

  const counters = useMemo(() => {
    const map: Record<string, number> = {}
    for (const o of objects) {
      map[o.type] = Math.max(map[o.type] ?? 0, Number(o.name.split(" ").pop()) || 0)
    }
    return map
  }, [objects])

  const addObject = useCallback(
    (type: PrimitiveType) => {
      const next = (counters[type] ?? 0) + 1
      const id = `obj-${Date.now()}`
      const color = PALETTE[objects.length % PALETTE.length]
      setObjects((prev) => [
        ...prev,
        {
          id,
          name: `${typeLabel[type]} ${next}`,
          type,
          position: [
            Number((Math.random() * 4 - 2).toFixed(2)),
            0,
            Number((Math.random() * 4 - 2).toFixed(2)),
          ],
          color,
        },
      ])
      setSelectedId(id)
    },
    [counters, objects.length],
  )

  const handleTransform = useCallback((id: string, position: [number, number, number]) => {
    setObjects((prev) => prev.map((o) => (o.id === id ? { ...o, position } : o)))
  }, [])

  const handleColor = useCallback((id: string, color: string) => {
    setObjects((prev) => prev.map((o) => (o.id === id ? { ...o, color } : o)))
  }, [])

  const handleDelete = useCallback((id: string) => {
    setObjects((prev) => prev.filter((o) => o.id !== id))
    setSelectedId((cur) => (cur === id ? null : cur))
  }, [])

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background">
      <StudioTopbar objectCount={objects.length} />
      <div className="flex flex-1 overflow-hidden">
        <StudioToolbar gizmo={gizmo} onAdd={addObject} onGizmo={setGizmo} />
        <main className="relative flex-1">
          <StudioViewport
            objects={objects}
            selectedId={selectedId}
            gizmo={gizmo}
            onSelect={setSelectedId}
            onTransform={handleTransform}
          />
          <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
            Drag to orbit · Scroll to zoom · Click an object to select
          </div>
        </main>
        <StudioPanel
          objects={objects}
          selectedId={selectedId}
          onSelect={setSelectedId}
          onColor={handleColor}
          onDelete={handleDelete}
        />
      </div>
    </div>
  )
}
