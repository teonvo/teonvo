import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { useMemo, useRef } from 'react'

function Core() {
  const outer = useRef()
  const inner = useRef()

  useFrame((_, delta) => {
    if (outer.current) {
      outer.current.rotation.y += delta * 0.15
      outer.current.rotation.x += delta * 0.08
    }
    if (inner.current) {
      inner.current.rotation.y -= delta * 0.35
      inner.current.rotation.x -= delta * 0.2
    }
  })

  return (
    <group>
      <mesh ref={outer}>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshStandardMaterial
          wireframe
          color="#4fd1ff"
          emissive="#4fd1ff"
          emissiveIntensity={0.8}
          transparent
          opacity={0.55}
        />
      </mesh>
      <mesh ref={inner}>
        <icosahedronGeometry args={[0.55, 0]} />
        <meshStandardMaterial
          color="#a78bfa"
          emissive="#a78bfa"
          emissiveIntensity={2.4}
          roughness={0.25}
          metalness={0.4}
        />
      </mesh>
    </group>
  )
}

function OrbitRing({ radius, tilt, speed, color, nodeCount = 3 }) {
  const nodes = useRef()

  useFrame((_, delta) => {
    if (nodes.current) nodes.current.rotation.z += delta * speed
  })

  const positions = useMemo(() => {
    return Array.from({ length: nodeCount }, (_, i) => {
      const a = (i / nodeCount) * Math.PI * 2
      return [Math.cos(a) * radius, Math.sin(a) * radius, 0]
    })
  }, [radius, nodeCount])

  return (
    <group rotation={tilt}>
      <mesh>
        <torusGeometry args={[radius, 0.006, 16, 160]} />
        <meshBasicMaterial color={color} transparent opacity={0.35} />
      </mesh>
      <group ref={nodes}>
        {positions.map((pos, i) => (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[0.045, 16, 16]} />
            <meshBasicMaterial color={color} />
          </mesh>
        ))}
      </group>
    </group>
  )
}

function Particles({ count }) {
  const ref = useRef()

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.02
      ref.current.rotation.x += delta * 0.01
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.022} color="#7dd3fc" transparent opacity={0.85} sizeAttenuation depthWrite={false} />
    </points>
  )
}

function Rig() {
  useFrame((state) => {
    const x = state.pointer.x * 0.6
    const y = state.pointer.y * 0.4
    state.camera.position.x += (x - state.camera.position.x) * 0.05
    state.camera.position.y += (y - state.camera.position.y) * 0.05
    state.camera.lookAt(0, 0, 0)
  })
  return null
}

export default function Scene() {
  const isSmall = typeof window !== 'undefined' && window.innerWidth < 768
  const particleCount = isSmall ? 220 : 500

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]} gl={{ antialias: true, alpha: false }}>
      <color attach="background" args={['#05060a']} />
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={45} color="#4fd1ff" />
      <pointLight position={[-5, -5, -5]} intensity={30} color="#a78bfa" />

      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
        <Core />
      </Float>

      <OrbitRing radius={2.1} tilt={[1.2, 0.4, 0]} speed={0.15} color="#4fd1ff" nodeCount={3} />
      <OrbitRing radius={2.5} tilt={[0.6, -0.8, 0.5]} speed={-0.1} color="#a78bfa" nodeCount={4} />
      <OrbitRing radius={2.9} tilt={[1.6, 1.2, -0.4]} speed={0.08} color="#f472b6" nodeCount={2} />

      <Particles count={particleCount} />
      <Rig />

      <EffectComposer>
        <Bloom intensity={0.9} luminanceThreshold={0.2} luminanceSmoothing={0.9} mipmapBlur />
      </EffectComposer>
    </Canvas>
  )
}


