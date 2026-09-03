import Container from '../components/Container.jsx'
import Section from '../components/Section.jsx'
import PageIntro from '../components/PageIntro.jsx'
import usePageMeta from '../hooks/usePageMeta.js'
import { news, meta } from '../data/site.js'

export default function News() {
  usePageMeta('Новини', meta.news)

  return (
    <>
      <PageIntro
        title={news.lead}
        image={news.heroImage}
        imageWidth="185"
        imageHeight="253"
        imageMax={185}
        labelLeft={news.labelLeft}
        labelRight={news.labelRight}
        columnLeft={news.columnLeft}
        columnRight={news.columnRight}
      />

      <Section>
        <Container>
          <h2 className="font-display text-h2">{news.title}</h2>
          <div className="mt-12 space-y-12">
            {news.items.map((item) => (
              <article
                key={item.title}
                className="grid gap-6 border-t border-line pt-8 md:grid-cols-[minmax(0,1fr)_470px] md:gap-16"
              >
                <div>
                  <h3 className="font-display text-h3">{item.title}</h3>
                  <p className="mt-3 max-w-[58ch] text-body">{item.text}</p>
                  {item.note && (
                    <p className="mt-5 text-label uppercase tracking-[0.08em] text-soft">
                      {item.note}
                    </p>
                  )}
                </div>
                <img
                  src={item.image}
                  alt=""
                  width="470"
                  height="321"
                  loading="lazy"
                  className="aspect-[470/321] w-full rounded-2xl object-cover"
                />
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
