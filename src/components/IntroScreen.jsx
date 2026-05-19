import { useState, useEffect } from 'react'
import styles from './IntroScreen.module.css'

// Each line is an array of { text, color } segments
const C = {
  comment:  '#6c7086',
  keyword:  '#cba6f7',
  cls:      '#89dceb',
  string:   '#a6e3a1',
  func:     '#89b4fa',
  var:      '#cdd6f4',
  prop:     '#89b4fa',
  fstr:     '#fab387',
  bracket:  '#cdd6f4',
  op:       '#89dceb',
}

const LINES = [
  [{ text: "# sooya's portfolio", color: C.comment }],
  [],
  [
    { text: 'class ',     color: C.keyword },
    { text: 'Developer',  color: C.cls },
    { text: ':',          color: C.var },
  ],
  [
    { text: '    name  = ', color: C.var },
    { text: '"sooya"', color: C.string },
  ],
  [
    { text: '    role  = ', color: C.var },
    { text: '"Full-stack Developer"', color: C.string },
  ],
  [
    { text: '    stack = [', color: C.var },
    { text: '"Frontend"', color: C.string },
    { text: ', ',           color: C.var },
    { text: '"Backend"',    color: C.string },
    { text: ', ',           color: C.var },
    { text: '"Mobile"',     color: C.string },
    { text: ', ',           color: C.var },
    { text: '"Web"',        color: C.string },
    { text: ']',            color: C.bracket },
  ],
  [],
  [
    { text: 'dev',       color: C.var },
    { text: ' = ',       color: C.op },
    { text: 'Developer', color: C.cls },
    { text: '()',        color: C.bracket },
  ],
  [
    { text: 'print',          color: C.func },
    { text: '(',              color: C.bracket },
    { text: 'dev',            color: C.var },
    { text: '.',              color: C.var },
    { text: 'introduce',      color: C.func },
    { text: '())',            color: C.bracket },
  ],
  [],
  [{ text: '# Portfolio ready ✓', color: C.comment }],
]

function lineText(segments) {
  return segments.map(s => s.text).join('')
}

function sliceSegments(segments, n) {
  const result = []
  let rem = n
  for (const seg of segments) {
    if (rem <= 0) break
    result.push({ ...seg, text: seg.text.slice(0, rem) })
    rem -= seg.text.length
  }
  return result
}

const CHAR_DELAY = 30
const LINE_PAUSE = 200

export default function IntroScreen({ onEnter }) {
  const [leaving, setLeaving]           = useState(false)
  const [done, setDone]                 = useState(false)
  const [lineIdx, setLineIdx]           = useState(0)
  const [charIdx, setCharIdx]           = useState(0)
  const [completed, setCompleted]       = useState([])
  const [cursorOn, setCursorOn]         = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    const t = setInterval(() => setCursorOn(v => !v), 500)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    if (lineIdx >= LINES.length) { setDone(true); return }
    const segs = LINES[lineIdx]
    const full = lineText(segs)

    if (full === '') {
      const t = setTimeout(() => {
        setCompleted(p => [...p, segs])
        setLineIdx(i => i + 1)
        setCharIdx(0)
      }, LINE_PAUSE)
      return () => clearTimeout(t)
    }

    if (charIdx < full.length) {
      const t = setTimeout(() => setCharIdx(c => c + 1), CHAR_DELAY)
      return () => clearTimeout(t)
    }

    const t = setTimeout(() => {
      setCompleted(p => [...p, segs])
      setLineIdx(i => i + 1)
      setCharIdx(0)
    }, LINE_PAUSE)
    return () => clearTimeout(t)
  }, [lineIdx, charIdx])

  const handleClick = () => {
    if (leaving) return
    setLeaving(true)
    setTimeout(onEnter, 600)
  }

  const currentSegs = lineIdx < LINES.length && lineText(LINES[lineIdx]) !== ''
    ? sliceSegments(LINES[lineIdx], charIdx)
    : null

  return (
    <div className={`${styles.overlay} ${leaving ? styles.overlayOut : ''}`} onClick={handleClick}>
      <div className={`${styles.editor} ${leaving ? styles.editorOut : ''}`}>

        {/* Activity bar */}
        <div className={styles.activityBar}>
          <span className={styles.actDot} />
          <span className={styles.actDot} />
          <span className={styles.actDot} />
        </div>

        {/* Tab bar */}
        <div className={styles.tabBar}>
          <div className={styles.tab}>
            <span className={styles.tabIcon}>🐍</span>
            portfolio.py
          </div>
        </div>

        {/* Code area */}
        <div className={styles.codeArea}>
          <div className={styles.lineNumbers}>
            {Array.from({ length: LINES.length }, (_, i) => (
              <div key={i} className={styles.lineNum}
                style={{ color: i < completed.length || (i === lineIdx && currentSegs) ? '#858585' : '#404040' }}>
                {i + 1}
              </div>
            ))}
          </div>

          <div className={styles.codeLines}>
            {completed.map((segs, i) => (
              <div key={i} className={styles.codeLine}>
                {segs.length === 0
                  ? <span>&nbsp;</span>
                  : segs.map((s, j) => (
                      <span key={j} style={{ color: s.color }}>{s.text}</span>
                    ))
                }
              </div>
            ))}

            {currentSegs && (
              <div className={styles.codeLine}>
                {currentSegs.map((s, j) => (
                  <span key={j} style={{ color: s.color }}>{s.text}</span>
                ))}
                <span className={styles.cursor} style={{ opacity: cursorOn ? 1 : 0 }}>|</span>
              </div>
            )}

            {done && (
              <div className={styles.codeLine}>
                <span className={styles.cursor} style={{ opacity: cursorOn ? 1 : 0, color: '#a6e3a1' }}>|</span>
              </div>
            )}

            {/* remaining empty lines */}
            {Array.from({ length: Math.max(0, LINES.length - completed.length - (currentSegs ? 1 : 0) - (done ? 1 : 0)) }, (_, i) => (
              <div key={`empty-${i}`} className={styles.codeLine}>&nbsp;</div>
            ))}
          </div>
        </div>

        {/* Status bar */}
        <div className={styles.statusBar}>
          <span>Python 3</span>
          <span>UTF-8</span>
          {done && (
            <span className={styles.hint} style={{ opacity: cursorOn ? 1 : 0.4 }}>
              Click anywhere to enter
            </span>
          )}
        </div>

      </div>
    </div>
  )
}