import { useState, useCallback } from 'react'
import styles from './SkillsPage.module.css'

const I = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

const TECHS = [
  { id: 'js',     name: 'JavaScript', icon: `${I}/javascript/javascript-original.svg`, category: 'Language',  hearts: 3, bg: 'linear-gradient(145deg,#f7e020,#d4b800)', shadow: '#a88e00', desc: 'React, Vue 등 프레임워크와 함께 프론트엔드 개발에 활용하였다.' },
  { id: 'python', name: 'Python',     icon: `${I}/python/python-original.svg`,         category: 'Language',  hearts: 3, bg: 'linear-gradient(145deg,#5a9fd4,#3070a0)', shadow: '#1e5080', desc: '기초 문법부터 자료구조를 강의하였으며, 웹 프레임워크 및 머신러닝 프로젝트에 적용하였다.' },
  { id: 'java',   name: 'Java',       icon: `${I}/java/java-original.svg`,             category: 'Language',  hearts: 4, bg: 'linear-gradient(145deg,#f09030,#c06010)', shadow: '#904010', desc: '재활용성이 높은 코드 작성에 능숙하며, 대다수의 프로젝트에 적용하였다.' },
  { id: 'dart',   name: 'Dart',       icon: `${I}/dart/dart-original.svg`,             category: 'Language',  hearts: 4, bg: 'linear-gradient(145deg,#30a0e0,#1068b8)', shadow: '#084888', desc: 'Flutter 앱 개발에 주력 언어로 사용. 비동기 처리와 상태관리에 능숙하다.' },
  { id: 'sql',    name: 'SQL',        icon: `${I}/mysql/mysql-original.svg`,           category: 'Language',  hearts: 3, bg: 'linear-gradient(145deg,#e83030,#b01010)', shadow: '#880000', desc: '테이블 사이의 관계를 고려해 설계할 수 있으며, 원하는 데이터를 위한 쿼리문을 작성할 수 있다.' },
  { id: 'flutter',name: 'Flutter',    icon: `${I}/flutter/flutter-original.svg`,       category: 'Framework', hearts: 4, bg: 'linear-gradient(145deg,#54c5f8,#1890d8)', shadow: '#0868a8', desc: 'iOS/Android 크로스플랫폼 앱 개발. 상태관리(Provider, Riverpod) 및 REST API 연동에 능숙하다.' },
  { id: 'react',  name: 'React',      icon: `${I}/react/react-original.svg`,           category: 'Framework', hearts: 3, bg: 'linear-gradient(145deg,#61dafb,#28b0d8)', shadow: '#1888b0', desc: 'Hook 기반 컴포넌트 설계 및 React Router, CSS Modules를 활용한 SPA 개발 경험이 있다.' },
  { id: 'spring', name: 'Spring',     icon: `${I}/spring/spring-original.svg`,         category: 'Framework', hearts: 3, bg: 'linear-gradient(145deg,#78c840,#4a9020)', shadow: '#2a6800', desc: 'MVC 구조를 활용한 구조를 설계할 수 있으며, Swagger, JPA 등 효과적인 라이브러리를 능숙하게 사용할 수 있다.' },
  { id: 'git',    name: 'Git',        icon: `${I}/git/git-original.svg`,               category: 'Tools',     hearts: 4, bg: 'linear-gradient(145deg,#f06050,#c02828)', shadow: '#901010', desc: 'Git Flow 전략을 활용한 브랜치 관리 및 협업 경험이 있다.' },
  { id: 'docker', name: 'Docker',     icon: `${I}/docker/docker-original.svg`,         category: 'Tools',     hearts: 2, bg: 'linear-gradient(145deg,#2aacf0,#0870c8)', shadow: '#054898', desc: '컨테이너 기반 배포 환경 구성 및 docker-compose를 활용한 서비스 구성 경험이 있다.' },
  { id: 'figma',  name: 'Figma',      icon: `${I}/figma/figma-original.svg`,           category: 'Tools',     hearts: 3, bg: 'linear-gradient(145deg,#f05828,#a040c0)', shadow: '#802890', desc: '와이어프레임 및 프로토타입 제작, 디자인 시스템 구성 경험이 있다.' },
  { id: 'jira',   name: 'Jira',       icon: `${I}/jira/jira-original.svg`,             category: 'Tools',     hearts: 3, bg: 'linear-gradient(145deg,#2060d0,#0040a8)', shadow: '#002880', desc: 'Scrum 기반 스프린트 관리 및 이슈 트래킹에 활용하였다.' },
]

const ROWS = [
  ['js', 'python', 'java', 'dart', 'sql'],
  ['flutter', 'react', 'spring'],
  ['git', 'docker', 'figma', 'jira'],
]

const PROF_LABELS = { 1: '입문', 2: '기초', 3: '보통', 4: '능숙', 5: '숙련' }
const TOOLS = ['✦', '⬚', '✏', '⌫', 'A', '◻', '◯', '╲', '꩜', '🖌']

function PixelHeart({ filled, size = 18 }) {
  const c = filled ? '#4A6741' : '#C4DCC0'
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" style={{ imageRendering: 'pixelated', display: 'block' }}>
      <g fill={c}>
        <rect x="1" y="2" width="3" height="1"/>
        <rect x="6" y="2" width="3" height="1"/>
        <rect x="0" y="3" width="4" height="1"/>
        <rect x="6" y="3" width="4" height="1"/>
        <rect x="0" y="4" width="10" height="1"/>
        <rect x="1" y="5" width="8" height="1"/>
        <rect x="2" y="6" width="6" height="1"/>
        <rect x="3" y="7" width="4" height="1"/>
        <rect x="4" y="8" width="2" height="1"/>
      </g>
    </svg>
  )
}

