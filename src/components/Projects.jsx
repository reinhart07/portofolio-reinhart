import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projectCategories, projects } from '../data/portfolio'
import { ZoomImage } from './Lightbox'
import SectionHeading from './SectionHeading'
import TiltCard from './TiltCard'
import { ArrowUpRight } from './Icons'

const INITIAL_LIMIT = 9

export default function Projects() {
  const [category, setCategory] = useState('All')
  const [expanded, setExpanded] = useState(false)

  const filtered = useMemo(
    () => (category === 'All' ? projects : projects.filter((p) => p.category === category)),
    [category],
  )

  const collapsible = category === 'All' && filtered.length > INITIAL_LIMIT
  const visible = collapsible && !expanded ? filtered.slice(0, INITIAL_LIMIT) : filtered
  const gallery = useMemo(() => visible.map((p) => ({ src: p.image, alt: p.title })), [visible])

  const countOf = (c) => (c === 'All' ? projects.length : projects.filter((p) => p.category === c).length)

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading index="04" eyebrow="Projects" title="Projects">
          Machine learning, computer vision, data analysis, and full-stack work. Filter by category
          and click any image to preview.
        </SectionHeading>

        <div className="filters" role="tablist" aria-label="Filter projects by category">
          {projectCategories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={category === c}
              className={`filter-chip ${category === c ? 'is-active' : ''}`}
              onClick={() => {
                setCategory(c)
                setExpanded(false)
              }}
            >
              {category === c && (
                <motion.span
                  layoutId="chip-bg"
                  className="chip-bg"
                  transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                />
              )}
              <span className="chip-text">
                {c} <span className="chip-count">{countOf(c)}</span>
              </span>
            </button>
          ))}
        </div>

        <motion.ul layout className="grid grid-3 project-grid">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.li
                layout
                key={p.title}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <TiltCard className="card glow-card project-card">
                  <div className="card-img-wrap">
                    <ZoomImage items={gallery} index={i} className="card-img" />
                    {p.featured && <span className="ribbon">★ Featured</span>}
                  </div>
                  <div className="card-body">
                    <div className="meta-row">
                      <span className="category-tag">{p.category}</span>
                      {p.badge && <span className="badge">{p.badge}</span>}
                    </div>
                    <h3>
                      <span aria-hidden="true">{p.emoji} </span>
                      {p.title}
                    </h3>
                    <p className="card-desc">{p.description}</p>
                    <ul className="tag-list">
                      {p.tags.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                    <a href={p.link} target="_blank" rel="noreferrer" className="link-arrow">
                      View Project <ArrowUpRight />
                    </a>
                  </div>
                </TiltCard>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        {collapsible && (
          <div className="center">
            <button className="btn btn-ghost" onClick={() => setExpanded((e) => !e)}>
              {expanded ? 'Show fewer' : `Show all ${filtered.length} projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
