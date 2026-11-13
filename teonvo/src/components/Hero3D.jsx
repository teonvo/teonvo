import { Canvas, useFrame } from '@react-three/fiber'
import { Text, Environment } from '@react-three/drei'
import { useMemo, useRef, useState, useEffect } from 'react'
import * as THREE from 'three'

// 1. Camera Rig for Scroll Zoom
function CameraRig({ isMobile }) {
  useFrame((state) => {
    const scrollY = window.scrollY
    const maxScroll = window.innerHeight
    const scrollPercent = Math.min(scrollY / maxScroll, 1)
    
    // Zoom in less on mobile so the sphere doesn't clip out of frame
    const zoomAmount = isMobile ? 1.5 : 4;
    const targetZ = 7.5 - (scrollPercent * zoomAmount)
    
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.08)
  })
  return null
}

// 2. The Core Sphere
function Core({ isMobile }) {
  const coreRef = useRef()
  const { coreGeom, wireGeom, pointsGeom } = useMemo(() => {
    const pointCount = isMobile ? 300 : 850
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
      coreGeom: new THREE.IcosahedronGeometry(1.28, isMobile ? 3 : 5),
      wireGeom: new THREE.IcosahedronGeometry(1.31, 2),
      pointsGeom: new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(pos, 3))
    }
  }, [isMobile])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.12
      coreRef.current.rotation.x = Math.sin(t * 0.22) * 0.12
      // Gentle floating effect ONLY on the sphere, not the rings
      if (isMobile) {
        coreRef.current.position.y = Math.sin(t * 1.5) * 0.05
      }
    }
  })

  return (
    <group>
      <mesh ref={coreRef} geometry={coreGeom}>
        <meshPhysicalMaterial color={0xc7ccc8} metalness={0.85} roughness={0.15} clearcoat={1} />
      </mesh>
      <mesh geometry={wireGeom}>
        <meshBasicMaterial color={0xffffff} wireframe transparent opacity={0.15} />
      </mesh>
      <points geometry={pointsGeom}>
        <pointsMaterial color={0xdce1dc} size={0.015} transparent opacity={0.6} />
      </points>
    </group>
  )
}

// 3. Orbital Rings with Text (Locked to center)
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
      {/* Ring 1 */}
      <mesh rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[2.2, 0.005, 16, 120]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.3} />
      </mesh>
      
      {/* Ring 2 */}
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[2.6, 0.005, 16, 120]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.15} />
      </mesh>

      {/* Floating Text inside the Rings */}
      <Text position={[2.2, 0.5, 0]} fontSize={0.15} color="#ffffff" letterSpacing={0.1}>
        AI / AUTOMATION
      </Text>
      <Text position={[-2.2, -0.5, 0]} fontSize={0.15} color="#ffffff" letterSpacing={0.1}>
        DIGITAL CRAFT
      </Text>
      <Text position={[0, 2.6, 0]} fontSize={0.15} color="#ffffff" letterSpacing={0.1}>
        TEONVO / INTELLIGENCE
      </Text>
    </group>
  )
}

export default function Hero3D() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768)
  }, [])

  return (
    <Canvas 
      camera={{ position: [0, 0, 7.5], fov: 38 }} 
      dpr={isMobile ? [1, 1.5] : [1, 2]} 
      gl={{ alpha: true, antialias: true }} 
      style={{ position: 'absolute', inset: 0, zIndex: 0 }}
    >
      <ambientLight intensity={1.1} />
      <pointLight position={[3, 3, 4]} intensity={85} />
      <pointLight position={[-3, -2, -2]} intensity={55} color={0x9aa39d} />
      
      {/* 
        Position logic: 
        Mobile: [0, 0.5, 0] -> Perfectly centered horizontally, slightly raised.
        Desktop: [3.8, 0, -1] -> Pushed to the right side.
      */}
      <group position={isMobile ? [0, 0.5, 0] : [3.8, 0, -1]}>
        <Core isMobile={isMobile} />
        <OrbitRings />
      </group>
      
      <CameraRig isMobile={isMobile} />
      <Environment preset="city" />
    </Canvas>
  )
}
