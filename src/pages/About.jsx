import Container from '../components/Container.jsx'
import LabelRule from '../components/LabelRule.jsx'
import BackLink from '../components/BackLink.jsx'
import { about } from '../data/site.js'

export default function About() {
  return (
    <>
      <Container className="pt-4">
        <BackLink />
      </Container>

      <section className="mt-8 bg-white py-16 md:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
            <p className="max-w-[760px] font-display text-3xl leading-snug md:text-[56px]">
              {about.lead}
            </p>
            <img
              src={about.heroImage}
              alt=""
              loading="lazy"
              className="w-full max-w-[350px] rounded-2xl object-cover"
            />
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            <p className="max-w-[370px] text-body">{about.columnLeft}</p>
            <p className="max-w-[370px] text-body">{about.columnRight}</p>
          </div>

          <div className="mt-12">
            <LabelRule left={about.labelLeft} right={about.labelRight} />
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 sm:grid-cols-2">
            {about.team.map((person) => (
              <article key={person.name} className="rounded-2xl bg-white p-4">
                {person.photo ? (
                  <img
                    src={person.photo}
                    alt={person.name}
                    loading="lazy"
                    className="aspect-[468/532] w-full rounded-xl object-cover"
                  />
                ) : (
                  <div className="flex aspect-[468/532] w-full items-center justify-center rounded-xl bg-sun">
                    <span className="font-display text-6xl text-ink/40" aria-hidden="true">
                      {person.name.split(' ')[0][0]}
                    </span>
                  </div>
                )}
                <h2 className="mt-6 font-display text-2xl md:text-[32px]">{person.name}</h2>
                <p className="mt-2 text-sm text-body md:text-base">{person.role}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
