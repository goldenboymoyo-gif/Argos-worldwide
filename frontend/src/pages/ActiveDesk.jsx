import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Circle } from 'lucide-react'

const fallbackMandates = [
  {
    commodity: 'Granular Sulphur',
    origin: 'Middle East Gulf',
    destination: 'Southeast Asia',
    volume: '10,000–25,000',
    unit: 'MT',
    status: 'MATCHING',
  },
  {
    commodity: 'Copper Cathode',
    origin: 'Central Africa',
    destination: 'China',
    volume: '500–2,000',
    unit: 'MT',
    status: 'EXECUTION',
  },
  {
    commodity: 'Bitumen (60/70)',
    origin: 'Iran',
    destination: 'West Africa',
    volume: '5,000–15,000',
    unit: 'MT',
    status: 'MATCHING',
  },
  {
    commodity: 'Milling Wheat',
    origin: 'Black Sea',
    destination: 'MENA',
    volume: '25,000–60,000',
    unit: 'MT',
    status: 'EXECUTION',
  },
  {
    commodity: 'Manganese Ore',
    origin: 'South Africa',
    destination: 'India',
    volume: '10,000–30,000',
    unit: 'MT',
    status: 'SOURCING',
  },
  {
    commodity: 'Urea (Prilled)',
    origin: 'Arab Gulf',
    destination: 'Brazil',
    volume: '20,000–40,000',
    unit: 'MT',
    status: 'SOURCING',
  },
  {
    commodity: 'LNG Cargo',
    origin: 'US Gulf',
    destination: 'Northwest Europe',
    volume: '1 cargo (~70k)',
    unit: 'MT',
    status: 'EXECUTION',
  },
]

const statusStyles = {
  MATCHING: {
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    dot: 'text-blue-500',
  },
  EXECUTION: {
    bg: 'bg-green-50',
    text: 'text-green-700',
    dot: 'text-green-500',
  },
  SOURCING: {
    bg: 'bg-amber-50',
    text: 'text-amber-700',
    dot: 'text-amber-500',
  },
  RESEARCH: {
    bg: 'bg-gray-50',
    text: 'text-gray-600',
    dot: 'text-gray-400',
  },
}

