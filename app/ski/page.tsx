import type { Metadata } from 'next'
import Link from 'next/link'
import { Mountain, ChevronRight, Snowflake, LayoutGrid, Map } from 'lucide-react'
import { skiDestinations, getDestinationsByRegion, sortDestinations, filterDestinations } from '@/lib/destinations'
import { getResortImagePath } from '@/lib/images'
import DestinationCard from '@/components/DestinationCard'
import ResortMapWrapper from '@/components/ResortMapWrapper'

export const metadata: Metadata = {
  title: 'Ski Resorts in the US & Canada',
  description:
    'Browse and compare the best ski resorts across the United States and Canada. View terrain stats, snowfall data, hotels, and weather for every destination.',
  alternates: {
    canonical: '/ski',
  },
  openGraph: {
    title: 'Ski Resorts in the US & Canada',
    description:
      'Browse and compare the best ski resorts across the United States and Canada.',
    url: '/ski',
  },
}

const regions = [
  { label: 'All', value: '' },
  { label: 'Colorado', value: 'Colorado' },
  { label: 'Utah', value: 'Utah' },
  { label: 'California', value: 'California' },
  { label: 'Montana/Wyoming', value: 'Montana/Wyoming' },
  { label: 'Northeast', value: 'Northeast' },
  { label: 'Canada', value: 'Canada' },
]

const sortOptions = [
  { label: 'Default', value: '' },
  { label: 'A-Z', value: 'name-asc' },
  { label: 'Z-A', value: 'name-desc' },
  { label: 'Most Terrain', value: 'acres-desc' },
  { label: 'Most Snow', value: 'snowfall-desc' },
  { label: 'Most Vertical', value: 'vertical-desc' },
]

function buildUrl(
  current: Record<string, string | undefined>,
  updates: Record<string, string | undefined>
) {
  const params = new URLSearchParams()
  const merged = { ...current, ...updates }
  for (const [key, value] of Object.entries(merged)) {
    if (value) params.set(key, value)
  }
  const qs = params.toString()
  return qs ? `/ski?${qs}` : '/ski'
}

export default async function SkiPage({
  searchParams,
}: {
  searchParams: Promise<{
    region?: string
    sort?: string
    terrain?: string
    skiInOut?: string
    view?: string
  }>
}) {
  const { region, sort, terrain, skiInOut, view } = await searchParams
  const currentParams = { region, sort, terrain, skiInOut, view }

  let destinations = region
    ? getDestinationsByRegion(region)
    : [...skiDestinations]

  destinations = filterDestinations(destinations, { terrain, skiInOut })

  if (sort) {
    destinations = sortDestinations(destinations, sort)
  }

  const isMapView = view === 'map'

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
            <Link href="/" className="hover:text-sky-600 no-underline">
              Home
            </Link>
          </li>
          <li>
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li className="font-medium text-gray-900">Ski Resorts</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-800 via-slate-900 to-sky-900 text-white mt-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="w-7 h-7 text-sky-400" />
              <Snowflake className="w-5 h-5 text-sky-300 opacity-60" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Ski Resorts in the{' '}
              <span className="text-sky-400">US &amp; Canada</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl">
              Explore {skiDestinations.length} ski resorts with detailed terrain
              stats, monthly weather data, hotel reviews, and side-by-side
              comparisons. Find the perfect mountain for your next trip.
            </p>
          </div>
        </div>
      </section>

      {/* Region Filters + Sort + View Toggle + Grid/Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Region filters + view toggle row */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {regions.map((r) => {
            const isActive = (region || '') === r.value
            return (
              <Link
                key={r.value}
                href={buildUrl(currentParams, {
                  region: r.value || undefined,
                })}
                className={`px-4 py-2 rounded-full text-sm font-medium no-underline transition-colors ${
                  isActive
                    ? 'bg-sky-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {r.label}
              </Link>
            )
          })}

          {/* View toggle */}
          <div className="flex items-center gap-1 ml-auto">
            <Link
              href={buildUrl(currentParams, { view: undefined })}
              className={`p-2 rounded-lg no-underline transition-colors ${
                !isMapView
                  ? 'bg-sky-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-label="Grid view"
            >
              <LayoutGrid className="w-4 h-4" />
            </Link>
            <Link
              href={buildUrl(currentParams, { view: 'map' })}
              className={`p-2 rounded-lg no-underline transition-colors ${
                isMapView
                  ? 'bg-sky-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-label="Map view"
            >
              <Map className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Sort + Filter row */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {/* Sort dropdown as links */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Sort:</span>
            <div className="flex flex-wrap gap-1">
              {sortOptions.map((s) => {
                const isActive = (sort || '') === s.value
                return (
                  <Link
                    key={s.value}
                    href={buildUrl(currentParams, {
                      sort: s.value || undefined,
                    })}
                    className={`px-3 py-1 rounded-full text-xs font-medium no-underline transition-colors ${
                      isActive
                        ? 'bg-slate-800 text-white'
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {s.label}
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="w-px h-5 bg-gray-200 mx-1 hidden sm:block" />

          {/* Terrain filter */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Terrain:</span>
            <Link
              href={buildUrl(currentParams, {
                terrain: terrain === 'beginner' ? undefined : 'beginner',
              })}
              className={`px-3 py-1 rounded-full text-xs font-medium no-underline transition-colors ${
                terrain === 'beginner'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              Beginner-Friendly
            </Link>
            <Link
              href={buildUrl(currentParams, {
                terrain: terrain === 'advanced' ? undefined : 'advanced',
              })}
              className={`px-3 py-1 rounded-full text-xs font-medium no-underline transition-colors ${
                terrain === 'advanced'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              Advanced
            </Link>
          </div>

          <div className="w-px h-5 bg-gray-200 mx-1 hidden sm:block" />

          {/* Ski-in/out filter */}
          <Link
            href={buildUrl(currentParams, {
              skiInOut: skiInOut === 'true' ? undefined : 'true',
            })}
            className={`px-3 py-1 rounded-full text-xs font-medium no-underline transition-colors ${
              skiInOut === 'true'
                ? 'bg-sky-600 text-white'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
          >
            Ski-In/Ski-Out
          </Link>
        </div>

        {/* Results info */}
        <p className="text-sm text-gray-500 mb-6">
          Showing {destinations.length} resort
          {destinations.length !== 1 ? 's' : ''}
          {region ? ` in ${region}` : ''}
        </p>

        {/* Grid or Map */}
        {isMapView ? (
          <ResortMapWrapper destinations={destinations} />
        ) : destinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((d) => (
              <DestinationCard key={d.slug} destination={d} resortImage={getResortImagePath(d.slug)} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-500">
            <Mountain className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p>No resorts found matching your filters.</p>
            <Link
              href="/ski"
              className="text-sky-600 hover:text-sky-700 no-underline mt-2 inline-block"
            >
              View all resorts
            </Link>
          </div>
        )}
      </section>
    </>
  )
}
