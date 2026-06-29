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
  {
    slug: 'mont-tremblant-vs-stowe',
    destination1: 'mont-tremblant',
    destination2: 'stowe',
    title: 'Mont-Tremblant vs Stowe: Best Eastern Ski Resort?',
    description: 'Quebec\'s crown jewel takes on Vermont\'s most iconic mountain in a battle of Eastern skiing.',
    verdict: 'Stowe wins for terrain quality and challenge, Mont-Tremblant for its European-style village and family appeal.',
    categories: [
      { name: 'Village Atmosphere', winner: 1, explanation: 'Tremblant\'s pedestrian village is modeled after old Quebec City with colorful buildings and a lively base area.' },
      { name: 'Expert Terrain', winner: 2, explanation: 'Stowe\'s Front Four — Starr, Liftline, National, and Goat — are the most challenging trails in the East.' },
      { name: 'Family Friendly', winner: 1, explanation: 'Tremblant offers excellent kids programs, a heated outdoor pool, and a family-oriented village.' },
      { name: 'Snow Quality', winner: 2, explanation: 'Stowe averages 333 inches annually vs Tremblant\'s 250, with better snowmaking infrastructure.' },
      { name: 'Terrain Size', winner: 0, explanation: 'Both offer similar skiable terrain — Stowe at 485 acres across two mountains, Tremblant at 665 acres across four slopes.' },
      { name: 'Value', winner: 1, explanation: 'The favorable exchange rate on the Canadian dollar makes Tremblant significantly cheaper for US visitors.' },
    ]
  },
  {
    slug: 'jackson-hole-vs-telluride',
    destination1: 'jackson-hole',
    destination2: 'telluride',
    title: 'Jackson Hole vs Telluride: Expert Mountain Showdown',
    description: 'Two of North America\'s most challenging ski mountains compared for steeps, snow, and atmosphere.',
    verdict: 'Jackson Hole wins for sheer steepness and snow quantity, Telluride for vertical drop and town charm.',
    categories: [
      { name: 'Expert Terrain', winner: 1, explanation: 'Jackson Hole\'s continuous steeps, Corbet\'s Couloir, and expansive backcountry access set the standard for expert skiing.' },
      { name: 'Vertical Drop', winner: 2, explanation: 'Telluride\'s 4,425 feet of vertical is one of the highest in North America, surpassing Jackson\'s 4,139 feet.' },
      { name: 'Snow Quality', winner: 1, explanation: 'Jackson Hole averages 459 inches of light Teton powder vs Telluride\'s 309 inches annually.' },
      { name: 'Town Charm', winner: 2, explanation: 'Telluride\'s stunning box canyon setting, free gondola, and historic Victorian downtown are hard to beat.' },
      { name: 'Crowds', winner: 2, explanation: 'Telluride\'s remote location in southwest Colorado keeps crowds significantly lower than Jackson Hole.' },
      { name: 'Accessibility', winner: 1, explanation: 'Jackson Hole airport is 20 minutes from the resort with major airline service. Telluride\'s small airport has limited flights.' },
    ]
  },
  {
    slug: 'mammoth-vs-steamboat',
    destination1: 'mammoth-mountain',
    destination2: 'steamboat',
    title: 'Mammoth Mountain vs Steamboat: Season Length vs Champagne Powder',
    description: 'California\'s longest-running season takes on Colorado\'s most celebrated powder snow.',
    verdict: 'Mammoth wins for season length and terrain challenge, Steamboat for snow quality and Western town charm.',
    categories: [
      { name: 'Season Length', winner: 1, explanation: 'Mammoth regularly stays open into June or July thanks to its massive snowfall and high elevation.' },
      { name: 'Snow Quality', winner: 2, explanation: 'Steamboat\'s trademarked Champagne Powder is lighter and drier than Mammoth\'s heavier Sierra snowfall.' },
      { name: 'Town Character', winner: 2, explanation: 'Steamboat Springs is an authentic Western ranching town with hot springs and a genuine local community.' },
      { name: 'Terrain Challenge', winner: 1, explanation: 'Mammoth\'s 3,500 acres include challenging chutes, cornices, and above-treeline bowls across a volcanic peak.' },
      { name: 'Tree Skiing', winner: 2, explanation: 'Steamboat\'s legendary aspen glades offer some of the best tree skiing in North America.' },
      { name: 'Accessibility', winner: 0, explanation: 'Both require a meaningful drive — Mammoth is 5 hours from LA, Steamboat is 3 hours from Denver.' },
    ]
  },
  {
    slug: 'park-city-vs-whistler',
    destination1: 'park-city',
    destination2: 'whistler-blackcomb',
    title: 'Park City vs Whistler Blackcomb: Mega-Resort Face-Off',
    description: 'The two largest ski resorts in North America compared on terrain, village, snow, and overall experience.',
    verdict: 'Whistler wins on vertical, village atmosphere, and expert terrain. Park City wins on sunshine, accessibility, and value.',
    categories: [
      { name: 'Terrain Size', winner: 2, explanation: 'Whistler Blackcomb spans 8,171 acres vs Park City\'s 7,300, both among the largest in North America.' },
      { name: 'Vertical Drop', winner: 2, explanation: 'Whistler\'s 5,280 feet of vertical is massive compared to Park City\'s 3,226 feet.' },
      { name: 'Weather', winner: 1, explanation: 'Park City enjoys 300+ sunny days a year. Whistler\'s coastal climate means far more overcast and rainy days.' },
      { name: 'Village', winner: 2, explanation: 'Whistler Village is a world-renowned pedestrian village purpose-built for the ski experience.' },
      { name: 'Accessibility', winner: 1, explanation: 'Park City is 35 minutes from Salt Lake City\'s major hub airport. Whistler is a 2-hour drive from Vancouver.' },
      { name: 'Value', winner: 1, explanation: 'Park City lodging and dining are generally more affordable than Whistler, even accounting for the exchange rate.' },
    ]
  },
  {
    slug: 'stowe-vs-vail',
    destination1: 'stowe',
    destination2: 'vail',
    title: 'Stowe vs Vail: East vs West Classic',
    description: 'The pinnacle of Eastern skiing meets the crown jewel of Colorado in an East vs West showdown.',
    verdict: 'Vail wins decisively on terrain size, snow, and vertical. Stowe holds its own on charm and New England character.',
    categories: [
      { name: 'Terrain Size', winner: 2, explanation: 'Vail\'s 5,317 acres are more than 10 times Stowe\'s 485 acres of skiable terrain.' },
      { name: 'Snow Quality', winner: 2, explanation: 'Vail averages 354 inches of light Colorado powder vs Stowe\'s 333 inches of heavier New England snow.' },
      { name: 'Town Charm', winner: 1, explanation: 'Stowe\'s classic New England village with its white church steeple is among the most charming ski towns in America.' },
      { name: 'Expert Terrain', winner: 0, explanation: 'Both excel — Stowe\'s Front Four are the East\'s toughest, while Vail\'s Back Bowls are legendary in the West.' },
      { name: 'Vertical Drop', winner: 2, explanation: 'Vail offers 3,450 feet of vertical compared to Stowe\'s 2,160 feet.' },
      { name: 'Accessibility', winner: 1, explanation: 'Stowe is accessible from Boston and major Northeast cities. Vail requires a flight to Denver plus a 2-hour drive.' },
    ]
  },
  {
    slug: 'mt-bachelor-vs-mammoth-mountain',
    destination1: 'mt-bachelor',
    destination2: 'mammoth-mountain',
    title: 'Mt Bachelor vs Mammoth Mountain: Volcano Skiing Compared',
    description: 'Two iconic West Coast ski areas built on volcanic peaks compared for terrain, snow, and experience.',
    verdict: 'Mammoth wins for terrain size and season length, Mt Bachelor for value and 360-degree skiing.',
    categories: [
      { name: 'Terrain Layout', winner: 1, explanation: 'Mt Bachelor offers true 360-degree skiing on its volcanic cone, providing a uniquely varied experience from every angle.' },
      { name: 'Terrain Size', winner: 2, explanation: 'Mammoth\'s 3,500 acres and 150+ runs significantly exceed Mt Bachelor\'s 4,318 acres but with more sustained vertical.' },
      { name: 'Season Length', winner: 2, explanation: 'Mammoth routinely stays open into June or July, while Mt Bachelor typically closes in late May.' },
      { name: 'Crowds', winner: 1, explanation: 'Mt Bachelor\'s central Oregon location draws far fewer crowds than Mammoth, which serves the massive LA market.' },
      { name: 'Snow Quality', winner: 0, explanation: 'Both receive heavy Pacific snowfall — Mammoth averages 400 inches and Bachelor averages 462 inches annually.' },
      { name: 'Value', winner: 1, explanation: 'Bend, Oregon lodging and dining run 30-40% cheaper than Mammoth Lakes, with more affordable lift tickets.' },
    ]
  },
  {
    slug: 'taos-vs-crested-butte',
    destination1: 'taos',
    destination2: 'crested-butte',
    title: 'Taos vs Crested Butte: Steep and Uncrowded Gems',
    description: 'Two of the steepest, most soulful ski mountains in the Rockies compared for terrain, culture, and snow.',
    verdict: 'Taos wins for steep terrain and cultural richness, Crested Butte for terrain variety and town walkability.',
    categories: [
      { name: 'Expert Terrain', winner: 1, explanation: 'Taos\'s Kachina Peak at 12,481 feet features some of the steepest, most sustained expert terrain in New Mexico.' },
      { name: 'Town Character', winner: 0, explanation: 'Both are beloved for their authentic, uncommercial character — Taos for its adobe culture, Crested Butte for its Victorian mining town.' },
      { name: 'Terrain Variety', winner: 2, explanation: 'Crested Butte\'s 1,547 acres offer a broader range from gentle groomers to extreme terrain on the North Face.' },
      { name: 'Snow Quality', winner: 2, explanation: 'Crested Butte averages 300 inches of light Colorado powder vs Taos\'s 305 inches, but at a higher base elevation.' },
      { name: 'Crowds', winner: 1, explanation: 'Taos\'s remote location in northern New Mexico keeps it among the least crowded resorts in the West.' },
      { name: 'Accessibility', winner: 0, explanation: 'Both are remote — Taos is 2.5 hours from Albuquerque, Crested Butte is 4 hours from Denver or 30 minutes from Gunnison.' },
    ]
  },
  {
    slug: 'crystal-mountain-vs-stevens-pass',
    destination1: 'crystal-mountain',
    destination2: 'stevens-pass',
    title: 'Crystal Mountain vs Stevens Pass: Washington\'s Ski Rivalry',
    description: 'Washington state\'s two premier ski areas compared for terrain, snow, and overall experience.',
    verdict: 'Crystal Mountain wins for terrain size and views, Stevens Pass for accessibility and value.',
    categories: [
      { name: 'Terrain Size', winner: 1, explanation: 'Crystal Mountain offers 2,600 acres across a wide variety of terrain vs Stevens Pass\'s 1,125 acres.' },
      { name: 'Scenery', winner: 1, explanation: 'Crystal\'s summit views of Mount Rainier are among the most spectacular in North American skiing.' },
      { name: 'Snow Quality', winner: 2, explanation: 'Stevens Pass averages 460 inches annually, slightly more than Crystal\'s 486, with a colder microclimate preserving powder longer.' },
      { name: 'Accessibility', winner: 2, explanation: 'Stevens Pass is about 80 miles from Seattle vs Crystal\'s similar distance, but Stevens has a more direct highway route.' },
      { name: 'Expert Terrain', winner: 1, explanation: 'Crystal\'s backcountry gates and off-piste terrain on Silver King offer more sustained expert options.' },
      { name: 'Night Skiing', winner: 2, explanation: 'Stevens Pass offers night skiing on select runs, a feature Crystal Mountain does not provide.' },
    ]
  },
  {
    slug: 'revelstoke-vs-jackson-hole',
    destination1: 'revelstoke',
    destination2: 'jackson-hole',
    title: 'Revelstoke vs Jackson Hole: Vertical Drop vs Steep Terrain',
    description: 'North America\'s greatest vertical drop takes on the continent\'s steepest resort in an expert skier\'s dream matchup.',
    verdict: 'Revelstoke wins for vertical and uncrowded powder, Jackson Hole for in-bounds steeps and town atmosphere.',
    categories: [
      { name: 'Vertical Drop', winner: 1, explanation: 'Revelstoke\'s 5,620 feet of vertical is the longest in North America, surpassing Jackson Hole\'s 4,139 feet.' },
      { name: 'Expert Terrain', winner: 2, explanation: 'Jackson Hole\'s continuous steeps, Corbet\'s Couloir, and well-defined expert zones are more concentrated and accessible.' },
      { name: 'Crowds', winner: 1, explanation: 'Revelstoke sees a fraction of Jackson Hole\'s visitors, offering empty powder runs days after a storm.' },
      { name: 'Snow Quality', winner: 0, explanation: 'Both are powder destinations — Revelstoke averages 40+ feet of snow, Jackson Hole gets 459 inches of drier Teton powder.' },
      { name: 'Town', winner: 2, explanation: 'Jackson\'s famous Town Square, dining scene, and Grand Teton views far surpass Revelstoke\'s small railway town.' },
      { name: 'Value', winner: 1, explanation: 'Revelstoke\'s lift tickets, lodging, and dining are significantly cheaper, especially with the Canadian dollar exchange rate.' },
    ]
  },
  {
    slug: 'sugar-bowl-vs-palisades-tahoe',
    destination1: 'sugar-bowl',
    destination2: 'palisades-tahoe',
    title: 'Sugar Bowl vs Palisades Tahoe: Old-School Charm vs Tahoe Mega-Resort',
    description: 'A classic, intimate Tahoe resort takes on one of the biggest ski areas in California. Which Sierra experience is right for you?',
    verdict: 'Sugar Bowl wins for authenticity and value, Palisades Tahoe wins for terrain size and expert challenge.',
    categories: [
      { name: 'Terrain Size', winner: 2, explanation: 'Palisades Tahoe spans 6,000 acres across two mountains, dwarfing Sugar Bowl\'s 1,650 acres.' },
      { name: 'Expert Terrain', winner: 2, explanation: 'Palisades\' KT-22 and the Palisades offer some of the most challenging lift-served terrain in North America.' },
      { name: 'Snow Quality', winner: 1, explanation: 'Sugar Bowl sits on the Donner Summit crest and averages 500 inches annually, often outpacing Palisades by 100+ inches.' },
      { name: 'Crowds', winner: 1, explanation: 'Sugar Bowl\'s limited parking and old-school gondola access keep crowds remarkably low for Tahoe.' },
      { name: 'Value', winner: 1, explanation: 'Sugar Bowl lift tickets and season passes cost significantly less than Palisades Tahoe\'s premium pricing.' },
      { name: 'Atmosphere', winner: 1, explanation: 'Sugar Bowl\'s 1939 heritage, historic lodge, and intimate feel offer a throwback ski experience you can\'t find at mega-resorts.' },
    ]
  },
  {
    slug: 'grand-targhee-vs-jackson-hole',
    destination1: 'grand-targhee',
    destination2: 'jackson-hole',
    title: 'Grand Targhee vs Jackson Hole: Both Sides of the Tetons',
    description: 'Two legendary resorts on opposite sides of the Teton Range offer dramatically different ski experiences.',
    verdict: 'Grand Targhee wins for powder and value, Jackson Hole wins for expert terrain and town life.',
    categories: [
      { name: 'Snow Quality', winner: 1, explanation: 'Grand Targhee averages over 500 inches of light, dry powder annually, earning its nickname as the snow capital of the Tetons.' },
      { name: 'Expert Terrain', winner: 2, explanation: 'Jackson Hole\'s Corbet\'s Couloir, continuous steeps, and 4,139 feet of vertical are world-renowned for experts.' },
      { name: 'Crowds', winner: 1, explanation: 'Grand Targhee rarely has lift lines, while Jackson Hole can see significant crowds on weekends and holidays.' },
      { name: 'Value', winner: 1, explanation: 'Grand Targhee lift tickets are roughly half the price of Jackson Hole, with much cheaper lodging on the west side.' },
      { name: 'Town & Nightlife', winner: 2, explanation: 'Jackson\'s town square, dining scene, and nightlife are among the best in any ski town. Targhee\'s base is minimal.' },
      { name: 'Terrain Size', winner: 2, explanation: 'Jackson Hole offers 2,500 acres with far more sustained vertical and varied terrain than Grand Targhee\'s lift-served 2,602 acres.' },
    ]
  },
  {
    slug: 'whitefish-vs-big-sky',
    destination1: 'whitefish',
    destination2: 'big-sky',
    title: 'Whitefish vs Big Sky: Montana Value vs Montana Premium',
    description: 'Montana\'s two premier ski destinations compared — a charming railroad town vs a sprawling destination resort.',
    verdict: 'Whitefish wins for town charm and value, Big Sky wins for terrain size and uncrowded slopes.',
    categories: [
      { name: 'Town Charm', winner: 1, explanation: 'Whitefish\'s walkable downtown has authentic Montana character with local restaurants, breweries, and shops.' },
      { name: 'Terrain Size', winner: 2, explanation: 'Big Sky\'s 5,800 acres is nearly double Whitefish Mountain\'s 3,000 acres.' },
      { name: 'Value', winner: 1, explanation: 'Whitefish lift tickets, lodging, and dining are 30-40% cheaper than Big Sky\'s premium pricing.' },
      { name: 'Crowds', winner: 2, explanation: 'Big Sky boasts the lowest skier density in North America at under 2 skiers per acre.' },
      { name: 'Expert Terrain', winner: 2, explanation: 'Big Sky\'s Lone Mountain Tram accesses extreme chutes and couloirs unmatched at Whitefish.' },
      { name: 'Family Friendly', winner: 1, explanation: 'Whitefish\'s relaxed atmosphere, affordable ski school, and manageable mountain size make it ideal for families.' },
    ]
  },
  {
    slug: 'sun-valley-vs-jackson-hole',
    destination1: 'sun-valley',
    destination2: 'jackson-hole',
    title: 'Sun Valley vs Jackson Hole: Classic Western Ski Rivals',
    description: 'Two iconic Western ski destinations with rich histories and devoted followings face off.',
    verdict: 'Sun Valley wins for grooming and sunshine, Jackson Hole wins for steeps and powder.',
    categories: [
      { name: 'Grooming', winner: 1, explanation: 'Sun Valley is famous for its impeccable corduroy — widely considered the best grooming in North America.' },
      { name: 'Expert Terrain', winner: 2, explanation: 'Jackson Hole\'s continuous steep terrain, tight chutes, and cliff drops are among the most challenging anywhere.' },
      { name: 'Snow Quantity', winner: 2, explanation: 'Jackson Hole averages 459 inches annually compared to Sun Valley\'s 220 inches, though Sun Valley\'s snowmaking is excellent.' },
      { name: 'Weather', winner: 1, explanation: 'Sun Valley averages over 250 sunny days per year, providing far more bluebird skiing than Jackson.' },
      { name: 'Town Character', winner: 0, explanation: 'Both offer exceptional town experiences — Ketchum\'s understated elegance vs Jackson\'s rugged Western charm.' },
      { name: 'Vertical Drop', winner: 2, explanation: 'Jackson Hole\'s 4,139 feet of continuous vertical surpasses Sun Valley\'s 3,400 feet on Baldy.' },
    ]
  },
  {
    slug: 'stowe-vs-jay-peak',
    destination1: 'stowe',
    destination2: 'jay-peak',
    title: 'Stowe vs Jay Peak: Vermont Premium vs Vermont Underdog',
    description: 'Vermont\'s most prestigious resort squares off against its snowiest, most remote mountain.',
    verdict: 'Stowe wins for village charm and groomed cruising, Jay Peak wins for snow, value, and glades.',
    categories: [
      { name: 'Natural Snow', winner: 2, explanation: 'Jay Peak averages 359 inches of natural snow annually, the most of any resort in the Eastern US.' },
      { name: 'Town & Village', winner: 1, explanation: 'Stowe Village is one of New England\'s most charming towns with world-class dining and shopping.' },
      { name: 'Tree Skiing', winner: 2, explanation: 'Jay Peak\'s extensive glade network is the best in the East, with 100+ acres of tree skiing.' },
      { name: 'Groomed Cruising', winner: 1, explanation: 'Stowe\'s impeccably groomed runs on Mt. Mansfield offer some of the best carving in the East.' },
      { name: 'Value', winner: 2, explanation: 'Jay Peak lift tickets and slopeside lodging cost 30-40% less than Stowe\'s premium pricing.' },
      { name: 'Amenities', winner: 0, explanation: 'Jay Peak\'s indoor waterpark and ice arena offset Stowe\'s upscale spas and restaurants — different audiences, both excellent.' },
    ]
  },
  {
    slug: 'killington-vs-sugarbush',
    destination1: 'killington',
    destination2: 'sugarbush',
    title: 'Killington vs Sugarbush: Beast of the East vs Mad River Charm',
    description: 'Vermont\'s biggest ski area takes on the Mad River Valley\'s beloved two-peak resort.',
    verdict: 'Killington wins for size and season length, Sugarbush wins for character and terrain quality.',
    categories: [
      { name: 'Terrain Size', winner: 1, explanation: 'Killington spans 1,509 acres across six peaks and 155 trails, nearly double Sugarbush\'s 581 acres.' },
      { name: 'Season Length', winner: 1, explanation: 'Killington typically opens in October and closes in May, the longest season in the East.' },
      { name: 'Terrain Quality', winner: 2, explanation: 'Sugarbush\'s natural terrain flow across Lincoln Peak and Mt. Ellen offers a more varied, interesting ski experience.' },
      { name: 'Atmosphere', winner: 2, explanation: 'The Mad River Valley\'s laid-back, locals-first culture is a refreshing contrast to Killington\'s party-resort vibe.' },
      { name: 'Crowds', winner: 2, explanation: 'Sugarbush sees far fewer visitors, with short lift lines even on holiday weekends.' },
      { name: 'Nightlife', winner: 1, explanation: 'Killington\'s access road is packed with bars and restaurants earning it the "Beast of the East" party reputation.' },
    ]
  },
  {
    slug: 'sunday-river-vs-sugarloaf',
    destination1: 'sunday-river',
    destination2: 'sugarloaf',
    title: 'Sunday River vs Sugarloaf: Maine\'s Ski Rivalry',
    description: 'Maine\'s two biggest ski areas — one known for reliability, the other for big-mountain skiing in the East.',
    verdict: 'Sunday River wins for consistency and family skiing, Sugarloaf wins for vertical and expert terrain.',
    categories: [
      { name: 'Snowmaking', winner: 1, explanation: 'Sunday River\'s snowmaking covers 95% of trails and is among the most advanced systems in North America.' },
      { name: 'Expert Terrain', winner: 2, explanation: 'Sugarloaf\'s Snowfields offer the only lift-served above-treeline skiing in the East.' },
      { name: 'Vertical Drop', winner: 2, explanation: 'Sugarloaf\'s 2,820 feet of vertical is the most in New England, far exceeding Sunday River\'s 1,500 feet.' },
      { name: 'Family Friendly', winner: 1, explanation: 'Sunday River\'s eight interconnected peaks offer gentle learning terrain and an excellent kids\' program.' },
      { name: 'Accessibility', winner: 1, explanation: 'Sunday River is 3 hours from Boston vs Sugarloaf\'s 4+ hours, making it easier for weekend trips.' },
      { name: 'On-Mountain Village', winner: 2, explanation: 'Sugarloaf\'s slopeside village with ski-in/ski-out lodging creates a more immersive resort experience.' },
    ]
  },
  {
    slug: 'stowe-vs-sugarbush',
    destination1: 'stowe',
    destination2: 'sugarbush',
    title: 'Stowe vs Sugarbush: Vermont\'s Classic Ski Resorts Compared',
    description: 'Two of Vermont\'s most beloved ski areas, just 45 minutes apart, offer distinct but equally compelling experiences.',
    verdict: 'Stowe wins for prestige and village, Sugarbush wins for terrain variety and a more relaxed vibe.',
    categories: [
      { name: 'Village & Dining', winner: 1, explanation: 'Stowe Village offers world-class restaurants, boutique shopping, and a storybook New England atmosphere.' },
      { name: 'Terrain Variety', winner: 2, explanation: 'Sugarbush\'s two distinct peaks — Lincoln Peak and Mt. Ellen — offer more varied terrain character.' },
      { name: 'Expert Terrain', winner: 1, explanation: 'Stowe\'s Front Four (Starr, Liftline, National, Goat) are the most famous expert trails in the East.' },
      { name: 'Crowds', winner: 2, explanation: 'Sugarbush draws fewer destination skiers, resulting in shorter lines and a more relaxed pace.' },
      { name: 'Value', winner: 2, explanation: 'Sugarbush lodging and lift tickets run 20-25% cheaper than Stowe\'s premium pricing.' },
      { name: 'Snow Quality', winner: 0, explanation: 'Both receive similar Green Mountain snowfall and supplement with extensive snowmaking coverage.' },
    ]
  },
  {
    slug: 'loon-mountain-vs-bretton-woods',
    destination1: 'loon-mountain',
    destination2: 'bretton-woods',
    title: 'Loon Mountain vs Bretton Woods: New Hampshire\'s Family-Friendly Picks',
    description: 'Two of New Hampshire\'s most popular family ski resorts compared for terrain, amenities, and value.',
    verdict: 'Loon wins for terrain variety and town access, Bretton Woods wins for uncrowded slopes and scenic beauty.',
    categories: [
      { name: 'Terrain Variety', winner: 1, explanation: 'Loon\'s three peaks offer more advanced terrain including the steep South Peak.' },
      { name: 'Crowds', winner: 2, explanation: 'Bretton Woods limits ticket sales and rarely has lift lines, even on peak weekends.' },
      { name: 'Scenery', winner: 2, explanation: 'Bretton Woods sits beneath Mt. Washington with views of the Presidential Range and the historic Omni Mount Washington Resort.' },
      { name: 'Apres & Town', winner: 1, explanation: 'Loon is in Lincoln/Woodstock with more restaurants, shops, and entertainment options nearby.' },
      { name: 'Beginner Friendly', winner: 2, explanation: 'Bretton Woods has 30% beginner terrain with gentle, wide-open slopes perfect for learning.' },
      { name: 'Value', winner: 0, explanation: 'Both offer competitive family pricing with similar lift ticket and lodging costs for the White Mountains.' },
    ]
  },
  {
    slug: 'revelstoke-vs-fernie',
    destination1: 'revelstoke',
    destination2: 'fernie',
    title: 'Revelstoke vs Fernie: British Columbia\'s Powder Towns Compared',
    description: 'Two of BC\'s most celebrated powder destinations offer deep snow and authentic mountain-town culture.',
    verdict: 'Revelstoke wins for vertical and big-mountain skiing, Fernie wins for value and classic ski-town feel.',
    categories: [
      { name: 'Vertical Drop', winner: 1, explanation: 'Revelstoke boasts 5,620 feet of vertical — the longest in North America — providing massive, sustained runs.' },
      { name: 'Snow Quality', winner: 0, explanation: 'Both sit in BC\'s interior snow belt and average 30-40 feet of dry powder annually.' },
      { name: 'Town Character', winner: 2, explanation: 'Fernie\'s historic downtown with local pubs, restaurants, and coal-mining heritage offers more authentic character.' },
      { name: 'Value', winner: 2, explanation: 'Fernie lift tickets, lodging, and dining are notably cheaper than Revelstoke\'s growing premium pricing.' },
      { name: 'Expert Terrain', winner: 1, explanation: 'Revelstoke\'s North Bowl and sub-alpine terrain offer more sustained, high-consequence expert skiing.' },
      { name: 'Terrain Variety', winner: 2, explanation: 'Fernie\'s five alpine bowls spread across a wide ridgeline provide more varied terrain character.' },
    ]
  },
  {
    slug: 'big-white-vs-sun-peaks',
    destination1: 'big-white',
    destination2: 'sun-peaks',
    title: 'Big White vs Sun Peaks: BC\'s Best Family Ski Resorts',
    description: 'Two of British Columbia\'s most family-friendly destination resorts compared on terrain, village, and value.',
    verdict: 'Big White wins for snow quality and ski-in/ski-out convenience, Sun Peaks wins for terrain size and village charm.',
    categories: [
      { name: 'Snow Quality', winner: 1, explanation: 'Big White\'s famous dry champagne powder and snow ghosts come from consistent cold Interior BC storms.' },
      { name: 'Terrain Size', winner: 2, explanation: 'Sun Peaks offers 4,270 acres across three mountains, making it Canada\'s second-largest ski area vs Big White\'s 2,765 acres.' },
      { name: 'Village', winner: 2, explanation: 'Sun Peaks\' purpose-built alpine village is more developed with better dining and a charming European feel.' },
      { name: 'Ski-In/Ski-Out', winner: 1, explanation: 'Big White\'s layout allows nearly all lodging to be ski-in/ski-out, making it exceptionally convenient for families.' },
      { name: 'Family Programs', winner: 0, explanation: 'Both resorts offer excellent children\'s ski schools, daycare, and family-oriented activities including tubing and skating.' },
      { name: 'Value', winner: 0, explanation: 'Both resorts offer similar pricing that undercuts the big-name BC destinations like Whistler by 25-30%.' },
    ]
  },
  {
    slug: 'whistler-vs-revelstoke',
    destination1: 'whistler-blackcomb',
    destination2: 'revelstoke',
    title: 'Whistler vs Revelstoke: BC\'s Biggest Resort vs Biggest Vertical',
    description: 'North America\'s largest ski resort takes on the continent\'s longest vertical drop. Two BC titans compared.',
    verdict: 'Whistler wins for terrain size, village, and amenities, Revelstoke wins for vertical, powder, and fewer crowds.',
    categories: [
      { name: 'Terrain Size', winner: 1, explanation: 'Whistler Blackcomb\'s 8,171 acres across two mountains dwarfs Revelstoke\'s 3,121 acres.' },
      { name: 'Vertical Drop', winner: 2, explanation: 'Revelstoke\'s 5,620 feet of continuous vertical is the longest in North America, exceeding Whistler\'s 5,280 feet.' },
      { name: 'Crowds', winner: 2, explanation: 'Revelstoke sees a fraction of Whistler\'s 2.5+ million annual visits, with consistently short lift lines.' },
      { name: 'Village & Nightlife', winner: 1, explanation: 'Whistler Village is a world-renowned pedestrian resort village with hundreds of restaurants, bars, and shops.' },
      { name: 'Snow Quality', winner: 2, explanation: 'Revelstoke\'s interior location delivers drier, lighter powder than Whistler\'s heavier coastal snowfall.' },
      { name: 'Accessibility', winner: 1, explanation: 'Whistler is 90 minutes from Vancouver\'s international airport. Revelstoke is a 5-6 hour drive from Calgary or Vancouver.' },
    ]
  },
  {
    slug: 'vail-vs-aspen',
    destination1: 'vail',
    destination2: 'aspen-snowmass',
    title: 'Vail vs Aspen: Colorado\'s Two Biggest Ski Brands Compared',
    description: 'The two most famous names in Colorado skiing go head to head on terrain, town, snow, and overall experience.',
    verdict: 'Vail wins for sheer back-bowl terrain and village luxury, Aspen wins for four-mountain variety and cultural depth.',
    categories: [
      { name: 'Terrain Size', winner: 2, explanation: 'Aspen Snowmass spans 5,527 acres across four distinct mountains, edging Vail\'s 5,317 acres on a single mountain.' },
      { name: 'Expert Terrain', winner: 1, explanation: 'Vail\'s Back Bowls and Blue Sky Basin deliver over 3,000 acres of wide-open advanced and expert terrain in a single interconnected zone.' },
      { name: 'Town Culture', winner: 2, explanation: 'Aspen is a genuine Victorian mining town turned cultural hub with world-class dining, galleries, music festivals, and a thriving arts scene.' },
      { name: 'Snow Quality', winner: 0, explanation: 'Both average around 300-350 inches of Colorado\'s dry, light powder annually at similar base elevations.' },
      { name: 'Beginner Friendly', winner: 2, explanation: 'Buttermilk is a dedicated beginner mountain within the Aspen Snowmass system, offering a far less intimidating experience than Vail\'s front-side crowds.' },
      { name: 'Accessibility', winner: 1, explanation: 'Vail is directly on I-70, about 100 miles from Denver. Aspen requires a longer drive over Independence Pass or a flight into its small regional airport.' },
    ]
  },
  {
    slug: 'copper-mountain-vs-winter-park',
    destination1: 'copper-mountain',
    destination2: 'winter-park',
    title: 'Copper Mountain vs Winter Park: Best I-70 Value Ski Resort?',
    description: 'Two of Colorado\'s best-value ski resorts compared on terrain, snow, crowds, and affordability.',
    verdict: 'Copper wins for naturally divided terrain and fewer crowds, Winter Park for moguls and Denver accessibility.',
    categories: [
      { name: 'Terrain Layout', winner: 1, explanation: 'Copper\'s terrain is naturally divided by ability level — beginners on the right, intermediates in the center, experts on the left — making navigation intuitive.' },
      { name: 'Bump Skiing', winner: 2, explanation: 'Winter Park\'s Mary Jane side is legendary for mogul skiing, with sustained bump runs like Drunken Frenchman, Outhouse, and Derailer.' },
      { name: 'Crowds', winner: 1, explanation: 'Copper typically sees lighter weekend crowds than Winter Park, which draws heavily from the Denver metro area.' },
      { name: 'Proximity to Denver', winner: 2, explanation: 'Winter Park is about 90 minutes from Denver via US-40 and the Berthoud Pass, with an Amtrak Winter Park Express option. Copper is on I-70 but often faces Eisenhower Tunnel traffic.' },
      { name: 'Terrain Size', winner: 2, explanation: 'Winter Park offers 3,081 acres across seven territories vs Copper\'s 2,490 acres across three distinct zones.' },
      { name: 'Value', winner: 1, explanation: 'Copper\'s lodging and dining at the base village tend to be 10-15% cheaper than Winter Park\'s comparable options.' },
    ]
  },
  {
    slug: 'arapahoe-basin-vs-keystone',
    destination1: 'arapahoe-basin',
    destination2: 'keystone',
    title: 'Arapahoe Basin vs Keystone: Neighbors with Opposite Vibes',
    description: 'Two Summit County ski areas just 6 miles apart offer completely different skiing experiences and atmospheres.',
    verdict: 'A-Basin wins for expert terrain and hardcore local culture, Keystone for families and all-around resort amenities.',
    categories: [
      { name: 'Expert Terrain', winner: 1, explanation: 'A-Basin\'s East Wall, Pallavicini Face, and the Beavers/Steep Gullies offer some of Colorado\'s most challenging lift-served terrain.' },
      { name: 'Family Friendly', winner: 2, explanation: 'Keystone has a full-service village with kids\' programs, tubing, ice skating, and night skiing — all absent at A-Basin.' },
      { name: 'Season Length', winner: 1, explanation: 'A-Basin regularly stays open into June, sometimes July, thanks to its 13,050-foot summit and north-facing slopes.' },
      { name: 'Terrain Size', winner: 2, explanation: 'Keystone covers 3,148 acres across three mountains vs A-Basin\'s 1,428 acres.' },
      { name: 'Atmosphere', winner: 1, explanation: 'A-Basin\'s legendary parking lot tailgate scene and no-frills, skier-first culture are beloved by locals and purists.' },
      { name: 'Night Skiing', winner: 2, explanation: 'Keystone is one of the only Colorado resorts offering night skiing, with 260 lit acres on Dercum Mountain.' },
    ]
  },
  {
    slug: 'telluride-vs-crested-butte',
    destination1: 'telluride',
    destination2: 'crested-butte',
    title: 'Telluride vs Crested Butte: Colorado\'s Remote Ski Gems',
    description: 'Two of Colorado\'s most remote and beautiful ski towns compared on terrain, character, and value.',
    verdict: 'Telluride wins on vertical and luxury amenities, Crested Butte on value and extreme skiing heritage.',
    categories: [
      { name: 'Vertical Drop', winner: 1, explanation: 'Telluride delivers 4,425 feet of vertical — one of the highest in North America — vs Crested Butte\'s 3,062 feet.' },
      { name: 'Extreme Terrain', winner: 2, explanation: 'Crested Butte is the self-proclaimed birthplace of extreme skiing, with legendary lines on the North Face and Headwall.' },
      { name: 'Town Character', winner: 0, explanation: 'Both feature authentic, historic Colorado mining towns with strong local culture and a refreshing absence of corporate feel.' },
      { name: 'Luxury & Dining', winner: 1, explanation: 'Telluride has evolved into a high-end destination with luxury hotels like the Madeline and nationally acclaimed restaurants.' },
      { name: 'Value', winner: 2, explanation: 'Crested Butte lodging and dining run 25-35% cheaper than Telluride\'s increasingly upscale offerings.' },
      { name: 'Accessibility', winner: 0, explanation: 'Both are remote by Colorado standards — Telluride has a small regional airport; Crested Butte is a 4-hour drive from Denver via Monarch Pass or a short hop from Gunnison.' },
    ]
  },
  {
    slug: 'steamboat-vs-vail',
    destination1: 'steamboat',
    destination2: 'vail',
    title: 'Steamboat vs Vail: Champagne Powder vs Back Bowls',
    description: 'Steamboat\'s trademarked powder and western charm take on Vail\'s massive terrain and luxury village.',
    verdict: 'Steamboat wins for snow quality and authentic ranch-town vibe, Vail for terrain size and upscale amenities.',
    categories: [
      { name: 'Snow Quality', winner: 1, explanation: 'Steamboat trademarked "Champagne Powder" for good reason — its uniquely dry, light snow is produced by local weather patterns flowing over the Flat Tops Wilderness.' },
      { name: 'Terrain Size', winner: 2, explanation: 'Vail\'s 5,317 acres and legendary Back Bowls substantially exceed Steamboat\'s 2,965 acres.' },
      { name: 'Town Authenticity', winner: 1, explanation: 'Steamboat Springs is a genuine ranching and hot springs town with rodeos, natural mineral pools, and real Western heritage.' },
      { name: 'Tree Skiing', winner: 1, explanation: 'Steamboat\'s signature aspens and deep glades like Christmas Tree Bowl, Shadows, and Closets rank among the best tree skiing in North America.' },
      { name: 'Après-Ski & Luxury', winner: 2, explanation: 'Vail Village and Lionshead offer a purpose-built European-style experience with high-end dining, boutique shopping, and luxury lodging.' },
      { name: 'Value', winner: 1, explanation: 'Steamboat lodging runs 20-30% cheaper than Vail, with more affordable on-mountain dining and a less exclusive atmosphere.' },
    ]
  },
  {
    slug: 'arapahoe-basin-vs-breckenridge',
    destination1: 'arapahoe-basin',
    destination2: 'breckenridge',
    title: 'Arapahoe Basin vs Breckenridge: Summit County Classic Matchup',
    description: 'The no-frills locals\' mountain meets the popular resort town in this Summit County showdown.',
    verdict: 'A-Basin wins for expert terrain, season length, and laid-back local vibe. Breckenridge wins for town life, size, and all-around variety.',
    categories: [
      { name: 'Expert Terrain', winner: 1, explanation: 'A-Basin\'s East Wall, Pallavicini Face, and the Beavers pack serious steeps into a compact footprint that rivals much larger resorts.' },
      { name: 'Terrain Size', winner: 2, explanation: 'Breckenridge covers 2,908 acres across five peaks compared to A-Basin\'s 1,428 acres.' },
      { name: 'Town & Dining', winner: 2, explanation: 'Breckenridge\'s historic Main Street features 200+ restaurants, shops, and bars. A-Basin has a base lodge and a parking lot tailgate.' },
      { name: 'Season Length', winner: 1, explanation: 'A-Basin consistently opens by mid-October and stays open into June or July, often the longest season in Colorado.' },
      { name: 'Crowds', winner: 1, explanation: 'A-Basin sees a fraction of Breckenridge\'s skier visits, resulting in shorter lift lines on most days.' },
      { name: 'High Alpine Experience', winner: 0, explanation: 'Both offer exceptional above-treeline skiing — Breck\'s Imperial Bowl tops out at 12,998 feet, A-Basin\'s summit reaches 13,050 feet.' },
    ]
  },
  {
    slug: 'snowbird-vs-deer-valley',
    destination1: 'snowbird',
    destination2: 'deer-valley',
    title: 'Snowbird vs Deer Valley: Opposite Ends of the Utah Ski Spectrum',
    description: 'Utah\'s gnarliest resort and its most luxurious go head to head on terrain, service, and overall experience.',
    verdict: 'Snowbird wins for advanced terrain, vertical, and snow depth. Deer Valley wins for grooming, service, and luxury.',
    categories: [
      { name: 'Expert Terrain', winner: 1, explanation: 'Snowbird\'s Cirque, Great Scott, and the chutes off the Aerial Tram deliver some of the steepest lift-served terrain in North America.' },
      { name: 'Grooming & Service', winner: 2, explanation: 'Deer Valley limits daily skier numbers and grooms obsessively — the corduroy is immaculate every morning, with valet ski storage and attentive staff.' },
      { name: 'Snow Quantity', winner: 1, explanation: 'Snowbird averages over 500 inches annually in Little Cottonwood Canyon vs Deer Valley\'s roughly 300 inches in the Park City area.' },
      { name: 'On-Mountain Dining', winner: 2, explanation: 'Deer Valley\'s on-mountain restaurants serve gourmet lunches with tablecloths and silverware — a class above standard lodge fare anywhere in North America.' },
      { name: 'Vertical Drop', winner: 1, explanation: 'Snowbird\'s 3,240 feet of continuous vertical via the Aerial Tram far exceeds Deer Valley\'s 3,000 feet spread across gentler terrain.' },
      { name: 'Beginner Friendly', winner: 2, explanation: 'Deer Valley\'s well-groomed greens, limited daily crowds, and attentive ski school make it ideal for beginners and intermediates.' },
    ]
  },
  {
    slug: 'park-city-vs-snowbird',
    destination1: 'park-city',
    destination2: 'snowbird',
    title: 'Park City vs Snowbird: Biggest vs Steepest in Utah',
    description: 'Utah\'s largest resort takes on its steepest in a comparison of terrain size, snow quality, and accessibility.',
    verdict: 'Park City wins for size, town, and family appeal. Snowbird wins for snow depth, steeps, and expert challenge.',
    categories: [
      { name: 'Terrain Size', winner: 1, explanation: 'Park City\'s 7,300 acres is the largest in the US, nearly three times Snowbird\'s 2,500 acres.' },
      { name: 'Expert Terrain', winner: 2, explanation: 'Snowbird\'s Aerial Tram accesses continuous steeps, chutes, and couloirs that Park City cannot match in intensity or sustained pitch.' },
      { name: 'Snow Quality', winner: 2, explanation: 'Snowbird averages 500+ inches in Little Cottonwood Canyon vs Park City\'s 360 inches — significantly more and drier powder.' },
      { name: 'Town & Nightlife', winner: 1, explanation: 'Park City\'s Historic Main Street has 100+ restaurants and bars. Snowbird\'s base area is functional but limited for dining and entertainment.' },
      { name: 'Family Friendly', winner: 1, explanation: 'Park City offers far more beginner and intermediate terrain, plus superior kids\' programs and off-mountain family activities.' },
      { name: 'Accessibility', winner: 0, explanation: 'Both are about 35-45 minutes from Salt Lake City airport, but Park City rarely deals with the canyon road closures that can strand Snowbird visitors after storms.' },
    ]
  },
  {
    slug: 'brighton-vs-snowbird',
    destination1: 'brighton',
    destination2: 'snowbird',
    title: 'Brighton vs Snowbird: Budget vs Premium in the Cottonwood Canyons',
    description: 'A budget-friendly local favorite in Big Cottonwood and Utah\'s most intense resort in Little Cottonwood sit in neighboring canyons.',
    verdict: 'Brighton wins on value, night skiing, and laid-back atmosphere. Snowbird wins on terrain, vertical, and snow volume.',
    categories: [
      { name: 'Value', winner: 1, explanation: 'Brighton lift tickets cost roughly half of Snowbird\'s, and the resort offers affordable season passes popular with Salt Lake City locals.' },
      { name: 'Terrain Size', winner: 2, explanation: 'Snowbird covers 2,500 acres with 3,240 feet of vertical vs Brighton\'s 1,050 acres and 1,875 feet of vertical.' },
      { name: 'Snow Quality', winner: 2, explanation: 'Snowbird averages 500+ inches annually in Little Cottonwood Canyon vs Brighton\'s 350 inches in Big Cottonwood Canyon.' },
      { name: 'Night Skiing', winner: 1, explanation: 'Brighton is one of the few Utah resorts offering night skiing, with several lifts running into the evening on select nights.' },
      { name: 'Expert Terrain', winner: 2, explanation: 'Snowbird\'s Aerial Tram accesses some of the most sustained, steep, lift-served terrain in North America.' },
      { name: 'Vibe & Crowds', winner: 1, explanation: 'Brighton has a relaxed, locals\' mountain feel with shorter lift lines, a welcoming atmosphere, and a strong park riding scene.' },
    ]
  },
  {
    slug: 'snowbasin-vs-deer-valley',
    destination1: 'snowbasin',
    destination2: 'deer-valley',
    title: 'Snowbasin vs Deer Valley: 2002 Olympic Ski Venues Compared',
    description: 'Both hosted events at the 2002 Salt Lake City Winter Olympics. Which Olympic venue offers the better ski experience today?',
    verdict: 'Snowbasin wins on value and uncrowded slopes, Deer Valley on luxury, polish, and consistent service.',
    categories: [
      { name: 'Value', winner: 1, explanation: 'Snowbasin lift tickets cost 30-40% less than Deer Valley, and the resort offers free parking and stunning day lodges included in the experience.' },
      { name: 'Crowds', winner: 1, explanation: 'Snowbasin sees a fraction of Deer Valley\'s skier traffic, meaning fresh tracks last longer and lift lines are minimal even on weekends.' },
      { name: 'Luxury & Service', winner: 2, explanation: 'Deer Valley\'s valet ski storage, on-mountain fine dining, daily skier limits, and white-glove service set the standard for luxury skiing in North America.' },
      { name: 'Terrain Variety', winner: 2, explanation: 'Deer Valley offers 2,026 acres across six mountains with 103 runs and greater variety than Snowbasin\'s 3,000 acres of more concentrated terrain.' },
      { name: 'Base Lodges', winner: 0, explanation: 'Both resorts invested heavily in stunning day lodges — Snowbasin\'s Earl\'s Lodge and Needles Lodge and Deer Valley\'s Silver Lake Lodge are all exceptional.' },
      { name: 'Snow Quality', winner: 1, explanation: 'Snowbasin averages 300+ inches of light Wasatch powder at a higher base elevation, often with better snow preservation on its north-facing aspects.' },
    ]
  },
  {
    slug: 'kirkwood-vs-palisades-tahoe',
    destination1: 'kirkwood',
    destination2: 'palisades-tahoe',
    title: 'Kirkwood vs Palisades Tahoe: Sierra Nevada\'s Steepest Rivals',
    description: 'Two of the steepest, most snow-blessed resorts in California compared on terrain, snow depth, and overall experience.',
    verdict: 'Kirkwood wins for snow depth and uncrowded steeps, Palisades Tahoe for terrain size and overall resort experience.',
    categories: [
      { name: 'Snow Depth', winner: 1, explanation: 'Kirkwood\'s higher elevation and favorable storm positioning deliver an average of 500+ inches annually — often the deepest snowpack in the entire Tahoe region.' },
      { name: 'Terrain Size', winner: 2, explanation: 'Palisades Tahoe spans 6,000 acres across two interconnected mountains vs Kirkwood\'s 2,300 acres on a single peak.' },
      { name: 'Expert Terrain', winner: 0, explanation: 'Both excel at expert terrain — Kirkwood\'s "The Wall" and cornice launches rival Palisades\' legendary KT-22 and Headwall for steepness and commitment.' },
      { name: 'Crowds', winner: 1, explanation: 'Kirkwood\'s remote location off Highway 88, south of the main Tahoe basin, keeps it far less crowded than popular Palisades Tahoe on weekends.' },
      { name: 'Village & Amenities', winner: 2, explanation: 'Palisades has a developed base village with restaurants, shops, and slopeside lodging. Kirkwood\'s base area is minimal by comparison.' },
      { name: 'Accessibility', winner: 2, explanation: 'Palisades is directly on Highway 89 near Truckee with easy interstate access. Kirkwood requires a longer, windier drive on Highway 88, often with chain controls.' },
    ]
  },
  {
    slug: 'northstar-vs-heavenly',
    destination1: 'northstar',
    destination2: 'heavenly',
    title: 'Northstar vs Heavenly: Tahoe Family Resort vs Party Mountain',
    description: 'Lake Tahoe\'s most family-friendly resort takes on its biggest and liveliest in this head-to-head comparison.',
    verdict: 'Northstar wins for families, grooming, and a relaxed pace. Heavenly wins for terrain size, lake views, and nightlife.',
    categories: [
      { name: 'Family Friendly', winner: 1, explanation: 'Northstar\'s upscale village, excellent ski school, gentle groomed runs, and protected terrain make it the top family choice at Tahoe.' },
      { name: 'Terrain Size', winner: 2, explanation: 'Heavenly covers 4,800 acres across two states with 3,500 feet of vertical, far exceeding Northstar\'s 3,170 acres and 2,280 feet of vertical.' },
      { name: 'Views', winner: 2, explanation: 'Heavenly\'s panoramic Lake Tahoe views from the Sky Express chair and observation deck at 9,123 feet are iconic and unmatched at Tahoe.' },
      { name: 'Grooming', winner: 1, explanation: 'Northstar is known for meticulous grooming and perfectly maintained corduroy — ideal for cruisers and intermediate skiers who love fast, smooth runs.' },
      { name: 'Nightlife', winner: 2, explanation: 'Heavenly\'s location above South Lake Tahoe gives direct access to casinos, bars, clubs, and restaurants that Northstar\'s quiet village cannot match.' },
      { name: 'Snow Quality', winner: 0, explanation: 'Both receive similar Sierra snowfall in the 300-350 inch range, though Northstar\'s tree-lined north-facing runs can hold snow slightly better between storms.' },
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
