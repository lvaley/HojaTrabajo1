import { useState } from 'react'
import galleryImages from '../../data/galleryImages'

const PAGE_SIZE = 3
const pages = [
  galleryImages.slice(0, PAGE_SIZE),
  galleryImages.slice(PAGE_SIZE, PAGE_SIZE * 2),
]

export default function GalleryDesktop({ onSelectImage }) {
  const [pageIndex, setPageIndex] = useState(0)

  const nextPage = () => setPageIndex((current) => (current + 1) % pages.length)
  const prevPage = () => setPageIndex((current) => (current - 1 + pages.length) % pages.length)

  return (
    <div className="gallery-desktop">
      <div className="gallery-track">
        {pages.map((pageImages, index) => (
          <div
            key={`page-${index}`}
            className={`gallery-page page-${index + 1}${index === pageIndex ? ' active' : ''}`}
          >
            <button type="button" className="g-arrow prev" aria-label="Página anterior" onClick={prevPage}>
              ‹
            </button>

            <div className="gallery-grid">
              {pageImages.map((image) => (
                <figure key={image.id} className="gallery-card" onClick={() => onSelectImage(image)}>
                  <img src={image.src} alt={image.alt} />
                  <figcaption>
                    <p className="eyebrow-small">Explora</p>
                    <h3>{image.title}</h3>
                    <p>{image.description}</p>
                  </figcaption>
                </figure>
              ))}
            </div>

            <button type="button" className="g-arrow next" aria-label="Página siguiente" onClick={nextPage}>
              ›
            </button>
          </div>
        ))}
      </div>

      <div className="gallery-dots">
        {pages.map((_, index) => (
          <button
            key={`dot-${index}`}
            type="button"
            className={index === pageIndex ? 'active' : ''}
            aria-label={`Ir a la página ${index + 1}`}
            onClick={() => setPageIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
