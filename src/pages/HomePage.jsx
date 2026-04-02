import { useState } from 'react'
import Hero from '../components/Hero'

let introDone = false

import Skills from '../components/Skills'
import ProjectsPreview from '../components/ProjectsPreview'
import Contact from '../components/Contact'
import IntroScreen from '../components/IntroScreen'

export default function HomePage() {
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
        <Skills />
        <ProjectsPreview />
        <Contact />
      </main>
      <footer style={{
        textAlign: 'center',
        padding: '24px',
        color: '#A8A9A9',
        fontSize: '0.82rem',
        background: 'white',
        borderTop: '1px solid #E8EAED'
      }}>
        © 2025 김수연. All rights reserved.
      </footer>
    </>
  )
}
