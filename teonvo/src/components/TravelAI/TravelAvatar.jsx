import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Torus, Octahedron } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'
import { useTravelAI } from './useTravelAI'

function GuideCore() {
  const groupRef = useRef()
  const coreRef = useRef()
  const ring1Ref = useRef()
  const ring2Ref = useRef()
  const { state } = useTravelAI()

  useFrame((clock) => {
    const t = clock.clock.getElapsedTime()
    
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.2
    }

    if (coreRef.current) {
      coreRef.current.position.y = Math.sin(t * 2) * 0.1
      
      let targetScale = 1
      let targetEmissive = 0.2
      
      if (state === 'speaking') {
        targetScale = 1 + Math.sin(t * 15) * 0.05
        targetEmissive = 2
      } else if (state === 'listening') {
        targetScale = 1 + Math.sin(t * 5) * 0.05
        targetEmissive = 1.5
      } else if (state === 'thinking') {
        targetEmissive = THREE.MathUtils.lerp(coreRef.current.material.emissiveIntensity, 3, 0.1)
      }
      
      coreRef.current.scale.setScalar(THREE.MathUtils.lerp(coreRef.current.scale.x, targetScale, 0.1))
      if (state !== 'thinking') {
        coreRef.current.material.emissiveIntensity = THREE.MathUtils.lerp(coreRef.current.material.emissiveIntensity, targetEmissive, 0.1)
      }
    }

    if (ring1Ref.current) ring1Ref.current.rotation.x = t * 0.5
    if (ring2Ref.current) ring2Ref.current.rotation.z = t * 0.3
  })

  return (
    <group ref={groupRef}>
      {/* Central Glowing Crystal (Mountain/Compass feel) */}
      <Octahedron ref={coreRef} args={[1.2, 0]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#d4af37" 
          emissive="#d4af37"
          emissiveIntensity={0.2}
          metalness={0.8}
          roughness={0.2}
          wireframe={state === 'thinking'}
        />
      </Octahedron>
      
      {/* Inner Glass Sphere */}
      <Sphere args={[0.8, 32, 32]}>
        <MeshDistortMaterial 
          color="#f4f1e1" 
          roughness={0.1}
          metalness={0.9}
          distort={0.2}
          speed={2}
          transparent
          opacity={0.3}
        />
      </Sphere>

      {/* Orbital Rings */}
      <Torus ref={ring1Ref} args={[1.8, 0.01, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#2d5a46" emissive="#2d5a46" emissiveIntensity={1} />
      </Torus>
      <Torus ref={ring2Ref} args={[2.1, 0.02, 16, 100]} rotation={[0, Math.PI / 4, 0]}>
        <meshStandardMaterial color="#d4af37" emissive="#d4af37" emissiveIntensity={0.5} />
      </Torus>
    </group>
  )
}

export default function TravelAvatar() {
  return (
    <div className="travel-avatar-container">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#f4f1e1" />
        <pointLight position={[-10, 0, -10]} intensity={3} color="#2d5a46" />
        <pointLight position={[5, -5, 5]} intensity={2} color="#d4af37" />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
          <GuideCore />
        </Float>
      </Canvas>
    </div>
  )
}



