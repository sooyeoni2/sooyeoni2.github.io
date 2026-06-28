import { useNavigate } from 'react-router-dom'
import styles from './ProjectsPage.module.css'

const PROJECTS = [
  {
    id: 'ballballball',
    main: true,
    emoji: null,
    name: '뽈뽈뽈 (BallBallBall)',
    period: '2026.01 ~ 2026.02 (6주)',
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
    accent: {
      border:      '#a8c4f0',
      titleBar:    '#2d4a88',
      winBtn:      '#4a68a8',
      winBtnBorder:'#7090c8',
      navBg:       '#eaf0ff',
      navBorder:   '#a8c4f0',
      navBtn:      '#f0f5ff',
      urlText:     '#2d4a88',
      scrollBg:    '#dce8f8',
      scrollBtn:   '#ccdaf0',
      scrollThumb: '#a8c0e8',
      tag:         { bg: '#e0ecff', color: '#1a3a70', border: '#a8c4f0' },
      divider:     '#b8d0f0',
      check:       '#3a6abf',
      detail:      '#2d4a88',
      shadow:      'rgba(45, 74, 136, 0.12)',
    },
  },
  {
    id: 'movie-archive',
    emoji: null,
    img: '/movie_logo.png',
    imgAlt: 'Movie Archive',
    name: 'Movie Archive',
    period: '2025.12',
    team: '2명 (FE 1 / BE 1)',
    role: 'Django 백엔드 · AI 추천 · 프론트엔드 일부',
    desc: '영화 탐색, 커뮤니티, 워치리스트, Watchlist 기반 AI 추천을 제공하는 영화 아카이브 서비스입니다.',
    stack: ['Vue 3', 'Django', 'TMDB API', 'YouTube API', 'OpenAI API'],
    highlights: [
      '영화 검색 및 상세 조회 (TMDB API 연동)',
      '커뮤니티 게시판 CRUD (댓글 / 좋아요 / 싫어요)',
      'Watchlist 기반 AI 영화 추천 (GPT-4o-mini)',
      '영화 취향 DNA 레이더 차트 시각화',
      '리뷰 영상 검색 및 모달 재생 (YouTube API)',
    ],
    accent: {
      border:      '#60b8c0',
      titleBar:    '#0f3a40',
      winBtn:      '#1a5a62',
      winBtnBorder:'#3a8890',
      navBg:       '#e8f7f8',
      navBorder:   '#60b8c0',
      navBtn:      '#f0fafa',
      urlText:     '#0f3a40',
      scrollBg:    '#d0eef0',
      scrollBtn:   '#a8dce0',
      scrollThumb: '#60b8c0',
      tag:         { bg: '#e0f5f6', color: '#0a2a30', border: '#60b8c0' },
      divider:     '#90d0d4',
      check:       '#2a9098',
      detail:      '#0f3a40',
      shadow:      'rgba(15, 58, 64, 0.12)',
    },
  },
  {
    id: 'duckchi',
    emoji: null,
    img: '/duckchi_character.png',
    imgAlt: 'DuckChi',
    name: 'DuckChi (덕치)',
    period: '2026.02 ~ 2026.03',
    team: '6명 (Full-Stack 6)',
    role: 'Full-Stack (FE 리더 · BE 참여)',
    desc: 'SSAFY 금융 API 기반 모임 지출 관리 & 정산 핀테크 앱. 계좌 연동, OCR 영수증 인식, 모임방 공동 정산을 제공합니다.',
    stack: ['React Native', 'TypeScript', 'Expo', 'Zustand', 'Spring Boot', 'Kafka', 'Redis', 'AWS'],
    highlights: [
      'Feature-First MVVM 구조 설계 & 공용 컴포넌트',
      'SSAFY 금융 API 계좌 등록 / 조회 / 삭제',
      '뱃지 시스템 (FCM 알림 · 실시간 갱신)',
      '프로필 조회·수정 · 설정 (MVVM 전 레이어)',
      '카카오 OAuth WebView 로그인 / 온보딩',
    ],
    accent: {
      border:      '#F9C846',
      titleBar:    '#7a5800',
      winBtn:      '#a07200',
      winBtnBorder:'#c89000',
      navBg:       '#fffbe8',
      navBorder:   '#F9C846',
      navBtn:      '#fffdf0',
      urlText:     '#7a5800',
      scrollBg:    '#fdf0b0',
      scrollBtn:   '#f5e070',
      scrollThumb: '#F9C846',
      tag:         { bg: '#fff8d0', color: '#4a3800', border: '#F9C846' },
      divider:     '#f5d060',
      check:       '#c8960a',
      detail:      '#7a5800',
      shadow:      'rgba(122, 88, 0, 0.12)',
      shadow:      'rgba(122, 88, 0, 0.12)',
    },
  },
]

