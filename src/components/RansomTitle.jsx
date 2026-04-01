import styles from './RansomTitle.module.css'

const FONTS = [
  "'Abril Fatface', cursive",
  "'Oswald', sans-serif",
  "'Playfair Display', serif",
  "'Bebas Neue', sans-serif",
  "'Special Elite', cursive",
  "'Permanent Marker', cursive",
]

const ROTATIONS = [-4, 2, -3, 5, -2, 3, -1, 4, -5, 1, -2, 3]
const SIZES =     [1.1, 0.92, 1.05, 1.0, 1.15, 0.88, 1.0, 1.1, 0.94, 1.12, 1.0, 0.96]

export default function RansomTitle({ text }) {
  return (
    <span className={styles.ransom}>
      {text.split('').map((char, i) => {
        if (char === ' ') return <span key={i} className={styles.space} />
        return (
          <span
            key={i}
            className={styles.letter}
            style={{
              fontFamily: FONTS[i % FONTS.length],
              transform: `rotate(${ROTATIONS[i % ROTATIONS.length]}deg)`,
              fontSize: `${SIZES[i % SIZES.length]}em`,
            }}
          >
            {char}
          </span>
        )
      })}
    </span>
  )
}
