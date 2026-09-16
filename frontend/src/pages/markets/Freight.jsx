import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import BackLink from '../../components/BackLink'
import { Ship, ArrowUpRight, ArrowDownLeft, WifiOff } from 'lucide-react'

const routes = [
  {
    route: 'Durban → Rotterdam',
    commodity: 'General Cargo',
    rate: '$38.20/MT',
    direction: 'Export',
    updated: 'Reference',
    source: 'Reference',
  },
  {
    route: 'Singapore → ARA (Europe)',
    commodity: 'Petroleum Products',
    rate: '$41.70/MT',
    direction: 'Import',
    updated: 'Reference',
    source: 'Reference',
  },
  {
    route: 'Black Sea → MENA',
    commodity: 'Grains/Bulk',
    rate: '$28.17/MT',
    direction: 'Export',
    updated: 'Reference',
    source: 'Reference',
  },
  {
    route: 'US Gulf → Asia',
    commodity: 'Energy/Petrochemicals',
    rate: '$50.96/MT',
    direction: 'Export',
    updated: 'Reference',
    source: 'Reference',
  },
  {
    route: 'West Africa → China',
    commodity: 'Dry Bulk/Ore',
    rate: '$34.17/MT',
    direction: 'Export',
    updated: 'Reference',
    source: 'Reference',
  },
  {
    route: 'Middle East Gulf → Japan',
    commodity: 'Energy/LNG',
    rate: '$24.91/MT',
    direction: 'Export',
    updated: 'Reference',
    source: 'Reference',
  },
]

function DirectionBadge({ direction }) {
  const isExport = direction === 'Export'
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[0.6875rem] font-medium tracking-[0.1em] uppercase ${
        isExport ? 'text-argos-blue' : 'text-argos-green'
      }`}
    >
      {isExport ? (
        <ArrowUpRight className="w-3.5 h-3.5" />
      ) : (
        <ArrowDownLeft className="w-3.5 h-3.5" />
      )}
      {direction}
    </span>
  )
}

export default function Freight() {
  return (
    <>
      <Helmet>
        <title>Freight | Argos Worldwide</title>
        <meta
          name="description"
          content="Argos Worldwide freight intelligence, indicative ocean route rates across energy, grains, ore and general cargo."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-argos-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/commodities/freight.jpg"
            alt="Ocean freight vessel transporting commodities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-argos-black/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-argos-black via-argos-black/50 to-transparent" />
        </div>
        <div className="container-argos section-padding pt-28 lg:pt-40 pb-16 lg:pb-20 relative z-10">
          <BackLink to="/markets" label="Back to Markets" className="mb-5" />
          <p className="eyebrow text-argos-accent mb-5">Market Data</p>
          <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl mb-6">
            FREIGHT
          </h1>
          <p className="text-argos-gray-light text-base lg:text-lg max-w-2xl leading-relaxed">
            Ocean freight is a core cost in physical trade. We track indicative
            rates on the routes that matter to the commodity flows we arrange.
          </p>
        </div>
      </section>

      {/* Status notice */}
      <section className="section-padding border-b border-argos-gray-lighter">
        <div className="container-argos py-6">
          <div className="inline-flex items-center gap-3 border border-argos-gray-lighter bg-argos-gray-lightest px-4 py-3">
            <WifiOff className="w-4 h-4 text-argos-gray shrink-0" />
            <p className="text-[0.6875rem] font-medium tracking-[0.15em] uppercase text-argos-black">
              Market Data Connection Pending
            </p>
          </div>
          <p className="mt-4 text-sm text-argos-gray max-w-2xl leading-relaxed">
            Indicative rates. Not live freight data.
          </p>
        </div>
      </section>

      {/* Table */}
      <section className="section-padding">
        <div className="container-argos py-12 lg:py-16 overflow-x-auto">
          <table className="w-full min-w-[860px] border-collapse">
            <thead>
              <tr className="border-b border-argos-gray-lighter">
                {['Route', 'Commodity Relevance', 'Rate', 'Direction', 'Last Updated', 'Source'].map(
                  (col) => (
                    <th
                      key={col}
                      className="text-left py-4 pr-6 last:pr-0 whitespace-nowrap text-[0.6875rem] font-medium tracking-[0.15em] uppercase text-argos-gray"
                    >
                      {col}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {routes.map((row) => (
                <tr
                  key={row.route}
                  className="border-b border-argos-gray-lighter hover:bg-argos-gray-lightest transition-colors duration-150"
                >
                  <td className="py-4 pr-6">
                    <span className="text-sm font-medium">{row.route}</span>
                  </td>
                  <td className="py-4 pr-6 text-sm text-argos-gray">
                    {row.commodity}
                  </td>
                  <td className="py-4 pr-6 font-mono text-sm whitespace-nowrap">
                    {row.rate}
                  </td>
                  <td className="py-4 pr-6 whitespace-nowrap">
                    <DirectionBadge direction={row.direction} />
                  </td>
                  <td className="py-4 pr-6 font-mono text-xs text-argos-gray whitespace-nowrap">
                    {row.updated}
                  </td>
                  <td className="py-4 font-mono text-xs text-argos-gray whitespace-nowrap">
                    {row.source}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-argos-gray">
            <span className="inline-flex items-center gap-2">
              <Ship className="w-4 h-4" /> Indicative ocean routes
            </span>
            <span className="inline-flex items-center gap-2">
              <ArrowUpRight className="w-3.5 h-3.5 text-argos-blue" /> Export
            </span>
            <span className="inline-flex items-center gap-2">
              <ArrowDownLeft className="w-3.5 h-3.5 text-argos-green" /> Import
            </span>
          </div>
        </div>
      </section>

      {/* Footer note + CTA */}
      <section className="section-padding">
        <div className="container-argos pb-20 lg:pb-28">
          <div className="border-t border-argos-gray-lighter pt-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <p className="eyebrow mb-2">Reference Data</p>
                <p className="text-sm text-argos-gray max-w-xl leading-relaxed">
                  Rates shown are indicative reference figures for planning
                  purposes, not live chartering quotes. A live freight feed is
                  pending and will replace these values once connected.
                </p>
              </div>
              <Link to="/markets/prices" className="btn-secondary justify-center shrink-0">
                Commodity Prices
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
