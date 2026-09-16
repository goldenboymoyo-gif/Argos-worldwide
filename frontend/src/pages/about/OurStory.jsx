import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import BackLink from '../../components/BackLink'
import {  } from 'lucide-react'

export default function OurStory() {
  return (
    <>
      <Helmet>
        <title>Our Story, Argos Worldwide</title>
        <meta name="description" content="Why Argos Worldwide exists and the problem we solve in global commodity trading." />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-argos-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/home/hero-cargo.jpg"
            alt="Cargo vessel at sea"
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
              OUR STORY
            </h1>
          </div>
        </div>
      </section>

      {/* Origin */}
      <section className="section-padding py-20 lg:py-28">
        <div className="container-argos">
          <div className="max-w-3xl">
            <h2 className="heading-section text-2xl sm:text-3xl mb-8">
              The problem Argos exists to solve
            </h2>
            <p className="text-argos-charcoal leading-relaxed text-lg">
              Global commodity trading moves the energy, metals, minerals, and agricultural products that economies run on, yet the industry remains remarkably fragmented. Buyers, from industrial procurement teams to governments sourcing critical materials, consistently run into the same three obstacles:
            </p>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="section-padding pb-20 lg:pb-28">
        <div className="container-argos">
          <div className="grid-argos">
            {[
              {
                title: 'Geography',
                body: 'Suppliers are dispersed across continents. Finding the right source for a specific commodity, at the right quality, in the right volume, at the right price, requires deep local knowledge that is difficult to build from a desk.',
              },
              {
                title: 'Language & Regulation',
                body: 'Every market operates under its own regulatory framework, trade protocols, and business customs. Navigating these differences demands experience and cultural fluency, not just translation.',
              },
              {
                title: 'Trust',
                body: 'In a market where transactions involve significant capital and complex logistics, trust is not optional. Verifying counterparties, confirming capabilities, and ensuring performance requires relationships built over time.',
              },
            ].map((item) => (
              <div key={item.title} className="card-argos">
                <p className="eyebrow text-argos-accent mb-4">{item.title}</p>
                <p className="text-argos-charcoal leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Argos Does */}
      <section className="section-padding pb-20 lg:pb-28 bg-argos-gray-lightest">
        <div className="container-argos">
          <div className="max-w-3xl mb-12">
            <h2 className="heading-section text-2xl sm:text-3xl mb-6">
              How Argos addresses this
            </h2>
            <p className="text-argos-charcoal leading-relaxed text-lg">
              Argos bridges the gap between commodity buyers and the global supplier base through three integrated capabilities. Together, they let us connect buyers with the right suppliers and manage cross-border transactions with clarity and precision.
            </p>
          </div>
          <div className="grid-argos">
            {[
              { title: 'Technology', body: 'Systems that continuously scan commodity markets, freight rates, supply chains, FX, and geopolitical developments.' },
              { title: 'Market Intelligence', body: 'Raw signals turned into a decision-ready view that supports every engagement, from mandate to close.' },
              { title: 'Human Brokerage', body: 'Brokers with years of trading experience and supplier relationships who know when a deal makes sense, and when it doesn\'t.' },
            ].map((item) => (
              <div key={item.title} className="card-argos">
                <p className="eyebrow text-argos-accent mb-4">{item.title}</p>
                <p className="text-argos-charcoal leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mt-10">
            <Link to="/about/approach" className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.1em] uppercase text-argos-black hover:text-argos-gray transition-colors duration-200">
              See how these work together
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding pb-20 lg:pb-28">
        <div className="container-argos">
          <div className="max-w-3xl">
            <h2 className="heading-section text-2xl sm:text-3xl mb-8">
              What we believe
            </h2>
            <p className="text-argos-charcoal leading-relaxed text-lg mb-8">
              Commodity markets work best with accurate information, reliable partners, and honest intermediation. We don't speculate on our own account or take positions against our clients' interests, we facilitate, transparently, within our actual capabilities and limitations.
            </p>
            <div className="border-l-2 border-argos-accent pl-8">
              <p className="text-argos-gray leading-relaxed">
                The name Argos comes from the hundred-eyed giant of Greek mythology, a symbol of vigilance. In a market where conditions change fast and details matter enormously, that vigilance is the foundation of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-16 lg:py-20 bg-argos-gray-lightest">
        <div className="container-argos">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="eyebrow mb-2">Learn more</p>
              <h2 className="heading-section text-xl sm:text-2xl">
                Understand how we work
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/about/approach" className="btn-primary">
                Our Approach
              </Link>
              <Link to="/about/people" className="btn-secondary">
                Our People
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
