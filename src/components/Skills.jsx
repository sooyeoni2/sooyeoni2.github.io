import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Skills.module.css'
import RansomTitle from './RansomTitle'

const TABS = [
  {
    label: 'Language',
    items: ['Dart', 'Java', 'JavaScript', 'Python', 'SQL', 'TypeScript'],
  },
  {
    label: 'Framework',
    items: ['Flutter', 'React', 'React Native', 'Vue', 'Django', 'Spring Boot'],
  },
  {
    label: 'Tools',
    items: ['Git', 'Docker', 'Figma', 'Jira'],
  },
]

export default function Skills() {
  const [active, setActive] = useState(0)

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}><RansomTitle text="Skills" cutout seed={0} /></h2>
          <div className={styles.tabs}>
            {TABS.map((tab, i) => (
              <button
                key={tab.label}
                className={`${styles.tab} ${active === i ? styles.activeTab : ''}`}
                onClick={() => setActive(i)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.content}>
          {TABS[active].items.map(name => (
            <div key={name} className={styles.item}>
              <span className={styles.itemName}>{name}</span>
            </div>
          ))}
        </div>

        <Link to="/skills" className={styles.detailBtn}>자세히 보기</Link>
      </div>
    </section>
  )
}
