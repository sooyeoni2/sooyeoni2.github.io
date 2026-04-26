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
            서비스 전체 흐름을 이해하고,<br /><strong>아이디어를 실제 기능으로 구현하는</strong> 풀스택 개발자입니다.
          </p>

          <div className={styles.pills}>
            <span className={styles.pill}>풀스택 개발자</span>
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
