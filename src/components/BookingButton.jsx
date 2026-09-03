import { contacts } from '../data/site.js'

export default function BookingButton({ className = "", children = "Записатися" }) {
  return (
    <a
      href={contacts.bookingForm}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex h-16 w-full max-w-[370px] items-center justify-center rounded-2xl bg-ink px-5 text-xl font-semibold text-white transition-opacity hover:opacity-85 md:text-2xl ${className}`}
    >
      {children}
    </a>
  )
}
