// Після звичайної збірки Vite цей скрипт домальовує статичний HTML
// для кожного маршруту. Завдяки цьому Google і месенджери бачать
// справжній вміст сторінки, а не порожній <div id="root">.
import fs from 'node:fs/promises'
import path from 'node:path'
import { render, pages, siteName, ogImage } from '../.ssr/entry-server.js'

const DIST = path.resolve('dist')

// Netlify підставляє адресу сайту в змінну URL під час збірки
const origin = (process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '')

const esc = (s = '') =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const template = await fs.readFile(path.join(DIST, 'index.html'), 'utf8')

function head({ path: routePath, title, description }) {
  const fullTitle = title ? `${title} · ${siteName}` : siteName
  const url = origin ? origin + routePath : routePath
  const image = origin ? origin + ogImage : ogImage

  return [
    `<meta name="description" content="${esc(description)}" />`,
    origin ? `<link rel="canonical" href="${esc(url)}" />` : '',
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="uk_UA" />`,
    `<meta property="og:site_name" content="${esc(siteName)}" />`,
    `<meta property="og:title" content="${esc(fullTitle)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:image" content="${esc(image)}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
  ]
    .filter(Boolean)
    .join('\n    ')
}

for (const page of pages) {
  const fullTitle = page.title ? `${page.title} · ${siteName}` : siteName
  const html = render(page.path)

  const out = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(fullTitle)}</title>`)
    .replace('<!--seo-->', head(page))
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)

  const dir = page.path === '/' ? DIST : path.join(DIST, page.path)
  await fs.mkdir(dir, { recursive: true })
  await fs.writeFile(path.join(dir, 'index.html'), out, 'utf8')
  console.log('  готово', page.path)
}

// robots.txt і карта сайту
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url><loc>${origin}${p.path}</loc></url>`).join('\n')}
</urlset>
`

if (origin) {
  await fs.writeFile(path.join(DIST, 'sitemap.xml'), sitemap, 'utf8')
  await fs.writeFile(
    path.join(DIST, 'robots.txt'),
    `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`,
    'utf8',
  )
  console.log('  готово sitemap.xml і robots.txt')
} else {
  console.log('  адресу сайту не передано (змінна URL) — sitemap.xml пропущено')
}
