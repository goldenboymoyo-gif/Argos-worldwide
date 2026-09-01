import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Search, Shield, Globe, BarChart3, Bot, Puzzle } from 'lucide-react'

const products = [
  {
    name: 'Granular Sulphur',
    description: 'Prilled and granular sulphur from refinery and gas processing sources for agricultural and industrial end-uses.',
  },
  {
    name: 'Urea',
    description: 'Urea in prilled and granular form for fertiliser production and industrial applications across global markets.',
  },
  {
    name: 'Specialist Bulk',
    description: 'Non-standard and niche bulk commodities that fall outside conventional trading desk coverage — sourced on demand.',
  },
]

const tradeRoutes = [
  { from: 'Arab Gulf', to: 'Brazil', commodity: 'Urea / Sulphur', distance: '~7,500 nm' },
  { from: 'Middle East Gulf', to: 'Southeast Asia', commodity: 'Urea / Sulphur', distance: '~5,500 nm' },
]

const relatedCommodities = [
  { name: 'Energy', path: '/commodities/energy' },
  { name: 'Metals', path: '/commodities/metals' },
  { name: 'Minerals', path: '/commodities/minerals' },
  { name: 'Agriculture', path: '/commodities/agriculture' },
  { name: 'Construction Materials', path: '/commodities/construction-materials' },
]

