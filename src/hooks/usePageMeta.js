import { useEffect } from 'react'

const SUFFIX = "ЗМІСТИ — Центр ментального здоров'я ІФНМУ"

// Проставляє <title> і <meta name="description"> для кожної сторінки.
export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} · ${SUFFIX}` : SUFFIX

    if (!description) return
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'description')
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', description)
  }, [title, description])
}
