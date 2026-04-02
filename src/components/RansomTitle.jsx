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
const CUTOUT_BG =    ['#111', '#111', '#fff', '#111', '#fff', '#fff', '#111', '#fff', '#111', '#111', '#fff', '#111']
const CUTOUT_COLOR = ['#fff', '#fff', '#111', '#fff', '#111', '#111', '#fff', '#111', '#fff', '#fff', '#111', '#fff']

export default function RansomTitle({ text, cutout = false, seed = 0 }) {
  return (
    <span className={styles.ransom}>
      {text.split('').map((char, i) => {
        if (char === ' ') return <span key={i} className={styles.space} />
        const idx = (i + seed) % CUTOUT_BG.length
        const bg = cutout ? CUTOUT_BG[idx] : 'transparent'
        const color = cutout ? CUTOUT_COLOR[idx] : '#111'
        const padding = cutout ? '2px 4px' : '0'
        return (
          <span
            key={i}
            className={styles.letter}
            style={{
              fontFamily: FONTS[i % FONTS.length],
              transform: `rotate(${ROTATIONS[i % ROTATIONS.length]}deg)`,
              fontSize: `${SIZES[i % SIZES.length]}em`,
              background: bg,
              color,
              padding,
            }}
          >
            {char}
          </span>
        )
      })}
    </span>
  )
}
