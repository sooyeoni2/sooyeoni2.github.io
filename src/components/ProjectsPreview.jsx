import { useNavigate } from 'react-router-dom'
import styles from './ProjectsPreview.module.css'
import useTypewriter from '../hooks/useTypewriter'
import useInView from '../hooks/useInView'

const PROJECTS = [
  {
    id: 'ballballball',
    name: '뽈뽈뽈 (BallBallBall)',
    url: 'sooya.dev/projects/ballballball',
    period: '2026.01 ~ 2026.02',
    desc: '야구 동행 매칭 앱. 직관 메이트를 찾고 더치페이를 관리하는 플랫폼',
    tags: ['Flutter', '프론트엔드'],
    highlights: ['실시간 채팅 (WebSocket)', '더치페이 (Toss Payments 연동)', '로그인 / 회원가입 (JWT)'],
  },
  {
    id: 'movie-archive',
    img: '/movie_logo.png',
    imgAlt: 'Movie Archive',
    name: 'Movie Archive',
    url: 'sooya.dev/projects/movie-archive',
    period: '2025.12',
    desc: '영화 탐색, 커뮤니티, Watchlist 기반 AI 추천을 제공하는 아카이브',
    tags: ['백엔드', 'AI', '프론트엔드'],
    highlights: ['Watchlist 기반 AI 영화 추천 (GPT-4o-mini)', '영화 취향 DNA 레이더 차트', '커뮤니티 게시판 CRUD'],
  },
  {
    id: 'duckchi',
    img: '/duckchi_character.png',
    imgAlt: 'DuckChi',
    name: 'DuckChi (덕치)',
    url: 'sooya.dev/projects/duckchi',
    period: '2026.02 ~ 2026.03',
    desc: 'SSAFY 금융 API 기반 모임 지출 관리 & 정산 핀테크 앱',
    tags: ['React Native', 'Full-Stack'],
    highlights: ['SSAFY 금융 API 계좌 연동', '뱃지 시스템 (FCM 알림 · 실시간 갱신)', 'Feature-First MVVM 구조 설계'],
  },
]

function ProjectCard({ p, onClick }) {
  return (
    <div className={styles.cardWrap} onClick={onClick}>
      <div className={styles.cardTab}>
        <span className={styles.tabClose}>×</span>
      </div>
      <div className={styles.card}>
        <div className={styles.cardToolbar}>
          <div className={styles.toolbarNav}>
            <span>{'<'}</span>
            <span>{'>'}</span>
            <span>↺</span>
          </div>
          <div className={styles.toolbarUrl}>{p.url}</div>
        </div>
        <div className={styles.cardBody}>
          <div className={styles.cardTop}>
            <img
              src={p.img || '/ball_kung.png'}
              alt={p.imgAlt || p.name}
              className={styles.projectImg}
            />
            <div>
              <h3 className={styles.name}>{p.name}</h3>
              <div className={styles.periodRow}>
                <span className={styles.period}>{p.period}</span>
                <div className={styles.tags}>
                  {p.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.descCard}>
            <p className={styles.desc}>{p.desc}</p>
          </div>
          {p.highlights && (
            <ul className={styles.highlights}>
              {p.highlights.map(h => <li key={h}>{h}</li>)}
            </ul>
          )}
          <span className={styles.more}>자세히 보기 →</span>
        </div>
        <div className={styles.resizeHandle}>⇲</div>
      </div>
    </div>
  )
}

export default function ProjectsPreview() {
  const navigate = useNavigate()
  const [sectionRef, inView] = useInView(0.2)
  const { displayed, done } = useTypewriter('Projects', 110, inView)

  return (
    <section id="projects" className={styles.section} ref={sectionRef}>
      <div className={styles.inner}>
        <div className={styles.titleRow}>
          <span className={styles.deco}>✦</span>
          <h2 className={styles.title}>
            {displayed}{!done && <span className={styles.cursor}>|</span>}
          </h2>
          <span className={styles.deco}>✦</span>
        </div>

        <div style={{ opacity: done ? 1 : 0, transition: 'opacity 0.5s ease' }}>
          <div className={styles.grid}>
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} p={p} onClick={() => navigate(`/projects/${p.id}`)} />
          ))}
          </div>

          <button className={styles.allBtn} onClick={() => navigate('/projects')}>
            전체 프로젝트 보기
          </button>
        </div>
      </div>
    </section>
  )
}
