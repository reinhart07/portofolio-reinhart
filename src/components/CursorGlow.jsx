import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Cahaya lembut yang mengikuti kursor (hanya di perangkat dengan mouse).
export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-600)
  const y = useMotionValue(-600)
  const sx = useSpring(x, { stiffness: 110, damping: 22, mass: 0.6 })
  const sy = useSpring(y, { stiffness: 110, damping: 22, mass: 0.6 })

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return undefined
    setEnabled(true)
    const move = (e) => {
      x.set(e.clientX - 260)
      y.set(e.clientY - 260)
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [x, y])

  if (!enabled) return null
  return <motion.div className="cursor-glow" style={{ x: sx, y: sy }} aria-hidden="true" />
}
