export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button type="button" className="back-to-top" aria-label="Volver arriba" onClick={scrollToTop}>
      &#8593;
    </button>
  )
}
