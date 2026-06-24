import { useNavigate } from 'react-router-dom'
import styles from './ProjectsPreview.module.css'
import RansomTitle from './RansomTitle'
import useInView from '../hooks/useInView'

const PROJECTS = [
  {
    id: 'ballballball',
    emoji: null,
    name: '뽈뽈뽈 (BallBallBall)',
    period: '2026.01 ~ 2026.02',
    desc: '야구 동행 매칭 앱. 직관 메이트를 찾고 더치페이를 관리하는 플랫폼',
    tags: ['Flutter', '프론트엔드'],
  },
  {
    id: 'movie-archive',
    emoji: null,
    img: '/movie_logo.png',
    imgAlt: 'Movie Archive',
    name: 'Movie Archive',
    period: '2025.11 ~ 2025.12',
    desc: '영화 탐색, 커뮤니티, Watchlist 기반 AI 추천을 제공하는 영화 아카이브 서비스',
    tags: ['백엔드', 'AI', '프론트엔드'],
  },
]

export default function ProjectsPreview() {
  const navigate = useNavigate()
  const [sectionRef, sectionInView] = useInView(0.1)

  return (
    <section id="projects" className={styles.section} ref={sectionRef}>
      <div className={styles.inner}>
        <div
          className={styles.titleRow}
          style={{
            opacity: sectionInView ? 1 : 0,
            transform: sectionInView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <h2 className={styles.title}><RansomTitle text="Projects" cutout seed={3} /></h2>
        </div>
        <div className={styles.grid}>
          {PROJECTS.map((p, i) => (
            <div
              key={p.id}
              className={styles.card}
              onClick={() => navigate(`/projects/${p.id}`)}
              style={{
                opacity: sectionInView ? 1 : 0,
                transform: sectionInView ? 'translateY(0)' : 'translateY(32px)',
                transition: `opacity 0.6s ease ${0.2 + i * 0.15}s, transform 0.6s ease ${0.2 + i * 0.15}s`,
              }}
            >
              <div className={styles.tape} />
              <div className={styles.tapeRight} />
              <div className={styles.cardTop}>
                {p.emoji
                  ? <span className={styles.emoji}>{p.emoji}</span>
                  : <img src={p.img || '/ball_kung.png'} alt={p.imgAlt || p.name} className={styles.emoji} style={{width:'4rem', height:'4rem', objectFit:'contain'}} />
                }
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
              <div className={styles.speechBubble}>{p.desc}</div>
              <span className={styles.more}>자세히 보기 →</span>
            </div>
          ))}
        </div>
        <button
          className={styles.allBtn}
          onClick={() => navigate('/projects')}
          style={{
            opacity: sectionInView ? 1 : 0,
            transform: sectionInView ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.5s ease 0.55s, transform 0.5s ease 0.55s',
          }}
        >
          전체 프로젝트 보기
        </button>
      </div>
    </section>
  )
}
