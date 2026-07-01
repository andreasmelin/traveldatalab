import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ChevronRight,
  Hotel,
  DollarSign,
  CalendarCheck,
  Lightbulb,
  MapPin,
  TreePine,
  Tent,
  Bus,
} from 'lucide-react'
import { getParkBySlug, getAllParkSlugs } from '@/lib/national-parks'
import HotelCard from '@/components/HotelCard'

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
    title: `Best Hotels Near ${park.name}: Where to Stay`,
    description: `Find the best hotels and lodging near ${park.name} in ${park.state}. Compare prices, amenities, and proximity to the park for ${park.hotels.length} hand-picked properties.`,
    alternates: { canonical: `/parks/${park.slug}/hotels` },
    openGraph: {
      title: `Best Hotels Near ${park.name}: Where to Stay`,
      description: `Compare ${park.hotels.length} hand-picked hotels near ${park.name}. In-park lodges, gateway town stays, and budget options.`,
      url: `/parks/${park.slug}/hotels`,
    },
  }
}

export default async function HotelsPage({
  params,
}: {
  params: Promise<{ destination: string }>
}) {
  const { destination: slug } = await params
  const park = getParkBySlug(slug)
  if (!park) notFound()

  const hotels = park.hotels
  const priceRanges = [...new Set(hotels.map((h) => h.priceRange))].sort()
  const insideParkCount = hotels.filter((h) => h.skiInSkiOut).length

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
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Hotels',
        item: `https://traveldatalab.com/parks/${park.slug}/hotels`,
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
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-500">
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
          <li>
            <Link
              href={`/parks/${park.slug}`}
              className="hover:text-emerald-600 no-underline"
            >
              {park.name}
            </Link>
          </li>
          <li>
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li className="font-medium text-gray-900">Hotels</li>
        </ol>
      </nav>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-2 mb-3">
          <Hotel className="w-6 h-6 text-emerald-500" />
          <span className="text-emerald-600 text-sm font-medium uppercase tracking-wider">
            Where to Stay
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Best Hotels Near {park.name}
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-6">
          We&apos;ve researched {hotels.length} of the best places to stay near{' '}
          {park.name} in {park.state}. Whether you&apos;re looking for
          in-park lodges, gateway town hotels, or
          budget-friendly options, our curated list has you covered. The nearest
          airport is {park.nearestAirport} ({park.airportCode}),{' '}
          {park.driveFromAirport} from the park.
        </p>

        {/* Price Range Summary */}
        <div className="bg-gray-50 border border-gray-100 rounded-lg p-5 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-emerald-500" />
            Price Range Summary
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Price ranges:</span>{' '}
              <span className="font-medium">{priceRanges.join(', ')}</span>
            </div>
            <div>
              <span className="text-gray-500">Total properties:</span>{' '}
              <span className="font-medium">{hotels.length}</span>
            </div>
            <div>
              <span className="text-gray-500">Inside Park:</span>{' '}
              <span className="font-medium">{insideParkCount}</span>
            </div>
            <div>
              <span className="text-gray-500">Location:</span>{' '}
              <span className="font-medium flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> {park.state},{' '}
                {park.country}
              </span>
            </div>
          </div>
        </div>

        {/* Hotel List */}
        <div className="space-y-4 mb-10">
          {hotels.map((hotel) => (
            <HotelCard
              key={hotel.slug}
              hotel={hotel}
              destinationName={park.name}
              variant="parks"
            />
          ))}
        </div>

        {/* Booking Tips */}
        <section className="bg-emerald-50 border border-emerald-100 rounded-lg p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-emerald-600" />
            Tips for Booking Hotels Near {park.name}
          </h2>
          <div className="space-y-4 text-sm text-gray-700">
            <div className="flex items-start gap-3">
              <CalendarCheck className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-gray-900">
                  Book early for in-park lodges.
                </span>{' '}
                Popular lodges inside {park.name} sell out 6-12 months in
                advance, especially during peak season ({park.bestMonths.join(', ')}).
                Reserve as early as possible to secure in-park accommodations.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <TreePine className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-gray-900">
                  Gateway town alternatives.
                </span>{' '}
                Hotels in nearby gateway towns are usually cheaper with more
                availability. They also offer dining and shopping options that
                in-park lodges may lack.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Tent className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-gray-900">
                  Consider camping.
                </span>{' '}
                {park.camping
                  ? `${park.name} offers campground facilities for a budget-friendly option that puts you closer to nature. Campsite reservations can also fill up quickly during peak months.`
                  : `While ${park.name} has limited camping options, nearby national forests and BLM land may offer dispersed camping opportunities.`}
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Bus className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-gray-900">
                  Check shuttle services.
                </span>{' '}
                Many national parks, including {park.name}, have free shuttle
                systems that can reduce the need for a car and make staying
                outside the park more convenient.
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}
