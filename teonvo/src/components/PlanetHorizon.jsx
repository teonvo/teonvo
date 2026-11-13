import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

function Planet() {
  const planetRef = useRef()

  useFrame((state) => {
    // Subtle parallax based on scroll
    const scrollY = window.scrollY
    const targetY = -5 + (scrollY * 0.001)
    if (planetRef.current) {
      planetRef.current.position.y = THREE.MathUtils.lerp(planetRef.current.position.y, targetY, 0.05)
    }
  })

  return (
    <mesh ref={planetRef} position={[4, -5, -2]}>
      <sphereGeometry args={[6, 64, 64]} />
      <meshStandardMaterial 
        color="#050505" 
        roughness={0.9} 
        metalness={0.1} 
      />
    </mesh>
  )
}

export default function PlanetHorizon() {
  return (
    <div style={{ position: 'absolute', bottom: 0, right: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none', overflow: 'hidden' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.1} />
        {/* Dramatic rim light to create the illuminated horizon */}
        <directionalLight position={[-5, 5, 2]} intensity={3} color="#ffffff" />
        <directionalLight position={[-2, -2, 5]} intensity={1} color="#888888" />
        <Planet />
      </Canvas>
    </div>
  )
}


