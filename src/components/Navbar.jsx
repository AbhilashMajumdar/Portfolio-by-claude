import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={`${styles.nav} container`}>
        <a href="#hero" className={styles.logo} onClick={(e) => handleNav(e, '#hero')}>
          <span className={styles.logoAngle}>&lt;</span>
          AM
          <span className={styles.logoAngle}>/&gt;</span>
        </a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {links.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={styles.link} onClick={(e) => handleNav(e, href)}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="mailto:abhilashmajumdar306@gmail.com" className="btn btn-primary" style={{ padding: '8px 18px', fontSize: '13px' }}>
              Hire Me
            </a>
          </li>
        </ul>

        <button
          className={`${styles.burger} ${menuOpen ? styles.active : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>
    </header>
  )
}
