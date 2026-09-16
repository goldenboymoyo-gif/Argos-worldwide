import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import BackLink from '../components/BackLink'
import { Mail, Phone, Send } from 'lucide-react'

const contacts = [
  {
    name: 'Arthur Blackwell',
    role: 'Outreach',
    email: 'arthur@argosworldwide.com',
    phone: null,
  },
  {
    name: 'Benjamin Norton',
    role: 'Broker',
    email: 'ben@argosworldwide.com',
    phone: '+263 77 875 9836',
  },
  {
    name: 'Bright Moyo',
    role: 'Technician',
    email: 'bright@argosworldwide.com',
    phone: null,
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    organisation: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.message || 'Submission failed')
      }
      setSubmitted(true)
    } catch (err) {
      setError(err.message || 'Could not send your enquiry. Please email us directly.')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact, Argos Worldwide</title>
        <meta name="description" content="Get in touch with the Argos Worldwide desk. All enquiries are handled in confidence. We respond within one business day." />
      </Helmet>

      {/* Hero */}
      <section className="section-padding pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="container-argos">
          <div className="max-w-3xl">
            <BackLink to="/" label="Back to Home" variant="light" className="mb-4" />
            <span className="eyebrow">Get in Touch</span>
            <h1 className="heading-section text-4xl sm:text-5xl lg:text-6xl text-argos-black mt-4 mb-6">
              REACH THE ARGOS DESK
            </h1>
            <p className="text-lg text-argos-gray leading-relaxed max-w-2xl">
              All enquiries are handled in confidence. We respond within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Contacts & Form */}
      <section className="section-padding pb-16 lg:pb-24">
        <div className="container-argos">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Left Column, Contacts */}
            <div className="lg:col-span-4">
              <h2 className="heading-section text-xl text-argos-black mb-8">
                Direct Contacts
              </h2>

              <div className="border border-argos-gray-lighter bg-argos-gray-lightest p-6 mb-8">
                <p className="text-xs text-argos-gray-light mb-2">Argos Desk</p>
                <a
                  href="tel:+263790016331"
                  className="flex items-center gap-3 text-sm font-medium text-argos-black hover:text-argos-accent transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  +263 79 001 6331
                </a>
              </div>

              <div className="space-y-8">
                {contacts.map((contact, index) => (
                  <div key={index} className="border-t border-argos-gray-lighter pt-6">
                    <h3 className="text-sm font-medium text-argos-black">
                      {contact.name}
                    </h3>
                    <p className="text-xs text-argos-gray-light mt-1 mb-4">
                      {contact.role}
                    </p>
                    <div className="space-y-2">
                      <a
                        href={`mailto:${contact.email}`}
                        className="flex items-center gap-3 text-sm text-argos-gray hover:text-argos-black transition-colors duration-200"
                      >
                        <Mail className="w-4 h-4 shrink-0" />
                        {contact.email}
                      </a>
                      {contact.phone && (
                        <a
                          href={`tel:${contact.phone.replace(/\s/g, '')}`}
                          className="flex items-center gap-3 text-sm text-argos-gray hover:text-argos-black transition-colors duration-200"
                        >
                          <Phone className="w-4 h-4 shrink-0" />
                          {contact.phone}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-argos-gray-lighter pt-8 mt-8">
                <p className="text-xs text-argos-gray-light leading-relaxed">
                  For confidential mandate submissions, please use our secure form rather than email.
                </p>
                <Link
                  to="/submit-mandate"
                  className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.1em] uppercase text-argos-black hover:text-argos-gray mt-4 transition-colors duration-200"
                >
                  Submit a Mandate
                </Link>
              </div>
            </div>

            {/* Right Column, Form */}
            <div className="lg:col-span-8">
              <h2 className="heading-section text-xl text-argos-black mb-8">
                General Enquiry
              </h2>

              {submitted ? (
                <div className="border border-argos-gray-lighter p-10 text-center">
                  <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center bg-green-50 text-green-600">
                    <Send className="w-5 h-5" />
                  </div>
                  <h3 className="heading-section text-lg text-argos-black mb-2">
                    Enquiry Received
                  </h3>
                    <p className="text-sm text-argos-gray">
                      Thank you. A member of the Argos desk will respond within one business day.
                    </p>
                    {error && (
                      <p className="text-xs text-argos-red mt-2">
                        {error}
                      </p>
                    )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="border border-red-200 bg-red-50 text-red-700 text-sm px-4 py-3">
                      {error}
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[0.6875rem] font-medium tracking-[0.1em] uppercase text-argos-gray mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-argos-gray-lighter text-sm text-argos-black placeholder:text-argos-gray-light focus:outline-none focus:border-argos-black transition-colors duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-[0.6875rem] font-medium tracking-[0.1em] uppercase text-argos-gray mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-argos-gray-lighter text-sm text-argos-black placeholder:text-argos-gray-light focus:outline-none focus:border-argos-black transition-colors duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[0.6875rem] font-medium tracking-[0.1em] uppercase text-argos-gray mb-2">
                      Organisation
                    </label>
                    <input
                      type="text"
                      name="organisation"
                      value={form.organisation}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-argos-gray-lighter text-sm text-argos-black placeholder:text-argos-gray-light focus:outline-none focus:border-argos-black transition-colors duration-200"
                      placeholder="Company or organisation name"
                    />
                  </div>

                  <div>
                    <label className="block text-[0.6875rem] font-medium tracking-[0.1em] uppercase text-argos-gray mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-argos-gray-lighter text-sm text-argos-black placeholder:text-argos-gray-light focus:outline-none focus:border-argos-black transition-colors duration-200"
                      placeholder="Brief subject of your enquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-[0.6875rem] font-medium tracking-[0.1em] uppercase text-argos-gray mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-argos-gray-lighter text-sm text-argos-black placeholder:text-argos-gray-light focus:outline-none focus:border-argos-black transition-colors duration-200 resize-none"
                      placeholder="Describe your enquiry or requirements"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <p className="text-[0.6875rem] text-argos-gray-light">
                      All communications are treated confidentially.
                    </p>
                    <button type="submit" className="btn-primary" disabled={submitting}>
                      {submitting ? 'Sending...' : 'Send Enquiry'}
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-16 lg:py-24 bg-argos-gray-lightest">
        <div className="container-argos text-center">
          <span className="eyebrow">Confidential</span>
          <h2 className="heading-section text-2xl sm:text-3xl text-argos-black mt-4 mb-4">
            Ready to place a mandate?
          </h2>
          <p className="text-argos-gray mb-8 max-w-lg mx-auto">
            For secure, confidential mandate submission, use our dedicated form.
          </p>
          <Link to="/submit-mandate" className="btn-primary">
            Submit a Confidential Mandate
          </Link>
        </div>
      </section>
    </>
  )
}
