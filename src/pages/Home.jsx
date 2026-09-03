import { Icon } from '@iconify/react'
import Container from '../components/Container.jsx'
import Section from '../components/Section.jsx'
import LabelRule from '../components/LabelRule.jsx'
import BookingButton from '../components/BookingButton.jsx'
import usePageMeta from '../hooks/usePageMeta.js'
import { home, contacts, meta } from '../data/site.js'

export default function Home() {
  usePageMeta(null, meta.home)

  return (
    <>
      {/* Герой */}
      <section className="relative isolate overflow-hidden bg-sun">
        <div
          className="pointer-events-none absolute -right-[10%] top-1/2 hidden aspect-square w-[58%] -translate-y-1/2 rounded-full bg-white/40 lg:block"
          aria-hidden="true"
        />
        <Container className="relative grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-16">
          <div>
            <h1 className="font-display text-display">
              {home.heroLines[0]}
              <br />
              {home.heroLines[1]}
            </h1>
            <p className="mt-8 max-w-[42ch] text-lead text-body">{home.heroSub}</p>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <BookingButton />
              <a
                href={contacts.phoneHref}
                className="inline-flex items-center gap-2 text-lead text-body transition-colors hover:text-ink"
              >
                <Icon icon="material-symbols-light:call" width="22" height="22" aria-hidden="true" />
                {contacts.phone}
              </a>
            </div>
          </div>

          <img
            src={home.heroImage}
            alt={home.heroImageAlt}
            width="514"
            height="468"
            className="w-full max-w-[380px] justify-self-center lg:max-w-[440px] lg:justify-self-end"
          />
        </Container>
      </section>

      {/* Вступ і місія */}
      <Section>
        <Container>
          <p className="max-w-[900px] font-display text-h1">{home.intro}</p>

          <div className="mt-14 md:mt-20">
            <LabelRule left={home.mission.labelLeft} right={home.mission.labelRight} />
            <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-16">
              <p className="text-body">{home.mission.left}</p>
              <p className="text-body">{home.mission.right}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Напрямки роботи */}
      <Section tone="white">
        <Container>
          <h2 className="max-w-[16ch] font-display text-h2">{home.directionsTitle}</h2>
          <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
            {home.directions.map((d) => (
              <div key={d.title}>
                <span className="flex size-14 items-center justify-center rounded-full bg-sun">
                  <Icon icon={d.icon} width="28" height="28" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-h3">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-soft">{d.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Ми віримо */}
      <Section>
        <Container>
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,320px)] md:items-end md:gap-16">
            <h2 className="max-w-[18ch] font-display text-h2">{home.belief.title}</h2>
            <p className="text-body">{home.belief.caption}</p>
          </div>

          <img
            src={home.belief.image}
            alt={home.belief.imageAlt}
            width="1000"
            height="671"
            loading="lazy"
            className="mt-10 aspect-[1000/671] w-full max-w-[1000px] rounded-2xl object-cover"
          />

          <LabelRule
            left={home.belief.labelLeft}
            right={home.belief.labelRight}
            className="mt-10"
          />
        </Container>
      </Section>

      {/* Принципи */}
      <Section tone="white">
        <Container>
          <h2 className="max-w-[16ch] font-display text-h2">{home.principlesTitle}</h2>
          <div className="mt-12 space-y-12">
            {home.principles.map((p) => (
              <article
                key={p.title}
                className="grid gap-6 border-t border-line pt-8 md:grid-cols-[minmax(0,1fr)_470px] md:gap-16"
              >
                <div>
                  <h3 className="font-display text-h3">{p.title}</h3>
                  <p className="mt-3 max-w-[58ch] text-body">{p.text}</p>
                </div>
                <img
                  src={p.image}
                  alt=""
                  width="470"
                  height="320"
                  loading="lazy"
                  className="aspect-[470/320] w-full rounded-2xl object-cover"
                />
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
