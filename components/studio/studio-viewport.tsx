"use client"

import { Canvas, useThree } from "@react-three/fiber"
import { Environment, Grid, OrbitControls, TransformControls } from "@react-three/drei"
import { Suspense, useEffect, useRef } from "react"
import type { Mesh } from "three"
import type { GizmoMode, SceneObject } from "./studio-types"

function SceneMesh({
  object,
  selected,
  meshRef,
  onSelect,
}: {
  object: SceneObject
  selected: boolean
  meshRef?: (mesh: Mesh | null) => void
  onSelect: (id: string) => void
}) {
  return (
    <mesh
      ref={meshRef}
      position={object.position}
      castShadow
      receiveShadow
      onClick={(e) => {
        e.stopPropagation()
        onSelect(object.id)
      }}
    >
      {object.type === "box" && <boxGeometry args={[1, 1, 1]} />}
      {object.type === "sphere" && <sphereGeometry args={[0.65, 32, 32]} />}
      {object.type === "cylinder" && <cylinderGeometry args={[0.55, 0.55, 1.2, 32]} />}
      {object.type === "cone" && <coneGeometry args={[0.65, 1.2, 32]} />}
      {object.type === "torus" && <torusGeometry args={[0.5, 0.2, 24, 48]} />}
      <meshStandardMaterial
        color={object.color}
        metalness={0.3}
        roughness={0.35}
        emissive={object.color}
        emissiveIntensity={selected ? 0.45 : 0.05}
      />
    </mesh>
  )
}

function SceneContent({
  objects,
  selectedId,
  gizmo,
  onSelect,
  onTransform,
}: {
  objects: SceneObject[]
  selectedId: string | null
  gizmo: GizmoMode
  onSelect: (id: string | null) => void
  onTransform: (id: string, position: [number, number, number]) => void
}) {
  const selectedRef = useRef<Mesh | null>(null)
  const { scene } = useThree()
  const selectedObject = objects.find((o) => o.id === selectedId) ?? null

  // Resolve the selected mesh from the scene graph by name (object id)
  useEffect(() => {
    if (selectedId) {
      const found = scene.getObjectByName(selectedId)
      selectedRef.current = (found as Mesh) ?? null
    } else {
      selectedRef.current = null
    }
  }, [selectedId, scene, objects])

  return (
    <>
      <color attach="background" args={["#06080d"]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[8, 12, 6]} intensity={1.4} castShadow shadow-mapSize={[2048, 2048]} />
      <pointLight position={[-6, 4, -4]} intensity={0.5} color="#2dd4bf" />

      {objects.map((object) => (
        <SceneMeshNamed
          key={object.id}
          object={object}
          selected={object.id === selectedId}
          onSelect={onSelect}
        />
      ))}

      {selectedObject && selectedRef.current && (
        <TransformControls
          object={selectedRef.current}
          mode={gizmo}
          onObjectChange={() => {
            const m = selectedRef.current
            if (m && selectedObject) {
              onTransform(selectedObject.id, [m.position.x, m.position.y, m.position.z])
            }
          }}
        />
      )}

      <Grid
        args={[30, 30]}
        cellSize={1}
        cellThickness={0.6}
        cellColor="#1c2738"
        sectionSize={5}
        sectionThickness={1}
        sectionColor="#2dd4bf"
        fadeDistance={32}
        fadeStrength={1.5}
        infiniteGrid
        position={[0, -0.5, 0]}
      />

      <Environment preset="night" />

      <OrbitControls
        makeDefault
        enableDamping
        dampingFactor={0.08}
        minDistance={3}
        maxDistance={30}
      />
    </>
  )
}

// Mesh that registers its name so TransformControls can find it
function SceneMeshNamed({
  object,
  selected,
  onSelect,
}: {
  object: SceneObject
  selected: boolean
  onSelect: (id: string) => void
}) {
  const ref = useRef<Mesh>(null)
  useEffect(() => {
    if (ref.current) ref.current.name = object.id
  }, [object.id])
  return (
    <SceneMesh
      object={object}
      selected={selected}
      meshRef={(m) => {
        ref.current = m
        if (m) m.name = object.id
      }}
      onSelect={onSelect}
    />
  )
}

export function StudioViewport({
  objects,
  selectedId,
  gizmo,
  onSelect,
  onTransform,
}: {
  objects: SceneObject[]
  selectedId: string | null
  gizmo: GizmoMode
  onSelect: (id: string | null) => void
  onTransform: (id: string, position: [number, number, number]) => void
}) {
  return (
    <Canvas
      shadows
      camera={{ position: [6, 5, 8], fov: 45 }}
      dpr={[1, 2]}
      onPointerMissed={() => onSelect(null)}
    >
      <Suspense fallback={null}>
        <SceneContent
          objects={objects}
          selectedId={selectedId}
          gizmo={gizmo}
          onSelect={onSelect}
          onTransform={onTransform}
        />
      </Suspense>
    </Canvas>
  )
}
