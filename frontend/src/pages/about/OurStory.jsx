import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function OurStory() {
  return (
    <>
      <Helmet>
        <title>Our Story — Argos Worldwide</title>
        <meta name="description" content="Why Argos Worldwide exists and the problem we solve in global commodity trading." />
      </Helmet>

      {/* Hero */}
      <section className="bg-argos-black text-white">
        <div className="section-padding py-24 lg:py-32">
          <div className="container-argos">
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
            <div className="space-y-6 text-argos-charcoal leading-relaxed">
              <p>
                Global commodity trading is one of the largest and most essential industries in the world. It moves the energy that powers economies, the metals that build infrastructure, the minerals that enable technology, and the agricultural products that sustain populations.
              </p>
              <p>
                Yet for all its scale, the industry remains remarkably fragmented. Buyers — whether procurement teams at industrial firms, traders seeking new supply lines, or governments sourcing critical materials — face a consistent set of challenges:
              </p>
            </div>
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
                body: 'Suppliers are dispersed across continents. Finding the right source for a specific commodity, at the right quality, in the right volume, at the right price — requires deep local knowledge that is difficult to build from a desk.',
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
          <div className="max-w-3xl">
            <h2 className="heading-section text-2xl sm:text-3xl mb-8">
              How Argos addresses this
            </h2>
            <div className="space-y-6 text-argos-charcoal leading-relaxed">
              <p>
                Argos Worldwide was established to bridge the gap between commodity buyers and the global supplier base. We do this through three integrated capabilities: technology, market intelligence, and human brokerage.
              </p>
              <p>
                Our systems continuously scan commodity markets, freight rates, supply chain disruptions, foreign exchange movements, and geopolitical developments. This data feeds into the decision-making process that supports every engagement.
              </p>
              <p>
                But data alone is not enough. Our brokers bring years of experience in commodity trading, deep supplier relationships, and the judgment that comes from having executed transactions across diverse markets and conditions. They understand when a deal makes sense — and when it doesn't.
              </p>
              <p>
                Together, these capabilities allow Argos to connect buyers with the right suppliers, negotiate the right terms, and manage the complexities of cross-border commodity transactions with clarity and precision.
              </p>
            </div>
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
            <div className="space-y-6 text-argos-charcoal leading-relaxed">
              <p>
                We believe the commodity markets work best when participants have access to accurate information, reliable partners, and honest intermediation. We do not speculate on our own account. We do not take positions that conflict with our clients' interests. We facilitate transactions — and we do so with transparency about our role, our capabilities, and our limitations.
              </p>
              <p>
                The name Argos comes from the hundred-eyed giant of Greek mythology — a symbol of vigilance and awareness. In a market where conditions change rapidly and the details matter enormously, we believe that vigilance is not optional. It is the foundation of everything we do.
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
                <ArrowRight className="w-3.5 h-3.5" />
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
