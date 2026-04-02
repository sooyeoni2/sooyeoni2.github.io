import { useEffect, useRef } from 'react'
import styles from './StarField.module.css'

export default function StarField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let stars = []

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect()
      canvas.width = rect.width || window.innerWidth
      canvas.height = rect.height || window.innerHeight
    }

    const draw4Star = (ctx, size) => {
      ctx.beginPath()
      for (let i = 0; i < 4; i++) {
        const a = (i * Math.PI) / 2
        ctx.lineTo(Math.cos(a) * size, Math.sin(a) * size)
        ctx.lineTo(Math.cos(a + Math.PI / 4) * size * 0.35, Math.sin(a + Math.PI / 4) * size * 0.35)
      }
      ctx.closePath()
      ctx.fill()
    }

    const draw6Star = (ctx, size) => {
      ctx.beginPath()
      for (let i = 0; i < 12; i++) {
        const a = (i * Math.PI) / 6 - Math.PI / 2
        const r = i % 2 === 0 ? size : size * 0.45
        ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r)
      }
      ctx.closePath()
      ctx.fill()
    }

    const draw5Star = (ctx, size) => {
      ctx.beginPath()
      for (let i = 0; i < 5; i++) {
        const ao = (i * 2 * Math.PI) / 5 - Math.PI / 2
        const ai = ao + Math.PI / 5
        ctx.lineTo(Math.cos(ao) * size, Math.sin(ao) * size)
        ctx.lineTo(Math.cos(ai) * size * 0.4, Math.sin(ai) * size * 0.4)
      }
      ctx.closePath()
      ctx.fill()
    }

    const drawStar = (x, y, size, opacity, type) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.globalAlpha = opacity
      ctx.fillStyle = '#c8d8ff'
      if (type === 0) draw4Star(ctx, size)
      else if (type === 1) draw5Star(ctx, size)
      else draw6Star(ctx, size)
      ctx.restore()
    }

    const createStar = (randomY = false) => ({
      x: Math.random() * canvas.width,
      y: randomY ? Math.random() * canvas.height : -20,
      size: Math.random() * 6 + 3,
      speed: Math.random() * 0.8 + 0.3,
      opacity: Math.random() * 0.5 + 0.3,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: (Math.random() - 0.5) * 0.015,
      twinkle: Math.random() * Math.PI * 2,
      twinkleSpeed: Math.random() * 0.04 + 0.01,
      type: Math.floor(Math.random() * 3),
    })

    resize()
    for (let i = 0; i < 35; i++) stars.push(createStar(true))
    window.addEventListener('resize', resize)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach((s, i) => {
        s.y += s.speed
        s.wobble += s.wobbleSpeed
        s.x += Math.sin(s.wobble) * 0.5
        s.twinkle += s.twinkleSpeed
        const opacity = s.opacity * (0.5 + 0.5 * Math.sin(s.twinkle))
        drawStar(s.x, s.y, s.size, opacity, s.type)
        if (s.y > canvas.height + 20) {
          stars[i] = createStar(false)
        }
      })
      animationId = requestAnimationFrame(animate)
    }

    animate()
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.canvas} />
}
