import { Link } from 'react-router-dom'
import Container from '../components/Container.jsx'

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <h1 className="font-display text-6xl md:text-8xl">Сторінку не знайдено</h1>
      <p className="mt-6 text-body">Можливо, посилання застаріло або в адресі є помилка.</p>
      <Link
        to="/"
        className="mt-10 inline-flex h-14 items-center justify-center rounded-2xl bg-ink px-8 font-semibold text-white"
      >
        На головну
      </Link>
    </Container>
  )
}
