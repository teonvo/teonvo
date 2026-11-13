import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'
function Network() {
  const groupRef = useRef()
  const { positions, lines } = useMemo(() => {
    const nodes = 15; const pos = []
    for (let i = 0; i < nodes; i++) { pos.push(new THREE.Vector3((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2)) }
    const linePos = []
    for (let i = 0; i < nodes; i++) { for (let j = i + 1; j < nodes; j++) { if (pos[i].distanceTo(pos[j]) < 1.2) { linePos.push(pos[i].x, pos[i].y, pos[i].z); linePos.push(pos[j].x, pos[j].y, pos[j].z) } } }
    return { positions: pos, lines: new Float32Array(linePos) }
  }, [])
  useFrame((state) => { if (groupRef.current) { groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2; groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2 } })
  return (
    <group ref={groupRef}>
      {positions.map((p, i) => <mesh key={i} position={p}><sphereGeometry args={[0.06, 16, 16]} /><meshBasicMaterial color="#e9ece8" /></mesh>)}
      <lineSegments><bufferGeometry><bufferAttribute attach="attributes-position" args={[lines, 3]} /></bufferGeometry><lineBasicMaterial color="#737b76" transparent opacity={0.6} /></lineSegments>
    </group>
  )
}
export default function AICard3D() { return <Canvas camera={{ position: [0, 0, 4], fov: 50 }} style={{ position: 'absolute', inset: 0, zIndex: 1 }}><Network /></Canvas> }


