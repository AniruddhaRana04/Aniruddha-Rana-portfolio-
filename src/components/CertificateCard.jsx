"use client"

import { useState } from 'react'

export default function CertificateCard({
  title,
  issuer,
  date,
  description,
  image,
}) {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className="bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition overflow-hidden rounded-lg w-full h-full flex flex-col sm:flex-row gap-4 items-start">
      <div className="sm:flex-shrink-0 sm:w-28 p-2 w-full">
        <div className="overflow-hidden rounded-lg aspect-[16/9] sm:aspect-[16/9] bg-slate-100 dark:bg-slate-800">
          <img src={image} alt={title} loading="lazy" className="w-full h-full object-cover object-center block" />
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-xs text-slate-500">
          {issuer} • {date}
        </p>

        <div className={`text-sm mt-2 transition-all ${expanded ? '' : 'max-h-16 overflow-hidden'}`}>
          {description}
        </div>

        <div className="mt-2 flex items-center gap-4">
          <a href={image} className="inline-block text-sky-600" target="_blank" rel="noopener noreferrer">
            View certificate
          </a>

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
    </article>
  )
}
