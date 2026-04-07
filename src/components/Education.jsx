import styles from './Education.module.css'

const degrees = [
  {
    degree: 'Master of Computer Applications',
    short: 'MCA',
    institution: 'Jadavpur University, Kolkata',
    year: 'Graduated 2022',
    cgpa: '8.94 / 10',
    emoji: '🎓',
    highlight: true,
  },
  {
    degree: 'Bachelor of Computer Science (Honours)',
    short: 'B.Sc CS',
    institution: 'Mankar College',
    year: 'Graduated 2019',
    cgpa: '9.08 / 10',
    emoji: '📚',
    highlight: false,
  },
]

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <p className="section-label">My Background</p>
        <h2 className="section-title">Academic <span>Education</span></h2>
        <div className="divider" />

        <div className={styles.grid}>
          {degrees.map((d) => (
            <div key={d.degree} className={`card ${styles.card} ${d.highlight ? styles.featured : ''}`}>
              {d.highlight && <div className={styles.featuredTag}>Highest Qualification</div>}

              <div className={styles.top}>
                <div className={styles.emblem}>{d.short}</div>
                <div className={styles.yearBadge}>{d.year}</div>
              </div>

              <h3 className={styles.degree}>{d.degree}</h3>
              <p className={styles.institution}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9,22 9,12 15,12 15,22"/>
                </svg>
                {d.institution}
              </p>

              <div className={styles.cgpaRow}>
                <span className={styles.cgpaLabel}>CGPA</span>
                <span className={styles.cgpaVal}>{d.cgpa}</span>
              </div>

              <div className={styles.cgpaBar}>
                <div
                  className={styles.cgpaFill}
                  style={{ '--pct': `${(parseFloat(d.cgpa) / 10) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
