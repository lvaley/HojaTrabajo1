import { useState } from 'react'
import Modal from '../Modal/Modal'
import { packages, additionalServices } from '../../data/quoteOptions'

const formatCurrency = (amount) =>
  'Q' +
  amount.toLocaleString('es-GT', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

const initialResult = { total: 0, breakdown: '' }

/**
 * Calculadora de Cotización / Presupuesto.
 * Formulario con número de asistentes, paquete/tour (select) y servicios
 * adicionales (checkbox). Calcula e imprime el precio total estimado al
 * instante, sin recargar la página.
 */
export default function QuoteCalculator({ isOpen, onClose }) {
  const [attendees, setAttendees] = useState(1)
  const [packageValue, setPackageValue] = useState(packages[0].value)
  const [selectedServices, setSelectedServices] = useState([])
  const [result, setResult] = useState(initialResult)
  const [showResult, setShowResult] = useState(false)

  const toggleService = (serviceId) => {
    setSelectedServices((current) =>
      current.includes(serviceId)
        ? current.filter((id) => id !== serviceId)
        : [...current, serviceId]
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const attendeesCount = parseInt(attendees, 10)
    if (!attendeesCount || attendeesCount < 1) return

    const selectedPackage = packages.find((pkg) => pkg.value === Number(packageValue))
    const subtotalPackage = selectedPackage.value * attendeesCount

    let subtotalServices = 0
    const servicesChosen = []

    additionalServices.forEach((service) => {
      if (!selectedServices.includes(service.id)) return
      const cost = service.perPerson ? service.price * attendeesCount : service.price
      subtotalServices += cost
      servicesChosen.push(`${service.label}: ${formatCurrency(cost)}`)
    })

    const total = subtotalPackage + subtotalServices
    const packageLabel = selectedPackage.label.split('—')[0].trim()

    let breakdown = `${attendeesCount} asistente(s) · ${packageLabel} (${formatCurrency(subtotalPackage)})`
    if (servicesChosen.length > 0) {
      breakdown += ` · Adicionales: ${servicesChosen.join(', ')}`
    }

    setResult({ total, breakdown })
    setShowResult(true)
  }

  const handleClose = () => {
    onClose()
    setShowResult(false)
    setSelectedServices([])
    setAttendees(1)
    setPackageValue(packages[0].value)
    setResult(initialResult)
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} labelledBy="quote-title">
      <h2 id="quote-title">Cotiza tu excursión</h2>
      <p className="modal-subtitle">Completa el formulario y calcula el precio estimado al instante.</p>

      <form className="quote-form" onSubmit={handleSubmit}>
        <label htmlFor="attendees">Número de asistentes</label>
        <input
          type="number"
          id="attendees"
          min="1"
          max="50"
          value={attendees}
          onChange={(event) => setAttendees(event.target.value)}
          required
        />

        <label htmlFor="package">Paquete / tour</label>
        <select id="package" value={packageValue} onChange={(event) => setPackageValue(event.target.value)}>
          {packages.map((pkg) => (
            <option key={pkg.value} value={pkg.value}>
              {pkg.label}
            </option>
          ))}
        </select>

        <fieldset>
          <legend>Servicios adicionales</legend>
          {additionalServices.map((service) => (
            <label className="check-item" key={service.id}>
              <input
                type="checkbox"
                checked={selectedServices.includes(service.id)}
                onChange={() => toggleService(service.id)}
              />
              {service.label} (+{formatCurrency(service.price)} {service.perPerson ? 'por persona' : 'tarifa fija'})
            </label>
          ))}
        </fieldset>

        <button type="submit" className="quote-submit">
          Cotizar
        </button>
      </form>

      <div className={`quote-result${showResult ? ' show' : ''}`}>
        <p>Precio total estimado:</p>
        <div className="total-price">{formatCurrency(result.total)}</div>
        <p>{result.breakdown}</p>
        <p className="quote-disclaimer">Precios pueden variar según temporada, aerolínea y proveedor.</p>
      </div>
    </Modal>
  )
}
