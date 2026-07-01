import type { Metadata } from 'next'
import Link from 'next/link'
import { TreePine, ChevronRight, LayoutGrid, Map, X } from 'lucide-react'
import { nationalParks, getParksByRegion, sortParks, filterParks } from '@/lib/national-parks'
import ParkCard from '@/components/ParkCard'
import ParkMapWrapper from '@/components/ParkMapWrapper'
import ParkCompareMode from '@/components/ParkCompareMode'

export const metadata: Metadata = {
  title: 'National Parks in the US',
  description:
    'Explore the best national parks across the United States. View trail info, visitor stats, highlights, and plan your next outdoor adventure.',
  alternates: {
    canonical: '/parks',
  },
  openGraph: {
    title: 'National Parks in the US',
    description:
      'Explore the best national parks across the United States.',
    url: '/parks',
  },
}

const regions = [
  { label: 'All', value: '' },
  { label: 'Rocky Mountain', value: 'Rocky Mountain' },
  { label: 'Southwest', value: 'Southwest' },
  { label: 'Pacific', value: 'Pacific' },
  { label: 'Southeast', value: 'Southeast' },
  { label: 'Alaska/Hawaii', value: 'Alaska/Hawaii' },
]

const sortOptions = [
  { label: 'Default', value: '' },
  { label: 'A-Z', value: 'name-asc' },
  { label: 'Z-A', value: 'name-desc' },
  { label: 'Most Acreage', value: 'acreage-desc' },
  { label: 'Most Trails', value: 'trails-desc' },
  { label: 'Most Visitors', value: 'visitors-desc' },
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
  return qs ? `/parks?${qs}` : '/parks'
}

export default async function ParksPage({
  searchParams,
}: {
  searchParams: Promise<{
    region?: string
    sort?: string
    camping?: string
    petFriendly?: string
    wilderness?: string
    freeEntrance?: string
    view?: string
  }>
}) {
  const { region, sort, camping, petFriendly, wilderness, freeEntrance, view } = await searchParams
  const currentParams = { region, sort, camping, petFriendly, wilderness, freeEntrance, view }

  let parks = region ? getParksByRegion(region) : [...nationalParks]

  parks = filterParks(parks, { camping, petFriendly, wilderness, freeEntrance })

  if (sort) {
    parks = sortParks(parks, sort)
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
        name: 'National Parks',
        item: 'https://traveldatalab.com/parks',
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
          <li className="font-medium text-gray-900">National Parks</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-800 via-emerald-900 to-green-950 text-white mt-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <TreePine className="w-7 h-7 text-emerald-400" />
              <TreePine className="w-5 h-5 text-emerald-300 opacity-60" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              National Parks in the{' '}
              <span className="text-emerald-400">United States</span>
            </h1>
            <p className="text-lg text-emerald-100 max-w-2xl">
              Explore {nationalParks.length} national parks with trail info,
              visitor stats, weather data, and hotel reviews. Find the perfect
              park for your next outdoor adventure.
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
                    ? 'bg-emerald-600 text-white'
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
                  ? 'bg-emerald-600 text-white'
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
                  ? 'bg-emerald-600 text-white'
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
          {/* Sort options */}
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

          {/* Feature filters */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Features:</span>
            <Link
              href={buildUrl(currentParams, {
                camping: camping === 'true' ? undefined : 'true',
              })}
              className={`px-3 py-1 rounded-full text-xs font-medium no-underline transition-colors ${
                camping === 'true'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              Camping
            </Link>
            <Link
              href={buildUrl(currentParams, {
                petFriendly: petFriendly === 'true' ? undefined : 'true',
              })}
              className={`px-3 py-1 rounded-full text-xs font-medium no-underline transition-colors ${
                petFriendly === 'true'
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              Pet Friendly
            </Link>
            <Link
              href={buildUrl(currentParams, {
                wilderness: wilderness === 'true' ? undefined : 'true',
              })}
              className={`px-3 py-1 rounded-full text-xs font-medium no-underline transition-colors ${
                wilderness === 'true'
                  ? 'bg-green-700 text-white'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              Wilderness
            </Link>
            <Link
              href={buildUrl(currentParams, {
                freeEntrance: freeEntrance === 'true' ? undefined : 'true',
              })}
              className={`px-3 py-1 rounded-full text-xs font-medium no-underline transition-colors ${
                freeEntrance === 'true'
                  ? 'bg-sky-600 text-white'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              Free Entrance
            </Link>
          </div>
        </div>

        {/* Clear all filters */}
        {(region || sort || camping || petFriendly || wilderness || freeEntrance) && (
          <Link
            href={view ? `/parks?view=${view}` : '/parks'}
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-red-500 no-underline mb-4 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
            Clear all filters
          </Link>
        )}

        {/* Results info */}
        <p className="text-sm text-gray-500 mb-6">
          Showing {parks.length} park
          {parks.length !== 1 ? 's' : ''}
          {region ? ` in ${region}` : ''}
        </p>

        {/* Grid or Map */}
        {isMapView ? (
          <ParkMapWrapper destinations={parks} />
        ) : parks.length > 0 ? (
          <ParkCompareMode parks={parks.map((p) => ({ slug: p.slug, name: p.name }))}>
            {parks.map((p) => (
              <ParkCard key={p.slug} park={p} />
            ))}
          </ParkCompareMode>
        ) : (
          <div className="text-center py-16 text-gray-500">
            <TreePine className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p>No parks found matching your filters.</p>
            <Link
              href="/parks"
              className="text-emerald-600 hover:text-emerald-700 no-underline mt-2 inline-block"
            >
              View all parks
            </Link>
          </div>
        )}
      </section>
    </>
  )
}
