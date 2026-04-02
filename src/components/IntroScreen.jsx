import { useState, useEffect } from 'react'
import styles from './IntroScreen.module.css'

export default function IntroScreen({ onEnter }) {
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const handleClick = () => {
    setLeaving(true)
    setTimeout(onEnter, 700)
  }

  return (
    <div className={`${styles.overlay} ${leaving ? styles.overlayOut : ''}`} onClick={handleClick}>
      <div className={`${styles.ballWrap} ${leaving ? styles.ballWrapOut : ''}`}>
      <div className={`${styles.paper} ${leaving ? styles.paperOut : ''}`}>
        <div className={styles.tape} />
        <div className={styles.tapeRight} />
        <p className={styles.label}>FRONTEND · BACKEND · MOBILE</p>
        <h1 className={styles.name}>김수연</h1>
        <p className={styles.nameEn}>Kim Sooyeon</p>
        <p className={styles.desc}>
          웹과 앱을 가리지 않고, 서비스 전반을 직접 만들어가는 풀스택 개발자입니다.
        </p>
        <span className={styles.hint}>클릭해서 들어가기</span>
      </div>
      </div>
    </div>
  )
}
