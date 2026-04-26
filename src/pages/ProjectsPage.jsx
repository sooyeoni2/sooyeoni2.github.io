import { useNavigate } from 'react-router-dom'
import styles from './ProjectsPage.module.css'

const PROJECTS = [
  {
    id: 'ballballball',
    emoji: null,
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
                      : <img src="/ball_kung.png" alt="뽈뽈뽈" className={styles.emoji} style={{ width: '3.6rem', height: '3.6rem', objectFit: 'contain' }} />
                    }
                    <div>
                      <h2 className={styles.name}>{p.name}</h2>
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
