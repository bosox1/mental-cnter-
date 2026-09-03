import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react'

export default function BackLink() {
  const navigate = useNavigate()
  const goBack = () => {
    if (window.history.length > 2) navigate(-1)
    else navigate('/')
  }

  return (
    <button
      type="button"
      onClick={goBack}
      className="inline-flex items-center gap-2 text-soft transition-colors hover:text-ink"
    >
      <Icon icon="material-symbols-light:arrow-back" width="22" height="22" aria-hidden="true" />
      <span>Назад</span>
    </button>
  )
}
