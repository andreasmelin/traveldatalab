import { skiDestinations } from './destinations'
import { comparisons } from './comparisons'

export interface SearchItem {
  title: string
  description: string
  category: 'Resort' | 'Guide' | 'Comparison' | 'Gear'
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
  // Gear guides
  { slug: 'best-ski-goggles-2026', title: 'Best Ski Goggles 2026: Top Picks for Every Budget', description: 'Expert-tested ski goggle reviews for 2026. Compare lens tech, fit types, and fog resistance across 8 top picks.', category: 'Gear' },
  { slug: 'best-ski-base-layers-2026', title: 'Best Base Layers for Skiing 2026: Top Picks for Every Budget', description: 'Expert guide to the best ski base layers for 2026. Compare merino wool vs synthetic, weight ratings, and moisture-wicking performance.', category: 'Gear' },
  { slug: 'best-ski-helmets-2026', title: 'Best Ski Helmets 2026: Top Picks for Every Budget', description: 'Expert-reviewed ski helmets for 2026. Compare MIPS protection, ventilation, fit systems, and goggle compatibility.', category: 'Gear' },
  { slug: 'best-ski-jackets-2026', title: 'Best Ski Jackets 2026: Top Picks for Every Budget', description: 'Expert-tested ski jacket reviews for 2026. Compare Gore-Tex waterproofing, insulation types, breathability, and features.', category: 'Gear' },
  { slug: 'ski-trip-packing-list-2026', title: 'Complete Ski Trip Packing List 2026: Everything You Need', description: 'The definitive ski trip packing list for 2026. Expert-organized guide covering essential gear, clothing layers, accessories, and travel tips.', category: 'Gear' },
  // Budget guides
  { slug: 'cheapest-ski-trips-colorado-2026', title: 'Cheapest Ski Trips in Colorado 2026: Budget-Friendly Mountain Getaways', description: 'Score affordable ski trips in Colorado without sacrificing quality. Lift ticket deals, budget lodging, cheap eats, and multi-resort pass strategies.', category: 'Budget' },
  { slug: 'ski-trip-budget-planner-2026', title: 'Ski Trip Budget Planner 2026: How to Budget for Your Next Ski Vacation', description: 'A complete cost breakdown for planning a ski trip in 2026. Learn how to budget for lift tickets, lodging, gear rental, food, and travel.', category: 'Budget' },
  { slug: 'best-value-ski-resorts-2026', title: 'Best Value Ski Resorts in North America 2026: More Mountain for Your Money', description: 'Find the best value ski resorts in the US and Canada for 2026. Compare cost-per-acre, affordable lodging, and budget-friendly amenities.', category: 'Budget' },
  // Travel guides
  { slug: 'flying-with-ski-gear-2026', title: 'Flying with Ski Gear 2026: Airline Policies, Packing Tips & Shipping Alternatives', description: 'Everything you need to know about flying with ski equipment in 2026. Airline bag fees, TSA rules, packing tips, and shipping alternatives.', category: 'Travel' },
  { slug: 'best-ski-road-trips-2026', title: 'Best Ski Road Trips in the US 2026: 5 Epic Routes for Every Skier', description: 'Discover the 5 best ski road trip routes across the US in 2026. Multi-resort itineraries through Colorado, Utah, Tahoe, Vermont, and Montana/Wyoming.', category: 'Travel' },
  { slug: 'first-ski-trip-guide-2026', title: 'Planning Your First Ski Trip 2026: A Complete Beginner\'s Guide', description: 'Everything first-time skiers need to know for planning a ski trip in 2026. When to go, what to rent vs buy, choosing a resort, and booking lessons.', category: 'Travel' },
]

export function getSearchIndex(): SearchItem[] {
  const items: SearchItem[] = []

  // All 30 ski destinations
  for (const dest of skiDestinations) {
    items.push({
      title: dest.name,
      description: dest.tagline,
      category: 'Resort',
      url: `/ski/${dest.slug}`,
    })
  }

  // All guides (ski + gear)
  for (const guide of guideEntries) {
    const category = guide.category === 'Gear' || guide.category === 'Tips' ? 'Gear' : 'Guide'
    items.push({
      title: guide.title,
      description: guide.description,
      category,
      url: `/guides/${guide.slug}`,
    })
  }

  // All comparisons
  for (const comp of comparisons) {
    items.push({
      title: comp.title,
      description: comp.description,
      category: 'Comparison',
      url: `/ski/compare/${comp.slug}`,
    })
  }

  return items
}
