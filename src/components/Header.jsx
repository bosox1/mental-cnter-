import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { nav, contacts } from '../data/site.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  // Закриваємо меню при переході на іншу сторінку
  useEffect(() => setOpen(false), [pathname])

  // Блокуємо прокрутку тіла, поки відкрите мобільне меню
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Шапка «підіймається» з фоном лише після прокрутки
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Без backdrop-blur: фільтр створює containing block і ламає
  // позиціонування fixed-меню всередині шапки.
  const bg = scrolled
    ? 'bg-paper border-line'
    : `${isHome ? 'bg-sun' : 'bg-paper'} border-transparent`

  return (
    <header className={`sticky top-0 z-50 border-b transition-colors duration-300 ${bg}`}>
      <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between gap-6 px-6 py-4 sm:px-8 lg:px-12">
        <Link to="/" aria-label="На головну" className="shrink-0">
          <img
            src="/images/logo.png"
            alt="ЗМІСТИ — Центр ментального здоров'я ІФНМУ"
            width="218"
            height="83"
            className="h-12 w-auto md:h-16"
          />
        </Link>

        {/* Десктопна навігація */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Основне меню">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-label tracking-[0.08em] transition-colors ${
                  isActive
                    ? 'text-ink underline decoration-1 underline-offset-[6px]'
                    : 'text-soft hover:text-ink'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={contacts.phoneHref}
            className="inline-flex items-center gap-2 text-sm text-body transition-colors hover:text-ink"
          >
            <Icon icon="material-symbols-light:call" width="18" height="18" aria-hidden="true" />
            {contacts.phone}
          </a>
          <a
            href={contacts.bookingForm}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center rounded-full bg-ink px-6 text-sm font-medium text-white transition-opacity hover:opacity-85"
          >
            Записатися
          </a>
        </div>

        {/* Бургер */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Закрити меню' : 'Відкрити меню'}
          className="lg:hidden"
        >
          <Icon
            icon={open ? 'material-symbols-light:close' : 'material-symbols-light:menu'}
            width="32"
            height="32"
          />
        </button>
      </div>

      {/* Мобільне меню */}
      {open && (
        <div className="fixed inset-x-0 bottom-0 top-[80px] z-40 overflow-y-auto bg-paper px-6 pb-10 pt-6 lg:hidden">
          <nav className="mx-auto flex w-full max-w-[520px] flex-col gap-2" aria-label="Мобільне меню">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="flex h-14 items-center rounded-2xl border border-line px-5 text-lg"
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={contacts.bookingForm}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex h-14 items-center justify-center rounded-2xl bg-ink text-lg font-medium text-white"
            >
              Записатися
            </a>
            <a
              href={contacts.phoneHref}
              className="mt-3 flex items-center justify-center gap-2 text-body"
            >
              <Icon icon="material-symbols-light:call" width="18" height="18" aria-hidden="true" />
              {contacts.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
