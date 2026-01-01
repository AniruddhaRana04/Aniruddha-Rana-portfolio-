'use client'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const root = document.documentElement
    const initial = localStorage.theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setTheme(initial)
    root.classList.toggle('dark', initial === 'dark')
  }, [])

  function toggle() {
    const root = document.documentElement
    const next = theme === 'dark' ? 'light' : 'dark'
    root.classList.toggle('dark', next === 'dark')
    setTheme(next)
    localStorage.theme = next
  }

  return (
    <button onClick={toggle} aria-label="Toggle theme" className="px-2 py-1 rounded border">
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  )
}
