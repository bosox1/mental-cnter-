import { contacts } from '../data/site.js'

export default function BookingButton({ className = '', children = 'Записатися' }) {
  return (
    <a
      href={contacts.bookingForm}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex h-14 items-center justify-center rounded-full bg-ink px-9 font-medium text-white transition-opacity hover:opacity-85 ${className}`}
    >
      {children}
    </a>
  )
}
