import Reveal from './Reveal'

export default function SectionHeading({ index, eyebrow, title, children }) {
  return (
    <Reveal className="section-head">
      <span className="eyebrow">
        <span className="eyebrow-num">{index}</span>
        {eyebrow}
      </span>
      <h2 className="section-title">{title}</h2>
      {children && <p className="section-sub">{children}</p>}
    </Reveal>
  )
}
