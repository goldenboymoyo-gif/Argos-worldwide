import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import BackLink from '../../components/BackLink'
import { ArrowUp, ArrowDown, Minus, WifiOff } from 'lucide-react'

const instruments = [
  { name: 'Brent Crude', symbol: 'BRN', price: '$83.27', change: 0.99, dir: 'up' },
  { name: 'WTI Crude', symbol: 'WTI', price: '$78.00', change: 0.15, dir: 'down' },
  { name: 'Gold', symbol: 'XAU', price: '$2386.24', change: 0.2, dir: 'up' },
  { name: 'Silver', symbol: 'XAG', price: '$28.92', change: 0.01, dir: 'up' },
  { name: 'Copper', symbol: 'HG', price: '$4.317', change: 0.08, dir: 'down' },
  { name: 'Wheat', symbol: 'W', price: '$607.73', change: 0.78, dir: 'down' },
  { name: 'Corn', symbol: 'C', price: '$438.26', change: 0.0, dir: 'flat' },
  { name: 'Natural Gas', symbol: 'NG', price: '$2.841', change: 0.04, dir: 'up' },
  { name: 'Platinum', symbol: 'PL', price: '$992.40', change: 0.72, dir: 'up' },
  { name: 'Cocoa', symbol: 'CC', price: '$7224.66', change: 0.21, dir: 'down' },
  { name: 'Coffee', symbol: 'KC', price: '$223.60', change: 0.54, dir: 'down' },
  { name: 'Soybean', symbol: 'S', price: '$1149.06', change: 0.57, dir: 'up' },
]

function ChangeIndicator({ dir }) {
  if (dir === 'up') return <ArrowUp className="w-3.5 h-3.5" />
  if (dir === 'down') return <ArrowDown className="w-3.5 h-3.5" />
  return <Minus className="w-3.5 h-3.5" />
}

function ChangeColor({ dir }) {
  if (dir === 'up') return 'text-argos-green'
  if (dir === 'down') return 'text-argos-red'
  return 'text-argos-gray'
}

export default function CommodityPrices() {
  return (
    <>
      <Helmet>
        <title>Commodity Prices | Argos Worldwide</title>
        <meta
          name="description"
          content="Argos Worldwide commodity price reference data, energy, metals and agriculture. Reference figures, live feed pending."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-argos-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/home/hero-poster.jpg"
            alt="Bulk commodity cargo operations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-argos-black/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-argos-black via-argos-black/50 to-transparent" />
        </div>
        <div className="container-argos section-padding pt-28 lg:pt-40 pb-16 lg:pb-20 relative z-10">
          <BackLink to="/markets" label="Back to Markets" className="mb-5" />
          <p className="eyebrow text-argos-accent mb-5">Market Data</p>
          <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl mb-6">
            COMMODITY PRICES
          </h1>
          <p className="text-argos-gray-light text-base lg:text-lg max-w-2xl leading-relaxed">
            Reference pricing across the energy, metals and agricultural
            instruments the Argos desk trades.
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
            Reference prices. Not live data. Connection to market data feed pending.
          </p>
        </div>
      </section>

      {/* Table */}
      <section className="section-padding">
        <div className="container-argos py-12 lg:py-16 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse">
            <thead>
              <tr className="border-b border-argos-gray-lighter">
                <th className="text-left py-4 pr-6 text-[0.6875rem] font-medium tracking-[0.15em] uppercase text-argos-gray">
                  Instrument
                </th>
                <th className="text-right py-4 pr-6 text-[0.6875rem] font-medium tracking-[0.15em] uppercase text-argos-gray">
                  Price
                </th>
                <th className="text-right py-4 pr-6 text-[0.6875rem] font-medium tracking-[0.15em] uppercase text-argos-gray">
                  Change
                </th>
                <th className="text-right py-4 text-[0.6875rem] font-medium tracking-[0.15em] uppercase text-argos-gray">
                  % Change
                </th>
              </tr>
            </thead>
            <tbody>
              {instruments.map((item) => (
                <tr
                  key={item.symbol}
                  className="border-b border-argos-gray-lighter hover:bg-argos-gray-lightest transition-colors duration-150"
                >
                  <td className="py-4 pr-6">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[0.6875rem] tracking-wide text-argos-gray w-10 shrink-0">
                        {item.symbol}
                      </span>
                      <span className="text-sm font-medium">{item.name}</span>
                    </div>
                  </td>
                  <td className="py-4 pr-6 text-right font-mono text-sm">
                    {item.price}
                  </td>
                  <td className="py-4 pr-6 text-right">
                    <span className={`inline-flex items-center gap-1 font-mono text-xs ${ChangeColor({ dir: item.dir })}`}>
                      <ChangeIndicator dir={item.dir} />
                      {item.dir === 'flat' ? '0.00' : item.change.toFixed(2)}
                    </span>
                  </td>
                  <td className="py-4 text-right">
                    <span className={`inline-flex items-center gap-1 font-mono text-xs ${ChangeColor({ dir: item.dir })}`}>
                      <ChangeIndicator dir={item.dir} />
                      {item.dir === 'up' ? '+' : item.dir === 'down' ? '−' : ''}
                      {item.change.toFixed(2)}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-argos-gray">
            <span className="inline-flex items-center gap-2">
              <ArrowUp className="w-3.5 h-3.5 text-argos-green" /> Higher
            </span>
            <span className="inline-flex items-center gap-2">
              <ArrowDown className="w-3.5 h-3.5 text-argos-red" /> Lower
            </span>
            <span className="inline-flex items-center gap-2">
              <Minus className="w-3.5 h-3.5 text-argos-gray" /> Unchanged
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
                  Figures shown are indicative reference prices, not live market
                  data. A direct connection to the market data feed is pending and
                  will replace these values once established.
                </p>
              </div>
              <Link to="/markets/intelligence" className="btn-secondary justify-center shrink-0">
                Market Intelligence
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
