'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Fuse from 'fuse.js'
import { Search, X } from 'lucide-react'
import { getSearchIndex, type SearchItem } from '@/lib/searchIndex'

const searchIndex = getSearchIndex()

const fuse = new Fuse(searchIndex, {
  keys: [
    { name: 'title', weight: 0.6 },
    { name: 'description', weight: 0.3 },
    { name: 'category', weight: 0.1 },
  ],
  threshold: 0.4,
  includeScore: true,
})

const categoryColors: Record<SearchItem['category'], { bg: string; text: string }> = {
  Resort: { bg: 'bg-sky-100', text: 'text-sky-700' },
  Park: { bg: 'bg-emerald-100', text: 'text-emerald-700' },
  Guide: { bg: 'bg-green-100', text: 'text-green-700' },
  Comparison: { bg: 'bg-amber-100', text: 'text-amber-700' },
  Gear: { bg: 'bg-purple-100', text: 'text-purple-700' },
  Budget: { bg: 'bg-violet-100', text: 'text-violet-700' },
  Travel: { bg: 'bg-teal-100', text: 'text-teal-700' },
}

interface SearchDialogProps {
  open: boolean
  onClose: () => void
}

export default function SearchDialog({ open, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchItem[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (open) {
      setQuery('')
      setResults([])
      setSelectedIndex(0)
      // Small delay to ensure the modal is rendered before focusing
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open])

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      setSelectedIndex(0)
      return
    }
    const fuseResults = fuse.search(query).slice(0, 8)
    setResults(fuseResults.map((r) => r.item))
    setSelectedIndex(0)
  }, [query])

  const navigate = useCallback(
    (url: string) => {
      router.push(url)
      onClose()
    },
    [router, onClose]
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0))
      } else if (e.key === 'Enter' && results[selectedIndex]) {
        e.preventDefault()
        navigate(results[selectedIndex].url)
      } else if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      }
    },
    [results, selectedIndex, navigate, onClose]
  )

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 border-b border-gray-200">
          <Search className="w-5 h-5 text-gray-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search resorts, guides..."
            className="flex-1 py-4 text-base text-gray-900 placeholder-gray-400 outline-none bg-transparent"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-gray-400 hover:text-gray-600"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs text-gray-400 bg-gray-100 rounded border border-gray-200 font-mono">
            ESC
          </kbd>
        </div>

        {/* Results */}
        {results.length > 0 && (
          <ul className="max-h-[60vh] overflow-y-auto py-2">
            {results.map((item, index) => {
              const colors = categoryColors[item.category]
              return (
                <li key={item.url}>
                  <button
                    onClick={() => navigate(item.url)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`w-full text-left px-4 py-3 flex items-start gap-3 transition-colors ${
                      index === selectedIndex
                        ? 'bg-sky-50'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-sm font-medium text-gray-900 truncate">
                          {item.title}
                        </span>
                        <span
                          className={`shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}
                        >
                          {item.category}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 line-clamp-1">
                        {item.description}
                      </p>
                    </div>
                  </button>
                </li>
              )
            })}
          </ul>
        )}

        {/* Empty state */}
        {query.trim() && results.length === 0 && (
          <div className="px-4 py-8 text-center">
            <p className="text-sm text-gray-500">
              No results found for &ldquo;{query}&rdquo;
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-2.5 border-t border-gray-100 bg-gray-50 text-xs text-gray-400">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white rounded border border-gray-200 font-mono text-[10px]">&uarr;</kbd>
              <kbd className="px-1.5 py-0.5 bg-white rounded border border-gray-200 font-mono text-[10px]">&darr;</kbd>
              to navigate
            </span>
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white rounded border border-gray-200 font-mono text-[10px]">&crarr;</kbd>
              to select
            </span>
          </div>
          <span>
            <kbd className="px-1.5 py-0.5 bg-white rounded border border-gray-200 font-mono text-[10px]">ESC</kbd>
            {' '}to close
          </span>
        </div>
      </div>
    </div>
  )
}
