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

export type ActivityType = 'ski' | 'parks' | 'hiking' | 'beach' | 'summer' | 'autumn'

export interface Destination {
  activityType: ActivityType
  name: string
  slug: string
  state: string
  country: 'US' | 'Canada'
  region: string
  tagline: string
  description: string
  lat: number
  lng: number
  nearestAirport: string
  airportCode: string
  driveFromAirport: string
  hotels: Hotel[]
  bestMonths: string[]
  highlights: string[]
}

export interface SkiDestination extends Destination {
  activityType: 'ski'
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
}

export interface NationalParkDestination extends Destination {
  activityType: 'parks'
  established: number
  acreage: number
  annualVisitors: string
  entranceFee: string
  numberOfTrails: number
  highestPoint: string
  season: string
  petFriendly: boolean
  camping: boolean
  wilderness: boolean
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

export interface ParkWeatherMonth {
  month: string
  avgHighF: number
  avgLowF: number
  avgPrecipitationInches: number
  rainyDays: number
  sunnyDays: number
}

export interface ParkWeather {
  slug: string
  monthly: ParkWeatherMonth[]
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
