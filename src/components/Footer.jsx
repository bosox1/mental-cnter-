import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { contacts, nav, partners } from '../data/site.js'

const socials = [
  { label: 'Telegram', href: contacts.telegram, icon: 'cib:telegram-plane' },
  { label: 'Instagram', href: contacts.instagram, icon: 'cib:instagram' },
  { label: 'Facebook', href: contacts.facebook, icon: 'cib:facebook-f' },
].filter((s) => s.href)

function ColumnTitle({ children }) {
  return (
    <p className="text-label uppercase tracking-[0.08em] text-white/45">{children}</p>
  )
}

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto w-full max-w-[1180px] px-6 py-16 sm:px-8 md:py-20 lg:px-12">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr] lg:gap-16">
          {/* Бренд */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" aria-label="На головну" className="inline-block">
              <img
                src="/images/logo.png"
                alt="ЗМІСТИ — Центр ментального здоров'я ІФНМУ"
                width="218"
                height="83"
                loading="lazy"
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-6 max-w-[14ch] font-display text-h2 text-sun">Подбай про себе</p>
          </div>

          {/* Навігація */}
          <nav aria-label="Меню у підвалі">
            <ColumnTitle>Розділи</ColumnTitle>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Контакти */}
          <div>
            <ColumnTitle>Контакти</ColumnTitle>
            <address className="mt-4 space-y-2.5 not-italic">
              <p className="text-white/80">
                {contacts.city}
                <br />
                {contacts.street}
              </p>
              <p>
                <a
                  href={contacts.phoneHref}
                  className="underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
                >
                  {contacts.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${contacts.email}`}
                  className="underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
                >
                  {contacts.email}
                </a>
              </p>
            </address>

            {socials.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-4">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white/70 transition-colors hover:text-white"
                    >
                      <Icon icon={s.icon} width="18" height="18" aria-hidden="true" />
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Партнери */}
        <div className="mt-14 border-t border-white/15 pt-8">
          <ColumnTitle>Партнери</ColumnTitle>
          <ul className="mt-4 flex flex-wrap items-center gap-3">
            {partners.map((p) => (
              <li key={p.name}>
                <span className="flex h-12 items-center rounded-lg bg-white px-4" title={p.name}>
                  <img src={p.logo} alt={p.name} loading="lazy" className="max-h-7 w-auto" />
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6">
          <p className="text-xs text-white/45 md:text-sm">{contacts.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
