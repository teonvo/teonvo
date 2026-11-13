import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, MeshTransmissionMaterial } from '@react-three/drei'
import { useRef } from 'react'
function ChromeSculpture() {
  const knotRef = useRef()
  useFrame((state, delta) => { if (knotRef.current) { knotRef.current.rotation.y += delta * 0.2; knotRef.current.rotation.x += delta * 0.1 } })
  return <mesh ref={knotRef} scale={1.2}><torusKnotGeometry args={[1, 0.35, 200, 32]} /><MeshTransmissionMaterial backside samples={4} thickness={0.5} chromaticAberration={0.1} anisotropy={0.2} distortion={0.2} distortionScale={0.5} temporalDistortion={0.1} color="#ffffff" metalness={0.9} roughness={0.1} /></mesh>
}
export default function ServicesHero3D() {
  return <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1]}><ambientLight intensity={0.2} /><directionalLight position={[10, 10, 5]} intensity={4} /><ChromeSculpture /><Environment preset="studio" /></Canvas>
}



