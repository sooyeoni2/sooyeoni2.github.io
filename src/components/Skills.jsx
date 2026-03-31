import styles from './Skills.module.css'

const SKILLS = [
  {
    category: '📱 Mobile',
    items: ['Flutter', 'Dart', 'Android', 'iOS'],
    color: 'blue',
  },
  {
    category: '🔧 상태관리 & 아키텍처',
    items: ['Provider', 'Riverpod', 'GetX', 'MVC', 'MVVM'],
    color: 'purple',
  },
  {
    category: '🌐 네트워크 & 통신',
    items: ['REST API', 'WebSocket', 'FCM', 'Dio', 'http'],
    color: 'teal',
  },
  {
    category: '🛠 도구 & 협업',
    items: ['Git', 'GitHub', 'Figma', 'Jira', 'GitLab'],
    color: 'orange',
  },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Skills</h2>
        <p className={styles.sub}>사용할 수 있는 기술 스택입니다</p>
        <div className={styles.grid}>
          {SKILLS.map(({ category, items, color }) => (
            <div key={category} className={`${styles.card} ${styles[color]}`}>
              <h3 className={styles.cardTitle}>{category}</h3>
              <div className={styles.tags}>
                {items.map(item => (
                  <span key={item} className={styles.tag}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
