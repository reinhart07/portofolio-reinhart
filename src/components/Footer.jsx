import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. All Rights Reserved.
        </p>
        <p className="muted">{profile.location} · Built with React &amp; Framer Motion</p>
      </div>
    </footer>
  )
}
