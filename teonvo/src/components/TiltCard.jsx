import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
export default function TiltCard({ children, className = '' }) {
  const ref = useRef(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    setRotateY(((mouseX / rect.width) - 0.5) * 20)
    setRotateX(((mouseY / rect.height) - 0.5) * -20)
  }
  const handleMouseLeave = () => { setRotateX(0); setRotateY(0) }
  return (
    <motion.div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} animate={{ rotateX, rotateY, transformPerspective: 1000 }} transition={{ type: 'spring', stiffness: 300, damping: 30, mass: 0.5 }} className={className} style={{ transformStyle: 'preserve-3d' }}>
      {children}
    </motion.div>
  )
}


