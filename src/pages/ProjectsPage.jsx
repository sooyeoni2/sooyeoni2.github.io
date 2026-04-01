import { useNavigate } from 'react-router-dom'
import styles from './ProjectsPage.module.css'

const PROJECTS = [
  {
    id: 'ballballball',
    emoji: '⚾',
    name: '뽈뽈뽈 (BallBallBall)',
    period: '2025.01 ~ 2025.02 (6주)',
    team: '6명 (FE 2 / BE 4)',
    role: 'Flutter 프론트엔드',
    desc: '야구 동행 매칭 앱. 직관 메이트를 찾고 더치페이를 관리하며 팬들이 함께 경기를 즐길 수 있는 플랫폼입니다.',
    stack: ['Flutter', 'Dart', 'WebSocket', 'FCM', 'WebView', 'Toss Payments'],
    highlights: [
      '로그인 / 회원가입 (JWT, Secure Storage)',
      '실시간 채팅 (WebSocket)',
      '더치페이 기능 (Toss Payments 연동)',
      '마이 프로필 조회 및 수정',
      '성능 최적화 – 불필요한 위젯 rebuild 최소화',
    ],
  },
]

export default function ProjectsPage() {
  const navigate = useNavigate()

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.sub}>참여한 프로젝트 전체 목록입니다</p>
      </div>
      <div className={styles.list}>
        {PROJECTS.map(p => (
          <div key={p.id} className={styles.card} onClick={() => navigate(`/projects/${p.id}`)}>
            <div className={styles.cardHeader}>
              <span className={styles.emoji}>{p.emoji}</span>
              <div>
                <h2 className={styles.name}>{p.name}</h2>
                <p className={styles.meta}>{p.period} · {p.team} · {p.role}</p>
              </div>
            </div>
            <p className={styles.desc}>{p.desc}</p>
            <div className={styles.stack}>
              {p.stack.map(s => <span key={s} className={styles.tag}>{s}</span>)}
            </div>
            <ul className={styles.highlights}>
              {p.highlights.map(h => <li key={h}>{h}</li>)}
            </ul>
            <span className={styles.detailText}>상세 내용 보기 →</span>
          </div>
        ))}
      </div>
    </div>
  )
}
