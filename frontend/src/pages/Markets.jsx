import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, BarChart3, Ship, Radio, BookOpen } from 'lucide-react'

const sections = [
  {
    title: 'Market Intelligence',
    path: '/markets/intelligence',
    icon: Radio,
    description: 'How Argos reads and interprets commodity markets, supply chains, and global developments.',
  },
  {
    title: 'Commodity Prices',
    path: '/markets/prices',
    icon: BarChart3,
    description: 'Reference prices across energy, metals, agriculture, and soft commodities.',
  },
  {
    title: 'Freight',
    path: '/markets/freight',
    icon: Ship,
    description: 'Freight routes, rates, and trade corridor intelligence.',
  },
  {
    title: 'Market Insights',
    path: '/markets/insights',
    icon: BookOpen,
    description: 'Analysis and commentary from the Argos desk.',
  },
]

export default function Markets() {
  return (
    <>
      <Helmet>
        <title>Markets — Argos Worldwide</title>
        <meta name="description" content="Argos Worldwide market intelligence: commodity prices, freight rates, market signals, and insights from the Argos desk." />
      </Helmet>

      {/* Hero */}
      <section className="bg-argos-black text-white section-padding py-20 lg:py-28">
        <div className="container-argos">
          <p className="eyebrow text-argos-gray-light mb-4">MARKETS</p>
          <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl text-white max-w-3xl">
            Market intelligence.
          </h1>
          <p className="mt-6 text-lg text-argos-gray-light max-w-2xl">
            Argos monitors commodity markets, supply chains, freight, FX, and geopolitics to identify opportunities before they reach the broader market.
          </p>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="section-padding py-16 lg:py-24">
        <div className="container-argos">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-argos-gray-lighter">
            {sections.map((section) => {
              const Icon = section.icon
              return (
                <Link
                  key={section.title}
                  to={section.path}
                  className="group bg-white p-8 sm:p-10 lg:p-12 transition-colors duration-300 hover:bg-argos-gray-lightest"
                >
                  <div className="flex items-start justify-between mb-8">
                    <Icon className="w-6 h-6 text-argos-gray" strokeWidth={1.5} />
                    <ArrowRight className="w-4 h-4 text-argos-gray-light group-hover:text-argos-black transition-all duration-300 group-hover:translate-x-1" />
                  </div>
                  <h2 className="heading-section text-2xl mb-3">{section.title}</h2>
                  <p className="text-[0.9375rem] text-argos-gray leading-relaxed">
                    {section.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Market Ticker */}
      <section className="bg-argos-gray-lightest section-padding py-12">
        <div className="container-argos">
          <p className="eyebrow mb-6 text-center">REFERENCE PRICES</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Brent', price: '$83.27', change: '+0.99%', up: true },
              { name: 'WTI', price: '$78.00', change: '-0.15%', up: false },
              { name: 'Gold', price: '$2,386.24', change: '+0.20%', up: true },
              { name: 'Silver', price: '$28.92', change: '+0.01%', up: true },
              { name: 'Copper', price: '$4.317', change: '-0.08%', up: false },
              { name: 'Wheat', price: '$607.73', change: '-0.78%', up: false },
            ].map((item) => (
              <div key={item.name} className="bg-white p-4 border border-argos-gray-lighter">
                <p className="text-[0.6875rem] font-medium tracking-[0.1em] uppercase text-argos-gray mb-1">
                  {item.name}
                </p>
                <p className="font-mono text-lg font-medium">{item.price}</p>
                <p className={`font-mono text-xs ${item.up ? 'text-green-600' : 'text-red-600'}`}>
                  {item.change}
                </p>
              </div>
            ))}
          </div>
          <p className="text-[0.6875rem] text-argos-gray-light text-center mt-4">
            Reference prices. Not live data. Market data connection pending.
          </p>
        </div>
      </section>
    </>
  )
}
