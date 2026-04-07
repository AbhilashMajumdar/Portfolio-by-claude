import styles from './Projects.module.css'

const projects = [
  {
    title: 'Movie Booking Application',
    period: 'Jan 2026 – Feb 2026',
    stack: ['MERN Stack', 'JWT', 'REST API', 'MongoDB'],
    emoji: '🎬',
    color: '#f59e0b',
    description:
      'A high-concurrency movie ticket booking platform with JWT-based authentication and an Admin Dashboard for managing movie listings and theater schedules.',
    bullets: [
      'Engineered JWT-based authentication ensuring 100% data accuracy and maximum efficiency in real-time ticket booking flows.',
      'Architected Admin Dashboard with CRUD operations managing 20+ movie listings and theater schedules with 100% data consistency.',
    ],
    highlights: ['High Concurrency', 'Real-time Booking', 'Admin Dashboard'],
  },
  {
    title: 'Weather Forecast Portal',
    period: 'Dec 2025 – Jan 2026',
    stack: ['MERN Stack', 'OpenWeatherMap API', 'Nodemailer', 'OTP Auth'],
    emoji: '🌤',
    color: '#06b6d4',
    description:
      'A full-featured MERN weather platform integrating the OpenWeatherMap API with real-time data, optimized fetching, and a secure OTP-based auth system.',
    bullets: [
      'Reduced API response latency by 20% via optimized asynchronous fetching, ensuring 100% data accuracy for real-time global weather metrics.',
      'Integrated secure authentication using Nodemailer and MongoDB for robust OTP-based account recovery and registration workflows.',
    ],
    highlights: ['Real-time Data', '20% Faster API', 'OTP Auth'],
  },
  {
    title: 'Online Job Portal',
    period: 'Feb 2022 – Jul 2022',
    stack: ['MERN Stack', 'JWT', 'Bcrypt', 'Redux', 'MongoDB Atlas'],
    emoji: '💼',
    color: '#10b981',
    description:
      'A full-cycle MERN stack job portal featuring JWT authentication, Bcrypt hashing, and Redux state management for real-time job listings and applications.',
    bullets: [
      'Built full-cycle MERN platform with JWT-based authentication and Bcrypt hashing ensuring 100% secure data handling.',
      'Optimized API response latency by 20% using Node.js asynchronous middleware and developed 15+ reusable React components.',
    ],
    highlights: ['JWT + Bcrypt', 'Redux State', '30% Dev Time Reduction'],
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">What I've Built</p>
        <h2 className="section-title">Featured <span>Projects</span></h2>
        <div className="divider" />

        <div className={styles.grid}>
          {projects.map((p) => (
            <div key={p.title} className={`card ${styles.project}`}>
              <div className={styles.header}>
                <div className={styles.emojiWrap} style={{ '--c': p.color }}>
                  {p.emoji}
                </div>
                <div className={styles.period}>{p.period}</div>
              </div>

              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.desc}>{p.description}</p>

              <ul className={styles.bullets}>
                {p.bullets.map((b, i) => (
                  <li key={i} className={styles.bullet}>
                    <span className={styles.check}>✓</span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className={styles.footer}>
                <div className={styles.highlights}>
                  {p.highlights.map(h => (
                    <span key={h} className={styles.highlight} style={{ '--c': p.color }}>{h}</span>
                  ))}
                </div>
                <div className={styles.stack}>
                  {p.stack.map(s => <span key={s} className="badge">{s}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
