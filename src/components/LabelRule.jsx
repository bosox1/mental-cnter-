// Заголовок із двох підписів і лінією між ними.
// Стоїть НАД парою колонок і підписує кожну з них.
export default function LabelRule({ left, right, tone = 'dark', className = '' }) {
  const color = tone === 'dark' ? 'text-ink' : 'text-white'
  const rule = tone === 'dark' ? 'bg-ink/25' : 'bg-white/30'
  return (
    <div className={`flex items-center gap-5 font-display text-h3 ${color} ${className}`}>
      <span className="shrink-0">{left}</span>
      <span className={`h-px flex-1 ${rule}`} aria-hidden="true" />
      <span className="shrink-0">{right}</span>
    </div>
  )
}
