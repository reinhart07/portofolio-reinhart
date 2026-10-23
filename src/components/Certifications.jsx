import { certifications } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { ArrowUpRight, AwardIcon } from './Icons'

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionHeading index="06" eyebrow="Certifications" title="Certifications & Training" />

        <div className="grid grid-2">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) * 0.08} className="card cert-card">
              <span className="cert-icon">
                <AwardIcon />
              </span>
              <div className="cert-body">
                <p className="date">Issued: {c.issued}</p>
                <h3>{c.title}</h3>
                {c.subtitle && <p className="muted">{c.subtitle}</p>}
                <a href={c.link} target="_blank" rel="noreferrer" className="link-arrow">
                  View Certificate <ArrowUpRight />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
