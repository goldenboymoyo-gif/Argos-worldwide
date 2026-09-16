import { Link } from 'react-router-dom'
import BackLink from '../../components/BackLink'
import { Helmet } from 'react-helmet-async'
import { Ship, Globe, BarChart3, Shield, Zap, Fuel } from 'lucide-react'

const products = [
  {
    name: 'Crude Oil',
    description: 'Various grades from Atlantic and Eastern basins, sourced for refiners and national oil companies.',
    icon: Droplet,
  },
  {
    name: 'Refined Products',
    description: 'Gasoline, diesel and jet fuel supplied to trading houses and end-users across global markets.',
    icon: Fuel,
  },
  {
    name: 'LNG',
    description: 'Liquefied natural gas cargoes matched between producers and importers on both spot and contractual terms.',
    icon: Flame,
  },
  {
    name: 'Power',
    description: 'Electricity supply arrangements and power purchase facilitation across connected markets.',
    icon: Zap,
  },
]

const tradeRoutes = [
  { from: 'West Africa', to: 'Europe', commodity: 'Crude Oil', distance: '~3,500 nm' },
  { from: 'US Gulf Coast', to: 'Asia', commodity: 'Refined Products / LNG', distance: '~10,000 nm' },
  { from: 'Middle East Gulf', to: 'Japan', commodity: 'LNG / Crude Oil', distance: '~5,800 nm' },
  { from: 'Middle East Gulf', to: 'Europe', commodity: 'Crude Oil / LNG', distance: '~3,200 nm' },
]

const relatedCommodities = [
  { name: 'Metals', path: '/commodities/metals' },
  { name: 'Minerals', path: '/commodities/minerals' },
  { name: 'Agriculture', path: '/commodities/agriculture' },
  { name: 'Construction Materials', path: '/commodities/construction-materials' },
  { name: 'Specialist Sourcing', path: '/commodities/specialist-sourcing' },
]

function Droplet(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  )
}

function Flame(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  )
}

