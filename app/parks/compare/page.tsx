import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowLeftRight, ArrowRight } from 'lucide-react'
import { parkComparisons } from '@/lib/park-comparisons'
import { getParkBySlug } from '@/lib/national-parks'
import ParkCompareSearch from '@/components/ParkCompareSearch'

export const metadata: Metadata = {
  title: 'Compare National Parks Side by Side',
  description:
    'Compare top national parks in the US head to head. See side-by-side stats on acreage, trails, visitors, and more.',
  alternates: { canonical: '/parks/compare' },
  openGraph: {
    title: 'Compare National Parks Side by Side',
    description:
      'Compare top national parks head to head on acreage, trails, and more.',
    url: '/parks/compare',
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
  return qs ? `/parks/compare?${qs}` : '/parks/compare'
}

export default async function ParkCompareIndexPage({
  searchParams,
}: {
  searchParams: Promise<{
    region?: string
    q?: string
  }>
}) {
  const { region, q } = await searchParams
  const currentParams = { region, q }

  let filtered = parkComparisons.map((comp) => ({
    comp,
    dest1: getParkBySlug(comp.destination1),
    dest2: getParkBySlug(comp.destination2),
  }))

  // Region filter: match if either destination's region matches
  if (region) {
    filtered = filtered.filter(
      ({ dest1, dest2 }) =>
        dest1?.region === region || dest2?.region === region
    )
  }

  // Text search: match against park names, title, and description
  if (q) {
    const lower = q.toLowerCase()
    filtered = filtered.filter(
      ({ comp, dest1, dest2 }) =>
        comp.title.toLowerCase().includes(lower) ||
        comp.description.toLowerCase().includes(lower) ||
        (dest1?.name ?? '').toLowerCase().includes(lower) ||
        (dest2?.name ?? '').toLowerCase().includes(lower)
    )
  }

  return (
    <>
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
          <li className="font-medium text-gray-900">Compare</li>
        </ol>
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-2 mb-3">
          <ArrowLeftRight className="w-6 h-6 text-emerald-500" />
          <span className="text-emerald-600 text-sm font-medium uppercase tracking-wider">
            Park Comparisons
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Compare National Parks Side by Side
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-8">
          Not sure which park to visit? Our detailed comparisons break down
          acreage, trails, crowds, and atmosphere to help you decide.
          Each comparison includes a category-by-category analysis with a final
          verdict.
        </p>

        {/* Region filter pills */}
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
        </div>

        {/* Search input */}
        <div className="max-w-md mb-6">
          <ParkCompareSearch />
        </div>

        {/* Result count */}
        <p className="text-sm text-gray-500 mb-6">
          Showing {filtered.length} comparison
          {filtered.length !== 1 ? 's' : ''}
          {region ? ` in ${region}` : ''}
          {q ? ` matching "${q}"` : ''}
        </p>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(({ comp, dest1, dest2 }) => {
              // Find the most differentiating category (one with a clear winner)
              const keyDiff =
                comp.categories.find((c) => c.winner !== 0) || comp.categories[0]

              return (
                <Link
                  key={comp.slug}
                  href={`/parks/compare/${comp.slug}`}
                  className="group block bg-white rounded-xl border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all no-underline overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-emerald-800 to-emerald-900 px-5 py-4">
                    <div className="flex items-center justify-center gap-3 text-white">
                      <span className="font-bold text-sm truncate">
                        {dest1?.name || comp.destination1}
                      </span>
                      <ArrowLeftRight className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="font-bold text-sm truncate">
                        {dest2?.name || comp.destination2}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2 text-sm leading-snug">
                      {comp.title}
                    </h3>
                    <p className="text-xs text-gray-500 mb-3 line-clamp-2">
                      {comp.description}
                    </p>
                    <div className="bg-gray-50 rounded-md px-3 py-2 text-xs text-gray-600 mb-3">
                      <span className="font-medium text-gray-700">
                        Key Differentiator:
                      </span>{' '}
                      {keyDiff.name} --{' '}
                      {keyDiff.winner === 1
                        ? dest1?.name || comp.destination1
                        : keyDiff.winner === 2
                          ? dest2?.name || comp.destination2
                          : 'Tie'}
                    </div>
                    <div className="flex items-center gap-1 text-emerald-600 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Read comparison <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-500">
            <ArrowLeftRight className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p>No comparisons found matching your filters.</p>
            <Link
              href="/parks/compare"
              className="text-emerald-600 hover:text-emerald-700 no-underline mt-2 inline-block"
            >
              View all comparisons
            </Link>
          </div>
        )}
      </section>
    </>
  )
}
