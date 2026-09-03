// Пара підписів з горизонтальною лінією між ними — повторюється майже на кожній сторінці
export default function LabelRule({ left, right, tone = "dark" }) {
  const color = tone === "dark" ? "text-ink" : "text-white"
  const rule = tone === "dark" ? "bg-ink/30" : "bg-white/30"
  return (
    <div className={`flex items-center gap-4 font-display text-xl md:text-2xl ${color}`}>
      <span className="shrink-0">{left}</span>
      <span className={`h-px flex-1 ${rule}`} aria-hidden="true" />
      <span className="shrink-0">{right}</span>
    </div>
  )
}
