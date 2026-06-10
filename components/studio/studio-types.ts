export type PrimitiveType = "box" | "sphere" | "cylinder" | "cone" | "torus"

export type SceneObject = {
  id: string
  name: string
  type: PrimitiveType
  position: [number, number, number]
  color: string
}

export type GizmoMode = "translate" | "rotate" | "scale"

export const OBJECT_LABELS: Record<PrimitiveType, string> = {
  box: "Cube",
  sphere: "Sphere",
  cylinder: "Cylinder",
  cone: "Cone",
  torus: "Torus",
}

export const PALETTE = ["#2dd4bf", "#f59e0b", "#38bdf8", "#e8edf4", "#f87171", "#a3e635"]