export default function ActiveDesk() {
  const [mandates, setMandates] = useState([])
  const [loading, setLoading] = useState(true)
  const [fromApi, setFromApi] = useState(false)

  useEffect(() => {
    let cancelled = false
    const load = async () => {
      try {
        const res = await fetch('/api/active-desk/public')
        if (!res.ok) throw new Error('API unavailable')
        const data = await res.json()
        if (!cancelled && data && data.length > 0) {
          setMandates(data)
          setFromApi(true)
        } else if (!cancelled) {
          setMandates(fallbackMandates)
        }
      } catch (e) {
        if (!cancelled) setMandates(fallbackMandates)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => { cancelled = true }
  }, [])
  return (
    <>
      <Helmet>
        <title>Active Desk — Argos Worldwide</title>
        <meta name="description" content="A view of commodity sourcing activity across the Argos Worldwide desk. Current mandates across energy, metals, minerals, and agriculture." />
      </Helmet>

      {/* Hero */}
      <section className="section-padding pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="container-argos">
          <div className="max-w-3xl">
            <span className="eyebrow">Live Market Activity</span>
            <h1 className="heading-section text-4xl sm:text-5xl lg:text-6xl text-argos-black mt-4 mb-6">
              ACTIVE DESK
            </h1>
            <p className="text-lg text-argos-gray leading-relaxed max-w-2xl">
              A view of commodity sourcing activity across our desk. All counterparties are confidential.
            </p>
          </div>
        </div>
      </section>

      {/* Live Indicator */}
      <section className="section-padding pb-8">
        <div className="container-argos">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-xs font-medium tracking-[0.1em] uppercase text-argos-gray">
              Argos Desk · Live Active
            </span>
          </div>
        </div>
      </section>

      {/* Mandates Table */}
      <section className="section-padding pb-16 lg:pb-24">
        <div className="container-argos">
          {/* Desktop Table */}
          <div className="hidden lg:block">
            <div className="border border-argos-gray-lighter">
              {/* Table Header */}
              <div className="grid grid-cols-12 bg-argos-gray-lightest">
                <div className="col-span-3 px-6 py-4">
                  <span className="text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-argos-gray">
                    Commodity
                  </span>
                </div>
                <div className="col-span-4 px-6 py-4">
                  <span className="text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-argos-gray">
                    Route
                  </span>
                </div>
                <div className="col-span-3 px-6 py-4">
                  <span className="text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-argos-gray">
                    Volume
                  </span>
                </div>
                <div className="col-span-2 px-6 py-4">
                  <span className="text-[0.6875rem] font-semibold tracking-[0.12em] uppercase text-argos-gray">
                    Status
                  </span>
                </div>
              </div>

              {/* Table Rows */}
              {loading && (
                <div className="border-t border-argos-gray-lighter py-10 text-center">
                  <span className="text-sm text-argos-gray-light">
                    Loading mandates from the desk...
                  </span>
                </div>
              )}
              {!loading && mandates.map((item, index) => {
                const style = statusStyles[item.status || 'RESEARCH']
                return (
                  <div
                    key={item.id || index}
                    className="grid grid-cols-12 border-t border-argos-gray-lighter hover:bg-argos-gray-lightest/50 transition-colors duration-200"
                  >
                    <div className="col-span-3 px-6 py-5">
                      <span className="text-sm font-medium text-argos-black">
                        {item.commodity}
                      </span>
                    </div>
                    <div className="col-span-4 px-6 py-5">
                      <span className="text-sm text-argos-gray">
                        {item.origin} → {item.destination}
                      </span>
                    </div>
                    <div className="col-span-3 px-6 py-5">
                      <span className="text-sm text-argos-gray font-mono">
                        {item.volume} {item.unit}
                      </span>
                    </div>
                    <div className="col-span-2 px-6 py-5">
                      <span className={`inline-flex items-center gap-2 px-3 py-1 text-[0.6875rem] font-medium tracking-[0.08em] uppercase ${style.bg} ${style.text}`}>
                        <Circle className={`w-1.5 h-1.5 fill-current ${style.dot}`} />
                        {item.status}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-4">
            {mandates.map((item, index) => {
              const style = statusStyles[item.status || 'RESEARCH']
              return (
                <div
                  key={item.id || index}
                  className="border border-argos-gray-lighter p-5"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-sm font-medium text-argos-black">
                      {item.commodity}
                    </h3>
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[0.625rem] font-medium tracking-[0.08em] uppercase shrink-0 ml-3 ${style.bg} ${style.text}`}>
                      <Circle className={`w-1.5 h-1.5 fill-current ${style.dot}`} />
                      {item.status}
                    </span>
                  </div>
                  <p className="text-sm text-argos-gray mb-2">{item.origin} → {item.destination}</p>
                  <p className="text-sm text-argos-gray font-mono">{item.volume} {item.unit}</p>
                </div>
              )
            })}
          </div>

          {/* Note */}
          <div className="mt-8 border-t border-argos-gray-lighter pt-6">
            <p className="text-xs text-argos-gray-light">
              Statuses reflect the current stage of each mandate. Counterparty details are confidential.
              {fromApi && ' Records are managed by the Argos desk administrator.'}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-16 lg:py-24 bg-argos-gray-lightest">
        <div className="container-argos text-center">
          <span className="eyebrow">Next Step</span>
          <h2 className="heading-section text-2xl sm:text-3xl text-argos-black mt-4 mb-4">
            Have a mandate to place?
          </h2>
          <p className="text-argos-gray mb-8 max-w-lg mx-auto">
            Submit your requirements confidentially. Our desk will respond within one business day.
          </p>
          <Link to="/submit-mandate" className="btn-primary">
            Submit a Mandate
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
