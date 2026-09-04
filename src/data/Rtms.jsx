import Container from '../components/Container.jsx'
import BackLink from '../components/BackLink.jsx'
import BookingButton from '../components/BookingButton.jsx'
import usePageMeta from '../hooks/usePageMeta.js'
import { rtms } from '../data/site.js'

export default function Rtms() {
  usePageMeta('/rtms')

  return (
    <>
      <Container className="pt-6">
        <BackLink />
      </Container>

      <section className="mt-6 bg-white py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[420px_minmax(0,1fr)] lg:gap-20">
            <img
              src={rtms.heroImage}
              alt={rtms.heroImageAlt}
              width="526"
              height="640"
              className="w-full max-w-[320px] justify-self-center rounded-2xl object-cover sm:max-w-[380px] lg:max-w-none lg:justify-self-start"
            />

            <div>
              <h1 className="max-w-[24ch] font-display text-h1">{rtms.lead}</h1>

              <ul className="mt-8 space-y-2">
                {rtms.indications.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-lead text-body">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ink" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <BookingButton className="mt-9" />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[420px_minmax(0,1fr)] lg:gap-20">
            <img
              src={rtms.aboutImage}
              alt={rtms.aboutImageAlt}
              width="526"
              height="810"
              loading="lazy"
              className="w-full max-w-[320px] justify-self-center rounded-2xl object-cover sm:max-w-[380px] lg:max-w-none lg:justify-self-start"
            />

            <div>
              <h2 className="font-display text-h2">{rtms.aboutTitle}</h2>
              <div className="mt-6 space-y-4 max-w-[70ch] text-lead text-body">
                {rtms.aboutText.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
