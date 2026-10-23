import About from './components/About'
import Achievements from './components/Achievements'
import BackToTop from './components/BackToTop'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import CursorGlow from './components/CursorGlow'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import { LightboxProvider } from './components/Lightbox'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import ScrollProgress from './components/ScrollProgress'
import Skills from './components/Skills'
import useTheme from './hooks/useTheme'

export default function App() {
  const [theme, toggleTheme] = useTheme()

  return (
    <LightboxProvider>
      <ScrollProgress />
      <CursorGlow />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <Hero />
      <main>
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </LightboxProvider>
  )
}
