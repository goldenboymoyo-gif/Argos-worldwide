import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import BackLink from '../components/BackLink'
import { Activity, Globe, Search, Handshake, CheckCircle2 } from 'lucide-react'

const sections = [
  {
    title: 'Market Intelligence',
    icon: Activity,
    headline:
      'Argos monitors relevant commodity and market information to identify opportunities.',
    points: [
      {
        label: 'Commodity markets',
        text: 'We scan the physical and paper markets across our active commodity desks to track where supply, demand and price are moving.',
      },
      {
        label: 'Supply chains',
        text: 'From origin to destination, we map the routes and logistics that determine whether a trade is feasible and profitable.',
      },
      {
        label: 'Prices & freight',
        text: 'Live price levels and freight rates are monitored continuously so a mandate can always be priced against the current market.',
      },
      {
        label: 'FX & geopolitics',
        text: 'Currency movements and political developments are factored into every assessment, reducing the risk of an otherwise good deal going wrong.',
      },
      {
        label: 'Supplier networks',
        text: 'We maintain visibility into who is really active in each market, the producers, traders and intermediaries that matter.',
      },
      {
        label: 'Market signals',
        text: 'Structured and unstructured signals are combined to surface opportunities before they become obvious to everyone else.',
      },
    ],
  },
  {
    title: 'Sourcing',
    icon: Globe,
    headline:
      'Argos identifies appropriate suppliers and supply opportunities.',
    points: [
      {
        label: 'Supplier identification',
        text: 'We identify suppliers whose capacity, quality and reliability genuinely match what a mandate requires.',
      },
      {
        label: 'Evaluating supply sources',
        text: 'Every source is assessed for production capability, consistency of quality and the ability to deliver at scale.',
      },
      {
        label: 'Pricing',
        text: 'We negotiate and compare terms against current market levels to secure the strongest available position.',
      },
      {
        label: 'Freight',
        text: 'Logistics are evaluated from origin to agreed destination so the full delivered cost is understood up front.',
      },
      {
        label: 'Counterparty fit',
        text: 'We judge character as much as capability, whether a supplier is dependable, transparent and aligned with your standards.',
      },
    ],
  },
  {
    title: 'Counterparty Matching',
    icon: Handshake,
    headline:
      'Argos connects buyers and sellers based on mandate requirements.',
    points: [
      {
        label: 'Ranked by track record',
        text: 'We rank counterparties on a history of completing deals reliably, not merely on what they claim to be able to supply.',
      },
      {
        label: 'Sector fit',
        text: 'Matches are made within the specific sector and geography of the mandate, where relevant experience lives.',
      },
      {
        label: 'Deal history',
        text: 'Our own transaction history is used to identify relationships that have already performed, reducing the unknown.',
      },
    ],
  },
  {
    title: 'Execution',
    icon: CheckCircle2,
    headline:
      'Argos remains involved through the transaction process.',
    points: [
      {
        label: 'Introduction to completion',
        text: 'We stay involved from the first introduction through to signing and completion, keeping the process moving and aligned.',
      },
      {
        label: 'Confidentiality maintained',
        text: 'Sensitive information is handled with discretion at every stage, and counterparties only learn what is necessary.',
      },
      {
        label: 'A smooth close',
        text: 'By coordinating the final details, we help ensure the deal closes cleanly and both sides walk away confident.',
      },
    ],
  },
]

function Section({ section, reverse }) {
  const Icon = section.icon
  return (
    <section className="section-padding py-16 sm:py-20 lg:py-24">
      <div className="container-argos">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start ${reverse ? '' : ''}`}>
          {/* Sticky intro column */}
          <div className={`lg:col-span-4 ${reverse ? 'lg:order-2' : ''}`}>
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-6 text-argos-accent">
                <Icon className="w-5 h-5" />
              </div>
              <h2 className="heading-section text-2xl sm:text-3xl mb-4">
                {section.title}
              </h2>
              <p className="text-base text-argos-gray leading-relaxed mb-8">
                {section.headline}
              </p>
            </div>
          </div>

          {/* Points column */}
          <div className={`lg:col-span-8 ${reverse ? 'lg:order-1' : ''}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-argos-gray-lighter border-argos">
              {section.points.map((point) => (
                <div key={point.label} className="bg-white p-6 sm:p-8">
                  <h3 className="text-xs font-medium tracking-[0.1em] uppercase text-argos-black mb-3">
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
      </div>
    </section>
  )
}

export default function WhatWeDo() {
  return (
    <>
      <Helmet>
        <title>What We Do | Argos Worldwide</title>
        <meta
          name="description"
          content="Argos Worldwide operates across the full commodity intermediation cycle, from market intelligence and sourcing to counterparty matching and execution."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative section-padding pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-32 lg:pb-24 bg-argos-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/home/warehouse.jpg"
            alt="Warehouse and logistics operations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-argos-black/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-argos-black via-argos-black/50 to-transparent" />
        </div>
        <div className="container-argos max-w-4xl relative z-10">
          <BackLink to="/" label="Back to Home" className="mb-6" />
          <p className="eyebrow text-argos-gray-light mb-6">What We Do</p>
          <h1 className="heading-section text-4xl sm:text-5xl lg:text-6xl mb-6 text-balance text-white">
            From intelligence to execution.
          </h1>
          <p className="text-lg text-argos-gray-light leading-relaxed max-w-2xl">
            Argos operates across the full commodity intermediation cycle,
            turning market intelligence into sourcing, matching the right
            counterparties, and staying involved until each transaction is
            complete.
          </p>
        </div>
      </section>

      {/* Detailed sections */}
      <div className="border-t border-argos-gray-lighter">
        {sections.map((section, i) => (
          <div key={section.title} className={i > 0 ? 'border-t border-argos-gray-lighter' : ''}>
            <Section section={section} reverse={i % 2 === 1} />
          </div>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-argos-black text-white section-padding py-16 sm:py-20 lg:py-24">
        <div className="container-argos max-w-4xl text-center">
          <p className="eyebrow text-argos-gray-light mb-6">Get Started</p>
          <h2 className="heading-section text-3xl sm:text-4xl mb-6 text-balance">
            Put our process to work for you.
          </h2>
          <p className="text-base text-argos-gray-light leading-relaxed max-w-xl mx-auto mb-10">
            Whether you are buying or selling, submit a mandate or contact our
            desk to begin the conversation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/submit-mandate"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-argos-black text-xs font-medium tracking-[0.1em] uppercase transition-all duration-300 hover:bg-argos-gray-lightest"
            >
              Submit Mandate
            </Link>
            <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-argos-black">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
