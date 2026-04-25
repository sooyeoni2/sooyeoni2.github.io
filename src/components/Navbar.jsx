import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'

const TABS = [
  { label: 'Home', href: '#about', section: 'about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Projects', to: '/projects' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()

  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>sooya.dev</Link>
        <ul className={`${styles.tabs} ${menuOpen ? styles.open : ''}`}>
          {TABS.map(({ label, href, to, section }) => (
            <li key={label}>
              {to ? (
                <Link
                  to={to}
                  className={`${styles.tab} ${location.pathname === to ? styles.activeTab : ''}`}
                  onClick={() => { setMenuOpen(false); setActiveSection(null) }}
                >
                  {label}
                </Link>
              ) : (
                <a
                  href={isHome ? href : '/'}
                  className={`${styles.tab} ${isHome && activeSection === section ? styles.activeTab : ''}`}
                  onClick={(e) => {
                    setMenuOpen(false)
                    setActiveSection(section)
                    if (!isHome) {
                      e.preventDefault()
                      navigate('/', { state: { scrollTo: href.replace('#', '') } })
                    }
                  }}
                >
                  {label}
                </a>
              )}
            </li>
          ))}
        </ul>
        <button className={styles.hamburger} onClick={() => setMenuOpen(v => !v)} aria-label="메뉴">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
