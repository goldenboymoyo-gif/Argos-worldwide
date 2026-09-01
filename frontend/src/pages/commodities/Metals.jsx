import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Gem, Shield, Globe, BarChart3, Layers, Warehouse } from 'lucide-react'

const products = [
  {
    name: 'Precious Metals',
    items: ['Gold', 'Silver', 'Platinum'],
    description: 'Physical lots of refined precious metals from accredited refineries and mining operations.',
  },
  {
    name: 'Base Metals',
    items: ['Copper', 'Aluminium', 'Zinc'],
    description: 'Industrial-grade base metals for manufacturing, construction and fabrication industries.',
  },
  {
    name: 'Battery Metals',
    items: ['Lithium', 'Cobalt', 'Nickel'],
    description: 'Critical minerals for the energy transition, sourced from mine to market with full traceability.',
  },
]

const tradeRoutes = [
  { from: 'Central Africa', to: 'China', commodity: 'Cobalt / Copper', distance: '~7,500 nm' },
  { from: 'South Africa', to: 'India', commodity: 'Platinum Group Metals', distance: '~4,800 nm' },
]

const relatedCommodities = [
  { name: 'Energy', path: '/commodities/energy' },
  { name: 'Minerals', path: '/commodities/minerals' },
  { name: 'Agriculture', path: '/commodities/agriculture' },
  { name: 'Construction Materials', path: '/commodities/construction-materials' },
  { name: 'Specialist Sourcing', path: '/commodities/specialist-sourcing' },
]

