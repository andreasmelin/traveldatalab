import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Snowflake, ArrowRight } from 'lucide-react'
import type { Destination, SkiDestination } from '@/lib/types'

function isSkiDestination(d: Destination): d is SkiDestination {
  return d.activityType === 'ski'
}

export default function DestinationCard({ destination, resortImage }: { destination: Destination; resortImage?: string | null }) {
  const ski = isSkiDestination(destination) ? destination : null

  return (
    <Link
      href={`/${destination.activityType}/${destination.slug}`}
      className="group block bg-white rounded-xl border border-gray-100 hover:border-sky-200 hover:shadow-md transition-all no-underline overflow-hidden"
    >
      <div className="relative bg-gradient-to-br from-slate-700 to-slate-900 px-5 py-4">
        {resortImage && (
          <Image
            src={resortImage}
            alt={`${destination.name} destination`}
            fill
            className="object-cover opacity-40"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        )}
        <div className="relative flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
              {destination.name}
            </h3>
            <div className="flex items-center gap-1 text-sm text-slate-300">
              <MapPin className="w-3.5 h-3.5" />
              {destination.state}, {destination.country}
            </div>
          </div>
          {ski && <Snowflake className="w-8 h-8 text-sky-400 opacity-50" />}
        </div>
      </div>
      <div className="p-5">
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{destination.tagline}</p>
        {ski && (
          <>
            <div className="grid grid-cols-3 gap-3 mb-3">
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900">{ski.skiableAcres.toLocaleString()}</div>
                <div className="text-xs text-gray-500">Acres</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900">{ski.numberOfTrails}</div>
                <div className="text-xs text-gray-500">Trails</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900">{ski.verticalDrop.toLocaleString()}&apos;</div>
                <div className="text-xs text-gray-500">Vertical</div>
              </div>
            </div>
            <div className="flex items-center flex-wrap gap-x-3 gap-y-1 text-xs text-gray-500 mb-3">
              <span className="font-medium text-gray-700">Terrain:</span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                {ski.terrain.beginner}% Beginner
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
                {ski.terrain.intermediate}% Inter.
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-gray-900 inline-block" />
                {ski.terrain.advanced}% Adv.
              </span>
            </div>
          </>
        )}
        <div className="flex items-center justify-between text-xs">
          {ski ? (
            <span className="text-gray-400">Snow: {ski.snowfall}</span>
          ) : (
            <span className="text-gray-400">{destination.bestMonths.slice(0, 3).join(', ')}</span>
          )}
          <span className="flex items-center gap-1 text-sky-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Explore <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}
