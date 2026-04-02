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
      <svg width="0" height="0" style={{position:'absolute'}}>
        <filter id="crayon">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
      </svg>
      <div className={`${styles.ballWrap} ${leaving ? styles.ballWrapOut : ''}`}>
      <div className={`${styles.paper} ${leaving ? styles.paperOut : ''}`}>
        <div className={styles.tape} />
        <div className={styles.tapeRight} />
        <p className={styles.label}>FRONTEND · BACKEND · MOBILE · WEB</p>
        <h1 className={styles.name}>김수연</h1>
        <p className={styles.nameEn}>Kim Sooyeon</p>
        <p className={styles.desc}>
          서비스 전체 흐름을 이해하고, <span className={styles.highlight}>아이디어를 실제 기능으로 구현하는<span className={styles.star}>★</span></span> 풀스택 개발자입니다.
        </p>
        <span className={styles.hint}>클릭해서 들어가기</span>
      </div>
      </div>
    </div>
  )
}
