import { experience } from '../data/portfolio'
import { ZoomImage } from './Lightbox'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const gallery = experience.map((e) => ({ src: e.image, alt: `${e.role} — ${e.org}` }))

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading index="03" eyebrow="Experience" title="Experience">
          Internships, research, and leadership programs.
        </SectionHeading>

        <ol className="timeline">
          {experience.map((e, i) => (
            <Reveal as="li" key={e.org} delay={0.05} className="timeline-item">
              <span className={`timeline-dot ${e.current ? 'is-current' : ''}`} aria-hidden="true" />
              <div className="card exp-card">
                <ZoomImage items={gallery} index={i} className="exp-img" />
                <div className="exp-body">
                  <p className="date">
                    {e.period}
                    {e.current && <span className="badge badge-live">Current</span>}
                  </p>
                  <h3>{e.role}</h3>
                  <p className="exp-org">{e.org}</p>
                  <ul className="check-list">
                    {e.points.map((p) => (
                      <li key={p.slice(0, 30)}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
