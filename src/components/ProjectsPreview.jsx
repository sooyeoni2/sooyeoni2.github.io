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
  },
]

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

        <div className={styles.grid}>
          {PROJECTS.map((p) => (
            <div key={p.id} className={styles.cardWrap} onClick={() => navigate(`/projects/${p.id}`)}>
              {/* 폴더 탭 */}
              <div className={styles.cardTab}>
                <span className={styles.tabClose}>×</span>
              </div>

              <div className={styles.card}>
                {/* 브라우저 툴바 */}
                <div className={styles.cardToolbar}>
                  <div className={styles.toolbarNav}>
                    <span>{'<'}</span>
                    <span>{'>'}</span>
                    <span>↺</span>
                  </div>
                  <div className={styles.toolbarUrl}>{p.url}</div>
                </div>

                {/* 본문 */}
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
                  <span className={styles.more}>자세히 보기 →</span>
                </div>

                {/* 리사이즈 핸들 */}
                <div className={styles.resizeHandle}>⇲</div>
              </div>
            </div>
          ))}
        </div>

        <button className={styles.allBtn} onClick={() => navigate('/projects')}>
          전체 프로젝트 보기
        </button>
      </div>
    </section>
  )
}
