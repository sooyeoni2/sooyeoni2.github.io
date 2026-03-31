import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>sooya.dev</Link>
        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {NAV_ITEMS.map(({ label, href, to }) => (
            <li key={label}>
              {to
                ? <Link to={to} onClick={() => setMenuOpen(false)}>{label}</Link>
                : <a href={href} onClick={() => setMenuOpen(false)}>{label}</a>
              }
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
