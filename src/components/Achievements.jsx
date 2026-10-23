import { achievements } from '../data/portfolio'
import { ZoomImage } from './Lightbox'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import TiltCard from './TiltCard'

const gallery = achievements.map((a) => ({ src: a.image, alt: a.title }))

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <SectionHeading index="07" eyebrow="Achievements" title="Achievements">
          Competitions, hackathons, and programs. Click an image to see the certificate.
        </SectionHeading>

        <div className="grid grid-3">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={(i % 3) * 0.08}>
              <TiltCard className="card glow-card achievement-card" max={5}>
                <ZoomImage items={gallery} index={i} className="card-img" />
                <div className="card-body">
                  <h3>
                    <span aria-hidden="true">{a.emoji} </span>
                    {a.title}
                  </h3>
                  <p className="card-desc">{a.description}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
