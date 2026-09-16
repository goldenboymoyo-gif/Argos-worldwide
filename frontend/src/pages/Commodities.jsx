import { Link } from 'react-router-dom'
import BackLink from '../components/BackLink'
import { Helmet } from 'react-helmet-async'
import { Zap, Coins, Mountain, Wheat, Building2, Search } from 'lucide-react'

const commodities = [
  {
    name: 'Energy',
    path: '/commodities/energy',
    icon: Zap,
    image: '/images/commodities/energy-oil.jpg',
    description: 'Crude grades, refined products, LNG and power across Atlantic and Eastern basins.',
    products: ['Crude Oil', 'Refined Products', 'LNG', 'Power'],
  },
  {
    name: 'Metals',
    path: '/commodities/metals',
    icon: Coins,
    image: '/images/commodities/metals-copper.jpg',
    description: 'Precious, base and battery metals including physical lots and structured offtake agreements.',
    products: ['Precious Metals', 'Base Metals', 'Battery Metals'],
  },
  {
    name: 'Minerals',
    path: '/commodities/minerals',
    icon: Mountain,
    image: '/images/commodities/minerals-mining.jpg',
    description: 'Industrial minerals and mining outputs sourced directly from origin globally.',
    products: ['Manganese Ore', 'Industrial Minerals', 'Mining Outputs'],
  },
  {
    name: 'Agriculture',
    path: '/commodities/agriculture',
    icon: Wheat,
    image: '/images/commodities/agriculture-wheat.jpg',
    description: 'Grains, softs and edible oils matched from production regions to global demand.',
    products: ['Grains', 'Softs', 'Edible Oils'],
  },
  {
    name: 'Construction Materials',
    path: '/commodities/construction-materials',
    icon: Building2,
    image: '/images/commodities/construction.jpg',
    description: 'Aggregates, cement, bitumen and bulk materials for large-scale infrastructure projects.',
    products: ['Aggregates', 'Cement', 'Bitumen', 'Bulk Materials'],
  },
  {
    name: 'Specialist Sourcing',
    path: '/commodities/specialist-sourcing',
    icon: Search,
    image: '/images/commodities/specialist-sulphur.jpg',
    description: 'If it moves in bulk and has a market, we can source it. Our AI systems are built to find what the standard desk cannot.',
    products: ['Granular Sulphur', 'Urea', 'Specialist Bulk'],
  },
]

export default function Commodities() {
  return (
    <>
      <Helmet>
        <title>Commodities, Argos Worldwide</title>
        <meta name="description" content="Argos Worldwide sources energy, metals, minerals, agriculture, construction materials, and specialist commodities from global origins to worldwide destinations." />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-argos-black text-white section-padding py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/home/hero-cargo.jpg"
            alt="Commodity cargo vessel at sea"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-argos-black/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-argos-black via-argos-black/50 to-transparent" />
        </div>
        <div className="container-argos relative z-10">
          <BackLink to="/" label="Back to Home" className="mb-4" />
          <p className="eyebrow text-argos-gray-light mb-4">COMMODITIES</p>
          <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl text-white max-w-3xl">
            What we source.
          </h1>
          <p className="mt-6 text-lg text-argos-gray-light max-w-2xl">
            Argos operates across six commodity categories, connecting suppliers with buyers through market intelligence and direct brokerage.
          </p>
        </div>
      </section>

      {/* Commodity Grid */}
      <section className="section-padding py-16 lg:py-24">
        <div className="container-argos">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-argos-gray-lighter">
            {commodities.map((commodity) => {
              const Icon = commodity.icon
              return (
                <Link
                  key={commodity.name}
                  to={commodity.path}
                  className="group bg-white transition-colors duration-300 hover:bg-argos-gray-lightest"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={commodity.image}
                      alt={commodity.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 sm:p-10">
                    <div className="flex items-start justify-between mb-6">
                      <Icon className="w-6 h-6 text-argos-gray" strokeWidth={1.5} />
                    </div>
                    <h2 className="heading-section text-xl mb-3">{commodity.name}</h2>
                    <p className="text-[0.875rem] text-argos-gray leading-relaxed mb-6">
                      {commodity.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {commodity.products.map((product) => (
                        <span
                          key={product}
                          className="text-[0.6875rem] font-medium tracking-[0.05em] uppercase text-argos-gray-light border border-argos-gray-lighter px-3 py-1"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-argos-gray-lightest section-padding py-16 lg:py-20">
        <div className="container-argos text-center">
          <p className="eyebrow mb-4">CONFIDENTIAL MANDATE</p>
          <h2 className="heading-section text-2xl sm:text-3xl mb-6">
            Looking for a specific commodity?
          </h2>
          <p className="text-argos-gray max-w-lg mx-auto mb-8">
            Submit a confidential mandate and our team will identify the right sourcing opportunities.
          </p>
          <Link to="/submit-mandate" className="btn-primary">
            Submit a Mandate
          </Link>
        </div>
      </section>
    </>
  )
}
