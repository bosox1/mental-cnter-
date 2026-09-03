import Container from '../components/Container.jsx'
import Section from '../components/Section.jsx'
import PageIntro from '../components/PageIntro.jsx'
import usePageMeta from '../hooks/usePageMeta.js'
import { about, meta } from '../data/site.js'

export default function About() {
  usePageMeta('Хто ми', meta.about)

  return (
    <>
      <PageIntro
        title={about.lead}
        image={about.heroImage}
        imageWidth="350"
        imageHeight="231"
        imageMax={350}
        labelLeft={about.labelLeft}
        labelRight={about.labelRight}
        columnLeft={about.columnLeft}
        columnRight={about.columnRight}
        asList
      />

      <Section>
        <Container>
          <h2 className="font-display text-h2">Команда</h2>
          <div className="mt-10 grid max-w-[1000px] gap-8 sm:grid-cols-2 sm:gap-12">
            {about.team.map((person) => (
              <article key={person.name}>
                {person.photo ? (
                  <img
                    src={person.photo}
                    alt={person.name}
                    width="468"
                    height="532"
                    loading="lazy"
                    className="aspect-[468/532] w-full rounded-2xl object-cover"
                  />
                ) : (
                  <div className="flex aspect-[468/532] w-full items-center justify-center rounded-2xl bg-sun">
                    <span className="font-display text-6xl text-ink/40" aria-hidden="true">
                      {person.name.charAt(0)}
                    </span>
                  </div>
                )}
                <h3 className="mt-6 font-display text-h3">{person.name}</h3>
                <p className="mt-2 max-w-[42ch] text-sm leading-relaxed text-soft">{person.role}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
