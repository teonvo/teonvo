import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, MeshTransmissionMaterial } from '@react-three/drei'
import { useRef } from 'react'

function Sculpture() {
  const meshRef = useRef()
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1
    }
  })

  return (
    <mesh ref={meshRef} scale={1.2}>
      <torusKnotGeometry args={[1, 0.35, 200, 32]} />
      <MeshTransmissionMaterial 
        backside
        samples={4}
        thickness={0.5}
        chromaticAberration={0.05}
        anisotropy={0.1}
        distortion={0.5}
        distortionScale={0.5}
        temporalDistortion={0.1}
        color="#ffffff"
      />
    </mesh>
  )
}

export default function ChromeSculpture() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <Sculpture />
      <Environment preset="studio" />
    </Canvas>
  )
}


