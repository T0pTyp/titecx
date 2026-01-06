'use client'

import { useEffect, useRef } from 'react'

export default function DashboardBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    // Noise generation
    const imageData = ctx.createImageData(canvas.width, canvas.height)
    const data = imageData.data

    for (let i = 0; i < data.length; i += 4) {
      const noise = Math.random() * 10
      data[i] = 10 + noise
      data[i + 1] = 15 + noise
      data[i + 2] = 20 + noise
      data[i + 3] = 30
    }

    ctx.putImageData(imageData, 0, 0)

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      <canvas
        ref={canvasRef}
        className="fixed inset-0 opacity-30 mix-blend-soft-light pointer-events-none"
      />
    </>
  )
}

