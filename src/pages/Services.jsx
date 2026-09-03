import Container from '../components/Container.jsx'
import BackLink from '../components/BackLink.jsx'
import BookingButton from '../components/BookingButton.jsx'
import usePageMeta from '../hooks/usePageMeta.js'
import { services, meta } from '../data/site.js'

export default function Services() {
  usePageMeta('Послуги', meta.services)

  return (
    <>
      <Container className="pt-6">
        <BackLink />
      </Container>

      <section className="mt-6 bg-white py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-20">
            <div>
              <h1 className="max-w-[20ch] font-display text-h1">{services.lead}</h1>

              <ul className="mt-10 max-w-[440px]">
                {services.groups.map((g) => (
                  <li
                    key={g}
                    className="border-t border-line py-4 text-lead first:border-t-0 first:pt-0"
                  >
                    {g}
                  </li>
                ))}
              </ul>

              <BookingButton className="mt-10" />
            </div>

            <img
              src={services.image}
              alt=""
              width="526"
              height="755"
              className="w-full max-w-[420px] justify-self-center rounded-2xl object-cover lg:justify-self-end"
            />
          </div>
        </Container>
      </section>
    </>
  )
}
