import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, CloseIcon, ExpandIcon } from './Icons'

const LightboxContext = createContext(() => {})
export const useLightbox = () => useContext(LightboxContext)

export function LightboxProvider({ children }) {
  // state: { items: [{ src, alt }], index }
  const [state, setState] = useState(null)
  const closeRef = useRef(null)
  const isOpen = Boolean(state)

  const open = useCallback((items, index = 0) => setState({ items, index }), [])
  const close = useCallback(() => setState(null), [])
  const step = useCallback(
    (dir) =>
      setState((s) =>
        s ? { ...s, index: (s.index + dir + s.items.length) % s.items.length } : s,
      ),
    [],
  )

  useEffect(() => {
    if (!isOpen) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen, close, step])

  const current = state ? state.items[state.index] : null
  const many = state ? state.items.length > 1 : false

  return (
    <LightboxContext.Provider value={open}>
      {children}
      <AnimatePresence>
        {state && current && (
          <motion.div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
          >
            <button ref={closeRef} className="lb-btn lb-close" onClick={close} aria-label="Close preview">
              <CloseIcon />
            </button>

            {many && (
              <button
                className="lb-btn lb-prev"
                onClick={(e) => {
                  e.stopPropagation()
                  step(-1)
                }}
                aria-label="Previous image"
              >
                <ChevronLeft />
              </button>
            )}

            <AnimatePresence mode="wait" initial={false}>
              <motion.figure
                key={current.src}
                className="lb-figure"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                drag={many ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.35}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80) step(1)
                  else if (info.offset.x > 80) step(-1)
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <img src={current.src} alt={current.alt} draggable={false} />
                <figcaption>
                  <span>{current.alt}</span>
                  {many && (
                    <span className="lb-count">
                      {state.index + 1} / {state.items.length}
                    </span>
                  )}
                </figcaption>
              </motion.figure>
            </AnimatePresence>

            {many && (
              <button
                className="lb-btn lb-next"
                onClick={(e) => {
                  e.stopPropagation()
                  step(1)
                }}
                aria-label="Next image"
              >
                <ChevronRight />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </LightboxContext.Provider>
  )
}

// Gambar yang bisa diklik untuk dibuka di lightbox.
export function ZoomImage({ items, index = 0, className = '' }) {
  const open = useLightbox()
  const item = items[index]
  return (
    <button
      type="button"
      className={`zoom-img ${className}`}
      onClick={() => open(items, index)}
      aria-label={`Preview image: ${item.alt}`}
    >
      <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
      <span className="zoom-hint" aria-hidden="true">
        <ExpandIcon width={16} height={16} />
      </span>
    </button>
  )
}
