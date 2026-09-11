import { useState } from 'react'
import GalleryDesktop from './GalleryDesktop'
import GalleryMobile from './GalleryMobile'
import Lightbox from './Lightbox'

/**
 * Galería de Imágenes Interactiva.
 * - Escritorio/tablet: carrusel paginado (3 imágenes por página).
 * - Móvil: carrusel de 1 imagen a la vez con descripción.
 * - Al hacer clic en cualquier imagen (desktop o mobile) se abre un
 *   lightbox con la foto en grande y su descripción completa.
 */
export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="galeria">
      <h2>Galería de imágenes</h2>

      <div className="gallery-carousel">
        <GalleryDesktop onSelectImage={setSelectedImage} />
        <GalleryMobile onSelectImage={setSelectedImage} />
      </div>

      <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  )
}
