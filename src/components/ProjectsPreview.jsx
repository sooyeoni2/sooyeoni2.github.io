import { useNavigate } from 'react-router-dom'
import styles from './ProjectsPreview.module.css'
import RansomTitle from './RansomTitle'

const PROJECTS = [
  {
    id: 'ballballball',
    emoji: null,
    name: '뽈뽈뽈 (BallBallBall)',
    period: '2025.01 ~ 2025.02',
    desc: '야구 동행 매칭 앱. 직관 메이트를 찾고 더치페이를 관리하는 플랫폼',
    role: 'Flutter 프론트엔드',
  },
]

export default function ProjectsPreview() {
  const navigate = useNavigate()

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.titleRow}>
          <h2 className={styles.title}><RansomTitle text="Projects" cutout seed={3} /></h2>
        </div>
        <div className={styles.grid}>
          {PROJECTS.map(p => (
            <div key={p.id} className={styles.card} onClick={() => navigate(`/projects/${p.id}`)}>
              <div className={styles.tape} />
              <div className={styles.tapeRight} />
              <div className={styles.cardTop}>
                {p.emoji
                  ? <span className={styles.emoji}>{p.emoji}</span>
                  : <img src="/ball_kung.png" alt="뽈뽈뽈" className={styles.emoji} style={{width:'4rem', height:'4rem', objectFit:'contain'}} />
                }
                <div>
                  <h3 className={styles.name}>{p.name}</h3>
                  <p className={styles.period}>{p.period} · {p.role}</p>
                </div>
              </div>
              <div className={styles.speechBubble}>{p.desc}</div>
              <span className={styles.more}>자세히 보기 →</span>
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
