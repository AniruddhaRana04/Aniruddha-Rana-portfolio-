'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  return (
    <div className="md:hidden">
      <button aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)} className="p-2 rounded border">
        {open ? '✕' : '☰'}
      </button>

      <div id="mobile-menu" className={`${open ? 'block' : 'hidden'} mt-3 bg-white dark:bg-slate-800 rounded shadow-sm p-4`}>
        <nav className="flex flex-col space-y-2 text-sm">
          <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/certificates" onClick={() => setOpen(false)}>Certificates</Link>
          <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>
      </div>
    </div>
  )
}
