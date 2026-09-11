export default function Description() {
  return (
    <section id="descripcion">
      <h2>Descripción del lugar</h2>
      <p>
        Hokkaido es la isla más septentrional de Japón, reconocida por sus paisajes naturales
        espectaculares, sus montañas volcánicas, sus campos de lavanda, sus aguas termales
        (onsen) y sus inviernos nevados que la convierten en uno de los destinos turísticos
        más atractivos del país. Su capital, Sapporo, es famosa mundialmente por el
        Festival de la Nieve que se celebra cada mes de febrero.
      </p>
      <p>
        <strong>Ubicación:</strong>{' '}
        <a
          className="maps-link"
          href="https://www.google.com/maps/place/Hokkaido,+Jap%C3%B3n"
          target="_blank"
          rel="noreferrer"
        >
          Ver ubicación de Hokkaido en Google Maps
        </a>
      </p>
      <p>
        <strong>Características principales:</strong>
      </p>
      <ul className="features">
        <li>Paisajes naturales únicos: lagos volcánicos, montañas y bosques.</li>
        <li>Gastronomía reconocida internacionalmente (mariscos, ramen, lácteos).</li>
        <li>Aguas termales naturales (onsen) para relajación.</li>
        <li>Festivales de nieve y actividades de invierno de talla mundial.</li>
        <li>Campos de lavanda y flores en la región de Furano durante el verano.</li>
      </ul>
      <p>
        <strong>Atractivos destacados:</strong> Estanque Azul de Shirogane, Canal de Otaru,
        Parque Nacional de Shiretoko (Patrimonio de la Humanidad UNESCO), Parque Odori en
        Sapporo y la vista nocturna desde el Monte Hakodate.
      </p>
    </section>
  )
}
