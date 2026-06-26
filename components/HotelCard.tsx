import { ExternalLink } from 'lucide-react'
import { Hotel } from '@/lib/types'

const priceColors: Record<string, string> = {
  '$': 'text-green-600',
  '$$': 'text-emerald-600',
  '$$$': 'text-amber-600',
  '$$$$': 'text-rose-600',
}

export default function HotelCard({ hotel, destinationName }: { hotel: Hotel; destinationName: string }) {
  return (
    <div className="bg-white rounded-lg border border-gray-100 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-gray-900 text-base truncate">{hotel.name}</h3>
            <span className={`text-sm font-bold ${priceColors[hotel.priceRange] || 'text-gray-600'}`}>
              {hotel.priceRange}
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-2">{hotel.description}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            <span className={`text-xs px-2 py-0.5 rounded-full ${hotel.skiInSkiOut ? 'bg-sky-100 text-sky-700 font-semibold' : 'bg-gray-100 text-gray-600'}`}>
              {hotel.distanceToSlopes}
            </span>
            <span className="text-xs text-gray-500">{hotel.pricePerNight}/night</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {hotel.amenities.map((a) => (
              <span key={a} className="text-xs bg-gray-50 text-gray-500 px-2 py-0.5 rounded">
                {a}
              </span>
            ))}
          </div>
        </div>
        <a
          href={hotel.bookingUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="flex-shrink-0 inline-flex items-center gap-1.5 text-sm font-medium bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg transition-colors no-underline whitespace-nowrap"
        >
          Book
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  )
}
