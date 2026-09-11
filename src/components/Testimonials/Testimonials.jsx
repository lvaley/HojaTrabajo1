import { useMemo, useState } from 'react'
import { testimonialNames, testimonialComments } from '../../data/testimonials'
import useMediaQuery from '../../hooks/useMediaQuery'

const CARDS_PER_GROUP = 3

function shuffle(array) {
  const copy = [...array]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

/**
 * Sección de Reseñas / Testimonios Aleatorios.
 * Combina 2 arreglos (nombres y comentarios) al azar y los agrupa en
 * bloques de 3 (mismo patrón que la galería de escritorio: 6 -> 2 grupos).
 * - Escritorio: 1 clic en "Ver más opiniones" cambia de grupo de inmediato.
 * - Móvil: 1 clic avanza una tarjeta; al completar el grupo, pasa al siguiente.
 */
export default function Testimonials() {
  const isMobile = useMediaQuery('(max-width: 900px)')

  const groups = useMemo(() => {
    const shuffledNames = shuffle(testimonialNames)
    const shuffledComments = shuffle(testimonialComments)
    const totalGroups = Math.ceil(shuffledNames.length / CARDS_PER_GROUP)

    return Array.from({ length: totalGroups }, (_, groupIdx) =>
      Array.from({ length: CARDS_PER_GROUP }, (_, slot) => {
        const dataIndex = groupIdx * CARDS_PER_GROUP + slot
        return { name: shuffledNames[dataIndex], comment: shuffledComments[dataIndex] }
      })
    )
  }, [])

  const [groupIndex, setGroupIndex] = useState(0)
  const [mobileSlot, setMobileSlot] = useState(0)

  const activeGroup = groups[groupIndex]

  const goToGroup = (index) => {
    setGroupIndex(index)
    setMobileSlot(0)
  }

  const handleMoreOpinions = () => {
    if (isMobile) {
      setMobileSlot((slot) => {
        const nextSlot = slot + 1
        if (nextSlot >= CARDS_PER_GROUP) {
          setGroupIndex((current) => (current + 1) % groups.length)
          return 0
        }
        return nextSlot
      })
    } else {
      goToGroup((groupIndex + 1) % groups.length)
    }
  }

  return (
    <section id="testimonios">
      <h2>Opiniones de nuestros visitantes</h2>

      <div className="testimonial-grid">
        {activeGroup.map((item, slot) => (
          <div
            key={`${groupIndex}-${slot}`}
            className={`testimonial-card${slot === mobileSlot ? ' active-card' : ''}`}
          >
            <div className="testimonial-quote-icon">&#8220;</div>
            <p className="testimonial-text">&quot;{item.comment}&quot;</p>
            <p className="testimonial-author">{item.name}</p>
          </div>
        ))}
      </div>

      {/* Escritorio: 1 punto por grupo */}
      <div className="testimonial-dots testimonial-dots-desktop">
        {groups.map((_, index) => (
          <button
            key={index}
            type="button"
            className={index === groupIndex ? 'active' : ''}
            aria-label={`Ver grupo de opiniones ${index + 1}`}
            onClick={() => goToGroup(index)}
          />
        ))}
      </div>

      {/* Móvil: 1 punto por tarjeta dentro del grupo activo */}
      <div className="testimonial-dots testimonial-dots-mobile">
        {activeGroup.map((_, slot) => (
          <button
            key={slot}
            type="button"
            className={slot === mobileSlot ? 'active' : ''}
            aria-label={`Ver opinión ${slot + 1}`}
            onClick={() => setMobileSlot(slot)}
          />
        ))}
      </div>

      <button type="button" className="testimonial-btn" onClick={handleMoreOpinions}>
        Ver más opiniones
      </button>
    </section>
  )
}
