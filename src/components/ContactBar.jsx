import styles from './ContactBar.module.css'

export default function ContactBar() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <a href="mailto:bc.redblume@gmail.com" className={styles.link}>
          <span className={styles.label}>EMAIL</span>
          bc.redblume@gmail.com
        </a>
        <a href="https://github.com/sooyeoni2" className={styles.link} target="_blank" rel="noopener noreferrer">
          <span className={styles.label}>GITHUB</span>
          sooyeoni2
        </a>
      </div>
    </section>
  )
}
