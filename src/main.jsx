import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Браузер не має сам відновлювати позицію прокрутки —
// цим керує ScrollToTop у App.jsx
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

const container = document.getElementById('root')

const tree = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// Сторінки заздалегідь відрендерені під час збірки (scripts/prerender.mjs),
// тому «оживляємо» готовий HTML замість того, щоб малювати з нуля.
if (container.hasChildNodes()) {
  hydrateRoot(container, tree)
} else {
  createRoot(container).render(tree)
}
