import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import BackLink from '../../components/BackLink'
import { Mail, Phone } from 'lucide-react'

const people = [
  {
    name: 'Arthur Blackwell',
    firstName: 'Arthur',
    initials: 'AB',
    role: 'Outreach',
    email: 'arthur@argosworldwide.com',
    phone: '+263 79 001 6331',
    photo: '/images/about/team/arthur.jpg',
  },
  {
    name: 'Benjamin Norton',
    firstName: 'Benjamin',
    initials: 'BN',
    role: 'Broker',
    email: 'benjaminnorton96@gmail.com',
    phone: '+263 77 875 9836',
    photo: '/images/about/team/benjamin.jpg',
  },
  {
    name: 'Bright Moyo',
    firstName: 'Bright',
    initials: 'BM',
    role: 'Technician',
    email: 'goldenboymoyo@gmail.com',
    phone: '+263 71 471 9659',
    photo: '/images/about/team/bright.jpg',
  },
]

export default function OurPeople() {
  return (
    <>
      <Helmet>
        <title>Our People, Argos Worldwide</title>
        <meta name="description" content="The team at Argos Worldwide, experienced professionals in commodity trading and brokerage." />
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
            <BackLink to="/" label="Back to Home" className="mb-4" />
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {people.map((person) => (
              <div
                key={person.name}
                className="border border-argos-gray-lighter p-8 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-5 bg-argos-gray-lighter">
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="eyebrow text-argos-accent mb-2">{person.role}</p>
                <h2 className="font-heading font-bold text-xl text-argos-black mb-6">
                  {person.name}
                </h2>

                <div className="w-full space-y-3 pt-6 border-t border-argos-gray-lighter">
                  <a
                    href={`mailto:${person.email}`}
                    className="flex items-center justify-center gap-2 text-sm text-argos-charcoal hover:text-argos-black transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4 shrink-0" />
                    <span className="break-all">{person.email}</span>
                  </a>

                  {person.phone && (
                    <a
                      href={`https://wa.me/${person.phone.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-sm text-argos-charcoal hover:text-argos-black transition-colors duration-200"
                    >
                      <Phone className="w-4 h-4 shrink-0" />
                      {person.phone}
                      <span className="text-xs text-argos-gray">(WhatsApp)</span>
                    </a>
                  )}
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
              Argos Worldwide is a lean organisation. We do not maintain a large headcount, we maintain the right people. Each member of our team is hands-on, client-facing, and directly involved in the work. If you engage Argos, you will work with one of the people listed above.
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
              <Link to="/submit-mandate" className="btn-primary">
                Contact
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
