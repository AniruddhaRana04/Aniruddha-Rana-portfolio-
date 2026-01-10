"use client"

import { useState } from 'react'

export default function ProjectCard({ title, description, href, image = '/projects/placeholder-1.svg' }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition overflow-hidden rounded-lg w-full h-full flex flex-col md:flex-row gap-4 items-start">
      <div className="md:flex-shrink-0 md:w-40 p-2">
        <div className="overflow-hidden rounded-lg aspect-[16/9] md:aspect-[16/9] bg-slate-100 dark:bg-slate-800">
          <img src={image} alt={title} className="w-full h-full object-cover object-center block" />
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col">
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
