import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="about" className={styles.hero}>
      <div className={styles.inner}>

        <div className={styles.left}>
          <div className={styles.subRow}>
            <span className={styles.subDeco}>✦</span>
            <p className={styles.sub}>Frontend · Backend · Mobile · Web</p>
            <span className={styles.subDeco}>✦</span>
          </div>

          <div className={styles.paperWrap}>
            <div className={styles.tape} />
            <div className={styles.tapeRight} />
            <div className={styles.paper}>
              <h1 className={styles.name}>김수연</h1>
            </div>
          </div>


          <p className={styles.desc}>
            사용자의 입장에서 서비스 흐름을 이해하고,<br /><strong>그 흐름이 이어지도록 화면으로 구현</strong>하는 프론트엔드 개발자입니다.
          </p>

          <div className={styles.infoBlock}>
            <span className={styles.infoLabel}>Education</span>
            <ul className={styles.infoList}>
              <li className={styles.infoItem}><span className={styles.check}>✓</span>강릉원주대학교 · 물리학과 / 생물학과 (복수전공)</li>
              <li className={styles.infoItem}><span className={styles.check}>✓</span>SSAFY 14기 수료</li>
            </ul>
          </div>

        </div>

        <div className={styles.right}>
          <div className={styles.photoWrap}>
            <span className={styles.annotation}>That's me!</span>
            <div className={styles.photoBox}>
              <img src="/profile.jpg" alt="김수연" className={styles.photo} />
            </div>
            <div className={styles.speechBubble}>Hello, World! 👋</div>
          </div>
        </div>

      </div>
    </section>
  )
}
