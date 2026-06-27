import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Mountain, Snowflake, ArrowRight } from 'lucide-react'
import { SkiDestination } from '@/lib/types'

export default function DestinationCard({ destination, resortImage }: { destination: SkiDestination; resortImage?: string | null }) {

  return (
    <Link
      href={`/ski/${destination.slug}`}
      className="group block bg-white rounded-xl border border-gray-100 hover:border-sky-200 hover:shadow-md transition-all no-underline overflow-hidden"
    >
      <div className="relative bg-gradient-to-br from-slate-700 to-slate-900 px-5 py-4">
        {resortImage && (
          <Image
            src={resortImage}
            alt=""
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
          <Snowflake className="w-8 h-8 text-sky-400 opacity-50" />
        </div>
      </div>
      <div className="p-5">
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{destination.tagline}</p>
        <div className="grid grid-cols-3 gap-3 mb-3">
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900">{destination.skiableAcres.toLocaleString()}</div>
            <div className="text-xs text-gray-500">Acres</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900">{destination.numberOfTrails}</div>
            <div className="text-xs text-gray-500">Trails</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900">{destination.verticalDrop.toLocaleString()}&apos;</div>
            <div className="text-xs text-gray-500">Vertical</div>
          </div>
        </div>
        <div className="flex gap-1 mb-3">
          <div className="h-2 rounded-l-full bg-green-400" style={{ width: `${destination.terrain.beginner}%` }} title={`${destination.terrain.beginner}% Beginner`} />
          <div className="h-2 bg-blue-400" style={{ width: `${destination.terrain.intermediate}%` }} title={`${destination.terrain.intermediate}% Intermediate`} />
          <div className="h-2 rounded-r-full bg-gray-900" style={{ width: `${destination.terrain.advanced}%` }} title={`${destination.terrain.advanced}% Advanced`} />
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-400">{destination.snowfall} annual snowfall</span>
          <span className="flex items-center gap-1 text-sky-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Explore <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}
