"use client"

import { useState } from 'react'

export default function ProjectCard({ title, description, href, image = '/projects/placeholder-1.svg' }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="card flex flex-col md:flex-row gap-4 items-start h-full">
      <img src={image} alt={title} className="w-full md:w-40 h-28 object-cover rounded flex-shrink-0" />

      <div className="flex-1 flex flex-col">
        <h3 className="font-semibold gradient-text">{title}</h3>

        <div className={`text-sm text-slate-600 dark:text-slate-300 mt-2 transition-all ${expanded ? '' : 'max-h-16 overflow-hidden'}`}>
          {description}
        </div>

        <div className="mt-3 flex items-center gap-4">
          {href && (
            <a
              className="text-sky-600 inline-flex items-center gap-2"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              View project <span aria-hidden>→</span>
            </a>
          )}

          {description && description.length > 140 && (
            <button
              type="button"
              onClick={() => setExpanded((s) => !s)}
              className="text-sm text-slate-500 hover:text-slate-700"
              aria-expanded={expanded}
            >
              {expanded ? 'Show less' : 'See more'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
