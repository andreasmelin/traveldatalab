import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ChevronRight,
  TreePine,
  MapPin,
  Calendar,
  Plane,
  ThermometerSun,
  CheckCircle,
  DollarSign,
  Hotel,
  CloudRain,
  Clock,
  ArrowRight,
  ExternalLink,
} from 'lucide-react'
import { getParkBySlug, getAllParkSlugs } from '@/lib/national-parks'
import ParkDetailMapWrapper from '@/components/ParkDetailMapWrapper'

export async function generateStaticParams() {
  return getAllParkSlugs().map((slug) => ({ destination: slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ destination: string }>
}): Promise<Metadata> {
  const { destination: slug } = await params
  const park = getParkBySlug(slug)
  if (!park) return {}

  return {
    title: `${park.name}: Trails, Visitor Guide & Best Time to Visit`,
    description: `Plan your trip to ${park.name} in ${park.state}. ${park.acreage.toLocaleString()} acres, ${park.numberOfTrails} trails, ${park.annualVisitors} annual visitors. Find the best time to visit and top highlights.`,
    alternates: { canonical: `/parks/${park.slug}` },
    openGraph: {
      title: `${park.name}: Trails, Visitor Guide & Best Time to Visit`,
      description: park.tagline,
      url: `/parks/${park.slug}`,
    },
  }
}

export default async function ParkDetailPage({
  params,
}: {
  params: Promise<{ destination: string }>
}) {
  const { destination: slug } = await params
  const park = getParkBySlug(slug)
  if (!park) notFound()

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://traveldatalab.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'National Parks',
        item: 'https://traveldatalab.com/parks',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: park.name,
        item: `https://traveldatalab.com/parks/${park.slug}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4"
      >
        <ol className="flex items-center gap-1.5 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-emerald-600 no-underline">
              Home
            </Link>
          </li>
          <li>
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li>
            <Link href="/parks" className="hover:text-emerald-600 no-underline">
              National Parks
            </Link>
          </li>
          <li>
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li className="font-medium text-gray-900">{park.name}</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-800 via-emerald-900 to-green-950 text-white mt-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex items-center gap-2 mb-3">
            <TreePine className="w-6 h-6 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">
              National Park Guide
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{park.name}</h1>
          <div className="flex items-center gap-1.5 text-emerald-200 mb-6">
            <MapPin className="w-4 h-4" />
            <span>
              {park.state}, {park.country}
            </span>
          </div>
          <p className="text-lg text-emerald-100 max-w-2xl mb-8">
            {park.tagline}
          </p>

          {/* Key stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white">
                {park.acreage.toLocaleString()}
              </div>
              <div className="text-sm text-emerald-200">Acres</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white">
                {park.numberOfTrails}
              </div>
              <div className="text-sm text-emerald-200">Trails</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white">
                {park.established}
              </div>
              <div className="text-sm text-emerald-200">Established</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white">
                {park.annualVisitors}
              </div>
              <div className="text-sm text-emerald-200">Annual Visitors</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Quick Info Grid */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Info</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-gray-100 rounded-lg p-4 flex items-start gap-3">
              <Calendar className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-medium text-gray-900">Season</div>
                <div className="text-sm text-gray-600">{park.season}</div>
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-lg p-4 flex items-start gap-3">
              <DollarSign className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-medium text-gray-900">
                  Entrance Fee
                </div>
                <div className="text-sm text-gray-600">{park.entranceFee}</div>
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-lg p-4 flex items-start gap-3">
              <Plane className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-medium text-gray-900">
                  Nearest Airport
                </div>
                <div className="text-sm text-gray-600">
                  {park.nearestAirport} ({park.airportCode}),{' '}
                  {park.driveFromAirport}
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-lg p-4 flex items-start gap-3">
              <ThermometerSun className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-medium text-gray-900">
                  Best Months
                </div>
                <div className="text-sm text-gray-600">
                  {park.bestMonths.join(', ')}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Highlights</h2>
          <ul className="space-y-2">
            {park.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2 text-gray-700"
              >
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Park Map */}
        {park.trailheads && park.trailheads.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-1">Park Map</h2>
            <p className="text-sm text-gray-500 mb-4">
              Explore trailheads, hotels, and points of interest
            </p>
            <ParkDetailMapWrapper park={park} />
          </section>
        )}

        {/* Description */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            About {park.name}
          </h2>
          <p className="text-gray-700 leading-relaxed">{park.description}</p>
        </section>

        {/* Explore More Links */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Explore More</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href={`/parks/${park.slug}/hotels`}
              className="group flex items-center gap-3 bg-white border border-gray-100 hover:border-emerald-200 hover:shadow-md rounded-lg p-4 no-underline transition-all"
            >
              <Hotel className="w-5 h-5 text-emerald-500" />
              <div className="flex-1">
                <div className="font-medium text-gray-900 group-hover:text-emerald-600 transition-colors">Hotels</div>
                <div className="text-xs text-gray-500">{park.hotels.length} options near {park.name}</div>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-emerald-500 transition-colors" />
            </Link>
            <Link
              href={`/parks/${park.slug}/weather`}
              className="group flex items-center gap-3 bg-white border border-gray-100 hover:border-emerald-200 hover:shadow-md rounded-lg p-4 no-underline transition-all"
            >
              <CloudRain className="w-5 h-5 text-emerald-500" />
              <div className="flex-1">
                <div className="font-medium text-gray-900 group-hover:text-emerald-600 transition-colors">Weather</div>
                <div className="text-xs text-gray-500">Monthly climate data</div>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-emerald-500 transition-colors" />
            </Link>
            <Link
              href={`/parks/${park.slug}/best-time-to-visit`}
              className="group flex items-center gap-3 bg-white border border-gray-100 hover:border-emerald-200 hover:shadow-md rounded-lg p-4 no-underline transition-all"
            >
              <Clock className="w-5 h-5 text-emerald-500" />
              <div className="flex-1">
                <div className="font-medium text-gray-900 group-hover:text-emerald-600 transition-colors">Best Time to Visit</div>
                <div className="text-xs text-gray-500">Month-by-month analysis</div>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-emerald-500 transition-colors" />
            </Link>
          </div>
        </section>

        {/* Hotels Preview */}
        {park.hotels.length > 0 && (
          <section className="mb-10">
            <div className="flex items-end justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Where to Stay</h2>
              <Link
                href={`/parks/${park.slug}/hotels`}
                className="text-sm font-medium text-emerald-600 hover:text-emerald-700 no-underline flex items-center gap-1"
              >
                View all hotels <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="space-y-3">
              {park.hotels.slice(0, 3).map((hotel) => (
                <div
                  key={hotel.slug}
                  className="bg-white rounded-lg border border-gray-100 p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-gray-900 text-base truncate">{hotel.name}</h3>
                        <span className="text-sm font-bold text-gray-600">{hotel.priceRange}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{hotel.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${hotel.skiInSkiOut ? 'bg-emerald-100 text-emerald-700 font-semibold' : 'bg-gray-100 text-gray-600'}`}>
                          {hotel.distanceToSlopes}
                        </span>
                        <span className="text-xs text-gray-500">{hotel.pricePerNight}/night</span>
                      </div>
                    </div>
                    <a
                      href={hotel.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="flex-shrink-0 inline-flex items-center gap-1.5 text-sm font-medium bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors no-underline whitespace-nowrap"
                    >
                      Check on Hotels.com
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Park Details */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Park Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-100 rounded-lg p-4">
              <div className="text-sm text-gray-500 mb-1">Highest Point</div>
              <div className="font-medium text-gray-900">{park.highestPoint}</div>
            </div>
            <div className="bg-white border border-gray-100 rounded-lg p-4">
              <div className="text-sm text-gray-500 mb-1">Camping</div>
              <div className="font-medium text-gray-900">{park.camping ? 'Available' : 'Not available'}</div>
            </div>
            <div className="bg-white border border-gray-100 rounded-lg p-4">
              <div className="text-sm text-gray-500 mb-1">Wilderness Areas</div>
              <div className="font-medium text-gray-900">{park.wilderness ? 'Yes' : 'No'}</div>
            </div>
            <div className="bg-white border border-gray-100 rounded-lg p-4">
              <div className="text-sm text-gray-500 mb-1">Pet Friendly</div>
              <div className="font-medium text-gray-900">{park.petFriendly ? 'Yes (limited areas)' : 'Limited (developed areas only)'}</div>
            </div>
            <div className="bg-white border border-gray-100 rounded-lg p-4">
              <div className="text-sm text-gray-500 mb-1">Region</div>
              <div className="font-medium text-gray-900">{park.region}</div>
            </div>
            <div className="bg-white border border-gray-100 rounded-lg p-4">
              <div className="text-sm text-gray-500 mb-1">Established</div>
              <div className="font-medium text-gray-900">{park.established}</div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
