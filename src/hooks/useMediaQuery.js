import { useEffect, useState } from 'react'

/**
 * Hook reutilizable que retorna true/false según si el media query dado
 * coincide con el viewport actual, y se actualiza en tiempo real al
 * redimensionar la ventana.
 */
export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches)
  const [trackedQuery, setTrackedQuery] = useState(query)

  // Si el query cambia entre renders, se recalcula de inmediato (patrón
  // "adjusting state during rendering" recomendado por React, en vez de
  // hacerlo dentro de un efecto).
  if (query !== trackedQuery) {
    setTrackedQuery(query)
    setMatches(window.matchMedia(query).matches)
  }

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query)
    const listener = (event) => setMatches(event.matches)

    mediaQueryList.addEventListener('change', listener)

    return () => mediaQueryList.removeEventListener('change', listener)
  }, [query])

  return matches
}
