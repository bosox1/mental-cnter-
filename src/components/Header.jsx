import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { nav, contacts } from '../data/site.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="relative z-50">
      <div className="mx-auto flex w-full max-w-[1512px] items-center justify-between px-6 py-6 md:px-8">
        <Link to="/" aria-label="На головну">
          <img
            src="/images/logo.png"
            alt="Центр ментального здоров'я ІФНМУ"
            className="h-14 w-auto md:h-[83px]"
          />
        </Link>

        {/* Десктопна навігація */}
        <nav className="hidden items-center gap-8 text-sm tracking-wide lg:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `hover:text-ink ${isActive ? 'text-ink underline underline-offset-4' : 'text-body'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href={contacts.phoneHref}
            className="inline-flex items-center gap-2 text-body hover:text-ink"
          >
            <Icon icon="material-symbols-light:call" width="16" height="16" />
            {contacts.phone}
          </a>
        </nav>

        {/* Бургер */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Закрити меню' : 'Відкрити меню'}
          className="lg:hidden"
        >
          <Icon icon={open ? 'material-symbols-light:close' : 'material-symbols-light:menu'} width="32" height="32" />
        </button>
      </div>

      {/* Мобільне меню */}
      {open && (
        <div className="fixed inset-0 top-0 z-40 bg-paper pt-28 lg:hidden">
          <nav className="mx-auto flex w-full max-w-[520px] flex-col gap-3 px-6">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="flex h-12 items-center justify-center rounded-2xl border border-ink/15 text-lg"
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={contacts.bookingForm}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center justify-center rounded-2xl bg-ink text-lg font-semibold text-white"
            >
              Записатися
            </a>
            <a
              href={contacts.phoneHref}
              className="mt-2 flex items-center justify-center gap-2 text-body"
            >
              <Icon icon="material-symbols-light:call" width="18" height="18" />
              {contacts.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
