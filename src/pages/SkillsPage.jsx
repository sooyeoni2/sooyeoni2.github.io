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

/* ── Floating background pixel art ── */
const R = ({ x, y, w = 1, h = 1, c }) => <rect x={x} y={y} width={w} height={h} fill={c} />
const PS = { imageRendering: 'pixelated', display: 'block' }

function PixelFloppy({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" style={PS}>
      <R x={0} y={0} w={10} h={10} c="#f7c948" />
      <R x={0} y={0} w={10} h={1} c="#8a6800" /><R x={0} y={0} w={1} h={10} c="#8a6800" />
      <R x={9} y={0} w={1} h={10} c="#8a6800" /><R x={0} y={9} w={10} h={1} c="#8a6800" />
      <R x={1} y={1} w={5} h={3} c="#fff8d0" />
      <R x={7} y={1} w={2} h={2} c="#c09800" />
      <R x={3} y={7} w={4} h={1} c="#555" />
    </svg>
  )
}

function PixelStar({ size = 26 }) {
  const c = '#f04030'
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" style={PS}>
      <R x={4} y={0} w={2} h={10} c={c} /><R x={0} y={4} w={10} h={2} c={c} />
      <R x={2} y={2} w={2} h={2} c={c} /><R x={6} y={2} w={2} h={2} c={c} />
      <R x={2} y={6} w={2} h={2} c={c} /><R x={6} y={6} w={2} h={2} c={c} />
    </svg>
  )
}

function PixelHeartDeco({ size = 22, color = '#8844cc' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" style={PS}>
      <g fill={color}>
        <rect x="1" y="2" width="3" height="1" /><rect x="6" y="2" width="3" height="1" />
        <rect x="0" y="3" width="4" height="1" /><rect x="6" y="3" width="4" height="1" />
        <rect x="0" y="4" width="10" height="1" /><rect x="1" y="5" width="8" height="1" />
        <rect x="2" y="6" width="6" height="1" /><rect x="3" y="7" width="4" height="1" />
        <rect x="4" y="8" width="2" height="1" />
      </g>
    </svg>
  )
}

function PixelDiamond({ size = 22 }) {
  const c = '#40c4ff'
  return (
    <svg width={size} height={size} viewBox="0 0 9 9" style={PS}>
      <R x={3} y={0} w={3} h={1} c={c} /><R x={2} y={1} w={5} h={1} c={c} />
      <R x={1} y={2} w={7} h={1} c={c} /><R x={0} y={3} w={9} h={2} c={c} />
      <R x={1} y={5} w={7} h={1} c={c} /><R x={2} y={6} w={5} h={1} c={c} />
      <R x={3} y={7} w={3} h={1} c={c} /><R x={4} y={8} w={1} h={1} c={c} />
    </svg>
  )
}

function PixelMonitor({ size = 28 }) {
  const b = '#2a9a94', s = '#c8f4f0'
  return (
    <svg width={size} height={size} viewBox="0 0 12 10" style={PS}>
      <R x={0} y={0} w={12} h={7} c={b} /><R x={1} y={1} w={10} h={5} c={s} />
      <R x={5} y={7} w={2} h={1} c={b} /><R x={3} y={8} w={6} h={1} c={b} />
    </svg>
  )
}

function PixelFlower({ size = 24 }) {
  const p = '#f0a820', cc = '#f0d060'
  return (
    <svg width={size} height={size} viewBox="0 0 9 9" style={PS}>
      <R x={3} y={0} w={3} h={2} c={p} /><R x={3} y={7} w={3} h={2} c={p} />
      <R x={0} y={3} w={2} h={3} c={p} /><R x={7} y={3} w={2} h={3} c={p} />
      <R x={1} y={1} w={2} h={2} c={p} /><R x={6} y={1} w={2} h={2} c={p} />
      <R x={1} y={6} w={2} h={2} c={p} /><R x={6} y={6} w={2} h={2} c={p} />
      <R x={3} y={3} w={3} h={3} c={cc} />
    </svg>
  )
}

