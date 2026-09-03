import { Icon } from '@iconify/react'
import Container from '../components/Container.jsx'
import BackLink from '../components/BackLink.jsx'
import BookingButton from '../components/BookingButton.jsx'
import { contacts, contactsPage } from '../data/site.js'

export default function Contacts() {
  return (
    <>
      <Container className="pt-4">
        <BackLink />
      </Container>

      <section className="mt-8 bg-white py-16 md:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <img
              src={contactsPage.image}
              alt=""
              loading="lazy"
              className="w-full rounded-2xl object-cover"
            />
            <div>
              <h1 className="font-display text-3xl leading-snug md:text-[48px]">
                {contactsPage.addressLines.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </h1>

              <p className="mt-8 font-display text-2xl md:text-[32px]">
                <a href={contacts.phoneHref} className="hover:underline">{contacts.phone}</a>
              </p>

              <p className="mt-6 text-body md:text-xl">
                Email:{' '}
                <a href={`mailto:${contacts.email}`} className="underline underline-offset-4">
                  {contacts.email}
                </a>
              </p>

              <p className="mt-8 text-body md:text-xl">Соціальні мережі</p>
              <a
                href={contacts.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-body hover:text-ink"
              >
                <Icon icon="cib:telegram-plane" width="24" height="24" />
                TELEGRAM
              </a>

              <div className="mt-10">
                <BookingButton />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
