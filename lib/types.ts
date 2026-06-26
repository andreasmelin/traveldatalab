export interface Hotel {
  name: string
  slug: string
  priceRange: '$' | '$$' | '$$$' | '$$$$'
  pricePerNight: string
  distanceToSlopes: string
  skiInSkiOut: boolean
  description: string
  amenities: string[]
  bookingUrl: string
  lat: number
  lng: number
}

export interface SkiDestination {
  name: string
  slug: string
  state: string
  country: 'US' | 'Canada'
  region: string
  tagline: string
  description: string
  lat: number
  lng: number
  elevation: number
  verticalDrop: number
  skiableAcres: number
  numberOfTrails: number
  numberOfLifts: number
  longestRun: string
  snowfall: string
  season: string
  beginnerFriendly: boolean
  nightSkiing: boolean
  terrain: { beginner: number; intermediate: number; advanced: number }
  nearestAirport: string
  airportCode: string
  driveFromAirport: string
  hotels: Hotel[]
  bestMonths: string[]
  highlights: string[]
}

export interface WeatherMonth {
  month: string
  avgHighF: number
  avgLowF: number
  avgSnowfallInches: number
  snowDays: number
  sunnyDays: number
}

export interface DestinationWeather {
  slug: string
  monthly: WeatherMonth[]
}

export interface GuideFrontmatter {
  title: string
  description: string
  date: string
  lastModified?: string
  category: string
  destination?: string
  region?: string
  readTime: string
  featured: boolean
  draft?: boolean
  relatedSlugs?: string[]
}

export interface Guide {
  metadata: GuideFrontmatter & { slug: string }
  content: string
}

export interface Comparison {
  slug: string
  destination1: string
  destination2: string
  title: string
  description: string
  verdict: string
  categories: {
    name: string
    winner: 1 | 2 | 0
    explanation: string
  }[]
}
