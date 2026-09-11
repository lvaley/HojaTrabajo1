import itinerary from '../../data/itinerary'

export default function Itinerary() {
  return (
    <section id="itinerario">
      <h2>Tabla de itinerarios</h2>

      <div className="itinerary">
        {itinerary.map((item, index) => (
          <div className="ticket" key={index}>
            <div className="stub">
              <span className="day">{item.day}</span>
              <span className="time">{item.time}</span>
            </div>
            <div className="body">
              <div className="activity">{item.activity}</div>
              <div className="place">{item.place}</div>
            </div>
          </div>
        ))}
      </div>

      <p className="legal-note">
        <em>
          Aviso legal: el itinerario presentado es de carácter referencial y puede sufrir
          modificaciones sin previo aviso debido a condiciones climáticas, disponibilidad de
          transporte o causas de fuerza mayor. Los horarios son aproximados. Se recomienda a
          los participantes contratar un seguro de viaje. La organización no se hace
          responsable por pérdidas, daños o accidentes derivados de actividades realizadas
          por cuenta propia fuera del itinerario oficial. Precios, fechas y actividades
          sujetos a disponibilidad; aplican términos y condiciones.
        </em>
      </p>
    </section>
  )
}
