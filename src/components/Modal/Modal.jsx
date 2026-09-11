import { useEffect } from 'react'

/**
 * Modal genérico y reutilizable: overlay + caja, se cierra con el botón
 * "x", haciendo clic fuera de la caja, o con la tecla Escape. Bloquea el
 * scroll del fondo mientras está abierto.
 */
export default function Modal({ isOpen, onClose, children, boxClassName = '', labelledBy }) {
  useEffect(() => {
    if (!isOpen) return undefined

    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) onClose()
  }

  return (
    <div className="modal-overlay open" onClick={handleOverlayClick}>
      <div
        className={`modal-box ${boxClassName}`.trim()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
      >
        <button type="button" className="modal-close" aria-label="Cerrar" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  )
}
