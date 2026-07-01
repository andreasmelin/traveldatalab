import Link from 'next/link'
import { MapPin, TreePine, ArrowRight } from 'lucide-react'
import type { NationalParkDestination } from '@/lib/types'

export default function ParkCard({ park }: { park: NationalParkDestination }) {
  return (
    <Link
      href={`/parks/${park.slug}`}
      className="group block bg-white rounded-xl border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all no-underline overflow-hidden"
    >
      <div className="relative bg-gradient-to-br from-emerald-800 to-emerald-950 px-5 py-4">
        <div className="relative flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
              {park.name}
            </h3>
            <div className="flex items-center gap-1 text-sm text-emerald-200">
              <MapPin className="w-3.5 h-3.5" />
              {park.state}, {park.country}
            </div>
          </div>
          <TreePine className="w-8 h-8 text-emerald-400 opacity-50" />
        </div>
      </div>
      <div className="p-5">
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{park.tagline}</p>
        <div className="grid grid-cols-3 gap-3 mb-3">
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900">{park.acreage.toLocaleString()}</div>
            <div className="text-xs text-gray-500">Acres</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900">{park.numberOfTrails}</div>
            <div className="text-xs text-gray-500">Trails</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900">{park.annualVisitors.split(' ')[0]}</div>
            <div className="text-xs text-gray-500">Visitors/yr</div>
          </div>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-400">{park.bestMonths.slice(0, 3).join(', ')}</span>
          <span className="flex items-center gap-1 text-emerald-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Explore <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}
