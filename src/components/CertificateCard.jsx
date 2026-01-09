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
    <article className="card flex gap-4 items-start h-full">
      <img src={image} alt={title} className="w-28 h-20 rounded flex-shrink-0" />

      <div className="flex-1 flex flex-col">
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
