import { useState, useRef } from 'react'
import styles from './Skills.module.css'
import RansomTitle from './RansomTitle'

const TABS = [
  {
    label: 'Language',
    items: [
      { name: 'Dart', level: 4, desc: 'Flutter 앱 개발에 주력 언어로 사용. 비동기 처리와 상태관리에 능숙하다.' },
      { name: 'Java', level: 4, desc: '재활용성이 높은 코드 작성에 능숙하며, 대다수의 프로젝트에 적용하였다.' },
      { name: 'JavaScript', level: 3, desc: 'React, Vue 등 프레임워크와 함께 프론트엔드 개발에 활용하였다.' },
      { name: 'Python', level: 3, desc: '기초 문법부터 자료구조를 강의하였으며, 웹 프레임워크 및 머신러닝 프로젝트에 적용하였다.' },
      { name: 'SQL', level: 3, desc: '테이블 사이의 관계를 고려해 설계할 수 있으며, 원하는 데이터를 위한 쿼리문을 작성할 수 있다.' },
    ],
  },
  {
    label: 'Framework',
    items: [
      { name: 'Flutter', level: 4, desc: 'iOS/Android 크로스플랫폼 앱 개발. 상태관리(Provider, Riverpod) 및 REST API 연동에 능숙하다.' },
      { name: 'React', level: 3, desc: 'Hook 기반 컴포넌트 설계 및 React Router, CSS Modules를 활용한 SPA 개발 경험이 있다.' },
      { name: 'Spring Boot', level: 3, desc: 'MVC 구조를 활용한 구조를 설계할 수 있으며, Swagger, JPA 등 효과적인 라이브러리를 능숙하게 사용할 수 있다.' },
    ],
  },
  {
    label: 'Tools',
    items: [
      { name: 'Git', level: 4, desc: 'Git Flow 전략을 활용한 브랜치 관리 및 협업 경험이 있다.' },
      { name: 'Docker', level: 2, desc: '컨테이너 기반 배포 환경 구성 및 docker-compose를 활용한 서비스 구성 경험이 있다.' },
      { name: 'Figma', level: 3, desc: '와이어프레임 및 프로토타입 제작, 디자인 시스템 구성 경험이 있다.' },
      { name: 'Jira', level: 3, desc: 'Scrum 기반 스프린트 관리 및 이슈 트래킹에 활용하였다.' },
    ],
  },
]

const MAX_LEVEL = 5

export default function Skills() {
  const [active, setActive] = useState(0)
  const [selected, setSelected] = useState(null)
  const contentRef = useRef(null)

  const handleTabChange = (i) => {
    setActive(i)
    setSelected(null)
  }

  const handleItem = (name) => {
    setSelected(prev => prev === name ? null : name)
  }

  const selectedItem = TABS[active].items.find(i => i.name === selected)

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
                onClick={() => handleTabChange(i)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.content} ref={contentRef}>
          {TABS[active].items.map(item => (
            <div
              key={item.name}
              className={`${styles.item} ${selected === item.name ? styles.itemActive : ''}`}
              onClick={() => handleItem(item.name)}
            >
              <span className={styles.itemName}>{item.name}</span>
            </div>
          ))}
        </div>

        {selectedItem && (
          <>
          <svg width="0" height="0" style={{position:'absolute'}}>
            <filter id="crumple">
              <feTurbulence type="fractalNoise" baseFrequency="0.02 0.03" numOctaves="4" seed="5" result="noise"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G"/>
            </filter>
          </svg>
          <div className={styles.detail}>
            <div className={styles.detailTape} />
            <div className={styles.detailTop}>
              <span className={styles.detailName}>{selectedItem.name}</span>
              <div className={styles.levelBar}>
                {Array.from({ length: MAX_LEVEL }).map((_, i) => (
                  <span
                    key={i}
                    className={`${styles.levelDot} ${i < selectedItem.level ? styles.levelDotFilled : ''}`}
                  />
                ))}
                <span className={styles.levelText}>{selectedItem.level * 20}%</span>
              </div>
            </div>
            <p className={styles.detailDesc}>{selectedItem.desc}</p>
          </div>
          </>
        )}
      </div>
    </section>
  )
}
