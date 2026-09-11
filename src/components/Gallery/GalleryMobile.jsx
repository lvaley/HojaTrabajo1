import { useState } from 'react'
import galleryImages from '../../data/galleryImages'

export default function GalleryMobile({ onSelectImage }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const total = galleryImages.length

  const nextImage = () => setActiveIndex((current) => (current + 1) % total)
  const prevImage = () => setActiveIndex((current) => (current - 1 + total) % total)

  return (
    <div className="gallery-mobile">
      <div className="gallery-track">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className={`m-slide mslide-${index + 1} gallery-card${index === activeIndex ? ' active' : ''}`}
          >
            <div className="m-image-wrap">
              <button type="button" className="g-arrow prev" aria-label="Imagen anterior" onClick={prevImage}>
                ‹
              </button>
              <img src={image.src} alt={image.alt} onClick={() => onSelectImage(image)} />
              <button type="button" className="g-arrow next" aria-label="Siguiente imagen" onClick={nextImage}>
                ›
              </button>
            </div>
            <div className="m-info" onClick={() => onSelectImage(image)}>
              <p className="eyebrow-small">Explora</p>
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="gallery-dots">
        {galleryImages.map((image, index) => (
          <button
            key={image.id}
            type="button"
            className={index === activeIndex ? 'active' : ''}
            aria-label={`Ir a la imagen ${index + 1}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
