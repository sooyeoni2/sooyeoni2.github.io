import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'

const TABS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const isHome = location.pathname === '/'

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>sooya.dev</Link>
        <ul className={`${styles.tabs} ${menuOpen ? styles.open : ''}`}>
          {TABS.map(({ label, href, to }) => (
            <li key={label}>
              {to ? (
                <Link
                  to={to}
                  className={`${styles.tab} ${location.pathname === to ? styles.activeTab : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              ) : (
                <a
                  href={isHome ? href : '/'}
                  className={styles.tab}
                  onClick={(e) => {
                    setMenuOpen(false)
                    if (!isHome) {
                      e.preventDefault()
                      navigate('/' + href)
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
