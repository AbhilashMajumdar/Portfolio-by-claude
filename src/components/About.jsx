import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <p className="section-label">Who I Am</p>
            <h2 className="section-title">
              Passionate about building <span>great products</span>
            </h2>
            <div className="divider" />

            <p className={styles.bio}>
              I'm a <strong>Full Stack Developer</strong> with 3.5 years of professional
              experience at <strong>Cognizant</strong>, where I've been building and maintaining
              enterprise-grade web applications for clients like <strong>Verizon</strong>.
            </p>
            <p className={styles.bio}>
              My core expertise lies in the <strong>MERN stack</strong> — from crafting
              pixel-perfect, responsive React UIs to engineering scalable Node.js/Express
              back-ends with MongoDB. I thrive in Agile environments and care deeply about
              code quality, mentoring, and continuous improvement.
            </p>

            <div className={styles.highlights}>
              {[
                { icon: '🎓', label: 'MCA from Jadavpur University', sub: 'CGPA: 8.94 / 10' },
                { icon: '📍', label: 'Kolkata, West Bengal', sub: 'India' },
                { icon: '🚀', label: 'Open to new roles', sub: 'Full-time / Remote' },
              ].map(({ icon, label, sub }) => (
                <div key={label} className={styles.highlight}>
                  <span className={styles.hIcon}>{icon}</span>
                  <div>
                    <div className={styles.hLabel}>{label}</div>
                    <div className={styles.hSub}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.card}>
              <div className={styles.cardInner}>
                <div className={styles.avatar}>AM</div>
                <div className={styles.info}>
                  <div className={styles.infoName}>Abhilash Majumdar</div>
                  <div className={styles.infoRole}>Full Stack Developer</div>
                  <div className={styles.infoCo}>@ Cognizant</div>
                </div>
              </div>

              <div className={styles.chips}>
                {['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Redux', 'REST API'].map(t => (
                  <span key={t} className="badge">{t}</span>
                ))}
              </div>

              <div className={styles.contactLinks}>
                <a href="mailto:abhilashmajumdar306@gmail.com" className={styles.contactItem}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  abhilashmajumdar306@gmail.com
                </a>
                <a href="tel:+917872909202" className={styles.contactItem}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l.9-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  +91-7872909202
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
