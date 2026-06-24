import { useEffect, useMemo, useState } from 'react'
import styles from './IntroScreen.module.css'

const LETTERS = ['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']

const PAPER_ICONS = [
  { kind: 'smile', top: '12%', left: '9%', size: 'small', rotate: '-10deg', delay: '0ms' },
  { kind: 'heart', top: '16%', left: '27%', size: 'tiny', rotate: '14deg', delay: '120ms' },
  { kind: 'note', top: '17%', left: '64%', size: 'small', rotate: '-8deg', delay: '160ms' },
  { kind: 'camera', top: '82%', left: '8%', size: 'small', rotate: '-8deg', delay: '220ms' },
  { kind: 'spark', top: '41%', left: '15%', size: 'tiny', rotate: '18deg', delay: '120ms' },
  { kind: 'star', top: '23%', left: '37%', size: 'tiny', rotate: '9deg', delay: '80ms' },
  { kind: 'star', top: '21%', left: '84%', size: 'small', rotate: '16deg', delay: '180ms' },
  { kind: 'plane', top: '30%', left: '88%', size: 'medium', rotate: '14deg', delay: '260ms' },
  { kind: 'code', top: '33%', left: '77%', size: 'small', rotate: '-12deg', delay: '300ms' },
  { kind: 'mail', top: '55%', left: '14%', size: 'small', rotate: '-9deg', delay: '260ms' },
  { kind: 'heart', top: '61%', left: '86%', size: 'tiny', rotate: '18deg', delay: '340ms' },
  { kind: 'note', top: '74%', left: '24%', size: 'tiny', rotate: '10deg', delay: '420ms' },
  { kind: 'spark', top: '76%', left: '69%', size: 'tiny', rotate: '-18deg', delay: '460ms' },
  { kind: 'crumpledStar', top: '64%', left: '90%', size: 'small', rotate: '-11deg', delay: '360ms' },
  { kind: 'crumpledStar', top: '82%', left: '73%', size: 'tiny', rotate: '15deg', delay: '440ms' },
  { kind: 'crumpledStar', top: '88%', left: '91%', size: 'small', rotate: '8deg', delay: '520ms' },
  { kind: 'star', top: '83%', left: '17%', size: 'tiny', rotate: '-14deg', delay: '500ms' },
]

function formatToday() {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date())
}

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

  if (kind === 'heart') {
    return (
      <svg viewBox="0 0 82 82" aria-hidden="true">
        <path d="M41 67C20 50 12 38 16 27c3-9 15-11 24 1 9-12 22-10 25-1 4 11-4 23-24 40z" />
      </svg>
    )
  }

  if (kind === 'note') {
    return (
      <svg viewBox="0 0 82 82" aria-hidden="true">
        <path d="M22 18h38l8 9v37H22z" />
        <path d="M58 18v12h10M31 36h24M31 48h20" />
      </svg>
    )
  }

  if (kind === 'mail') {
    return (
      <svg viewBox="0 0 90 70" aria-hidden="true">
        <path d="M14 18h62v40H14z" />
        <path d="M15 20l30 25 30-25M15 58l22-22M75 58 53 36" />
      </svg>
    )
  }

  if (kind === 'code') {
    return (
      <svg viewBox="0 0 90 70" aria-hidden="true">
        <path d="M34 24 18 36l16 12M56 24l16 12-16 12M49 18 40 54" />
      </svg>
    )
  }

  if (kind === 'spark') {
    return (
      <svg viewBox="0 0 82 82" aria-hidden="true">
        <path d="M41 8c4 18 10 27 28 33-18 5-26 13-31 33-4-19-11-28-29-33 19-6 28-15 32-33z" />
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
  const [today, setToday] = useState(formatToday)
  const paperIcons = useMemo(() => PAPER_ICONS, [])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    const timer = setInterval(() => setToday(formatToday()), 60 * 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') handleEnter()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  })

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

      <div className={styles.dateStamp}>{today}</div>
      <div className={styles.enterHint}>Click anywhere or press Enter to continue</div>
    </button>
  )
}
