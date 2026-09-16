import { Link } from 'react-router-dom'
import BackLink from '../../components/BackLink'
import { Helmet } from 'react-helmet-async'
import { Wheat, Shield, Globe, BarChart3, Truck, Sprout } from 'lucide-react'

const products = [
  {
    category: 'Grains',
    items: ['Wheat', 'Corn', 'Soybean'],
    description: 'Major grains sourced from production belts and delivered to importing nations across the globe.',
  },
  {
    category: 'Softs',
    items: ['Coffee', 'Cocoa'],
    description: 'Tropical commodities from origin cooperatives and plantation networks to consumer markets.',
  },
  {
    category: 'Edible Oils',
    items: ['Palm Oil', 'Soybean Oil', 'Sunflower Oil'],
    description: 'Refined and crude edible oils from Southeast Asian and South American producers.',
  },
]

const tradeRoutes = [
  { from: 'Black Sea', to: 'MENA', commodity: 'Wheat / Corn', distance: '~1,800 nm' },
  { from: 'South America', to: 'Asia', commodity: 'Soybean / Corn', distance: '~11,000 nm' },
  { from: 'Southeast Asia', to: 'Europe', commodity: 'Palm Oil', distance: '~8,000 nm' },
  { from: 'West Africa', to: 'Europe', commodity: 'Cocoa', distance: '~3,500 nm' },
]

const relatedCommodities = [
  { name: 'Energy', path: '/commodities/energy' },
  { name: 'Metals', path: '/commodities/metals' },
  { name: 'Minerals', path: '/commodities/minerals' },
  { name: 'Construction Materials', path: '/commodities/construction-materials' },
  { name: 'Specialist Sourcing', path: '/commodities/specialist-sourcing' },
]

