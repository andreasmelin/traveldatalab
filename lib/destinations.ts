import type { SkiDestination, Hotel } from './types'

// =============================================================================
// ALL 30 SKI DESTINATIONS
// =============================================================================

export const skiDestinations: SkiDestination[] = [

  // ===========================================================================
  // COLORADO (8)
  // ===========================================================================

  {
    activityType: 'ski' as const,
    name: 'Vail Ski Resort',
    slug: 'vail',
    state: 'Colorado',
    country: 'US',
    region: 'Colorado',
    tagline: 'The mountain that started it all',
    description: 'Vail is one of the largest and most popular ski resorts in the world, famous for its legendary Back Bowls and impeccable grooming. With over 5,300 acres of skiable terrain spanning seven miles, Vail offers something for every level of skier.',
    lat: 39.6403,
    lng: -106.3742,
    elevation: 11570,
    verticalDrop: 3450,
    skiableAcres: 5317,
    numberOfTrails: 195,
    numberOfLifts: 31,
    longestRun: '4 miles',
    snowfall: '354 inches annually',
    season: 'November - April',
    beginnerFriendly: true,
    nightSkiing: false,
    terrain: { beginner: 18, intermediate: 29, advanced: 53 },
    nearestAirport: 'Eagle County Regional Airport',
    airportCode: 'EGE',
    driveFromAirport: '35 minutes',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Seven legendary Back Bowls with over 3,000 acres of terrain',
      'One of the largest ski resorts in North America',
      'World-class dining and shopping in Vail Village',
      'Excellent grooming on front-side runs',
      'Blue Sky Basin offers secluded expert terrain'
    ],
    hotels: [
      {
        name: 'The Sebastian - Vail',
        slug: 'the-sebastian-vail',
        priceRange: '$$$$',
        pricePerNight: '$450-800',
        distanceToSlopes: '0.1 miles',
        skiInSkiOut: false,
        description: 'A luxury boutique hotel in the heart of Vail Village with a rooftop pool and mountain views. Steps from the Eagle Bahn Gondola.',
        amenities: ['Pool', 'Hot Tub', 'Spa', 'Restaurant', 'Ski Valet'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho245280%2Fthe-sebastian-vail-vail-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 39.6405,
        lng: -106.3748
      },
      {
        name: 'Four Seasons Resort Vail',
        slug: 'four-seasons-resort-vail',
        priceRange: '$$$$',
        pricePerNight: '$600-1200',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Ultra-luxury ski-in/ski-out resort at the base of Vail Mountain featuring world-class dining, a full-service spa, and impeccable service.',
        amenities: ['Spa', 'Restaurant', 'Pool', 'Hot Tub', 'Ski Concierge'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho339964%2Ffour-seasons-resort-vail-vail-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 39.6425,
        lng: -106.3780
      },
      {
        name: 'Lodge at Vail',
        slug: 'lodge-at-vail',
        priceRange: '$$$',
        pricePerNight: '$300-600',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'An iconic Vail property right at the base of the mountain, offering ski-in/ski-out access and a prime location in Vail Village.',
        amenities: ['Hot Tub', 'Restaurant', 'Spa', 'Ski Storage'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho134060%2Fthe-lodge-at-vail-a-rockresort-vail-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 39.6400,
        lng: -106.3735
      },
      {
        name: 'Marriott Streamside at Vail',
        slug: 'marriott-streamside-vail',
        priceRange: '$$',
        pricePerNight: '$200-400',
        distanceToSlopes: '0.5 miles',
        skiInSkiOut: false,
        description: 'Family-friendly condo-style resort along Gore Creek with spacious units, kitchens, and complimentary shuttle to the slopes.',
        amenities: ['Pool', 'Hot Tub', 'Free Parking', 'Shuttle', 'Kitchen'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho198791%2Fmarriott-s-streamside-evergreen-at-vail-vail-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 39.6380,
        lng: -106.3690
      }
    ]
  },

  {
    activityType: 'ski' as const,
    name: 'Breckenridge',
    slug: 'breckenridge',
    state: 'Colorado',
    country: 'US',
    region: 'Colorado',
    tagline: 'A historic mining town with world-class skiing',
    description: 'Breckenridge combines authentic Colorado charm with nearly 3,000 acres of skiable terrain spread across five peaks. The vibrant Main Street is lined with colorful Victorian buildings housing restaurants, bars, and shops.',
    lat: 39.4817,
    lng: -106.0384,
    elevation: 12998,
    verticalDrop: 3398,
    skiableAcres: 2908,
    numberOfTrails: 187,
    numberOfLifts: 35,
    longestRun: '3.5 miles',
    snowfall: '353 inches annually',
    season: 'November - April',
    beginnerFriendly: true,
    nightSkiing: false,
    terrain: { beginner: 14, intermediate: 31, advanced: 55 },
    nearestAirport: 'Denver International Airport',
    airportCode: 'DEN',
    driveFromAirport: '1 hour 45 minutes',
    bestMonths: ['December', 'January', 'February', 'March'],
    highlights: [
      'Highest chairlift in North America (Imperial Express at 12,840 ft)',
      'Charming historic Main Street with lively aprés-ski scene',
      'Five interconnected peaks offering diverse terrain',
      'Excellent terrain parks for freestyle skiing and snowboarding',
      'One of Colorado\'s most accessible resorts from Denver'
    ],
    hotels: [
      {
        name: 'One Ski Hill Place',
        slug: 'one-ski-hill-place',
        priceRange: '$$$$',
        pricePerNight: '$400-800',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Luxury ski-in/ski-out condominiums located right at the base of Peak 8 with bowling alley, theater, and heated pool.',
        amenities: ['Pool', 'Hot Tub', 'Spa', 'Restaurant', 'Ski Valet'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho341929%2Fone-ski-hill-place-a-rockresort-breckenridge-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 39.4790,
        lng: -106.0670
      },
      {
        name: 'Gravity Haus Breckenridge',
        slug: 'gravity-haus-breckenridge',
        priceRange: '$$$',
        pricePerNight: '$250-500',
        distanceToSlopes: '0.2 miles',
        skiInSkiOut: false,
        description: 'A modern adventure-lifestyle hotel near the base of Peak 9 with a focus on outdoor enthusiasts. Features co-working spaces and a lively bar.',
        amenities: ['Hot Tub', 'Restaurant', 'Fitness Center', 'Ski Storage'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho261167%2Fgravity-haus-breckenridge-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 39.4805,
        lng: -106.0460
      },
      {
        name: 'DoubleTree by Hilton Breckenridge',
        slug: 'doubletree-breckenridge',
        priceRange: '$$',
        pricePerNight: '$180-350',
        distanceToSlopes: '0.5 miles',
        skiInSkiOut: false,
        description: 'Comfortable hotel within walking distance of Main Street offering reliable amenities and a free shuttle to the slopes.',
        amenities: ['Pool', 'Hot Tub', 'Free Parking', 'Shuttle', 'Restaurant'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho202513%2Fdoubletree-by-hilton-hotel-breckenridge-breckenridge-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 39.4830,
        lng: -106.0410
      },
      {
        name: 'Beaver Run Resort',
        slug: 'beaver-run-resort',
        priceRange: '$$',
        pricePerNight: '$150-300',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Large family-friendly resort with ski-in/ski-out access from Peak 9 and a massive indoor-outdoor pool complex.',
        amenities: ['Pool', 'Hot Tub', 'Restaurant', 'Shuttle', 'Ski Rental'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho211598%2Fbeaver-run-resort-conference-center-breckenridge-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 39.4798,
        lng: -106.0490
      }
    ]
  },

  {
    activityType: 'ski' as const,
    name: 'Aspen Snowmass',
    slug: 'aspen-snowmass',
    state: 'Colorado',
    country: 'US',
    region: 'Colorado',
    tagline: 'Four mountains, one legendary destination',
    description: 'Aspen Snowmass encompasses four distinct mountains — Aspen Mountain, Snowmass, Aspen Highlands, and Buttermilk — offering over 5,500 acres of terrain. The town of Aspen is world-renowned for its celebrity culture, fine dining, and vibrant arts scene.',
    lat: 39.2084,
    lng: -106.9490,
    elevation: 12510,
    verticalDrop: 4406,
    skiableAcres: 5527,
    numberOfTrails: 362,
    numberOfLifts: 43,
    longestRun: '5.3 miles',
    snowfall: '300 inches annually',
    season: 'November - April',
    beginnerFriendly: true,
    nightSkiing: false,
    terrain: { beginner: 21, intermediate: 30, advanced: 49 },
    nearestAirport: 'Aspen/Pitkin County Airport',
    airportCode: 'ASE',
    driveFromAirport: '10 minutes',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Four separate mountains offering unmatched variety',
      'Aspen Highlands Bowl is one of Colorado\'s most iconic expert runs',
      'World-class cultural scene with museums, galleries, and festivals',
      'Buttermilk hosts the Winter X Games annually',
      'Snowmass offers the most vertical feet in the US at 4,406 ft'
    ],
    hotels: [
      {
        name: 'The Little Nell',
        slug: 'the-little-nell',
        priceRange: '$$$$',
        pricePerNight: '$700-1500',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Aspen\'s only five-star, five-diamond ski-in/ski-out hotel, located at the base of Aspen Mountain with legendary service and dining.',
        amenities: ['Spa', 'Restaurant', 'Pool', 'Hot Tub', 'Ski Concierge'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho127315%2Fthe-little-nell-aspen-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 39.1868,
        lng: -106.8183
      },
      {
        name: 'The St. Regis Aspen Resort',
        slug: 'st-regis-aspen',
        priceRange: '$$$$',
        pricePerNight: '$500-1100',
        distanceToSlopes: '0.2 miles',
        skiInSkiOut: false,
        description: 'Elegant luxury resort steps from the Silver Queen Gondola with a Remede Spa, heated outdoor pool, and mountain-view rooms.',
        amenities: ['Spa', 'Pool', 'Restaurant', 'Hot Tub', 'Butler Service'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho141160%2Fthe-st-regis-aspen-resort-aspen-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 39.1878,
        lng: -106.8195
      },
      {
        name: 'Limelight Hotel Aspen',
        slug: 'limelight-hotel-aspen',
        priceRange: '$$$',
        pricePerNight: '$350-600',
        distanceToSlopes: '0.1 miles',
        skiInSkiOut: false,
        description: 'Contemporary hotel in the heart of Aspen with a fun, social atmosphere, complimentary breakfast, and prime downtown location.',
        amenities: ['Hot Tub', 'Restaurant', 'Fitness Center', 'Ski Storage'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho269873%2Flimelight-hotel-aspen-aspen-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 39.1890,
        lng: -106.8190
      },
      {
        name: 'Viceroy Snowmass',
        slug: 'viceroy-snowmass',
        priceRange: '$$$$',
        pricePerNight: '$400-900',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Sleek, modern ski-in/ski-out resort at the base of Snowmass Mountain with a full-service spa, heated pool, and treehouse-inspired kids\' club.',
        amenities: ['Pool', 'Spa', 'Restaurant', 'Hot Tub', 'Ski Valet'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho324391%2Fviceroy-snowmass-snowmass-village-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 39.2130,
        lng: -106.9510
      }
    ]
  },

  {
    activityType: 'ski' as const,
    name: 'Steamboat Springs',
    slug: 'steamboat',
    state: 'Colorado',
    country: 'US',
    region: 'Colorado',
    tagline: 'Champagne Powder and cowboy culture',
    description: 'Steamboat is famous for its trademarked Champagne Powder snow and authentic Western ranching heritage. The resort blends genuine cowboy culture with world-class skiing across nearly 3,000 acres of varied terrain.',
    lat: 40.4572,
    lng: -106.8045,
    elevation: 10568,
    verticalDrop: 3668,
    skiableAcres: 2965,
    numberOfTrails: 169,
    numberOfLifts: 18,
    longestRun: '3 miles',
    snowfall: '349 inches annually',
    season: 'November - April',
    beginnerFriendly: true,
    nightSkiing: true,
    terrain: { beginner: 14, intermediate: 42, advanced: 44 },
    nearestAirport: 'Yampa Valley Regional Airport',
    airportCode: 'HDN',
    driveFromAirport: '30 minutes',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Trademarked Champagne Powder — some of the lightest, driest snow in Colorado',
      'Authentic Western town with natural hot springs',
      'Has produced more Winter Olympians than any other town in North America',
      'Excellent tree skiing through aspen glades',
      'Night skiing available on select runs'
    ],
    hotels: [
      {
        name: 'Steamboat Grand Resort Hotel',
        slug: 'steamboat-grand',
        priceRange: '$$$',
        pricePerNight: '$250-500',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Full-service resort hotel at the base of the Steamboat ski area with spacious rooms, a large pool complex, and direct slope access.',
        amenities: ['Pool', 'Hot Tub', 'Restaurant', 'Spa', 'Ski Valet'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho217282%2Fthe-steamboat-grand-steamboat-springs-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 40.4565,
        lng: -106.8020
      },
      {
        name: 'The Lodge at Steamboat',
        slug: 'lodge-at-steamboat',
        priceRange: '$$',
        pricePerNight: '$150-300',
        distanceToSlopes: '0.3 miles',
        skiInSkiOut: false,
        description: 'Affordable lodge option on the mountain with panoramic valley views and a free shuttle to the gondola base.',
        amenities: ['Hot Tub', 'Free Parking', 'Shuttle', 'Kitchen'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho632715%2Fthe-lodge-at-steamboat-by-vacasa-steamboat-springs-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 40.4550,
        lng: -106.8005
      },
      {
        name: 'Trailhead Lodge',
        slug: 'trailhead-lodge',
        priceRange: '$$$',
        pricePerNight: '$300-550',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Luxury condominiums with ski-in/ski-out access, modern furnishings, and full kitchens perfect for families.',
        amenities: ['Hot Tub', 'Pool', 'Ski Storage', 'Kitchen', 'Fitness Center'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho1463308832%2Ftrailhead-lodges-by-stay-winter-park-winter-park-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 40.4580,
        lng: -106.8060
      }
    ]
  },

  {
    activityType: 'ski' as const,
    name: 'Telluride',
    slug: 'telluride',
    state: 'Colorado',
    country: 'US',
    region: 'Colorado',
    tagline: 'Where rugged beauty meets refined adventure',
    description: 'Nestled in a dramatic box canyon in the San Juan Mountains, Telluride offers stunning scenery and challenging terrain. The free gondola connects the historic downtown with the modern Mountain Village, making it one of Colorado\'s most unique ski destinations.',
    lat: 37.9375,
    lng: -107.8123,
    elevation: 12570,
    verticalDrop: 4425,
    skiableAcres: 2000,
    numberOfTrails: 148,
    numberOfLifts: 18,
    longestRun: '4.6 miles',
    snowfall: '309 inches annually',
    season: 'November - April',
    beginnerFriendly: false,
    nightSkiing: false,
    terrain: { beginner: 23, intermediate: 36, advanced: 41 },
    nearestAirport: 'Montrose Regional Airport',
    airportCode: 'MTJ',
    driveFromAirport: '1 hour 15 minutes',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Stunning box canyon setting in the San Juan Mountains',
      'Free gondola connecting town to Mountain Village',
      'Some of the steepest in-bounds terrain in Colorado',
      'Charming, historic mining town with no chain restaurants',
      'Revelation Bowl offers wide-open above-treeline skiing'
    ],
    hotels: [
      {
        name: 'Madeline Hotel & Residences',
        slug: 'madeline-hotel-telluride',
        priceRange: '$$$$',
        pricePerNight: '$450-900',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Auberge Resorts Collection property in Mountain Village offering ski-in/ski-out luxury, an outdoor heated pool, and a world-class spa.',
        amenities: ['Spa', 'Pool', 'Restaurant', 'Hot Tub', 'Ski Valet'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho307839%2Fmadeline-hotel-residences-auberge-resorts-collection-telluride-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 37.9365,
        lng: -107.8465
      },
      {
        name: 'Hotel Telluride',
        slug: 'hotel-telluride',
        priceRange: '$$$',
        pricePerNight: '$250-500',
        distanceToSlopes: '0.3 miles',
        skiInSkiOut: false,
        description: 'Boutique hotel on the edge of downtown Telluride with mountain views, easy gondola access, and complimentary breakfast.',
        amenities: ['Hot Tub', 'Restaurant', 'Free Parking', 'Shuttle'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho196465%2Fthe-hotel-telluride-telluride-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 37.9380,
        lng: -107.8130
      },
      {
        name: 'Lumiere Hotel',
        slug: 'lumiere-hotel-telluride',
        priceRange: '$$$$',
        pricePerNight: '$500-1000',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Intimate luxury hotel in Mountain Village with just 14 rooms, offering personalized service, a rooftop hot tub, and slope-side access.',
        amenities: ['Hot Tub', 'Spa', 'Restaurant', 'Ski Valet'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho267583%2Flumiere-with-inspirato-telluride-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 37.9358,
        lng: -107.8480
      }
    ]
  },

  {
    activityType: 'ski' as const,
    name: 'Keystone',
    slug: 'keystone',
    state: 'Colorado',
    country: 'US',
    region: 'Colorado',
    tagline: 'Three mountains of family-friendly adventure',
    description: 'Keystone offers three interconnected mountains with terrain for all abilities, plus Colorado\'s largest night skiing operation. Known as a top family destination, it features a tubing hill, ice skating, and the massive A51 terrain park.',
    lat: 39.6045,
    lng: -105.9497,
    elevation: 12408,
    verticalDrop: 3128,
    skiableAcres: 3148,
    numberOfTrails: 128,
    numberOfLifts: 20,
    longestRun: '3.5 miles',
    snowfall: '235 inches annually',
    season: 'November - April',
    beginnerFriendly: true,
    nightSkiing: true,
    terrain: { beginner: 12, intermediate: 34, advanced: 54 },
    nearestAirport: 'Denver International Airport',
    airportCode: 'DEN',
    driveFromAirport: '1 hour 30 minutes',
    bestMonths: ['December', 'January', 'February', 'March'],
    highlights: [
      'Largest night skiing operation in Colorado',
      'Three interconnected peaks with diverse terrain',
      'A51 Terrain Park is one of the best in Colorado',
      'Top-rated family resort with kids\' programs and activities',
      'Outdoor ice skating on Keystone Lake in the village'
    ],
    hotels: [
      {
        name: 'Keystone Lodge & Spa',
        slug: 'keystone-lodge-spa',
        priceRange: '$$$',
        pricePerNight: '$250-450',
        distanceToSlopes: '0.2 miles',
        skiInSkiOut: false,
        description: 'The signature lodge in Keystone with a lakeside setting, full-service spa, and easy access to the gondola.',
        amenities: ['Spa', 'Pool', 'Restaurant', 'Hot Tub', 'Shuttle'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho112184%2Fkeystone-lodge-spa-by-keystone-resort-keystone-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 39.6060,
        lng: -105.9530
      },
      {
        name: 'Hyatt Place Keystone',
        slug: 'hyatt-place-keystone',
        priceRange: '$$',
        pricePerNight: '$180-350',
        distanceToSlopes: '0.3 miles',
        skiInSkiOut: false,
        description: 'Modern hotel near River Run Village with spacious rooms, free breakfast, and a convenient free shuttle to the lifts.',
        amenities: ['Hot Tub', 'Free Parking', 'Shuttle', 'Restaurant'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho207309%2Fhyatt-place-keystone-keystone-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 39.6048,
        lng: -105.9510
      },
      {
        name: 'River Run Village Condos',
        slug: 'river-run-village-condos',
        priceRange: '$$',
        pricePerNight: '$150-350',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Condo-style accommodations in River Run Village with ski-in/ski-out access to the gondola, full kitchens, and family-friendly amenities.',
        amenities: ['Hot Tub', 'Kitchen', 'Ski Storage', 'Free Parking'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho206422%2Friver-run-village-by-keystone-resort-keystone-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 39.6055,
        lng: -105.9505
      }
    ]
  },

  {
    activityType: 'ski' as const,
    name: 'Copper Mountain',
    slug: 'copper-mountain',
    state: 'Colorado',
    country: 'US',
    region: 'Colorado',
    tagline: 'Naturally divided terrain for every level',
    description: 'Copper Mountain is renowned for its naturally divided terrain — beginners on the right, intermediates in the middle, and experts on the left. This intuitive layout, combined with affordable prices and excellent snow, makes it a local favorite.',
    lat: 39.5022,
    lng: -106.1497,
    elevation: 12313,
    verticalDrop: 2738,
    skiableAcres: 2490,
    numberOfTrails: 150,
    numberOfLifts: 24,
    longestRun: '2.8 miles',
    snowfall: '305 inches annually',
    season: 'November - April',
    beginnerFriendly: true,
    nightSkiing: false,
    terrain: { beginner: 21, intermediate: 25, advanced: 54 },
    nearestAirport: 'Denver International Airport',
    airportCode: 'DEN',
    driveFromAirport: '1 hour 40 minutes',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Naturally divided terrain separates ability levels across the mountain',
      'Woodward Copper training facility for freestyle progression',
      'More affordable than neighboring Vail and Breckenridge',
      'Excellent snow quality thanks to high elevation and north-facing slopes',
      'Newly developed Center Village with dining and shopping'
    ],
    hotels: [
      {
        name: 'Copper Mountain Resort Condos',
        slug: 'copper-mountain-resort-condos',
        priceRange: '$$',
        pricePerNight: '$150-350',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Slope-side condominiums in Center Village and East Village offering direct ski access and full kitchen facilities.',
        amenities: ['Hot Tub', 'Kitchen', 'Ski Storage', 'Free Parking'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho312205%2Fcopper-one-at-center-village-by-copper-mountain-lodging-copper-mountain-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 39.5025,
        lng: -106.1505
      },
      {
        name: 'Element 29 by Hilton',
        slug: 'element-29-copper',
        priceRange: '$$$',
        pricePerNight: '$250-450',
        distanceToSlopes: '0.1 miles',
        skiInSkiOut: false,
        description: 'Modern hotel in Center Village with stylish rooms, a rooftop hot tub, and steps from the American Eagle lift.',
        amenities: ['Hot Tub', 'Restaurant', 'Fitness Center', 'Ski Storage'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho2181279328%2Felement-29-hotel-copper-mountain-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 39.5020,
        lng: -106.1490
      },
      {
        name: 'Tucker Mountain Lodge',
        slug: 'tucker-mountain-lodge',
        priceRange: '$$',
        pricePerNight: '$130-280',
        distanceToSlopes: '0.2 miles',
        skiInSkiOut: false,
        description: 'Budget-friendly lodge near the slopes with comfortable rooms and easy access to the free intra-resort shuttle.',
        amenities: ['Hot Tub', 'Free Parking', 'Shuttle', 'Kitchen'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho545442%2Ftucker-mountain-at-center-village-by-copper-mountain-lodging-copper-mountain-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 39.5015,
        lng: -106.1480
      }
    ]
  },

  {
    activityType: 'ski' as const,
    name: 'Winter Park',
    slug: 'winter-park',
    state: 'Colorado',
    country: 'US',
    region: 'Colorado',
    tagline: 'Colorado\'s favorite — close to Denver, far from ordinary',
    description: 'Winter Park is the closest major ski resort to Denver and a longtime favorite of Front Range locals. With over 3,000 acres spanning seven territories, it offers outstanding terrain variety and the legendary bumps of Mary Jane.',
    lat: 39.8868,
    lng: -105.7625,
    elevation: 12060,
    verticalDrop: 3060,
    skiableAcres: 3081,
    numberOfTrails: 166,
    numberOfLifts: 25,
    longestRun: '4.9 miles',
    snowfall: '325 inches annually',
    season: 'November - April',
    beginnerFriendly: true,
    nightSkiing: false,
    terrain: { beginner: 8, intermediate: 18, advanced: 74 },
    nearestAirport: 'Denver International Airport',
    airportCode: 'DEN',
    driveFromAirport: '1 hour 30 minutes',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Mary Jane mountain is legendary for its mogul runs',
      'Amtrak Winter Park Express runs directly from Denver\'s Union Station',
      'Seven distinct territories offering incredible terrain variety',
      'National Sports Center for the Disabled (NSCD) headquartered here',
      'Closest major resort to Denver via I-70 and the Moffat Tunnel'
    ],
    hotels: [
      {
        name: 'Zephyr Mountain Lodge',
        slug: 'zephyr-mountain-lodge',
        priceRange: '$$$',
        pricePerNight: '$250-500',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Ski-in/ski-out lodge at the base of Winter Park Resort with condo-style units, an outdoor pool, and hot tubs.',
        amenities: ['Pool', 'Hot Tub', 'Kitchen', 'Ski Storage', 'Fitness Center'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho212598%2Fzephyr-mountain-lodge-winter-park-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 39.8875,
        lng: -105.7640
      },
      {
        name: 'Iron Horse Resort',
        slug: 'iron-horse-resort',
        priceRange: '$$',
        pricePerNight: '$150-350',
        distanceToSlopes: '0.3 miles',
        skiInSkiOut: false,
        description: 'Comfortable condo resort near the Village at Winter Park with spacious units, an indoor pool, and free shuttle service.',
        amenities: ['Pool', 'Hot Tub', 'Free Parking', 'Kitchen', 'Shuttle'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho416879%2Firon-horse-resort-winter-park-united-states%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 39.8860,
        lng: -105.7610
      },
      {
        name: 'Wild Horse Inn',
        slug: 'wild-horse-inn',
        priceRange: '$$',
        pricePerNight: '$120-250',
        distanceToSlopes: '2 miles',
        skiInSkiOut: false,
        description: 'Cozy bed-and-breakfast in the Fraser Valley with mountain views, hearty breakfasts, and a relaxed, intimate atmosphere.',
        amenities: ['Hot Tub', 'Free Parking', 'Restaurant'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho417439%2Fwild-horse-inn-fraser-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 39.8920,
        lng: -105.7700
      }
    ]
  },

  // ===========================================================================
  // UTAH (6)
  // ===========================================================================

  {
    activityType: 'ski' as const,
    name: 'Park City Mountain',
    slug: 'park-city',
    state: 'Utah',
    country: 'US',
    region: 'Utah',
    tagline: 'The largest ski resort in the United States',
    description: 'Park City Mountain is the largest ski resort in the US, formed by the connection of the former Park City Mountain Resort and Canyons Resort. With over 7,300 acres and a historic Main Street just minutes away, it offers an unmatched combination of terrain and town.',
    lat: 40.6514,
    lng: -111.5080,
    elevation: 10026,
    verticalDrop: 3226,
    skiableAcres: 7300,
    numberOfTrails: 341,
    numberOfLifts: 41,
    longestRun: '3.5 miles',
    snowfall: '360 inches annually',
    season: 'November - April',
    beginnerFriendly: true,
    nightSkiing: false,
    terrain: { beginner: 8, intermediate: 42, advanced: 50 },
    nearestAirport: 'Salt Lake City International Airport',
    airportCode: 'SLC',
    driveFromAirport: '35 minutes',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Largest ski resort in the United States at 7,300+ acres',
      'Historic Main Street with world-class dining and nightlife',
      'Host of the 2002 Winter Olympics',
      'Interconnected terrain spanning two former resorts',
      'Only 35 minutes from Salt Lake City International Airport'
    ],
    hotels: [
      {
        name: 'Montage Deer Valley',
        slug: 'montage-deer-valley',
        priceRange: '$$$$',
        pricePerNight: '$600-1200',
        distanceToSlopes: '2 miles',
        skiInSkiOut: false,
        description: 'Ultra-luxury resort perched above Park City with sweeping mountain views, a 35,000 sq ft spa, and impeccable service.',
        amenities: ['Spa', 'Pool', 'Restaurant', 'Hot Tub', 'Shuttle'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho342049%2Fmontage-deer-valley-park-city-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 40.6380,
        lng: -111.4890
      },
      {
        name: 'Hyatt Centric Park City',
        slug: 'hyatt-centric-park-city',
        priceRange: '$$$',
        pricePerNight: '$300-550',
        distanceToSlopes: '0.5 miles',
        skiInSkiOut: false,
        description: 'Modern boutique hotel on Main Street with a rooftop hot tub, ski valet, and walkable access to dining and nightlife.',
        amenities: ['Hot Tub', 'Restaurant', 'Ski Valet', 'Fitness Center'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho332807%2Fhyatt-centric-park-city-park-city-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 40.6455,
        lng: -111.4980
      },
      {
        name: 'Westgate Park City Resort & Spa',
        slug: 'westgate-park-city',
        priceRange: '$$$',
        pricePerNight: '$250-500',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Full-service ski-in/ski-out resort at the Canyons Village base area with spacious suites, a luxury spa, and multiple dining options.',
        amenities: ['Spa', 'Pool', 'Restaurant', 'Hot Tub', 'Ski Valet'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho199796%2Fwestgate-park-city-resort-spa-park-city-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 40.6840,
        lng: -111.5560
      },
      {
        name: 'Park City Peaks Hotel',
        slug: 'park-city-peaks-hotel',
        priceRange: '$$',
        pricePerNight: '$150-300',
        distanceToSlopes: '1 mile',
        skiInSkiOut: false,
        description: 'Affordable hotel with a convenient free shuttle to both Park City Mountain and Deer Valley, plus an outdoor pool and hot tub.',
        amenities: ['Pool', 'Hot Tub', 'Free Parking', 'Shuttle', 'Restaurant'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho129630%2Fpark-city-peaks-hotel-park-city-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 40.6490,
        lng: -111.5010
      }
    ]
  },

  {
    activityType: 'ski' as const,
    name: 'Deer Valley',
    slug: 'deer-valley',
    state: 'Utah',
    country: 'US',
    region: 'Utah',
    tagline: 'The ultimate luxury ski experience',
    description: 'Deer Valley is consistently rated the top ski resort in North America for its impeccable grooming, limited daily skier capacity, and upscale amenities. This skiers-only resort (no snowboarding) offers a refined mountain experience unlike any other.',
    lat: 40.6374,
    lng: -111.4783,
    elevation: 9570,
    verticalDrop: 3000,
    skiableAcres: 2026,
    numberOfTrails: 103,
    numberOfLifts: 21,
    longestRun: '2.8 miles',
    snowfall: '300 inches annually',
    season: 'December - April',
    beginnerFriendly: true,
    nightSkiing: false,
    terrain: { beginner: 27, intermediate: 41, advanced: 32 },
    nearestAirport: 'Salt Lake City International Airport',
    airportCode: 'SLC',
    driveFromAirport: '40 minutes',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Consistently rated #1 ski resort in North America',
      'Limited to 7,500 skiers per day for an uncrowded experience',
      'Skiers only — no snowboarding allowed',
      'Immaculate grooming and world-class on-mountain dining',
      'Host venue for 2002 Olympic slalom and freestyle events'
    ],
    hotels: [
      {
        name: 'St. Regis Deer Valley',
        slug: 'st-regis-deer-valley',
        priceRange: '$$$$',
        pricePerNight: '$700-1500',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'The pinnacle of luxury in Deer Valley with ski-in/ski-out access, a world-class spa, heated outdoor pool, and butler service.',
        amenities: ['Spa', 'Pool', 'Restaurant', 'Hot Tub', 'Butler Service'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho328062%2Fthe-st-regis-deer-valley-park-city-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 40.6360,
        lng: -111.4780
      },
      {
        name: 'Stein Eriksen Lodge',
        slug: 'stein-eriksen-lodge',
        priceRange: '$$$$',
        pricePerNight: '$500-1200',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Iconic Norwegian-inspired luxury lodge mid-mountain at Silver Lake Village with legendary service, fine dining, and ski-in/ski-out access.',
        amenities: ['Spa', 'Restaurant', 'Pool', 'Hot Tub', 'Ski Valet'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho152502%2Fstein-eriksen-lodge-park-city-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 40.6250,
        lng: -111.4820
      },
      {
        name: 'Goldener Hirsch Inn',
        slug: 'goldener-hirsch-inn',
        priceRange: '$$$',
        pricePerNight: '$350-700',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Austrian-inspired boutique inn at Silver Lake Village with charming rooms, an acclaimed restaurant, and direct slope access.',
        amenities: ['Restaurant', 'Hot Tub', 'Ski Valet', 'Spa'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho558958240%2Fgoldener-hirsch-inn-park-city-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 40.6255,
        lng: -111.4815
      }
    ]
  },

  {
    activityType: 'ski' as const,
    name: 'Snowbird',
    slug: 'snowbird',
    state: 'Utah',
    country: 'US',
    region: 'Utah',
    tagline: 'The greatest snow on Earth meets serious terrain',
    description: 'Snowbird is a no-frills, terrain-focused resort in Little Cottonwood Canyon known for massive snowfall, steep chutes, and an iconic aerial tram. It consistently receives some of the highest snowfall totals of any resort in North America.',
    lat: 40.5830,
    lng: -111.6538,
    elevation: 11000,
    verticalDrop: 3240,
    skiableAcres: 2500,
    numberOfTrails: 140,
    numberOfLifts: 14,
    longestRun: '3.5 miles',
    snowfall: '500 inches annually',
    season: 'November - May',
    beginnerFriendly: false,
    nightSkiing: false,
    terrain: { beginner: 27, intermediate: 38, advanced: 35 },
    nearestAirport: 'Salt Lake City International Airport',
    airportCode: 'SLC',
    driveFromAirport: '30 minutes',
    bestMonths: ['January', 'February', 'March', 'April'],
    highlights: [
      'Average of 500 inches of snowfall per year — among the highest in North America',
      'Iconic 125-passenger aerial tram rises 2,900 vertical feet',
      'Steep, challenging terrain including famous chutes and bowls',
      'Only 30 minutes from Salt Lake City',
      'Often open into late May or June due to deep snowpack'
    ],
    hotels: [
      {
        name: 'The Cliff Lodge & Spa',
        slug: 'cliff-lodge-snowbird',
        priceRange: '$$$',
        pricePerNight: '$250-500',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Snowbird\'s signature 11-story lodge at the base of the mountain with a rooftop pool, full-service spa, and direct tram access.',
        amenities: ['Spa', 'Pool', 'Restaurant', 'Hot Tub', 'Ski Storage'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho206558%2Fthe-cliff-lodge-and-spa-sandy-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 40.5810,
        lng: -111.6560
      },
      {
        name: 'The Lodge at Snowbird',
        slug: 'lodge-at-snowbird',
        priceRange: '$$',
        pricePerNight: '$180-350',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Condo-style lodge with full kitchens and ski-in/ski-out access, perfect for families and longer stays at Snowbird.',
        amenities: ['Hot Tub', 'Kitchen', 'Ski Storage', 'Pool'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho215686%2Flodge-at-snowbird-sandy-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 40.5825,
        lng: -111.6545
      },
      {
        name: 'Iron Blosam Lodge',
        slug: 'iron-blosam-lodge',
        priceRange: '$$',
        pricePerNight: '$150-300',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'All-suite lodge connected to the Cliff Lodge via skybridge with spacious accommodations and direct mountain access.',
        amenities: ['Pool', 'Hot Tub', 'Restaurant', 'Ski Storage'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho215686%2Flodge-at-snowbird-sandy-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 40.5815,
        lng: -111.6555
      }
    ]
  },

  {
    activityType: 'ski' as const,
    name: 'Alta',
    slug: 'alta',
    state: 'Utah',
    country: 'US',
    region: 'Utah',
    tagline: 'Skiers\' mountain, pure and simple',
    description: 'Alta is a legendary skiers-only resort in Little Cottonwood Canyon that has remained true to its roots since 1938. With an average of 547 inches of snowfall and no snowboarding allowed, Alta delivers an old-school, powder-focused ski experience.',
    lat: 40.5884,
    lng: -111.6386,
    elevation: 10550,
    verticalDrop: 2538,
    skiableAcres: 2614,
    numberOfTrails: 119,
    numberOfLifts: 10,
    longestRun: '3.5 miles',
    snowfall: '547 inches annually',
    season: 'November - April',
    beginnerFriendly: false,
    nightSkiing: false,
    terrain: { beginner: 25, intermediate: 40, advanced: 35 },
    nearestAirport: 'Salt Lake City International Airport',
    airportCode: 'SLC',
    driveFromAirport: '35 minutes',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Average of 547 inches of annual snowfall — highest in Utah',
      'Skiers only — no snowboarding allowed since inception',
      'One of the oldest ski areas in the US, operating since 1938',
      'Interconnected with Snowbird via the AltaBird pass',
      'Laid-back, old-school atmosphere focused on the skiing experience'
    ],
    hotels: [
      {
        name: 'Alta Lodge',
        slug: 'alta-lodge',
        priceRange: '$$$',
        pricePerNight: '$300-600',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Classic ski lodge operating since 1940 with a warm, communal atmosphere, included meals, and direct slope access.',
        amenities: ['Restaurant', 'Hot Tub', 'Spa', 'Ski Storage'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho424715%2Fthe-snowpine-lodge-sandy-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 40.5890,
        lng: -111.6380
      },
      {
        name: 'Snowpine Lodge',
        slug: 'snowpine-lodge-alta',
        priceRange: '$$$$',
        pricePerNight: '$400-800',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Boutique luxury lodge rebuilt in 2019 with modern amenities, a rooftop hot tub, spa, and ski-in/ski-out access.',
        amenities: ['Spa', 'Hot Tub', 'Restaurant', 'Ski Valet'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho424715%2Fthe-snowpine-lodge-sandy-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 40.5880,
        lng: -111.6370
      },
      {
        name: 'Rustler Lodge',
        slug: 'rustler-lodge-alta',
        priceRange: '$$$',
        pricePerNight: '$350-650',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Full-service lodge steps from the Wildcat chairlift with an outdoor heated pool, fine dining, and the quintessential Alta experience.',
        amenities: ['Pool', 'Restaurant', 'Hot Tub', 'Spa', 'Ski Storage'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho424715%2Fthe-snowpine-lodge-sandy-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 40.5888,
        lng: -111.6395
      }
    ]
  },

  {
    activityType: 'ski' as const,
    name: 'Brighton',
    slug: 'brighton',
    state: 'Utah',
    country: 'US',
    region: 'Utah',
    tagline: 'Utah\'s best-kept secret for night skiing and park riding',
    description: 'Brighton is a family-owned resort in Big Cottonwood Canyon beloved by locals for its affordable prices, excellent terrain parks, and the best night skiing in Utah. It offers a relaxed, no-pretense vibe with surprisingly good terrain.',
    lat: 40.5980,
    lng: -111.5832,
    elevation: 10500,
    verticalDrop: 1745,
    skiableAcres: 1050,
    numberOfTrails: 66,
    numberOfLifts: 7,
    longestRun: '2 miles',
    snowfall: '500 inches annually',
    season: 'November - April',
    beginnerFriendly: true,
    nightSkiing: true,
    terrain: { beginner: 21, intermediate: 40, advanced: 39 },
    nearestAirport: 'Salt Lake City International Airport',
    airportCode: 'SLC',
    driveFromAirport: '35 minutes',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Best night skiing in Utah with runs open until 9 PM',
      'Family-owned resort with affordable lift tickets',
      'Excellent terrain parks for all skill levels',
      'Interconnected with Solitude via the SolBright trail',
      'Receives an average of 500 inches of snow annually'
    ],
    hotels: [
      {
        name: 'Brighton Lodge',
        slug: 'brighton-lodge',
        priceRange: '$$',
        pricePerNight: '$120-250',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Simple, affordable lodge at the base of Brighton with basic but comfortable rooms and direct slope access.',
        amenities: ['Restaurant', 'Ski Storage', 'Hot Tub'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho3590912608%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 40.5975,
        lng: -111.5830
      },
      {
        name: 'Silver Fork Lodge',
        slug: 'silver-fork-lodge-brighton',
        priceRange: '$$',
        pricePerNight: '$100-200',
        distanceToSlopes: '2 miles',
        skiInSkiOut: false,
        description: 'Rustic bed-and-breakfast in Big Cottonwood Canyon known for its excellent restaurant and cozy mountain atmosphere.',
        amenities: ['Restaurant', 'Free Parking', 'Hot Tub'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho478578%2Fsilver-fork-lodge-and-restaurant-brighton-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 40.5900,
        lng: -111.5950
      },
      {
        name: 'Homewood Suites Midvale',
        slug: 'homewood-suites-midvale',
        priceRange: '$$',
        pricePerNight: '$130-250',
        distanceToSlopes: '14 miles',
        skiInSkiOut: false,
        description: 'Extended-stay hotel at the mouth of Big Cottonwood Canyon with free breakfast, kitchen suites, and easy canyon access.',
        amenities: ['Pool', 'Free Parking', 'Kitchen', 'Fitness Center'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho126040%2Fhomewood-suites-by-hilton-salt-lake-city-midvale-sandy-midvale-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 40.6110,
        lng: -111.8750
      }
    ]
  },

  {
    activityType: 'ski' as const,
    name: 'Sundance Mountain Resort',
    slug: 'sundance',
    state: 'Utah',
    country: 'US',
    region: 'Utah',
    tagline: 'Robert Redford\'s artistic mountain retreat',
    description: 'Founded by Robert Redford in 1969, Sundance is a boutique resort at the base of Mount Timpanogos that blends art, nature, and skiing into a unique experience. It is intimate, uncommercial, and focused on the connection between creativity and the outdoors.',
    lat: 40.3930,
    lng: -111.5879,
    elevation: 8250,
    verticalDrop: 2150,
    skiableAcres: 450,
    numberOfTrails: 45,
    numberOfLifts: 5,
    longestRun: '2.5 miles',
    snowfall: '320 inches annually',
    season: 'December - April',
    beginnerFriendly: true,
    nightSkiing: true,
    terrain: { beginner: 20, intermediate: 40, advanced: 40 },
    nearestAirport: 'Salt Lake City International Airport',
    airportCode: 'SLC',
    driveFromAirport: '1 hour 15 minutes',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Founded by Robert Redford with a focus on art and nature',
      'Home of the Sundance Film Festival (held nearby in Park City)',
      'Night skiing on select runs with a magical atmosphere',
      'Intimate, uncrowded experience with only 450 skiable acres',
      'Beautiful setting at the base of 11,750 ft Mount Timpanogos'
    ],
    hotels: [
      {
        name: 'Sundance Mountain Resort',
        slug: 'sundance-mountain-resort-hotel',
        priceRange: '$$$',
        pricePerNight: '$300-600',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'The resort\'s own rustic-luxury cabins and suites nestled among towering pines with fireplaces, artisan decor, and mountain views.',
        amenities: ['Spa', 'Restaurant', 'Hot Tub', 'Ski Storage'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho260048%2Fsundance-mountain-resort-sundance-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 40.3935,
        lng: -111.5885
      },
      {
        name: 'Hampton Inn Provo',
        slug: 'hampton-inn-provo',
        priceRange: '$$',
        pricePerNight: '$120-220',
        distanceToSlopes: '14 miles',
        skiInSkiOut: false,
        description: 'Comfortable and affordable hotel in nearby Provo with free breakfast and a short drive up the canyon to Sundance.',
        amenities: ['Pool', 'Free Parking', 'Restaurant', 'Fitness Center'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho124935%2Fhampton-inn-provo-provo-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 40.2338,
        lng: -111.6585
      },
      {
        name: 'Marriott Springhill Suites Provo',
        slug: 'springhill-suites-provo',
        priceRange: '$$',
        pricePerNight: '$130-240',
        distanceToSlopes: '15 miles',
        skiInSkiOut: false,
        description: 'Modern all-suite hotel in Provo with spacious rooms, an indoor pool, and convenient access to Sundance via Provo Canyon.',
        amenities: ['Pool', 'Hot Tub', 'Free Parking', 'Kitchen'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho309610%2Fspringhill-suites-by-marriott-provo-provo-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 40.2350,
        lng: -111.6600
      }
    ]
  },

  // ===========================================================================
  // CALIFORNIA (4)
  // ===========================================================================

  {
    activityType: 'ski' as const,
    name: 'Mammoth Mountain',
    slug: 'mammoth-mountain',
    state: 'California',
    country: 'US',
    region: 'California',
    tagline: 'California\'s snowfall king with epic spring skiing',
    description: 'Mammoth Mountain is California\'s premier ski destination, towering at over 11,000 feet with massive snowfall totals and a season that often extends into June or July. Its high-alpine terrain and reliable snow make it the go-to for Southern California skiers.',
    lat: 37.6308,
    lng: -119.0326,
    elevation: 11053,
    verticalDrop: 3100,
    skiableAcres: 3500,
    numberOfTrails: 150,
    numberOfLifts: 28,
    longestRun: '3 miles',
    snowfall: '400 inches annually',
    season: 'November - June',
    beginnerFriendly: true,
    nightSkiing: false,
    terrain: { beginner: 25, intermediate: 40, advanced: 35 },
    nearestAirport: 'Mammoth Yosemite Airport',
    airportCode: 'MMH',
    driveFromAirport: '10 minutes',
    bestMonths: ['January', 'February', 'March', 'April'],
    highlights: [
      'One of the longest ski seasons in North America, often into June or July',
      'Massive snowfall averages over 400 inches annually',
      'Summit reaches 11,053 feet with panoramic Sierra Nevada views',
      'Unbound terrain parks are among the best on the West Coast',
      'Easy access from Los Angeles (about 5 hours) for weekend warriors'
    ],
    hotels: [
      {
        name: 'The Village Lodge',
        slug: 'village-lodge-mammoth',
        priceRange: '$$$',
        pricePerNight: '$250-500',
        distanceToSlopes: '0.1 miles',
        skiInSkiOut: false,
        description: 'Modern lodge in the Village at Mammoth with gondola access right outside the door, heated pool, and shopping and dining steps away.',
        amenities: ['Pool', 'Hot Tub', 'Kitchen', 'Ski Storage', 'Shuttle'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho274122%2Fthe-village-lodge-mammoth-lakes-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 37.6490,
        lng: -118.9870
      },
      {
        name: 'Mammoth Mountain Inn',
        slug: 'mammoth-mountain-inn',
        priceRange: '$$',
        pricePerNight: '$180-350',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'The only lodging at the Main Lodge base area with direct slope access, mountain views, and a convenient location for first tracks.',
        amenities: ['Restaurant', 'Hot Tub', 'Ski Storage', 'Shuttle'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho217648%2Fmammoth-mountain-inn-mammoth-lakes-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 37.6505,
        lng: -119.0375
      },
      {
        name: 'Westin Monache Resort',
        slug: 'westin-monache-mammoth',
        priceRange: '$$$',
        pricePerNight: '$300-550',
        distanceToSlopes: '0.1 miles',
        skiInSkiOut: false,
        description: 'Upscale resort in the Village at Mammoth with spacious suites, a full-service spa, heated pool, and steps from the Village Gondola.',
        amenities: ['Spa', 'Pool', 'Restaurant', 'Hot Tub', 'Fitness Center'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho260251%2Fthe-westin-monache-resort-mammoth-mammoth-lakes-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 37.6488,
        lng: -118.9865
      }
    ]
  },

  {
    activityType: 'ski' as const,
    name: 'Palisades Tahoe',
    slug: 'palisades-tahoe',
    state: 'California',
    country: 'US',
    region: 'California',
    tagline: 'Home of the 1960 Olympics and big-mountain skiing',
    description: 'Formerly known as Squaw Valley, Palisades Tahoe hosted the 1960 Winter Olympics and remains one of the most iconic ski resorts in North America. Combined with neighboring Alpine Meadows, it offers 6,000 acres of legendary terrain above the shores of Lake Tahoe.',
    lat: 39.1968,
    lng: -120.2354,
    elevation: 9050,
    verticalDrop: 2840,
    skiableAcres: 6000,
    numberOfTrails: 270,
    numberOfLifts: 37,
    longestRun: '3.2 miles',
    snowfall: '400 inches annually',
    season: 'November - May',
    beginnerFriendly: true,
    nightSkiing: false,
    terrain: { beginner: 25, intermediate: 43, advanced: 32 },
    nearestAirport: 'Reno-Tahoe International Airport',
    airportCode: 'RNO',
    driveFromAirport: '45 minutes',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Host of the 1960 Winter Olympics',
      'Combined 6,000 acres with neighboring Alpine Meadows',
      'High Camp at 8,200 feet offers stunning Lake Tahoe views',
      'KT-22 is one of the most famous chairlifts in North America',
      'Diverse terrain from wide groomers to extreme chutes and bowls'
    ],
    hotels: [
      {
        name: 'Everline Resort & Spa',
        slug: 'everline-resort-palisades',
        priceRange: '$$$$',
        pricePerNight: '$400-800',
        distanceToSlopes: '0.3 miles',
        skiInSkiOut: false,
        description: 'Luxury resort at the base of Palisades Tahoe with a full-service spa, multiple pools, and a championship golf course for summer visits.',
        amenities: ['Spa', 'Pool', 'Restaurant', 'Hot Tub', 'Fitness Center'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho128562%2Fresort-at-squaw-creek-a-destination-by-hyatt-residence-olympic-valley-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 39.1960,
        lng: -120.2340
      },
      {
        name: 'PlumpJack Inn',
        slug: 'plumpjack-inn-palisades',
        priceRange: '$$$',
        pricePerNight: '$250-500',
        distanceToSlopes: '0.1 miles',
        skiInSkiOut: false,
        description: 'Boutique inn at the base of the mountain with stylish rooms, a celebrated restaurant, and a hip, contemporary atmosphere.',
        amenities: ['Restaurant', 'Hot Tub', 'Ski Storage', 'Shuttle'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho124139%2Fplumpjack-inn-olympic-valley-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 39.1975,
        lng: -120.2360
      },
      {
        name: 'Village at Palisades Tahoe',
        slug: 'village-at-palisades',
        priceRange: '$$$',
        pricePerNight: '$200-450',
        distanceToSlopes: '0.1 miles',
        skiInSkiOut: false,
        description: 'Condo-style lodging in the pedestrian village at the base with restaurants, shops, and easy gondola access to the slopes.',
        amenities: ['Hot Tub', 'Pool', 'Kitchen', 'Restaurant', 'Ski Storage'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho206321%2Fthe-village-at-palisades-tahoe-olympic-valley-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 39.1972,
        lng: -120.2350
      }
    ]
  },

  {
    activityType: 'ski' as const,
    name: 'Heavenly',
    slug: 'heavenly',
    state: 'California',
    country: 'US',
    region: 'California',
    tagline: 'Ski two states with Lake Tahoe at your feet',
    description: 'Heavenly straddles the California-Nevada border high above Lake Tahoe, offering breathtaking views from nearly every run. With 4,800 acres of terrain and direct access to South Lake Tahoe\'s casinos and nightlife, it is the most uniquely situated resort in the country.',
    lat: 38.9353,
    lng: -119.9400,
    elevation: 10067,
    verticalDrop: 3500,
    skiableAcres: 4800,
    numberOfTrails: 97,
    numberOfLifts: 28,
    longestRun: '5.5 miles',
    snowfall: '360 inches annually',
    season: 'November - April',
    beginnerFriendly: true,
    nightSkiing: false,
    terrain: { beginner: 20, intermediate: 45, advanced: 35 },
    nearestAirport: 'Reno-Tahoe International Airport',
    airportCode: 'RNO',
    driveFromAirport: '1 hour',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Stunning panoramic views of Lake Tahoe from 10,067 feet',
      'Ski across the California-Nevada border',
      'Gondola from downtown South Lake Tahoe to mid-mountain',
      'Access to South Lake Tahoe casinos, restaurants, and nightlife',
      'One of the highest vertical drops in the Tahoe region at 3,500 ft'
    ],
    hotels: [
      {
        name: 'Zalanta Resort at the Village',
        slug: 'zalanta-resort-heavenly',
        priceRange: '$$$$',
        pricePerNight: '$400-800',
        distanceToSlopes: '0.1 miles',
        skiInSkiOut: false,
        description: 'Luxury condo resort steps from the Heavenly Gondola with modern mountain decor, full kitchens, and a heated pool.',
        amenities: ['Pool', 'Hot Tub', 'Kitchen', 'Fitness Center', 'Ski Storage'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho710283680%2Fzalanta-resort-at-the-village-south-lake-tahoe-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 38.9340,
        lng: -119.9420
      },
      {
        name: 'Hard Rock Hotel & Casino',
        slug: 'hard-rock-lake-tahoe',
        priceRange: '$$$',
        pricePerNight: '$200-450',
        distanceToSlopes: '0.5 miles',
        skiInSkiOut: false,
        description: 'Casino resort near the base of Heavenly with live entertainment, multiple restaurants, and a free shuttle to the gondola.',
        amenities: ['Restaurant', 'Pool', 'Spa', 'Shuttle', 'Casino'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho476266%2Fhard-rock-hotel-casino-lake-tahoe-stateline-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 38.9565,
        lng: -119.9405
      },
      {
        name: 'Marriott Grand Residence Lake Tahoe',
        slug: 'marriott-grand-residence-tahoe',
        priceRange: '$$$',
        pricePerNight: '$250-500',
        distanceToSlopes: '0.2 miles',
        skiInSkiOut: false,
        description: 'Spacious condo-style resort at the Heavenly Village with full kitchens, a large pool, and direct gondola access nearby.',
        amenities: ['Pool', 'Hot Tub', 'Kitchen', 'Restaurant', 'Fitness Center'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho205196%2Fmarriott-grand-residence-club-lake-tahoe-south-lake-tahoe-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 38.9345,
        lng: -119.9415
      },
      {
        name: 'Hotel & Casino at Harveys',
        slug: 'harveys-lake-tahoe',
        priceRange: '$$',
        pricePerNight: '$150-350',
        distanceToSlopes: '0.5 miles',
        skiInSkiOut: false,
        description: 'Iconic casino hotel in Stateline with mountain-view rooms, a large pool, and a free shuttle to Heavenly\'s gondola.',
        amenities: ['Pool', 'Restaurant', 'Spa', 'Shuttle', 'Casino'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho118158%2Fharveys-resort-casino-stateline-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 38.9560,
        lng: -119.9410
      }
    ]
  },

  {
    activityType: 'ski' as const,
    name: 'Northstar California',
    slug: 'northstar',
    state: 'California',
    country: 'US',
    region: 'California',
    tagline: 'Tahoe\'s most family-friendly luxury resort',
    description: 'Northstar California offers a refined, family-oriented ski experience on the north shore of Lake Tahoe. Known for its excellent grooming, upscale village, and consistent conditions, it is the go-to Tahoe resort for families and intermediate skiers.',
    lat: 39.2746,
    lng: -120.1210,
    elevation: 8610,
    verticalDrop: 2280,
    skiableAcres: 3170,
    numberOfTrails: 100,
    numberOfLifts: 20,
    longestRun: '2.9 miles',
    snowfall: '350 inches annually',
    season: 'November - April',
    beginnerFriendly: true,
    nightSkiing: false,
    terrain: { beginner: 13, intermediate: 60, advanced: 27 },
    nearestAirport: 'Reno-Tahoe International Airport',
    airportCode: 'RNO',
    driveFromAirport: '40 minutes',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Beautifully designed pedestrian village with ice rink and shopping',
      'Excellent grooming and predominately intermediate terrain',
      'Top-rated ski school and children\'s programs',
      'Protected from wind by its location among dense forests',
      'Lookout Mountain offers expert terrain with Tahoe views'
    ],
    hotels: [
      {
        name: 'Ritz-Carlton Lake Tahoe',
        slug: 'ritz-carlton-lake-tahoe',
        priceRange: '$$$$',
        pricePerNight: '$500-1100',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Ultra-luxury mid-mountain resort with ski-in/ski-out access, a world-class spa, heated outdoor pool, and impeccable service.',
        amenities: ['Spa', 'Pool', 'Restaurant', 'Hot Tub', 'Ski Concierge'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho323314%2Fthe-ritz-carlton-lake-tahoe-truckee-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 39.2740,
        lng: -120.1200
      },
      {
        name: 'Northstar Lodge by Welk Resorts',
        slug: 'northstar-lodge-welk',
        priceRange: '$$$',
        pricePerNight: '$250-450',
        distanceToSlopes: '0.1 miles',
        skiInSkiOut: false,
        description: 'Spacious condo-style resort in the Northstar Village with full kitchens, an outdoor pool, and easy access to the gondola.',
        amenities: ['Pool', 'Hot Tub', 'Kitchen', 'Fitness Center', 'Ski Storage'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho310367%2Fnorthstar-lodge-by-welk-resorts-truckee-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 39.2755,
        lng: -120.1215
      },
      {
        name: 'Catamount Lodge',
        slug: 'catamount-lodge-northstar',
        priceRange: '$$',
        pricePerNight: '$180-350',
        distanceToSlopes: '0.2 miles',
        skiInSkiOut: false,
        description: 'Comfortable lodge in the Village at Northstar with heated underground parking and walking distance to dining and the gondola.',
        amenities: ['Hot Tub', 'Free Parking', 'Kitchen', 'Ski Storage'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho237917%2Ftahoe-mountain-lodging-truckee-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 39.2750,
        lng: -120.1220
      }
    ]
  },

  // ===========================================================================
  // MONTANA / WYOMING (2)
  // ===========================================================================

  {
    activityType: 'ski' as const,
    name: 'Big Sky Resort',
    slug: 'big-sky',
    state: 'Montana',
    country: 'US',
    region: 'Montana/Wyoming',
    tagline: 'The biggest skiing in America with zero crowds',
    description: 'Big Sky Resort offers the biggest skiing in America with 5,800 acres of terrain and famously short lift lines. Located in southwestern Montana near Yellowstone National Park, it delivers an uncrowded, big-mountain experience beneath the iconic Lone Mountain.',
    lat: 45.2862,
    lng: -111.4013,
    elevation: 11166,
    verticalDrop: 4350,
    skiableAcres: 5800,
    numberOfTrails: 317,
    numberOfLifts: 39,
    longestRun: '6 miles',
    snowfall: '400 inches annually',
    season: 'November - April',
    beginnerFriendly: true,
    nightSkiing: false,
    terrain: { beginner: 15, intermediate: 25, advanced: 60 },
    nearestAirport: 'Bozeman Yellowstone International Airport',
    airportCode: 'BZN',
    driveFromAirport: '1 hour',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Biggest skiing in America with 5,800 acres and minimal crowds',
      'Lone Mountain summit at 11,166 ft with 360-degree views',
      'Gateway to Yellowstone National Park (60 miles south)',
      'Average of only 2 skiers per acre — the least crowded major resort',
      'The Tram takes experts to the summit for extreme terrain'
    ],
    hotels: [
      {
        name: 'The Summit Hotel',
        slug: 'summit-hotel-big-sky',
        priceRange: '$$$',
        pricePerNight: '$300-600',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Slope-side hotel at Mountain Village with ski-in/ski-out access, a heated outdoor pool, and panoramic views of Lone Mountain.',
        amenities: ['Pool', 'Hot Tub', 'Restaurant', 'Spa', 'Ski Valet'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho213984%2Fthe-summit-hotel-at-big-sky-resort-big-sky-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 45.2850,
        lng: -111.4020
      },
      {
        name: 'Huntley Lodge',
        slug: 'huntley-lodge-big-sky',
        priceRange: '$$',
        pricePerNight: '$200-400',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Big Sky\'s original lodge with ski-in/ski-out access, a classic mountain atmosphere, and a convenient location in Mountain Village.',
        amenities: ['Pool', 'Hot Tub', 'Restaurant', 'Ski Storage'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho221695%2Fhuntley-lodge-at-big-sky-resort-big-sky-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 45.2855,
        lng: -111.4010
      },
      {
        name: 'Lone Mountain Ranch',
        slug: 'lone-mountain-ranch',
        priceRange: '$$$',
        pricePerNight: '$350-700',
        distanceToSlopes: '3 miles',
        skiInSkiOut: false,
        description: 'Historic guest ranch with luxury log cabins, a renowned dining room, and cross-country skiing. A shuttle runs to Big Sky Resort.',
        amenities: ['Restaurant', 'Hot Tub', 'Shuttle', 'Free Parking'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho562918%2Flone-mountain-ranch-big-sky-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 45.2700,
        lng: -111.3870
      }
    ]
  },

  {
    activityType: 'ski' as const,
    name: 'Jackson Hole',
    slug: 'jackson-hole',
    state: 'Wyoming',
    country: 'US',
    region: 'Montana/Wyoming',
    tagline: 'The last of the great American ski towns',
    description: 'Jackson Hole Mountain Resort is legendary for its extreme terrain, including the iconic Corbet\'s Couloir. Set in the stunning Teton Range with 4,139 feet of continuous vertical, it attracts expert skiers from around the world while offering world-class dining in the town of Jackson.',
    lat: 43.5877,
    lng: -110.8279,
    elevation: 10450,
    verticalDrop: 4139,
    skiableAcres: 2500,
    numberOfTrails: 133,
    numberOfLifts: 13,
    longestRun: '4.7 miles',
    snowfall: '459 inches annually',
    season: 'December - April',
    beginnerFriendly: false,
    nightSkiing: false,
    terrain: { beginner: 10, intermediate: 40, advanced: 50 },
    nearestAirport: 'Jackson Hole Airport',
    airportCode: 'JAC',
    driveFromAirport: '20 minutes',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Corbet\'s Couloir is the most famous in-bounds ski run in the world',
      '4,139 feet of continuous vertical — among the highest in the US',
      'Stunning Teton views from every part of the mountain',
      'Charming Western town of Jackson with elk antler arches',
      'Gateway to Grand Teton and Yellowstone National Parks'
    ],
    hotels: [
      {
        name: 'Four Seasons Resort Jackson Hole',
        slug: 'four-seasons-jackson-hole',
        priceRange: '$$$$',
        pricePerNight: '$600-1200',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Ultra-luxury ski-in/ski-out resort at the base of the mountain with a world-class spa, heated outdoor pool, and Teton views from every room.',
        amenities: ['Spa', 'Pool', 'Restaurant', 'Hot Tub', 'Ski Concierge'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho213194%2Ffour-seasons-resort-jackson-hole-teton-village-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 43.5880,
        lng: -110.8285
      },
      {
        name: 'Hotel Terra Jackson Hole',
        slug: 'hotel-terra-jackson-hole',
        priceRange: '$$$',
        pricePerNight: '$300-600',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'LEED-certified luxury hotel at the base of the tram in Teton Village with a rooftop hot tub and sustainably minded design.',
        amenities: ['Hot Tub', 'Spa', 'Restaurant', 'Ski Valet', 'Fitness Center'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho263913%2Fhotel-terra-jackson-hole-a-noble-house-resort-teton-village-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 43.5875,
        lng: -110.8270
      },
      {
        name: 'Snow King Resort',
        slug: 'snow-king-resort',
        priceRange: '$$',
        pricePerNight: '$180-350',
        distanceToSlopes: '0.1 miles',
        skiInSkiOut: false,
        description: 'Located at the base of Snow King Mountain in downtown Jackson with easy access to shops, restaurants, and a free shuttle to Jackson Hole.',
        amenities: ['Pool', 'Hot Tub', 'Restaurant', 'Shuttle', 'Free Parking'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho222324%2Fsnow-king-resort-hotel-luxury-residences-jackson-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 43.4790,
        lng: -110.7630
      },
      {
        name: 'The Hostel',
        slug: 'the-hostel-jackson-hole',
        priceRange: '$',
        pricePerNight: '$80-180',
        distanceToSlopes: '0.1 miles',
        skiInSkiOut: false,
        description: 'Budget-friendly accommodation right at the base of Jackson Hole Mountain Resort, popular with ski bums and budget-conscious travelers.',
        amenities: ['Ski Storage', 'Kitchen', 'Free Parking'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho470948%2Fthe-hostel-teton-village-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 43.5870,
        lng: -110.8260
      }
    ]
  },

  // ===========================================================================
  // NORTHEAST (5)
  // ===========================================================================

  {
    activityType: 'ski' as const,
    name: 'Stowe Mountain',
    slug: 'stowe',
    state: 'Vermont',
    country: 'US',
    region: 'Northeast',
    tagline: 'The ski capital of the East',
    description: 'Stowe is the crown jewel of East Coast skiing, set beneath Vermont\'s highest peak, Mount Mansfield. The charming New England village, combined with challenging terrain and a storied history dating back to the 1930s, makes it the most iconic ski destination in the East.',
    lat: 44.5303,
    lng: -72.7814,
    elevation: 4395,
    verticalDrop: 2360,
    skiableAcres: 485,
    numberOfTrails: 116,
    numberOfLifts: 13,
    longestRun: '3.7 miles',
    snowfall: '314 inches annually',
    season: 'November - April',
    beginnerFriendly: true,
    nightSkiing: false,
    terrain: { beginner: 16, intermediate: 59, advanced: 25 },
    nearestAirport: 'Burlington International Airport',
    airportCode: 'BTV',
    driveFromAirport: '45 minutes',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Vermont\'s highest peak at Mount Mansfield (4,395 ft)',
      'Charming New England village with covered bridges and steeples',
      'Front Four trails are legendary for steep, challenging skiing',
      'Owned by Vail Resorts and part of the Epic Pass',
      'Rich skiing heritage dating back to the 1930s'
    ],
    hotels: [
      {
        name: 'Lodge at Spruce Peak',
        slug: 'lodge-at-spruce-peak',
        priceRange: '$$$$',
        pricePerNight: '$400-800',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Luxury ski-in/ski-out resort at the base of Spruce Peak with a full-service spa, performing arts center, and multiple dining venues.',
        amenities: ['Spa', 'Pool', 'Restaurant', 'Hot Tub', 'Ski Valet'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho263329%2Fthe-lodge-at-spruce-peak-a-destination-by-hyatt-residence-stowe-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 44.5280,
        lng: -72.7760
      },
      {
        name: 'Trapp Family Lodge',
        slug: 'trapp-family-lodge',
        priceRange: '$$$',
        pricePerNight: '$250-500',
        distanceToSlopes: '3 miles',
        skiInSkiOut: false,
        description: 'The famous Austrian-style lodge built by the von Trapp family of Sound of Music fame, featuring cross-country trails and a bierhall.',
        amenities: ['Restaurant', 'Pool', 'Fitness Center', 'Free Parking'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho200506%2Ftrapp-family-lodge-stowe-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 44.5160,
        lng: -72.7440
      },
      {
        name: 'Stoweflake Mountain Resort & Spa',
        slug: 'stoweflake-resort',
        priceRange: '$$$',
        pricePerNight: '$200-450',
        distanceToSlopes: '2 miles',
        skiInSkiOut: false,
        description: 'Full-service resort in Stowe village with an award-winning spa, indoor-outdoor pool, and complimentary shuttle to the slopes.',
        amenities: ['Spa', 'Pool', 'Restaurant', 'Hot Tub', 'Shuttle'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho181225%2Fstoweflake-mountain-resort-spa-stowe-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 44.4655,
        lng: -72.6890
      }
    ]
  },

  {
    activityType: 'ski' as const,
    name: 'Killington',
    slug: 'killington',
    state: 'Vermont',
    country: 'US',
    region: 'Northeast',
    tagline: 'The Beast of the East',
    description: 'Killington is the largest ski area in the eastern United States, earning its nickname "The Beast of the East" with 1,509 acres spread across seven peaks. It boasts the longest season in the East, often opening in October and closing in May.',
    lat: 43.6045,
    lng: -72.8201,
    elevation: 4241,
    verticalDrop: 3050,
    skiableAcres: 1509,
    numberOfTrails: 155,
    numberOfLifts: 22,
    longestRun: '6.2 miles',
    snowfall: '250 inches annually',
    season: 'October - May',
    beginnerFriendly: true,
    nightSkiing: false,
    terrain: { beginner: 28, intermediate: 33, advanced: 39 },
    nearestAirport: 'Rutland Southern Vermont Regional Airport',
    airportCode: 'RUT',
    driveFromAirport: '30 minutes',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Largest ski resort in eastern North America at 1,509 acres',
      'Longest season in the East — often October to May',
      'Seven interconnected peaks with diverse terrain',
      'Superstar trail has one of the steepest pitches in the East',
      'Lively aprés-ski scene along the Killington Access Road'
    ],
    hotels: [
      {
        name: 'Killington Grand Resort Hotel',
        slug: 'killington-grand-resort',
        priceRange: '$$$',
        pricePerNight: '$250-500',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'The signature slope-side hotel at Killington with ski-in/ski-out access to the Snowdon area, a full-service spa, and heated outdoor pool.',
        amenities: ['Spa', 'Pool', 'Restaurant', 'Hot Tub', 'Ski Valet'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho23197536%2Fkillington-grand-hotel-killington-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 43.6055,
        lng: -72.8190
      },
      {
        name: 'Mountain Green Resort',
        slug: 'mountain-green-resort',
        priceRange: '$$',
        pricePerNight: '$150-300',
        distanceToSlopes: '0.5 miles',
        skiInSkiOut: false,
        description: 'Condo-style resort on the Killington Access Road with full kitchens, an indoor pool, and a free shuttle to the slopes.',
        amenities: ['Pool', 'Hot Tub', 'Kitchen', 'Shuttle', 'Free Parking'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho239152%2Fmountain-green-ski-golf-resort-killington-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 43.6130,
        lng: -72.8050
      },
      {
        name: 'The Inn at Long Trail',
        slug: 'inn-at-long-trail',
        priceRange: '$$',
        pricePerNight: '$120-250',
        distanceToSlopes: '3 miles',
        skiInSkiOut: false,
        description: 'Historic inn at the junction of the Appalachian and Long Trails with an Irish pub, stone fireplace, and cozy mountain atmosphere.',
        amenities: ['Restaurant', 'Free Parking', 'Hot Tub'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho239152%2Fmountain-green-ski-golf-resort-killington-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 43.6370,
        lng: -72.8320
      }
    ]
  },

  {
    activityType: 'ski' as const,
    name: 'Sunday River',
    slug: 'sunday-river',
    state: 'Maine',
    country: 'US',
    region: 'Northeast',
    tagline: 'Eight peaks of reliable snow in the Maine mountains',
    description: 'Sunday River spans eight interconnected mountain peaks in western Maine, known for aggressive snowmaking that ensures reliable conditions all season. Its variety of terrain across the peaks makes it one of the most popular ski areas in New England.',
    lat: 44.4731,
    lng: -70.8564,
    elevation: 3140,
    verticalDrop: 2340,
    skiableAcres: 870,
    numberOfTrails: 135,
    numberOfLifts: 15,
    longestRun: '3 miles',
    snowfall: '167 inches annually',
    season: 'November - April',
    beginnerFriendly: true,
    nightSkiing: false,
    terrain: { beginner: 29, intermediate: 36, advanced: 35 },
    nearestAirport: 'Portland International Jetport',
    airportCode: 'PWM',
    driveFromAirport: '1 hour 45 minutes',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Eight interconnected peaks offering excellent terrain variety',
      'One of the best snowmaking systems in the world',
      'Oz terrain on White Heat is one of the steepest trails in the East',
      'Family-friendly with excellent kids\' programs',
      'More affordable than many New England ski resorts'
    ],
    hotels: [
      {
        name: 'Grand Summit Hotel',
        slug: 'grand-summit-sunday-river',
        priceRange: '$$$',
        pricePerNight: '$250-450',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'The premier slope-side hotel at Sunday River with ski-in/ski-out access at South Ridge, a heated outdoor pool, and full-service dining.',
        amenities: ['Pool', 'Hot Tub', 'Restaurant', 'Spa', 'Ski Storage'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho772228416%2Fgrand-summit-hotel-newry-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 44.4725,
        lng: -70.8570
      },
      {
        name: 'Jordan Hotel',
        slug: 'jordan-hotel-sunday-river',
        priceRange: '$$',
        pricePerNight: '$180-350',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Full-service slope-side hotel at Jordan Bowl with spacious rooms, an outdoor hot tub, and direct access to Sunday River\'s expert terrain.',
        amenities: ['Hot Tub', 'Restaurant', 'Ski Storage', 'Fitness Center'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho772229536%2Fjordan-hotel-newry-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 44.4710,
        lng: -70.8520
      },
      {
        name: 'Snow Cap Inn',
        slug: 'snow-cap-inn-sunday-river',
        priceRange: '$$',
        pricePerNight: '$120-250',
        distanceToSlopes: '0.5 miles',
        skiInSkiOut: false,
        description: 'Affordable lodge near the South Ridge base area with comfortable rooms, a cozy lounge, and complimentary continental breakfast.',
        amenities: ['Hot Tub', 'Free Parking', 'Restaurant', 'Shuttle'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho578431%2Fsnow-cap-inn-newry-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 44.4740,
        lng: -70.8590
      }
    ]
  },

  {
    activityType: 'ski' as const,
    name: 'Sugarbush',
    slug: 'sugarbush',
    state: 'Vermont',
    country: 'US',
    region: 'Northeast',
    tagline: 'Vermont\'s best-kept secret in the Mad River Valley',
    description: 'Sugarbush spans two mountains — Lincoln Peak and Mount Ellen — connected by a shuttle, offering 578 acres of diverse terrain in Vermont\'s scenic Mad River Valley. Known for its challenging natural terrain and lack of crowds, it is a favorite among discerning East Coast skiers.',
    lat: 44.1358,
    lng: -72.9006,
    elevation: 4083,
    verticalDrop: 2600,
    skiableAcres: 578,
    numberOfTrails: 111,
    numberOfLifts: 16,
    longestRun: '2.5 miles',
    snowfall: '283 inches annually',
    season: 'November - April',
    beginnerFriendly: true,
    nightSkiing: false,
    terrain: { beginner: 20, intermediate: 45, advanced: 35 },
    nearestAirport: 'Burlington International Airport',
    airportCode: 'BTV',
    driveFromAirport: '1 hour',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Two mountains with 111 trails offering varied terrain',
      'Slide Brook Basin offers backcountry-style sidecountry skiing',
      'Beautiful Mad River Valley setting with farm-to-table dining',
      'Significantly less crowded than other major Vermont resorts',
      'Castlerock chair serves some of the East\'s best expert terrain'
    ],
    hotels: [
      {
        name: 'Clay Brook Hotel & Residences',
        slug: 'clay-brook-hotel-sugarbush',
        priceRange: '$$$',
        pricePerNight: '$250-500',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Slope-side luxury condos at Lincoln Peak with ski-in/ski-out access, an outdoor pool, fitness center, and full kitchens.',
        amenities: ['Pool', 'Hot Tub', 'Kitchen', 'Fitness Center', 'Ski Storage'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho2508385344%2Fsugarbush-resort-warren-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 44.1365,
        lng: -72.9010
      },
      {
        name: 'Sugarbush Inn',
        slug: 'sugarbush-inn',
        priceRange: '$$',
        pricePerNight: '$150-300',
        distanceToSlopes: '0.5 miles',
        skiInSkiOut: false,
        description: 'Classic Vermont inn near the Sugarbush access road with a cozy pub, outdoor pool, and complimentary shuttle to the slopes.',
        amenities: ['Pool', 'Restaurant', 'Hot Tub', 'Shuttle', 'Free Parking'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho2129398176%2Fsugarbush-inn-sugarbush-warren-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 44.1320,
        lng: -72.8950
      },
      {
        name: 'The Pitcher Inn',
        slug: 'pitcher-inn-warren',
        priceRange: '$$$$',
        pricePerNight: '$350-700',
        distanceToSlopes: '5 miles',
        skiInSkiOut: false,
        description: 'Relais & Chateaux boutique inn in Warren village with individually designed rooms, a celebrated restaurant, and a charming Vermont atmosphere.',
        amenities: ['Restaurant', 'Spa', 'Free Parking'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho2129398176%2Fsugarbush-inn-sugarbush-warren-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 44.1170,
        lng: -72.8550
      }
    ]
  },

  {
    activityType: 'ski' as const,
    name: 'Jay Peak',
    slug: 'jay-peak',
    state: 'Vermont',
    country: 'US',
    region: 'Northeast',
    tagline: 'The most snow in the East and an indoor waterpark',
    description: 'Jay Peak sits on the Canadian border and receives more natural snowfall than any other resort in the East. Its unique position catches lake-effect and nor\'easter storms, and the resort also features a massive indoor waterpark for off-slope fun.',
    lat: 44.9268,
    lng: -72.5290,
    elevation: 3968,
    verticalDrop: 2153,
    skiableAcres: 385,
    numberOfTrails: 81,
    numberOfLifts: 9,
    longestRun: '3 miles',
    snowfall: '359 inches annually',
    season: 'November - April',
    beginnerFriendly: true,
    nightSkiing: false,
    terrain: { beginner: 22, intermediate: 39, advanced: 39 },
    nearestAirport: 'Burlington International Airport',
    airportCode: 'BTV',
    driveFromAirport: '1 hour 30 minutes',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Most natural snowfall of any resort east of the Rockies (359 inches)',
      'Aerial tramway to the summit — one of few in the East',
      'Pump House indoor waterpark with surf simulator',
      'Challenging glades and chutes on the backside of Jay Peak',
      'Located on the Canadian border with a remote, uncrowded feel'
    ],
    hotels: [
      {
        name: 'Hotel Jay',
        slug: 'hotel-jay',
        priceRange: '$$',
        pricePerNight: '$180-350',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Modern slope-side hotel at the base of Jay Peak with direct lift access, an indoor waterpark, and ice rink included in your stay.',
        amenities: ['Pool', 'Hot Tub', 'Restaurant', 'Spa', 'Ski Storage'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho445906%2Fjay-peak-resort-north-troy-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 44.9270,
        lng: -72.5285
      },
      {
        name: 'Jay Peak Resort Condos',
        slug: 'jay-peak-condos',
        priceRange: '$$',
        pricePerNight: '$150-300',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Spacious condo-style units at the resort base with full kitchens, washer/dryer, and waterpark access included.',
        amenities: ['Kitchen', 'Pool', 'Hot Tub', 'Ski Storage', 'Free Parking'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho445906%2Fjay-peak-resort-north-troy-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 44.9265,
        lng: -72.5280
      },
      {
        name: 'Phineas Swann Bed & Inn',
        slug: 'phineas-swann-inn',
        priceRange: '$$',
        pricePerNight: '$120-250',
        distanceToSlopes: '6 miles',
        skiInSkiOut: false,
        description: 'Charming Victorian bed and breakfast in Montgomery Center with gourmet breakfast, cozy rooms, and a welcoming dog-friendly policy.',
        amenities: ['Restaurant', 'Free Parking', 'Hot Tub'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho342635%2Fphineas-swann-inn-spa-montgomery-center-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 44.8865,
        lng: -72.6110
      }
    ]
  },

  // ===========================================================================
  // CANADA (5)
  // ===========================================================================

  {
    activityType: 'ski' as const,
    name: 'Whistler Blackcomb',
    slug: 'whistler-blackcomb',
    state: 'British Columbia',
    country: 'Canada',
    region: 'Canada',
    tagline: 'North America\'s premier ski resort',
    description: 'Whistler Blackcomb is the largest ski resort in North America, spanning two massive mountains connected by the record-breaking PEAK 2 PEAK Gondola. Host of the 2010 Winter Olympics, it offers over 8,100 acres of legendary terrain and a world-renowned pedestrian village.',
    lat: 50.1163,
    lng: -122.9574,
    elevation: 7494,
    verticalDrop: 5280,
    skiableAcres: 8171,
    numberOfTrails: 200,
    numberOfLifts: 37,
    longestRun: '7 miles',
    snowfall: '461 inches annually',
    season: 'November - May',
    beginnerFriendly: true,
    nightSkiing: false,
    terrain: { beginner: 18, intermediate: 55, advanced: 27 },
    nearestAirport: 'Vancouver International Airport',
    airportCode: 'YVR',
    driveFromAirport: '2 hours',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Largest ski resort in North America at 8,171 acres',
      'PEAK 2 PEAK Gondola spans 2.7 miles between mountains',
      'Host of the 2010 Winter Olympics alpine and freestyle events',
      'World-class pedestrian village with 200+ shops and restaurants',
      'Greatest vertical drop in North America at 5,280 feet'
    ],
    hotels: [
      {
        name: 'Fairmont Chateau Whistler',
        slug: 'fairmont-chateau-whistler',
        priceRange: '$$$$',
        pricePerNight: '$400-900',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Iconic luxury resort at the base of Blackcomb Mountain with ski-in/ski-out access, a world-class spa, and multiple acclaimed restaurants.',
        amenities: ['Spa', 'Pool', 'Restaurant', 'Hot Tub', 'Ski Valet'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho141106%2Ffairmont-chateau-whistler-whistler-canada%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 50.1140,
        lng: -122.9500
      },
      {
        name: 'Four Seasons Resort Whistler',
        slug: 'four-seasons-whistler',
        priceRange: '$$$$',
        pricePerNight: '$500-1100',
        distanceToSlopes: '0.2 miles',
        skiInSkiOut: false,
        description: 'Ultra-luxury resort in the Upper Village with heated outdoor pools, a full-service spa, and a complimentary Rolls-Royce house car.',
        amenities: ['Spa', 'Pool', 'Restaurant', 'Hot Tub', 'Ski Concierge'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho218128%2Ffour-seasons-resort-whistler-whistler-canada%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 50.1155,
        lng: -122.9520
      },
      {
        name: 'Pan Pacific Whistler Mountainside',
        slug: 'pan-pacific-whistler',
        priceRange: '$$$',
        pricePerNight: '$250-500',
        distanceToSlopes: '0.1 miles',
        skiInSkiOut: false,
        description: 'All-suite hotel in the heart of Whistler Village with kitchenettes, a heated pool, and steps from the Whistler and Blackcomb gondolas.',
        amenities: ['Pool', 'Hot Tub', 'Kitchen', 'Fitness Center', 'Ski Storage'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho220704%2Fpan-pacific-whistler-mountainside-whistler-canada%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 50.1160,
        lng: -122.9565
      },
      {
        name: 'Crystal Lodge & Suites',
        slug: 'crystal-lodge-whistler',
        priceRange: '$$',
        pricePerNight: '$180-350',
        distanceToSlopes: '0.2 miles',
        skiInSkiOut: false,
        description: 'Well-located hotel in the center of Whistler Village with a range of room types, a rooftop hot tub, and great value for the area.',
        amenities: ['Hot Tub', 'Restaurant', 'Pool', 'Free Parking'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho143778%2Fcrystal-lodge-whistler-canada%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 50.1165,
        lng: -122.9575
      }
    ]
  },

  {
    activityType: 'ski' as const,
    name: 'Banff Sunshine Village',
    slug: 'banff-sunshine',
    state: 'Alberta',
    country: 'Canada',
    region: 'Canada',
    tagline: 'Skiing on the Continental Divide',
    description: 'Banff Sunshine Village sits high on the Continental Divide in Banff National Park, straddling Alberta and British Columbia. Its high elevation ensures the longest non-glacial ski season in Canada, with dry, cold powder and stunning Rocky Mountain scenery.',
    lat: 51.0747,
    lng: -115.7631,
    elevation: 8954,
    verticalDrop: 3514,
    skiableAcres: 3358,
    numberOfTrails: 137,
    numberOfLifts: 12,
    longestRun: '5 miles',
    snowfall: '360 inches annually',
    season: 'November - May',
    beginnerFriendly: true,
    nightSkiing: false,
    terrain: { beginner: 20, intermediate: 55, advanced: 25 },
    nearestAirport: 'Calgary International Airport',
    airportCode: 'YYC',
    driveFromAirport: '1 hour 30 minutes',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Sits on the Continental Divide at the border of Alberta and BC',
      'Longest non-glacial ski season in Canada',
      'Located within Banff National Park — a UNESCO World Heritage Site',
      'Sunshine Mountain Lodge is the only ski-in/ski-out hotel in the Canadian Rockies at this elevation',
      'Delirium Dive is one of Canada\'s most famous extreme ski zones'
    ],
    hotels: [
      {
        name: 'Sunshine Mountain Lodge',
        slug: 'sunshine-mountain-lodge',
        priceRange: '$$$',
        pricePerNight: '$300-550',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'The only slope-side accommodation at Sunshine Village, perched at 7,200 feet with direct ski access and hot tubs under the stars.',
        amenities: ['Hot Tub', 'Restaurant', 'Spa', 'Ski Storage'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho226356%2Fsunshine-mountain-lodge-sunshine-canada%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 51.0750,
        lng: -115.7640
      },
      {
        name: 'Fairmont Banff Springs',
        slug: 'fairmont-banff-springs',
        priceRange: '$$$$',
        pricePerNight: '$400-900',
        distanceToSlopes: '12 miles',
        skiInSkiOut: false,
        description: 'The iconic "Castle in the Rockies" — a grand luxury hotel in Banff with a world-class spa, multiple restaurants, and stunning mountain setting.',
        amenities: ['Spa', 'Pool', 'Restaurant', 'Hot Tub', 'Fitness Center'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho169524%2Ffairmont-banff-springs-banff-canada%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 51.1672,
        lng: -115.5560
      },
      {
        name: 'Moose Hotel & Suites',
        slug: 'moose-hotel-banff',
        priceRange: '$$$',
        pricePerNight: '$250-450',
        distanceToSlopes: '12 miles',
        skiInSkiOut: false,
        description: 'Modern hotel in downtown Banff with rooftop hot tubs, an indoor pool, and a free shuttle to all three SkiBig3 resorts.',
        amenities: ['Pool', 'Hot Tub', 'Restaurant', 'Shuttle', 'Spa'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho471510080%2Fmoose-hotel-and-suites-banff-canada%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 51.1770,
        lng: -115.5700
      }
    ]
  },

  {
    activityType: 'ski' as const,
    name: 'Lake Louise',
    slug: 'lake-louise',
    state: 'Alberta',
    country: 'Canada',
    region: 'Canada',
    tagline: 'Skiing with the most stunning view in the world',
    description: 'Lake Louise Ski Resort offers 4,200 acres of terrain with jaw-dropping views of the Canadian Rockies and the Victoria Glacier. Part of the SkiBig3, it combines massive terrain with the iconic turquoise lake and Fairmont Chateau for an unforgettable ski experience.',
    lat: 51.4254,
    lng: -116.1773,
    elevation: 8650,
    verticalDrop: 3250,
    skiableAcres: 4200,
    numberOfTrails: 164,
    numberOfLifts: 11,
    longestRun: '5 miles',
    snowfall: '215 inches annually',
    season: 'November - May',
    beginnerFriendly: true,
    nightSkiing: false,
    terrain: { beginner: 25, intermediate: 45, advanced: 30 },
    nearestAirport: 'Calgary International Airport',
    airportCode: 'YYC',
    driveFromAirport: '2 hours',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Jaw-dropping views of the Victoria Glacier and Canadian Rockies',
      'Over 4,200 acres of varied terrain across four mountain faces',
      'Iconic Fairmont Chateau Lake Louise is steps from the frozen turquoise lake',
      'Part of the SkiBig3 with Sunshine Village and Mt. Norquay',
      'Regularly hosts World Cup ski racing events'
    ],
    hotels: [
      {
        name: 'Fairmont Chateau Lake Louise',
        slug: 'fairmont-chateau-lake-louise',
        priceRange: '$$$$',
        pricePerNight: '$400-900',
        distanceToSlopes: '4 miles',
        skiInSkiOut: false,
        description: 'One of the world\'s most photographed hotels, sitting on the shores of Lake Louise with glacier views, a luxury spa, and multiple restaurants.',
        amenities: ['Spa', 'Pool', 'Restaurant', 'Hot Tub', 'Shuttle'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho173749%2Ffairmont-chateau-lake-louise-lake-louise-canada%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 51.4167,
        lng: -116.1767
      },
      {
        name: 'Deer Lodge',
        slug: 'deer-lodge-lake-louise',
        priceRange: '$$$',
        pricePerNight: '$200-400',
        distanceToSlopes: '4 miles',
        skiInSkiOut: false,
        description: 'Historic log lodge near Lake Louise with a rustic-chic atmosphere, rooftop hot tub, and a celebrated fine-dining restaurant.',
        amenities: ['Restaurant', 'Hot Tub', 'Shuttle', 'Free Parking'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho184121%2Fdeer-lodge-lake-louise-canada%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 51.4180,
        lng: -116.1755
      },
      {
        name: 'Lake Louise Inn',
        slug: 'lake-louise-inn',
        priceRange: '$$',
        pricePerNight: '$150-300',
        distanceToSlopes: '3 miles',
        skiInSkiOut: false,
        description: 'Comfortable hotel in Lake Louise Village with an indoor pool, hot tub, and a free shuttle to the ski resort.',
        amenities: ['Pool', 'Hot Tub', 'Restaurant', 'Free Parking', 'Shuttle'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho182870%2Flake-louise-inn-lake-louise-canada%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 51.4260,
        lng: -116.1780
      }
    ]
  },

  {
    activityType: 'ski' as const,
    name: 'Mont Tremblant',
    slug: 'mont-tremblant',
    state: 'Quebec',
    country: 'Canada',
    region: 'Canada',
    tagline: 'A taste of European skiing in eastern Canada',
    description: 'Mont Tremblant is the top ski resort in eastern Canada, featuring a colorful pedestrian village modeled after Quebec City. With 102 trails across four slopes and a distinctly French-Canadian charm, it offers a uniquely European-style ski experience in the Laurentian Mountains.',
    lat: 46.2092,
    lng: -74.5849,
    elevation: 2871,
    verticalDrop: 2116,
    skiableAcres: 665,
    numberOfTrails: 102,
    numberOfLifts: 14,
    longestRun: '3.7 miles',
    snowfall: '160 inches annually',
    season: 'November - April',
    beginnerFriendly: true,
    nightSkiing: true,
    terrain: { beginner: 17, intermediate: 33, advanced: 50 },
    nearestAirport: 'Montreal-Trudeau International Airport',
    airportCode: 'YUL',
    driveFromAirport: '1 hour 30 minutes',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Colorful pedestrian village inspired by old Quebec City',
      'Distinctive French-Canadian culture, cuisine, and charm',
      'Night skiing on 17 illuminated runs',
      'Four mountain faces with terrain for every level',
      'Casino, waterpark, and year-round activities beyond skiing'
    ],
    hotels: [
      {
        name: 'Fairmont Tremblant',
        slug: 'fairmont-tremblant',
        priceRange: '$$$$',
        pricePerNight: '$300-600',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Luxury chateau-style hotel at the base of the mountain with ski-in/ski-out access, an outdoor heated pool, and full-service spa.',
        amenities: ['Spa', 'Pool', 'Restaurant', 'Hot Tub', 'Ski Valet'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho169529%2Ffairmont-tremblant-mont-tremblant-canada%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 46.2095,
        lng: -74.5855
      },
      {
        name: 'Sommet des Neiges',
        slug: 'sommet-des-neiges',
        priceRange: '$$$',
        pricePerNight: '$200-400',
        distanceToSlopes: '0.1 miles',
        skiInSkiOut: false,
        description: 'All-suite hotel in the heart of the pedestrian village with full kitchens, an outdoor pool, and steps from the gondola.',
        amenities: ['Pool', 'Hot Tub', 'Kitchen', 'Ski Storage', 'Restaurant'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho224816%2Fsommet-des-neiges-mont-tremblant-canada%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 46.2088,
        lng: -74.5840
      },
      {
        name: 'Le Westin Tremblant',
        slug: 'westin-tremblant',
        priceRange: '$$$',
        pricePerNight: '$250-450',
        distanceToSlopes: '0.2 miles',
        skiInSkiOut: false,
        description: 'Upscale resort at the base of the mountain with spacious rooms, a full-service spa, heated outdoor pool, and village access.',
        amenities: ['Spa', 'Pool', 'Restaurant', 'Hot Tub', 'Fitness Center'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho229814%2Fle-westin-resort-spa-tremblant-quebec-mont-tremblant-canada%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 46.2100,
        lng: -74.5860
      }
    ]
  },

  {
    activityType: 'ski' as const,
    name: 'Sun Peaks',
    slug: 'sun-peaks',
    state: 'British Columbia',
    country: 'Canada',
    region: 'Canada',
    tagline: 'Canada\'s second-largest resort with small-town charm',
    description: 'Sun Peaks is Canada\'s second-largest ski resort, offering 4,270 acres across three mountains with a laid-back, uncrowded atmosphere. Its charming alpine village, dry interior BC snow, and 2,000 hours of annual sunshine make it one of Canada\'s best-value ski destinations.',
    lat: 50.8836,
    lng: -119.8856,
    elevation: 7060,
    verticalDrop: 2894,
    skiableAcres: 4270,
    numberOfTrails: 138,
    numberOfLifts: 13,
    longestRun: '5 miles',
    snowfall: '236 inches annually',
    season: 'November - April',
    beginnerFriendly: true,
    nightSkiing: false,
    terrain: { beginner: 10, intermediate: 58, advanced: 32 },
    nearestAirport: 'Kamloops Airport',
    airportCode: 'YKA',
    driveFromAirport: '45 minutes',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Canada\'s second-largest ski area at 4,270 acres',
      'Three mountains: Tod, Sundance, and Mt. Morrisey',
      'Charming ski-in/ski-out alpine village with no traffic',
      'Dry interior BC powder with abundant sunshine',
      'Significantly less expensive and less crowded than Whistler'
    ],
    hotels: [
      {
        name: 'Sun Peaks Grand Hotel & Conference Centre',
        slug: 'sun-peaks-grand-hotel',
        priceRange: '$$$',
        pricePerNight: '$250-450',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'The premier hotel in Sun Peaks village with ski-in/ski-out access, a heated outdoor pool, hot tubs, and a full-service spa.',
        amenities: ['Spa', 'Pool', 'Restaurant', 'Hot Tub', 'Ski Valet'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho199172%2Fsun-peaks-grand-hotel-conference-centre-sun-peaks-canada%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 50.8840,
        lng: -119.8860
      },
      {
        name: 'Nancy Greene\'s Cahilty Hotel & Suites',
        slug: 'cahilty-hotel-sun-peaks',
        priceRange: '$$',
        pricePerNight: '$150-300',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Named for the Olympic champion, this comfortable hotel offers ski-in/ski-out access, an outdoor hot tub, and great value in the village.',
        amenities: ['Hot Tub', 'Restaurant', 'Ski Storage', 'Free Parking'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho238976%2Fcahilty-hotel-suites-sun-peaks-canada%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 50.8835,
        lng: -119.8850
      },
      {
        name: 'Fireside Lodge',
        slug: 'fireside-lodge-sun-peaks',
        priceRange: '$$',
        pricePerNight: '$120-250',
        distanceToSlopes: '0.1 miles',
        skiInSkiOut: false,
        description: 'Cozy boutique lodge in the village with a large stone fireplace, complimentary breakfast, and easy access to all three mountains.',
        amenities: ['Hot Tub', 'Restaurant', 'Free Parking', 'Ski Storage'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho1249696480%2Ffireside-lodge-413-by-bear-country-sun-peaks-canada%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 50.8830,
        lng: -119.8845
      }
    ]
  },

]

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

export function getDestinationBySlug(slug: string): SkiDestination | undefined {
  return skiDestinations.find((d) => d.slug === slug)
}

export function getDestinationsByRegion(region: string): SkiDestination[] {
  return skiDestinations.filter((d) => d.region === region)
}

export function getAllDestinationSlugs(): string[] {
  return skiDestinations.map((d) => d.slug)
}

export function parseSnowfall(snowfall: string): number {
  const match = snowfall.match(/(\d+)/)
  return match ? parseInt(match[1], 10) : 0
}

export function sortDestinations(
  destinations: SkiDestination[],
  sort: string
): SkiDestination[] {
  const sorted = [...destinations]
  switch (sort) {
    case 'name-asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name))
    case 'name-desc':
      return sorted.sort((a, b) => b.name.localeCompare(a.name))
    case 'acres-desc':
      return sorted.sort((a, b) => b.skiableAcres - a.skiableAcres)
    case 'snowfall-desc':
      return sorted.sort(
        (a, b) => parseSnowfall(b.snowfall) - parseSnowfall(a.snowfall)
      )
    case 'vertical-desc':
      return sorted.sort((a, b) => b.verticalDrop - a.verticalDrop)
    default:
      return sorted
  }
}

export function filterDestinations(
  destinations: SkiDestination[],
  filters: { terrain?: string; skiInOut?: string }
): SkiDestination[] {
  let result = destinations

  if (filters.terrain === 'beginner') {
    result = result.filter((d) => d.terrain.beginner >= 25)
  } else if (filters.terrain === 'advanced') {
    result = result.filter((d) => d.terrain.advanced >= 40)
  }

  if (filters.skiInOut === 'true') {
    result = result.filter((d) => d.hotels.some((h) => h.skiInSkiOut))
  }

  return result
}

