import { Link } from 'react-router-dom'
import Container from '../components/Container.jsx'
import usePageMeta from '../hooks/usePageMeta.js'

export default function NotFound() {
  usePageMeta('Сторінку не знайдено')

  return (
    <Container className="py-24 md:py-32">
      <h1 className="max-w-[14ch] font-display text-h1">Такої сторінки немає</h1>
      <p className="mt-5 max-w-[52ch] text-body">
        Можливо, посилання застаріло або в адресі є помилка. Почніть з головної — там є всі розділи.
      </p>
      <Link
        to="/"
        className="mt-10 inline-flex h-14 items-center rounded-full bg-ink px-9 font-medium text-white transition-opacity hover:opacity-85"
      >
        На головну
      </Link>
    </Container>
  )
}
