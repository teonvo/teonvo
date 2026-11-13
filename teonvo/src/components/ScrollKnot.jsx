import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
function ChromeKnot() {
  const meshRef = useRef()
  useFrame((state) => { if (meshRef.current) { meshRef.current.rotation.y = window.scrollY * 0.002 + state.clock.getElapsedTime() * 0.1; meshRef.current.rotation.x = window.scrollY * 0.001 } })
  return <mesh ref={meshRef} scale={1.5}><torusKnotGeometry args={[1, 0.3, 128, 32]} /><meshStandardMaterial color="#ffffff" metalness={1} roughness={0.15} /></mesh>
}
export default function ScrollKnot() {
  return <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.6 }}><Canvas camera={{ position: [0, 0, 6], fov: 45 }}><ambientLight intensity={0.5} /><directionalLight position={[10, 10, 5]} intensity={2} /><directionalLight position={[-10, -10, -5]} intensity={1} /><ChromeKnot /></Canvas></div>
}


