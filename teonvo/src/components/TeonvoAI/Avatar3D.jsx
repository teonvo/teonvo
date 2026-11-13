import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sparkles, Environment } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'
import { useAssistant } from '../../context/AssistantContext'

function AICore() {
  const coreRef = useRef()
  const ring1Ref = useRef()
  const ring2Ref = useRef()
  const { status } = useAssistant()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.2
      coreRef.current.rotation.z = Math.sin(t * 0.5) * 0.1
      
      // Dynamic distortion based on status
      let distortSpeed = 1
      let distortAmount = 0.2
      let color = "#4fd1ff" // default blue

      if (status === 'speaking') {
        distortSpeed = 6
        distortAmount = 0.4
        color = "#a78bfa" // purple
      } else if (status === 'listening') {
        distortSpeed = 4
        distortAmount = 0.3
        color = "#f472b6" // pink
      } else if (status === 'thinking') {
        distortSpeed = 8
        distortAmount = 0.15
        color = "#ffffff" // white
      }

      // Animate material properties
      if (coreRef.current.material) {
        coreRef.current.material.distort = THREE.MathUtils.lerp(coreRef.current.material.distort, distortAmount, 0.1)
        coreRef.current.material.speed = THREE.MathUtils.lerp(coreRef.current.material.speed, distortSpeed, 0.1)
        coreRef.current.material.color.lerp(new THREE.Color(color), 0.1)
      }
    }

    if (ring1Ref.current) ring1Ref.current.rotation.x = t * 0.5
    if (ring2Ref.current) ring2Ref.current.rotation.y = t * 0.4
  })

  return (
    <group>
      {/* Central Liquid Core */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <MeshDistortMaterial 
          color="#4fd1ff" 
          emissive="#000000"
          metalness={0.9} 
          roughness={0.1} 
          distort={0.2} 
          speed={1} 
        />
      </mesh>

      {/* Inner Glow */}
      <mesh scale={0.9}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.05} />
      </mesh>

      {/* Orbital Rings */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.8, 0.02, 16, 100]} />
        <meshStandardMaterial color="#ffffff" emissive="#4fd1ff" emissiveIntensity={2} transparent opacity={0.6} />
      </mesh>
      <mesh ref={ring2Ref} rotation={[0, Math.PI / 3, 0]}>
        <torusGeometry args={[2.1, 0.01, 16, 100]} />
        <meshStandardMaterial color="#ffffff" emissive="#a78bfa" emissiveIntensity={1.5} transparent opacity={0.4} />
      </mesh>

      {/* Floating Particles */}
      <Sparkles count={50} scale={5} size={2} speed={0.4} opacity={0.5} color="#ffffff" />
    </group>
  )
}

export default function Avatar3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]} gl={{ alpha: true }}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={5} color="#4fd1ff" />
      <pointLight position={[10, -10, 10]} intensity={5} color="#a78bfa" />
      
      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <AICore />
      </Float>
      
      <Environment preset="city" />
    </Canvas>
  )
}