export default function Agriculture() {
  return (
    <>
      <Helmet>
        <title>Agriculture Trading | Argos Worldwide</title>
        <meta name="description" content="Grains, softs and edible oils matched from production regions to global demand. Argos Worldwide connects agricultural producers with global buyers." />
        <link rel="canonical" href="https://argosworldwide.com/commodities/agriculture" />
        <meta property="og:title" content="Agriculture Trading | Argos Worldwide" />
        <meta property="og:description" content="Grains, softs and edible oils matched from production regions to global demand." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://argosworldwide.com/commodities/agriculture" />
      </Helmet>

      {/* Hero */}
      <section className="relative section-padding py-24 lg:py-32 bg-argos-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/commodities/agriculture-wheat.jpg"
            alt="Wheat and grain crops in a production region"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-argos-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-argos-black via-transparent to-argos-black/40" />
        </div>
        <div className="container-argos relative z-10">
          <div className="max-w-3xl">
            <BackLink to="/commodities" label="Back to Commodities" className="mb-6" />
            <p className="eyebrow text-argos-gray-light mb-6">Commodities</p>
            <h1 className="heading-display text-5xl sm:text-6xl lg:text-7xl mb-6">Agriculture</h1>
            <p className="text-lg text-argos-gray-light leading-relaxed max-w-2xl">
              Grains, softs and edible oils matched from production regions to global demand.
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
                From production belt<br />to global consumer
              </h2>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-argos-gray text-base leading-relaxed mb-4">
                Argos Worldwide matches agricultural commodities from production regions to global demand centres. We cover the major grains, tropical softs and edible oils, sourcing from established producing nations and delivering to import-dependent markets.
              </p>
              <p className="text-argos-gray text-base leading-relaxed">
                Our role is to bridge the gap between harvest cycles and consumption patterns, coordinating logistics, quality verification and documentation to ensure reliable supply across seasons.
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
              src="/images/commodities/agriculture-farm.jpg"
              alt="Agricultural produce and grain crops"
              className="w-full h-56 sm:h-72 object-cover"
            />
          </div>
          <div className="grid lg:grid-cols-3 gap-px bg-argos-gray-lighter">
            {products.map((product) => (
              <div key={product.category} className="bg-argos-gray-lightest p-8 hover:bg-white transition-colors duration-300">
                <Wheat className="w-6 h-6 text-argos-accent mb-4" />
                <h3 className="font-heading font-semibold text-base mb-2">{product.category}</h3>
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
                <Sprout className="w-6 h-6 text-argos-accent mb-4" />
                <h3 className="font-heading font-semibold text-base mb-2">Origin Relationships</h3>
                <p className="text-argos-gray text-sm leading-relaxed">
                  We maintain direct relationships with producers, cooperatives and plantation networks across major agricultural regions.
                </p>
              </div>
              <div>
                <Truck className="w-6 h-6 text-argos-accent mb-4" />
                <h3 className="font-heading font-semibold text-base mb-2">Seasonal Planning</h3>
                <p className="text-argos-gray text-sm leading-relaxed">
                  Our sourcing aligns with harvest calendars to secure competitive pricing and ensure availability across planting and harvesting cycles.
                </p>
              </div>
              <div>
                <Globe className="w-6 h-6 text-argos-accent mb-4" />
                <h3 className="font-heading font-semibold text-base mb-2">Quality Assurance</h3>
                <p className="text-argos-gray text-sm leading-relaxed">
                  Independent inspection and certification at origin, with specification compliance verified before shipment.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] overflow-hidden bg-argos-gray-lightest">
              <img
                src="/images/commodities/agriculture-farm.jpg"
                alt="Agricultural farmland and grain production"
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
              <h2 className="heading-section text-2xl mb-6">Production regions</h2>
              <div className="space-y-4">
                <div className="border-l-2 border-argos-accent pl-6">
                  <h3 className="font-heading font-semibold text-sm mb-1">Black Sea & Eastern Europe</h3>
                  <p className="text-argos-gray text-sm">Major wheat and corn exporting regions serving MENA and Asian markets.</p>
                </div>
                <div className="border-l-2 border-argos-accent pl-6">
                  <h3 className="font-heading font-semibold text-sm mb-1">South America</h3>
                  <p className="text-argos-gray text-sm">Brazil and Argentina, global leaders in soybean, corn and sugar production.</p>
                </div>
                <div className="border-l-2 border-argos-accent pl-6">
                  <h3 className="font-heading font-semibold text-sm mb-1">Southeast Asia</h3>
                  <p className="text-argos-gray text-sm">Indonesia and Malaysia, the world's primary palm oil producing region.</p>
                </div>
                <div className="border-l-2 border-argos-accent pl-6">
                  <h3 className="font-heading font-semibold text-sm mb-1">West Africa</h3>
                  <p className="text-argos-gray text-sm">Côte d'Ivoire and Ghana, responsible for the majority of global cocoa output.</p>
                </div>
              </div>
            </div>
            <div>
              <p className="eyebrow mb-4">Destinations</p>
              <h2 className="heading-section text-2xl mb-6">Demand markets</h2>
              <div className="space-y-4">
                <div className="border-l-2 border-argos-accent pl-6">
                  <h3 className="font-heading font-semibold text-sm mb-1">MENA</h3>
                  <p className="text-argos-gray text-sm">Major net importer of grains, dependent on Black Sea and Americas supply.</p>
                </div>
                <div className="border-l-2 border-argos-accent pl-6">
                  <h3 className="font-heading font-semibold text-sm mb-1">Asia-Pacific</h3>
                  <p className="text-argos-gray text-sm">Growing demand for feed grains, soybeans and edible oils across China and Southeast Asia.</p>
                </div>
                <div className="border-l-2 border-argos-accent pl-6">
                  <h3 className="font-heading font-semibold text-sm mb-1">Europe</h3>
                  <p className="text-argos-gray text-sm">Import demand for tropical softs, edible oils and supplementary grain supply.</p>
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
              <h2 className="heading-section text-3xl lg:text-4xl mb-4">Have an agriculture mandate?</h2>
              <p className="text-argos-gray-light text-base leading-relaxed">
                Tell us your volume, specification and timeline. Our desk will identify agricultural tenders, cargo offers and RFQs that match your requirements.
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
                Grain prices, crop forecasts and trade flow analysis across global agricultural markets.
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
            All inquiries are handled with complete discretion. Submit your mandate and a member of our agriculture desk will respond within 24 hours.
          </p>
          <Link to="/submit-mandate" className="btn-primary">
            Submit Mandate
          </Link>
        </div>
      </section>
    </>
  )
}
