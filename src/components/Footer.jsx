import { Link } from 'react-router-dom'
import { contacts, nav, partners } from '../data/site.js'

const socials = [
  { label: 'INSTAGRAM', href: contacts.instagram },
  { label: 'FACEBOOK', href: contacts.facebook },
  { label: 'TELEGRAM', href: contacts.telegram },
].filter((s) => s.href)

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto w-full max-w-[970px] px-6 py-20 md:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <address className="space-y-1 text-sm not-italic md:text-xl">
            <p>{contacts.city}</p>
            <p>{contacts.street}</p>
            <p className="pt-4">
              EMAIL:{' '}
              <a href={`mailto:${contacts.email}`} className="underline underline-offset-4">
                {contacts.email}
              </a>
            </p>
            <p>
              <a href={contacts.phoneHref} className="underline underline-offset-4">
                {contacts.phone}
              </a>
            </p>
          </address>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm md:justify-end md:text-xl">
            {nav.map((item) => (
              <Link key={item.to} to={item.to} className="hover:underline">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {socials.length > 0 && (
          <div className="mt-14">
            <p className="text-sm md:text-xl">СОЦІАЛЬНІ МЕРЕЖІ</p>
            <div className="mt-3 flex flex-wrap gap-6 text-sm">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="mt-14 flex flex-wrap items-center gap-4">
          {partners.map((p) => (
            <span
              key={p.name}
              className="flex h-16 items-center rounded-xl bg-white px-5"
              title={p.name}
            >
              <img src={p.logo} alt={p.name} loading="lazy" className="max-h-9 w-auto" />
            </span>
          ))}
        </div>

        <p className="mt-16 font-display text-5xl text-mute underline underline-offset-8 md:text-[120px] md:leading-none">
          Подбай про себе
        </p>

        <p className="mt-10 text-xs md:text-sm">{contacts.copyright}</p>
      </div>
    </footer>
  )
}
