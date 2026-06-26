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
} from 'lucide-react'
import { getDestinationBySlug, getAllDestinationSlugs } from '@/lib/destinations'
import HotelCard from '@/components/HotelCard'

export async function generateStaticParams() {
  return getAllDestinationSlugs().map((slug) => ({ destination: slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ destination: string }>
}): Promise<Metadata> {
  const { destination: slug } = await params
  const dest = getDestinationBySlug(slug)
  if (!dest) return {}

  return {
    title: `Best Hotels Near ${dest.name}: Where to Stay`,
    description: `Find the best hotels and lodging near ${dest.name} in ${dest.state}. Compare prices, amenities, and proximity to slopes for ${dest.hotels.length} hand-picked properties.`,
    alternates: { canonical: `/ski/${dest.slug}/hotels` },
    openGraph: {
      title: `Best Hotels Near ${dest.name}: Where to Stay`,
      description: `Compare ${dest.hotels.length} hand-picked hotels near ${dest.name}. Ski-in/ski-out, budget, and luxury options.`,
      url: `/ski/${dest.slug}/hotels`,
    },
  }
}

export default async function HotelsPage({
  params,
}: {
  params: Promise<{ destination: string }>
}) {
  const { destination: slug } = await params
  const dest = getDestinationBySlug(slug)
  if (!dest) notFound()

  const hotels = dest.hotels
  const priceRanges = [...new Set(hotels.map((h) => h.priceRange))].sort()
  const skiInSkiOutCount = hotels.filter((h) => h.skiInSkiOut).length

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
        name: 'Ski Resorts',
        item: 'https://traveldatalab.com/ski',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: dest.name,
        item: `https://traveldatalab.com/ski/${dest.slug}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Hotels',
        item: `https://traveldatalab.com/ski/${dest.slug}/hotels`,
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
            <Link href="/" className="hover:text-sky-600 no-underline">
              Home
            </Link>
          </li>
          <li>
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li>
            <Link href="/ski" className="hover:text-sky-600 no-underline">
              Ski Resorts
            </Link>
          </li>
          <li>
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li>
            <Link
              href={`/ski/${dest.slug}`}
              className="hover:text-sky-600 no-underline"
            >
              {dest.name}
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
          <Hotel className="w-6 h-6 text-sky-500" />
          <span className="text-sky-600 text-sm font-medium uppercase tracking-wider">
            Where to Stay
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Best Hotels Near {dest.name}
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-6">
          We&apos;ve researched {hotels.length} of the best places to stay near{' '}
          {dest.name} in {dest.state}. Whether you&apos;re looking for
          ski-in/ski-out convenience, family-friendly amenities, or
          budget-conscious options, our curated list has you covered. The nearest
          airport is {dest.nearestAirport} ({dest.airportCode}),{' '}
          {dest.driveFromAirport} from the resort.
        </p>

        {/* Price Range Summary */}
        <div className="bg-gray-50 border border-gray-100 rounded-lg p-5 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-sky-500" />
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
              <span className="text-gray-500">Ski-in/Ski-out:</span>{' '}
              <span className="font-medium">{skiInSkiOutCount}</span>
            </div>
            <div>
              <span className="text-gray-500">Location:</span>{' '}
              <span className="font-medium flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> {dest.state},{' '}
                {dest.country}
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
              destinationName={dest.name}
            />
          ))}
        </div>

        {/* Booking Tips */}
        <section className="bg-sky-50 border border-sky-100 rounded-lg p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-sky-600" />
            Tips for Booking Hotels Near {dest.name}
          </h2>
          <div className="space-y-4 text-sm text-gray-700">
            <div className="flex items-start gap-3">
              <CalendarCheck className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-gray-900">
                  Book early for peak season.
                </span>{' '}
                The best months at {dest.name} are {dest.bestMonths.join(', ')}.
                Hotels fill up fast during holidays and long weekends, so
                booking 2-3 months in advance is recommended for the best rates
                and availability.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <DollarSign className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-gray-900">
                  Midweek savings.
                </span>{' '}
                Rates can drop 20-40% on Sunday through Thursday nights. If your
                schedule allows, skiing midweek means fewer crowds on the
                mountain and lower hotel prices.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Hotel className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-gray-900">
                  Consider ski-in/ski-out.
                </span>{' '}
                While more expensive, ski-in/ski-out properties save you time
                and hassle with shuttles and parking. At {dest.name},{' '}
                {skiInSkiOutCount > 0
                  ? `we recommend ${skiInSkiOutCount} ski-in/ski-out ${skiInSkiOutCount === 1 ? 'property' : 'properties'}`
                  : 'most hotels are a short shuttle ride from the slopes'}
                .
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-gray-900">
                  Check shuttle services.
                </span>{' '}
                Many hotels near {dest.name} offer complimentary shuttle service
                to the slopes. Ask about schedule frequency and pickup locations
                when booking.
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}
