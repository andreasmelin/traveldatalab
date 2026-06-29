import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, ArrowLeftRight, ArrowRight } from 'lucide-react'
import { comparisons } from '@/lib/comparisons'
import { getDestinationBySlug } from '@/lib/destinations'
import CompareSearch from '@/components/CompareSearch'

export const metadata: Metadata = {
  title: 'Compare Ski Resorts Side by Side',
  description:
    'Compare top ski resorts in the US and Canada head to head. See side-by-side stats on terrain, snowfall, vertical drop, and more.',
  alternates: { canonical: '/ski/compare' },
  openGraph: {
    title: 'Compare Ski Resorts Side by Side',
    description:
      'Compare top ski resorts head to head on terrain, snowfall, and more.',
    url: '/ski/compare',
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
  { label: 'Pacific Northwest', value: 'Pacific Northwest' },
  { label: 'Southwest', value: 'Southwest' },
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
  return qs ? `/ski/compare?${qs}` : '/ski/compare'
}

export default async function CompareIndexPage({
  searchParams,
}: {
  searchParams: Promise<{
    region?: string
    q?: string
  }>
}) {
  const { region, q } = await searchParams
  const currentParams = { region, q }

  let filtered = comparisons.map((comp) => ({
    comp,
    dest1: getDestinationBySlug(comp.destination1),
    dest2: getDestinationBySlug(comp.destination2),
  }))

  // Region filter: match if either destination's region matches
  if (region) {
    filtered = filtered.filter(
      ({ dest1, dest2 }) =>
        dest1?.region === region || dest2?.region === region
    )
  }

  // Text search: match against resort names, title, and description
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
          <li className="font-medium text-gray-900">Compare</li>
        </ol>
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-2 mb-3">
          <ArrowLeftRight className="w-6 h-6 text-sky-500" />
          <span className="text-sky-600 text-sm font-medium uppercase tracking-wider">
            Resort Comparisons
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Compare Ski Resorts Side by Side
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-8">
          Not sure which resort to choose? Our detailed comparisons break down
          terrain size, snow quality, value, and atmosphere to help you decide.
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
                    ? 'bg-sky-600 text-white'
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
          <CompareSearch />
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
                  href={`/ski/compare/${comp.slug}`}
                  className="group block bg-white rounded-xl border border-gray-100 hover:border-sky-200 hover:shadow-md transition-all no-underline overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-slate-700 to-slate-800 px-5 py-4">
                    <div className="flex items-center justify-center gap-3 text-white">
                      <span className="font-bold text-sm truncate">
                        {dest1?.name || comp.destination1}
                      </span>
                      <ArrowLeftRight className="w-4 h-4 text-sky-400 flex-shrink-0" />
                      <span className="font-bold text-sm truncate">
                        {dest2?.name || comp.destination2}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 group-hover:text-sky-600 transition-colors mb-2 text-sm leading-snug">
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
                    <div className="flex items-center gap-1 text-sky-600 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
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
              href="/ski/compare"
              className="text-sky-600 hover:text-sky-700 no-underline mt-2 inline-block"
            >
              View all comparisons
            </Link>
          </div>
        )}
      </section>
    </>
  )
}
