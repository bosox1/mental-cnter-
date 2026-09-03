// Задає однаковий вертикальний ритм усім блокам сторінки.
const tones = {
  paper: '',
  white: 'bg-white',
  sun: 'bg-sun',
}

export default function Section({ tone = 'paper', className = '', children }) {
  return (
    <section className={`py-16 md:py-24 ${tones[tone] ?? ''} ${className}`}>
      {children}
    </section>
  )
}
