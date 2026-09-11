import { useState } from 'react'
import activities from '../../data/activities'

/**
 * Filtro de Actividades en Tiempo Real.
 * Recibe `searchQuery` (controlado desde App/Navbar) y, en cada cambio,
 * busca la primera actividad cuyo título o descripción coincida con el
 * texto y salta automáticamente a esa tarjeta del carrusel. Si no hay
 * coincidencias, muestra un mensaje de "sin resultados".
 */
export default function Activities({ searchQuery }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [noResults, setNoResults] = useState(false)
  const [trackedQuery, setTrackedQuery] = useState(searchQuery)

  // El filtrado en tiempo real se resuelve durante el render (patrón
  // "adjusting state when a prop changes" de React) en vez de un efecto,
  // así se evita un ciclo extra de render.
  if (searchQuery !== trackedQuery) {
    setTrackedQuery(searchQuery)

    const query = searchQuery.trim().toLowerCase()

    if (query === '') {
      setNoResults(false)
    } else {
      const matchIndex = activities.findIndex((activity) =>
        `${activity.title} ${activity.description}`.toLowerCase().includes(query)
      )

      if (matchIndex >= 0) {
        setActiveIndex(matchIndex)
        setNoResults(false)
      } else {
        setNoResults(true)
      }
    }
  }

  const total = activities.length
  const nextActivity = () => setActiveIndex((current) => (current + 1) % total)
  const prevActivity = () => setActiveIndex((current) => (current - 1 + total) % total)

  return (
    <section id="actividades">
      <h2>Actividades adicionales</h2>

      <div className={`activities-carousel${noResults ? ' no-results' : ''}`}>
        <p className="no-results-msg">
          No se encontraron actividades que coincidan con tu búsqueda.
        </p>

        <div className="activity-track">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className={`activity-slide slide-${index + 1}${index === activeIndex ? ' active' : ''}`}
            >
              <button
                type="button"
                className="nav-arrow prev"
                aria-label="Actividad anterior"
                onClick={prevActivity}
              >
                ‹
              </button>
              <div className="icon">{activity.icon}</div>
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
              <button
                type="button"
                className="nav-arrow next"
                aria-label="Siguiente actividad"
                onClick={nextActivity}
              >
                ›
              </button>
            </div>
          ))}
        </div>

        <div className="activity-dots">
          {activities.map((activity, index) => (
            <button
              key={activity.id}
              type="button"
              className={index === activeIndex ? 'active' : ''}
              aria-label={`Ir a ${activity.title}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
