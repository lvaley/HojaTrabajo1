export default function Footer({ onOpenContact }) {
  return (
    <footer id="contacto">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>Hokkaido &#10052;&#65039;</h2>
          <p>
            Descubre el norte de Japón: nieve, naturaleza, onsen y tradición en una excursión
            guiada de 5 días por la isla de Hokkaido.
          </p>
        </div>

        <div className="footer-col">
          <h3>Secciones</h3>
          <ul>
            <li>
              <a href="#descripcion">Descripción</a>
            </li>
            <li>
              <a href="#galeria">Galería</a>
            </li>
            <li>
              <a href="#itinerario">Itinerario</a>
            </li>
            <li>
              <a href="#actividades">Actividades</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contacto</h3>
          <ul>
            <li>
              <a href="mailto:info@gt.mofa.go.jp">info@gt.mofa.go.jp</a>
            </li>
            <li>
              <a href="tel:+50223827300">+502 2382-7300</a>
            </li>
            <li>Guatemala City, Guatemala</li>
          </ul>
          <button type="button" className="footer-contact-btn" onClick={onOpenContact}>
            Quiero contactarme
          </button>
        </div>
      </div>

      <div className="footer-social">
        <a
          href="https://www.facebook.com/embjaponGT?ref=embed_page"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24">
            <path d="M13.5 21v-8.5H16l.5-3.5h-3V7c0-1 .3-1.7 1.7-1.7H16V2.1C15.7 2 14.8 2 13.7 2 11.4 2 9.8 3.4 9.8 6v2.9H7.3V12.5h2.5V21h3.7z" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/embjapon_gt/"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24">
            <path d="M12 2.2c2.7 0 3 0 4 .1 1 0 1.6.2 2 .4.5.2.9.4 1.3.8.4.4.6.8.8 1.3.2.4.3 1 .4 2 .1 1 .1 1.3.1 4s0 3-.1 4c0 1-.2 1.6-.4 2-.2.5-.4.9-.8 1.3-.4.4-.8.6-1.3.8-.4.2-1 .3-2 .4-1 .1-1.3.1-4 .1s-3 0-4-.1c-1 0-1.6-.2-2-.4-.5-.2-.9-.4-1.3-.8-.4-.4-.6-.8-.8-1.3-.2-.4-.3-1-.4-2-.1-1-.1-1.3-.1-4s0-3 .1-4c0-1 .2-1.6.4-2 .2-.5.4-.9.8-1.3.4-.4.8-.6 1.3-.8.4-.2 1-.3 2-.4 1-.1 1.3-.1 4-.1M12 0C9.3 0 8.9 0 7.9.1c-1 .1-1.8.3-2.4.5-.7.3-1.3.6-1.8 1.2-.6.5-.9 1.1-1.2 1.8-.2.6-.4 1.4-.5 2.4C2 7 2 7.3 2 10s0 3 .1 4c.1 1 .3 1.8.5 2.4.3.7.6 1.3 1.2 1.8.5.6 1.1.9 1.8 1.2.6.2 1.4.4 2.4.5 1 .1 1.4.1 4 .1s3 0 4-.1c1-.1 1.8-.3 2.4-.5.7-.3 1.3-.6 1.8-1.2.6-.5.9-1.1 1.2-1.8.2-.6.4-1.4.5-2.4.1-1 .1-1.4.1-4s0-3-.1-4c-.1-1-.3-1.8-.5-2.4-.3-.7-.6-1.3-1.2-1.8-.5-.6-1.1-.9-1.8-1.2-.6-.2-1.4-.4-2.4-.5C15.1 0 14.7 0 12 0z" />
            <path d="M12 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8 4 4 0 010 8z" />
            <circle cx="18.4" cy="5.6" r="1.4" />
          </svg>
        </a>
        <a href="https://x.com/embjapon_gt" aria-label="X" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24">
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.64 7.584H.473l8.6-9.83L0 1.153h7.594l5.243 6.932L18.901 1.153zm-1.29 19.493h2.04L6.486 3.24H4.298l13.313 17.406z" />
          </svg>
        </a>
      </div>

      <div className="footer-bottom">
        <p>
          Página web desarrollada por: <strong>Luis Enrique Valey Osorio</strong>
        </p>
        <p>Curso: Desarrollo Web - Excursión a Hokkaido, Japón</p>
        <p>&copy; 2026 - Todos los derechos reservados</p>
      </div>
    </footer>
  )
}
