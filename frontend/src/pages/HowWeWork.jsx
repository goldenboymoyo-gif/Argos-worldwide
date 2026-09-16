import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import BackLink from '../components/BackLink'
import { ClipboardList, Radar, Globe, Handshake, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    name: 'Mandate',
    icon: ClipboardList,
    headline: 'You tell us what you need. Volume, specification, destination, timeline.',
    description:
      'Every engagement begins with a clear mandate. You tell us exactly what you are looking for, and we build the search around your requirements.',
    points: [
      { label: 'Volume', text: 'The quantity you need to buy or sell.' },
      { label: 'Specification', text: 'Grade, quality and technical requirements.' },
      { label: 'Destination', text: 'Where the commodity must come from or arrive.' },
      { label: 'Timeline', text: 'When the transaction needs to be completed.' },
    ],
  },
  {
    name: 'Research',
    icon: Radar,
    headline: 'Our AI maps the market. Supply sources, pricing, freight, counterparty fit.',
    description:
      'Our research engine continuously maps the global market, scanning supply sources, live pricing, freight routes and counterparty profiles to build an informed picture before a single introduction is made.',
    points: [
      { label: 'Supply sources', text: 'Who is genuinely active and capable in your market.' },
      { label: 'Pricing', text: 'Current levels benchmarked against your mandate.' },
      { label: 'Freight', text: 'Routes, costs and timing from origin to destination.' },
      { label: 'Counterparty fit', text: 'Which counterparties match on capability and fit.' },
    ],
  },
  {
    name: 'Sourcing',
    icon: Globe,
    headline: 'We identify the right counterparties from our global network.',
    description:
      'From the shortlist produced by research, we identify the counterparties best positioned to deliver, drawing on our global network of producers, traders and intermediaries.',
    points: [
      { label: 'Global network', text: 'Active relationships across markets and regions.' },
      { label: 'Shortlisted', text: 'Only the best-fit counterparties are considered.' },
      { label: 'Qualified', text: 'Assessed for capability, reliability and track record.' },
    ],
  },
  {
    name: 'Introduction',
    icon: Handshake,
    headline: 'Our brokers connect buyer and seller directly and confidentially.',
    description:
      'Our brokers bring the right parties together directly and confidentially. Information is shared only as needed, and identities are protected until both sides are comfortable.',
    points: [
      { label: 'Direct', text: 'Buyer and seller connect directly with one another.' },
      { label: 'Confidential', text: 'Sensitive details are handled with full discretion.' },
      { label: 'Brokered', text: 'Our brokers manage the flow on both sides.' },
    ],
  },
  {
    name: 'Execution',
    icon: CheckCircle2,
    headline: 'The deal gets done. We stay involved until completion.',
    description:
      'Once terms are agreed, we remain involved through signing and completion, coordinating the final details so the deal closes cleanly and both sides walk away confident.',
    points: [
      { label: 'Deal closed', text: 'Terms agreed and the transaction moves forward.' },
      { label: 'We stay involved', text: 'Present through to signing and final completion.' },
      { label: 'Clean completion', text: 'Every detail coordinated for a smooth close.' },
    ],
  },
]

export default function HowWeWork() {
  return (
    <>
      <Helmet>
        <title>How We Work | Argos Worldwide</title>
        <meta
          name="description"
          content="A structured five-step process, mandate, research, sourcing, introduction and execution, designed for confidentiality and results."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative section-padding pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-32 lg:pb-24 bg-argos-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/home/hero-poster.jpg"
            alt="Cargo operations in progress"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-argos-black/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-argos-black via-argos-black/50 to-transparent" />
        </div>
        <div className="container-argos max-w-4xl relative z-10">
          <BackLink to="/" label="Back to Home" className="mb-6" />
          <p className="eyebrow text-argos-gray-light mb-6">How We Work</p>
          <h1 className="heading-section text-4xl sm:text-5xl lg:text-6xl mb-6 text-balance text-white">
            From mandate to execution.
          </h1>
          <p className="text-lg text-argos-gray-light leading-relaxed max-w-2xl">
            A structured five-step process designed for confidentiality and
            results.
          </p>
        </div>
      </section>

      {/* Steps */}
      <div className="border-t border-argos-gray-lighter">
        {steps.map((step) => {
          const Icon = step.icon
          return (
            <section key={step.name} className="section-padding py-14 sm:py-16 lg:py-20 border-b border-argos-gray-lighter">
              <div className="container-argos grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                {/* Icon */}
                <div className="lg:col-span-4 flex items-start lg:sticky lg:top-28">
                  <span className="w-12 h-12 flex items-center justify-center bg-argos-black text-white shrink-0">
                    <Icon className="w-5 h-5" />
                  </span>
                </div>

                {/* Content */}
                <div className="lg:col-span-8">
                  <p className="eyebrow mb-4">{step.name}</p>
                  <h2 className="heading-section text-2xl sm:text-3xl mb-4 text-balance">
                    {step.headline}
                  </h2>
                  <p className="text-base text-argos-gray leading-relaxed max-w-2xl mb-8">
                    {step.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-argos-gray-lighter border-argos">
                    {step.points.map((point) => (
                      <div key={point.label} className="bg-white p-5 sm:p-6">
                        <h3 className="text-xs font-medium tracking-[0.1em] uppercase text-argos-black mb-2">
                          {point.label}
                        </h3>
                        <p className="text-sm leading-relaxed text-argos-gray">
                          {point.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* CTA */}
      <section className="bg-argos-black text-white section-padding py-16 sm:py-20 lg:py-24">
        <div className="container-argos max-w-4xl text-center">
          <p className="eyebrow text-argos-gray-light mb-6">Get Started</p>
          <h2 className="heading-section text-3xl sm:text-4xl mb-6 text-balance">
            Begin with a mandate.
          </h2>
          <p className="text-base text-argos-gray-light leading-relaxed max-w-xl mx-auto mb-10">
            Tell us what you need and our five-step process will take it from
            there.
          </p>
          <Link
            to="/submit-mandate"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-argos-black text-xs font-medium tracking-[0.1em] uppercase transition-all duration-300 hover:bg-argos-gray-lightest"
          >
            Submit Mandate
          </Link>
        </div>
      </section>
    </>
  )
}
