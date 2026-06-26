import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Guide, GuideFrontmatter } from './types'

const guidesDirectory = path.join(process.cwd(), 'content/guides')

function getGuidesFromDir(dir: string): Guide[] {
  if (!fs.existsSync(dir)) return []
  const guides: Guide[] = []

  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      guides.push(...getGuidesFromDir(fullPath))
    } else if (entry.name.endsWith('.mdx')) {
      const slug = entry.name.replace(/\.mdx$/, '')
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      const metadata = data as GuideFrontmatter
      guides.push({ metadata: { ...metadata, slug }, content })
    }
  }
  return guides
}

export function getAllGuides(): Guide[] {
  const now = new Date()
  return getGuidesFromDir(guidesDirectory)
    .filter((g) => !g.metadata.draft)
    .filter((g) => new Date(g.metadata.date) <= now)
    .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime())
}

export function getGuideBySlug(slug: string): Guide | null {
  const allGuides = getGuidesFromDir(guidesDirectory)
  return allGuides.find((g) => g.metadata.slug === slug) || null
}

export function getGuidesByCategory(category: string): Guide[] {
  return getAllGuides().filter((g) => g.metadata.category === category)
}

export function getGuidesByDestination(destination: string): Guide[] {
  return getAllGuides().filter((g) => g.metadata.destination === destination)
}

export function getFeaturedGuides(limit = 6): Guide[] {
  return getAllGuides()
    .filter((g) => g.metadata.featured)
    .slice(0, limit)
}

export function getRelatedGuides(current: Guide, limit = 4): Guide[] {
  const all = getAllGuides().filter((g) => g.metadata.slug !== current.metadata.slug)

  const scored = all.map((guide) => {
    let score = 0
    if (current.metadata.relatedSlugs?.includes(guide.metadata.slug)) score += 50
    if (guide.metadata.category === current.metadata.category) score += 10
    if (guide.metadata.region && guide.metadata.region === current.metadata.region) score += 15
    if (guide.metadata.destination && guide.metadata.destination === current.metadata.destination) score += 20
    const currentWords = current.metadata.title.toLowerCase().split(/\s+/).filter((w) => w.length > 3)
    const guideWords = guide.metadata.title.toLowerCase().split(/\s+/).filter((w) => w.length > 3)
    const overlap = currentWords.filter((w) => guideWords.includes(w)).length
    score += overlap * 2
    return { guide, score }
  })

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.guide)
}

export function getAllGuideSlugs(): string[] {
  return getAllGuides().map((g) => g.metadata.slug)
}
