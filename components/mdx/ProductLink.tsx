import React from 'react'
import { ExternalLink } from 'lucide-react'

interface ProductLinkProps {
  name: string
  description: string
  url?: string
  badge?: string
  price?: string
}

export function ProductLink({ name, description, url, badge, price }: ProductLinkProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-3 py-4 border-b border-gray-100 last:border-0">
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <span className="font-bold text-gray-900 text-base">{name}</span>
          {badge && (
            <span className="text-xs font-semibold bg-sky-100 text-sky-700 px-2 py-0.5 rounded-full whitespace-nowrap">
              {badge}
            </span>
          )}
          {price && (
            <span className="text-sm font-medium text-gray-500">{price}</span>
          )}
        </div>
        <p className="text-sm text-gray-600 leading-snug">{description}</p>
      </div>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="inline-flex items-center gap-1.5 text-sm font-medium bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg transition-colors no-underline whitespace-nowrap flex-shrink-0"
        >
          Shop
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      )}
    </div>
  )
}
