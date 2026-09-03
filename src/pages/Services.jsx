import Container from '../components/Container.jsx'
import BackLink from '../components/BackLink.jsx'
import BookingButton from '../components/BookingButton.jsx'
import { services } from '../data/site.js'

export default function Services() {
  return (
    <>
      <Container className="pt-4">
        <BackLink />
      </Container>

      <section className="mt-8 bg-white py-16 md:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <img
              src={services.image}
              alt=""
              loading="lazy"
              className="w-full max-w-[488px] rounded-2xl object-cover"
            />
            <div>
              <h1 className="font-display text-3xl leading-snug md:text-[48px]">{services.lead}</h1>
              <ul className="mt-8 space-y-2 text-body md:text-xl">
                {services.groups.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
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
