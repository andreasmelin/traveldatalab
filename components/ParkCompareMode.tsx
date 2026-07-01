'use client'

import { useState, Children } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeftRight, Check, X } from 'lucide-react'
import { parkComparisons } from '@/lib/park-comparisons'

interface Park {
  slug: string
  name: string
}

export default function ParkCompareMode({
  parks,
  children,
}: {
  parks: Park[]
  children: React.ReactNode
}) {
  const router = useRouter()
  const [active, setActive] = useState(false)
  const [selected, setSelected] = useState<string[]>([])

  const childArray = Children.toArray(children)

  function toggleSelect(slug: string) {
    setSelected((prev) => {
      if (prev.includes(slug)) return prev.filter((s) => s !== slug)
      if (prev.length >= 2) return prev
      return [...prev, slug]
    })
  }

  function findComparison(slug1: string, slug2: string) {
    return parkComparisons.find(
      (c) =>
        (c.destination1 === slug1 && c.destination2 === slug2) ||
        (c.destination1 === slug2 && c.destination2 === slug1)
    )
  }

  const selectedNames = selected.map(
    (slug) => parks.find((p) => p.slug === slug)?.name ?? slug
  )

  const match =
    selected.length === 2
      ? findComparison(selected[0], selected[1])
      : null

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => {
          setActive((prev) => !prev)
          setSelected([])
        }}
        className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          active
            ? 'bg-emerald-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        <ArrowLeftRight className="w-4 h-4" />
        Compare
      </button>

      {/* Grid with optional selection overlay */}
      {active ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {parks.map((park, index) => {
            const isSelected = selected.includes(park.slug)
            const isDisabled = selected.length >= 2 && !isSelected
            return (
              <div
                key={park.slug}
                className="relative cursor-pointer"
                onClick={() => toggleSelect(park.slug)}
              >
                {/* Selection overlay */}
                <div
                  className={`absolute inset-0 z-10 rounded-xl border-2 transition-colors ${
                    isSelected
                      ? 'border-emerald-500 bg-emerald-50/30'
                      : isDisabled
                        ? 'border-transparent opacity-50'
                        : 'border-transparent hover:border-emerald-200'
                  }`}
                />
                {/* Checkbox */}
                <div
                  className={`absolute top-3 right-3 z-20 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    isSelected
                      ? 'bg-emerald-600 border-emerald-600 text-white'
                      : 'bg-white border-gray-300'
                  }`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5" />}
                </div>
                {/* Render the actual card */}
                <div className="pointer-events-none">
                  {childArray[index] ?? null}
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{children}</div>
      )}

      {/* Floating bottom bar when 2 selected */}
      {active && selected.length === 2 && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <span className="font-medium text-gray-900 truncate">
                {selectedNames[0]}
              </span>
              <ArrowLeftRight className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span className="font-medium text-gray-900 truncate">
                {selectedNames[1]}
              </span>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              {match ? (
                <button
                  onClick={() => router.push(`/parks/compare/${match.slug}`)}
                  className="px-5 py-2 bg-emerald-600 text-white rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors"
                >
                  View Comparison &rarr;
                </button>
              ) : (
                <span className="text-sm text-gray-500">
                  No comparison available for this pair
                </span>
              )}
              <button
                onClick={() => setSelected([])}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Clear selection"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
