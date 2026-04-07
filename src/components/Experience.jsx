import styles from './Experience.module.css'

const jobs = [
  {
    title: 'Associate Software Engineer',
    company: 'Cognizant',
    location: 'Kolkata, WB',
    period: 'August 2022 – Present',
    type: 'Full-time',
    tags: ['React JS', 'Redux', 'Agile'],
    current: true,
    bullets: [
      'Spearheaded React.js front-ends for Verizon, improving UI responsiveness and reducing page load times by 20%.',
      'Delivered 50+ user stories on schedule while resolving 150+ critical & blocker production defects.',
      'Mentored team members and participated in code reviews to ensure high-quality modular architecture.',
      'Collaborated with cross-functional teams on technical requirements and Agile cycles to optimize delivery.',
    ],
  },
  {
    title: 'MERN Stack Developer Intern',
    company: 'Cognizant (Remote)',
    location: 'Remote',
    period: 'February 2022 – July 2022',
    type: 'Internship',
    tags: ['MERN Stack', 'RESTful APIs', 'Redux', 'MongoDB Atlas'],
    current: false,
    bullets: [
      'Engineered a full-cycle MERN stack Online Job Portal featuring JWT-based authentication and Bcrypt hashing, ensuring 100% secure data handling and real-time synchronization via Redux state management.',
      'Optimized API response latency by 20% using Node.js asynchronous middleware & Express.js with MongoDB.',
      'Developed 15+ Reusable React Components, resulting in a 30% reduction in front-end development time.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <p className="section-label">Where I've Worked</p>
        <h2 className="section-title">Work <span>Experience</span></h2>
        <div className="divider" />

        <div className={styles.timeline}>
          {jobs.map((job, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.connector}>
                <div className={`${styles.dot} ${job.current ? styles.activeDot : ''}`} />
                {i < jobs.length - 1 && <div className={styles.line} />}
              </div>

              <div className={`card ${styles.card}`}>
                <div className={styles.cardTop}>
                  <div>
                    <h3 className={styles.jobTitle}>{job.title}</h3>
                    <div className={styles.company}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                      </svg>
                      {job.company}
                      <span className={styles.sep}>·</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                      {job.location}
                    </div>
                  </div>
                  <div className={styles.right}>
                    <div className={styles.period}>{job.period}</div>
                    <span className={`${styles.typeBadge} ${job.current ? styles.current : ''}`}>{job.type}</span>
                  </div>
                </div>

                <div className={styles.tags}>
                  {job.tags.map(t => <span key={t} className="badge">{t}</span>)}
                </div>

                <ul className={styles.bullets}>
                  {job.bullets.map((b, j) => (
                    <li key={j} className={styles.bullet}>
                      <span className={styles.bulletDot} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
