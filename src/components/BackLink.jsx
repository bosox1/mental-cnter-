import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

export default function BackLink() {
  return (
    <Link to="/" className="inline-flex items-center gap-2 text-body hover:text-ink">
      <Icon icon="material-symbols-light:arrow-back" width="24" height="24" />
      <span>Назад</span>
    </Link>
  )
}
