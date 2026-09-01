import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Brain, Users, Globe } from 'lucide-react'

const pillars = [
  {
    icon: Brain,
    label: '01',
    title: 'AI-Powered Intelligence',
    body: 'Our systems continuously scan commodity markets, freight rates, supply chain disruptions, foreign exchange movements, and geopolitical developments. This real-time intelligence forms the analytical foundation of every engagement — giving our team and our clients a clear view of market conditions before, during, and after a transaction.',
  },
  {
    icon: Users,
    label: '02',
    title: 'Human Brokerage',
    body: 'Technology surfaces opportunities. People close deals. Our brokers bring deep experience in commodity trading, established supplier relationships, and the judgment that comes from having navigated complex transactions across diverse markets. They understand discretion, timing, and the nuances of deal execution that no algorithm can replicate.',
  },
  {
    icon: Globe,
    label: '03',
    title: 'Global Network',
    body: 'Argos maintains connections to suppliers, buyers, logistics providers, and market participants worldwide. This network is not a directory — it is a living set of relationships built through repeated engagement, verified performance, and mutual trust. It allows us to source effectively, verify counterparties, and execute across borders.',
  },
]

export default function OurApproach() {
  return (
    <>
      <Helmet>
        <title>Our Approach — Argos Worldwide</title>
        <meta name="description" content="Technology, market intelligence, and human brokerage — how Argos Worldwide delivers results in commodity trading." />
      </Helmet>

      {/* Hero */}
      <section className="bg-argos-black text-white">
        <div className="section-padding py-24 lg:py-32">
          <div className="container-argos">
            <p className="eyebrow text-argos-gray-light mb-4">About Argos</p>
            <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl text-balance">
              OUR APPROACH
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding py-20 lg:py-28">
        <div className="container-argos">
          <div className="max-w-3xl">
            <h2 className="heading-section text-2xl sm:text-3xl mb-8">
              Three capabilities, one integrated service
            </h2>
            <div className="space-y-6 text-argos-charcoal leading-relaxed">
              <p>
                Effective commodity intermediation requires more than a single skill. It demands the ability to analyse markets at speed, the relationships to source and verify suppliers across geographies, and the judgement to execute transactions under real-world conditions.
              </p>
              <p>
                Argos integrates these capabilities into a single service — combining the analytical power of technology with the irreplaceable value of human experience and a global network of trusted connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="section-padding pb-20 lg:pb-28">
        <div className="container-argos">
          <div className="space-y-0 border border-argos-gray-lighter">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className={`grid grid-cols-1 lg:grid-cols-12 ${
                  i < pillars.length - 1 ? 'border-b border-argos-gray-lighter' : ''
                }`}
              >
                {/* Left: Label */}
                <div className="lg:col-span-3 p-8 lg:p-12 bg-argos-gray-lightest flex items-start gap-4">
                  <pillar.icon className="w-5 h-5 text-argos-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="eyebrow mb-1">{pillar.label}</p>
                    <h3 className="heading-section text-lg">{pillar.title}</h3>
                  </div>
                </div>

                {/* Right: Body */}
                <div className="lg:col-span-9 p-8 lg:p-12">
                  <p className="text-argos-charcoal leading-relaxed text-lg">
                    {pillar.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How They Work Together */}
      <section className="section-padding pb-20 lg:pb-28 bg-argos-gray-lightest">
        <div className="container-argos">
          <div className="max-w-3xl">
            <h2 className="heading-section text-2xl sm:text-3xl mb-8">
              How these work together
            </h2>
            <div className="space-y-6 text-argos-charcoal leading-relaxed">
              <p>
                Each capability strengthens the others. Our intelligence systems identify market movements and emerging opportunities. Our network provides the relationships needed to verify sources and execute transactions. Our brokers apply judgement, experience, and discretion to translate information into action.
              </p>
              <p>
                When a client engages Argos, they are not selecting a tool from a menu — they are activating an integrated system. A commodity inquiry might begin with market analysis, move through supplier verification via our network, and conclude with a broker-negotiated transaction managed from mandate to delivery.
              </p>
              <p>
                This integration is what allows Argos to operate across commodity classes, geographies, and transaction sizes with consistency and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-16 lg:py-20">
        <div className="container-argos">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="eyebrow mb-2">See it in action</p>
              <h2 className="heading-section text-xl sm:text-2xl">
                Explore the Active Desk
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/active-desk" className="btn-primary">
                Active Desk
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
