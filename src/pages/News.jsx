import Container from '../components/Container.jsx'
import LabelRule from '../components/LabelRule.jsx'
import BackLink from '../components/BackLink.jsx'
import { news } from '../data/site.js'

export default function News() {
  return (
    <>
      <Container className="pt-4">
        <BackLink />
      </Container>

      <section className="mt-8 bg-white py-16 md:py-24">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
            <h1 className="max-w-[760px] font-display text-3xl leading-snug md:text-[56px]">
              {news.lead}
            </h1>
            <img
              src={news.heroImage}
              alt=""
              loading="lazy"
              className="w-full max-w-[185px] rounded-2xl object-cover"
            />
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            <p className="max-w-[400px] text-body">{news.columnLeft}</p>
            <p className="max-w-[470px] text-body">{news.columnRight}</p>
          </div>

          <div className="mt-12">
            <LabelRule left={news.labelLeft} right={news.labelRight} />
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <h2 className="font-display text-4xl md:text-[56px]">{news.title}</h2>
          <div className="mt-14 space-y-16">
            {news.items.map((item) => (
              <article key={item.title} className="grid gap-8 border-t border-ink/20 pt-8 md:grid-cols-2 md:gap-16">
                <div>
                  <h3 className="font-display text-2xl md:text-[32px]">{item.title}</h3>
                  <p className="mt-4 text-body">{item.text}</p>
                  {item.note && <p className="mt-6 text-sm text-body/70">{item.note}</p>}
                </div>
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  className="aspect-[470/321] w-full rounded-2xl object-cover"
                />
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
