import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ChevronRight,
  Calendar,
  Snowflake,
  ThermometerSun,
  DollarSign,
  AlertTriangle,
  ArrowRight,
  Star,
  CloudSnow,
  Sun,
  Users,
} from 'lucide-react'
import { getDestinationBySlug, getAllDestinationSlugs } from '@/lib/destinations'
import { getWeatherBySlug } from '@/lib/weather'

// ---------------------------------------------------------------------------
// Static params
// ---------------------------------------------------------------------------

export async function generateStaticParams() {
  return getAllDestinationSlugs().map((slug) => ({ destination: slug }))
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ destination: string }>
}): Promise<Metadata> {
  const { destination: slug } = await params
  const dest = getDestinationBySlug(slug)
  if (!dest) return {}

  const currentYear = new Date().getFullYear()

  return {
    title: `Best Time to Visit ${dest.name} | Month-by-Month Guide`,
    description: `Find the best month to ski ${dest.name} with our data-driven guide. Monthly snowfall, temperatures, crowd levels, and expert recommendations for ${currentYear}.`,
    alternates: { canonical: `/ski/${dest.slug}/best-time-to-visit` },
    openGraph: {
      title: `Best Time to Visit ${dest.name} | Month-by-Month Guide`,
      description: `Discover the best month to ski at ${dest.name}. Data-driven analysis of snowfall, temperatures, and crowd levels.`,
      url: `/ski/${dest.slug}/best-time-to-visit`,
    },
  }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

type Verdict = 'Peak' | 'Great' | 'Good' | 'Early/Late Season'

const SKI_SEASON_MONTHS = [
  'November',
  'December',
  'January',
  'February',
  'March',
  'April',
] as const

function getVerdict(
  monthName: string,
  bestMonths: string[],
  snowfall: number,
  maxSnowfall: number,
): Verdict {
  if (bestMonths.includes(monthName)) return 'Peak'
  if (snowfall >= maxSnowfall * 0.7) return 'Great'
  if (snowfall >= maxSnowfall * 0.4) return 'Good'
  return 'Early/Late Season'
}

function getVerdictColor(verdict: Verdict): string {
  switch (verdict) {
    case 'Peak':
      return 'bg-emerald-100 text-emerald-800'
    case 'Great':
      return 'bg-sky-100 text-sky-800'
    case 'Good':
      return 'bg-amber-100 text-amber-800'
    case 'Early/Late Season':
      return 'bg-gray-100 text-gray-700'
  }
}

function generateNarrative(
  monthName: string,
  verdict: Verdict,
  avgHighF: number,
  avgLowF: number,
  snowfallInches: number,
  snowDays: number,
  sunnyDays: number,
  resortName: string,
): string {
  const tempDescriptor =
    avgHighF <= 25
      ? 'bitterly cold'
      : avgHighF <= 32
        ? 'cold'
        : avgHighF <= 40
          ? 'chilly'
          : avgHighF <= 50
            ? 'mild'
            : 'warm'

  switch (verdict) {
    case 'Peak':
      return `${monthName} is one of the best months to visit ${resortName} with an average of ${snowfallInches} inches of snowfall across ${snowDays} snow days. Expect ${tempDescriptor} temperatures between ${avgLowF}\u00B0F and ${avgHighF}\u00B0F. Snow conditions are typically excellent, making this an ideal time for powder skiing.`
    case 'Great':
      return `${monthName} offers strong skiing conditions at ${resortName} with ${snowfallInches} inches of average snowfall. Temperatures range from ${avgLowF}\u00B0F to ${avgHighF}\u00B0F. The ${sunnyDays} sunny days make for pleasant on-mountain visibility and enjoyable conditions.`
    case 'Good':
      if (monthName === 'March' || monthName === 'April') {
        return `${monthName} brings spring skiing conditions to ${resortName} with ${tempDescriptor} temperatures (${avgLowF}\u00B0F to ${avgHighF}\u00B0F) and ${snowfallInches} inches of snowfall. Longer days, ${sunnyDays} sunny days, and softer snow create a more relaxed atmosphere. Lift ticket deals are often available.`
      }
      return `${monthName} provides good skiing at ${resortName} with ${snowfallInches} inches of snowfall and ${snowDays} snow days. Temperatures are ${tempDescriptor}, ranging from ${avgLowF}\u00B0F to ${avgHighF}\u00B0F. Coverage may be thinner than peak months but conditions remain enjoyable.`
    case 'Early/Late Season':
      if (monthName === 'November') {
        return `${monthName} marks the start of the season at ${resortName} with ${snowfallInches} inches of early snowfall. Limited terrain may be open as the resort builds its base. Temperatures range from ${avgLowF}\u00B0F to ${avgHighF}\u00B0F. Early-bird season pass deals often apply.`
      }
      return `${monthName} is the tail end of the season at ${resortName} with ${snowfallInches} inches of snowfall. Warmer temperatures (${avgLowF}\u00B0F to ${avgHighF}\u00B0F) mean softer, wetter snow conditions. Some upper-mountain terrain may remain excellent for spring laps.`
  }
}

function findSnowiestMonth(
  months: { month: string; avgSnowfallInches: number }[],
): string {
  return months.reduce((best, m) =>
    m.avgSnowfallInches > best.avgSnowfallInches ? m : best,
  ).month
}

function findLeastCrowdedMonths(bestMonths: string[]): string {
  // Typically January (post-holiday) and March (post-Presidents Day) are least crowded
  const leastCrowded: string[] = []
  if (!bestMonths.includes('January')) {
    leastCrowded.push('early January (after the holiday rush)')
  } else {
    leastCrowded.push('mid-to-late January (after New Year crowds)')
  }
  leastCrowded.push('early-to-mid March (between Presidents Day and spring break)')
  return leastCrowded.join(' and ')
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default async function BestTimeToVisitPage({
  params,
}: {
  params: Promise<{ destination: string }>
}) {
  const { destination: slug } = await params
  const dest = getDestinationBySlug(slug)
  if (!dest) notFound()

  const weather = getWeatherBySlug(slug)
  if (!weather) notFound()

  const currentYear = new Date().getFullYear()

  // Ski-season months data
  const skiSeasonData = SKI_SEASON_MONTHS.map((monthName) => {
    const m = weather.monthly.find((w) => w.month === monthName)
    return m ?? { month: monthName, avgHighF: 0, avgLowF: 0, avgSnowfallInches: 0, snowDays: 0, sunnyDays: 0 }
  })

  const maxSnowfall = Math.max(...skiSeasonData.map((m) => m.avgSnowfallInches))

  const monthBreakdown = skiSeasonData.map((m) => {
    const verdict = getVerdict(m.month, dest.bestMonths, m.avgSnowfallInches, maxSnowfall)
    return {
      ...m,
      verdict,
      narrative: generateNarrative(
        m.month,
        verdict,
        m.avgHighF,
        m.avgLowF,
        m.avgSnowfallInches,
        m.snowDays,
        m.sunnyDays,
        dest.name,
      ),
    }
  })

  const snowiestMonth = findSnowiestMonth(weather.monthly)
  const leastCrowded = findLeastCrowdedMonths(dest.bestMonths)

  // Season start/end from dest.season (e.g., "November - April")
  const seasonParts = dest.season.split(' - ')
  const seasonStart = seasonParts[0] ?? 'November'
  const seasonEnd = seasonParts[1] ?? 'April'

  // FAQs
  const faqs = [
    {
      question: `What is the best month to ski at ${dest.name}?`,
      answer: `The best months to ski at ${dest.name} are ${dest.bestMonths.join(', ')}. These months offer the highest snowfall totals, most consistent snow coverage, and the best overall skiing conditions. ${snowiestMonth} typically receives the most snowfall, averaging ${weather.monthly.find((m) => m.month === snowiestMonth)?.avgSnowfallInches ?? 0} inches.`,
    },
    {
      question: `When does ${dest.name} get the most snow?`,
      answer: `${dest.name} receives the most snow in ${snowiestMonth}, with an average of ${weather.monthly.find((m) => m.month === snowiestMonth)?.avgSnowfallInches ?? 0} inches. The resort reports ${dest.snowfall} across the full season. The months of ${dest.bestMonths.join(', ')} consistently deliver the heaviest snowfall.`,
    },
    {
      question: `When is ${dest.name} least crowded?`,
      answer: `${dest.name} tends to be least crowded during ${leastCrowded}. Avoid holiday weeks such as Christmas/New Year, Martin Luther King Jr. weekend, and Presidents Day weekend for shorter lift lines and better deals on lodging.`,
    },
    {
      question: `When does ski season start and end at ${dest.name}?`,
      answer: `The ski season at ${dest.name} typically runs from ${seasonStart} through ${seasonEnd}. Exact opening and closing dates vary each year based on snowfall conditions. ${seasonStart} often has limited terrain open while the resort builds its snowpack, and late-season skiing in ${seasonEnd} depends on spring weather patterns.`,
    },
  ]

  // JSON-LD: FAQPage
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  // JSON-LD: BreadcrumbList
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
        name: 'Best Time to Visit',
        item: `https://traveldatalab.com/ski/${dest.slug}/best-time-to-visit`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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
          <li className="font-medium text-gray-900">Best Time to Visit</li>
        </ol>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-6 h-6 text-sky-500" />
          <span className="text-sky-600 text-sm font-medium uppercase tracking-wider">
            Seasonal Guide
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Best Time to Visit {dest.name}
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-8">
          Planning a ski trip to {dest.name} in {dest.state}? This data-driven
          guide breaks down every month of the{' '}
          {dest.season} ski season so you can pick the perfect time to visit.
          With {dest.snowfall} and {dest.skiableAcres.toLocaleString()} skiable
          acres, timing your trip right can make the difference between good
          skiing and an unforgettable experience.
        </p>

        {/* Best Months Highlight Box */}
        <section className="mb-10">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-3">
              <Star className="w-5 h-5 text-emerald-600" />
              <h2 className="text-lg font-bold text-emerald-900">
                Best Months to Ski {dest.name}
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {dest.bestMonths.map((month) => (
                <span
                  key={month}
                  className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-full text-sm font-semibold"
                >
                  <Snowflake className="w-3.5 h-3.5" />
                  {month}
                </span>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
              Based on historical weather data, {dest.bestMonths.join(' and ')}{' '}
              deliver the best skiing conditions at {dest.name}. These months
              combine the highest snowfall totals, most consistent coverage, and
              cold temperatures that preserve powder quality. Plan your trip
              during these months for the best chance of deep snow and prime
              conditions.
            </p>
          </div>
        </section>

        {/* Month-by-Month Breakdown */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <CloudSnow className="w-5 h-5 text-sky-500" />
            Month-by-Month Ski Season Breakdown
          </h2>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left p-3 font-semibold text-gray-700">Month</th>
                  <th className="text-right p-3 font-semibold text-gray-700">High (&deg;F)</th>
                  <th className="text-right p-3 font-semibold text-gray-700">Low (&deg;F)</th>
                  <th className="text-right p-3 font-semibold text-gray-700">Snowfall (in)</th>
                  <th className="text-right p-3 font-semibold text-gray-700">Snow Days</th>
                  <th className="text-center p-3 font-semibold text-gray-700">Verdict</th>
                </tr>
              </thead>
              <tbody>
                {monthBreakdown.map((m) => (
                  <tr
                    key={m.month}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="p-3 font-medium text-gray-900">{m.month}</td>
                    <td className="p-3 text-right text-orange-600 font-medium">
                      {m.avgHighF}&deg;
                    </td>
                    <td className="p-3 text-right text-blue-600 font-medium">
                      {m.avgLowF}&deg;
                    </td>
                    <td className="p-3 text-right font-medium">
                      {m.avgSnowfallInches}&quot;
                    </td>
                    <td className="p-3 text-right">{m.snowDays}</td>
                    <td className="p-3 text-center">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${getVerdictColor(m.verdict)}`}
                      >
                        {m.verdict}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Monthly Cards with Narratives */}
          <div className="space-y-4">
            {monthBreakdown.map((m) => (
              <div
                key={m.month}
                className="bg-white border border-gray-100 rounded-lg p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900 text-lg">{m.month}</h3>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getVerdictColor(m.verdict)}`}
                  >
                    {m.verdict}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <ThermometerSun className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-600">
                      High: <span className="font-medium text-gray-900">{m.avgHighF}&deg;F</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <ThermometerSun className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-600">
                      Low: <span className="font-medium text-gray-900">{m.avgLowF}&deg;F</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Snowflake className="w-4 h-4 text-sky-500 flex-shrink-0" />
                    <span className="text-gray-600">
                      Snow: <span className="font-medium text-gray-900">{m.avgSnowfallInches}&quot;</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Sun className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    <span className="text-gray-600">
                      Sunny: <span className="font-medium text-gray-900">{m.sunnyDays} days</span>
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {m.narrative}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* When to Avoid */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            When to Avoid
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Early Season (November)</h3>
                <p>
                  While {dest.name} may open terrain in {seasonStart}, early season
                  often means limited trail access, thin coverage, and potential
                  for closures. Unless you are eager to get first turns in, it is
                  better to wait until December when the snowpack builds.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Late Season ({seasonEnd})</h3>
                <p>
                  By late {seasonEnd}, warming temperatures can lead to slushy,
                  heavy snow especially in the afternoons. Upper-mountain runs
                  may still ski well in the mornings but conditions deteriorate
                  as the day progresses. Some lifts and runs may close early in
                  the season wind-down.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Holiday Weeks</h3>
                <p>
                  Christmas week (December 24 &ndash; January 1), Martin Luther
                  King Jr. weekend, and Presidents Day weekend bring the largest
                  crowds of the season. Expect longer lift lines, higher lodging
                  prices, and limited availability. If you must visit during
                  holidays, book well in advance and arrive early each morning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Money-Saving Tips */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-green-600" />
            Money-Saving Tips
          </h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-200 text-green-800 rounded-full flex items-center justify-center text-xs font-bold">
                  1
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Visit in January After the Holidays
                  </h3>
                  <p>
                    The first two weeks of January (after New Year&apos;s Day) typically
                    offer excellent snow conditions with significantly lower
                    prices and fewer crowds than the holiday period. Many lodges
                    drop rates by 20&ndash;40% during this lull.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-200 text-green-800 rounded-full flex items-center justify-center text-xs font-bold">
                  2
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Late March for Spring Deals
                  </h3>
                  <p>
                    Late March and early April bring warmer weather and longer
                    days. While snow conditions may soften in the afternoons,
                    morning skiing can still be excellent. Resorts often offer
                    discounted lift tickets and lodging deals during this period
                    to attract visitors as the season winds down.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-200 text-green-800 rounded-full flex items-center justify-center text-xs font-bold">
                  3
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Ski Midweek
                  </h3>
                  <p>
                    Tuesday through Thursday consistently delivers the shortest
                    lift lines and best availability at {dest.name}. Many
                    lodging properties offer midweek rates that are significantly
                    lower than weekend pricing, and multi-day lift ticket
                    packages are usually cheaper when they include weekdays.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-sky-500" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white border border-gray-100 rounded-lg p-5"
              >
                <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Links */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Continue Planning Your Trip
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href={`/ski/${dest.slug}`}
              className="group block bg-white border border-gray-100 hover:border-sky-200 hover:shadow-md rounded-lg p-5 no-underline transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Resort Data
                </span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-500 transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 group-hover:text-sky-600 transition-colors">
                {dest.name} Guide
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Trails, lifts, terrain breakdown, and hotel recommendations.
              </p>
            </Link>
            <Link
              href={`/ski/${dest.slug}/weather`}
              className="group block bg-white border border-gray-100 hover:border-sky-200 hover:shadow-md rounded-lg p-5 no-underline transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Weather Data
                </span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-500 transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 group-hover:text-sky-600 transition-colors">
                Weather &amp; Snow Report
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Full 12-month weather data, charts, and packing tips.
              </p>
            </Link>
            <Link
              href={`/ski/${dest.slug}/hotels`}
              className="group block bg-white border border-gray-100 hover:border-sky-200 hover:shadow-md rounded-lg p-5 no-underline transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Where to Stay
                </span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-500 transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 group-hover:text-sky-600 transition-colors">
                Hotels Near {dest.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {dest.hotels.length} hotels from budget to luxury with
                ski-in/ski-out options.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
