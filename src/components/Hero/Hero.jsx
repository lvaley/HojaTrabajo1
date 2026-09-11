export default function Hero({ onOpenQuote }) {
  return (
    <div className="hero">
      <div className="hero-content">
        <p className="eyebrow">Japón · Isla de Hokkaido</p>
        <h2>Nieve, naturaleza y tradición al norte de Japón</h2>
        <button type="button" className="cta-quote" onClick={onOpenQuote}>
          Cotizar excursión
        </button>
      </div>
    </div>
  )
}
