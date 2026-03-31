import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="about" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.textArea}>
          <p className={styles.greeting}>안녕하세요 👋</p>
          <h1 className={styles.name}>
            저는 <span className={styles.highlight}>김수연</span>입니다
          </h1>
          <p className={styles.role}>풀스택 개발자</p>
          <p className={styles.desc}>
            사용자 경험을 중심으로 생각하는 개발자입니다.<br />
            프론트엔드부터 백엔드까지 전반을 다루며,<br />
            성능 최적화와 깔끔한 아키텍처를 지향합니다.
          </p>
          <div className={styles.tags}>
            <span className={styles.tag}>Frontend</span>
            <span className={styles.tag}>Backend</span>
            <span className={styles.tag}>풀스택</span>
            <span className={styles.tag}>UI/UX</span>
          </div>
          <div className={styles.ctas}>
            <a href="#projects" className={styles.btnPrimary}>프로젝트 보기</a>
            <a href="#contact" className={styles.btnSecondary}>연락하기</a>
          </div>
        </div>
        <div className={styles.avatarArea}>
          <div className={styles.avatarCircle}>
            <span className={styles.avatarEmoji}>👩‍💻</span>
          </div>
          <div className={styles.floatBadge1}>Flutter</div>
          <div className={styles.floatBadge2}>🚀 SSAFY</div>
          <div className={styles.floatBadge3}>📱 Mobile</div>
        </div>
      </div>
      <div className={styles.scrollHint}>
        <span>스크롤하여 더 보기</span>
        <div className={styles.arrow} />
      </div>
    </section>
  )
}
