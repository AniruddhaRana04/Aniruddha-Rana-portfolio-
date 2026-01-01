'use client'
import { useEffect, useRef } from 'react'

export default function Reveal({ children, className = '' }) {
  const ref = useRef()

  useEffect(() => {
    if (!ref.current) return
    const el = ref.current
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('animate-fadeIn')
            obs.unobserve(el)
          }
        })
      },
      { threshold: 0.12 }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className={className + ' opacity-0'}>
      {children}
    </div>
  )
}
