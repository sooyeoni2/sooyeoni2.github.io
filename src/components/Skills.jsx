import { Link } from 'react-router-dom'
import styles from './Skills.module.css'
import RansomTitle from './RansomTitle'
import useInView from '../hooks/useInView'

const I = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

const SKILLS = [
  { name: 'Python',       icon: `${I}/python/python-original.svg`         },
  { name: 'JavaScript',   icon: `${I}/javascript/javascript-original.svg` },
  { name: 'TypeScript',   icon: `${I}/typescript/typescript-original.svg` },
  { name: 'Dart',         icon: `${I}/dart/dart-original.svg`             },
  { name: 'Java',         icon: `${I}/java/java-original.svg`             },
  { name: 'SQL',          icon: `${I}/mysql/mysql-original.svg`           },
  { name: 'Vue',          icon: `${I}/vuejs/vuejs-original.svg`           },
  { name: 'Django',       icon: `${I}/django/django-plain.svg`            },
  { name: 'Flutter',      icon: `${I}/flutter/flutter-original.svg`       },
  { name: 'React',        icon: `${I}/react/react-original.svg`           },
  { name: 'React Native', icon: `${I}/react/react-original.svg`           },
  { name: 'Spring',       icon: `${I}/spring/spring-original.svg`         },
  { name: 'Git',          icon: `${I}/git/git-original.svg`               },
  { name: 'Figma',        icon: `${I}/figma/figma-original.svg`           },
  { name: 'Jira',         icon: `${I}/jira/jira-original.svg`             },
  { name: 'Docker',       icon: `${I}/docker/docker-original.svg`         },
]

export default function Skills() {
  const [sectionRef, sectionInView] = useInView(0.1)

  return (
    <section
      id="skills"
      className={styles.section}
      ref={sectionRef}
    >
      <div className={styles.inner}>
        <div
          className={styles.header}
          style={{
            opacity: sectionInView ? 1 : 0,
            transform: sectionInView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <h2 className={styles.title}><RansomTitle text="Skills" cutout seed={0} /></h2>
        </div>

        <div className={styles.iconGrid}>
          {SKILLS.map((skill, i) => (
            <div
              key={skill.name}
              style={{
                opacity: sectionInView ? 1 : 0,
                transform: sectionInView ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ease ${0.15 + i * 0.04}s, transform 0.5s ease ${0.15 + i * 0.04}s`,
              }}
            >
              <div
                className={styles.iconItem}
                style={{ animationDelay: `${(i * 0.2) % 2}s` }}
              >
                <img src={skill.icon} className={styles.icon} alt={skill.name} />
                <span className={styles.iconName}>{skill.name}</span>
              </div>
            </div>
          ))}
        </div>

        <Link
          to="/skills"
          className={styles.detailBtn}
          style={{
            opacity: sectionInView ? 1 : 0,
            transform: sectionInView ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.5s ease 0.8s, transform 0.5s ease 0.8s',
          }}
        >자세히 보기</Link>
      </div>
    </section>
  )
}
