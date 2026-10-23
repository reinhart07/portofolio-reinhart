import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../data/portfolio'
import useTyping from '../hooks/useTyping'
import { useLightbox } from './Lightbox'
import { ArrowDown, GithubIcon, LinkedinIcon, MailIcon, MapPinIcon } from './Icons'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const chips = [
  { text: '🛰️ Top 10 · Aerospace Hackathon 2026', className: 'chip-1', duration: 5.2 },
  { text: '🚀 NASA OSDR · AI/ML AWG', className: 'chip-2', duration: 6.1 },
  { text: '🏆 3rd Place · Data Mining', className: 'chip-3', duration: 5.6 },
]

export default function Hero() {
  const typed = useTyping(profile.roles)
  const reduce = useReducedMotion()
  const openLightbox = useLightbox()

  return (
    <header className="hero" id="home">
      <div className="hero-bg" aria-hidden="true">
        <span className="blob blob-1" />
        <span className="blob blob-2" />
        <span className="blob blob-3" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-inner">
        <motion.div className="hero-text" variants={container} initial="hidden" animate="show">
          <motion.span className="pill" variants={item}>
            <MapPinIcon width={14} height={14} />
            {profile.location}
          </motion.span>

          <motion.h1 variants={item}>
            Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
          </motion.h1>

          <motion.p className="hero-role" variants={item} aria-label={profile.roles.join(', ')}>
            <span aria-hidden="true">{typed}</span>
            <span className="caret" aria-hidden="true" />
          </motion.p>

          <motion.p className="hero-lead" variants={item}>
            Informatics Engineering graduate building end-to-end machine learning, computer
            vision, and data-driven products with real-world impact.
          </motion.p>

          <motion.div className="hero-cta" variants={item}>
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowDown width={18} height={18} />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact Me
            </a>
          </motion.div>

          <motion.div className="hero-social" variants={item}>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="social-btn">
              <GithubIcon />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-btn">
              <LinkedinIcon />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="social-btn">
              <MailIcon />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-photo"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="photo-ring">
            <button
              type="button"
              className="photo-btn"
              onClick={() => openLightbox([{ src: profile.photo, alt: profile.name }], 0)}
              aria-label="Preview profile photo"
            >
              <img src={profile.photo} alt={profile.name} />
            </button>
          </div>

          {chips.map((chip) => (
            <motion.div
              key={chip.text}
              className={`float-chip ${chip.className}`}
              animate={reduce ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: chip.duration, repeat: Infinity, ease: 'easeInOut' }}
            >
              {chip.text}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to About section">
        <span className="scroll-cue-dot" />
      </a>
    </header>
  )
}