export default function Metals() {
  return (
    <>
      <Helmet>
        <title>Metals Trading | Argos Worldwide</title>
        <meta name="description" content="Precious, base and battery metals including physical lots and structured offtake agreements. Argos Worldwide sources metals globally." />
        <link rel="canonical" href="https://argosworldwide.com/commodities/metals" />
        <meta property="og:title" content="Metals Trading | Argos Worldwide" />
        <meta property="og:description" content="Precious, base and battery metals including physical lots and structured offtake agreements." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://argosworldwide.com/commodities/metals" />
      </Helmet>

      {/* Hero */}
      <section className="relative section-padding py-24 lg:py-32 bg-argos-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/commodities/metals-copper.jpg"
            alt="Copper sheets and metal production"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-argos-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-argos-black via-transparent to-argos-black/40" />
        </div>
        <div className="container-argos relative z-10">
          <div className="max-w-3xl">
            <p className="eyebrow text-argos-gray-light mb-6">Commodities</p>
            <h1 className="heading-display text-5xl sm:text-6xl lg:text-7xl mb-6">Metals</h1>
            <p className="text-lg text-argos-gray-light leading-relaxed max-w-2xl">
              Precious, base and battery metals including physical lots and structured offtake agreements.
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
                Metals sourcing<br />from mine to market
              </h2>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-argos-gray text-base leading-relaxed mb-4">
                Argos Worldwide sources precious, base and battery metals through a combination of physical trading and structured offtake agreements. Our relationships span mining operations, smelters and refineries across multiple continents.
              </p>
              <p className="text-argos-gray text-base leading-relaxed">
                We focus on providing traceable, specification-compliant material to buyers who require certainty of supply — from refined bullion to industrial-grade concentrates and battery-grade precursors.
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
          <div className="grid lg:grid-cols-3 gap-px bg-argos-gray-lighter">
            {products.map((product) => (
              <div key={product.name} className="bg-argos-gray-lightest p-8 hover:bg-white transition-colors duration-300">
                <Gem className="w-6 h-6 text-argos-accent mb-4" />
                <h3 className="font-heading font-semibold text-base mb-2">{product.name}</h3>
                <p className="text-argos-gray text-sm leading-relaxed mb-4">{product.description}</p>
                <div className="flex flex-wrap gap-2">
                  {product.items.map((item) => (
                    <span key={item} className="text-2xs font-medium tracking-wider uppercase px-3 py-1 bg-white border border-argos-gray-lighter text-argos-gray">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing */}
      <section className="section-padding py-20 lg:py-28">
        <div className="container-argos">
          <p className="eyebrow mb-4">Capabilities</p>
          <h2 className="heading-section text-3xl lg:text-4xl mb-12">How we source</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-12">
              <div>
                <Layers className="w-6 h-6 text-argos-accent mb-4" />
                <h3 className="font-heading font-semibold text-base mb-2">Physical Lots</h3>
                <p className="text-argos-gray text-sm leading-relaxed">
                  Direct purchase and resale of physical metal lots — from standard LME-grade material to specification-grade concentrates.
                </p>
              </div>
              <div>
                <Warehouse className="w-6 h-6 text-argos-accent mb-4" />
                <h3 className="font-heading font-semibold text-base mb-2">Offtake Agreements</h3>
                <p className="text-argos-gray text-sm leading-relaxed">
                  Long-term and spot offtake arrangements with mining operations and smelters, providing supply certainty to industrial buyers.
                </p>
              </div>
              <div>
                <Shield className="w-6 h-6 text-argos-accent mb-4" />
                <h3 className="font-heading font-semibold text-base mb-2">Due Diligence</h3>
                <p className="text-argos-gray text-sm leading-relaxed">
                  Full chain-of-custody documentation and origin verification. We work only with accredited suppliers and refineries.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] overflow-hidden bg-argos-gray-lightest">
              <img
                src="/images/commodities/battery-metals.jpg"
                alt="Battery metals and critical minerals for the energy transition"
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
              <h2 className="heading-section text-2xl mb-6">Supply sources</h2>
              <div className="space-y-4">
                <div className="border-l-2 border-argos-accent pl-6">
                  <h3 className="font-heading font-semibold text-sm mb-1">Africa</h3>
                  <p className="text-argos-gray text-sm">Central and Southern African mining operations — DRC, Zambia, South Africa and Zimbabwe.</p>
                </div>
                <div className="border-l-2 border-argos-accent pl-6">
                  <h3 className="font-heading font-semibold text-sm mb-1">South America</h3>
                  <p className="text-argos-gray text-sm">Chile, Peru and Brazil — copper, lithium and industrial mineral production.</p>
                </div>
                <div className="border-l-2 border-argos-accent pl-6">
                  <h3 className="font-heading font-semibold text-sm mb-1">Australia & Oceania</h3>
                  <p className="text-argos-gray text-sm">Mature mining jurisdictions with established export infrastructure.</p>
                </div>
              </div>
            </div>
            <div>
              <p className="eyebrow mb-4">Destinations</p>
              <h2 className="heading-section text-2xl mb-6">Demand markets</h2>
              <div className="space-y-4">
                <div className="border-l-2 border-argos-accent pl-6">
                  <h3 className="font-heading font-semibold text-sm mb-1">China</h3>
                  <p className="text-argos-gray text-sm">The world's largest metals consumer, driving global demand for battery and base metals.</p>
                </div>
                <div className="border-l-2 border-argos-accent pl-6">
                  <h3 className="font-heading font-semibold text-sm mb-1">India</h3>
                  <p className="text-argos-gray text-sm">Growing industrial demand for platinum group metals and base metals.</p>
                </div>
                <div className="border-l-2 border-argos-accent pl-6">
                  <h3 className="font-heading font-semibold text-sm mb-1">Europe & Americas</h3>
                  <p className="text-argos-gray text-sm">Refined metals for industrial manufacturing, electronics and automotive sectors.</p>
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

      {/* Active Opportunities */}
      <section className="section-padding py-20 lg:py-28 bg-argos-dark text-white">
        <div className="container-argos">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow text-argos-gray-light mb-4">Live opportunities</p>
              <h2 className="heading-section text-3xl lg:text-4xl mb-4">Active Metals Desk</h2>
              <p className="text-argos-gray-light text-base leading-relaxed">
                Current metal tenders, lot offers and offtake requests updated in real time.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <Link to="/active-desk" className="btn-primary">
                View Active Desk
                <ArrowRight className="w-4 h-4" />
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
                LME pricing, supply-chain data and analysis across global metals markets.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <Link to="/markets/intelligence" className="btn-secondary">
                Explore Intelligence
                <ArrowRight className="w-4 h-4" />
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
                <ArrowRight className="w-4 h-4 text-argos-gray-light group-hover:text-argos-accent transition-colors" />
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
            All inquiries are handled with complete discretion. Submit your mandate and a member of our metals desk will respond within 24 hours.
          </p>
          <Link to="/submit-mandate" className="btn-primary">
            Submit Mandate
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
