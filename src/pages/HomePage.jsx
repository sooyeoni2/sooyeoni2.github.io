import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import ProjectsPreview from '../components/ProjectsPreview'
import Contact from '../components/Contact'

export default function HomePage() {
  return (
    <>
      <Navbar />
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