export default function ProjectsPage() {
  const navigate = useNavigate()

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <span className={styles.deco}>✦</span>
        <h1 className={styles.title}>Projects</h1>
        <span className={styles.deco}>✦</span>
      </div>
      <div className={styles.list}>
        {PROJECTS.map(p => {
          const a = p.accent
          return (
            <div
              key={p.id}
              className={styles.card}
              style={{ borderColor: a.border, boxShadow: `0 6px 24px ${a.shadow}` }}
              onClick={() => navigate(`/projects/${p.id}`)}
            >
              <div className={styles.titleBar} style={{ background: a.titleBar }}>
                <span className={styles.titleBarText}>{p.name}</span>
                <div className={styles.winControls}>
                  <span className={styles.winBtn} style={{ background: a.winBtn, borderColor: a.winBtnBorder }}>﹣</span>
                  <span className={styles.winBtn} style={{ background: a.winBtn, borderColor: a.winBtnBorder }}>□</span>
                  <span className={styles.winBtn} style={{ background: a.winBtn, borderColor: a.winBtnBorder }}>✕</span>
                </div>
              </div>
              <div className={styles.navBar} style={{ background: a.navBg, borderBottomColor: a.navBorder }}>
                <div className={styles.navBtns}>
                  <span className={styles.navBtn} style={{ background: a.navBtn, borderColor: a.navBorder, color: a.titleBar }}>←</span>
                  <span className={styles.navBtn} style={{ background: a.navBtn, borderColor: a.navBorder, color: a.titleBar }}>→</span>
                  <span className={styles.navBtn} style={{ background: a.navBtn, borderColor: a.navBorder, color: a.titleBar }}>⌂</span>
                </div>
                <div className={styles.urlBar} style={{ borderColor: a.navBorder }}>
                  <span className={styles.urlIcon}>🌐</span>
                  <span className={styles.urlText} style={{ color: a.urlText }}>portfolio/projects/{p.id}</span>
                </div>
                <div className={styles.navBtns}>
                  <span className={styles.navBtn} style={{ background: a.navBtn, borderColor: a.navBorder, color: a.titleBar }}>★</span>
                  <span className={styles.navBtn} style={{ background: a.navBtn, borderColor: a.navBorder, color: a.titleBar }}>≡</span>
                </div>
              </div>
              <div className={styles.browserBody}>
                <div className={styles.content}>
                  <div className={styles.cardHeader}>
                    {p.emoji
                      ? <span className={styles.emoji}>{p.emoji}</span>
                      : <img src={p.img || '/ball_kung.png'} alt={p.imgAlt || p.name} className={styles.emoji} style={{ width: '3.6rem', height: '3.6rem', objectFit: 'contain' }} />
                    }
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <h2 className={styles.name} style={{ margin: 0 }}>{p.name}</h2>
                        {p.main && <span className={styles.mainBadge}>메인</span>}
                      </div>
                      <p className={styles.meta}>{p.period} · {p.team} · {p.role}</p>
                    </div>
                  </div>
                  <p className={styles.desc}>{p.desc}</p>
                  <div className={styles.stack}>
                    {p.stack.map(s => (
                      <span key={s} className={styles.tag} style={{ background: a.tag.bg, color: a.tag.color, borderColor: a.tag.border }}>
                        {s}
                      </span>
                    ))}
                  </div>
                  <ul className={styles.highlights} style={{ borderTopColor: a.divider }}>
                    {p.highlights.map(h => (
                      <li key={h} style={{ '--check': a.check }}>{h}</li>
                    ))}
                  </ul>
                  <span className={styles.detailText} style={{ color: a.detail }}>상세 내용 보기 →</span>
                </div>
                <div className={styles.scrollbar} style={{ background: a.scrollBg, borderLeftColor: a.navBorder }}>
                  <div className={styles.scrollBtn} style={{ background: a.scrollBtn, borderColor: a.navBorder, color: a.titleBar }}>▲</div>
                  <div className={styles.scrollTrack} style={{ background: a.scrollBg }}>
                    <div className={styles.scrollThumb} style={{ background: a.scrollThumb, borderColor: a.scrollThumb }}></div>
                  </div>
                  <div className={styles.scrollBtn} style={{ background: a.scrollBtn, borderColor: a.navBorder, color: a.titleBar }}>▼</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
