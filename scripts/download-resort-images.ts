/**
 * Download resort and category images from Unsplash.
 *
 * Usage:
 *   UNSPLASH_ACCESS_KEY=your_key npx tsx scripts/download-resort-images.ts
 *
 * This script:
 * 1. Searches Unsplash for each resort/category with a curated query
 * 2. Downloads the regular-size image (~1080px wide)
 * 3. Saves to public/images/resorts/[slug].jpg and public/images/categories/[cat].jpg
 * 4. Triggers the Unsplash download endpoint for proper attribution tracking
 * 5. Outputs an attribution CSV at public/images/attribution.csv
 */

import fs from 'fs'
import path from 'path'
import https from 'https'

const ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY
if (!ACCESS_KEY) {
  console.error('Error: Set UNSPLASH_ACCESS_KEY environment variable')
  process.exit(1)
}

// Resort slug -> curated Unsplash search query
const resortQueries: Record<string, string> = {
  vail: 'Vail ski resort Colorado snow',
  breckenridge: 'Breckenridge ski resort Colorado',
  'aspen-snowmass': 'Aspen Snowmass ski mountain Colorado',
  steamboat: 'Steamboat Springs ski resort Colorado',
  telluride: 'Telluride ski resort Colorado mountains',
  keystone: 'Keystone ski resort Colorado',
  'copper-mountain': 'Copper Mountain ski resort Colorado',
  'winter-park': 'Winter Park ski resort Colorado',
  'park-city': 'Park City Utah ski slopes',
  'deer-valley': 'Deer Valley Utah ski resort',
  snowbird: 'Snowbird Utah ski mountain',
  alta: 'Alta Utah ski resort snow',
  brighton: 'Brighton ski resort Utah',
  sundance: 'Sundance ski resort Utah mountains',
  'mammoth-mountain': 'Mammoth Mountain ski resort California',
  'palisades-tahoe': 'Palisades Tahoe ski resort California',
  heavenly: 'Heavenly ski resort Lake Tahoe',
  northstar: 'Northstar ski resort Lake Tahoe',
  'big-sky': 'Big Sky Montana ski resort',
  'jackson-hole': 'Jackson Hole Wyoming ski mountain',
  stowe: 'Stowe Vermont ski resort',
  killington: 'Killington Vermont ski resort',
  'sunday-river': 'Sunday River Maine ski resort',
  sugarbush: 'Sugarbush Vermont ski slopes',
  'jay-peak': 'Jay Peak Vermont ski resort',
  'whistler-blackcomb': 'Whistler Blackcomb ski mountain',
  'banff-sunshine': 'Banff Sunshine Village ski resort',
  'lake-louise': 'Lake Louise ski resort Alberta',
  'mont-tremblant': 'Mont Tremblant ski resort Quebec',
  'sun-peaks': 'Sun Peaks ski resort British Columbia',
}

// Category -> curated search query
const categoryQueries: Record<string, string> = {
  ski: 'ski mountain landscape winter',
  gear: 'ski equipment gear closeup',
  travel: 'airport travel winter mountains',
  budget: 'mountain village winter cozy',
  tips: 'skier on slopes action',
}

interface Attribution {
  filename: string
  photographer: string
  photographerUrl: string
  unsplashUrl: string
}

function fetchJson(url: string): Promise<unknown> {
  return new Promise((resolve, reject) => {
    https.get(
      url,
      { headers: { Authorization: `Client-ID ${ACCESS_KEY}` } },
      (res) => {
        let data = ''
        res.on('data', (chunk: string) => (data += chunk))
        res.on('end', () => {
          if (res.statusCode && res.statusCode >= 400) {
            reject(new Error(`HTTP ${res.statusCode}: ${data}`))
            return
          }
          try {
            resolve(JSON.parse(data))
          } catch {
            reject(new Error(`Invalid JSON: ${data.slice(0, 200)}`))
          }
        })
        res.on('error', reject)
      }
    ).on('error', reject)
  })
}

