'use client'

import { useEffect, useState } from 'react'
import type { TocItem } from '@/lib/toc'

export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[]

    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-80px 0px -70% 0px', threshold: 0 }
    )

    for (const heading of headings) {
      observer.observe(heading)
    }

    return () => observer.disconnect()
  }, [items])

  if (items.length === 0) return null

  return (
    <>
      {/* Mobile: collapsible TOC */}
      <details className="lg:hidden border border-gray-200 rounded-lg p-4 mb-6">
        <summary className="font-semibold text-gray-900 cursor-pointer select-none">
          Table of Contents
        </summary>
        <nav aria-label="Table of contents" className="mt-3">
          <ul className="space-y-1.5 text-sm">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`block no-underline transition-colors ${
                    item.level === 3 ? 'pl-3' : ''
                  } ${
                    activeId === item.id
                      ? 'text-sky-600 font-medium'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </details>

      {/* Desktop: sticky sidebar */}
      <nav
        aria-label="Table of contents"
        className="hidden lg:block sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto w-64 flex-shrink-0"
      >
        <h2 className="font-semibold text-gray-900 text-sm uppercase tracking-wider mb-3">
          Table of Contents
        </h2>
        <ul className="space-y-1.5 text-sm border-l border-gray-200">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block no-underline transition-colors pl-3 -ml-px border-l-2 ${
                  item.level === 3 ? 'pl-6' : ''
                } ${
                  activeId === item.id
                    ? 'border-sky-500 text-sky-600 font-medium'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
