import styles from './Contact.module.css'
import RansomTitle from './RansomTitle'

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}><RansomTitle text="Contact" cutout seed={7} /></h2>
        <p className={styles.sub}>언제든지 연락해 주세요!</p>
        <div className={styles.cards}>
          <a href="mailto:bc.redblume@gmail.com" className={styles.card}>
            <span className={styles.icon}>✉️</span>
            <span className={styles.label}>이메일</span>
            <span className={styles.value}>bc.redblume@gmail.com</span>
          </a>
          <a href="https://github.com/sooyeoni2" className={styles.card} target="_blank" rel="noopener noreferrer">
            <span className={styles.icon}>🐙</span>
            <span className={styles.label}>GitHub</span>
            <span className={styles.value}>github.com/sooyeoni2</span>
          </a>
        </div>
      </div>
    </section>
  )
}
