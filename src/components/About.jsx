import { about, achievements, certifications, experience, profile, projects } from '../data/portfolio'
import CountUp from './CountUp'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const current = experience.find((e) => e.current)

const stats = [
  { label: 'GPA / 4.00', value: profile.gpa, decimals: 2 },
  { label: 'Projects', value: projects.length, suffix: '+' },
  { label: 'Achievements', value: achievements.length },
  { label: 'Certifications', value: certifications.length },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading index="01" eyebrow="About" title="About Me" />

        <div className="about-grid">
          <Reveal className="about-text">
            {about.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>

          <div className="about-side">
            <div className="stats-grid">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.08} className="card stat-card">
                  <strong className="stat-value gradient-text">
                    <CountUp to={s.value} decimals={s.decimals} suffix={s.suffix} />
                  </strong>
                  <span className="stat-label">{s.label}</span>
                </Reveal>
              ))}
            </div>

            {current && (
              <Reveal delay={0.35} className="card now-card">
                <span className="now-badge">
                  <span className="dot pulse" /> Currently
                </span>
                <h3>{current.role}</h3>
                <p>{current.org}</p>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
