import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import BackLink from '../components/BackLink'
import { ShieldCheck, Send, CheckCircle } from 'lucide-react'

const roleOptions = ['Buyer', 'Seller', 'Producer', 'Supplier', 'Off-taker', 'Other']
const unitOptions = ['MT', 'BBL', 'Tons', 'kg', 'Units', 'Cargo']
const incotermsOptions = ['FOB', 'CIF', 'CFR', 'EXW', 'DAP', 'DDP', 'FCA']

const initialForm = {
  role: '',
  commodity: '',
  origin: '',
  destination: '',
  volume: '',
  unit: '',
  specification: '',
  deliveryWindow: '',
  incoterms: '',
  targetPrice: '',
  additionalInfo: '',
  file: null,
}

export default function SubmitMandate() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (name === 'file') {
      setForm({ ...form, file: files[0] || null })
    } else {
      setForm({ ...form, [name]: value })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      const formData = new FormData()
      formData.append('partyType', form.role)
      formData.append('commodity', form.commodity)
      formData.append('origin', form.origin)
      formData.append('destination', form.destination)
      formData.append('volume', form.volume)
      formData.append('unit', form.unit)
      formData.append('specification', form.specification)
      formData.append('deliveryWindow', form.deliveryWindow)
      formData.append('incoterms', form.incoterms)
      formData.append('targetPrice', form.targetPrice)
      formData.append('additionalInfo', form.additionalInfo)
      if (form.file) {
        formData.append('documents', form.file)
      }

      const res = await fetch(`${import.meta.env.VITE_API_URL || ''}/api/mandates`, {
        method: 'POST',
        body: formData,
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.message || 'Submission failed')
      }
      setSubmitted(true)
    } catch (err) {
      setError(err.message || 'Could not submit your mandate. Please email the desk directly.')
      setSubmitted(false)
    } finally {
      setSubmitting(false)
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const inputClass = "w-full px-4 py-3 border border-argos-gray-lighter text-sm text-argos-black placeholder:text-argos-gray-light focus:outline-none focus:border-argos-black transition-colors duration-200 bg-white"
  const selectClass = "w-full px-4 py-3 border border-argos-gray-lighter text-sm text-argos-black focus:outline-none focus:border-argos-black transition-colors duration-200 bg-white appearance-none"
  const labelClass = "block text-[0.6875rem] font-medium tracking-[0.1em] uppercase text-argos-gray mb-2"

  if (submitted) {
    return (
      <>
        <Helmet>
          <title>Mandate Submitted, Argos Worldwide</title>
        </Helmet>
        <section className="section-padding pt-28 pb-16 lg:pt-36 lg:pb-24">
          <div className="container-argos max-w-2xl text-center">
            <div className="w-16 h-16 mx-auto mb-8 flex items-center justify-center bg-green-50 text-green-600">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h1 className="heading-section text-3xl sm:text-4xl text-argos-black mb-4">
              Mandate Received
            </h1>
            <p className="text-argos-gray leading-relaxed mb-4">
              Your confidential mandate has been received by the Argos desk.
            </p>
            <p className="text-sm text-argos-gray-light leading-relaxed mb-10">
              All submissions are reviewed within one business day. A member of our team will contact you at the details provided. Your information is treated with the highest level of confidentiality.
            </p>
            {error && (
              <p className="text-xs text-argos-red leading-relaxed mb-6">
                {error} You can also reach us directly at arthur@argosworldwide.com.
              </p>
            )}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/submit-mandate" className="btn-primary">
                Contact Us
              </Link>
              <Link to="/" className="btn-secondary">
                Return Home
              </Link>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <Helmet>
        <title>Submit a Confidential Mandate, Argos Worldwide</title>
        <meta name="description" content="Submit a confidential commodity trading mandate to Argos Worldwide. All submissions are treated with the highest level of confidentiality." />
      </Helmet>

      {/* Hero */}
      <section className="section-padding pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="container-argos">
          <div className="max-w-3xl">
            <BackLink to="/" label="Back to Home" variant="light" className="mb-4" />
            <span className="eyebrow">Confidential Submission</span>
            <h1 className="heading-section text-4xl sm:text-5xl lg:text-6xl text-argos-black mt-4 mb-6">
              SUBMIT A CONFIDENTIAL MANDATE
            </h1>
          </div>
        </div>
      </section>

      {/* Confidentiality Notice */}
      <section className="section-padding pb-12">
        <div className="container-argos">
          <div className="max-w-3xl flex items-start gap-4 border border-argos-gray-lighter p-6 bg-argos-gray-lightest/50">
            <ShieldCheck className="w-5 h-5 text-argos-accent shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-medium text-argos-black mb-1">
                Confidentiality Notice
              </h3>
              <p className="text-sm text-argos-gray leading-relaxed">
                All mandate submissions are treated with the highest level of confidentiality. Information shared with Argos is used solely for the purpose of evaluating and fulfilling your mandate requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding pb-16 lg:pb-24">
        <div className="container-argos">
          <div className="max-w-3xl">
            <form onSubmit={handleSubmit} className="space-y-8">

              {error && (
                <div className="border border-red-200 bg-red-50 text-red-700 text-sm px-4 py-3">
                  {error}
                </div>
              )}

              {/* Role */}
              <div>
                <label className={labelClass}>I Am A *</label>
                <div className="relative">
                  <select
                    name="role"
                    required
                    value={form.role}
                    onChange={handleChange}
                    className={selectClass}
                  >
                    <option value="" disabled>Select your role</option>
                    {roleOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                    <svg className="w-4 h-4 text-argos-gray-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Commodity */}
              <div>
                <label className={labelClass}>Commodity *</label>
                <input
                  type="text"
                  name="commodity"
                  required
                  value={form.commodity}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="e.g. Copper Cathode, LNG, Milling Wheat"
                />
              </div>

              {/* Origin & Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Origin *</label>
                  <input
                    type="text"
                    name="origin"
                    required
                    value={form.origin}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Country or port"
                  />
                </div>
                <div>
                  <label className={labelClass}>Destination *</label>
                  <input
                    type="text"
                    name="destination"
                    required
                    value={form.destination}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Country or port"
                  />
                </div>
              </div>

              {/* Volume & Unit */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Volume *</label>
                  <input
                    type="text"
                    name="volume"
                    required
                    value={form.volume}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="e.g. 10,000–25,000"
                  />
                </div>
                <div>
                  <label className={labelClass}>Unit *</label>
                  <div className="relative">
                    <select
                      name="unit"
                      required
                      value={form.unit}
                      onChange={handleChange}
                      className={selectClass}
                    >
                      <option value="" disabled>Select unit</option>
                      {unitOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                      <svg className="w-4 h-4 text-argos-gray-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specification */}
              <div>
                <label className={labelClass}>Specification</label>
                <textarea
                  name="specification"
                  rows={4}
                  value={form.specification}
                  onChange={handleChange}
                  className={inputClass + " resize-none"}
                  placeholder="Grade, quality specs, or other technical requirements"
                />
              </div>

              {/* Delivery Window & Incoterms */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Delivery Window</label>
                  <input
                    type="text"
                    name="deliveryWindow"
                    value={form.deliveryWindow}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="e.g. Q3 2026, Oct–Dec 2026"
                  />
                </div>
                <div>
                  <label className={labelClass}>Incoterms</label>
                  <div className="relative">
                    <select
                      name="incoterms"
                      value={form.incoterms}
                      onChange={handleChange}
                      className={selectClass}
                    >
                      <option value="">Select incoterms</option>
                      {incotermsOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                      <svg className="w-4 h-4 text-argos-gray-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Target Price */}
              <div>
                <label className={labelClass}>Target Price</label>
                <input
                  type="text"
                  name="targetPrice"
                  value={form.targetPrice}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Price per unit (optional)"
                />
              </div>

              {/* Additional Information */}
              <div>
                <label className={labelClass}>Additional Information</label>
                <textarea
                  name="additionalInfo"
                  rows={5}
                  value={form.additionalInfo}
                  onChange={handleChange}
                  className={inputClass + " resize-none"}
                  placeholder="Any further details relevant to your mandate"
                />
              </div>

              {/* File Upload */}
              <div>
                <label className={labelClass}>Document Upload</label>
                <div className="border border-dashed border-argos-gray-lighter p-8 text-center hover:border-argos-gray transition-colors duration-200">
                  <input
                    type="file"
                    name="file"
                    onChange={handleChange}
                    className="hidden"
                    id="file-upload"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.csv"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <div className="text-argos-gray-light mb-2">
                      <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    {form.file ? (
                      <p className="text-sm text-argos-black font-medium">{form.file.name}</p>
                    ) : (
                      <>
                        <p className="text-sm text-argos-gray">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-argos-gray-light mt-1">
                          PDF, Word, Excel, max 10MB
                        </p>
                      </>
                    )}
                  </label>
                </div>
              </div>

              {/* Submit */}
              <div className="flex items-center justify-between pt-4 border-t border-argos-gray-lighter">
                <p className="text-[0.6875rem] text-argos-gray-light">
                  All submissions are confidential.
                </p>
                <button type="submit" className="btn-primary" disabled={submitting}>
                  {submitting ? 'Submitting...' : 'Submit Privately'}
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
