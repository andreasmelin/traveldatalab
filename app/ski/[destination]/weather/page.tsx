import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ChevronRight,
  CloudSnow,
  Sun,
  Thermometer,
  Shirt,
  Snowflake,
} from 'lucide-react'
import { getDestinationBySlug, getAllDestinationSlugs } from '@/lib/destinations'
import { getWeatherBySlug } from '@/lib/weather'
import WeatherChart from '@/components/WeatherChart'

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
    title: `${dest.name} Weather & Snow Report: Monthly Guide`,
    description: `Monthly weather data for ${dest.name} including temperature, snowfall, snow days, and sunny days. Find the best time to ski at ${dest.name}.`,
    alternates: { canonical: `/ski/${dest.slug}/weather` },
    openGraph: {
      title: `${dest.name} Weather & Snow Report: Monthly Guide`,
      description: `Plan your trip with detailed monthly weather data for ${dest.name}. Snowfall, temperatures, and more.`,
      url: `/ski/${dest.slug}/weather`,
    },
  }
}

export default async function WeatherPage({
  params,
}: {
  params: Promise<{ destination: string }>
}) {
  const { destination: slug } = await params
  const dest = getDestinationBySlug(slug)
  if (!dest) notFound()

  const weather = getWeatherBySlug(slug)
  if (!weather) notFound()

  const monthly = weather.monthly

  // Find best ski month (highest snowfall)
  const bestMonth = monthly.reduce((best, m) =>
    m.avgSnowfallInches > best.avgSnowfallInches ? m : best
  )

  // Calculate annual totals
  const totalSnowfall = monthly.reduce(
    (sum, m) => sum + m.avgSnowfallInches,
    0
  )
  const totalSnowDays = monthly.reduce((sum, m) => sum + m.snowDays, 0)
  const totalSunnyDays = monthly.reduce((sum, m) => sum + m.sunnyDays, 0)

  // Determine ski season months (months with >= 10 inches snowfall)
  const skiSeasonMonths = monthly.filter((m) => m.avgSnowfallInches >= 10)

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
        name: 'Weather',
        item: `https://traveldatalab.com/ski/${dest.slug}/weather`,
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
          <li className="font-medium text-gray-900">Weather</li>
        </ol>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <CloudSnow className="w-6 h-6 text-sky-500" />
          <span className="text-sky-600 text-sm font-medium uppercase tracking-wider">
            Weather &amp; Snow Report
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {dest.name} Weather &amp; Snow Report
        </h1>

        {/* Overview */}
        <p className="text-lg text-gray-600 max-w-3xl mb-8">
          {dest.name} in {dest.state} sits at an elevation of{' '}
          {dest.elevation.toLocaleString()} feet and receives an average of{' '}
          {totalSnowfall} inches of snow annually across {totalSnowDays} snow
          days. The area also enjoys approximately {totalSunnyDays} sunny days
          per year. The ski season runs {dest.season}, with the best conditions
          typically found in {dest.bestMonths.join(' and ')}.
        </p>

        {/* Annual summary cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white border border-gray-100 rounded-lg p-4 text-center">
            <Snowflake className="w-6 h-6 text-sky-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">
              {totalSnowfall}&quot;
            </div>
            <div className="text-sm text-gray-500">Annual Snowfall</div>
          </div>
          <div className="bg-white border border-gray-100 rounded-lg p-4 text-center">
            <CloudSnow className="w-6 h-6 text-sky-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">
              {totalSnowDays}
            </div>
            <div className="text-sm text-gray-500">Snow Days/Year</div>
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
              {bestMonth.avgSnowfallInches}&quot;
            </div>
            <div className="text-sm text-gray-500">
              Peak Month ({bestMonth.month})
            </div>
          </div>
        </div>

        {/* Weather Chart */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Monthly Weather Charts
          </h2>
          <WeatherChart data={monthly} destinationName={dest.name} />
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
                    Snowfall (in)
                  </th>
                  <th className="text-right p-3 font-semibold text-gray-700">
                    Snow Days
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
                      {m.avgSnowfallInches > 0 ? (
                        <span className="font-medium">
                          {m.avgSnowfallInches}&quot;
                        </span>
                      ) : (
                        <span className="text-gray-400">--</span>
                      )}
                    </td>
                    <td className="p-3 text-right">
                      {m.snowDays > 0 ? m.snowDays : (
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

        {/* Best Time to Ski */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Best Time to Ski at {dest.name}
          </h2>
          <div className="bg-sky-50 border border-sky-100 rounded-lg p-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              Based on snowfall data, the best months to ski at {dest.name} are{' '}
              <strong>{dest.bestMonths.join(' and ')}</strong>. During this
              period, the resort averages{' '}
              {skiSeasonMonths.length > 0
                ? `${Math.round(skiSeasonMonths.reduce((s, m) => s + m.avgSnowfallInches, 0) / skiSeasonMonths.length)} inches of snowfall per month`
                : 'excellent snowfall'}
              .
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              {bestMonth.month} is typically the snowiest month, with an average
              of {bestMonth.avgSnowfallInches} inches of snowfall and{' '}
              {bestMonth.snowDays} snow days. Temperatures during peak season
              range from a high of {bestMonth.avgHighF}&deg;F to a low of{' '}
              {bestMonth.avgLowF}&deg;F.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For the best combination of snow quality and manageable crowds,
              consider visiting in January or February on weekdays. March often
              brings spring skiing conditions with warmer temperatures and
              longer days, making it ideal for those who prefer milder weather.
            </p>
          </div>
        </section>

        {/* Packing Tips */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Shirt className="w-5 h-5 text-sky-500" />
            Packing Tips by Season
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-100 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">
                Early Season (Nov-Dec)
              </h3>
              <ul className="text-sm text-gray-600 space-y-1.5">
                <li>Heavy insulated ski jacket</li>
                <li>Thermal base layers (top and bottom)</li>
                <li>Insulated ski pants</li>
                <li>Warm ski gloves or mittens</li>
                <li>Balaclava or neck gaiter</li>
                <li>Goggles with low-light lens</li>
                <li>Hand and toe warmers</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-100 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">
                Peak Season (Jan-Feb)
              </h3>
              <ul className="text-sm text-gray-600 space-y-1.5">
                <li>Warmest ski jacket available</li>
                <li>Multiple base layer options</li>
                <li>Midlayer fleece or down</li>
                <li>Waterproof ski pants</li>
                <li>Insulated boots</li>
                <li>Helmet with ear coverage</li>
                <li>SPF 50+ sunscreen (high altitude)</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-100 rounded-lg p-5">
              <h3 className="font-bold text-gray-900 mb-2">
                Spring Skiing (Mar-Apr)
              </h3>
              <ul className="text-sm text-gray-600 space-y-1.5">
                <li>Lighter shell jacket</li>
                <li>Breathable base layers</li>
                <li>Lighter ski pants</li>
                <li>Thinner gloves or spring gloves</li>
                <li>High-SPF sunscreen (essential)</li>
                <li>Goggles with high-light lens</li>
                <li>T-shirt for warm afternoon runs</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
