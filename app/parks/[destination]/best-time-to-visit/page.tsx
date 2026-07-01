import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ChevronRight,
  Calendar,
  TreePine,
  ThermometerSun,
  DollarSign,
  AlertTriangle,
  ArrowRight,
  Star,
  CloudRain,
  Sun,
  Users,
  Droplets,
} from 'lucide-react'
import { getParkBySlug, getAllParkSlugs } from '@/lib/national-parks'
import { getParkWeatherBySlug } from '@/lib/park-weather'

// ---------------------------------------------------------------------------
// Static params
// ---------------------------------------------------------------------------

export async function generateStaticParams() {
  return getAllParkSlugs().map((slug) => ({ destination: slug }))
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
  const park = getParkBySlug(slug)
  if (!park) return {}

  const currentYear = new Date().getFullYear()

  return {
    title: `Best Time to Visit ${park.name} | Month-by-Month Guide`,
    description: `Find the best month to visit ${park.name} with our data-driven guide. Monthly weather, precipitation, crowd levels, and expert recommendations for ${currentYear}.`,
    alternates: { canonical: `/parks/${park.slug}/best-time-to-visit` },
    openGraph: {
      title: `Best Time to Visit ${park.name} | Month-by-Month Guide`,
      description: `Discover the best month to visit ${park.name}. Data-driven analysis of weather, precipitation, and crowd levels.`,
      url: `/parks/${park.slug}/best-time-to-visit`,
    },
  }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

type Verdict = 'Peak' | 'Great' | 'Good' | 'Off-Season'

const ALL_MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const

function getVerdict(
  monthName: string,
  bestMonths: string[],
  avgHighF: number,
  avgLowF: number,
  avgPrecipitationInches: number,
): Verdict {
  // Peak = explicitly listed in the park's best months
  if (bestMonths.includes(monthName)) return 'Peak'

  // Off-Season = extreme heat (>95F high), extreme cold (<20F high), or heavy precipitation (>5 inches)
  if (avgHighF > 95 || avgHighF < 20 || avgPrecipitationInches > 5) return 'Off-Season'

  // Great = moderate temps (45-85F high), low precipitation (<2 inches)
  if (avgHighF >= 45 && avgHighF <= 85 && avgPrecipitationInches < 2) return 'Great'

  // Good = everything else (usable but some challenges)
  if (avgHighF >= 30 && avgHighF <= 90 && avgPrecipitationInches < 4) return 'Good'

  return 'Off-Season'
}

function getVerdictColor(verdict: Verdict): string {
  switch (verdict) {
    case 'Peak':
      return 'bg-emerald-100 text-emerald-800'
    case 'Great':
      return 'bg-sky-100 text-sky-800'
    case 'Good':
      return 'bg-amber-100 text-amber-800'
    case 'Off-Season':
      return 'bg-gray-100 text-gray-700'
  }
}

function getCrowdLevel(
  monthName: string,
  bestMonths: string[],
): { level: string; description: string } {
  // Peak holiday and summer months are generally the most crowded
  const highCrowdMonths = ['June', 'July', 'August']
  const moderateCrowdMonths = ['May', 'September', 'October', 'March', 'April']
  const lowCrowdMonths = ['November', 'December', 'January', 'February']

  if (bestMonths.includes(monthName) && highCrowdMonths.includes(monthName)) {
    return { level: 'Very High', description: 'Peak season with large crowds, long waits, and full campgrounds. Book well in advance.' }
  }
  if (highCrowdMonths.includes(monthName)) {
    return { level: 'High', description: 'Summer brings families and vacationers. Expect busy trails and limited parking.' }
  }
  if (bestMonths.includes(monthName) && moderateCrowdMonths.includes(monthName)) {
    return { level: 'Moderate to High', description: 'Popular shoulder-season month. Trails are busy on weekends but manageable on weekdays.' }
  }
  if (moderateCrowdMonths.includes(monthName)) {
    return { level: 'Moderate', description: 'Shoulder season with fewer visitors. A good balance of pleasant weather and lighter crowds.' }
  }
  if (lowCrowdMonths.includes(monthName)) {
    return { level: 'Low', description: 'Off-season with minimal crowds. Some facilities may be closed but solitude is plentiful.' }
  }
  return { level: 'Moderate', description: 'Average visitation levels. Plan ahead for weekends.' }
}

function generateNarrative(
  monthName: string,
  verdict: Verdict,
  avgHighF: number,
  avgLowF: number,
  avgPrecipitationInches: number,
  rainyDays: number,
  sunnyDays: number,
  parkName: string,
): string {
  switch (verdict) {
    case 'Peak':
      return `${monthName} is one of the best months to visit ${parkName} with average highs of ${avgHighF}\u00B0F and only ${avgPrecipitationInches} inches of precipitation. Expect ${sunnyDays} sunny days and temperatures ranging from ${avgLowF}\u00B0F to ${avgHighF}\u00B0F. Trail conditions are typically excellent, making this an ideal time for hiking, sightseeing, and experiencing the park at its finest.`
    case 'Great':
      return `${monthName} offers pleasant conditions at ${parkName} with comfortable temperatures between ${avgLowF}\u00B0F and ${avgHighF}\u00B0F. With ${sunnyDays} sunny days and only ${avgPrecipitationInches} inches of precipitation, you will enjoy good trail conditions and often lighter crowds than the peak months.`
    case 'Good':
      return `${monthName} is a viable time to visit ${parkName} though you may encounter some weather challenges. Temperatures range from ${avgLowF}\u00B0F to ${avgHighF}\u00B0F with about ${rainyDays} rainy days and ${avgPrecipitationInches} inches of precipitation. Some trails or roads may have seasonal limitations, so check conditions before your trip.`
    case 'Off-Season':
      return `${monthName} brings challenging conditions to ${parkName} with temperatures ranging from ${avgLowF}\u00B0F to ${avgHighF}\u00B0F and ${avgPrecipitationInches} inches of precipitation. ${avgHighF > 95 ? 'Extreme heat can make outdoor activities dangerous, especially on exposed trails.' : avgHighF < 20 ? 'Bitter cold temperatures may close roads and limit trail access.' : 'Heavy precipitation can cause trail closures and hazardous conditions.'} Visit only if you are well-prepared for the conditions.`
  }
}

function findBestWeatherMonth(
  months: { month: string; sunnyDays: number; avgHighF: number }[],
): string {
  // Find the month with the best combination of sunny days and moderate temps
  return months.reduce((best, m) => {
    const bestScore = best.sunnyDays + (best.avgHighF >= 60 && best.avgHighF <= 80 ? 10 : 0)
    const currentScore = m.sunnyDays + (m.avgHighF >= 60 && m.avgHighF <= 80 ? 10 : 0)
    return currentScore > bestScore ? m : best
  }).month
}

function findLeastCrowdedMonths(bestMonths: string[]): string {
  const leastCrowded: string[] = []
  // Typically early spring and late fall are least crowded
  if (!bestMonths.includes('January') && !bestMonths.includes('February')) {
    leastCrowded.push('January and February (winter quiet season)')
  }
  if (!bestMonths.includes('November')) {
    leastCrowded.push('November (between fall foliage and holidays)')
  }
  if (!bestMonths.includes('March')) {
    leastCrowded.push('early March (before spring break)')
  }
  if (leastCrowded.length === 0) {
    leastCrowded.push('mid-week visits during any month')
  }
  return leastCrowded.slice(0, 2).join(' and ')
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
  const park = getParkBySlug(slug)
  if (!park) notFound()

  const weather = getParkWeatherBySlug(slug)
  if (!weather) notFound()

  const currentYear = new Date().getFullYear()

  // All 12 months data
  const yearData = ALL_MONTHS.map((monthName) => {
    const m = weather.monthly.find((w) => w.month === monthName)
    return m ?? { month: monthName, avgHighF: 0, avgLowF: 0, avgPrecipitationInches: 0, rainyDays: 0, sunnyDays: 0 }
  })

  const monthBreakdown = yearData.map((m) => {
    const verdict = getVerdict(m.month, park.bestMonths, m.avgHighF, m.avgLowF, m.avgPrecipitationInches)
    const crowd = getCrowdLevel(m.month, park.bestMonths)
    return {
      ...m,
      verdict,
      crowd,
      narrative: generateNarrative(
        m.month,
        verdict,
        m.avgHighF,
        m.avgLowF,
        m.avgPrecipitationInches,
        m.rainyDays,
        m.sunnyDays,
        park.name,
      ),
    }
  })

  const bestWeatherMonth = findBestWeatherMonth(weather.monthly)
  const leastCrowded = findLeastCrowdedMonths(park.bestMonths)

  // Identify extreme-heat months (avg high > 95F) for the "When to Avoid" section
  const extremeHeatMonths = weather.monthly
    .filter((m) => m.avgHighF > 95)
    .map((m) => m.month)

  // Identify heavy precipitation months (> 4 inches)
  const heavyRainMonths = weather.monthly
    .filter((m) => m.avgPrecipitationInches > 4)
    .map((m) => m.month)

  // Identify extreme cold months (avg high < 30F)
  const extremeColdMonths = weather.monthly
    .filter((m) => m.avgHighF < 30)
    .map((m) => m.month)

  // FAQs
  const faqs = [
    {
      question: `What is the best month to visit ${park.name}?`,
      answer: `The best months to visit ${park.name} are ${park.bestMonths.join(', ')}. These months offer the most pleasant weather conditions, the best trail accessibility, and ideal temperatures for outdoor activities. ${bestWeatherMonth} typically provides the best overall weather with ${weather.monthly.find((m) => m.month === bestWeatherMonth)?.sunnyDays ?? 0} sunny days.`,
    },
    {
      question: `When is ${park.name} least crowded?`,
      answer: `${park.name} tends to be least crowded during ${leastCrowded}. Avoid holiday weekends such as Memorial Day, July 4th, and Labor Day for shorter trail waits and better campsite availability. Visiting on weekdays during any season will also reduce your exposure to crowds.`,
    },
    {
      question: `What is the weather like at ${park.name}?`,
      answer: `Weather at ${park.name} varies significantly by season. Summer highs average ${weather.monthly.find((m) => m.month === 'July')?.avgHighF ?? 0}\u00B0F while winter highs average ${weather.monthly.find((m) => m.month === 'January')?.avgHighF ?? 0}\u00B0F. The driest months are typically ${weather.monthly.reduce((a, b) => a.avgPrecipitationInches < b.avgPrecipitationInches ? a : b).month} and the wettest is ${weather.monthly.reduce((a, b) => a.avgPrecipitationInches > b.avgPrecipitationInches ? a : b).month}. Always check current conditions before visiting as mountain weather can change rapidly.`,
    },
    {
      question: `Is ${park.name} open year-round?`,
      answer: `${park.name} is ${park.season.toLowerCase().includes('year-round') ? 'open year-round, though some roads and facilities may close seasonally due to weather conditions' : `typically open ${park.season}`}. Winter months may bring road closures, limited facilities, and trail restrictions. Always check the official NPS website for current operating status and road conditions before planning your visit.`,
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
        name: 'Best Time to Visit',
        item: `https://traveldatalab.com/parks/${park.slug}/best-time-to-visit`,
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
          <li className="font-medium text-gray-900">Best Time to Visit</li>
        </ol>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-6 h-6 text-emerald-500" />
          <span className="text-emerald-600 text-sm font-medium uppercase tracking-wider">
            Seasonal Guide
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Best Time to Visit {park.name}
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-8">
          Planning a trip to {park.name} in {park.state}? This data-driven
          guide breaks down every month of the year so you can pick the perfect
          time to visit. With {park.acreage.toLocaleString()} acres,{' '}
          {park.numberOfTrails} trails, and {park.annualVisitors} annual
          visitors, timing your trip right can mean the difference between
          fighting crowds and having trails to yourself.
        </p>

        {/* Best Months Highlight Box */}
        <section className="mb-10">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-3">
              <Star className="w-5 h-5 text-emerald-600" />
              <h2 className="text-lg font-bold text-emerald-900">
                Best Months to Visit {park.name}
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {park.bestMonths.map((month) => (
                <span
                  key={month}
                  className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-full text-sm font-semibold"
                >
                  <TreePine className="w-3.5 h-3.5" />
                  {month}
                </span>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed">
              Based on historical weather data, {park.bestMonths.join(' and ')}{' '}
              deliver the best visiting conditions at {park.name}. These months
              combine comfortable temperatures, low precipitation, and the best
              trail accessibility. Plan your trip during these months for the
              best chance of clear skies and ideal hiking conditions.
            </p>
          </div>
        </section>

        {/* Month-by-Month Breakdown */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Sun className="w-5 h-5 text-emerald-500" />
            Month-by-Month Breakdown
          </h2>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left p-3 font-semibold text-gray-700">Month</th>
                  <th className="text-right p-3 font-semibold text-gray-700">High (&deg;F)</th>
                  <th className="text-right p-3 font-semibold text-gray-700">Low (&deg;F)</th>
                  <th className="text-right p-3 font-semibold text-gray-700">Precip (in)</th>
                  <th className="text-right p-3 font-semibold text-gray-700">Rainy Days</th>
                  <th className="text-right p-3 font-semibold text-gray-700">Sunny Days</th>
                  <th className="text-center p-3 font-semibold text-gray-700">Crowds</th>
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
                      {m.avgPrecipitationInches}&quot;
                    </td>
                    <td className="p-3 text-right">{m.rainyDays}</td>
                    <td className="p-3 text-right">{m.sunnyDays}</td>
                    <td className="p-3 text-center text-xs text-gray-600">
                      {m.crowd.level}
                    </td>
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
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-4">
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
                    <Droplets className="w-4 h-4 text-sky-500 flex-shrink-0" />
                    <span className="text-gray-600">
                      Precip: <span className="font-medium text-gray-900">{m.avgPrecipitationInches}&quot;</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Sun className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    <span className="text-gray-600">
                      Sunny: <span className="font-medium text-gray-900">{m.sunnyDays} days</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    <span className="text-gray-600">
                      Crowds: <span className="font-medium text-gray-900">{m.crowd.level}</span>
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-2">
                  {m.narrative}
                </p>
                <p className="text-xs text-gray-500 italic">
                  {m.crowd.description}
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
              {extremeHeatMonths.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Extreme Heat ({extremeHeatMonths.join(', ')})
                  </h3>
                  <p>
                    Temperatures at {park.name} can exceed 95&deg;F during{' '}
                    {extremeHeatMonths.join(' and ')}. Extreme heat makes hiking
                    dangerous, especially on exposed trails without shade. Heat
                    exhaustion and heatstroke are real risks. If you must visit
                    during these months, hike only in the early morning (before
                    10 AM), carry at least one gallon of water per person, and
                    avoid strenuous trails during peak afternoon heat.
                  </p>
                </div>
              )}
              {heavyRainMonths.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Heavy Rain / Monsoon Season ({heavyRainMonths.join(', ')})
                  </h3>
                  <p>
                    {park.name} receives heavy precipitation during{' '}
                    {heavyRainMonths.join(' and ')}, which can lead to flash
                    floods, trail washouts, and hazardous road conditions.
                    Slot canyons and low-lying areas are particularly dangerous
                    during heavy rain events. Monitor weather forecasts closely
                    and be prepared for sudden storms.
                  </p>
                </div>
              )}
              {extremeColdMonths.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Road and Trail Closures ({extremeColdMonths.join(', ')})
                  </h3>
                  <p>
                    Winter conditions during {extremeColdMonths.join(' and ')}{' '}
                    often bring road closures, impassable trails, and limited
                    facilities at {park.name}. Many scenic drives and
                    higher-elevation trails close due to snow and ice. Visitor
                    centers may operate on reduced hours. If visiting in winter,
                    check the NPS website for current road status and bring
                    appropriate cold-weather gear.
                  </p>
                </div>
              )}
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Peak Holiday Weekends
                </h3>
                <p>
                  Memorial Day weekend, July 4th, and Labor Day weekend bring
                  the largest crowds of the year to {park.name}. Expect full
                  parking lots by mid-morning, overcrowded trailheads, and fully
                  booked campgrounds. If you must visit during these weekends,
                  arrive before 8 AM, have backup trail options ready, and book
                  campgrounds or lodging at least 6 months in advance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Money-Saving Tips */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-emerald-600" />
            Money-Saving Tips
          </h2>
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-emerald-200 text-emerald-800 rounded-full flex items-center justify-center text-xs font-bold">
                  1
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Visit in Shoulder Season (Spring or Fall)
                  </h3>
                  <p>
                    Spring and fall offer pleasant weather at most national
                    parks with significantly lower lodging costs compared to
                    peak summer months. Hotels and vacation rentals near{' '}
                    {park.name} can be 30&ndash;50% cheaper in April, May,
                    September, and October compared to June through August.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-emerald-200 text-emerald-800 rounded-full flex items-center justify-center text-xs font-bold">
                  2
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Buy the America the Beautiful Pass
                  </h3>
                  <p>
                    The America the Beautiful Annual Pass costs $80 and grants
                    unlimited access to all 400+ national parks, forests, and
                    federal recreation areas for a full year. With{' '}
                    {park.name}&apos;s entrance fee at {park.entranceFee}, the
                    pass pays for itself in just a few visits. It covers all
                    passengers in a single vehicle.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-emerald-200 text-emerald-800 rounded-full flex items-center justify-center text-xs font-bold">
                  3
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Camp Instead of Staying at Hotels
                  </h3>
                  <p>
                    Campgrounds inside or near {park.name} typically cost
                    $15&ndash;35 per night compared to $150+ for nearby hotels.
                    {park.camping && ' The park offers in-park camping options.'}{' '}
                    Book campgrounds through Recreation.gov as soon as
                    reservations open (typically 6 months in advance) since
                    popular sites fill quickly, especially for summer dates.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-emerald-200 text-emerald-800 rounded-full flex items-center justify-center text-xs font-bold">
                  4
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Visit on Free Entrance Days
                  </h3>
                  <p>
                    The National Park Service offers 5&ndash;6 free entrance
                    days each year, including Martin Luther King Jr. Day, the
                    first day of National Park Week (April), the anniversary of
                    the Great American Outdoors Act (August), National Public
                    Lands Day (September), and Veterans Day (November). Mark
                    these dates on your calendar to save on entrance fees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-emerald-500" />
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
              href={`/parks/${park.slug}`}
              className="group block bg-white border border-gray-100 hover:border-emerald-200 hover:shadow-md rounded-lg p-5 no-underline transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Park Guide
                </span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-500 transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                {park.name} Guide
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Trails, highlights, visitor tips, and everything you need to
                know.
              </p>
            </Link>
            <Link
              href={`/parks/${park.slug}/weather`}
              className="group block bg-white border border-gray-100 hover:border-emerald-200 hover:shadow-md rounded-lg p-5 no-underline transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Weather Data
                </span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-500 transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                Weather &amp; Climate
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Full 12-month weather data, charts, and packing recommendations.
              </p>
            </Link>
            <Link
              href={`/parks/${park.slug}/hotels`}
              className="group block bg-white border border-gray-100 hover:border-emerald-200 hover:shadow-md rounded-lg p-5 no-underline transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Where to Stay
                </span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-500 transition-colors" />
              </div>
              <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                Hotels Near {park.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Nearby lodging from campgrounds and cabins to lodges and hotels.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
