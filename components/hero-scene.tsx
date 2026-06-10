"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float, OrbitControls } from "@react-three/drei"
import { Suspense, useRef } from "react"
import type { Group, Mesh } from "three"

function FloatingShape({
  position,
  color,
  geometry,
  scale = 1,
}: {
  position: [number, number, number]
  color: string
  geometry: "box" | "ico" | "torus" | "octa"
  scale?: number
}) {
  const ref = useRef<Mesh>(null)
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.2
      ref.current.rotation.y += delta * 0.15
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} position={position} scale={scale} castShadow>
        {geometry === "box" && <boxGeometry args={[1, 1, 1]} />}
        {geometry === "ico" && <icosahedronGeometry args={[0.8, 0]} />}
        {geometry === "torus" && <torusGeometry args={[0.6, 0.22, 16, 48]} />}
        {geometry === "octa" && <octahedronGeometry args={[0.85, 0]} />}
        <meshStandardMaterial
          color={color}
          metalness={0.6}
          roughness={0.18}
          emissive={color}
          emissiveIntensity={0.12}
        />
      </mesh>
    </Float>
  )
}

function Scene() {
  const group = useRef<Group>(null)
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.3
    }
  })

  return (
    <group ref={group}>
      <FloatingShape position={[-2.4, 0.6, 0]} color="#2dd4bf" geometry="ico" scale={1.1} />
      <FloatingShape position={[2.2, -0.4, -1]} color="#f59e0b" geometry="torus" scale={1} />
      <FloatingShape position={[0, 1.4, -1.5]} color="#38bdf8" geometry="octa" scale={0.9} />
      <FloatingShape position={[1.4, 1.1, 0.5]} color="#2dd4bf" geometry="box" scale={0.55} />
      <FloatingShape position={[-1.6, -1.2, 0.5]} color="#f59e0b" geometry="box" scale={0.45} />
    </group>
  )
}

export function HeroScene() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.4} castShadow />
        <pointLight position={[-5, -3, -2]} intensity={0.6} color="#2dd4bf" />
        <Scene />
        <Environment preset="night" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.4}
          minPolarAngle={Math.PI / 2.6}
          maxPolarAngle={Math.PI / 1.7}
        />
      </Suspense>
    </Canvas>
  )
}
