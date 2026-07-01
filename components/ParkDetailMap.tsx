'use client'

import { useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import type { NationalParkDestination } from '@/lib/types'

// Fix Leaflet default icon issue in Next.js/webpack
delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

const hotelIcon = L.divIcon({
  html: '<div style="width:36px;height:36px;border-radius:50%;background:#3b82f6;border:2px solid white;display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;font-size:16px;line-height:1;box-shadow:0 2px 6px rgba(0,0,0,0.3);">H</div>',
  className: '',
  iconSize: [36, 36],
  iconAnchor: [18, 18],
  popupAnchor: [0, -18],
})

const trailheadIcon = L.divIcon({
  html: '<div style="width:36px;height:36px;border-radius:50%;background:#f97316;border:2px solid white;display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;font-size:16px;line-height:1;box-shadow:0 2px 6px rgba(0,0,0,0.3);">&#9650;</div>',
  className: '',
  iconSize: [36, 36],
  iconAnchor: [18, 18],
  popupAnchor: [0, -18],
})

function FitBounds({ park }: { park: NationalParkDestination }) {
  const map = useMap()

  useEffect(() => {
    const points: [number, number][] = [[park.lat, park.lng]]
    park.hotels.forEach((h) => points.push([h.lat, h.lng]))
    park.trailheads?.forEach((t) => points.push([t.lat, t.lng]))

    if (points.length > 0) {
      const bounds = L.latLngBounds(points)
      map.fitBounds(bounds, { padding: [40, 40], maxZoom: 13 })
    }
  }, [map, park])

  return null
}

function ParkBoundary({ unitCode }: { unitCode: string }) {
  const [geoData, setGeoData] = useState<GeoJSON.FeatureCollection | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    const url = `https://services1.arcgis.com/fBc8EJBxQRMcHlei/arcgis/rest/services/NPS_Land_Resources_Division_Boundary_and_Tract_Data_Service/FeatureServer/2/query?where=UNIT_CODE='${unitCode}'&outFields=UNIT_CODE&outSR=4326&geometryPrecision=4&maxAllowableOffset=0.001&f=geojson`

    fetch(url, { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        if (data.features && data.features.length > 0) {
          setGeoData(data)
        }
      })
      .catch(() => {
        // Silently fail — boundary is optional or fetch was aborted
      })

    return () => controller.abort()
  }, [unitCode])

  if (!geoData) return null

  return (
    <GeoJSON
      key={unitCode}
      data={geoData}
      style={{
        color: '#166534',
        weight: 2,
        opacity: 0.8,
        fillColor: '#22c55e',
        fillOpacity: 0.12,
        dashArray: '6 4',
      }}
    />
  )
}

const difficultyColors: Record<string, string> = {
  Easy: 'bg-green-100 text-green-700',
  Moderate: 'bg-yellow-100 text-yellow-700',
  Strenuous: 'bg-red-100 text-red-700',
}

export default function ParkDetailMap({ park }: { park: NationalParkDestination }) {
  const [tileLayer, setTileLayer] = useState<'street' | 'topo'>('street')
  const mapRef = useRef<L.Map | null>(null)

  useEffect(() => {
    window.dispatchEvent(new Event('resize'))
  }, [])

  return (
    <div className="relative">
      <div className="w-full h-[350px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden border border-gray-200">
        <MapContainer
          center={[park.lat, park.lng]}
          zoom={10}
          className="w-full h-full"
          scrollWheelZoom
          ref={mapRef}
        >
          {tileLayer === 'street' ? (
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          ) : (
            <TileLayer
              attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a>'
              url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
              maxZoom={17}
            />
          )}

          {/* Road overlay for better road visibility */}
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}"
            opacity={0.6}
          />

          <FitBounds park={park} />

          {park.unitCode && <ParkBoundary unitCode={park.unitCode} />}

          {/* Hotel markers */}
          {park.hotels.map((hotel) => (
            <Marker key={hotel.slug} position={[hotel.lat, hotel.lng]} icon={hotelIcon}>
              <Popup>
                <div className="text-sm min-w-[200px]">
                  <h3 className="font-bold text-gray-900 mb-1">{hotel.name}</h3>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-gray-600">{hotel.priceRange}</span>
                    <span className="text-xs text-gray-500">{hotel.pricePerNight}/night</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">{hotel.distanceToSlopes}</p>
                  <a
                    href={hotel.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-block text-xs font-medium bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition-colors no-underline"
                  >
                    Check on Hotels.com
                  </a>
                </div>
              </Popup>
            </Marker>
          ))}

          {/* Trailhead markers */}
          {park.trailheads?.map((trail) => (
            <Marker key={trail.name} position={[trail.lat, trail.lng]} icon={trailheadIcon}>
              <Popup>
                <div className="text-sm min-w-[180px]">
                  <h3 className="font-bold text-gray-900 mb-1">{trail.name}</h3>
                  <span className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium mb-1.5 ${difficultyColors[trail.difficulty]}`}>
                    {trail.difficulty}
                  </span>
                  <div className="text-xs text-gray-600 space-y-0.5">
                    <div>{trail.distance}</div>
                    <div>Elevation gain: {trail.elevationGain}</div>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Tile layer toggle */}
      <div className="absolute top-3 right-3 z-[1000]">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden flex text-xs">
          <button
            onClick={() => setTileLayer('street')}
            className={`px-3 py-1.5 transition-colors ${tileLayer === 'street' ? 'bg-emerald-600 text-white' : 'text-gray-700 hover:bg-gray-50'}`}
          >
            Street
          </button>
          <button
            onClick={() => setTileLayer('topo')}
            className={`px-3 py-1.5 transition-colors ${tileLayer === 'topo' ? 'bg-emerald-600 text-white' : 'text-gray-700 hover:bg-gray-50'}`}
          >
            Topo
          </button>
        </div>
      </div>

      {/* Legend */}
      <div className="absolute bottom-3 left-3 z-[1000] bg-white/95 backdrop-blur-sm rounded-lg shadow-md border border-gray-200 px-3 py-2 text-xs">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-blue-500 inline-block"></span>
            <span className="text-gray-700">Hotel</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-orange-500 inline-block"></span>
            <span className="text-gray-700">Trailhead</span>
          </div>
          {park.unitCode && (
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded inline-block border-2 border-green-800 border-dashed bg-green-500/20"></span>
              <span className="text-gray-700">Park Boundary</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
