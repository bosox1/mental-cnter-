import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { contacts, nav, partners } from '../data/site.js'

const socials = [
  { label: 'Telegram', href: contacts.telegram, icon: 'cib:telegram-plane' },
  { label: 'Instagram', href: contacts.instagram, icon: 'cib:instagram' },
  { label: 'Facebook', href: contacts.facebook, icon: 'cib:facebook-f' },
].filter((s) => s.href)

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto w-full max-w-[1180px] px-6 py-16 sm:px-8 md:py-20 lg:px-12">
        <div className="grid gap-12 md:grid-cols-[1fr_auto] md:gap-16">
          <address className="not-italic">
            <p className="text-label uppercase tracking-[0.08em] text-white/50">Адреса</p>
            <p className="mt-3 text-lead">
              {contacts.city}
              <br />
              {contacts.street}
            </p>
            <p className="mt-6">
              <a
                href={contacts.phoneHref}
                className="text-lead underline decoration-white/40 underline-offset-4 hover:decoration-white"
              >
                {contacts.phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${contacts.email}`}
                className="underline decoration-white/40 underline-offset-4 hover:decoration-white"
              >
                {contacts.email}
              </a>
            </p>

            {socials.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/70 transition-colors hover:text-white"
                  >
                    <Icon icon={s.icon} width="18" height="18" aria-hidden="true" />
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </address>

          <nav className="md:text-right" aria-label="Меню у підвалі">
            <p className="text-label uppercase tracking-[0.08em] text-white/50">Розділи</p>
            <ul className="mt-3 space-y-2">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-lead hover:underline hover:underline-offset-4">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 border-t border-white/15 pt-8">
          <p className="text-label uppercase tracking-[0.08em] text-white/50">Партнери</p>
          <ul className="mt-4 flex flex-wrap items-center gap-3">
            {partners.map((p) => (
              <li key={p.name}>
                <span
                  className="flex h-14 items-center rounded-xl bg-white px-5"
                  title={p.name}
                >
                  <img src={p.logo} alt={p.name} loading="lazy" className="max-h-8 w-auto" />
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-16 font-display text-h1 text-sun">Подбай про себе</p>

        <p className="mt-10 text-xs text-white/50 md:text-sm">{contacts.copyright}</p>
      </div>
    </footer>
  )
}
