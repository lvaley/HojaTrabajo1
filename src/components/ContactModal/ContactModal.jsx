import { useState } from 'react'
import Modal from '../Modal/Modal'

const initialFormState = {
  name: '',
  type: '',
  attendees: 1,
  email: '',
  phone: '',
  message: '',
}

/**
 * Modal de contacto / reservación. El <select> decide si se pide el
 * número de personas (reservar) o no (que me contacten). Al enviar
 * (de forma figurativa, sin backend), muestra una página de
 * agradecimiento personalizada según el tipo de solicitud.
 */
export default function ContactModal({ isOpen, onClose }) {
  const [form, setForm] = useState(initialFormState)
  const [submitted, setSubmitted] = useState(false)

  const updateField = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const handleClose = () => {
    onClose()
    setSubmitted(false)
    setForm(initialFormState)
  }

  const thankYouMessage =
    form.type === 'reservar'
      ? `Tu solicitud de reservación ha sido registrada para ${form.attendees} persona(s). ` +
        'Pronto nos pondremos en contacto para confirmar los detalles.'
      : 'Tu solicitud ha sido registrada correctamente y en breve uno de nuestros ' +
        'colaboradores se pondrá en contacto contigo para dar seguimiento a tu consulta.'

  return (
    <Modal isOpen={isOpen} onClose={handleClose} labelledBy="contact-title">
      {!submitted ? (
        <div>
          <h2 id="contact-title">Contáctanos</h2>
          <p className="modal-subtitle">Cuéntanos qué necesitas y te responderemos a la brevedad.</p>

          <form className="quote-form" onSubmit={handleSubmit}>
            <label htmlFor="contact-name">Nombre completo</label>
            <input
              type="text"
              id="contact-name"
              value={form.name}
              onChange={updateField('name')}
              placeholder="Ej: Sakura Tanaka"
              required
            />

            <label htmlFor="contact-type">¿Qué deseas hacer?</label>
            <select id="contact-type" value={form.type} onChange={updateField('type')} required>
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option value="reservar">Reservar la excursión</option>
              <option value="contactar">Solicitar que me contacten</option>
            </select>

            <div className={`conditional-field${form.type === 'reservar' ? ' show' : ''}`}>
              <label htmlFor="contact-attendees">Número de personas a reservar</label>
              <input
                type="number"
                id="contact-attendees"
                min="1"
                max="10"
                value={form.attendees}
                onChange={updateField('attendees')}
                required={form.type === 'reservar'}
              />
            </div>

            <label htmlFor="contact-email">Correo electrónico</label>
            <input
              type="email"
              id="contact-email"
              value={form.email}
              onChange={updateField('email')}
              placeholder="Ej: ejemplo@correo.com"
              required
            />

            <label htmlFor="contact-phone">Número de teléfono</label>
            <input
              type="tel"
              id="contact-phone"
              value={form.phone}
              onChange={updateField('phone')}
              placeholder="Ej: 23827300"
              pattern="[0-9]{8}"
              minLength={8}
              maxLength={8}
              required
            />

            <label htmlFor="contact-message">¿Algo que no esté claro? (opcional)</label>
            <textarea
              id="contact-message"
              rows="3"
              value={form.message}
              onChange={updateField('message')}
              placeholder="Cuéntanos tu duda y con gusto te ayudaremos a resolverla :)"
            />

            <button type="submit" className="quote-submit">
              Enviar solicitud
            </button>
          </form>
        </div>
      ) : (
        <div className="thank-you-view show">
          <div className="thank-you-icon">&#10003;</div>
          <h3>¡Gracias, {form.name}!</h3>
          <p>{thankYouMessage}</p>
          <button type="button" className="quote-submit" onClick={handleClose}>
            Cerrar
          </button>
        </div>
      )}
    </Modal>
  )
}
