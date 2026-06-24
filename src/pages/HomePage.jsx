import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import ContactBar from '../components/ContactBar'
import Skills from '../components/Skills'
import ProjectsPreview from '../components/ProjectsPreview'
import IntroScreen from '../components/IntroScreen'

let introDone = false

export default function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location.state])

  const [showIntro, setShowIntro] = useState(() => {
    if (introDone) return false
    const navEntry = performance.getEntriesByType('navigation')[0]
    const loadedPath = navEntry ? new URL(navEntry.name).pathname : '/'
    return loadedPath === '/' || loadedPath === '/index.html'
  })

  return (
    <>
      {showIntro && <IntroScreen onEnter={() => { introDone = true; setShowIntro(false) }} />}
      <main>
        <Hero />
        <ContactBar />
        <Skills />
        <ProjectsPreview />
      </main>
      <footer style={{
        textAlign: 'center',
        padding: '24px',
        color: '#A8A9A9',
        fontSize: '0.82rem',
        backgroundColor: '#FFF8F0',
        backgroundImage: 'radial-gradient(circle, #e0c9b0 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        borderTop: 'none'
      }}>
        © 2026 김수연. All rights reserved.
      </footer>
    </>
  )
}
