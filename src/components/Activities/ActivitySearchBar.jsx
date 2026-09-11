import { useEffect, useRef } from 'react'

/**
 * Barra de búsqueda de actividades. Se abre desde el ícono de lupa del
 * Navbar y queda fija debajo del header. Se cierra con el botón "x",
 * o con la tecla Escape.
 */
export default function ActivitySearchBar({ isOpen, query, onQueryChange, onClose }) {
  const inputRef = useRef(null)

  useEffect(() => {
    if (isOpen) inputRef.current?.focus()
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  return (
    <div className={`activity-search-bar${isOpen ? ' open' : ''}`}>
      <svg className="search-icon-small" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="11" cy="11" r="7"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="Buscar actividad (ej. esquí, onsen, gastronomía)..."
      />
      <button type="button" aria-label="Cerrar búsqueda" onClick={onClose}>
        &times;
      </button>
    </div>
  )
}