export default function SpecialistSourcing() {
  return (
    <>
      <Helmet>
        <title>Specialist Sourcing | Argos Worldwide</title>
        <meta name="description" content="If it moves in bulk and has a market, we can source it. AI-powered systems find what the standard desk cannot." />
        <link rel="canonical" href="https://argosworldwide.com/commodities/specialist-sourcing" />
        <meta property="og:title" content="Specialist Sourcing | Argos Worldwide" />
        <meta property="og:description" content="If it moves in bulk and has a market, we can source it. Our AI systems are built to find what the standard desk cannot." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://argosworldwide.com/commodities/specialist-sourcing" />
      </Helmet>

      {/* Hero */}
      <section className="relative section-padding py-24 lg:py-32 bg-argos-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/commodities/specialist-sulphur.jpg"
            alt="Industrial commodity bulk material in specialist storage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-argos-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-argos-black via-transparent to-argos-black/40" />
        </div>
        <div className="container-argos relative z-10">
          <div className="max-w-3xl">
            <p className="eyebrow text-argos-gray-light mb-6">Commodities</p>
            <h1 className="heading-display text-5xl sm:text-6xl lg:text-7xl mb-6">Specialist Sourcing</h1>
            <p className="text-lg text-argos-gray-light leading-relaxed max-w-2xl">
              If it moves in bulk and has a market, we can source it.
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
                Finding what the<br />standard desk cannot
              </h2>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-argos-gray text-base leading-relaxed mb-4">
                Our AI-powered sourcing systems are built to identify supply for commodities that fall outside conventional trading coverage. When a buyer needs something specific — a non-standard specification, an unusual origin, or a material that does not appear on standard trade platforms — our specialist desk goes to work.
              </p>
              <p className="text-argos-gray text-base leading-relaxed">
                We do not claim to trade everything. But if it exists in bulk, has a market, and someone needs it sourced — we have the tools and network to find it. This is where technology meets commodity expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Highlight */}
      <section className="section-padding py-20 lg:py-28 bg-argos-gray-lightest">
        <div className="container-argos">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="eyebrow mb-4">Approach</p>
              <h2 className="heading-section text-3xl lg:text-4xl mb-6">Technology-driven sourcing</h2>
              <p className="text-argos-gray text-base leading-relaxed mb-4">
                Our systems continuously monitor global trade flows, production data and supplier networks. When a non-standard request arrives, we cross-reference available supply against the specific requirements — matching origin, specification, volume and logistics to identify viable options.
              </p>
              <p className="text-argos-gray text-base leading-relaxed">
                This is not algorithmic trading. It is technology-assisted human expertise — our team validates every lead, verifies every supplier and manages every transaction.
              </p>
            </div>
            <div className="flex flex-col gap-8 justify-center">
              <div className="flex items-start gap-4">
                <Bot className="w-6 h-6 text-argos-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-heading font-semibold text-sm mb-1">AI Pattern Recognition</h3>
                  <p className="text-argos-gray text-sm leading-relaxed">Systems that identify supply patterns across fragmented global markets.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Puzzle className="w-6 h-6 text-argos-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-heading font-semibold text-sm mb-1">Network Mapping</h3>
                  <p className="text-argos-gray text-sm leading-relaxed">Mapping of producer, trader and logistics networks to find non-obvious supply routes.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Search className="w-6 h-6 text-argos-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-heading font-semibold text-sm mb-1">Active Search</h3>
                  <p className="text-argos-gray text-sm leading-relaxed">Proactive identification of supply opportunities before they reach the open market.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding py-20 lg:py-28">
        <div className="container-argos">
          <p className="eyebrow mb-4">Products</p>
          <h2 className="heading-section text-3xl lg:text-4xl mb-12">Current focus areas</h2>
          <p className="text-argos-gray text-base leading-relaxed mb-8 max-w-2xl">
            Our specialist desk covers a wide range of materials. The following are current areas of active sourcing and supply.
          </p>
          <div className="grid lg:grid-cols-3 gap-px bg-argos-gray-lighter">
            {products.map((product) => (
              <div key={product.name} className="bg-white p-8 hover:bg-argos-gray-lightest transition-colors duration-300">
                <div className="w-8 h-8 bg-argos-accent/10 flex items-center justify-center mb-4">
                  <span className="text-argos-accent text-lg font-heading font-bold">
                    {product.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-base mb-2">{product.name}</h3>
                <p className="text-argos-gray text-sm leading-relaxed">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Origins & Destinations */}
      <section className="section-padding py-20 lg:py-28 bg-argos-gray-lightest">
        <div className="container-argos">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="eyebrow mb-4">Origins</p>
              <h2 className="heading-section text-2xl mb-6">Supply regions</h2>
              <div className="space-y-4">
                <div className="border-l-2 border-argos-accent pl-6">
                  <h3 className="font-heading font-semibold text-sm mb-1">Arab Gulf & Middle East</h3>
                  <p className="text-argos-gray text-sm">Major sulphur and urea production from gas processing and petrochemical operations.</p>
                </div>
                <div className="border-l-2 border-argos-accent pl-6">
                  <h3 className="font-heading font-semibold text-sm mb-1">Central Asia & CIS</h3>
                  <p className="text-argos-gray text-sm">Emerging production centres for industrial chemicals and bulk commodities.</p>
                </div>
                <div className="border-l-2 border-argos-accent pl-6">
                  <h3 className="font-heading font-semibold text-sm mb-1">Global Network</h3>
                  <p className="text-argos-gray text-sm">Our sourcing is not limited to established trade routes — we search wherever supply exists.</p>
                </div>
              </div>
            </div>
            <div>
              <p className="eyebrow mb-4">Destinations</p>
              <h2 className="heading-section text-2xl mb-6">Demand markets</h2>
              <div className="space-y-4">
                <div className="border-l-2 border-argos-accent pl-6">
                  <h3 className="font-heading font-semibold text-sm mb-1">Brazil & Latin America</h3>
                  <p className="text-argos-gray text-sm">Agricultural sector driving demand for fertiliser-grade materials and industrial inputs.</p>
                </div>
                <div className="border-l-2 border-argos-accent pl-6">
                  <h3 className="font-heading font-semibold text-sm mb-1">Southeast Asia</h3>
                  <p className="text-argos-gray text-sm">Growing industrial and agricultural demand across the ASEAN region.</p>
                </div>
                <div className="border-l-2 border-argos-accent pl-6">
                  <h3 className="font-heading font-semibold text-sm mb-1">Africa</h3>
                  <p className="text-argos-gray text-sm">Developing agricultural and industrial sectors creating new demand for specialist bulk materials.</p>
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
              <h2 className="heading-section text-3xl lg:text-4xl mb-4">Active Specialist Desk</h2>
              <p className="text-argos-gray-light text-base leading-relaxed">
                Current specialist tenders and sourcing requests updated in real time.
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
                Pricing data and trade flow analysis across the commodities we cover.
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
            All inquiries are handled with complete discretion. Submit your mandate and a member of our specialist desk will respond within 24 hours.
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
