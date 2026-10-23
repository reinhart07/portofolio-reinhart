import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// Baris teknologi yang berjalan terus (marquee). Pakai 3 kategori teknis pertama.
const techItems = skills.slice(0, 3).flatMap((s) => s.items)
const rowA = techItems.filter((_, i) => i % 2 === 0)
const rowB = techItems.filter((_, i) => i % 2 === 1)

function MarqueeRow({ items, reverse = false }) {
  const loop = [...items, ...items]
  return (
    <div className="marquee" aria-hidden="true">
      <div className={`marquee-track ${reverse ? 'is-reverse' : ''}`}>
        {loop.map((t, i) => (
          <span key={`${t}-${i}`} className="marquee-item">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading index="05" eyebrow="Skills" title="Skills" />
      </div>

      <Reveal className="marquee-wrap">
        <MarqueeRow items={rowA} />
        <MarqueeRow items={rowB} reverse />
      </Reveal>

      <div className="container">
        <div className="grid grid-3 skills-grid">
          {skills.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.07} className="card skill-card">
              <h3>
                <span aria-hidden="true">{group.emoji} </span>
                {group.title}
              </h3>
              <ul className="skill-tags">
                {group.items.map((item) => (
                  <motion.li key={item} whileHover={{ y: -3, scale: 1.04 }} className="skill-tag">
                    {item}
                  </motion.li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
