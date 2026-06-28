import styles from './Projects.module.css'

const PROJECTS = [
  {
    main: true,
    emoji: '⚾',
    name: '뽈뽈뽈 (BallBallBall)',
    period: '2026',
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
  {
    emoji: null,
    img: '/movie_logo.png',
    imgAlt: 'Movie Archive',
    name: 'Movie Archive',
    period: '2025',
    role: 'Django 백엔드 · AI 추천 · 프론트엔드 일부',
    desc: '영화 탐색, 커뮤니티, 워치리스트 기반 AI 추천을 제공하는 영화 아카이브 서비스입니다.',
    stack: ['Vue 3', 'Django', 'TMDB API', 'YouTube API', 'OpenAI API'],
    highlights: [
      '영화 검색 및 상세 조회 (TMDB API 연동)',
      'Watchlist 기반 AI 영화 추천 (GPT-4o-mini)',
      '영화 취향 DNA 레이더 차트 시각화',
    ],
    color: 'teal',
  },
  {
    emoji: null,
    img: '/duckchi_character.png',
    imgAlt: 'DuckChi',
    name: 'DuckChi (덕치)',
    period: '2026',
    role: 'Full-Stack (FE 리더 · BE 참여)',
    desc: 'SSAFY 금융 API 기반 모임 지출 관리 & 정산 앱. 계좌 연동, OCR 영수증 인식, 모임방 공동 정산을 제공하는 핀테크 서비스입니다.',
    stack: ['React Native', 'TypeScript', 'Expo', 'Zustand', 'Spring Boot', 'Kafka', 'Redis', 'AWS'],
    highlights: [
      '카카오 OAuth WebView 로그인',
      'SSAFY 금융 API 계좌 연동',
      '프로필 · 뱃지 · 설정 (MVVM 전 레이어)',
    ],
    color: 'yellow',
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

function ProjectCard({ main, emoji, img, imgAlt, name, period, role, desc, stack, highlights, color }) {
  return (
    <div className={`${styles.card} ${styles[color]}`}>
      <div className={styles.cardHeader}>
        {emoji
          ? <span className={styles.emoji}>{emoji}</span>
          : <img src={img} alt={imgAlt} className={styles.emoji} style={{ width: '2.4rem', height: '2.4rem', objectFit: 'contain' }} />
        }
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <h3 className={styles.projectName} style={{ margin: 0 }}>{name}</h3>
            {main && <span className={styles.mainBadge}>메인</span>}
          </div>
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
