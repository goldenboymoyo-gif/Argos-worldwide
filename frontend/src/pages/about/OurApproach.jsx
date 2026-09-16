import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import BackLink from '../../components/BackLink'
import { Brain, Users, Globe } from 'lucide-react'

const pillars = [
  {
    icon: Brain,
    title: 'AI-Powered Intelligence',
    body: 'Our systems continuously scan commodity markets, freight rates, supply chain disruptions, foreign exchange movements, and geopolitical developments. This real-time intelligence forms the analytical foundation of every engagement, giving our team and our clients a clear view of market conditions before, during, and after a transaction.',
  },
  {
    icon: Users,
    title: 'Human Brokerage',
    body: 'Technology surfaces opportunities. People close deals. Our brokers bring deep experience in commodity trading, established supplier relationships, and the judgment that comes from having navigated complex transactions across diverse markets. They understand discretion, timing, and the nuances of deal execution that no algorithm can replicate.',
  },
  {
    icon: Globe,
    title: 'Trusted Relationships',
    body: 'Argos builds direct relationships with suppliers, buyers, and logistics partners in the markets where we are active. These connections are not a directory listing, they are relationships built through repeated engagement, verified performance, and mutual trust, and they expand as our mandate volume grows.',
  },
]

export default function OurApproach() {
  return (
    <>
      <Helmet>
        <title>Our Approach, Argos Worldwide</title>
        <meta name="description" content="Technology, market intelligence, and human brokerage, how Argos Worldwide delivers results in commodity trading." />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-argos-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/home/port.jpg"
            alt="Container port operations"
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
                Argos integrates these capabilities into a single service, combining the analytical power of technology with the irreplaceable value of human experience and a global network of trusted connections.
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
                When a client engages Argos, they are not selecting a tool from a menu, they are activating an integrated system. A commodity inquiry might begin with market analysis, move through supplier verification via our network, and conclude with a broker-negotiated transaction managed from mandate to delivery.
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
              <p className="eyebrow mb-2">Ready to move</p>
              <h2 className="heading-section text-xl sm:text-2xl">
                Put this approach to work
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/submit-mandate" className="btn-primary">
                Submit a Mandate
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
