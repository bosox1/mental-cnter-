import { Component } from 'react'

// Якщо десь у React станеться помилка — показуємо повідомлення,
// а не порожню білу сторінку.
export default class ErrorBoundary extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error('Помилка рендерингу:', error, info)
  }

  render() {
    if (!this.state.error) return this.props.children

    return (
      <div className="mx-auto flex min-h-screen max-w-[560px] flex-col items-center justify-center px-6 text-center">
        <h1 className="font-display text-h1">Щось пішло не так</h1>
        <p className="mt-4 text-body">
          Сторінку не вдалося показати. Спробуйте оновити її або повернутися на головну.
        </p>
        <button
          type="button"
          onClick={() => window.location.assign('/')}
          className="mt-8 inline-flex h-14 items-center rounded-full bg-ink px-9 font-medium text-white"
        >
          На головну
        </button>
      </div>
    )
  }
}
