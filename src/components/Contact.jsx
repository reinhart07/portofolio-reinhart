import { motion } from 'framer-motion'
import { profile } from '../data/portfolio'
import Reveal from './Reveal'
import { GithubIcon, LinkedinIcon, MailIcon, MapPinIcon, PhoneIcon } from './Icons'

const links = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: <MailIcon /> },
  { label: 'LinkedIn', value: 'reinhartjensrobert', href: profile.linkedin, icon: <LinkedinIcon />, external: true },
  { label: 'GitHub', value: 'reinhart07', href: profile.github, icon: <GithubIcon />, external: true },
  { label: 'Phone', value: profile.phoneLabel, href: `tel:${profile.phoneHref}`, icon: <PhoneIcon /> },
]

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal className="contact-card">
          <div className="contact-glow" aria-hidden="true" />
          <span className="eyebrow">
            <span className="eyebrow-num">08</span>Contact
          </span>
          <h2 className="contact-title">
            Let&apos;s build something <span className="gradient-text">data-driven</span> together.
          </h2>
          <p className="contact-sub">
            Open to discussing data science, machine learning, and AI projects. Feel free to reach
            out through any of these.
          </p>

          <ul className="contact-links">
            {links.map((l) => (
              <motion.li key={l.label} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <a
                  href={l.href}
                  className="contact-link"
                  {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  <span className="contact-link-icon">{l.icon}</span>
                  <span>
                    <small>{l.label}</small>
                    <strong>{l.value}</strong>
                  </span>
                </a>
              </motion.li>
            ))}
          </ul>

          <p className="contact-loc">
            <MapPinIcon width={16} height={16} /> {profile.location}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
