import { useEffect, useMemo, useState } from 'react'
import styles from './IntroScreen.module.css'

const LETTERS = ['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']

const PAPER_ICONS = [
  { kind: 'smile', top: '12%', left: '9%', size: 'small', rotate: '-10deg', delay: '0ms' },
  { kind: 'camera', top: '82%', left: '8%', size: 'small', rotate: '-8deg', delay: '220ms' },
  { kind: 'star', top: '15%', left: '77%', size: 'tiny', rotate: '9deg', delay: '80ms' },
  { kind: 'star', top: '22%', left: '83%', size: 'small', rotate: '16deg', delay: '180ms' },
  { kind: 'plane', top: '31%', left: '90%', size: 'medium', rotate: '14deg', delay: '260ms' },
  { kind: 'crumpledStar', top: '64%', left: '94%', size: 'small', rotate: '-11deg', delay: '360ms' },
  { kind: 'crumpledStar', top: '81%', left: '87%', size: 'tiny', rotate: '15deg', delay: '440ms' },
  { kind: 'crumpledStar', top: '88%', left: '96%', size: 'small', rotate: '8deg', delay: '520ms' },
]

function PaperDoodle({ kind }) {
  if (kind === 'smile') {
    return (
      <svg viewBox="0 0 80 80" aria-hidden="true">
        <circle cx="40" cy="40" r="27" />
        <circle cx="30" cy="32" r="3" />
        <circle cx="50" cy="32" r="3" />
        <path d="M24 45c7 13 25 15 34 1" />
      </svg>
    )
  }

  if (kind === 'camera') {
    return (
      <svg viewBox="0 0 90 70" aria-hidden="true">
        <path d="M14 27h15l5-9h20l5 9h17v30H14z" />
        <circle cx="45" cy="43" r="13" />
        <circle cx="45" cy="43" r="5" />
        <path d="M64 32h7M20 24l8-8M14 31l-6-7" />
      </svg>
    )
  }

  if (kind === 'plane') {
    return (
      <svg viewBox="0 0 100 78" aria-hidden="true">
        <path d="M9 35 89 8 63 68 47 45 9 35z" />
        <path d="M47 45 89 8 34 52 31 68" />
        <path d="M15 59c11 3 10-12 20-8" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 82 82" aria-hidden="true">
      <path d="M40 8 49 30 73 27 55 43 62 67 41 54 20 68 27 44 9 29 32 30z" />
    </svg>
  )
}

export default function IntroScreen({ onEnter }) {
  const [leaving, setLeaving] = useState(false)
  const paperIcons = useMemo(() => PAPER_ICONS, [])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const handleEnter = () => {
    if (leaving) return
    setLeaving(true)
    setTimeout(onEnter, 620)
  }

  return (
    <button
      className={`${styles.overlay} ${leaving ? styles.overlayOut : ''}`}
      type="button"
      onClick={handleEnter}
      aria-label="Enter portfolio"
    >
      <div className={styles.grain} />

      <div className={styles.paperDecor} aria-hidden="true">
        {paperIcons.map(({ kind, top, left, size, rotate, delay }) => (
          <span
            key={`${kind}-${top}-${left}`}
            className={`${styles.paperIcon} ${styles[size]} ${styles[kind]}`}
            style={{ top, left, '--rotate': rotate, '--delay': delay }}
          >
            <PaperDoodle kind={kind} />
          </span>
        ))}
      </div>

      <div className={styles.topLabel}>
        <span>Frontend Dev</span>
        <span className={styles.dot}>*</span>
        <strong>KimSooyeon</strong>
        <span className={styles.dot}>*</span>
        <span>Web &amp; Mobile</span>
      </div>

      <div className={styles.wordmark} aria-label="Portfolio">
        {LETTERS.map((letter, index) => (
          <span
            key={`${letter}-${index}`}
            className={`${styles.letterWrap} ${
              letter === 'P' || letter === 'f' ? styles.scriptWrap : ''
            }`}
          >
            <span
              className={`${styles.letter} ${
                letter === 'P' || letter === 'f' ? styles.scriptLetter : ''
              }`}
              style={{ '--letter-delay': `${480 + index * 100}ms` }}
            >
              {letter}
            </span>
          </span>
        ))}
      </div>

      <div className={styles.tagline}>Frontend * Backend * Mobile * Web</div>
    </button>
  )
}
