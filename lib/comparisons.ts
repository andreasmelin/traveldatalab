import { Comparison } from './types'

export const comparisons: Comparison[] = [
  {
    slug: 'park-city-vs-vail',
    destination1: 'park-city',
    destination2: 'vail',
    title: 'Park City vs Vail: Which Ski Resort Is Better?',
    description: 'A detailed comparison of Park City and Vail ski resorts covering terrain, snow, lodging, and value.',
    verdict: 'Park City wins on size and value, Vail wins on terrain variety and après-ski scene.',
    categories: [
      { name: 'Terrain Size', winner: 1, explanation: 'Park City is the largest ski resort in the US at 7,300 acres vs Vail\'s 5,317 acres.' },
      { name: 'Snow Quality', winner: 2, explanation: 'Vail averages 354 inches annually vs Park City\'s 360, but Vail\'s back bowls hold powder longer.' },
      { name: 'Beginner Friendly', winner: 1, explanation: 'Park City has more gentle terrain and a dedicated learning area with magic carpets.' },
      { name: 'Expert Terrain', winner: 2, explanation: 'Vail\'s legendary Back Bowls and Blue Sky Basin offer unmatched advanced skiing.' },
      { name: 'Value', winner: 1, explanation: 'Park City lodging runs 15-25% cheaper than Vail, with more mid-range options.' },
      { name: 'Après-Ski', winner: 2, explanation: 'Vail Village is purpose-built for après with world-class restaurants and nightlife.' },
    ]
  },
  {
    slug: 'whistler-vs-vail',
    destination1: 'whistler-blackcomb',
    destination2: 'vail',
    title: 'Whistler vs Vail: North America\'s Best Ski Resorts Compared',
    description: 'Whistler Blackcomb and Vail are two of the most iconic ski resorts. Here\'s how they compare.',
    verdict: 'Whistler wins on raw size and vertical, Vail wins on sunshine and village charm.',
    categories: [
      { name: 'Terrain Size', winner: 1, explanation: 'Whistler Blackcomb is the largest ski resort in North America at 8,171 acres.' },
      { name: 'Vertical Drop', winner: 1, explanation: 'Whistler\'s 5,280 feet of vertical dwarfs Vail\'s 3,450 feet.' },
      { name: 'Snow Quality', winner: 0, explanation: 'Vail gets drier Colorado powder while Whistler gets heavier Pacific snow — both excellent.' },
      { name: 'Weather', winner: 2, explanation: 'Vail averages 300 sunny days per year. Whistler sees far more cloud and rain.' },
      { name: 'Village', winner: 0, explanation: 'Both have excellent pedestrian villages with dining, shopping, and nightlife.' },
      { name: 'Value', winner: 1, explanation: 'With the Canadian dollar discount, Whistler can be more affordable for US visitors.' },
    ]
  },
  {
    slug: 'breckenridge-vs-keystone',
    destination1: 'breckenridge',
    destination2: 'keystone',
    title: 'Breckenridge vs Keystone: Which Summit County Resort Wins?',
    description: 'Two popular Summit County resorts just 20 minutes apart. Which one should you choose?',
    verdict: 'Breckenridge wins for town atmosphere and expert terrain, Keystone for families and night skiing.',
    categories: [
      { name: 'Town Atmosphere', winner: 1, explanation: 'Breckenridge has a historic Main Street with 200+ shops, bars and restaurants.' },
      { name: 'Family Friendly', winner: 2, explanation: 'Keystone has a dedicated kids ski school, tubing hill, and family-oriented village.' },
      { name: 'Night Skiing', winner: 2, explanation: 'Keystone is the only Summit County resort offering night skiing.' },
      { name: 'Expert Terrain', winner: 1, explanation: 'Breckenridge\'s Peak 6, 7, and 8 offer serious above-treeline terrain.' },
      { name: 'Crowds', winner: 2, explanation: 'Keystone typically has shorter lift lines than popular Breckenridge.' },
      { name: 'Value', winner: 2, explanation: 'Keystone lodging and dining run about 20% cheaper than Breckenridge.' },
    ]
  },
  {
    slug: 'jackson-hole-vs-big-sky',
    destination1: 'jackson-hole',
    destination2: 'big-sky',
    title: 'Jackson Hole vs Big Sky: Which Mountain Is Right for You?',
    description: 'Two legendary Rocky Mountain resorts compared on terrain, snow, and overall experience.',
    verdict: 'Jackson Hole wins for expert terrain and town character, Big Sky for space and no crowds.',
    categories: [
      { name: 'Expert Terrain', winner: 1, explanation: 'Jackson Hole\'s Corbet\'s Couloir and continuous steeps are legendary.' },
      { name: 'Terrain Size', winner: 2, explanation: 'Big Sky is 5,800 acres with the Lone Mountain Tram accessing extreme terrain.' },
      { name: 'Crowds', winner: 2, explanation: 'Big Sky averages under 2 skiers per acre — one of the least crowded in North America.' },
      { name: 'Town', winner: 1, explanation: 'Jackson\'s Town Square and restaurant scene far surpass Big Sky\'s base area.' },
      { name: 'Snow', winner: 0, explanation: 'Both average 400+ inches annually with excellent powder quality.' },
      { name: 'Beginner Friendly', winner: 2, explanation: 'Big Sky has more gentle terrain and a less intimidating learning environment.' },
    ]
  },
  {
    slug: 'aspen-vs-telluride',
    destination1: 'aspen-snowmass',
    destination2: 'telluride',
    title: 'Aspen vs Telluride: Colorado\'s Most Iconic Ski Towns',
    description: 'Two of Colorado\'s most beautiful and exclusive ski destinations go head to head.',
    verdict: 'Aspen wins on terrain variety and nightlife, Telluride wins on charm and value.',
    categories: [
      { name: 'Terrain Variety', winner: 1, explanation: 'Aspen Snowmass spans 4 mountains and 5,527 acres with terrain for every level.' },
      { name: 'Town Charm', winner: 2, explanation: 'Telluride\'s box canyon setting and free gondola to Mountain Village are magical.' },
      { name: 'Vertical Drop', winner: 2, explanation: 'Telluride\'s 4,425 feet of vertical is among the highest in North America.' },
      { name: 'Nightlife', winner: 1, explanation: 'Aspen\'s après scene and nightlife are legendary and unmatched in Colorado.' },
      { name: 'Value', winner: 2, explanation: 'Telluride lodging runs 20-30% less than Aspen, with more affordable dining.' },
      { name: 'Accessibility', winner: 1, explanation: 'Aspen has a larger airport with more direct flights from major cities.' },
    ]
  },
  {
    slug: 'mammoth-vs-palisades-tahoe',
    destination1: 'mammoth-mountain',
    destination2: 'palisades-tahoe',
    title: 'Mammoth Mountain vs Palisades Tahoe: California\'s Best Skiing',
    description: 'California\'s two premier ski destinations compared for terrain, snow, and overall experience.',
    verdict: 'Mammoth wins for season length and consistent snow, Palisades for terrain and Lake Tahoe views.',
    categories: [
      { name: 'Season Length', winner: 1, explanation: 'Mammoth regularly stays open into June or July, the longest season in California.' },
      { name: 'Snow Quality', winner: 1, explanation: 'Mammoth\'s higher elevation means drier, lighter snow than Tahoe\'s Sierra cement.' },
      { name: 'Expert Terrain', winner: 2, explanation: 'Palisades\' KT-22 and the Palisades are among the most challenging in North America.' },
      { name: 'Scenery', winner: 2, explanation: 'Lake Tahoe views from the slopes are breathtaking and unique.' },
      { name: 'Terrain Size', winner: 2, explanation: 'Palisades Tahoe offers 6,000 acres across two mountains vs Mammoth\'s 3,500.' },
      { name: 'Nightlife', winner: 2, explanation: 'The Tahoe area has more dining and entertainment options than Mammoth.' },
    ]
  },
  {
    slug: 'stowe-vs-killington',
    destination1: 'stowe',
    destination2: 'killington',
    title: 'Stowe vs Killington: Vermont\'s Top Ski Resorts Compared',
    description: 'The two biggest names in Vermont skiing go head to head on terrain, town, and value.',
    verdict: 'Stowe wins on charm and terrain quality, Killington for size and value.',
    categories: [
      { name: 'Terrain Size', winner: 2, explanation: 'Killington is the largest ski area in the East with 1,509 acres and 155 trails.' },
      { name: 'Town Charm', winner: 1, explanation: 'Stowe Village is one of the most picturesque New England towns.' },
      { name: 'Snow Quality', winner: 0, explanation: 'Both make extensive use of snowmaking to supplement natural snow.' },
      { name: 'Season Length', winner: 2, explanation: 'Killington typically opens earliest and closes latest in the East.' },
      { name: 'Expert Terrain', winner: 1, explanation: 'Stowe\'s Front Four trails are the most challenging in the East.' },
      { name: 'Value', winner: 2, explanation: 'Killington lodging and lift tickets run about 15% cheaper than Stowe.' },
    ]
  },
  {
    slug: 'banff-vs-lake-louise',
    destination1: 'banff-sunshine',
    destination2: 'lake-louise',
    title: 'Banff Sunshine vs Lake Louise: Canadian Rockies Showdown',
    description: 'Two world-class Alberta ski resorts just 40 minutes apart. Which should you ski?',
    verdict: 'Sunshine wins for natural snow and season length, Lake Louise for size and scenery.',
    categories: [
      { name: 'Natural Snow', winner: 1, explanation: 'Banff Sunshine averages 30+ feet of natural snow — no snowmaking needed.' },
      { name: 'Terrain Size', winner: 2, explanation: 'Lake Louise offers 4,200 skiable acres across four mountain faces.' },
      { name: 'Scenery', winner: 2, explanation: 'Lake Louise\'s views of the Canadian Rockies and Victoria Glacier are iconic.' },
      { name: 'Season Length', winner: 1, explanation: 'Sunshine typically has the longest season in the Canadian Rockies.' },
      { name: 'Expert Terrain', winner: 2, explanation: 'Lake Louise\'s back bowls and Summit Platter offer more sustained expert runs.' },
      { name: 'Accessibility', winner: 0, explanation: 'Both are easily accessible from Calgary (90 min and 2 hours respectively).' },
    ]
  },
  {
    slug: 'park-city-vs-deer-valley',
    destination1: 'park-city',
    destination2: 'deer-valley',
    title: 'Park City vs Deer Valley: Utah\'s Premier Resorts Compared',
    description: 'Two neighboring Utah ski resorts with very different personalities. Which is your style?',
    verdict: 'Park City wins for terrain and value, Deer Valley for luxury and grooming.',
    categories: [
      { name: 'Terrain Size', winner: 1, explanation: 'Park City\'s 7,300 acres dwarf Deer Valley\'s 2,026 acres.' },
      { name: 'Grooming', winner: 2, explanation: 'Deer Valley is famous for immaculate grooming and limited daily skier numbers.' },
      { name: 'Luxury', winner: 2, explanation: 'Deer Valley\'s on-mountain dining and service are among the best in North America.' },
      { name: 'Value', winner: 1, explanation: 'Park City lift tickets and lodging cost significantly less than Deer Valley.' },
      { name: 'Expert Terrain', winner: 1, explanation: 'Park City\'s Jupiter Bowl and McConkey\'s offer more challenging terrain.' },
      { name: 'Snowboarding', winner: 1, explanation: 'Deer Valley does not allow snowboarding. Park City welcomes all riders.' },
    ]
  },
  {
    slug: 'snowbird-vs-alta',
    destination1: 'snowbird',
    destination2: 'alta',
    title: 'Snowbird vs Alta: Little Cottonwood Canyon Rivals',
    description: 'Two legendary Utah powder destinations share one canyon but offer very different experiences.',
    verdict: 'Snowbird wins for vertical and terrain, Alta for snow quality and old-school vibe.',
    categories: [
      { name: 'Vertical Drop', winner: 1, explanation: 'Snowbird\'s 3,240 feet of vertical accessed by the Aerial Tram is unmatched.' },
      { name: 'Snow Quality', winner: 0, explanation: 'Both average 500+ inches of Utah\'s famous Greatest Snow on Earth.' },
      { name: 'Atmosphere', winner: 2, explanation: 'Alta has maintained its old-school, no-frills ski culture since 1938.' },
      { name: 'Modern Amenities', winner: 1, explanation: 'Snowbird\'s base area has more dining, shopping, and lodging options.' },
      { name: 'Snowboarding', winner: 1, explanation: 'Alta is one of the last resorts that bans snowboarding. Snowbird welcomes all.' },
      { name: 'Terrain Variety', winner: 1, explanation: 'Snowbird offers more sustained vertical runs and varied terrain.' },
    ]
  },
  {
    slug: 'vail-vs-breckenridge',
    destination1: 'vail',
    destination2: 'breckenridge',
    title: 'Vail vs Breckenridge: Colorado\'s Best Ski Resort?',
    description: 'Two of Colorado\'s most popular ski resorts compared on every metric that matters.',
    verdict: 'Vail wins for terrain and après-ski, Breckenridge for town character and accessibility.',
    categories: [
      { name: 'Terrain Size', winner: 1, explanation: 'Vail\'s 5,317 acres and legendary Back Bowls are significantly larger than Breck\'s 2,908.' },
      { name: 'Town Character', winner: 2, explanation: 'Breckenridge\'s authentic 1860s mining town has more character than Vail\'s purpose-built village.' },
      { name: 'Accessibility', winner: 2, explanation: 'Breckenridge is 20 minutes closer to Denver than Vail on I-70.' },
      { name: 'Expert Terrain', winner: 1, explanation: 'Vail\'s Back Bowls and Blue Sky Basin offer more expert acreage.' },
      { name: 'High Altitude Terrain', winner: 2, explanation: 'Breckenridge\'s Imperial Bowl at 12,998 feet is the highest lift-served terrain in North America.' },
      { name: 'Value', winner: 2, explanation: 'Breckenridge lodging and dining run 10-20% cheaper than Vail.' },
    ]
  },
  {
    slug: 'whistler-vs-banff',
    destination1: 'whistler-blackcomb',
    destination2: 'banff-sunshine',
    title: 'Whistler vs Banff: Canada\'s Best Ski Destination?',
    description: 'Western Canada\'s two most famous ski destinations compared for terrain, snow, and experience.',
    verdict: 'Whistler wins for terrain size and village, Banff for natural snow and multi-resort access.',
    categories: [
      { name: 'Terrain Size', winner: 1, explanation: 'Whistler Blackcomb\'s 8,171 acres is nearly 2.5x Banff Sunshine\'s 3,358.' },
      { name: 'Natural Snow', winner: 2, explanation: 'Banff Sunshine averages 30 feet of dry, cold Alberta powder.' },
      { name: 'Village', winner: 1, explanation: 'Whistler Village is one of the world\'s premier ski resort villages.' },
      { name: 'Multi-Resort Access', winner: 2, explanation: 'The SkiBig3 pass covers Sunshine, Lake Louise, and Mt Norquay — 8,000+ acres total.' },
      { name: 'Scenery', winner: 2, explanation: 'The Canadian Rockies around Banff are among the most spectacular mountains on Earth.' },
      { name: 'Accessibility', winner: 1, explanation: 'Vancouver airport to Whistler is 90 minutes. Calgary to Banff is also 90, but fewer international flights.' },
    ]
  },
  {
    slug: 'heavenly-vs-palisades-tahoe',
    destination1: 'heavenly',
    destination2: 'palisades-tahoe',
    title: 'Heavenly vs Palisades Tahoe: Lake Tahoe\'s Best Skiing',
    description: 'The two biggest ski resorts at Lake Tahoe compared for terrain, views, and nightlife.',
    verdict: 'Heavenly wins for views and nightlife (South Lake Tahoe), Palisades for expert terrain.',
    categories: [
      { name: 'Views', winner: 1, explanation: 'Heavenly\'s lake views from 10,000 feet are among the most stunning in skiing.' },
      { name: 'Expert Terrain', winner: 2, explanation: 'Palisades\' KT-22 and Granite Chief are legendary expert mountains.' },
      { name: 'Terrain Size', winner: 2, explanation: 'Palisades Tahoe spans 6,000 acres across two connected mountains.' },
      { name: 'Nightlife', winner: 1, explanation: 'South Lake Tahoe\'s casinos and entertainment far surpass North Shore options.' },
      { name: 'Snow Quality', winner: 0, explanation: 'Both receive similar Sierra snowfall, though Palisades\' higher lifts can be slightly drier.' },
      { name: 'Family Friendly', winner: 1, explanation: 'Heavenly has more gentle terrain and a great kids\' program.' },
    ]
  },
  {
    slug: 'steamboat-vs-winter-park',
    destination1: 'steamboat',
    destination2: 'winter-park',
    title: 'Steamboat vs Winter Park: Colorado\'s Best Value Ski Resorts',
    description: 'Two Colorado favorites known for great snow and lower prices than the I-70 corridor.',
    verdict: 'Steamboat wins for town charm and champagne powder, Winter Park for proximity to Denver.',
    categories: [
      { name: 'Snow Quality', winner: 1, explanation: 'Steamboat trademarked "Champagne Powder" — its light, dry snow is legendary.' },
      { name: 'Town', winner: 1, explanation: 'Steamboat\'s authentic Western ranching town has more character than Winter Park\'s base.' },
      { name: 'Proximity to Denver', winner: 2, explanation: 'Winter Park is 90 minutes from Denver via I-70 and the Moffat Tunnel. Steamboat is 3+ hours.' },
      { name: 'Terrain Variety', winner: 0, explanation: 'Both offer ~3,000 acres with good terrain distribution across all levels.' },
      { name: 'Tree Skiing', winner: 1, explanation: 'Steamboat\'s aspens and glades are among the best tree skiing in Colorado.' },
      { name: 'Value', winner: 2, explanation: 'Winter Park season passes and day tickets tend to run slightly cheaper.' },
    ]
  },
  {
    slug: 'park-city-vs-jackson-hole',
    destination1: 'park-city',
    destination2: 'jackson-hole',
    title: 'Park City vs Jackson Hole: Which Western Resort to Choose?',
    description: 'A family-friendly mega-resort vs one of the steepest mountains in North America.',
    verdict: 'Park City for families and intermediates, Jackson Hole for experts and adventure seekers.',
    categories: [
      { name: 'Terrain Size', winner: 1, explanation: 'Park City\'s 7,300 acres is nearly 3x Jackson Hole\'s 2,500 acres.' },
      { name: 'Expert Terrain', winner: 2, explanation: 'Jackson Hole\'s continuous steeps, Corbet\'s Couloir, and backcountry access are legendary.' },
      { name: 'Family Friendly', winner: 1, explanation: 'Park City has far more gentle terrain, better kids programs, and easier access.' },
      { name: 'Town Character', winner: 2, explanation: 'Jackson\'s western town square, elk refuge, and Grand Teton views are unforgettable.' },
      { name: 'Snow Quality', winner: 2, explanation: 'Jackson Hole averages 459 inches of light, dry Teton powder annually.' },
      { name: 'Accessibility', winner: 1, explanation: 'Park City is 35 minutes from Salt Lake City\'s major international airport.' },
    ]
  },
]

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug)
}

export function getAllComparisonSlugs(): string[] {
  return comparisons.map((c) => c.slug)
}

export function getComparisonsForDestination(destinationSlug: string): Comparison[] {
  return comparisons.filter(
    (c) => c.destination1 === destinationSlug || c.destination2 === destinationSlug
  )
}