export default function Energy() {
  return (
    <>
      <Helmet>
        <title>Energy Trading | Argos Worldwide</title>
        <meta name="description" content="Crude grades, refined products, LNG and power trading across Atlantic and Eastern basins. Argos Worldwide connects producers with global buyers." />
        <link rel="canonical" href="https://argosworldwide.com/commodities/energy" />
        <meta property="og:title" content="Energy Trading | Argos Worldwide" />
        <meta property="og:description" content="Crude grades, refined products, LNG and power across Atlantic and Eastern basins." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://argosworldwide.com/commodities/energy" />
      </Helmet>

      {/* Hero */}
      <section className="relative section-padding py-24 lg:py-32 bg-argos-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/commodities/energy-oil.jpg"
            alt="Energy infrastructure and crude oil production"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-argos-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-argos-black via-transparent to-argos-black/40" />
        </div>
        <div className="container-argos relative z-10">
          <div className="max-w-3xl">
            <BackLink to="/commodities" label="Back to Commodities" className="mb-6" />
            <p className="eyebrow text-argos-gray-light mb-6">Commodities</p>
            <h1 className="heading-display text-5xl sm:text-6xl lg:text-7xl mb-6">Energy</h1>
            <p className="text-lg text-argos-gray-light leading-relaxed max-w-2xl">
              Crude grades, refined products, LNG and power across Atlantic and Eastern basins.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding py-20 lg:py-28">
        <div className="container-argos">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="eyebrow mb-4">Overview</p>
              <h2 className="heading-section text-3xl lg:text-4xl mb-6">
                Connecting energy producers<br />with global markets
              </h2>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-argos-gray text-base leading-relaxed mb-4">
                Argos Worldwide operates across the full spectrum of energy commodities, from crude oil and refined petroleum products to liquefied natural gas and power. Our network spans the Atlantic and Eastern basins, linking producers with refiners, national oil companies, trading houses and end-users.
              </p>
              <p className="text-argos-gray text-base leading-relaxed">
                We structure transactions that balance pricing, logistics and counterparty requirements. Whether a single cargo or a long-term offtake, every deal is underwritten by deep market knowledge and established relationships across the supply chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding py-20 lg:py-28 bg-argos-gray-lightest">
        <div className="container-argos">
          <p className="eyebrow mb-4">Products</p>
          <h2 className="heading-section text-3xl lg:text-4xl mb-12">What we trade</h2>
          <div className="mb-12 overflow-hidden">
            <img
              src="/images/commodities/energy-lng.jpg"
              alt="LNG cargo and energy product handling"
              className="w-full h-56 sm:h-72 object-cover"
            />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-argos-gray-lighter">
            {products.map((product) => (
              <div key={product.name} className="bg-argos-gray-lightest p-8 hover:bg-white transition-colors duration-300">
                <product.icon className="w-6 h-6 text-argos-accent mb-4" />
                <h3 className="font-heading font-semibold text-base mb-2">{product.name}</h3>
                <p className="text-argos-gray text-sm leading-relaxed">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing & Capabilities */}
      <section className="section-padding py-20 lg:py-28">
        <div className="container-argos">
          <p className="eyebrow mb-4">Capabilities</p>
          <h2 className="heading-section text-3xl lg:text-4xl mb-12">How we source</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-12">
              <div>
                <Ship className="w-6 h-6 text-argos-accent mb-4" />
                <h3 className="font-heading font-semibold text-base mb-2">Physical Trading</h3>
                <p className="text-argos-gray text-sm leading-relaxed">
                  Direct sourcing of physical energy commodities from producers and national oil companies. We handle cargo inspection, logistics coordination and documentation.
                </p>
              </div>
              <div>
                <Globe className="w-6 h-6 text-argos-accent mb-4" />
                <h3 className="font-heading font-semibold text-base mb-2">Cross-Basin Arbitrage</h3>
                <p className="text-argos-gray text-sm leading-relaxed">
                  Our position across Atlantic and Eastern basins allows us to identify pricing dislocations and match supply with demand across geographies.
                </p>
              </div>
              <div>
                <BarChart3 className="w-6 h-6 text-argos-accent mb-4" />
                <h3 className="font-heading font-semibold text-base mb-2">Structured Deals</h3>
                <p className="text-argos-gray text-sm leading-relaxed">
                  Long-term supply contracts, tolling arrangements and structured offtake agreements tailored to producer and buyer requirements.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] overflow-hidden bg-argos-gray-lightest">
              <img
                src="/images/commodities/energy-lng.jpg"
                alt="LNG and energy infrastructure"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Origins & Destinations */}
      <section className="section-padding py-20 lg:py-28 bg-argos-gray-lightest">
        <div className="container-argos">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="eyebrow mb-4">Origins</p>
              <h2 className="heading-section text-2xl mb-6">Supply basins</h2>
              <div className="space-y-4">
                <div className="border-l-2 border-argos-accent pl-6">
                  <h3 className="font-heading font-semibold text-sm mb-1">Atlantic Basin</h3>
                  <p className="text-argos-gray text-sm">West Africa, North Africa, Americas and North Sea production zones.</p>
                </div>
                <div className="border-l-2 border-argos-accent pl-6">
                  <h3 className="font-heading font-semibold text-sm mb-1">Eastern Basin</h3>
                  <p className="text-argos-gray text-sm">Middle East Gulf, Caspian and wider Asia-Pacific supply regions.</p>
                </div>
              </div>
            </div>
            <div>
              <p className="eyebrow mb-4">Destinations</p>
              <h2 className="heading-section text-2xl mb-6">Demand markets</h2>
              <div className="space-y-4">
                <div className="border-l-2 border-argos-accent pl-6">
                  <h3 className="font-heading font-semibold text-sm mb-1">Europe</h3>
                  <p className="text-argos-gray text-sm">Refiners and utilities across NW Europe, Mediterranean and Turkey.</p>
                </div>
                <div className="border-l-2 border-argos-accent pl-6">
                  <h3 className="font-heading font-semibold text-sm mb-1">Asia-Pacific</h3>
                  <p className="text-argos-gray text-sm">Major importers including Japan, South Korea, China and Southeast Asia.</p>
                </div>
                <div className="border-l-2 border-argos-accent pl-6">
                  <h3 className="font-heading font-semibold text-sm mb-1">Americas</h3>
                  <p className="text-argos-gray text-sm">US Gulf Coast refiners and Caribbean and Latin American consumers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Routes */}
      <section className="section-padding py-20 lg:py-28">
        <div className="container-argos">
          <p className="eyebrow mb-4">Logistics</p>
          <h2 className="heading-section text-3xl lg:text-4xl mb-12">Key trade routes</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-argos-gray-lighter">
                  <th className="pb-4 text-xs font-medium tracking-[0.1em] uppercase text-argos-gray">Origin</th>
                  <th className="pb-4 text-xs font-medium tracking-[0.1em] uppercase text-argos-gray">Destination</th>
                  <th className="pb-4 text-xs font-medium tracking-[0.1em] uppercase text-argos-gray">Commodity</th>
                  <th className="pb-4 text-xs font-medium tracking-[0.1em] uppercase text-argos-gray hidden md:table-cell">Distance</th>
                </tr>
              </thead>
              <tbody>
                {tradeRoutes.map((route, i) => (
                  <tr key={i} className="border-b border-argos-gray-lighter last:border-0">
                    <td className="py-4 text-sm font-medium">{route.from}</td>
                    <td className="py-4 text-sm text-argos-gray">{route.to}</td>
                    <td className="py-4 text-sm text-argos-gray">{route.commodity}</td>
                    <td className="py-4 text-sm text-argos-gray-light hidden md:table-cell">{route.distance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Mandate CTA */}
      <section className="section-padding py-20 lg:py-28 bg-argos-dark text-white">
        <div className="container-argos">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow text-argos-gray-light mb-4">Get started</p>
              <h2 className="heading-section text-3xl lg:text-4xl mb-4">Have an energy mandate?</h2>
              <p className="text-argos-gray-light text-base leading-relaxed">
                Tell us your volume, specification and timeline. Our desk will identify tenders, cargo offers and RFQs that match your requirements.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <Link to="/submit-mandate" className="btn-primary">
                Submit a Mandate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Market Intelligence CTA */}
      <section className="section-padding py-20 lg:py-28">
        <div className="container-argos">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">Intelligence</p>
              <h2 className="heading-section text-3xl lg:text-4xl mb-4">Market Intelligence</h2>
              <p className="text-argos-gray text-base leading-relaxed">
                Real-time pricing, freight data and market analysis across global energy markets. Make informed decisions with current data.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <Link to="/markets/intelligence" className="btn-secondary">
                Explore Intelligence
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Commodities */}
      <section className="section-padding py-20 lg:py-28 bg-argos-gray-lightest">
        <div className="container-argos">
          <p className="eyebrow mb-4">Explore</p>
          <h2 className="heading-section text-3xl lg:text-4xl mb-12">Related commodities</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-argos-gray-lighter">
            {relatedCommodities.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="bg-argos-gray-lightest p-6 hover:bg-white transition-colors duration-300 group"
              >
                <h3 className="font-heading font-semibold text-sm mb-2 group-hover:text-argos-accent transition-colors">{item.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Confidential Mandate CTA */}
      <section className="section-padding py-20 lg:py-28 bg-argos-black text-white">
        <div className="container-argos text-center">
          <Shield className="w-8 h-8 text-argos-accent mx-auto mb-6" />
          <h2 className="heading-section text-3xl lg:text-4xl mb-4">Confidential mandate</h2>
          <p className="text-argos-gray-light text-base leading-relaxed max-w-xl mx-auto mb-8">
            All inquiries are handled with complete discretion. Submit your mandate and a member of our energy desk will respond within 24 hours.
          </p>
          <Link to="/submit-mandate" className="btn-primary">
            Submit Mandate
          </Link>
        </div>
      </section>
    </>
  )
}
