import { Canvas, useFrame } from '@react-three/fiber'
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function OrbitRings() {
  const ringsRef = useRef()
  
  useFrame((state, delta) => {
    if (ringsRef.current) {
      ringsRef.current.rotation.x += delta * 0.05
      ringsRef.current.rotation.y += delta * 0.08
    }
  })

  return (
    <group ref={ringsRef}>
      <mesh rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[1.9, 0.003, 16, 120]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.3} />
      </mesh>
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[2.2, 0.003, 16, 120]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.15} />
      </mesh>
    </group>
  )
}

function Scene() {
  const groupRef = useRef()
  const coreRef = useRef()
  const wireRef = useRef()
  const pointsRef = useRef()
  
  const pointer = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 })

  const { coreGeom, wireGeom, pointsGeom } = useMemo(() => {
    const pointCount = 850
    const pos = new Float32Array(pointCount * 3)
    for (let i = 0; i < pointCount; i++) {
      const radius = 2.05 + Math.random() * 1.35
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = radius * Math.cos(phi)
    }
    return {
      coreGeom: new THREE.IcosahedronGeometry(1.28, 4),
      wireGeom: new THREE.IcosahedronGeometry(1.31, 2),
      pointsGeom: new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(pos, 3))
    }
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const scrollY = window.scrollY
    const scrollPercent = Math.min(scrollY / window.innerHeight, 1)
    state.camera.position.z = 7.5 - (scrollPercent * 3.5)

    pointer.current.targetX = state.pointer.x * 0.45
    pointer.current.targetY = state.pointer.y * 0.35
    pointer.current.x += (pointer.current.targetX - pointer.current.x) * 0.035
    pointer.current.y += (pointer.current.targetY - pointer.current.y) * 0.035

    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.12 + pointer.current.x
      groupRef.current.rotation.x = Math.sin(t * 0.22) * 0.12 + pointer.current.y
    }
    if (wireRef.current) wireRef.current.rotation.copy(groupRef.current.rotation)
    if (pointsRef.current) pointsRef.current.rotation.y = -t * 0.025
    if (coreRef.current) coreRef.current.position.y = Math.sin(t * 0.7) * 0.055
  })

  return (
    /* Moved X from 3.2 to 1.8 to pull it further left */
    <group ref={groupRef} position={[1.8, 0, 0]} scale={0.95}>
      <mesh ref={coreRef} geometry={coreGeom}>
        <meshPhysicalMaterial color={0xc7ccc8} metalness={0.85} roughness={0.15} clearcoat={1} clearcoatRoughness={0.1} />
      </mesh>
      <mesh ref={wireRef} geometry={wireGeom}>
        <meshBasicMaterial color={0xffffff} wireframe transparent opacity={0.15} />
      </mesh>
      <points ref={pointsRef} geometry={pointsGeom}>
        <pointsMaterial color={0xdce1dc} size={0.012} transparent opacity={0.6} />
      </points>
      <OrbitRings />
    </group>
  )
}

export default function Hero3D() {
  return (
    <Canvas 
      camera={{ position: [0, 0, 7.5], fov: 38 }}
      dpr={[1, 1.5]} 
      gl={{ alpha: true, antialias: true }} 
      style={{ position: 'absolute', inset: 0, zIndex: 0, width: '100%', height: '100%' }}
    >
      <ambientLight intensity={1.1} />
      <pointLight position={[3, 3, 4]} intensity={85} />
      <pointLight position={[-3, -2, -2]} intensity={55} color={0x9aa39d} />
      <Scene />
      <EffectComposer>
        <Bloom intensity={0.5} luminanceThreshold={0.7} luminanceSmoothing={0.9} mipmapBlur />
        <ChromaticAberration offset={[0.0008, 0.0008]} radialModulation={true} modulationOffset={0.5} />
      </EffectComposer>
    </Canvas>
  )
}



