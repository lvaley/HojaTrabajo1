import { useState } from 'react'

const navLinks = [
  { href: '#descripcion', label: 'Descripción' },
  { href: '#galeria', label: 'Galería' },
  { href: '#itinerario', label: 'Itinerario' },
  { href: '#actividades', label: 'Actividades' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar({ onToggleSearch }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <div className="nav-inner">
        <h1>Hokkaido &#10052;&#65039;</h1>

        <button
          type="button"
          className="search-toggle"
          aria-label="Buscar actividades"
          onClick={onToggleSearch}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="7"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>

        <button
          type="button"
          className={`hamburger${menuOpen ? ' open' : ''}`}
          aria-label="Abrir menú de navegación"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={menuOpen ? 'open' : ''}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
