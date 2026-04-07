import styles from './Skills.module.css'

const categories = [
  {
    icon: '⚡',
    title: 'Programming & Core Tech',
    skills: [
      { name: 'JavaScript', level: 92 },
      { name: 'React.js', level: 90 },
      { name: 'Redux', level: 85 },
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 83 },
      { name: 'MongoDB', level: 80 },
    ],
  },
  {
    icon: '🎨',
    title: 'UI & Styling',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 88 },
      { name: 'Bootstrap', level: 85 },
      { name: 'Tailwind CSS', level: 82 },
    ],
  },
  {
    icon: '🛠',
    title: 'Development Tools',
    skills: [
      { name: 'Git', level: 88 },
      { name: 'Postman', level: 85 },
      { name: 'VS Code', level: 95 },
      { name: 'MongoDB Atlas', level: 80 },
      { name: 'Jira', level: 82 },
    ],
  },
]

function SkillBar({ name, level }) {
  return (
    <div className={styles.skillItem}>
      <div className={styles.skillHeader}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillLevel}>{level}%</span>
      </div>
      <div className={styles.barTrack}>
        <div
          className={styles.barFill}
          style={{ '--target': `${level}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="section-label">What I Know</p>
        <h2 className="section-title">Technical <span>Skills</span></h2>
        <div className="divider" />

        <div className={styles.grid}>
          {categories.map(({ icon, title, skills }) => (
            <div key={title} className={`card ${styles.category}`}>
              <div className={styles.catHeader}>
                <span className={styles.catIcon}>{icon}</span>
                <h3 className={styles.catTitle}>{title}</h3>
              </div>
              <div className={styles.skills}>
                {skills.map(skill => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.techCloud}>
          {['JWT', 'REST API', 'Agile', 'MERN', 'Bcrypt', 'Redux', 'Nodemailer', 'OTP Auth', 'CRUD', 'Responsive Design'].map(t => (
            <span key={t} className="badge">{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
