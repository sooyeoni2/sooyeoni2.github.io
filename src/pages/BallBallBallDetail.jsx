import { useNavigate } from 'react-router-dom'
import styles from './BallBallBallDetail.module.css'

export default function BallBallBallDetail() {
  const navigate = useNavigate()

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <button className={styles.back} onClick={() => navigate('/projects')}>
          ← 프로젝트 목록
        </button>
        <span className={styles.label}>⚾ 뽈뽈뽈 (BallBallBall)</span>
      </div>
      <iframe
        src="/ballballball.html"
        className={styles.frame}
        title="뽈뽈뽈 프로젝트 상세"
      />
    </div>
  )
}
