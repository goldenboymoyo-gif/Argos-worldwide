import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Mountain, Shield, Globe, BarChart3, Truck, Package } from 'lucide-react'

const products = [
  {
    name: 'Manganese Ore',
    description: 'High-grade manganese ore sourced directly from mining operations for steel and alloy production.',
  },
  {
    name: 'Industrial Minerals',
    description: 'Silica, feldspar, kaolin and other industrial minerals for manufacturing and processing industries.',
  },
  {
    name: 'Mining Outputs',
    description: 'Concentrates, middlings and secondary outputs from active mining operations globally.',
  },
]

const supplyRegions = [
  { region: 'Africa', detail: 'South Africa, Gabon, Ghana and the broader Sub-Saharan mining belt — manganese, bauxite and industrial mineral deposits.' },
  { region: 'South America', detail: 'Brazil and Peru — manganese, niobium and industrial mineral production across established mining districts.' },
  { region: 'Australia', detail: 'Western Australia and Queensland — mature mining operations with reliable export logistics.' },
]

const tradeRoutes = [
  { from: 'South Africa', to: 'India', commodity: 'Manganese Ore', distance: '~5,000 nm' },
  { from: 'Brazil', to: 'Europe', commodity: 'Manganese / Bauxite', distance: '~5,500 nm' },
  { from: 'Australia', to: 'Asia-Pacific', commodity: 'Industrial Minerals', distance: '~3,000 nm' },
]

const relatedCommodities = [
  { name: 'Energy', path: '/commodities/energy' },
  { name: 'Metals', path: '/commodities/metals' },
  { name: 'Agriculture', path: '/commodities/agriculture' },
  { name: 'Construction Materials', path: '/commodities/construction-materials' },
  { name: 'Specialist Sourcing', path: '/commodities/specialist-sourcing' },
]

export default function Minerals() {
  return (
    <>
      <Helmet>
        <title>Minerals Trading | Argos Worldwide</title>
        <meta name="description" content="Industrial minerals and mining outputs sourced directly from origin globally. Manganese ore, industrial minerals and mining concentrates." />
        <link rel="canonical" href="https://argosworldwide.com/commodities/minerals" />
        <meta property="og:title" content="Minerals Trading | Argos Worldwide" />
        <meta property="og:description" content="Industrial minerals and mining outputs sourced directly from origin globally." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://argosworldwide.com/commodities/minerals" />
      </Helmet>

      {/* Hero */}
      <section className="relative section-padding py-24 lg:py-32 bg-argos-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/commodities/minerals-mining.jpg"
            alt="Open-pit mining operations and mineral extraction"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-argos-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-argos-black via-transparent to-argos-black/40" />
        </div>
        <div className="container-argos relative z-10">
          <div className="max-w-3xl">
            <p className="eyebrow text-argos-gray-light mb-6">Commodities</p>
            <h1 className="heading-display text-5xl sm:text-6xl lg:text-7xl mb-6">Minerals</h1>
            <p className="text-lg text-argos-gray-light leading-relaxed max-w-2xl">
              Industrial minerals and mining outputs sourced directly from origin globally.
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
                Direct from origin,<br />around the world
              </h2>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-argos-gray text-base leading-relaxed mb-4">
                Argos Worldwide sources industrial minerals and mining outputs directly from producing regions across Africa, South America and Australia. Our relationships with mining operations give us access to material at the source — before it enters traditional distribution channels.
              </p>
              <p className="text-argos-gray text-base leading-relaxed">
                We handle the complexity of mineral sourcing: specification verification, logistics coordination, port handling and documentation. For buyers, this means reliable access to material that is often difficult to procure through standard channels.
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
                <Mountain className="w-6 h-6 text-argos-accent mb-4" />
                <h3 className="font-heading font-semibold text-base mb-2">{product.name}</h3>
                <p className="text-argos-gray text-sm leading-relaxed">{product.description}</p>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <Package className="w-6 h-6 text-argos-accent mb-4" />
              <h3 className="font-heading font-semibold text-base mb-2">Mine-to-Buyer</h3>
              <p className="text-argos-gray text-sm leading-relaxed">
                We source directly from mining operations, cutting out intermediary layers and providing buyers with competitive pricing and full provenance.
              </p>
            </div>
            <div>
              <Truck className="w-6 h-6 text-argos-accent mb-4" />
              <h3 className="font-heading font-semibold text-base mb-2">Logistics Coordination</h3>
              <p className="text-argos-gray text-sm leading-relaxed">
                Inland haulage, port handling and vessel chartering managed end-to-end. We coordinate the full transport chain from pit to port.
              </p>
            </div>
            <div>
              <BarChart3 className="w-6 h-6 text-argos-accent mb-4" />
              <h3 className="font-heading font-semibold text-base mb-2">Specification Matching</h3>
              <p className="text-argos-gray text-sm leading-relaxed">
                We match buyer specifications — grade, size, moisture content — with available material across multiple source operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Origins */}
      <section className="section-padding py-20 lg:py-28 bg-argos-gray-lightest">
        <div className="container-argos">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="eyebrow mb-4">Origins</p>
              <h2 className="heading-section text-2xl mb-6">Supply regions</h2>
              <div className="space-y-6">
                {supplyRegions.map((item) => (
                  <div key={item.region} className="border-l-2 border-argos-accent pl-6">
                    <h3 className="font-heading font-semibold text-sm mb-1">{item.region}</h3>
                    <p className="text-argos-gray text-sm">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow mb-4">Destinations</p>
              <h2 className="heading-section text-2xl mb-6">Demand markets</h2>
              <div className="space-y-4">
                <div className="border-l-2 border-argos-accent pl-6">
                  <h3 className="font-heading font-semibold text-sm mb-1">Asia-Pacific</h3>
                  <p className="text-argos-gray text-sm">India, China and Southeast Asian industrial consumers driving global mineral demand.</p>
                </div>
                <div className="border-l-2 border-argos-accent pl-6">
                  <h3 className="font-heading font-semibold text-sm mb-1">Europe</h3>
                  <p className="text-argos-gray text-sm">Steel producers and industrial manufacturers requiring consistent mineral supply.</p>
                </div>
                <div className="border-l-2 border-argos-accent pl-6">
                  <h3 className="font-heading font-semibold text-sm mb-1">Middle East</h3>
                  <p className="text-argos-gray text-sm">Growing industrial base with increasing mineral import requirements.</p>
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
              <h2 className="heading-section text-3xl lg:text-4xl mb-4">Active Minerals Desk</h2>
              <p className="text-argos-gray-light text-base leading-relaxed">
                Current mineral tenders and cargo offers updated in real time.
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
                Pricing data, trade flow analysis and supply-demand dynamics across global mineral markets.
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
            All inquiries are handled with complete discretion. Submit your mandate and a member of our minerals desk will respond within 24 hours.
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
