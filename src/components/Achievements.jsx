import styles from './Achievements.module.css'

const items = [
  {
    icon: '🏆',
    title: 'Advanced React Certificate',
    issuer: 'Coursera',
    year: '2025',
    desc: 'Advanced concepts in React including hooks, performance optimization, and modern patterns.',
  },
  {
    icon: '📜',
    title: 'Programming with JavaScript Certificate',
    issuer: 'Coursera',
    year: '2025',
    desc: 'Comprehensive JavaScript course covering ES6+, async patterns, and modern web APIs.',
  },
  {
    icon: '⭐',
    title: 'Campus Placement — Salesforce Developer',
    issuer: '221 B Baker Street',
    year: '2022',
    desc: 'Selected as a Salesforce Developer through competitive campus placement drive.',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className={styles.section}>
      <div className="container">
        <p className="section-label">Recognition</p>
        <h2 className="section-title">Achievements & <span>Certifications</span></h2>
        <div className="divider" />

        <div className={styles.grid}>
          {items.map((item) => (
            <div key={item.title} className={`card ${styles.card}`}>
              <div className={styles.iconWrap}>{item.icon}</div>
              <div className={styles.body}>
                <div className={styles.meta}>
                  <span className={styles.issuer}>{item.issuer}</span>
                  <span className={styles.year}>{item.year}</span>
                </div>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
