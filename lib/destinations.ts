import type { SkiDestination, Hotel } from './types'

// =============================================================================
// ALL 48 SKI DESTINATIONS
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
        description: 'Vail Village\'s most stylish address, where mountain-view rooms meet a year-round heated rooftop pool and acclaimed Leonora restaurant. Walk to the Eagle Bahn Gondola in under two minutes.',
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
        description: 'Clip into your skis at the door and glide onto Vail Mountain from this ultra-luxury retreat. Return to a Forbes five-star spa, heated slope-side pool, and dining that rivals any city in the world.',
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
        description: 'Vail\'s original ski lodge since 1962 puts you steps from the gondola with genuine slope-side charm. Ski in after last run, warm up by the fire, and stroll into the village for dinner.',
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
        description: 'Spacious creek-side suites with full kitchens let families spread out and save on dining. Fall asleep to the sound of Gore Creek and catch the free shuttle to the lifts each morning.',
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
        description: 'Ski right to your door at Peak 8\'s base, then unwind with a private screening room, bowling alley, and heated pool. Luxury condos with mountain views make this Breck\'s most exclusive address.',
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
        description: 'Built for adventure seekers who want style without stuffiness. Recharge in sleek rooms near Peak 9, swap stories at the buzzing bar, and fuel up in the co-working lounge between runs.',
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
        description: 'Stroll to Breck\'s colorful Main Street in minutes and ride the free shuttle to the lifts each morning. Reliable comfort, warm cookies at check-in, and smart value for families.',
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
        description: 'Kids love the sprawling indoor-outdoor pool complex; parents love the ski-in/ski-out access to Peak 9. One of Breck\'s best-value slopeside stays for families of all sizes.',
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
        description: 'Aspen\'s crown jewel -- the only five-star, five-diamond ski-in/ski-out hotel. Glide off Aspen Mountain to a legendary wine cellar, white-glove service, and the après scene celebrities call home.',
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
        description: 'Wake up to Aspen Mountain views, indulge at the Remede Spa, and soak in a heated outdoor pool under the stars. Steps from the Silver Queen Gondola with butler service on call.',
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
        description: 'The social hub of downtown Aspen -- grab complimentary breakfast, mingle at the lively lounge, and be steps from galleries and gondola. Contemporary style meets genuine mountain warmth.',
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
        description: 'Ski straight to the sleek lobby of this Snowmass slopeside gem. Kids disappear into a treehouse-inspired club while you melt into the spa and heated pool with mountain views.',
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
        description: 'Roll out of bed and onto Champagne Powder from this grand base-area resort. After last run, dive into the sprawling pool complex or soak in hot tubs as snow falls around you.',
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
        description: 'Perched on the mountain with sweeping Yampa Valley views that rival any luxury property. Catch the free gondola shuttle and keep extra cash for Steamboat\'s legendary cowboy après scene.',
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
        description: 'Beautifully appointed condos where you can ski to your front door and cook dinner in a sleek full kitchen. Modern mountain luxury with Steamboat\'s famous powder right outside.',
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
        description: 'Auberge luxury perched in Mountain Village with ski-in/ski-out access to Telluride\'s dramatic terrain. Soak in the heated pool against a backdrop of 14,000-foot peaks, then retreat to the world-class spa.',
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
        description: 'Wake up to jaw-dropping box-canyon views and a complimentary breakfast before riding the free gondola to the slopes. Boutique charm on the edge of Telluride\'s historic downtown.',
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
        description: 'Only 14 rooms means every guest feels like a VIP at this slope-side jewel. Soak in the rooftop hot tub under a blanket of stars, then ski out your door come morning.',
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
        description: 'Nestled beside Keystone Lake with ice skating at your doorstep and a rejuvenating spa after night skiing. The gondola is a short stroll away for effortless mountain access.',
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
        description: 'Start your day with a free hot breakfast, hop the shuttle to River Run Village, and ski three peaks. Spacious modern rooms and smart value make this a family favorite.',
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
        description: 'Step out your door and onto the gondola for true ski-in/ski-out ease. Full kitchens and roomy layouts let families settle in, while River Run Village dining and shops are steps away.',
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
        description: 'Ski right to your condo on Copper\'s naturally divided terrain, then cook a hearty dinner in your full kitchen. Slope-side living with none of the big-resort price tag.',
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
        description: 'Stylish rooms and a rooftop hot tub with panoramic mountain views put you in the heart of Center Village. The American Eagle lift is practically at your doorstep for first tracks.',
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
        description: 'Maximum mountain time on a minimum budget -- hop the free resort shuttle and be on the slopes in minutes. Cozy rooms and a hot tub keep things simple and satisfying.',
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
        description: 'Ski onto the slopes from your condo-style suite at Winter Park\'s base. After conquering Mary Jane\'s moguls, thaw out in the outdoor pool and hot tubs with mountain views.',
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
        description: 'Spread out in roomy condos with full kitchens, warm up at the indoor pool, and ride the free shuttle to the village. Great value steps from Colorado\'s closest major resort to Denver.',
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
        description: 'A hidden gem in the Fraser Valley where hearty homemade breakfasts and crackling fireplaces create genuine mountain warmth. Stunning views and an intimate, off-the-beaten-path retreat.',
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
        description: 'Perched high above Park City with sweeping Wasatch panoramas, a 35,000 sq ft spa, and service that anticipates your every wish. Pure mountain grandeur in every detail.',
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
        description: 'Soak in the rooftop hot tub above Park City\'s legendary Main Street, then stroll to 100+ restaurants and bars below. Ski valet service makes hitting 7,300 acres effortless.',
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
        description: 'Ski in and ski out at Canyons Village with spacious suites, a luxury spa to soothe tired muscles, and multiple dining venues so you never need to leave. The mountain is literally your backyard.',
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
        description: 'Ski two world-class resorts from one affordable base -- free shuttles run to both Park City Mountain and Deer Valley. Unwind in the outdoor pool and hot tub after exploring 7,300+ acres.',
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
        description: 'The pinnacle of ski luxury -- glide in from immaculate corduroy runs to butler service, a world-class spa, and a heated pool framed by snow-dusted pines. Deer Valley at its finest.',
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
        description: 'A Norwegian-inspired icon perched mid-mountain where you ski right to the grand stone fireplace. Legendary service, fine dining, and perfectly groomed runs await outside every window.',
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
        description: 'Old-world Austrian charm meets Deer Valley\'s impeccable grooming at this intimate Silver Lake gem. Dine at the acclaimed restaurant, then ski out your door onto velvet corduroy.',
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
        description: 'Rise 11 stories above Little Cottonwood Canyon with a rooftop pool overlooking 500 inches of annual snowfall. Step into the iconic tram and be on the summit in minutes.',
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
        description: 'Cook up a hot meal in your full kitchen after a day charging Snowbird\'s legendary chutes. Ski-in/ski-out access and spacious layouts make extended powder-chasing stays a breeze.',
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
        description: 'Spacious suites connected to the Cliff Lodge via skybridge give you the best of both worlds -- private comfort and full resort amenities. Ski right to your door on Utah\'s deepest snow.',
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
        description: 'A ski-lodge time capsule since 1940 where included gourmet meals and communal fireside gatherings forge lifelong friendships. Step outside and you\'re on 547 inches of Utah powder.',
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
        description: 'Rebuilt in 2019 as Alta\'s most refined retreat, blending modern luxury with old-school soul. Ski in, soak in the rooftop hot tub under starlight, and savor the spa after deep powder days.',
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
        description: 'Steps from the Wildcat chairlift, this full-service lodge defines the Alta experience. Swim in a heated outdoor pool surrounded by peaks, then feast on elevated mountain cuisine.',
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
        description: 'No-frills slopeside living where you trade luxury for unbeatable convenience -- ski out your door onto 500 inches of annual snow. Utah\'s best night skiing is literally at your doorstep.',
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
        description: 'Tuck into a legendary dinner at the on-site restaurant, then sleep in rustic canyon charm. A true Big Cottonwood gem where hearty meals and crackling warmth fuel your ski days.',
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
        description: 'Smart base camp at the canyon mouth with kitchen suites and free breakfast to fuel early starts. Drive 20 minutes up Big Cottonwood Canyon to 500 inches of powder bliss.',
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
        description: 'Sleep in handcrafted cabins nestled among towering pines, each with a stone fireplace and artisan touches curated by Redford himself. Wake to Mount Timpanogos views and ski right from your door.',
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
        description: 'A budget-smart base in Provo with free breakfast to fuel your mornings. Wind up the scenic Provo Canyon to Sundance in minutes and keep more money for the mountain experience.',
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
        description: 'Spacious all-suite rooms with kitchenettes let families settle in near the mouth of Provo Canyon. Enjoy the indoor pool after skiing, then drive Sundance\'s scenic canyon road in minutes.',
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
        description: 'Step outside and board the Village Gondola to 3,500 acres of Sierra terrain. Return to a heated pool, village shopping, and dining -- all without ever needing your car.',
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
        description: 'The only lodging at Main Lodge means you are first on the mountain every morning. Direct slope access, high-alpine views, and the thrill of first tracks on California\'s deepest snowpack.',
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
        description: 'Unwind in spacious suites with a full-service spa and heated pool after conquering Mammoth\'s 400 inches of annual snow. The Village Gondola whisks you to the summit in minutes.',
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
        description: 'A year-round luxury playground at the base of Olympic terrain. Soak in multiple pools with mountain views, melt away in the spa, and ride the shuttle to 6,000 acres of legendary skiing.',
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
        description: 'Effortlessly cool boutique inn where a celebrated kitchen rivals any city restaurant. Stylish rooms and a hip lounge sit steps from the lifts at this Olympic-pedigreed mountain.',
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
        description: 'Live in the buzz of the pedestrian village with restaurants and shops below your balcony. Ride the gondola to 6,000 acres of terrain and stroll home after après -- no car needed.',
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
        description: 'Walk to the Heavenly Gondola from sleek mountain-modern condos with full kitchens and a heated pool. Lake Tahoe sparkles below as you ski across two states from your doorstep.',
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
        description: 'Ski by day, play by night -- live entertainment and casino action await after riding Heavenly\'s 4,800 acres. A free shuttle connects you to the gondola for seamless slope access.',
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
        description: 'Spread out in spacious condo-style suites with full kitchens and a large heated pool. The Heavenly Village gondola is a short stroll away for effortless access to Lake Tahoe views.',
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
        description: 'An iconic Tahoe landmark where mountain-view rooms, poolside lounging, and casino thrills collide. Ride the free shuttle to Heavenly\'s gondola and ski with Lake Tahoe at your feet.',
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
        description: 'Perched mid-mountain for true ski-in/ski-out indulgence, with a world-class spa, heated pool amid the pines, and Ritz-Carlton service that makes every detail effortless.',
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
        description: 'Spacious condos with full kitchens and an outdoor pool sit right in Northstar\'s charming village. Walk to the gondola, ice rink, and boutique shops without ever moving your car.',
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
        description: 'Heated underground parking means no scraping windshields -- just grab your gear and walk to the gondola. Cozy village-center rooms with easy access to Northstar\'s family-friendly terrain.',
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
        description: 'Ski in and out with Lone Mountain\'s iconic peak towering above you. Soak in the heated pool under Montana\'s big sky, then enjoy 5,800 acres with virtually no lift lines.',
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
        description: 'Big Sky\'s original lodge delivers ski-in/ski-out access with classic mountain soul. Click in at the door and explore America\'s biggest skiing with an average of just two skiers per acre.',
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
        description: 'A storied Montana guest ranch where candlelit dinners and luxury log cabins evoke the Old West. Glide cross-country trails by day, then shuttle to Big Sky\'s 5,800 acres for alpine thrills.',
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
        description: 'Every room frames the jagged Tetons in this ultra-luxury ski-in/ski-out retreat. Recover from Corbet\'s Couloir in the world-class spa, then dine on elk tenderloin as snow falls outside.',
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
        description: 'Eco-luxury at the tram\'s doorstep -- soak in the rooftop hot tub with Teton views after riding 4,139 vertical feet. LEED-certified design proves sustainability and indulgence coexist.',
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
        description: 'Stay in the heart of downtown Jackson with elk-antler arches and Western charm on every corner. Free shuttle to Jackson Hole Mountain Resort and Snow King\'s slopes right outside.',
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
        description: 'The legendary crash pad where die-hard skiers save their dollars for lift tickets and steeps. Steps from the tram with shared kitchen and the best dollar-per-vertical in the Tetons.',
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
        description: 'Ski-in/ski-out luxury at Spruce Peak with a full spa, performing arts center, and multiple dining venues. Vermont\'s most refined slopeside address where New England charm meets world-class skiing.',
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
        description: 'The real Sound of Music family\'s Austrian lodge, where cross-country trails wind through birch forests and the bierhall pours local craft brews. A piece of living history in the Green Mountains.',
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
        description: 'Melt tired muscles at the award-winning spa, then float between indoor and outdoor pools in Stowe\'s charming village. A complimentary shuttle delivers you to Mount Mansfield\'s legendary runs.',
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
        description: 'Ski in from the Snowdon area to the East\'s biggest resort, then soak in the heated outdoor pool as Vermont\'s Green Mountains glow at sunset. Full spa and slope-side convenience.',
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
        description: 'Spread out in condos with full kitchens on the legendary Killington Access Road -- home to the East\'s liveliest après scene. Free shuttle to seven peaks of Beast-worthy terrain.',
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
        description: 'Warm up by the massive stone fireplace and raise a pint at the Irish pub where the Appalachian and Long Trails meet. Authentic Vermont mountain character just minutes from the Beast.',
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
        description: 'Ski eight peaks and glide back to the heated outdoor pool at South Ridge. Sunday River\'s premier slopeside hotel where world-class snowmaking ensures reliable conditions all season.',
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
        description: 'Expert skiers love the direct access to Jordan Bowl\'s steeps right from the hotel. Soak in the outdoor hot tub surrounded by Maine pines after tackling some of the East\'s best terrain.',
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
        description: 'Smart savings near South Ridge with a complimentary breakfast and cozy lounge to swap stories after a full day on eight interconnected peaks. Great value for Maine mountain adventures.',
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
        description: 'Ski Lincoln Peak\'s uncrowded trails and glide home to luxury condos with full kitchens and mountain views. The outdoor pool and hot tubs make Vermont\'s hidden gem feel like a private resort.',
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
        description: 'A classic Vermont inn with a cozy pub and outdoor pool in the beautiful Mad River Valley. Ride the free shuttle to uncrowded slopes and return to farm-to-table dining nearby.',
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
        description: 'Each room is a one-of-a-kind work of art at this Relais & Chateaux treasure in Warren village. Savor celebrated cuisine by the fireplace after skiing Sugarbush\'s empty Castlerock runs.',
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
        description: 'Ski the East\'s deepest natural snow, then slide down waterpark tubes and skate the ice rink -- all included in your stay. Slopeside access to 359 inches of annual powder.',
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
        description: 'Roomy condos with full kitchens and in-unit laundry make extended powder chases easy. Kids get unlimited waterpark access while parents explore Jay\'s legendary glades and chutes.',
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
        description: 'A storybook Victorian B&B where gourmet breakfasts and dog-friendly warmth create the coziest base for Jay Peak powder days. Curl up by the fire after exploring the East\'s snowiest mountain.',
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
        description: 'Ski onto Blackcomb\'s slopes from this iconic chateau, then return to a world-class spa and acclaimed restaurants. The gold standard for Canadian ski luxury on North America\'s biggest mountain.',
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
        description: 'Arrive via complimentary Rolls-Royce house car and slip into heated outdoor pools beneath snow-capped peaks. Ultra-luxury in Whistler\'s Upper Village with a spa that redefines mountain indulgence.',
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
        description: 'All-suite comfort in the heart of Whistler Village, steps from both the Whistler and Blackcomb gondolas. Kitchenettes and a heated pool make 8,171 acres of terrain feel like home.',
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
        description: 'Prime village-center location at a fraction of the luxury-hotel price. Soak in the rooftop hot tub after exploring 200+ runs, then step out to Whistler\'s buzzing restaurant and bar scene.',
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
        description: 'The only on-mountain hotel at Sunshine Village, perched at 7,200 feet on the Continental Divide. Soak in hot tubs under a canopy of stars, then enjoy first tracks on fresh Rocky Mountain powder.',
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
        description: 'The "Castle in the Rockies" is a bucket-list hotel where grand ballrooms, a world-class spa, and towering mountain vistas create an unforgettable Canadian Rockies experience.',
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
        description: 'Rooftop hot tubs with Banff Avenue views and a free shuttle to all three SkiBig3 resorts make this downtown gem a smart base. Explore Banff\'s shops and restaurants steps from your door.',
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
        description: 'One of the world\'s most photographed hotels, where every window frames the frozen turquoise lake and Victoria Glacier. A luxury spa and fine dining complete this once-in-a-lifetime mountain stay.',
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
        description: 'A historic log lodge where rustic-chic charm meets Rocky Mountain grandeur. Soak in the rooftop hot tub under a blanket of stars, then savor celebrated fine dining steps from the frozen lake.',
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
        description: 'A warm village base with indoor pool and hot tub to thaw out after exploring 4,200 acres of jaw-dropping Rocky Mountain terrain. Free shuttle to the ski resort makes access effortless.',
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
        description: 'A fairytale chateau at the mountain\'s base where you ski to the door, swim in a heated outdoor pool, and dine on French-Canadian cuisine. The crown jewel of Tremblant\'s colorful village.',
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
        description: 'All-suite living in Tremblant\'s candy-colored pedestrian village with full kitchens and an outdoor pool. Step outside to the gondola, crêperies, and the charm of old Quebec.',
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
        description: 'Spacious rooms and a heated outdoor pool at the mountain\'s base, with a full spa to melt away après fatigue. Walk to Tremblant\'s vibrant village for night skiing and French-Canadian nightlife.',
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
        description: 'Ski in and out of Canada\'s second-largest resort from the village\'s premier address. A heated pool, spa, and 2,000 hours of annual sunshine make Sun Peaks feel like your private mountain.',
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
        description: 'Named for Olympic gold medalist Nancy Greene, this village hotel offers ski-in/ski-out access at exceptional value. Soak in the outdoor hot tub and enjoy uncrowded powder mornings.',
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
        description: 'Warm up by the grand stone fireplace with a complimentary breakfast before exploring three sun-drenched mountains. Intimate boutique charm in a car-free alpine village.',
        amenities: ['Hot Tub', 'Restaurant', 'Free Parking', 'Ski Storage'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho1249696480%2Ffireside-lodge-413-by-bear-country-sun-peaks-canada%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 50.8830,
        lng: -119.8845
      }
    ]
  },

  // ===========================================================================
  // COLORADO - ADDITIONAL (2)
  // ===========================================================================

  {
    activityType: 'ski' as const,
    name: 'Arapahoe Basin',
    slug: 'arapahoe-basin',
    state: 'Colorado',
    country: 'US',
    region: 'Colorado',
    tagline: 'The highest skiable terrain in North America and Colorado\'s longest season',
    description: 'Arapahoe Basin, affectionately known as "A-Basin" or "The Legend," sits atop the Continental Divide and boasts the highest skiable terrain in North America. With a season stretching from October through June, it offers the longest ski season in Colorado. The mountain is beloved for its no-frills, hardcore skiing culture, steep above-treeline bowls, and stunning high-alpine scenery.',
    lat: 39.6426,
    lng: -105.8718,
    elevation: 13050,
    verticalDrop: 2530,
    skiableAcres: 1428,
    numberOfTrails: 147,
    numberOfLifts: 9,
    longestRun: '1.5 miles',
    snowfall: '350 inches annually',
    season: 'October - June',
    beginnerFriendly: false,
    nightSkiing: false,
    terrain: { beginner: 10, intermediate: 30, advanced: 60 },
    nearestAirport: 'Denver International Airport',
    airportCode: 'DEN',
    driveFromAirport: '1 hour 15 minutes',
    bestMonths: ['December', 'January', 'February', 'March'],
    highlights: [
      'Highest skiable terrain in North America at 13,050 feet',
      'Longest ski season in Colorado, often October through June',
      'Legendary Montezuma Bowl with extreme above-treeline terrain',
      'Laid-back, locals-oriented atmosphere with no resort pretension',
      'Included on the Ikon Pass for great multi-resort value'
    ],
    hotels: [
      {
        name: 'Keystone Lodge & Spa',
        slug: 'keystone-lodge-spa',
        priceRange: '$$$$',
        pricePerNight: '$400-700',
        distanceToSlopes: '6 miles to A-Basin',
        skiInSkiOut: false,
        description: 'Base yourself in Keystone luxury with a full spa and heated pool, then drive six scenic minutes to A-Basin\'s legendary high-alpine bowls at 13,050 feet. Best of both worlds.',
        amenities: ['Spa', 'Pool', 'Hot Tub', 'Restaurant', 'Ski Storage'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho148372%2Fkeystone-lodge-spa-by-keystone-resort-keystone-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 39.6060,
        lng: -105.9530
      },
      {
        name: 'Arapahoe Cafe & Lodge',
        slug: 'arapahoe-cafe-lodge',
        priceRange: '$$',
        pricePerNight: '$150-280',
        distanceToSlopes: '8 miles',
        skiInSkiOut: false,
        description: 'A charming Dillon lodge with a beloved on-site restaurant and lakeside mountain-town character. Quick access to A-Basin\'s October-to-June season -- Colorado\'s longest.',
        amenities: ['Restaurant', 'Free Parking', 'Wi-Fi', 'Bar'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho256891%2Farapahoe-cafe-lodge-dillon-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 39.6310,
        lng: -106.0430
      },
      {
        name: 'Best Western Ptarmigan Lodge',
        slug: 'best-western-ptarmigan-lodge',
        priceRange: '$$',
        pricePerNight: '$120-220',
        distanceToSlopes: '10 miles',
        skiInSkiOut: false,
        description: 'Wake up to Lake Dillon views and a hot breakfast, then chase A-Basin\'s legendary above-treeline terrain. A reliable, well-priced base for Colorado\'s most hardcore skiing.',
        amenities: ['Hot Tub', 'Free Breakfast', 'Free Parking', 'Wi-Fi'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho115429%2Fbest-western-ptarmigan-lodge-dillon-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 39.6290,
        lng: -106.0450
      }
    ]
  },

  {
    activityType: 'ski' as const,
    name: 'Crested Butte',
    slug: 'crested-butte',
    state: 'Colorado',
    country: 'US',
    region: 'Colorado',
    tagline: 'Extreme terrain and a charming historic mountain town',
    description: 'Crested Butte Mountain Resort is renowned for its extreme terrain, including some of the steepest in-bounds skiing in North America. Beyond the adrenaline-pumping double-black-diamond runs, the resort offers a genuine small-town vibe in the beautifully preserved Victorian mining village of Crested Butte, where colorful buildings line Elk Avenue and the community spirit runs deep.',
    lat: 38.8986,
    lng: -106.9650,
    elevation: 12162,
    verticalDrop: 3062,
    skiableAcres: 1547,
    numberOfTrails: 121,
    numberOfLifts: 15,
    longestRun: '2.6 miles',
    snowfall: '300 inches annually',
    season: 'November - April',
    beginnerFriendly: false,
    nightSkiing: false,
    terrain: { beginner: 15, intermediate: 40, advanced: 45 },
    nearestAirport: 'Gunnison-Crested Butte Regional Airport',
    airportCode: 'GUC',
    driveFromAirport: '30 minutes',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Home to some of the steepest in-bounds terrain in North America',
      'Charming, historic Elk Avenue with locally owned shops and restaurants',
      'North Face and Headwall feature legendary extreme lines',
      'Free Mountain Express shuttle between town and mountain',
      'Vibrant arts and culture scene in a genuine mountain community'
    ],
    hotels: [
      {
        name: 'The Grand Lodge Crested Butte',
        slug: 'grand-lodge-crested-butte',
        priceRange: '$$$$',
        pricePerNight: '$400-700',
        distanceToSlopes: '0.1 miles',
        skiInSkiOut: false,
        description: 'Soak in the heated pool while gazing up at some of North America\'s steepest in-bounds terrain. Spacious rooms and a full spa at Crested Butte\'s premier base-area address.',
        amenities: ['Spa', 'Pool', 'Hot Tub', 'Restaurant', 'Ski Valet'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho183476%2Fthe-grand-lodge-crested-butte-crested-butte-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 38.8998,
        lng: -106.9660
      },
      {
        name: 'Elevation Hotel & Spa',
        slug: 'elevation-hotel-spa',
        priceRange: '$$$',
        pricePerNight: '$250-500',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Ski directly to the lifts from this modern mountain-base hotel, then unwind in the rooftop hot tub as the sun sets over the Elk Mountains. Full spa seals the deal after an extreme terrain day.',
        amenities: ['Spa', 'Hot Tub', 'Restaurant', 'Ski Storage', 'Fitness Center'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho395127%2Felevation-hotel-spa-crested-butte-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 38.8992,
        lng: -106.9665
      },
      {
        name: 'Old Town Inn',
        slug: 'old-town-inn-crested-butte',
        priceRange: '$$',
        pricePerNight: '$150-280',
        distanceToSlopes: '2 miles',
        skiInSkiOut: false,
        description: 'Stay on colorful Elk Avenue amid locally owned shops and galleries, with complimentary breakfast and a free shuttle to the mountain. Authentic CB character at a wallet-friendly price.',
        amenities: ['Free Breakfast', 'Hot Tub', 'Free Parking', 'Shuttle'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho276943%2Fold-town-inn-crested-butte-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 38.8697,
        lng: -106.9878
      }
    ]
  },

  // ===========================================================================
  // UTAH - ADDITIONAL (1)
  // ===========================================================================

  {
    activityType: 'ski' as const,
    name: 'Snowbasin',
    slug: 'snowbasin',
    state: 'Utah',
    country: 'US',
    region: 'Utah',
    tagline: '2002 Olympic venue with stunning views and uncrowded slopes',
    description: 'Snowbasin Resort hosted the downhill, Super-G, and combined events for the 2002 Winter Olympics and remains one of Utah\'s best-kept secrets. With 3,000 acres of skiable terrain, beautifully crafted day lodges, and remarkably short lift lines, Snowbasin delivers a premium skiing experience without the crowds. The resort is known for its excellent grooming, diverse terrain, and breathtaking Wasatch Range views.',
    lat: 41.2160,
    lng: -111.8569,
    elevation: 9350,
    verticalDrop: 3000,
    skiableAcres: 3000,
    numberOfTrails: 104,
    numberOfLifts: 12,
    longestRun: '3 miles',
    snowfall: '300 inches annually',
    season: 'November - April',
    beginnerFriendly: true,
    nightSkiing: false,
    terrain: { beginner: 20, intermediate: 50, advanced: 30 },
    nearestAirport: 'Salt Lake City International Airport',
    airportCode: 'SLC',
    driveFromAirport: '50 minutes',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Host of the 2002 Winter Olympics downhill and Super-G events',
      'Remarkably uncrowded with 3,000 acres and no resort village congestion',
      'Award-winning day lodges with gourmet dining on the mountain',
      'World-class grooming with Utah\'s famous light, dry powder',
      'Free shuttle from Ogden and part of the Ikon Pass'
    ],
    hotels: [
      {
        name: 'Courtyard by Marriott Ogden',
        slug: 'courtyard-marriott-ogden',
        priceRange: '$$',
        pricePerNight: '$140-250',
        distanceToSlopes: '17 miles',
        skiInSkiOut: false,
        description: 'Base yourself in revitalized downtown Ogden and drive 25 scenic minutes to Snowbasin\'s Olympic-caliber slopes. An indoor pool and modern rooms at a fraction of resort-town pricing.',
        amenities: ['Pool', 'Hot Tub', 'Free Parking', 'Fitness Center', 'Restaurant'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho187623%2Fcourtyard-by-marriott-ogden-ogden-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 41.2230,
        lng: -111.9710
      },
      {
        name: 'Ben Lomond Suites',
        slug: 'ben-lomond-suites-ogden',
        priceRange: '$$',
        pricePerNight: '$120-200',
        distanceToSlopes: '18 miles',
        skiInSkiOut: false,
        description: 'A historic gem on Ogden\'s vibrant 25th Street with spacious suites, complimentary breakfast, and craft breweries at your doorstep. Snowbasin\'s uncrowded 3,000 acres are a short drive away.',
        amenities: ['Free Breakfast', 'Free Parking', 'Restaurant', 'Fitness Center'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho134567%2Fben-lomond-suites-ogden-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 41.2260,
        lng: -111.9730
      },
      {
        name: 'Hilton Garden Inn Ogden',
        slug: 'hilton-garden-inn-ogden',
        priceRange: '$$',
        pricePerNight: '$130-230',
        distanceToSlopes: '17 miles',
        skiInSkiOut: false,
        description: 'A dependable Ogden base with indoor pool and on-site dining for stress-free ski mornings. Drive straight to Snowbasin\'s 2002 Olympic runs and enjoy Utah\'s best-kept powder secret.',
        amenities: ['Pool', 'Restaurant', 'Free Parking', 'Fitness Center', 'Wi-Fi'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho219438%2Fhilton-garden-inn-ogden-ogden-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 41.2240,
        lng: -111.9720
      }
    ]
  },

  // ===========================================================================
  // CALIFORNIA - ADDITIONAL (2)
  // ===========================================================================

  {
    activityType: 'ski' as const,
    name: 'Kirkwood',
    slug: 'kirkwood',
    state: 'California',
    country: 'US',
    region: 'California',
    tagline: 'Tahoe\'s deepest powder and most challenging expert terrain',
    description: 'Kirkwood Mountain Resort sits in a remote, high-elevation valley south of Lake Tahoe and consistently receives the most snowfall in the Tahoe region. Known for its rugged, expert-oriented terrain and lack of crowds, Kirkwood is the go-to destination for advanced skiers seeking deep powder, steep chutes, and genuine backcountry-feel skiing without the backcountry risk.',
    lat: 38.6850,
    lng: -120.0653,
    elevation: 9800,
    verticalDrop: 2000,
    skiableAcres: 2300,
    numberOfTrails: 86,
    numberOfLifts: 15,
    longestRun: '2.5 miles',
    snowfall: '500 inches annually',
    season: 'December - April',
    beginnerFriendly: false,
    nightSkiing: false,
    terrain: { beginner: 15, intermediate: 50, advanced: 35 },
    nearestAirport: 'Reno-Tahoe International Airport',
    airportCode: 'RNO',
    driveFromAirport: '1 hour 30 minutes',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Highest average snowfall in the Lake Tahoe region at 500 inches',
      'Renowned for steep chutes, cliffs, and expert-level terrain',
      'Remote, uncrowded location away from the busy Tahoe corridor',
      'Part of the Epic Pass for multi-resort access',
      'World-class backcountry access for experienced skiers'
    ],
    hotels: [
      {
        name: 'Kirkwood Mountain Resort Lodge',
        slug: 'kirkwood-mountain-resort-lodge',
        priceRange: '$$$',
        pricePerNight: '$250-450',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Ski right to your door after conquering Kirkwood\'s steep chutes and 500 inches of Tahoe\'s deepest snow. Mountain-view balconies and hot tubs reward every powder-chasing adventure.',
        amenities: ['Hot Tub', 'Ski Storage', 'Kitchen', 'Wi-Fi'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho312876%2Fkirkwood-mountain-resort-lodge-kirkwood-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 38.6855,
        lng: -120.0660
      },
      {
        name: 'The Woodrun at Kirkwood',
        slug: 'woodrun-kirkwood',
        priceRange: '$$',
        pricePerNight: '$180-350',
        distanceToSlopes: '0.2 miles',
        skiInSkiOut: false,
        description: 'Cozy up by your own fireplace after a day in Tahoe\'s deepest snowpack. Full kitchens, shared hot tubs, and a heated pool make these lift-side condos a powder hunter\'s paradise.',
        amenities: ['Pool', 'Hot Tub', 'Kitchen', 'Fireplace', 'Ski Storage'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho278543%2Fthe-woodrun-at-kirkwood-kirkwood-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 38.6845,
        lng: -120.0645
      },
      {
        name: 'Kirkwood Inn & Saloon',
        slug: 'kirkwood-inn-saloon',
        priceRange: '$',
        pricePerNight: '$90-160',
        distanceToSlopes: '2 miles',
        skiInSkiOut: false,
        description: 'A genuine 1864 roadhouse where hearty mountain meals and old-West character fuel your ski days. The most authentic Sierra Nevada lodging experience at an unbeatable price point.',
        amenities: ['Restaurant', 'Bar', 'Free Parking', 'Wi-Fi'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho345219%2Fkirkwood-inn-saloon-kirkwood-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 38.6960,
        lng: -120.0430
      }
    ]
  },

  {
    activityType: 'ski' as const,
    name: 'Sugar Bowl',
    slug: 'sugar-bowl',
    state: 'California',
    country: 'US',
    region: 'California',
    tagline: 'Historic Donner Pass resort with massive snowfall and classic Sierra skiing',
    description: 'Sugar Bowl is one of the oldest ski resorts in California, founded in 1939 near the iconic Donner Pass. It consistently records some of the highest snowfall totals in the Sierra Nevada, with an annual average of 500 inches. The resort features a charming European-inspired village, a unique gondola access system, and terrain that spans four peaks, making it a favorite among Sacramento and Bay Area skiers.',
    lat: 39.3047,
    lng: -120.3344,
    elevation: 8383,
    verticalDrop: 1500,
    skiableAcres: 1650,
    numberOfTrails: 103,
    numberOfLifts: 13,
    longestRun: '3 miles',
    snowfall: '500 inches annually',
    season: 'November - April',
    beginnerFriendly: true,
    nightSkiing: false,
    terrain: { beginner: 17, intermediate: 45, advanced: 38 },
    nearestAirport: 'Reno-Tahoe International Airport',
    airportCode: 'RNO',
    driveFromAirport: '50 minutes',
    bestMonths: ['December', 'January', 'February', 'March'],
    highlights: [
      'One of California\'s oldest resorts, founded in 1939 with rich history',
      'Massive snowfall averaging 500 inches annually near Donner Pass',
      'Unique gondola access from the village to the mountain',
      'Four peaks offering diverse terrain across 1,650 acres',
      'Family-friendly atmosphere with a genuine community feel'
    ],
    hotels: [
      {
        name: 'Sugar Bowl Lodge',
        slug: 'sugar-bowl-lodge',
        priceRange: '$$$',
        pricePerNight: '$250-450',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Step back in time at the original 1939 slopeside lodge where a cozy lounge and old-world charm await after skiing 500 inches of Donner Pass powder. Gondola access right outside.',
        amenities: ['Restaurant', 'Bar', 'Ski Storage', 'Wi-Fi'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho367821%2Fsugar-bowl-lodge-norden-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 39.3050,
        lng: -120.3350
      },
      {
        name: 'Donner Lake Village Resort',
        slug: 'donner-lake-village-resort',
        priceRange: '$$',
        pricePerNight: '$150-300',
        distanceToSlopes: '5 miles',
        skiInSkiOut: false,
        description: 'Wake up lakeside on historic Donner Lake with mountain views from your condo kitchen. A private beach and hot tub by the water offer a serene contrast to Sugar Bowl\'s thrilling runs.',
        amenities: ['Kitchen', 'Hot Tub', 'Free Parking', 'Beach Access', 'Wi-Fi'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho142398%2Fdonner-lake-village-resort-truckee-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 39.3265,
        lng: -120.2590
      },
      {
        name: 'Truckee Hotel',
        slug: 'truckee-hotel',
        priceRange: '$$',
        pricePerNight: '$130-250',
        distanceToSlopes: '10 miles',
        skiInSkiOut: false,
        description: 'Beautifully restored 1873 hotel on Truckee\'s vibrant commercial row, surrounded by craft cocktail bars and farm-to-table dining. Boutique character and easy access to Sugar Bowl\'s four peaks.',
        amenities: ['Restaurant', 'Bar', 'Wi-Fi', 'Free Parking'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho289174%2Ftruckee-hotel-truckee-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 39.3280,
        lng: -120.1835
      }
    ]
  },

  // ===========================================================================
  // MONTANA/WYOMING - ADDITIONAL (3)
  // ===========================================================================

  {
    activityType: 'ski' as const,
    name: 'Whitefish Mountain',
    slug: 'whitefish',
    state: 'Montana',
    country: 'US',
    region: 'Montana/Wyoming',
    tagline: 'Gateway to Glacier National Park with incredible value and big-mountain skiing',
    description: 'Whitefish Mountain Resort is a hidden gem in northwest Montana, offering 3,000 acres of diverse terrain with stunning views of Glacier National Park and the Flathead Valley. Known for its deep inland powder, friendly small-town atmosphere, and some of the best value in North American skiing, Whitefish combines big-mountain terrain with genuine Western hospitality.',
    lat: 48.4832,
    lng: -114.3553,
    elevation: 6817,
    verticalDrop: 2353,
    skiableAcres: 3000,
    numberOfTrails: 105,
    numberOfLifts: 14,
    longestRun: '3.3 miles',
    snowfall: '333 inches annually',
    season: 'December - April',
    beginnerFriendly: true,
    nightSkiing: true,
    terrain: { beginner: 20, intermediate: 40, advanced: 40 },
    nearestAirport: 'Glacier Park International Airport',
    airportCode: 'FCA',
    driveFromAirport: '15 minutes',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Gateway to Glacier National Park with spectacular alpine views',
      'Night skiing on select runs under the lights',
      'Incredible value compared to major destination resorts',
      'Diverse terrain with legendary gladed tree skiing',
      'Charming downtown Whitefish with award-winning restaurants and breweries'
    ],
    hotels: [
      {
        name: 'The Lodge at Whitefish Lake',
        slug: 'lodge-at-whitefish-lake',
        priceRange: '$$$$',
        pricePerNight: '$400-700',
        distanceToSlopes: '7 miles',
        skiInSkiOut: false,
        description: 'Luxury lakefront living on Whitefish Lake with Glacier Park views, a full spa, and fine dining. A complimentary shuttle whisks you to 3,000 acres of uncrowded Montana powder.',
        amenities: ['Spa', 'Restaurant', 'Pool', 'Hot Tub', 'Shuttle'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho234891%2Fthe-lodge-at-whitefish-lake-whitefish-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 48.4120,
        lng: -114.3575
      },
      {
        name: 'Firebrand Hotel',
        slug: 'firebrand-hotel-whitefish',
        priceRange: '$$$',
        pricePerNight: '$250-450',
        distanceToSlopes: '8 miles',
        skiInSkiOut: false,
        description: 'Hip downtown boutique with a rooftop hot tub, craft cocktails, and cruiser bikes for exploring Whitefish\'s award-winning restaurant scene. Mountain shuttle included for effortless ski days.',
        amenities: ['Hot Tub', 'Restaurant', 'Bar', 'Free Parking', 'Shuttle'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho518923%2Ffirebrand-hotel-whitefish-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 48.4100,
        lng: -114.3530
      },
      {
        name: 'Hibernation House',
        slug: 'hibernation-house-whitefish',
        priceRange: '$',
        pricePerNight: '$80-150',
        distanceToSlopes: '0.3 miles',
        skiInSkiOut: false,
        description: 'The ultimate ski-bum crash pad at Whitefish\'s base -- roll out of bed to the lifts in minutes. A communal kitchen and hot tub keep costs low while you chase Montana\'s legendary tree skiing.',
        amenities: ['Hot Tub', 'Kitchen', 'Free Parking', 'Ski Storage'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho176234%2Fhibernation-house-whitefish-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 48.4825,
        lng: -114.3540
      }
    ]
  },

  {
    activityType: 'ski' as const,
    name: 'Grand Targhee',
    slug: 'grand-targhee',
    state: 'Wyoming',
    country: 'US',
    region: 'Montana/Wyoming',
    tagline: 'Legendary powder on the quiet side of the Tetons',
    description: 'Grand Targhee Resort sits on the western slope of the Teton Range and is famous for its consistent, deep powder snow — averaging 500 inches annually. Known as "Targhee" to locals, this laid-back resort offers uncrowded slopes, a welcoming family atmosphere, and jaw-dropping views of Grand Teton. It is one of the most reliably deep-snow destinations in North America.',
    lat: 43.7878,
    lng: -110.9580,
    elevation: 10000,
    verticalDrop: 2270,
    skiableAcres: 2602,
    numberOfTrails: 76,
    numberOfLifts: 5,
    longestRun: '2.8 miles',
    snowfall: '500 inches annually',
    season: 'December - April',
    beginnerFriendly: true,
    nightSkiing: false,
    terrain: { beginner: 10, intermediate: 70, advanced: 20 },
    nearestAirport: 'Jackson Hole Airport',
    airportCode: 'JAC',
    driveFromAirport: '45 minutes',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Legendary 500 inches of annual snowfall — "Snow from heaven, not from hoses"',
      'Breathtaking views of Grand Teton from virtually every run',
      'Remarkably uncrowded slopes with short lift lines even on weekends',
      'Outstanding intermediate terrain ideal for progressing skiers',
      'Cat skiing and snowcat-accessed terrain for deep-powder adventures'
    ],
    hotels: [
      {
        name: 'Targhee Lodge',
        slug: 'targhee-lodge',
        priceRange: '$$$',
        pricePerNight: '$250-450',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Ski in and out on 500 inches of legendary Teton powder with Grand Teton towering above. A heated pool and panoramic views make this the premier base for the quiet side of the range.',
        amenities: ['Pool', 'Hot Tub', 'Restaurant', 'Ski Storage', 'Wi-Fi'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho293847%2Ftarghee-lodge-alta-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 43.7880,
        lng: -110.9585
      },
      {
        name: 'Teton Teepee Lodge',
        slug: 'teton-teepee-lodge',
        priceRange: '$$',
        pricePerNight: '$120-250',
        distanceToSlopes: '0.5 miles',
        skiInSkiOut: false,
        description: 'A fun-loving lodge where powder junkies gather around the hot tub to swap Teton tales. Affordable rates near the base let you spend more days chasing Targhee\'s famously deep snow.',
        amenities: ['Hot Tub', 'Restaurant', 'Free Parking', 'Ski Storage'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho341278%2Fteton-teepee-lodge-alta-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 43.7865,
        lng: -110.9560
      },
      {
        name: 'Grand Targhee Resort Condos',
        slug: 'grand-targhee-resort-condos',
        priceRange: '$$',
        pricePerNight: '$150-300',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Curl up by your own fireplace after skiing 500 inches of Teton powder, then cook dinner in a full kitchen. Ski-in/ski-out condos with Grand Teton views from the balcony.',
        amenities: ['Kitchen', 'Fireplace', 'Hot Tub', 'Ski Storage', 'Wi-Fi'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho415623%2Fgrand-targhee-resort-condos-alta-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 43.7875,
        lng: -110.9575
      }
    ]
  },

  {
    activityType: 'ski' as const,
    name: 'Sun Valley',
    slug: 'sun-valley',
    state: 'Idaho',
    country: 'US',
    region: 'Montana/Wyoming',
    tagline: 'America\'s first destination ski resort with world-class grooming',
    description: 'Sun Valley Resort in Ketchum, Idaho, holds the distinction of being America\'s first destination ski resort, opening in 1936. Its Bald Mountain offers 3,400 feet of vertical drop with impeccable grooming, no flat spots, and no beginner terrain cluttering the main mountain — every run is intermediate or above. Combined with 250 days of sunshine and a sophisticated yet unpretentious town, Sun Valley remains one of the finest ski experiences in North America.',
    lat: 43.6957,
    lng: -114.3514,
    elevation: 9150,
    verticalDrop: 3400,
    skiableAcres: 2154,
    numberOfTrails: 121,
    numberOfLifts: 18,
    longestRun: '3 miles',
    snowfall: '220 inches annually',
    season: 'November - April',
    beginnerFriendly: true,
    nightSkiing: false,
    terrain: { beginner: 36, intermediate: 42, advanced: 22 },
    nearestAirport: 'Friedman Memorial Airport',
    airportCode: 'SUN',
    driveFromAirport: '15 minutes',
    bestMonths: ['December', 'January', 'February', 'March'],
    highlights: [
      'America\'s first destination ski resort, established in 1936',
      'Legendary grooming — widely considered the best in North America',
      'Bald Mountain has no beginner runs: every trail is intermediate or expert',
      'Dollar Mountain offers a dedicated, gentle learning area for beginners',
      '250 days of sunshine annually with dry, light Idaho snow'
    ],
    hotels: [
      {
        name: 'Sun Valley Lodge',
        slug: 'sun-valley-lodge',
        priceRange: '$$$$',
        pricePerNight: '$450-900',
        distanceToSlopes: '1 mile',
        skiInSkiOut: false,
        description: 'America\'s first ski lodge (1936) still radiates old-Hollywood glamour where Hemingway once wrote. A heated outdoor pool, bowling alley, and spa complement the world\'s best-groomed runs.',
        amenities: ['Spa', 'Pool', 'Hot Tub', 'Restaurant', 'Bowling'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho119478%2Fsun-valley-lodge-sun-valley-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 43.6975,
        lng: -114.3510
      },
      {
        name: 'Limelight Hotel Ketchum',
        slug: 'limelight-hotel-ketchum',
        priceRange: '$$$',
        pricePerNight: '$300-550',
        distanceToSlopes: '0.5 miles',
        skiInSkiOut: false,
        description: 'Stylish Ketchum boutique with a rooftop hot tub, complimentary breakfast, and walkable access to galleries and dining. Ride the free shuttle to Bald Mountain\'s legendary corduroy.',
        amenities: ['Hot Tub', 'Free Breakfast', 'Restaurant', 'Fitness Center', 'Shuttle'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho567234%2Flimelight-hotel-ketchum-ketchum-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 43.6810,
        lng: -114.3630
      },
      {
        name: 'Best Western Tyrolean Lodge',
        slug: 'best-western-tyrolean-lodge',
        priceRange: '$$',
        pricePerNight: '$150-280',
        distanceToSlopes: '0.8 miles',
        skiInSkiOut: false,
        description: 'Alpine charm in downtown Ketchum with a heated pool, hot tub, and free shuttle to the lifts. Great-value rooms and 250 days of sunshine make this an ideal Sun Valley base.',
        amenities: ['Pool', 'Hot Tub', 'Free Breakfast', 'Shuttle', 'Free Parking'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho142876%2Fbest-western-tyrolean-lodge-ketchum-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 43.6805,
        lng: -114.3620
      }
    ]
  },

  // ===========================================================================
  // NORTHEAST - ADDITIONAL (3)
  // ===========================================================================

  {
    activityType: 'ski' as const,
    name: 'Sugarloaf',
    slug: 'sugarloaf',
    state: 'Maine',
    country: 'US',
    region: 'Northeast',
    tagline: 'The only above-treeline skiing on the East Coast with the biggest vertical in the East',
    description: 'Sugarloaf is Maine\'s premier ski destination and one of the most challenging mountains in the eastern United States. It is the only resort east of the Rockies that offers above-treeline skiing via its legendary Snowfields, and it boasts the largest vertical drop in the East at 2,820 feet. The resort\'s remote Carrabassett Valley location delivers a true ski-town feel with a tight-knit community of dedicated skiers.',
    lat: 45.0317,
    lng: -70.3131,
    elevation: 4237,
    verticalDrop: 2820,
    skiableAcres: 1230,
    numberOfTrails: 162,
    numberOfLifts: 13,
    longestRun: '3.5 miles',
    snowfall: '200 inches annually',
    season: 'November - May',
    beginnerFriendly: true,
    nightSkiing: false,
    terrain: { beginner: 27, intermediate: 32, advanced: 41 },
    nearestAirport: 'Portland International Jetport',
    airportCode: 'PWM',
    driveFromAirport: '2 hours 30 minutes',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Only above-treeline skiing on the East Coast via the Snowfields',
      'Largest vertical drop in the eastern United States at 2,820 feet',
      'Longest season in the Northeast, often lasting into May',
      'Tight-knit ski community with a genuine locals\' vibe',
      'Outstanding gladed skiing through Maine\'s dense forests'
    ],
    hotels: [
      {
        name: 'Sugarloaf Mountain Hotel',
        slug: 'sugarloaf-mountain-hotel',
        priceRange: '$$$',
        pricePerNight: '$250-450',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Ski the East\'s only above-treeline terrain and glide back to this slopeside flagship. A heated outdoor pool and health club reward you after conquering the biggest vertical drop east of the Rockies.',
        amenities: ['Pool', 'Hot Tub', 'Restaurant', 'Fitness Center', 'Ski Valet'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho178432%2Fsugarloaf-mountain-hotel-carrabassett-valley-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 45.0320,
        lng: -70.3140
      },
      {
        name: 'The Herbert Grand Hotel',
        slug: 'herbert-grand-hotel',
        priceRange: '$$',
        pricePerNight: '$130-250',
        distanceToSlopes: '18 miles',
        skiInSkiOut: false,
        description: 'A beautifully restored 1918 grand hotel with elegant rooms and a celebrated restaurant in quaint Kingfield. Classic New England charm meets the wild spirit of Maine\'s biggest mountain.',
        amenities: ['Restaurant', 'Bar', 'Free Parking', 'Wi-Fi'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho234519%2Fthe-herbert-grand-hotel-kingfield-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 44.9590,
        lng: -70.1540
      },
      {
        name: 'Sugarloaf Inn',
        slug: 'sugarloaf-inn',
        priceRange: '$$',
        pricePerNight: '$150-280',
        distanceToSlopes: '0.2 miles',
        skiInSkiOut: false,
        description: 'Spacious rooms near the base with an on-site restaurant and shuttle to the lifts. Wake up to Maine\'s Carrabassett Valley views and ski 162 trails including the famous Snowfields.',
        amenities: ['Restaurant', 'Hot Tub', 'Free Parking', 'Shuttle', 'Ski Storage'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho312478%2Fsugarloaf-inn-carrabassett-valley-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 45.0310,
        lng: -70.3125
      }
    ]
  },

  {
    activityType: 'ski' as const,
    name: 'Bretton Woods',
    slug: 'bretton-woods',
    state: 'New Hampshire',
    country: 'US',
    region: 'Northeast',
    tagline: 'New Hampshire\'s largest resort with majestic Mt. Washington views',
    description: 'Bretton Woods is New Hampshire\'s largest ski area, set against the dramatic backdrop of the Presidential Range and Mount Washington. The resort offers a refined, family-friendly experience with well-groomed trails, a canopy tour, night skiing, and the grand Omni Mount Washington Resort. Its gentle terrain mix and scenic beauty make it an ideal destination for families and intermediate skiers seeking classic New England charm.',
    lat: 44.2577,
    lng: -71.4468,
    elevation: 3100,
    verticalDrop: 1500,
    skiableAcres: 464,
    numberOfTrails: 97,
    numberOfLifts: 10,
    longestRun: '2.5 miles',
    snowfall: '200 inches annually',
    season: 'November - April',
    beginnerFriendly: true,
    nightSkiing: true,
    terrain: { beginner: 31, intermediate: 35, advanced: 34 },
    nearestAirport: 'Portland International Jetport',
    airportCode: 'PWM',
    driveFromAirport: '2 hours 30 minutes',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'New Hampshire\'s largest ski area with 464 acres of terrain',
      'Spectacular views of Mount Washington and the Presidential Range',
      'Night skiing and riding on select evenings',
      'Home to the iconic Omni Mount Washington Resort',
      'Excellent snowmaking covering 97% of trails for reliable conditions'
    ],
    hotels: [
      {
        name: 'Omni Mount Washington Resort',
        slug: 'omni-mount-washington-resort',
        priceRange: '$$$$',
        pricePerNight: '$400-800',
        distanceToSlopes: '0.5 miles',
        skiInSkiOut: false,
        description: 'A breathtaking 1902 grand hotel where Mount Washington fills every window and gilded-age elegance meets modern spa luxury. Indoor and outdoor pools, world-class dining, and ski shuttles included.',
        amenities: ['Spa', 'Pool', 'Restaurant', 'Hot Tub', 'Shuttle'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho115983%2Fomni-mount-washington-resort-bretton-woods-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 44.2575,
        lng: -71.4410
      },
      {
        name: 'Lodge at Bretton Woods',
        slug: 'lodge-at-bretton-woods',
        priceRange: '$$$',
        pricePerNight: '$250-400',
        distanceToSlopes: '0.3 miles',
        skiInSkiOut: false,
        description: 'Family-friendly base near Bretton Woods slopes with a heated outdoor pool and Presidential Range views. Easy access to New Hampshire\'s largest ski area at a fraction of grand-hotel pricing.',
        amenities: ['Pool', 'Hot Tub', 'Free Parking', 'Restaurant', 'Shuttle'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho198734%2Flodge-at-bretton-woods-bretton-woods-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 44.2590,
        lng: -71.4475
      },
      {
        name: 'Town & Country Inn & Resort',
        slug: 'town-country-inn-resort',
        priceRange: '$$',
        pricePerNight: '$120-220',
        distanceToSlopes: '15 miles',
        skiInSkiOut: false,
        description: 'Stretch your ski budget in nearby Shelburne with indoor and outdoor pools for after-ski relaxation. A scenic White Mountains drive delivers you to Bretton Woods\' family-friendly terrain.',
        amenities: ['Pool', 'Hot Tub', 'Restaurant', 'Free Parking', 'Fitness Center'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho267543%2Ftown-country-inn-resort-shelburne-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 44.3870,
        lng: -71.0740
      }
    ]
  },

  {
    activityType: 'ski' as const,
    name: 'Loon Mountain',
    slug: 'loon-mountain',
    state: 'New Hampshire',
    country: 'US',
    region: 'Northeast',
    tagline: 'White Mountains family favorite with excellent snowmaking',
    description: 'Loon Mountain Resort is one of New Hampshire\'s most popular ski destinations, nestled in the heart of the White Mountains along the scenic Kancamagus Highway. The resort is renowned for its excellent snowmaking capabilities — covering 100% of its terrain — and its wide variety of family-friendly activities. With a well-rounded mix of terrain, a vibrant base village, and easy access from Boston, Loon is a go-to mountain for New England families.',
    lat: 44.0365,
    lng: -71.6216,
    elevation: 3050,
    verticalDrop: 2100,
    skiableAcres: 370,
    numberOfTrails: 61,
    numberOfLifts: 10,
    longestRun: '2.5 miles',
    snowfall: '156 inches annually',
    season: 'November - April',
    beginnerFriendly: true,
    nightSkiing: false,
    terrain: { beginner: 20, intermediate: 60, advanced: 20 },
    nearestAirport: 'Manchester-Boston Regional Airport',
    airportCode: 'MHT',
    driveFromAirport: '2 hours',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      '100% snowmaking coverage ensures reliable conditions all season',
      'Scenic location along the famous Kancamagus Highway',
      'Family-friendly base village with dining, shopping, and activities',
      'Excellent intermediate cruising trails with wide, well-groomed runs',
      'Convenient 2-hour drive from Boston making it ideal for weekend trips'
    ],
    hotels: [
      {
        name: 'Mountain Club on Loon',
        slug: 'mountain-club-on-loon',
        priceRange: '$$$',
        pricePerNight: '$250-450',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Ski-in/ski-out at Loon\'s base with an indoor/outdoor pool and full spa to soothe après muscles. Spacious suites make this the ultimate White Mountains family ski weekend.',
        amenities: ['Spa', 'Pool', 'Hot Tub', 'Restaurant', 'Ski Storage'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho154329%2Fmountain-club-on-loon-lincoln-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 44.0370,
        lng: -71.6220
      },
      {
        name: 'InnSeason Resorts Pollard Brook',
        slug: 'innseason-pollard-brook',
        priceRange: '$$',
        pricePerNight: '$150-280',
        distanceToSlopes: '1 mile',
        skiInSkiOut: false,
        description: 'Roomy condo suites with full kitchens and an indoor pool, perfect for families who want space and savings. A free shuttle to Loon makes mornings hassle-free on the Kancamagus.',
        amenities: ['Pool', 'Hot Tub', 'Kitchen', 'Shuttle', 'Free Parking'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho213478%2Finnseason-resorts-pollard-brook-lincoln-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 44.0410,
        lng: -71.6280
      },
      {
        name: 'Woodwards Resort',
        slug: 'woodwards-resort-lincoln',
        priceRange: '$',
        pricePerNight: '$90-170',
        distanceToSlopes: '3 miles',
        skiInSkiOut: false,
        description: 'A family-owned gem in Lincoln where an indoor pool, game room, and warm hospitality keep kids happy and parents\' wallets intact. Outstanding value just minutes from Loon\'s groomed cruisers.',
        amenities: ['Pool', 'Hot Tub', 'Restaurant', 'Free Parking', 'Game Room'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho176823%2Fwoodwards-resort-lincoln-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 44.0490,
        lng: -71.6560
      }
    ]
  },

  // ===========================================================================
  // PACIFIC NORTHWEST (3)
  // ===========================================================================

  {
    activityType: 'ski' as const,
    name: 'Mt. Bachelor',
    slug: 'mt-bachelor',
    state: 'Oregon',
    country: 'US',
    region: 'Pacific Northwest',
    tagline: 'Volcanic terrain, dry Pacific powder, and 360-degree skiing',
    description: 'Mt. Bachelor is a dormant volcanic peak in central Oregon that offers a truly unique skiing experience. As a standalone stratovolcano, the mountain provides 360-degree skiing with no defined front or back side. The resort receives dry, light powder unusual for the Pacific Northwest, with over 4,300 skiable acres of diverse terrain ranging from gentle groomers to exposed summit steeps. Its proximity to the outdoor-recreation hub of Bend makes it a year-round destination.',
    lat: 43.9792,
    lng: -121.6886,
    elevation: 9068,
    verticalDrop: 3365,
    skiableAcres: 4318,
    numberOfTrails: 101,
    numberOfLifts: 15,
    longestRun: '3 miles',
    snowfall: '462 inches annually',
    season: 'November - May',
    beginnerFriendly: true,
    nightSkiing: false,
    terrain: { beginner: 15, intermediate: 25, advanced: 60 },
    nearestAirport: 'Redmond Municipal Airport',
    airportCode: 'RDM',
    driveFromAirport: '30 minutes',
    bestMonths: ['January', 'February', 'March', 'April'],
    highlights: [
      'Unique 360-degree skiing on a standalone volcanic peak',
      'Over 4,300 acres — one of the largest ski areas in the US',
      'Dry, light powder unusual for the Pacific Northwest',
      'Long season stretching from November through May',
      'Minutes from Bend, Oregon\'s craft brewery and outdoor capital'
    ],
    hotels: [
      {
        name: 'Tetherow Lodges',
        slug: 'tetherow-lodges-bend',
        priceRange: '$$$$',
        pricePerNight: '$400-700',
        distanceToSlopes: '22 miles',
        skiInSkiOut: false,
        description: 'Luxury lodges with stunning Cascade Mountain views, a spa, and upscale dining on Bend\'s outskirts. Drive 22 minutes to Mt. Bachelor\'s 360-degree volcanic skiing -- one of the most unique in America.',
        amenities: ['Spa', 'Restaurant', 'Pool', 'Hot Tub', 'Fitness Center'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho478923%2Ftetherow-lodges-bend-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 43.9940,
        lng: -121.3170
      },
      {
        name: 'Riverhouse on the Deschutes',
        slug: 'riverhouse-on-the-deschutes',
        priceRange: '$$$',
        pricePerNight: '$200-350',
        distanceToSlopes: '22 miles',
        skiInSkiOut: false,
        description: 'Relax riverside in Bend with renovated rooms and an indoor/outdoor pool. After skiing Bachelor\'s 4,300 volcanic acres, explore Bend\'s legendary craft brewery scene steps away.',
        amenities: ['Pool', 'Hot Tub', 'Restaurant', 'Free Parking', 'Fitness Center'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho132487%2Friverhouse-on-the-deschutes-bend-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 44.0585,
        lng: -121.3050
      },
      {
        name: 'Best Western Premier Peppertree Inn',
        slug: 'best-western-peppertree-bend',
        priceRange: '$$',
        pricePerNight: '$120-220',
        distanceToSlopes: '23 miles',
        skiInSkiOut: false,
        description: 'Fuel up with a free hot breakfast before driving the scenic Cascade Lakes Highway to Mt. Bachelor. An indoor pool and Bend\'s vibrant dining scene await your return each evening.',
        amenities: ['Pool', 'Hot Tub', 'Free Breakfast', 'Free Parking', 'Wi-Fi'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho156743%2Fbest-western-premier-peppertree-inn-bend-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 44.0540,
        lng: -121.3100
      }
    ]
  },

  {
    activityType: 'ski' as const,
    name: 'Crystal Mountain',
    slug: 'crystal-mountain',
    state: 'Washington',
    country: 'US',
    region: 'Pacific Northwest',
    tagline: 'Jaw-dropping Rainier views and Seattle\'s home mountain',
    description: 'Crystal Mountain is Washington state\'s largest ski resort and the de facto home mountain for Seattle-area skiers. Located in the shadow of Mount Rainier, the resort offers breathtaking views of the 14,411-foot volcano from nearly every angle. Crystal is known for its challenging terrain, heavy snowfall, and the iconic Summit House — the highest-elevation restaurant in Washington — perched at the top of the gondola.',
    lat: 46.9353,
    lng: -121.5045,
    elevation: 7012,
    verticalDrop: 3100,
    skiableAcres: 2600,
    numberOfTrails: 57,
    numberOfLifts: 11,
    longestRun: '2.5 miles',
    snowfall: '486 inches annually',
    season: 'November - April',
    beginnerFriendly: false,
    nightSkiing: false,
    terrain: { beginner: 13, intermediate: 57, advanced: 30 },
    nearestAirport: 'Seattle-Tacoma International Airport',
    airportCode: 'SEA',
    driveFromAirport: '2 hours',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Unrivaled views of Mount Rainier from virtually every run',
      'Summit House restaurant at 6,872 feet — highest dining in Washington',
      'Washington\'s largest ski area with 2,600 acres of terrain',
      'Heavy Cascade snowfall averaging nearly 500 inches annually',
      'Diverse terrain from gentle groomers to steep backcountry-style bowls'
    ],
    hotels: [
      {
        name: 'Crystal Mountain Hotels - Alpine Inn',
        slug: 'alpine-inn-crystal-mountain',
        priceRange: '$$$',
        pricePerNight: '$250-400',
        distanceToSlopes: '0.1 miles',
        skiInSkiOut: false,
        description: 'The closest beds to Crystal\'s lifts -- step outside and you\'re skiing in minutes with jaw-dropping Mount Rainier views. A hot tub and warm rooms reward you after 2,600 acres of Cascade terrain.',
        amenities: ['Hot Tub', 'Restaurant', 'Ski Storage', 'Wi-Fi'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho298734%2Falpine-inn-crystal-mountain-crystal-mountain-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 46.9340,
        lng: -121.5030
      },
      {
        name: 'Alta Crystal Resort',
        slug: 'alta-crystal-resort',
        priceRange: '$$',
        pricePerNight: '$180-320',
        distanceToSlopes: '5 miles',
        skiInSkiOut: false,
        description: 'Rustic cabins tucked in old-growth forest with your own private hot tub and full kitchen. The heated pool and peaceful setting create a true Pacific Northwest mountain retreat near Crystal.',
        amenities: ['Pool', 'Hot Tub', 'Kitchen', 'Free Parking', 'Fireplace'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho175423%2Falta-crystal-resort-greenwater-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 46.9530,
        lng: -121.5430
      },
      {
        name: 'Best Western Premier Plaza Hotel',
        slug: 'best-western-premier-enumclaw',
        priceRange: '$$',
        pricePerNight: '$130-220',
        distanceToSlopes: '30 miles',
        skiInSkiOut: false,
        description: 'A comfortable Enumclaw base with free breakfast and indoor pool, keeping costs down while you chase 486 inches of annual snowfall at Crystal. Mount Rainier views from every approach road.',
        amenities: ['Pool', 'Hot Tub', 'Free Breakfast', 'Free Parking', 'Fitness Center'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho243897%2Fbest-western-premier-plaza-hotel-enumclaw-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 47.2020,
        lng: -121.9910
      }
    ]
  },

  {
    activityType: 'ski' as const,
    name: 'Stevens Pass',
    slug: 'stevens-pass',
    state: 'Washington',
    country: 'US',
    region: 'Pacific Northwest',
    tagline: 'Deep Cascade snow and convenient Seattle access',
    description: 'Stevens Pass is a beloved Pacific Northwest ski area perched on the crest of the Cascade Range along US Highway 2. The resort receives prodigious snowfall — averaging 460 inches annually — and offers a mix of groomed runs, steeps, glades, and one of the best night skiing operations in the country. Its relatively close proximity to Seattle makes it a favorite weeknight and weekend destination for Puget Sound skiers and riders.',
    lat: 47.7448,
    lng: -121.0890,
    elevation: 5845,
    verticalDrop: 1800,
    skiableAcres: 1125,
    numberOfTrails: 52,
    numberOfLifts: 10,
    longestRun: '2 miles',
    snowfall: '460 inches annually',
    season: 'December - April',
    beginnerFriendly: true,
    nightSkiing: true,
    terrain: { beginner: 11, intermediate: 54, advanced: 35 },
    nearestAirport: 'Seattle-Tacoma International Airport',
    airportCode: 'SEA',
    driveFromAirport: '1 hour 30 minutes',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Massive Cascade snowfall averaging 460 inches per season',
      'One of the best night skiing operations in North America',
      'Convenient 1.5-hour drive from Seattle',
      'Excellent gladed tree skiing on the backside',
      'Part of the Epic Pass for multi-resort value'
    ],
    hotels: [
      {
        name: 'Sleeping Lady Mountain Resort',
        slug: 'sleeping-lady-mountain-resort',
        priceRange: '$$$',
        pricePerNight: '$250-400',
        distanceToSlopes: '18 miles',
        skiInSkiOut: false,
        description: 'A nature-immersive retreat in Leavenworth where organic dining and a serene spa complement the Bavarian village charm. Recharge body and soul before tackling Stevens Pass\'s 460 inches of powder.',
        amenities: ['Spa', 'Restaurant', 'Pool', 'Hot Tub', 'Free Parking'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho189347%2Fsleeping-lady-mountain-resort-leavenworth-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 47.5920,
        lng: -120.6690
      },
      {
        name: 'Enzian Inn',
        slug: 'enzian-inn-leavenworth',
        priceRange: '$$',
        pricePerNight: '$150-280',
        distanceToSlopes: '20 miles',
        skiInSkiOut: false,
        description: 'Bavarian charm with an indoor pool, hot tub, and complimentary breakfast in fairy-tale Leavenworth. A scenic 20-minute drive delivers you to Stevens Pass\'s legendary night skiing.',
        amenities: ['Pool', 'Hot Tub', 'Free Breakfast', 'Free Parking', 'Wi-Fi'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho134289%2Fenzian-inn-leavenworth-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 47.5960,
        lng: -120.6610
      },
      {
        name: 'LOGE Leavenworth',
        slug: 'loge-leavenworth',
        priceRange: '$',
        pricePerNight: '$80-160',
        distanceToSlopes: '20 miles',
        skiInSkiOut: false,
        description: 'Built for adventure seekers who\'d rather spend on lift tickets than rooms. Dorm or private options, a communal kitchen, and a hot tub create the perfect PNW ski-bum basecamp.',
        amenities: ['Kitchen', 'Hot Tub', 'Free Parking', 'Wi-Fi'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho467821%2Floge-leavenworth-leavenworth-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 47.5940,
        lng: -120.6650
      }
    ]
  },

  // ===========================================================================
  // SOUTHWEST (1)
  // ===========================================================================

  {
    activityType: 'ski' as const,
    name: 'Taos Ski Valley',
    slug: 'taos',
    state: 'New Mexico',
    country: 'US',
    region: 'Southwest',
    tagline: 'Legendary steep terrain and unique Southwest culture',
    description: 'Taos Ski Valley is a one-of-a-kind ski destination nestled in the Sangre de Cristo Mountains of northern New Mexico. Founded by Swiss-German ski pioneer Ernie Blake in 1955, the resort is legendary for its steep, challenging terrain and its distinctive blend of Native American, Hispanic, and European cultures. With over 300 inches of annual snowfall at high elevation, consistent sunshine, and a newly modernized base village, Taos has reinvented itself while preserving its rugged, independent spirit.',
    lat: 36.5961,
    lng: -105.4545,
    elevation: 12481,
    verticalDrop: 3281,
    skiableAcres: 1294,
    numberOfTrails: 110,
    numberOfLifts: 15,
    longestRun: '5.2 miles',
    snowfall: '305 inches annually',
    season: 'November - April',
    beginnerFriendly: false,
    nightSkiing: false,
    terrain: { beginner: 24, intermediate: 25, advanced: 51 },
    nearestAirport: 'Albuquerque International Sunport',
    airportCode: 'ABQ',
    driveFromAirport: '2 hours 30 minutes',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Legendary steep terrain including Kachina Peak at 12,481 feet',
      'Unique cultural blend of Native American, Hispanic, and European influences',
      'Over 300 sunny days per year combined with deep, dry snowfall',
      'Newly renovated base village with upscale dining and lodging',
      'No crowds — a refreshing alternative to overcrowded Colorado resorts'
    ],
    hotels: [
      {
        name: 'The Blake at Taos Ski Valley',
        slug: 'the-blake-taos',
        priceRange: '$$$$',
        pricePerNight: '$400-750',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Taos\' crown jewel with ski-in/ski-out access to legendary steep terrain, a rooftop hot tub under Sangre de Cristo skies, and a farm-to-table restaurant celebrating Southwest flavors.',
        amenities: ['Spa', 'Hot Tub', 'Restaurant', 'Ski Valet', 'Pool'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho534217%2Fthe-blake-at-taos-ski-valley-taos-ski-valley-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 36.5965,
        lng: -105.4550
      },
      {
        name: 'Edelweiss Lodge & Spa',
        slug: 'edelweiss-lodge-taos',
        priceRange: '$$$',
        pricePerNight: '$200-400',
        distanceToSlopes: '0.1 miles',
        skiInSkiOut: false,
        description: 'European alpine warmth meets New Mexico sunshine at this lift-side lodge. Swim in the heated outdoor pool under blue-bird skies, then enjoy Taos\' legendary après with green chile and craft brews.',
        amenities: ['Spa', 'Pool', 'Hot Tub', 'Restaurant', 'Ski Storage'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho198423%2Fedelweiss-lodge-spa-taos-ski-valley-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 36.5958,
        lng: -105.4540
      },
      {
        name: 'Columbine Inn',
        slug: 'columbine-inn-taos',
        priceRange: '$$',
        pricePerNight: '$120-250',
        distanceToSlopes: '0.2 miles',
        skiInSkiOut: false,
        description: 'Cozy rooms and a hot tub just steps from the lifts in Taos\' intimate village. Save your budget for green chile stew at local restaurants and more runs on the Southwest\'s steepest terrain.',
        amenities: ['Hot Tub', 'Free Parking', 'Ski Storage', 'Wi-Fi'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho276834%2Fcolumbine-inn-taos-ski-valley-united-states-of-america%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 36.5955,
        lng: -105.4535
      }
    ]
  },

  // ===========================================================================
  // CANADA - ADDITIONAL (3)
  // ===========================================================================

  {
    activityType: 'ski' as const,
    name: 'Big White',
    slug: 'big-white',
    state: 'British Columbia',
    country: 'Canada',
    region: 'Canada',
    tagline: 'Champagne powder, ski-in/ski-out village, and family-friendly fun',
    description: 'Big White Ski Resort is one of British Columbia\'s largest and most family-friendly ski destinations, known for its consistently dry "Champagne powder" snow, a true ski-in/ski-out village, and over 2,700 acres of diverse terrain. Located in the Okanagan region near Kelowna, Big White offers a complete resort experience with ice climbing, dog sledding, tube parks, and a lively village — all at a fraction of the cost of more famous Canadian resorts.',
    lat: 49.7255,
    lng: -118.9327,
    elevation: 7606,
    verticalDrop: 2550,
    skiableAcres: 2765,
    numberOfTrails: 119,
    numberOfLifts: 16,
    longestRun: '4.6 miles',
    snowfall: '295 inches annually',
    season: 'November - April',
    beginnerFriendly: true,
    nightSkiing: true,
    terrain: { beginner: 18, intermediate: 56, advanced: 26 },
    nearestAirport: 'Kelowna International Airport',
    airportCode: 'YLW',
    driveFromAirport: '55 minutes',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Legendary "Champagne powder" — dry, light, interior BC snow',
      'Canada\'s largest ski-in/ski-out village with no need for a car',
      'Excellent family programming and kids\' activities beyond skiing',
      'Night skiing on select runs adds extra value to every visit',
      'Outstanding value compared to Whistler and other marquee BC resorts'
    ],
    hotels: [
      {
        name: 'Stonebridge Lodge',
        slug: 'stonebridge-lodge-big-white',
        priceRange: '$$$',
        pricePerNight: '$250-450',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Ski-in/ski-out luxury in Big White\'s car-free village with spacious suites and an outdoor hot tub. Champagne powder and snow ghost-covered trees await right outside your door.',
        amenities: ['Hot Tub', 'Ski Storage', 'Kitchen', 'Wi-Fi', 'Fireplace'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho312654%2Fstonebridge-lodge-big-white-canada%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 49.7258,
        lng: -118.9330
      },
      {
        name: 'Chateau Big White',
        slug: 'chateau-big-white',
        priceRange: '$$',
        pricePerNight: '$150-300',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Family-friendly suites with kitchens and ski-in/ski-out access in the village centre. A rooftop hot tub and underground parking keep everything easy -- just open the door and ski.',
        amenities: ['Hot Tub', 'Kitchen', 'Free Parking', 'Ski Storage', 'Wi-Fi'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho287934%2Fchateau-big-white-big-white-canada%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 49.7252,
        lng: -118.9325
      },
      {
        name: 'White Crystal Inn',
        slug: 'white-crystal-inn-big-white',
        priceRange: '$$',
        pricePerNight: '$120-230',
        distanceToSlopes: '0.2 miles',
        skiInSkiOut: false,
        description: 'Excellent value near Big White\'s car-free village with a hot tub and easy walking distance to the lifts. More money for Champagne powder days and night skiing adventures.',
        amenities: ['Hot Tub', 'Free Parking', 'Wi-Fi', 'Ski Storage'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho345678%2Fwhite-crystal-inn-big-white-canada%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 49.7248,
        lng: -118.9320
      }
    ]
  },

  {
    activityType: 'ski' as const,
    name: 'Revelstoke',
    slug: 'revelstoke',
    state: 'British Columbia',
    country: 'Canada',
    region: 'Canada',
    tagline: 'Longest vertical in North America and legendary deep powder',
    description: 'Revelstoke Mountain Resort boasts the longest vertical drop of any ski resort in North America at 5,620 feet, and it has quickly become one of the most talked-about destinations for expert skiers and powder hounds. Deep in the Selkirk and Monashee mountain ranges of interior British Columbia, Revelstoke receives massive annual snowfall and offers a combination of groomed runs, alpine bowls, gladed tree skiing, and heli/cat-skiing access that few resorts can match.',
    lat: 51.0275,
    lng: -118.1610,
    elevation: 7300,
    verticalDrop: 5620,
    skiableAcres: 3121,
    numberOfTrails: 75,
    numberOfLifts: 6,
    longestRun: '9.4 miles',
    snowfall: '354 inches annually',
    season: 'December - April',
    beginnerFriendly: false,
    nightSkiing: false,
    terrain: { beginner: 7, intermediate: 45, advanced: 48 },
    nearestAirport: 'Kelowna International Airport',
    airportCode: 'YLW',
    driveFromAirport: '2 hours 30 minutes',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Longest lift-served vertical drop in North America at 5,620 feet',
      'Massive annual snowfall in BC\'s legendary interior powder belt',
      'World-class heli-skiing and cat-skiing accessible from the resort',
      'Authentic Canadian mountain town with no corporate resort feel',
      'Expanding terrain with new lifts and runs added regularly'
    ],
    hotels: [
      {
        name: 'Sutton Place Hotel Revelstoke',
        slug: 'sutton-place-revelstoke',
        priceRange: '$$$$',
        pricePerNight: '$400-700',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Ski in from North America\'s longest vertical drop to a heated pool and full spa. Elegant mountain-view suites and slopeside luxury at one of the continent\'s most talked-about powder destinations.',
        amenities: ['Spa', 'Pool', 'Hot Tub', 'Restaurant', 'Ski Valet'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho412378%2Fsutton-place-hotel-revelstoke-mountain-resort-revelstoke-canada%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 51.0280,
        lng: -118.1615
      },
      {
        name: 'Sandman Hotel Revelstoke',
        slug: 'sandman-hotel-revelstoke',
        priceRange: '$$',
        pricePerNight: '$130-250',
        distanceToSlopes: '5 miles',
        skiInSkiOut: false,
        description: 'Downtown Revelstoke charm with an indoor pool and on-site restaurant. Explore the authentic mountain town\'s craft breweries, then drive minutes to 5,620 vertical feet of BC powder.',
        amenities: ['Pool', 'Restaurant', 'Free Parking', 'Wi-Fi', 'Fitness Center'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho178932%2Fsandman-hotel-revelstoke-revelstoke-canada%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 50.9980,
        lng: -118.1955
      },
      {
        name: 'Best Western Plus Revelstoke',
        slug: 'best-western-plus-revelstoke',
        priceRange: '$$',
        pricePerNight: '$120-220',
        distanceToSlopes: '5 miles',
        skiInSkiOut: false,
        description: 'Start with a free breakfast, then drive to North America\'s longest vertical for legendary deep-powder laps. A hot tub and spacious rooms welcome you back to charming Revelstoke each evening.',
        amenities: ['Hot Tub', 'Free Breakfast', 'Free Parking', 'Wi-Fi', 'Fitness Center'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho215674%2Fbest-western-plus-revelstoke-revelstoke-canada%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 50.9975,
        lng: -118.1960
      }
    ]
  },

  {
    activityType: 'ski' as const,
    name: 'Fernie Alpine',
    slug: 'fernie',
    state: 'British Columbia',
    country: 'Canada',
    region: 'Canada',
    tagline: 'Legendary powder town in the Canadian Rockies',
    description: 'Fernie Alpine Resort sits in the heart of the Lizard Range in southeastern British Columbia and is widely regarded as one of the best powder destinations in the Canadian Rockies. With five massive alpine bowls, extensive gladed terrain, and an average annual snowfall of 354 inches, Fernie delivers consistent, deep snow throughout the winter. The town of Fernie itself is a vibrant, authentic mountain community with a rich coal-mining heritage, excellent dining, and a welcoming locals\' culture.',
    lat: 49.4628,
    lng: -115.0875,
    elevation: 7050,
    verticalDrop: 3550,
    skiableAcres: 2504,
    numberOfTrails: 142,
    numberOfLifts: 10,
    longestRun: '3.1 miles',
    snowfall: '354 inches annually',
    season: 'December - April',
    beginnerFriendly: true,
    nightSkiing: false,
    terrain: { beginner: 30, intermediate: 40, advanced: 30 },
    nearestAirport: 'Canadian Rockies International Airport',
    airportCode: 'YXC',
    driveFromAirport: '1 hour',
    bestMonths: ['January', 'February', 'March'],
    highlights: [
      'Five massive alpine bowls delivering legendary Rocky Mountain powder',
      'Authentic mountain town with vibrant dining, arts, and local culture',
      'Extensive gladed tree skiing through old-growth cedar forests',
      'Outstanding value — far less expensive than nearby Banff-area resorts',
      'Welcoming, unpretentious locals\' culture and genuine community feel'
    ],
    hotels: [
      {
        name: 'Lizard Creek Lodge',
        slug: 'lizard-creek-lodge-fernie',
        priceRange: '$$$',
        pricePerNight: '$250-450',
        distanceToSlopes: 'Ski-in/Ski-out',
        skiInSkiOut: true,
        description: 'Ski in from five massive alpine bowls to a heated pool and outdoor hot tub with Lizard Range views. The premier slopeside stay at one of Canada\'s best-kept powder secrets.',
        amenities: ['Pool', 'Hot Tub', 'Kitchen', 'Ski Storage', 'Wi-Fi'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho267891%2Flizard-creek-lodge-fernie-canada%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 49.4632,
        lng: -115.0880
      },
      {
        name: 'Fernie Stanford Resort',
        slug: 'fernie-stanford-resort',
        priceRange: '$$',
        pricePerNight: '$130-250',
        distanceToSlopes: '3 miles',
        skiInSkiOut: false,
        description: 'Kids love the waterslide and hot tub; adults love the on-site pub after 354 inches of Rocky Mountain powder. Perfectly positioned between Fernie\'s vibrant town and the ski hill.',
        amenities: ['Pool', 'Hot Tub', 'Restaurant', 'Free Parking', 'Waterslide'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho198276%2Ffernie-stanford-resort-fernie-canada%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 49.4850,
        lng: -115.0550
      },
      {
        name: 'Park Place Lodge',
        slug: 'park-place-lodge-fernie',
        priceRange: '$$',
        pricePerNight: '$120-230',
        distanceToSlopes: '5 miles',
        skiInSkiOut: false,
        description: 'Downtown Fernie\'s social hub with an indoor pool, restaurant, and the town\'s vibrant arts-and-dining scene on your doorstep. Affordable comfort with easy access to legendary powder bowls.',
        amenities: ['Pool', 'Hot Tub', 'Restaurant', 'Free Parking', 'Fitness Center'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho145623%2Fpark-place-lodge-fernie-canada%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 49.5040,
        lng: -115.0630
      },
      {
        name: 'Snow Valley Motel & RV Park',
        slug: 'snow-valley-motel-fernie',
        priceRange: '$',
        pricePerNight: '$80-140',
        distanceToSlopes: '3 miles',
        skiInSkiOut: false,
        description: 'The powder chaser\'s dream base -- clean rooms, free parking, and rock-bottom rates so you can spend every dollar on deep days in Fernie\'s five legendary alpine bowls.',
        amenities: ['Free Parking', 'Wi-Fi', 'Kitchen', 'Laundry'],
        bookingUrl: 'https://www.hotels.com/affiliate?landingPage=https%3A%2F%2Fwww.hotels.com%2Fho234156%2Fsnow-valley-motel-rv-park-fernie-canada%2F&camref=1110lFmx3&creativeref=1011l66481',
        lat: 49.4870,
        lng: -115.0540
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
  filters: { terrain?: string; skiInOut?: string; nightSkiing?: string; budget?: string; elevation?: string }
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

  if (filters.nightSkiing === 'true') {
    result = result.filter((d) => d.nightSkiing === true)
  }

  if (filters.budget === 'true') {
    result = result.filter((d) => d.hotels.some((h) => h.priceRange === '$' || h.priceRange === '$$'))
  }

  if (filters.elevation === 'high') {
    result = result.filter((d) => d.elevation >= 10000)
  }

  return result
}

