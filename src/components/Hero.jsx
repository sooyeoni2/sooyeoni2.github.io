import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="about" className={styles.hero}>
      <div className={styles.inner}>

        <div className={styles.left}>
          <p className={styles.sub}>Frontend · Backend · Mobile</p>

          <div className={styles.paperWrap}>
            <div className={styles.tape} />
            <div className={styles.tapeRight} />
            <div className={styles.paper}>
              <h1 className={styles.name}>김수연</h1>
            </div>
          </div>

          <p className={styles.nameEn}>Kim Sooyeon</p>

          <p className={styles.desc}>
            <strong>사용자 흐름이 자연스럽게 이어지는 걸</strong> 중요하게 생각합니다.<br />
            웹과 앱을 가리지 않고, <strong>서비스 전반을<br />
            직접 만들어가는 풀스택 개발자</strong>입니다.
          </p>

          <div className={styles.pills}>
            <span className={styles.pill}>풀스택 개발자</span>
          </div>
        </div>

        <div className={styles.right}>
          <span className={styles.annotation}>That's me!</span>
          <div className={styles.photoBox}>
            <img src="/profile.jpg" alt="김수연" className={styles.photo} />
          </div>
        </div>

      </div>
    </section>
  )
}
