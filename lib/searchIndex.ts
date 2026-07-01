import { skiDestinations } from './destinations'
import { nationalParks } from './national-parks'
import { comparisons } from './comparisons'
import { parkComparisons } from './park-comparisons'

export interface SearchItem {
  title: string
  description: string
  category: 'Resort' | 'Park' | 'Guide' | 'Comparison' | 'Gear' | 'Budget' | 'Travel'
  url: string
}

// Guide data hardcoded for client-side use (guides.ts uses fs and cannot run in the browser)
const guideEntries: { slug: string; title: string; description: string; category: string }[] = [
  // Ski destination guides
  { slug: 'vail', title: 'Vail Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Vail ski trip with our insider guide to the best runs, hotels near Vail Village, and where to eat after a day in the legendary Back Bowls.', category: 'Ski' },
  { slug: 'breckenridge', title: 'Breckenridge Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Breckenridge ski trip with our insider guide to the best runs, hotels on Main Street, and where to eat in this historic mining town.', category: 'Ski' },
  { slug: 'aspen-snowmass', title: 'Aspen Snowmass Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Aspen Snowmass ski trip with our insider guide to four mountains, luxury hotels, and world-class dining.', category: 'Ski' },
  { slug: 'steamboat', title: 'Steamboat Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Steamboat ski trip with our insider guide to Champagne Powder, western charm, and hot springs.', category: 'Ski' },
  { slug: 'telluride', title: 'Telluride Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Telluride ski trip with our insider guide to box canyon skiing, the free gondola, and Mountain Village.', category: 'Ski' },
  { slug: 'keystone', title: 'Keystone Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Keystone ski trip with our insider guide to night skiing, family terrain, and River Run Village.', category: 'Ski' },
  { slug: 'copper-mountain', title: 'Copper Mountain Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Copper Mountain ski trip with our insider guide to naturally divided terrain and Summit County value.', category: 'Ski' },
  { slug: 'winter-park', title: 'Winter Park Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Winter Park ski trip with our insider guide to Mary Jane bumps, proximity to Denver, and local character.', category: 'Ski' },
  { slug: 'park-city', title: 'Park City Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Park City ski trip with our insider guide to the largest resort in the US, historic Main Street, and Utah powder.', category: 'Ski' },
  { slug: 'deer-valley', title: 'Deer Valley Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Deer Valley ski trip with our insider guide to luxury groomed runs, on-mountain dining, and limited ticket sales.', category: 'Ski' },
  { slug: 'snowbird', title: 'Snowbird Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Snowbird ski trip with our insider guide to steep terrain, the Aerial Tram, and Greatest Snow on Earth.', category: 'Ski' },
  { slug: 'alta', title: 'Alta Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Alta ski trip with our insider guide to a skiers-only mountain with legendary powder and old-school charm.', category: 'Ski' },
  { slug: 'brighton', title: 'Brighton Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Brighton ski trip with our insider guide to night skiing, terrain parks, and Utah\'s best-kept secret.', category: 'Ski' },
  { slug: 'sundance', title: 'Sundance Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Sundance ski trip with our insider guide to Robert Redford\'s artistic mountain retreat.', category: 'Ski' },
  { slug: 'mammoth-mountain', title: 'Mammoth Mountain Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Mammoth Mountain ski trip with our insider guide to California\'s snowfall king and epic spring skiing.', category: 'Ski' },
  { slug: 'palisades-tahoe', title: 'Palisades Tahoe Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Palisades Tahoe ski trip with our insider guide to Olympic history, KT-22, and big-mountain skiing.', category: 'Ski' },
  { slug: 'heavenly', title: 'Heavenly Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Heavenly ski trip with our insider guide to skiing two states with Lake Tahoe views.', category: 'Ski' },
  { slug: 'northstar', title: 'Northstar Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Northstar ski trip with our insider guide to Tahoe\'s most family-friendly luxury resort.', category: 'Ski' },
  { slug: 'big-sky', title: 'Big Sky Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Big Sky ski trip with our insider guide to the biggest skiing in America with zero crowds.', category: 'Ski' },
  { slug: 'jackson-hole', title: 'Jackson Hole Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Jackson Hole ski trip with our insider guide to steep terrain, Corbet\'s Couloir, and the Teton Range.', category: 'Ski' },
  { slug: 'stowe', title: 'Stowe Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Stowe ski trip with our insider guide to the ski capital of the East, the Front Four, and Vermont charm.', category: 'Ski' },
  { slug: 'killington', title: 'Killington Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Killington ski trip with our insider guide to the Beast of the East\'s six peaks and long season.', category: 'Ski' },
  { slug: 'sunday-river', title: 'Sunday River Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Sunday River ski trip with our insider guide to eight peaks of reliable snow in the Maine mountains.', category: 'Ski' },
  { slug: 'sugarbush', title: 'Sugarbush Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Sugarbush ski trip with our insider guide to Vermont\'s best-kept secret in the Mad River Valley.', category: 'Ski' },
  { slug: 'jay-peak', title: 'Jay Peak Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Jay Peak ski trip with our insider guide to the most snow in the East and family-friendly amenities.', category: 'Ski' },
  { slug: 'whistler-blackcomb', title: 'Whistler Blackcomb Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Whistler Blackcomb ski trip with our insider guide to North America\'s premier resort.', category: 'Ski' },
  { slug: 'banff-sunshine', title: 'Banff Sunshine Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Banff Sunshine ski trip with our insider guide to skiing on the Continental Divide.', category: 'Ski' },
  { slug: 'lake-louise', title: 'Lake Louise Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Lake Louise ski trip with our insider guide to skiing with the most stunning views in the world.', category: 'Ski' },
  { slug: 'mont-tremblant', title: 'Mont Tremblant Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Mont Tremblant ski trip with our insider guide to European-style skiing in eastern Canada.', category: 'Ski' },
  { slug: 'sun-peaks', title: 'Sun Peaks Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Sun Peaks ski trip with our insider guide to Canada\'s second-largest resort with small-town charm.', category: 'Ski' },
  { slug: 'arapahoe-basin', title: 'Arapahoe Basin Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Arapahoe Basin ski trip with our insider guide to the highest skiable terrain in North America and the longest Colorado season.', category: 'Ski' },
  { slug: 'crested-butte', title: 'Crested Butte Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Crested Butte ski trip with our insider guide to extreme terrain and a charming historic mining town.', category: 'Ski' },
  { slug: 'snowbasin', title: 'Snowbasin Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Snowbasin ski trip with our insider guide to the 2002 Olympic venue with uncrowded slopes in the Ogden area.', category: 'Ski' },
  { slug: 'kirkwood', title: 'Kirkwood Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Kirkwood ski trip with our insider guide to Tahoe\'s deepest powder and expert terrain.', category: 'Ski' },
  { slug: 'sugar-bowl', title: 'Sugar Bowl Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Sugar Bowl ski trip with our insider guide to the historic Donner Pass resort and big Sierra snowfall.', category: 'Ski' },
  { slug: 'whitefish', title: 'Whitefish Mountain Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Whitefish Mountain ski trip with our insider guide to the Glacier National Park gateway with great value.', category: 'Ski' },
  { slug: 'grand-targhee', title: 'Grand Targhee Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Grand Targhee ski trip with our insider guide to legendary powder on the quiet side of the Tetons.', category: 'Ski' },
  { slug: 'sun-valley', title: 'Sun Valley Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Sun Valley ski trip with our insider guide to America\'s first ski resort and world-class grooming.', category: 'Ski' },
  { slug: 'sugarloaf', title: 'Sugarloaf Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Sugarloaf ski trip with our insider guide to the only East Coast above-treeline skiing in Maine.', category: 'Ski' },
  { slug: 'bretton-woods', title: 'Bretton Woods Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Bretton Woods ski trip with our insider guide to New Hampshire\'s largest resort with Mt. Washington views.', category: 'Ski' },
  { slug: 'loon-mountain', title: 'Loon Mountain Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Loon Mountain ski trip with our insider guide to the White Mountains family favorite.', category: 'Ski' },
  { slug: 'mt-bachelor', title: 'Mt. Bachelor Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Mt. Bachelor ski trip with our insider guide to volcanic 360-degree terrain and dry Pacific powder.', category: 'Ski' },
  { slug: 'crystal-mountain', title: 'Crystal Mountain Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Crystal Mountain ski trip with our insider guide to Mt. Rainier views and Seattle\'s home mountain.', category: 'Ski' },
  { slug: 'stevens-pass', title: 'Stevens Pass Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Stevens Pass ski trip with our insider guide to deep Cascade snow and convenient Seattle access.', category: 'Ski' },
  { slug: 'taos', title: 'Taos Ski Valley Guide: Where to Stay, Eat & Ski', description: 'Plan your Taos Ski Valley trip with our insider guide to legendary steep terrain and Southwest culture.', category: 'Ski' },
  { slug: 'big-white', title: 'Big White Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Big White ski trip with our insider guide to Champagne powder and a family-friendly BC village.', category: 'Ski' },
  { slug: 'revelstoke', title: 'Revelstoke Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Revelstoke ski trip with our insider guide to the longest vertical drop in North America.', category: 'Ski' },
  { slug: 'fernie', title: 'Fernie Alpine Ski Guide: Where to Stay, Eat & Ski', description: 'Plan your Fernie ski trip with our insider guide to the legendary powder town in the Canadian Rockies.', category: 'Ski' },
  // Park destination guides
  { slug: 'yellowstone', title: 'Yellowstone Guide: Best Hikes, When to Visit & Where to Stay', description: 'Plan your trip to Yellowstone. Top hikes, best months to visit, where to stay, and essential tips for Wyoming.', category: 'Parks' },
  { slug: 'grand-teton', title: 'Grand Teton Guide: Best Hikes, When to Visit & Where to Stay', description: 'Plan your trip to Grand Teton. Top hikes, best months to visit, where to stay, and essential tips for Wyoming.', category: 'Parks' },
  { slug: 'glacier', title: 'Glacier National Park Guide: Best Hikes, When to Visit & Where to Stay', description: 'Plan your trip to Glacier National Park. Top hikes, best months to visit, where to stay, and essential tips for Montana.', category: 'Parks' },
  { slug: 'rocky-mountain', title: 'Rocky Mountain National Park Guide: Best Hikes, When to Visit & Where to Stay', description: 'Plan your trip to Rocky Mountain National Park. Top hikes, best months to visit, where to stay, and essential tips for Colorado.', category: 'Parks' },
  { slug: 'grand-canyon', title: 'Grand Canyon Guide: Best Hikes, When to Visit & Where to Stay', description: 'Plan your trip to the Grand Canyon. Top hikes, best months to visit, where to stay, and essential tips for Arizona.', category: 'Parks' },
  { slug: 'arches', title: 'Arches National Park Guide: Best Hikes, When to Visit & Where to Stay', description: 'Plan your trip to Arches National Park. Top hikes, best months to visit, where to stay, and essential tips for Utah.', category: 'Parks' },
  { slug: 'zion', title: 'Zion Guide: Best Hikes, When to Visit & Where to Stay', description: 'Plan your trip to Zion National Park. Top hikes, best months to visit, where to stay, and essential tips for Utah.', category: 'Parks' },
  { slug: 'bryce-canyon', title: 'Bryce Canyon Guide: Best Hikes, When to Visit & Where to Stay', description: 'Plan your trip to Bryce Canyon. Top hikes, best months to visit, where to stay, and essential tips for Utah.', category: 'Parks' },
  { slug: 'canyonlands', title: 'Canyonlands Guide: Best Hikes, When to Visit & Where to Stay', description: 'Plan your trip to Canyonlands. Top hikes, best months to visit, where to stay, and essential tips for Utah.', category: 'Parks' },
  { slug: 'joshua-tree', title: 'Joshua Tree Guide: Best Hikes, When to Visit & Where to Stay', description: 'Plan your trip to Joshua Tree. Top hikes, best months to visit, where to stay, and essential tips for California.', category: 'Parks' },
  { slug: 'saguaro', title: 'Saguaro National Park Guide: Best Hikes, When to Visit & Where to Stay', description: 'Plan your trip to Saguaro National Park. Top hikes, best months to visit, where to stay, and essential tips for Arizona.', category: 'Parks' },
  { slug: 'yosemite', title: 'Yosemite Guide: Best Hikes, When to Visit & Where to Stay', description: 'Plan your trip to Yosemite. Top hikes, best months to visit, where to stay, and essential tips for California.', category: 'Parks' },
  { slug: 'sequoia-kings-canyon', title: 'Sequoia & Kings Canyon Guide: Best Hikes, When to Visit & Where to Stay', description: 'Plan your trip to Sequoia & Kings Canyon. Top hikes, best months to visit, where to stay, and essential tips for California.', category: 'Parks' },
  { slug: 'olympic', title: 'Olympic National Park Guide: Best Hikes, When to Visit & Where to Stay', description: 'Plan your trip to Olympic National Park. Top hikes, best months to visit, where to stay, and essential tips for Washington.', category: 'Parks' },
  { slug: 'mount-rainier', title: 'Mount Rainier Guide: Best Hikes, When to Visit & Where to Stay', description: 'Plan your trip to Mount Rainier. Top hikes, best months to visit, where to stay, and essential tips for Washington.', category: 'Parks' },
  { slug: 'great-smoky-mountains', title: 'Great Smoky Mountains Guide: Best Hikes, When to Visit & Where to Stay', description: 'Plan your trip to Great Smoky Mountains. Top hikes, best months to visit, where to stay, and essential tips for Tennessee and North Carolina.', category: 'Parks' },
  { slug: 'everglades', title: 'Everglades Guide: Best Trails, When to Visit & Where to Stay', description: 'Plan your trip to the Everglades. Best trails, best months to visit, where to stay, and essential tips for Florida.', category: 'Parks' },
  { slug: 'acadia', title: 'Acadia National Park Guide: Best Hikes, When to Visit & Where to Stay', description: 'Plan your trip to Acadia National Park. Top hikes, best months to visit, where to stay, and essential tips for Maine.', category: 'Parks' },
  { slug: 'denali', title: 'Denali National Park Guide: Best Hikes, When to Visit & Where to Stay', description: 'Plan your trip to Denali National Park. Top hikes, best months to visit, where to stay, and essential tips for Alaska.', category: 'Parks' },
  { slug: 'haleakala', title: 'Haleakala Guide: Best Hikes, When to Visit & Where to Stay', description: 'Plan your trip to Haleakala. Top hikes, best months to visit, where to stay, and essential tips for Hawaii.', category: 'Parks' },
  // Ski gear guides
  { slug: 'best-ski-goggles-2026', title: 'Best Ski Goggles 2026: Top Picks for Every Budget', description: 'Expert-tested ski goggle reviews for 2026. Compare lens tech, fit types, and fog resistance across 8 top picks.', category: 'Gear' },
  { slug: 'best-ski-base-layers-2026', title: 'Best Base Layers for Skiing 2026: Top Picks for Every Budget', description: 'Expert guide to the best ski base layers for 2026. Compare merino wool vs synthetic, weight ratings, and moisture-wicking performance.', category: 'Gear' },
  { slug: 'best-ski-helmets-2026', title: 'Best Ski Helmets 2026: Top Picks for Every Budget', description: 'Expert-reviewed ski helmets for 2026. Compare MIPS protection, ventilation, fit systems, and goggle compatibility.', category: 'Gear' },
  { slug: 'best-ski-jackets-2026', title: 'Best Ski Jackets 2026: Top Picks for Every Budget', description: 'Expert-tested ski jacket reviews for 2026. Compare Gore-Tex waterproofing, insulation types, breathability, and features.', category: 'Gear' },
  { slug: 'ski-trip-packing-list-2026', title: 'Complete Ski Trip Packing List 2026: Everything You Need', description: 'The definitive ski trip packing list for 2026. Expert-organized guide covering essential gear, clothing layers, accessories, and travel tips.', category: 'Gear' },
  // Hiking gear guides
  { slug: 'best-hiking-boots-2026', title: 'Best Hiking Boots 2026: Top Picks for Every Trail', description: 'Expert-tested hiking boot reviews for 2026. Compare support, waterproofing, and comfort across 8 top picks for national park adventures.', category: 'Gear' },
  { slug: 'best-hiking-backpacks-2026', title: 'Best Hiking Backpacks 2026: Daypacks to Multi-Day', description: 'Expert guide to the best hiking backpacks for 2026. Compare capacity, comfort, and features across 8 top daypacks and multi-day packs.', category: 'Gear' },
  { slug: 'best-hiking-water-bottles-2026', title: 'Best Water Bottles & Hydration 2026 for Hiking', description: 'Stay hydrated on the trail with our expert picks for water bottles, hydration reservoirs, and filtration systems for 2026.', category: 'Gear' },
  { slug: 'best-hiking-sun-protection-2026', title: 'Best Sun Protection for Hiking 2026: Hats, Sunscreen & UPF Clothing', description: 'Protect yourself on the trail with expert-tested sun protection gear for hiking.', category: 'Gear' },
  { slug: 'national-park-packing-list-2026', title: 'Complete National Park Packing List 2026', description: 'The definitive packing list for national park trips. Expert-organized checklist with links to recommended gear.', category: 'Gear' },
  // Budget guides
  { slug: 'cheapest-ski-trips-colorado-2026', title: 'Cheapest Ski Trips in Colorado 2026: Budget-Friendly Mountain Getaways', description: 'Score affordable ski trips in Colorado without sacrificing quality. Lift ticket deals, budget lodging, cheap eats, and multi-resort pass strategies.', category: 'Budget' },
  { slug: 'ski-trip-budget-planner-2026', title: 'Ski Trip Budget Planner 2026: How to Budget for Your Next Ski Vacation', description: 'A complete cost breakdown for planning a ski trip in 2026. Learn how to budget for lift tickets, lodging, gear rental, food, and travel.', category: 'Budget' },
  { slug: 'best-value-ski-resorts-2026', title: 'Best Value Ski Resorts in North America 2026: More Mountain for Your Money', description: 'Find the best value ski resorts in the US and Canada for 2026. Compare cost-per-acre, affordable lodging, and budget-friendly amenities.', category: 'Budget' },
  { slug: 'cheapest-national-park-trips-2026', title: 'Cheapest National Park Trips 2026: Budget-Friendly Adventures', description: 'Visit national parks without breaking the bank. Budget tips for camping, free entrance days, and affordable gateway towns.', category: 'Budget' },
  { slug: 'national-park-budget-planner-2026', title: 'National Park Budget Planner 2026: How to Budget Your Trip', description: 'A complete cost breakdown for national park trips in 2026. Budget for entrance fees, lodging, food, gas, and gear.', category: 'Budget' },
  { slug: 'america-the-beautiful-pass-guide-2026', title: 'America the Beautiful Pass 2026: Is It Worth It?', description: 'Everything you need to know about the America the Beautiful annual park pass. Cost analysis, where to buy, and which parks it covers.', category: 'Budget' },
  // Travel guides
  { slug: 'flying-with-ski-gear-2026', title: 'Flying with Ski Gear 2026: Airline Policies, Packing Tips & Shipping Alternatives', description: 'Everything you need to know about flying with ski equipment in 2026. Airline bag fees, TSA rules, packing tips, and shipping alternatives.', category: 'Travel' },
  { slug: 'best-ski-road-trips-2026', title: 'Best Ski Road Trips in the US 2026: 5 Epic Routes for Every Skier', description: 'Discover the 5 best ski road trip routes across the US in 2026. Multi-resort itineraries through Colorado, Utah, Tahoe, Vermont, and Montana/Wyoming.', category: 'Travel' },
  { slug: 'first-ski-trip-guide-2026', title: 'Planning Your First Ski Trip 2026: A Complete Beginner\'s Guide', description: 'Everything first-time skiers need to know for planning a ski trip in 2026. When to go, what to rent vs buy, choosing a resort, and booking lessons.', category: 'Travel' },
  { slug: 'best-national-park-road-trips-2026', title: 'Best National Park Road Trips 2026: 5 Epic Routes', description: 'Discover the 5 best national park road trip routes across the US. Multi-park itineraries through Utah, California, the Pacific Northwest, and more.', category: 'Travel' },
  { slug: 'first-national-park-trip-guide-2026', title: 'Planning Your First National Park Trip: A Beginner\'s Guide', description: 'Everything first-time national park visitors need to know. How to choose a park, make reservations, pack appropriately, and stay safe.', category: 'Travel' },
  { slug: 'national-park-camping-guide-2026', title: 'National Park Camping Guide 2026: Reservations, Gear & Tips', description: 'Complete guide to camping in national parks. Recreation.gov reservation tips, essential gear, and campground recommendations.', category: 'Travel' },
]

