import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logo}>
              <span className={styles.angle}>&lt;</span>AM<span className={styles.angle}>/&gt;</span>
            </span>
            <p className={styles.tagline}>
              Building the web, one component at a time.
            </p>
          </div>

          <div className={styles.cta}>
            <p className={styles.ctaText}>Got a project in mind?</p>
            <a href="mailto:abhilashmajumdar306@gmail.com" className="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Let's Talk
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>© {year} Abhilash Majumdar. All rights reserved.</p>
          <div className={styles.links}>
            {[
              { label: 'About', href: '#about' },
              { label: 'Projects', href: '#projects' },
              { label: 'Experience', href: '#experience' },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={styles.link}
                onClick={(e) => { e.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
