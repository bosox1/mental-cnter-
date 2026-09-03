import { Icon } from '@iconify/react'
import Container from '../components/Container.jsx'
import LabelRule from '../components/LabelRule.jsx'
import BookingButton from '../components/BookingButton.jsx'
import { home } from '../data/site.js'

export default function Home() {
  return (
    <>
      {/* Герой */}
      <section className="relative -mt-[104px] overflow-hidden bg-sun pt-[104px]">
        <div
          className="pointer-events-none absolute -left-[32%] -top-[38%] hidden aspect-square w-[88%] rounded-full bg-white/35 md:block"
          aria-hidden="true"
        />
        <Container className="relative py-20 md:py-32">
          <h1 className="font-display text-6xl leading-[0.95] sm:text-8xl md:text-[159px] md:leading-[0.9]">
            {home.heroLines[0]}
            <br />
            {home.heroLines[1]}
          </h1>
          <div className="mt-10 grid items-end gap-10 md:grid-cols-[minmax(0,370px)_1fr]">
            <div>
              <p className="text-lg text-body md:text-xl">{home.heroSub}</p>
              <div className="mt-12">
                <BookingButton />
              </div>
            </div>
            <img
              src={home.heroImage}
              alt={home.heroImageAlt}
              className="order-first w-full max-w-[420px] justify-self-end md:order-none"
            />
          </div>
        </Container>
      </section>

      {/* Вступ + місія */}
      <section className="py-20 md:py-32">
        <Container>
          <p className="font-display text-3xl leading-snug md:text-[56px]">{home.intro}</p>

          <div className="mt-20 grid gap-10 md:grid-cols-2">
            <p className="max-w-[370px] text-body">{home.mission.left}</p>
            <p className="max-w-[370px] text-body">{home.mission.right}</p>
          </div>

          <div className="mt-12">
            <LabelRule left={home.mission.labelLeft} right={home.mission.labelRight} />
          </div>
        </Container>
      </section>

      {/* Напрямки роботи */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <h2 className="font-display text-4xl md:text-[56px]">{home.directionsTitle}</h2>
          <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-x-16">
            {home.directions.map((d) => (
              <div key={d.title} className="flex gap-6">
                <span className="flex size-20 shrink-0 items-center justify-center rounded-full bg-sun">
                  <Icon icon={d.icon} width="36" height="36" />
                </span>
                <div>
                  <h3 className="font-display text-2xl md:text-[28px]">{d.title}</h3>
                  <p className="mt-2 text-soft">{d.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Ми віримо */}
      <section className="py-20 md:py-32">
        <Container>
          <h2 className="font-display text-3xl leading-snug md:text-[56px]">{home.belief.title}</h2>
          <img
            src={home.belief.image}
            alt={home.belief.imageAlt}
            loading="lazy"
            className="mt-12 aspect-[1000/671] w-full rounded-2xl object-cover"
          />
          <p className="mt-8 text-body md:text-xl">{home.belief.caption}</p>
          <div className="mt-10">
            <LabelRule left={home.belief.labelLeft} right={home.belief.labelRight} />
          </div>
        </Container>
      </section>

      {/* Принципи */}
      <section className="pb-24 md:pb-32">
        <Container>
          <h2 className="font-display text-4xl md:text-[56px]">{home.principlesTitle}</h2>
          <div className="mt-14 space-y-16">
            {home.principles.map((p) => (
              <article key={p.title} className="grid gap-8 border-t border-ink/20 pt-8 md:grid-cols-2 md:gap-16">
                <div>
                  <h3 className="font-display text-2xl md:text-[32px]">{p.title}</h3>
                  <p className="mt-4 text-body">{p.text}</p>
                </div>
                <img
                  src={p.image}
                  alt=""
                  loading="lazy"
                  className="aspect-[470/320] w-full rounded-2xl object-cover"
                />
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
