import { useState } from 'react'
import styles from './Skills.module.css'
import RansomTitle from './RansomTitle'

const TABS = [
  {
    label: 'Language',
    items: [
      { name: 'Dart' },
      { name: 'Java' },
      { name: 'JavaScript' },
      { name: 'Python' },
      { name: 'SQL' },
    ],
  },
  {
    label: 'Framework',
    items: [
      { name: 'Flutter' },
      { name: 'React' },
      { name: 'Spring Boot' },
    ],
  },
  {
    label: 'Tools',
    items: [
      { name: 'Git' },
      { name: 'Docker' },
      { name: 'Figma' },
      { name: 'Jira' },
    ],
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
          {TABS[active].items.map(item => (
            <div key={item.name} className={styles.item}>
              <span className={styles.itemName}>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
