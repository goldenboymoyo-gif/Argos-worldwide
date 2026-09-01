import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, Phone } from 'lucide-react'

const people = [
  {
    name: 'Arthur Blackwell',
    firstName: 'Arthur',
    role: 'Outreach',
    email: 'arthur@argosworldwide.com',
  },
  {
    name: 'Ben Norton',
    firstName: 'Ben',
    role: 'Broker',
    email: 'ben@argosworldwide.com',
    phone: '+263 77 875 9836',
  },
]

export default function OurPeople() {
  return (
    <>
      <Helmet>
        <title>Our People — Argos Worldwide</title>
        <meta name="description" content="The team at Argos Worldwide — experienced professionals in commodity trading and brokerage." />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-argos-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/about/people-handshake.jpg"
            alt="Business partnership and trust"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-argos-black/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-argos-black via-argos-black/50 to-transparent" />
        </div>
        <div className="section-padding py-24 lg:py-32 relative z-10">
          <div className="container-argos">
            <p className="eyebrow text-argos-gray-light mb-4">About Argos</p>
            <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl text-balance">
              OUR PEOPLE
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding py-20 lg:py-28">
        <div className="container-argos">
          <div className="max-w-3xl">
            <p className="text-argos-charcoal leading-relaxed text-lg">
              The people behind Argos Worldwide are the company. Our strength lies not in scale, but in the expertise, relationships, and integrity of the individuals who represent us. Every engagement is managed by someone who understands the market, the commodity, and the stakes.
            </p>
          </div>
        </div>
      </section>

      {/* People */}
      <section className="section-padding pb-20 lg:pb-28">
        <div className="container-argos">
          <div className="border border-argos-gray-lighter">
            {people.map((person, i) => (
              <div
                key={person.name}
                className={`grid grid-cols-1 lg:grid-cols-12 ${
                  i < people.length - 1 ? 'border-b border-argos-gray-lighter' : ''
                }`}
              >
                {/* Left: Name */}
                <div className="lg:col-span-5 p-8 lg:p-12 bg-argos-gray-lightest flex flex-col justify-center">
                  <p className="eyebrow text-argos-accent mb-3">{person.role}</p>
                  <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-argos-black">
                    {person.firstName}
                  </h2>
                  <p className="font-heading font-light text-3xl sm:text-4xl lg:text-5xl tracking-tight text-argos-gray mt-1">
                    {person.name.split(' ').slice(1).join(' ')}
                  </p>
                </div>

                {/* Right: Contact */}
                <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-4">
                    <a
                      href={`mailto:${person.email}`}
                      className="group flex items-center gap-3 text-argos-charcoal hover:text-argos-black transition-colors duration-200"
                    >
                      <span className="flex items-center justify-center w-10 h-10 border border-argos-gray-lighter group-hover:border-argos-black transition-colors duration-200">
                        <Mail className="w-4 h-4" />
                      </span>
                      <span className="text-sm">{person.email}</span>
                    </a>

                    {person.phone && (
                      <a
                        href={`https://wa.me/${person.phone.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 text-argos-charcoal hover:text-argos-black transition-colors duration-200"
                      >
                        <span className="flex items-center justify-center w-10 h-10 border border-argos-gray-lighter group-hover:border-argos-black transition-colors duration-200">
                          <Phone className="w-4 h-4" />
                        </span>
                        <span className="text-sm">{person.phone}</span>
                        <span className="text-xs text-argos-gray">(WhatsApp)</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="section-padding pb-20 lg:pb-28">
        <div className="container-argos">
          <div className="max-w-3xl">
            <p className="text-sm text-argos-gray leading-relaxed">
              Argos Worldwide is a lean organisation. We do not maintain a large headcount — we maintain the right people. Each member of our team is hands-on, client-facing, and directly involved in the work. If you engage Argos, you will work with one of the people listed above.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-16 lg:py-20 bg-argos-gray-lightest">
        <div className="container-argos">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="eyebrow mb-2">Get in touch</p>
              <h2 className="heading-section text-xl sm:text-2xl">
                Speak with the team
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/contact" className="btn-primary">
                Contact
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link to="/submit-mandate" className="btn-secondary">
                Submit Mandate
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