function PixelNote({ size = 22 }) {
  const c = '#f06820'
  return (
    <svg width={size} height={size} viewBox="0 0 8 10" style={PS}>
      <R x={0} y={7} w={4} h={3} c={c} /><R x={3} y={0} w={1} h={8} c={c} />
      <R x={4} y={0} w={3} h={1} c={c} /><R x={5} y={1} w={2} h={1} c={c} />
      <R x={6} y={2} w={1} h={1} c={c} />
    </svg>
  )
}

function PixelSmallStar({ size = 18, color = '#3a7a38' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 8 8" style={PS}>
      <R x={3} y={0} w={2} h={8} c={color} /><R x={0} y={3} w={8} h={2} c={color} />
      <R x={2} y={2} w={1} h={1} c={color} /><R x={5} y={2} w={1} h={1} c={color} />
      <R x={2} y={5} w={1} h={1} c={color} /><R x={5} y={5} w={1} h={1} c={color} />
    </svg>
  )
}

function PixelCherry({ size = 28 }) {
  const r = '#cc2020', dr = '#991010', g = '#228020'
  return (
    <svg width={size} height={size} viewBox="0 0 12 11" style={PS}>
      <R x={3} y={0} w={1} h={4} c={g} /><R x={4} y={1} w={1} h={1} c={g} />
      <R x={5} y={1} w={3} h={1} c={g} /><R x={7} y={2} w={1} h={3} c={g} />
      <R x={2} y={3} w={2} h={1} c={r} /><R x={1} y={4} w={4} h={3} c={r} />
      <R x={2} y={7} w={2} h={1} c={dr} />
      <R x={7} y={4} w={2} h={1} c={r} /><R x={6} y={5} w={4} h={3} c={r} />
      <R x={7} y={8} w={2} h={1} c={dr} />
    </svg>
  )
}

const DECO_LIST = [
  { id:1,  el:<PixelFloppy size={26}/>,                    left:'8%',  top:'14%', delay:0,   dur:7   },
  { id:11, el:<PixelNote size={22}/>,                      left:'14%', top:'30%', delay:1.2, dur:7.5 },
  { id:2,  el:<PixelMonitor size={26}/>,                   left:'3%',  top:'44%', delay:0.5, dur:7.5 },
  { id:3,  el:<PixelHeartDeco size={22}/>,                 left:'15%', top:'68%', delay:2,   dur:6.5 },
  { id:4,  el:<PixelSmallStar size={18} color="#3a7a38"/>, left:'6%',  top:'85%', delay:4,   dur:9   },
  { id:5,  el:<PixelCherry size={24}/>,                    left:'82%', top:'12%', delay:0.8, dur:7   },
  { id:6,  el:<PixelStar size={24}/>,                      left:'93%', top:'28%', delay:1.5, dur:8   },
  { id:7,  el:<PixelFlower size={22}/>,                    left:'86%', top:'55%', delay:2.5, dur:8.5 },
  { id:8,  el:<PixelSmallStar size={16} color="#4040a0"/>, left:'78%', top:'42%', delay:2,   dur:7   },
  { id:9,  el:<PixelDiamond size={22}/>,                   left:'94%', top:'72%', delay:3,   dur:8   },
  { id:10, el:<PixelNote size={22}/>,                      left:'80%', top:'88%', delay:1,   dur:6.5 },
]

function FloatingDecos() {
  return (
    <div className={styles.floatingBg} aria-hidden="true">
      {DECO_LIST.map(d => (
        <div
          key={d.id}
          className={styles.floatDeco}
          style={{ left: d.left, top: d.top, animationDelay: `${d.delay}s`, animationDuration: `${d.dur}s` }}
        >
          {d.el}
        </div>
      ))}
    </div>
  )
}

function PixelHeart({ filled, size = 18 }) {
  const c = filled ? '#ff8fab' : '#C4DCC0'
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
      <FloatingDecos />
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
