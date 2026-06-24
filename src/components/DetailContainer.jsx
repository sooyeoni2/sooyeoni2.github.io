import styles from './DetailContainer.module.css'

export default function DetailContainer({ children }) {
  return <div className={styles.container}>{children}</div>
}
