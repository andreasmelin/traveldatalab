import fs from 'fs'
import path from 'path'

export function getResortImagePath(slug: string): string | null {
  const imagePath = path.join(process.cwd(), 'public', 'images', 'resorts', `${slug}.jpg`)
  return fs.existsSync(imagePath) ? `/images/resorts/${slug}.jpg` : null
}

export function getCategoryImagePath(category: string): string | null {
  const cat = category.toLowerCase()
  const imagePath = path.join(process.cwd(), 'public', 'images', 'categories', `${cat}.jpg`)
  return fs.existsSync(imagePath) ? `/images/categories/${cat}.jpg` : null
}