function downloadFile(url: string, dest: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest)
    https
      .get(url, (res) => {
        // Follow redirects
        if (res.statusCode === 301 || res.statusCode === 302) {
          const redirectUrl = res.headers.location
          if (redirectUrl) {
            file.close()
            fs.unlinkSync(dest)
            downloadFile(redirectUrl, dest).then(resolve).catch(reject)
            return
          }
        }
        res.pipe(file)
        file.on('finish', () => {
          file.close()
          resolve()
        })
      })
      .on('error', (err) => {
        fs.unlinkSync(dest)
        reject(err)
      })
  })
}

async function searchAndDownload(
  query: string,
  outputPath: string
): Promise<Attribution | null> {
  const searchUrl = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&orientation=landscape&per_page=1`

  const data = (await fetchJson(searchUrl)) as {
    results: Array<{
      urls: { regular: string }
      links: { download_location: string; html: string }
      user: { name: string; links: { html: string } }
    }>
  }

  if (!data.results || data.results.length === 0) {
    console.warn(`  No results for: "${query}"`)
    return null
  }

  const photo = data.results[0]
  const imageUrl = photo.urls.regular

  // Download the image
  await downloadFile(imageUrl, outputPath)

  // Trigger Unsplash download endpoint for attribution tracking
  try {
    await fetchJson(photo.links.download_location)
  } catch {
    // Non-critical; just log
    console.warn(`  Could not trigger download endpoint for: "${query}"`)
  }

  return {
    filename: path.basename(outputPath),
    photographer: photo.user.name,
    photographerUrl: photo.user.links.html,
    unsplashUrl: photo.links.html,
  }
}

async function main() {
  const attributions: Attribution[] = []
  const publicDir = path.join(process.cwd(), 'public', 'images')
  const resortsDir = path.join(publicDir, 'resorts')
  const categoriesDir = path.join(publicDir, 'categories')

  fs.mkdirSync(resortsDir, { recursive: true })
  fs.mkdirSync(categoriesDir, { recursive: true })

  // Download resort images
  console.log('Downloading resort images...\n')
  const resortEntries = Object.entries(resortQueries)
  for (let i = 0; i < resortEntries.length; i++) {
    const [slug, query] = resortEntries[i]
    const outputPath = path.join(resortsDir, `${slug}.jpg`)
    if (fs.existsSync(outputPath)) {
      console.log(`[${i + 1}/${resortEntries.length}] Skipping ${slug} (already exists)`)
      continue
    }
    console.log(`[${i + 1}/${resortEntries.length}] ${slug}: "${query}"`)
    try {
      const attr = await searchAndDownload(query, outputPath)
      if (attr) attributions.push(attr)
    } catch (err) {
      console.error(`  Error downloading ${slug}:`, err)
    }
    // Rate limit: Unsplash allows 50 req/hour for free tier
    await new Promise((r) => setTimeout(r, 1500))
  }

  // Download category images
  console.log('\nDownloading category images...\n')
  const catEntries = Object.entries(categoryQueries)
  for (let i = 0; i < catEntries.length; i++) {
    const [cat, query] = catEntries[i]
    const outputPath = path.join(categoriesDir, `${cat}.jpg`)
    if (fs.existsSync(outputPath)) {
      console.log(`[${i + 1}/${catEntries.length}] Skipping ${cat} (already exists)`)
      continue
    }
    console.log(`[${i + 1}/${catEntries.length}] ${cat}: "${query}"`)
    try {
      const attr = await searchAndDownload(query, outputPath)
      if (attr) attributions.push(attr)
    } catch (err) {
      console.error(`  Error downloading ${cat}:`, err)
    }
    await new Promise((r) => setTimeout(r, 1500))
  }

  // Write attribution CSV
  if (attributions.length > 0) {
    const csvPath = path.join(publicDir, 'attribution.csv')
    const header = 'filename,photographer,photographer_url,unsplash_url'
    const rows = attributions.map(
      (a) => `${a.filename},${a.photographer},"${a.photographerUrl}","${a.unsplashUrl}"`
    )
    fs.writeFileSync(csvPath, [header, ...rows].join('\n'), 'utf-8')
    console.log(`\nAttribution CSV written to: ${csvPath}`)
  }

  console.log(`\nDone! Downloaded ${attributions.length} images.`)
}

main().catch(console.error)
