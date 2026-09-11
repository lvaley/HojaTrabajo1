import Modal from '../Modal/Modal'

export default function Lightbox({ image, onClose }) {
  return (
    <Modal isOpen={Boolean(image)} onClose={onClose} boxClassName="lightbox-box" labelledBy="lightbox-title">
      {image && (
        <>
          <img src={image.src} alt={image.alt} />
          <div className="lightbox-info">
            <p className="eyebrow-small">Explora</p>
            <h3 id="lightbox-title">{image.title}</h3>
            <p>{image.description}</p>
          </div>
        </>
      )}
    </Modal>
  )
}
