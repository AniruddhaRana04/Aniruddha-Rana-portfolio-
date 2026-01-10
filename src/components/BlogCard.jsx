"use client"

import { useState } from 'react'

export default function BlogCard({ title, date, short_description, description, slug, image = '/blogs/placeholder-1.svg' }) {
  const [expanded, setExpanded] = useState(false)

  const hasShort = Boolean(short_description)
  const fullText = description ?? short_description ?? ''
  const collapsedText = short_description ?? fullText
  const needsToggle = hasShort ? short_description.length > 140 : fullText.length > 140

  return (
    <article className="bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition overflow-hidden rounded-lg w-full h-full">
      <div className="flex flex-col md:flex-row items-stretch gap-4">
        <div className="md:flex-shrink-0 md:w-40 overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-t-none p-2">
          <img src={image} alt={title} className="w-full h-32 md:h-32 object-cover object-center block rounded-sm" />
        </div>

        <div className="p-4 flex-1 flex flex-col justify-between md:min-h-[8rem]">
          <div>
            <h3 className="font-semibold text-lg gradient-text">{title}</h3>
            {date && (
              <p className="text-xs text-slate-500 mt-1">{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
            )}

            <div
              className={`text-sm text-slate-600 dark:text-slate-300 mt-3 transition-all break-words ${expanded ? 'max-h-[1000px]' : 'h-20 overflow-hidden'}`}
            >
              {expanded ? (hasShort ? short_description : fullText) : collapsedText}
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <a
              href={slug ? `/blog/${slug}` : '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-sky-600 text-white px-3 py-1 rounded hover:bg-sky-700"
            >
              Read blog
            </a>

            {needsToggle && (
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
    </article>
  )
}
