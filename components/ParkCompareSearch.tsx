'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { Search } from 'lucide-react'

export default function ParkCompareSearch() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') ?? '')
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    // Sync state when URL changes externally (e.g. back/forward)
    setQuery(searchParams.get('q') ?? '')
  }, [searchParams])

  function handleChange(value: string) {
    setQuery(value)

    if (timerRef.current) clearTimeout(timerRef.current)

    timerRef.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString())
      if (value.trim()) {
        params.set('q', value.trim())
      } else {
        params.delete('q')
      }
      const qs = params.toString()
      router.replace(qs ? `/parks/compare?${qs}` : '/parks/compare')
    }, 300)
  }

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
      <input
        type="text"
        value={query}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Search comparisons..."
        className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-emerald-300 focus:ring-1 focus:ring-emerald-300 transition-colors"
      />
    </div>
  )
}
