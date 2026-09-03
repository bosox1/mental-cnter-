import Container from './Container.jsx'
import BackLink from './BackLink.jsx'
import LabelRule from './LabelRule.jsx'

// Розбиває рядок «пункт; пункт; пункт» на список
export function splitList(text) {
  return text
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean)
}

function Column({ text, asList }) {
  if (!asList) return <p className="text-body">{text}</p>
  return (
    <ul className="space-y-3">
      {splitList(text).map((item) => (
        <li key={item} className="flex gap-3 text-body">
          <span className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-ink/40" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

// Спільна «шапка» внутрішніх сторінок: заголовок + ілюстрація + дві колонки.
export default function PageIntro({
  title,
  image,
  imageAlt = '',
  imageWidth,
  imageHeight,
  imageMax = 350,
  labelLeft,
  labelRight,
  columnLeft,
  columnRight,
  asList = false,
}) {
  return (
    <>
      <Container className="pt-6">
        <BackLink />
      </Container>

      <section className="mt-6 bg-white py-16 md:py-24">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
            <h1 className="max-w-[24ch] font-display text-h1">{title}</h1>
            {image && (
              <img
                src={image}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
                className="w-full rounded-2xl object-cover"
                style={{ maxWidth: `${imageMax}px` }}
              />
            )}
          </div>

          {(columnLeft || columnRight) && (
            <div className="mt-14 md:mt-20">
              <LabelRule left={labelLeft} right={labelRight} />
              <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-16">
                <Column text={columnLeft} asList={asList} />
                <Column text={columnRight} asList={asList} />
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  )
}
