import styles from './Projects.module.css'

const PROJECTS = [
  {
    emoji: '⚾',
    name: '뽈뽈뽈 (BallBallBall)',
    period: '2024',
    role: 'Flutter 모바일 개발 (프론트엔드)',
    desc: '야구 동행 매칭 앱. 직관 메이트를 찾고 더치페이를 관리하며 팬들이 함께 경기를 즐길 수 있는 플랫폼입니다.',
    stack: ['Flutter', 'Dart', 'WebSocket', 'FCM', 'WebView', 'Toss Payments'],
    highlights: [
      '로그인 / 회원가입 (JWT, Secure Storage)',
      '실시간 채팅 (WebSocket)',
      '더치페이 기능 (Toss Payments 연동)',
      '마이 프로필, 프로필 수정',
      '성능 최적화 – 불필요한 위젯 rebuild 최소화',
    ],
    color: 'blue',
  },
]

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Projects</h2>
        <p className={styles.sub}>참여한 프로젝트를 소개합니다</p>
        <div className={styles.list}>
          {PROJECTS.map(project => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ emoji, name, period, role, desc, stack, highlights, color }) {
  return (
    <div className={`${styles.card} ${styles[color]}`}>
      <div className={styles.cardHeader}>
        <span className={styles.emoji}>{emoji}</span>
        <div>
          <h3 className={styles.projectName}>{name}</h3>
          <p className={styles.meta}>{period} · {role}</p>
        </div>
      </div>
      <p className={styles.desc}>{desc}</p>
      <div className={styles.stack}>
        {stack.map(s => <span key={s} className={styles.stackTag}>{s}</span>)}
      </div>
      <ul className={styles.highlights}>
        {highlights.map(h => <li key={h}>{h}</li>)}
      </ul>
    </div>
  )
}