export function getSearchIndex(): SearchItem[] {
  const items: SearchItem[] = []

  // All 48 ski destinations
  for (const dest of skiDestinations) {
    items.push({
      title: dest.name,
      description: dest.tagline,
      category: 'Resort',
      url: `/ski/${dest.slug}`,
    })
  }

  // All national parks
  for (const park of nationalParks) {
    items.push({
      title: park.name,
      description: park.tagline,
      category: 'Park',
      url: `/parks/${park.slug}`,
    })
  }

  // All guides (ski + parks + gear + budget + travel)
  for (const guide of guideEntries) {
    const category = guide.category === 'Gear' || guide.category === 'Tips'
      ? 'Gear'
      : guide.category === 'Budget'
        ? 'Budget'
        : guide.category === 'Travel'
          ? 'Travel'
          : 'Guide'
    items.push({
      title: guide.title,
      description: guide.description,
      category,
      url: `/guides/${guide.slug}`,
    })
  }

  // All ski comparisons
  for (const comp of comparisons) {
    items.push({
      title: comp.title,
      description: comp.description,
      category: 'Comparison',
      url: `/ski/compare/${comp.slug}`,
    })
  }

  // All park comparisons
  for (const comp of parkComparisons) {
    items.push({
      title: comp.title,
      description: comp.description,
      category: 'Comparison',
      url: `/parks/compare/${comp.slug}`,
    })
  }

  return items
}