function CanvasContent({ tech }) {
  if (!tech) {
    return (
      <div className={styles.placeholder}>
        <div className={styles.placeholderHearts}>
          {[0,1,2,3,4].map(i => <PixelHeart key={i} filled={false} size={20} />)}
        </div>
        <p className={styles.placeholderText}>키캡을 클릭하여<br/>기술스택을 확인하세요</p>
        <div className={styles.placeholderCursor} />
      </div>
    )
  }
  return (
    <div className={styles.techDisplay} key={tech.id}>
      <div
        className={styles.techIconLarge}
        style={{ background: tech.bg, boxShadow: `0 6px 0 ${tech.shadow}, 0 10px 24px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.3)` }}
      >
        <img src={tech.icon} className={styles.techIconImg} alt={tech.name} />
      </div>
      <div className={styles.techInfo}>
        <div className={styles.techNameRow}>
          <span className={styles.techName}>{tech.name}</span>
          <span className={styles.techBadge}>{tech.category}</span>
        </div>
        <div className={styles.techHearts}>
          {[0,1,2,3,4].map(i => <PixelHeart key={i} filled={i < tech.hearts} size={20} />)}
          <span className={styles.profLabel}>{PROF_LABELS[tech.hearts]}</span>
        </div>
        <p className={styles.techDesc}>{tech.desc}</p>
      </div>
    </div>
  )
}

function Keycap({ tech, selected, onSelect }) {
  const [pressed, setPressed] = useState(false)
  return (
    <button
      className={`${styles.keycap} ${selected ? styles.keycapSelected : ''} ${pressed ? styles.keycapPressed : ''}`}
      style={{ background: tech.bg }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => { setPressed(false); onSelect(tech.id) }}
      onMouseLeave={() => setPressed(false)}
      onTouchStart={e => { e.preventDefault(); setPressed(true) }}
      onTouchEnd={() => { setPressed(false); onSelect(tech.id) }}
    >
      <img src={tech.icon} className={styles.keycapIcon} alt={tech.name} />
      <span className={styles.keycapName}>{tech.name}</span>
    </button>
  )
}

export default function SkillsPage() {
  const [selected, setSelected] = useState(null)
  const techMap = Object.fromEntries(TECHS.map(t => [t.id, t]))
  const handleSelect = useCallback(id => setSelected(prev => prev === id ? null : id), [])
  const activeTech = selected ? techMap[selected] : null

  return (
    <div className={styles.page}>
      <div className={styles.inner}>

        <div className={styles.header}>
          <span className={styles.deco}>✦</span>
          <h1 className={styles.title}>TECH STACK</h1>
          <span className={styles.deco}>✦</span>
        </div>

        {/* Win98 Monitor */}
        <div className={styles.monitorOuter}>
          <div className={styles.win98Window}>

            <div className={styles.win98Titlebar}>
              <div className={styles.win98Title}>
                <div className={styles.win98TitleIcon}>🖥</div>
                <span>skills.exe — Paint</span>
              </div>
              <div className={styles.win98Controls}>
                <div className={styles.win98Btn}>＿</div>
                <div className={styles.win98Btn}>□</div>
                <div className={`${styles.win98Btn} ${styles.win98BtnClose}`}>✕</div>
              </div>
            </div>

            <div className={styles.win98Menubar}>
              {['File','Edit','View','Image','Colors','Help'].map(m => (
                <div key={m} className={styles.win98MenuItem}>{m}</div>
              ))}
            </div>

            <div className={styles.win98Body}>
              <div className={styles.win98Toolbar}>
                {TOOLS.map((t, i) => <div key={i} className={styles.win98Tool}>{t}</div>)}
              </div>
              <div className={styles.win98Canvas}>
                <CanvasContent tech={activeTech} />
              </div>
              <div className={styles.win98Scrollbar}>
                <div className={styles.win98ScrollBtn}>▲</div>
                <div className={styles.win98ScrollTrack} />
                <div className={styles.win98ScrollBtn}>▼</div>
              </div>
            </div>

            <div className={styles.win98Statusbar}>
              <div className={`${styles.win98StatusItem} ${styles.win98StatusWide}`}>
                {activeTech ? `${activeTech.name} · ${activeTech.category}` : 'Ready'}
              </div>
              <div className={styles.win98StatusItem}>
                {activeTech ? `♥ × ${activeTech.hearts}` : ''}
              </div>
              <div className={styles.win98StatusItem}>✓</div>
            </div>
          </div>

          <div className={styles.monitorStand}>
            <div className={styles.monitorNeck} />
            <div className={styles.monitorBase} />
          </div>
        </div>

        {/* Keyboard */}
        <div className={styles.keyboardSection}>
          <div className={styles.keyboardHint}>▼ CLICK A KEY TO EXPLORE ▼</div>
          <div className={styles.keyboardBody}>
            {ROWS.map((row, ri) => (
              <div key={ri} className={styles.keyboardRow}
                style={{ paddingLeft: ri === 1 ? '21px' : ri === 2 ? '42px' : '0' }}>
                {row.map(id => (
                  <Keycap key={id} tech={techMap[id]} selected={selected === id} onSelect={handleSelect} />
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
