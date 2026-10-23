import { education } from '../data/portfolio'
import { ZoomImage } from './Lightbox'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const gallery = education.map((e) => ({ src: e.image, alt: e.school }))

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading index="02" eyebrow="Education" title="Education" />

        <div className="grid grid-2">
          {education.map((e, i) => (
            <Reveal key={e.school} delay={i * 0.1} className="card edu-card">
              <ZoomImage items={gallery} index={i} className="card-img" />
              <div className="card-body">
                <p className="date">
                  {e.period} · {e.place}
                </p>
                <h3>{e.school}</h3>
                <p className="edu-degree">{e.degree}</p>
                <p className="muted">{e.detail}</p>
                {e.gpa && <span className="badge">{e.gpa}</span>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
