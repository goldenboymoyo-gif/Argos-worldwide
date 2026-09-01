import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  LineChart,
  Ship,
  Activity,
  Newspaper,
} from 'lucide-react'

const sections = [
  {
    label: 'Market Data',
    title: 'Commodity Prices',
    path: '/markets/prices',
    icon: LineChart,
    description:
      'Energy, metals, agriculture and softs — reference pricing across the instruments we trade, in a clean terminal format.',
  },
  {
    label: 'Freight',
    title: 'Freight Intelligence',
    path: '/markets/freight',
    icon: Ship,
    description:
      'Key ocean routes and indicative rates mapped against commodity relevance, so cost-to-trade stays visible.',
  },
  {
    label: 'Market Signals',
    title: 'Signals & Sentiment',
    path: '/markets/freight',
    icon: Activity,
    description:
      'Frameworks for tracking the signals that move markets — supply, demand, storage and flow, not just headlines.',
  },
  {
    label: 'Insights',
    title: 'Desk Commentary',
    path: '/markets/insights',
    icon: Newspaper,
    description:
      'Market analysis and commentary from the Argos desk, reviewed and published by our team.',
  },
]

export default function MarketIntelligence() {
  return (
    <>
      <Helmet>
        <title>Market Intelligence | Argos Worldwide</title>
        <meta
          name="description"
          content="Argos Worldwide market intelligence — commodity prices, freight rates, supply chain signals and desk commentary."
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-argos-black text-white">
        <div className="container-argos section-padding pt-28 lg:pt-40 pb-16 lg:pb-20">
          <p className="eyebrow text-argos-accent mb-5">Markets &amp; Intelligence</p>
          <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl mb-6">
            ARGOS MARKET<br />
            INTELLIGENCE
          </h1>
          <p className="text-argos-gray-light text-base lg:text-lg max-w-2xl leading-relaxed">
            The Argos desk monitors commodity markets continuously — across prices,
            freight, currencies and the structural signals that precede moves. Our
            view of the market is built from the ground up: what is being produced,
            where it is stored, how it moves and who is buying.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="container-argos py-16 lg:py-20 border-b border-argos-gray-lighter">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Overview</p>
            <h2 className="heading-section text-2xl sm:text-3xl mb-6">
              How we read the market
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-argos-gray">
              <p>
                Trading physical commodities means living in the detail. We track
                the things that actually move a market — not the noise around it.
              </p>
            </div>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm text-argos-gray">
              {[
                'Prices and forward curves across key instruments',
                'Freight and logistics costs on every relevant route',
                'Foreign exchange exposure and currency movement',
                'Geopolitical risk and regulatory change',
                'Supplier networks, capacity and reliability',
                'Supply, demand, storage and flow signals',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2.5 w-1.5 h-1.5 bg-argos-accent shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sub-sections */}
      <section className="section-padding">
        <div className="container-argos py-16 lg:py-20">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="eyebrow mb-4">Intelligence Desk</p>
              <h2 className="heading-section text-2xl sm:text-3xl">Explore</h2>
            </div>
            <div className="hidden sm:block h-px bg-argos-gray-lighter flex-1 max-w-xs mb-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-argos-gray-lighter border border-argos-gray-lighter">
            {sections.map((section) => {
              const Icon = section.icon
              return (
                <Link
                  key={section.label}
                  to={section.path}
                  className="group card-argos"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-2 text-[0.6875rem] font-medium tracking-[0.15em] uppercase text-argos-gray">
                      <Icon className="w-3.5 h-3.5" />
                      {section.label}
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                  <h3 className="heading-section text-xl mb-3">{section.title}</h3>
                  <p className="text-sm text-argos-gray leading-relaxed mb-6">
                    {section.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.1em] uppercase text-argos-black group-hover:text-argos-accent transition-colors duration-300">
                    View
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="section-padding">
        <div className="container-argos pb-20 lg:pb-28">
          <div className="bg-argos-gray-lightest border border-argos-gray-lighter p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h2 className="heading-section text-xl sm:text-2xl mb-2">
                Need a view before you trade?
              </h2>
              <p className="text-sm text-argos-gray max-w-xl leading-relaxed">
                Our active desk pairs market intelligence with execution. Tell us
                what you are buying or selling and we bring the market context with it.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link to="/markets/prices" className="btn-primary justify-center">
                Commodity Prices
              </Link>
              <Link to="/markets/freight" className="btn-secondary justify-center">
                Freight
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
