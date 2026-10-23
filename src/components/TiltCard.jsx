import { useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'

// Kartu 3D yang miring mengikuti kursor + kilau cahaya (glare).
export default function TiltCard({ children, className = '', max = 6, ...rest }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const spring = { stiffness: 220, damping: 22, mass: 0.6 }
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [max, -max]), spring)
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-max, max]), spring)

  const onMove = (e) => {
    if (reduce || e.pointerType === 'touch' || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    mx.set(x - 0.5)
    my.set(y - 0.5)
    ref.current.style.setProperty('--mx', `${x * 100}%`)
    ref.current.style.setProperty('--my', `${y * 100}%`)
  }

  const onLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
