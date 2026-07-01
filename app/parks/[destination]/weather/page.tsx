import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ChevronRight,
  CloudRain,
  Droplets,
  Sun,
  Thermometer,
  Shirt,
} from 'lucide-react'
import { getParkBySlug, getAllParkSlugs } from '@/lib/national-parks'
import { getParkWeatherBySlug } from '@/lib/park-weather'
import ParkWeatherChart from '@/components/ParkWeatherChart'

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
    title: `${park.name} Weather & Climate Guide: Monthly Data`,
    description: `Monthly weather data for ${park.name} including temperature, precipitation, rainy days, and sunny days. Find the best time to visit ${park.name}.`,
    alternates: { canonical: `/parks/${park.slug}/weather` },
    openGraph: {
      title: `${park.name} Weather & Climate Guide: Monthly Data`,
      description: `Plan your trip with detailed monthly weather data for ${park.name}. Precipitation, temperatures, and more.`,
      url: `/parks/${park.slug}/weather`,
    },
  }
}

export default async function ParkWeatherPage({
  params,
}: {
  params: Promise<{ destination: string }>
}) {
  const { destination: slug } = await params
  const park = getParkBySlug(slug)
  if (!park) notFound()

  const weather = getParkWeatherBySlug(slug)
  if (!weather) notFound()

  const monthly = weather.monthly

  // Find wettest month (highest precipitation)
  const wettestMonth = monthly.reduce((best, m) =>
    m.avgPrecipitationInches > best.avgPrecipitationInches ? m : best
  )

  // Calculate annual totals
  const totalPrecipitation = monthly.reduce(
    (sum, m) => sum + m.avgPrecipitationInches,
    0
  )
  const totalRainyDays = monthly.reduce((sum, m) => sum + m.rainyDays, 0)
  const totalSunnyDays = monthly.reduce((sum, m) => sum + m.sunnyDays, 0)

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
        name: 'Weather',
        item: `https://traveldatalab.com/parks/${park.slug}/weather`,
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
          <li className="font-medium text-gray-900">Weather</li>
        </ol>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <CloudRain className="w-6 h-6 text-emerald-500" />
          <span className="text-emerald-600 text-sm font-medium uppercase tracking-wider">
            Weather &amp; Climate Guide
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {park.name} Weather &amp; Climate Guide
        </h1>

        {/* Overview */}
        <p className="text-lg text-gray-600 max-w-3xl mb-8">
          {park.name} in {park.state} receives an average of{' '}
          {totalPrecipitation.toFixed(1)} inches of precipitation annually across{' '}
          {totalRainyDays} rainy days. The area also enjoys approximately{' '}
          {totalSunnyDays} sunny days per year. The park is open {park.season},{' '}
          with the best conditions typically found in{' '}
          {park.bestMonths.join(' and ')}.
        </p>

        {/* Annual summary cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white border border-gray-100 rounded-lg p-4 text-center">
            <Droplets className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">
              {totalPrecipitation.toFixed(1)}&quot;
            </div>
            <div className="text-sm text-gray-500">Total Precipitation</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-lg p-4 text-center">
            <CloudRain className="w-6 h-6 text-emerald-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">
              {totalRainyDays}
            </div>
            <div className="text-sm text-gray-500">Rainy Days/Year</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-lg p-4 text-center">
            <Sun className="w-6 h-6 text-amber-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">
              {totalSunnyDays}
            </div>
            <div className="text-sm text-gray-500">Sunny Days/Year</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-lg p-4 text-center">
            <Thermometer className="w-6 h-6 text-orange-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">
              {wettestMonth.avgPrecipitationInches}&quot;
            </div>
            <div className="text-sm text-gray-500">
              Wettest Month ({wettestMonth.month})
            </div>
          </div>
        </div>

        {/* Weather Chart */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Monthly Weather Charts
          </h2>
          <ParkWeatherChart data={monthly} destinationName={park.name} />
        </section>

        {/* Monthly Breakdown Table */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Monthly Breakdown
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left p-3 font-semibold text-gray-700">
                    Month
                  </th>
                  <th className="text-right p-3 font-semibold text-gray-700">
                    High (&deg;F)
                  </th>
                  <th className="text-right p-3 font-semibold text-gray-700">
                    Low (&deg;F)
                  </th>
                  <th className="text-right p-3 font-semibold text-gray-700">
                    Precipitation (in)
                  </th>
                  <th className="text-right p-3 font-semibold text-gray-700">
                    Rainy Days
                  </th>
                  <th className="text-right p-3 font-semibold text-gray-700">
                    Sunny Days
                  </th>
                </tr>
              </thead>
              <tbody>
                {monthly.map((m) => (
                  <tr
                    key={m.month}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="p-3 font-medium text-gray-900">
                      {m.month}
                    </td>
                    <td className="p-3 text-right text-orange-600 font-medium">
                      {m.avgHighF}&deg;
                    </td>
                    <td className="p-3 text-right text-blue-600 font-medium">
                      {m.avgLowF}&deg;
                    </td>
                    <td className="p-3 text-right">
                      {m.avgPrecipitationInches > 0 ? (
                        <span className="font-medium">
                          {m.avgPrecipitationInches}&quot;
                        </span>
                      ) : (
                        <span className="text-gray-400">--</span>
                      )}
                    </td>
                    <td className="p-3 text-right">
                      {m.rainyDays > 0 ? m.rainyDays : (
                        <span className="text-gray-400">--</span>
                      )}
                    </td>
                    <td className="p-3 text-right">{m.sunnyDays}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Best Time to Visit {park.name}
          </h2>
          <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              Based on weather data, the best months to visit {park.name} are{' '}
              <strong>{park.bestMonths.join(' and ')}</strong>. During this
              period, you can expect comfortable temperatures and favorable
              trail conditions for exploring the park.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              {wettestMonth.month} is typically the wettest month, with an
              average of {wettestMonth.avgPrecipitationInches} inches of
              precipitation and {wettestMonth.rainyDays} rainy days.
              Temperatures during the best visiting months range from highs in
              the {Math.min(...park.bestMonths.map((bm) => {
                const found = monthly.find((m) => m.month === bm)
                return found ? found.avgHighF : 0
              }))}s to {Math.max(...park.bestMonths.map((bm) => {
                const found = monthly.find((m) => m.month === bm)
                return found ? found.avgHighF : 0
              }))}s &deg;F.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For the best combination of pleasant weather and manageable
              crowds, consider visiting during the shoulder months at the edges
              of peak season. Weekdays generally offer a more peaceful
              experience on popular trails and at key viewpoints.
            </p>
          </div>
        </section>

        {/* Packing Tips by Season */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Shirt className="w-5 h-5 text-emerald-500" />
            Packing Tips by Season
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-gray-100 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">
                Spring (Mar-May)
              </h3>
              <ul className="text-sm text-gray-600 space-y-1.5">
                <li>Layered clothing for variable temps</li>
                <li>Waterproof rain jacket</li>
                <li>Muddy trail boots with good traction</li>
                <li>Quick-dry hiking pants</li>
                <li>Light fleece or insulating midlayer</li>
                <li>Hat and sunglasses</li>
                <li>Waterproof day pack</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-100 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">
                Summer (Jun-Aug)
              </h3>
              <ul className="text-sm text-gray-600 space-y-1.5">
                <li>Sun protection (hat, sunscreen SPF 50+)</li>
                <li>Plenty of water (hydration pack)</li>
                <li>Light layers for altitude changes</li>
                <li>Breathable moisture-wicking shirts</li>
                <li>Lightweight hiking shoes</li>
                <li>Insect repellent</li>
                <li>Sunglasses with UV protection</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-100 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">
                Fall (Sep-Nov)
              </h3>
              <ul className="text-sm text-gray-600 space-y-1.5">
                <li>Layering system (base, mid, shell)</li>
                <li>Warm jacket for cool mornings</li>
                <li>Long pants for brush and cooler temps</li>
                <li>Sturdy hiking boots</li>
                <li>Warm hat and gloves for early starts</li>
                <li>Headlamp (shorter daylight hours)</li>
                <li>Rain shell for unexpected showers</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-100 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">
                Winter (Dec-Feb)
              </h3>
              <ul className="text-sm text-gray-600 space-y-1.5">
                <li>Heavy insulation (down or synthetic)</li>
                <li>Traction devices (microspikes/crampons)</li>
                <li>Cold weather gear (thermal layers)</li>
                <li>Insulated waterproof boots</li>
                <li>Warm hat, gloves, and neck gaiter</li>
                <li>Hand and toe warmers</li>
                <li>Gaiters for snow-covered trails</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
