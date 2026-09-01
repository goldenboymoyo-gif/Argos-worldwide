import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Building2, Shield, Globe, BarChart3, Truck, HardHat } from 'lucide-react'

const products = [
  {
    name: 'Aggregates',
    description: 'Crushed stone, gravel and sand for concrete production, road building and general construction.',
  },
  {
    name: 'Cement',
    description: 'Portland and blended cements supplied in bulk or bagged for construction and infrastructure projects.',
  },
  {
    name: 'Bitumen',
    description: 'Road-grade and industrial bitumen for paving, roofing and waterproofing applications.',
  },
  {
    name: 'Bulk Materials',
    description: 'Gypsum, lime, fly ash and other bulk construction inputs for large-scale project supply.',
  },
]

const tradeRoutes = [
  { from: 'Middle East Gulf', to: 'Southeast Asia', commodity: 'Cement / Clinker', distance: '~5,500 nm' },
  { from: 'Iran', to: 'West Africa', commodity: 'Cement / Steel', distance: '~5,000 nm' },
]

const relatedCommodities = [
  { name: 'Energy', path: '/commodities/energy' },
  { name: 'Metals', path: '/commodities/metals' },
  { name: 'Minerals', path: '/commodities/minerals' },
  { name: 'Agriculture', path: '/commodities/agriculture' },
  { name: 'Specialist Sourcing', path: '/commodities/specialist-sourcing' },
]

export default function ConstructionMaterials() {
  return (
    <>
      <Helmet>
        <title>Construction Materials | Argos Worldwide</title>
        <meta name="description" content="Aggregates, cement, bitumen and bulk materials for large-scale infrastructure projects. Argos Worldwide sources construction materials globally." />
        <link rel="canonical" href="https://argosworldwide.com/commodities/construction-materials" />
        <meta property="og:title" content="Construction Materials | Argos Worldwide" />
        <meta property="og:description" content="Aggregates, cement, bitumen and bulk materials for large-scale infrastructure projects." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://argosworldwide.com/commodities/construction-materials" />
      </Helmet>

      {/* Hero */}
      <section className="relative section-padding py-24 lg:py-32 bg-argos-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/commodities/construction.jpg"
            alt="Construction materials and infrastructure project"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-argos-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-argos-black via-transparent to-argos-black/40" />
        </div>
        <div className="container-argos relative z-10">
          <div className="max-w-3xl">
            <p className="eyebrow text-argos-gray-light mb-6">Commodities</p>
            <h1 className="heading-display text-5xl sm:text-6xl lg:text-7xl mb-6">Construction Materials</h1>
            <p className="text-lg text-argos-gray-light leading-relaxed max-w-2xl">
              Aggregates, cement, bitumen and bulk materials for large-scale infrastructure projects.
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
                Supplying infrastructure<br />at scale
              </h2>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-argos-gray text-base leading-relaxed mb-4">
                Argos Worldwide sources and supplies construction materials for large-scale infrastructure and development projects. We cover the essential inputs — aggregates, cement, bitumen and bulk materials — connecting producers in surplus markets with demand-driven projects.
              </p>
              <p className="text-argos-gray text-base leading-relaxed">
                Our focus is on volume reliability and logistics coordination. Construction projects cannot afford supply interruptions, and we structure our sourcing to deliver continuity from origin to site.
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-argos-gray-lighter">
            {products.map((product) => (
              <div key={product.name} className="bg-argos-gray-lightest p-8 hover:bg-white transition-colors duration-300">
                <HardHat className="w-6 h-6 text-argos-accent mb-4" />
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
              <Truck className="w-6 h-6 text-argos-accent mb-4" />
              <h3 className="font-heading font-semibold text-base mb-2">Volume Supply</h3>
              <p className="text-argos-gray text-sm leading-relaxed">
                We source at the scale required by infrastructure projects — from single-vessel shipments to multi-year supply contracts.
              </p>
            </div>
            <div>
              <Globe className="w-6 h-6 text-argos-accent mb-4" />
              <h3 className="font-heading font-semibold text-base mb-2">Project Coordination</h3>
              <p className="text-argos-gray text-sm leading-relaxed">
                Delivery schedules aligned to construction timelines. We work with project managers to ensure material arrives when and where it is needed.
              </p>
            </div>
            <div>
              <Building2 className="w-6 h-6 text-argos-accent mb-4" />
              <h3 className="font-heading font-semibold text-base mb-2">Specification Compliance</h3>
              <p className="text-argos-gray text-sm leading-relaxed">
                All material is tested and certified to meet project specifications and local regulatory requirements.
              </p>
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
                  <h3 className="font-heading font-semibold text-sm mb-1">Middle East Gulf</h3>
                  <p className="text-argos-gray text-sm">Major cement and clinker production centres with established export capacity to Asia and Africa.</p>
                </div>
                <div className="border-l-2 border-argos-accent pl-6">
                  <h3 className="font-heading font-semibold text-sm mb-1">Iran & Turkey</h3>
                  <p className="text-argos-gray text-sm">Significant cement and construction material producers with competitive pricing for African markets.</p>
                </div>
                <div className="border-l-2 border-argos-accent pl-6">
                  <h3 className="font-heading font-semibold text-sm mb-1">India & Southeast Asia</h3>
                  <p className="text-argos-gray text-sm">Growing production bases serving regional and export construction demand.</p>
                </div>
              </div>
            </div>
            <div>
              <p className="eyebrow mb-4">Destinations</p>
              <h2 className="heading-section text-2xl mb-6">Demand markets</h2>
              <div className="space-y-4">
                <div className="border-l-2 border-argos-accent pl-6">
                  <h3 className="font-heading font-semibold text-sm mb-1">Southeast Asia</h3>
                  <p className="text-argos-gray text-sm">Rapid urbanisation driving heavy import demand for cement, clinker and aggregates.</p>
                </div>
                <div className="border-l-2 border-argos-accent pl-6">
                  <h3 className="font-heading font-semibold text-sm mb-1">West Africa</h3>
                  <p className="text-argos-gray text-sm">Infrastructure development creating sustained demand for bulk construction materials.</p>
                </div>
                <div className="border-l-2 border-argos-accent pl-6">
                  <h3 className="font-heading font-semibold text-sm mb-1">Sub-Saharan Africa</h3>
                  <p className="text-argos-gray text-sm">Large-scale road, housing and industrial projects requiring reliable material supply chains.</p>
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
              <h2 className="heading-section text-3xl lg:text-4xl mb-4">Active Desk</h2>
              <p className="text-argos-gray-light text-base leading-relaxed">
                Current construction material tenders and supply opportunities updated in real time.
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
                Pricing, supply-demand data and project analysis across global construction material markets.
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
            All inquiries are handled with complete discretion. Submit your mandate and a member of our team will respond within 24 hours.
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
