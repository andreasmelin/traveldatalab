'use client'

import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import type { Destination, SkiDestination, NationalParkDestination } from '@/lib/types'

// Fix Leaflet default icon issue in Next.js/webpack
delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

function isSkiDestination(d: Destination): d is SkiDestination {
  return d.activityType === 'ski'
}

function isParkDestination(d: Destination): d is NationalParkDestination {
  return d.activityType === 'parks'
}

export default function ResortMap({
  destinations,
}: {
  destinations: Destination[]
}) {
  useEffect(() => {
    // Force Leaflet to recalculate map size after render
    window.dispatchEvent(new Event('resize'))
  }, [])

  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden border border-gray-200">
      <MapContainer
        center={[39.8, -98.5]}
        zoom={4}
        className="w-full h-full"
        scrollWheelZoom
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {destinations.map((dest) => {
          const ski = isSkiDestination(dest) ? dest : null
          const park = isParkDestination(dest) ? dest : null
          const linkColor = park ? 'text-emerald-600 hover:text-emerald-700' : 'text-sky-600 hover:text-sky-700'
          return (
            <Marker key={dest.slug} position={[dest.lat, dest.lng]}>
              <Popup>
                <div className="text-sm">
                  <h3 className="font-bold text-gray-900 mb-1">{dest.name}</h3>
                  <p className="text-gray-500 text-xs mb-2">
                    {dest.state}, {dest.country}
                  </p>
                  {ski && (
                    <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-gray-700 mb-2">
                      <span>{ski.skiableAcres.toLocaleString()} acres</span>
                      <span>{ski.numberOfTrails} trails</span>
                      <span>Snow: {ski.snowfall}</span>
                      <span>{ski.verticalDrop.toLocaleString()}&apos; vert</span>
                    </div>
                  )}
                  {park && (
                    <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-gray-700 mb-2">
                      <span>{park.acreage.toLocaleString()} acres</span>
                      <span>{park.numberOfTrails} trails</span>
                      <span>{park.annualVisitors}</span>
                      <span>Est. {park.established}</span>
                    </div>
                  )}
                  <a
                    href={`/${dest.activityType === 'parks' ? 'parks' : 'ski'}/${dest.slug}`}
                    className={`${linkColor} font-medium text-xs`}
                  >
                    View details &rarr;
                  </a>
                </div>
              </Popup>
            </Marker>
          )
        })}
      </MapContainer>
    </div>
  )
}
