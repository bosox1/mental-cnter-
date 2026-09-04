import { useEffect } from 'react'
import { pages, siteName } from '../data/site.js'

export function metaFor(path) {
  const page = pages.find((p) => p.path === path)
  return {
    title: page?.title ? `${page.title} · ${siteName}` : siteName,
    description: page?.description ?? '',
  }
}

function setMeta(selector, attr, value) {
  if (!value) return
  let tag = document.head.querySelector(selector)
  if (!tag) {
    tag = document.createElement('meta')
    const [key, val] = selector.replace(/meta\[|\]|"/g, '').split('=')
    tag.setAttribute(key, val)
    document.head.appendChild(tag)
  }
  tag.setAttribute(attr, value)
}

// Проставляє <title> і описи для сторінки під час переходів у браузері.
// Ті самі значення вшиваються в HTML під час збірки — див. scripts/prerender.mjs
export default function usePageMeta(path) {
  useEffect(() => {
    const { title, description } = metaFor(path)
    document.title = title
    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', window.location.origin + path)
  }, [path])
}
