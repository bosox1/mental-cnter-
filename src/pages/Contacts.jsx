import { Icon } from '@iconify/react'
import Container from '../components/Container.jsx'
import BackLink from '../components/BackLink.jsx'
import BookingButton from '../components/BookingButton.jsx'
import usePageMeta from '../hooks/usePageMeta.js'
import { contacts, contactsPage } from '../data/site.js'

export default function Contacts() {
  usePageMeta('/contacts')

  return (
    <>
      <Container className="pt-6">
        <BackLink />
      </Container>

      <section className="mt-6 bg-white py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-20">
            <div>
              <h1 className="font-display text-h1">
                {contactsPage.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>

              <a
                href={contactsPage.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-soft transition-colors hover:text-ink"
              >
                <Icon icon="material-symbols-light:location-on-outline" width="20" height="20" aria-hidden="true" />
                Показати на карті
              </a>

              <dl className="mt-10 max-w-[440px]">
                <div className="border-t border-line py-4">
                  <dt className="text-label uppercase tracking-[0.08em] text-soft">Телефон</dt>
                  <dd className="mt-1">
                    <a href={contacts.phoneHref} className="font-display text-h3 hover:underline">
                      {contacts.phone}
                    </a>
                  </dd>
                </div>
                <div className="border-t border-line py-4">
                  <dt className="text-label uppercase tracking-[0.08em] text-soft">Пошта</dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${contacts.email}`}
                      className="text-lead underline underline-offset-4"
                    >
                      {contacts.email}
                    </a>
                  </dd>
                </div>
                <div className="border-t border-line py-4">
                  <dt className="text-label uppercase tracking-[0.08em] text-soft">Соцмережі</dt>
                  <dd className="mt-1">
                    <a
                      href={contacts.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-lead transition-colors hover:text-ink"
                    >
                      <Icon icon="cib:telegram-plane" width="20" height="20" aria-hidden="true" />
                      Telegram
                    </a>
                  </dd>
                </div>
              </dl>

              <BookingButton className="mt-10" />
            </div>

            <img
              src={contactsPage.image}
              alt=""
              width="589"
              height="906"
              className="w-full max-w-[260px] justify-self-center rounded-2xl object-cover sm:max-w-[320px] lg:max-w-[420px] lg:justify-self-end"
            />
          </div>
        </Container>
      </section>
    </>
  )
}
