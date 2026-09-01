import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowRightLeft } from 'lucide-react'

const regions = [
  {
    name: 'AFRICA',
    description: 'Sourcing minerals, metals, and agricultural products from key production zones across the continent.',
    corridors: [
      { origin: 'South Africa', destination: 'India' },
      { origin: 'West Africa', destination: 'China' },
    ],
  },
  {
    name: 'MIDDLE EAST',
    description: 'Energy, construction materials, and fertilizers from the world\'s most significant hydrocarbon and petrochemical hub.',
    corridors: [
      { origin: 'Middle East Gulf', destination: 'Japan' },
      { origin: 'Middle East Gulf', destination: 'Southeast Asia' },
      { origin: 'Arab Gulf', destination: 'Brazil' },
    ],
  },
  {
    name: 'EUROPE',
    description: 'Market intelligence hub and key destination market for global commodity flows.',
    corridors: [
      { origin: 'Black Sea', destination: 'MENA' },
      { origin: 'Durban', destination: 'Rotterdam' },
      { origin: 'Singapore', destination: 'ARA' },
    ],
  },
  {
    name: 'ASIA',
    description: 'Major destination market for energy, metals, and bulk commodities across the region.',
    corridors: [
      { origin: 'US Gulf', destination: 'Asia' },
      { origin: 'Central Africa', destination: 'China' },
    ],
  },
  {
    name: 'AMERICAS',
    description: 'Energy, agriculture, and specialist sourcing across the Western Hemisphere.',
    corridors: [
      { origin: 'US Gulf', destination: 'Northwest Europe' },
    ],
  },
]

export default function GlobalNetwork() {
  return (
    <>
      <Helmet>
        <title>Global Network — Argos Worldwide</title>
        <meta name="description" content="Argos Worldwide operates across Africa, the Middle East, Europe, Asia, and the Americas — connecting origins, routes, and destinations in global commodity trade." />
      </Helmet>

      {/* Hero */}
      <section className="section-padding pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="container-argos">
          <div className="max-w-3xl">
            <span className="eyebrow">Trade Corridors</span>
            <h1 className="heading-section text-4xl sm:text-5xl lg:text-6xl text-argos-black mt-4 mb-6">
              GLOBAL NETWORK
            </h1>
            <p className="text-lg text-argos-gray leading-relaxed max-w-2xl">
              Connecting origins, routes, and destinations worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding pb-16 lg:pb-20">
        <div className="container-argos">
          <div className="max-w-2xl border-l-2 border-argos-accent pl-8">
            <p className="text-base text-argos-gray leading-relaxed">
              Argos Worldwide does not operate physical offices in every market. Our strength lies in trusted counterparty relationships, deep regional knowledge, and established trade corridors that span five continents.
            </p>
          </div>
        </div>
      </section>

      {/* Regions Grid */}
      <section className="section-padding pb-16 lg:pb-24">
        <div className="container-argos">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-argos-gray-lighter">
            {regions.map((region, index) => (
              <div
                key={index}
                className="bg-white p-8 sm:p-10 flex flex-col"
              >
                <div className="mb-6">
                  <span className="text-[0.625rem] font-semibold tracking-[0.2em] uppercase text-argos-accent">
                    Region
                  </span>
                  <h2 className="heading-section text-2xl text-argos-black mt-2">
                    {region.name}
                  </h2>
                </div>

                <p className="text-sm text-argos-gray leading-relaxed mb-8 flex-1">
                  {region.description}
                </p>

                <div className="border-t border-argos-gray-lighter pt-6">
                  <span className="text-[0.625rem] font-semibold tracking-[0.15em] uppercase text-argos-gray-light block mb-4">
                    Key Corridors
                  </span>
                  <div className="space-y-3">
                    {region.corridors.map((corridor, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-sm"
                      >
                        <span className="font-medium text-argos-black">
                          {corridor.origin}
                        </span>
                        <ArrowRightLeft className="w-3.5 h-3.5 text-argos-gray-light shrink-0" />
                        <span className="text-argos-gray">
                          {corridor.destination}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Map-style summary card */}
            <div className="bg-argos-black text-white p-8 sm:p-10 flex flex-col justify-center">
              <span className="text-[0.625rem] font-semibold tracking-[0.2em] uppercase text-argos-accent mb-4">
                Coverage
              </span>
              <h3 className="heading-section text-xl text-white mb-4">
                5 Regions · 9+ Corridors · 15+ Countries
              </h3>
              <p className="text-sm text-argos-gray-light leading-relaxed">
                Our network is built on trust, not territory. We source wherever the right commodity, at the right price, can be reliably delivered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-16 lg:py-24 bg-argos-gray-lightest">
        <div className="container-argos text-center">
          <span className="eyebrow">Work With Us</span>
          <h2 className="heading-section text-2xl sm:text-3xl text-argos-black mt-4 mb-4">
            Need a commodity sourced or delivered?
          </h2>
          <p className="text-argos-gray mb-8 max-w-lg mx-auto">
            Contact our desk or submit a confidential mandate. We operate across all major trade corridors.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Contact the Desk
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/submit-mandate" className="btn-secondary">
              Submit a Mandate
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
