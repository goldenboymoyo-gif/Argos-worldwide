import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  Shield,
  Search,
  Globe2,
  Brain,
  Zap,
  Users,
  BarChart3,
  FileCheck,
  Send,
  MapPin,
  TrendingUp,
  TrendingDown,
} from 'lucide-react'

const tickerData = [
  { name: 'BRENT', price: '83.27', change: '+0.99%', up: true },
  { name: 'WTI', price: '78.00', change: '-0.15%', up: false },
  { name: 'GOLD', price: '2386.24', change: '+0.20%', up: true },
  { name: 'SILVER', price: '28.92', change: '+0.01%', up: true },
  { name: 'COPPER', price: '4.317', change: '-0.08%', up: false },
  { name: 'WHEAT', price: '607.73', change: '-0.78%', up: false },
  { name: 'CORN', price: '438.26', change: '+0.00%', up: true },
  { name: 'NAT GAS', price: '2.841', change: '+0.04%', up: true },
  { name: 'PLATINUM', price: '992.40', change: '+0.72%', up: true },
  { name: 'COCOA', price: '7224.66', change: '-0.21%', up: false },
  { name: 'COFFEE', price: '223.60', change: '-0.54%', up: false },
  { name: 'SOYBEAN', price: '1149.06', change: '+0.57%', up: true },
]

const introFeatures = [
  {
    icon: Users,
    title: 'Counterparty Matching',
    description: 'We connect vetted buyers with credible suppliers across commodity classes and geographies.',
  },
  {
    icon: Brain,
    title: 'Market Signal Synthesis',
    description: 'AI systems scan pricing, freight, FX, and supply signals to surface actionable intelligence.',
  },
  {
    icon: Shield,
    title: 'Confidential Handling',
    description: 'Every mandate is managed with discretion. Identities and volumes are protected throughout.',
  },
  {
    icon: Search,
    title: 'Deep Research Infrastructure',
    description: 'Our research layer covers production data, logistics corridors, and regulatory landscapes.',
  },
]

const capabilities = [
  { label: 'Market Intelligence', description: 'Monitoring prices, supply chains, and geopolitical signals across commodity markets.' },
  { label: 'Sourcing', description: 'Identifying and vetting suppliers across global production corridors.' },
  { label: 'Counterparty Matching', description: 'Connecting serious buyers with credible, verified suppliers.' },
  { label: 'Execution', description: 'Facilitating introductions, negotiations, and transaction completion.' },
]

const commodities = [
  { name: 'Energy', path: '/commodities/energy', image: '/images/commodities/energy-oil.jpg', description: 'Crude oil, refined products, LNG, and natural gas.' },
  { name: 'Metals', path: '/commodities/metals', image: '/images/commodities/metals-copper.jpg', description: 'Base metals, precious metals, and specialty alloys.' },
  { name: 'Minerals', path: '/commodities/minerals', image: '/images/commodities/minerals-mining.jpg', description: 'Industrial minerals, rare earths, and critical inputs.' },
  { name: 'Agriculture', path: '/commodities/agriculture', image: '/images/commodities/agriculture-wheat.jpg', description: 'Grains, softs, oilseeds, and agricultural inputs.' },
  { name: 'Construction Materials', path: '/commodities/construction-materials', image: '/images/commodities/construction.jpg', description: 'Cement, aggregates, steel products, and building inputs.' },
  { name: 'Specialist Sourcing', path: '/commodities/specialist-sourcing', image: '/images/commodities/specialist-sulphur.jpg', description: 'Non-standard volumes, unusual specifications, hard-to-source materials.' },
]

const tradeCorridors = [
  'Africa',
  'Middle East',
  'Europe',
  'Asia',
  'Americas',
]

const activeDesks = [
  {
    commodity: 'WTI Crude',
    route: 'Permian Basin → Rotterdam',
    volume: '500,000 bbl/month',
    status: 'Sourcing',
  },
  {
    commodity: 'LNG',
    route: 'Qatar → India',
    volume: '300,000 MMBtu/month',
    status: 'Matching',
  },
  {
    commodity: 'Copper Cathode',
    route: 'Chile → Shanghai',
    volume: '2,500 MT',
    status: 'Negotiation',
  },
  {
    commodity: 'Arabica Coffee',
    route: 'Colombia → Hamburg',
    volume: '200 MT',
    status: 'Sourcing',
  },
]

const processSteps = [
  { step: '01', label: 'Mandate' },
  { step: '02', label: 'Research' },
  { step: '03', label: 'Sourcing' },
  { step: '04', label: 'Introduction' },
  { step: '05', label: 'Execution' },
]

const people = [
  {
    name: 'Arthur Blackwell',
    role: 'Outreach',
    email: 'arthur@argosworldwide.com',
  },
  {
    name: 'Ben Norton',
    role: 'Broker',
    email: 'ben@argosworldwide.com',
  },
]

export default function Home() {
  return (
    <>
      {/* ── 01 HERO ── */}
      <section className="relative min-h-screen flex items-center bg-argos-black text-white overflow-hidden">
        {/* Background video */}
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            src="/videos/hero-port.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/home/hero-cargo.jpg"
          >
            <source src="/videos/hero-port.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-argos-black/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-argos-black via-argos-black/40 to-transparent" />
        </div>

        {/* Grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] z-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }} />

        <div className="section-padding w-full pt-32 pb-24 lg:pt-40 lg:pb-32 relative z-20">
          <div className="container-argos">
            <p className="eyebrow text-argos-gray-light mb-6">Commodity Intermediary</p>

            <h1 className="font-heading font-bold text-[2.5rem] sm:text-[3.25rem] lg:text-[4.5rem] xl:text-[5.5rem] tracking-tight leading-[1.02] max-w-[900px] mb-8">
              CONNECTING COMMODITIES AROUND THE GLOBE
            </h1>

            <p className="text-argos-gray-light text-base sm:text-lg max-w-[620px] leading-relaxed mb-12">
              Argos Worldwide connects commodity buyers with the right suppliers — anywhere in the world.
              Our AI systems surface the intelligence. Our brokers make it happen.
              The precision of technology, the trust of a handshake.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/submit-mandate" className="btn-primary">
                OPEN A PRIVATE DESK
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/commodities" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-argos-black">
                EXPLORE OUR MARKETS
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02 MARKET TICKER ── */}
      <section className="bg-argos-gray-lightest border-y border-argos-gray-lighter">
        <div className="py-3 overflow-hidden">
          <div className="flex items-center gap-2 mb-2 section-padding">
            <span className="text-[0.625rem] tracking-[0.15em] uppercase text-argos-gray font-medium">
              Market Data — Reference Prices
            </span>
            <span className="text-[0.625rem] tracking-[0.1em] uppercase text-argos-gray-light ml-1">
              Connection Pending
            </span>
          </div>
          <div className="overflow-hidden">
            <div className="animate-marquee flex whitespace-nowrap">
              {[...tickerData, ...tickerData].map((item, i) => (
                <div key={i} className="inline-flex items-center gap-3 px-6 shrink-0">
                  <span className="text-[0.75rem] font-medium tracking-[0.05em] text-argos-charcoal">
                    {item.name}
                  </span>
                  <span className="text-[0.75rem] font-medium text-argos-black">
                    {item.price}
                  </span>
                  <span className={`text-[0.6875rem] font-medium flex items-center gap-0.5 ${item.up ? 'text-emerald-600' : 'text-red-500'}`}>
                    {item.up
                      ? <TrendingUp className="w-3 h-3" />
                      : <TrendingDown className="w-3 h-3" />
                    }
                    {item.change}
                  </span>
                  <span className="text-argos-gray-lighter mx-2">|</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 INTRODUCTION ── */}
      <section className="section-padding py-24 lg:py-32">
        <div className="container-argos">
          <div className="max-w-3xl mb-20">
            <p className="eyebrow mb-4">Who We Are</p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[2.75rem] tracking-tight leading-[1.1] mb-6">
              THE INTERMEDIARY, REIMAGINED.
            </h2>
            <p className="text-argos-gray text-base sm:text-lg leading-relaxed max-w-[560px]">
              AI systems scan global commodity markets, freight rates, and supply chains in real time.
              Signals are distilled into actionable intelligence. Our brokers transform that intelligence
              into counterparties, introductions, and completed transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-argos-gray-lighter">
            {introFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="bg-white p-8 lg:p-10">
                  <Icon className="w-5 h-5 text-argos-accent mb-5" strokeWidth={1.5} />
                  <h3 className="font-heading font-semibold text-sm tracking-[0.02em] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-argos-gray text-[0.8125rem] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 04 WHAT WE DO ── */}
      <section className="section-padding py-20 lg:py-28 bg-argos-gray-lightest">
        <div className="container-argos">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow mb-4">Capabilities</p>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[2.5rem] tracking-tight leading-[1.1]">
                WHAT WE DO
              </h2>
            </div>
            <Link
              to="/what-we-do"
              className="text-xs font-medium tracking-[0.1em] uppercase text-argos-gray hover:text-argos-black transition-colors inline-flex items-center gap-2 shrink-0"
            >
              Learn more
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-argos-gray-lighter">
            {capabilities.map((cap, i) => (
              <div key={cap.label} className="bg-white p-8 lg:p-10">
                <span className="text-[0.625rem] font-medium text-argos-accent tracking-[0.1em] mb-4 block">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-heading font-semibold text-sm tracking-[0.02em] mb-3">
                  {cap.label}
                </h3>
                <p className="text-argos-gray text-[0.8125rem] leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 COMMODITIES ── */}
      <section className="section-padding py-24 lg:py-32">
        <div className="container-argos">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-4">Markets</p>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[2.5rem] tracking-tight leading-[1.1] mb-4">
              COMMODITIES WE COVER
            </h2>
            <p className="text-argos-gray text-base leading-relaxed">
              From energy to agriculture, metals to minerals — we operate across commodity classes
              and geographies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-argos-gray-lighter">
            {commodities.map((commodity) => (
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
                <div className="p-8 lg:p-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-heading font-semibold text-base tracking-[0.02em]">
                      {commodity.name}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-argos-gray-light group-hover:text-argos-black transition-colors shrink-0 mt-0.5" />
                  </div>
                  <p className="text-argos-gray text-[0.8125rem] leading-relaxed">
                    {commodity.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06 GLOBAL NETWORK ── */}
      <section className="section-padding py-20 lg:py-28 bg-argos-gray-lightest">
        <div className="container-argos">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow mb-4">Presence</p>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[2.5rem] tracking-tight leading-[1.1]">
                GLOBAL NETWORK
              </h2>
            </div>
            <Link
              to="/global-network"
              className="text-xs font-medium tracking-[0.1em] uppercase text-argos-gray hover:text-argos-black transition-colors inline-flex items-center gap-2 shrink-0"
            >
              View trade corridors
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            {tradeCorridors.map((corridor) => (
              <div
                key={corridor}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-argos-gray-lighter"
              >
                <MapPin className="w-3.5 h-3.5 text-argos-accent" strokeWidth={1.5} />
                <span className="text-sm font-medium text-argos-charcoal tracking-[0.02em]">
                  {corridor}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 07 MARKET INTELLIGENCE ── */}
      <section className="section-padding py-24 lg:py-32">
        <div className="container-argos">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="eyebrow mb-4">Intelligence</p>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[2.5rem] tracking-tight leading-[1.1] mb-6">
                MARKET INTELLIGENCE
              </h2>
              <p className="text-argos-gray text-base leading-relaxed mb-8 max-w-[480px]">
                We monitor commodity markets, supply chain disruptions, price movements,
                freight rates, FX shifts, and geopolitical developments — synthesising them
                into a single view for our clients.
              </p>
              <Link to="/markets/intelligence" className="btn-primary">
                View Intelligence
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-px bg-argos-gray-lighter overflow-hidden">
              <div className="relative aspect-[4/3]">
                <img
                  src="/images/home/port.jpg"
                  alt="Container port and cargo infrastructure"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-px bg-argos-gray-lighter">
                {[
                  { icon: BarChart3, label: 'Price Monitoring' },
                  { icon: Globe2, label: 'Supply Chain' },
                  { icon: Zap, label: 'Freight & FX' },
                  { icon: Brain, label: 'Geopolitical Signals' },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="bg-white p-6 lg:p-8 flex flex-col items-center text-center">
                      <Icon className="w-5 h-5 text-argos-accent mb-3" strokeWidth={1.5} />
                      <span className="text-[0.8125rem] font-medium text-argos-charcoal tracking-[0.02em]">
                        {item.label}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 08 ACTIVE DESK ── */}
      <section className="section-padding py-20 lg:py-28 bg-argos-gray-lightest">
        <div className="container-argos">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow mb-4">Live Mandates</p>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[2.5rem] tracking-tight leading-[1.1]">
                ACTIVE DESK
              </h2>
            </div>
            <Link
              to="/active-desk"
              className="text-xs font-medium tracking-[0.1em] uppercase text-argos-gray hover:text-argos-black transition-colors inline-flex items-center gap-2 shrink-0"
            >
              View all mandates
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-white border border-argos-gray-lighter">
            {/* Table header */}
            <div className="hidden md:grid grid-cols-[1fr_1.5fr_1fr_0.75fr] gap-4 px-8 py-4 border-b border-argos-gray-lighter bg-argos-gray-lightest">
              <span className="text-[0.6875rem] font-medium tracking-[0.1em] uppercase text-argos-gray">Commodity</span>
              <span className="text-[0.6875rem] font-medium tracking-[0.1em] uppercase text-argos-gray">Route</span>
              <span className="text-[0.6875rem] font-medium tracking-[0.1em] uppercase text-argos-gray">Volume</span>
              <span className="text-[0.6875rem] font-medium tracking-[0.1em] uppercase text-argos-gray">Status</span>
            </div>

            {/* Table rows */}
            {activeDesks.map((desk, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1fr_0.75fr] gap-2 md:gap-4 px-8 py-5 ${i < activeDesks.length - 1 ? 'border-b border-argos-gray-lighter' : ''}`}
              >
                <div>
                  <span className="md:hidden text-[0.625rem] tracking-[0.1em] uppercase text-argos-gray mr-2">Commodity</span>
                  <span className="text-sm font-medium text-argos-charcoal">{desk.commodity}</span>
                </div>
                <div>
                  <span className="md:hidden text-[0.625rem] tracking-[0.1em] uppercase text-argos-gray mr-2">Route</span>
                  <span className="text-sm text-argos-gray">{desk.route}</span>
                </div>
                <div>
                  <span className="md:hidden text-[0.625rem] tracking-[0.1em] uppercase text-argos-gray mr-2">Volume</span>
                  <span className="text-sm text-argos-gray">{desk.volume}</span>
                </div>
                <div>
                  <span className="md:hidden text-[0.625rem] tracking-[0.1em] uppercase text-argos-gray mr-2">Status</span>
                  <span className="inline-block px-3 py-1 text-[0.6875rem] font-medium tracking-[0.05em] uppercase bg-argos-gray-lightest text-argos-charcoal border border-argos-gray-lighter">
                    {desk.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 09 HOW WE WORK ── */}
      <section className="section-padding py-24 lg:py-32">
        <div className="container-argos">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <p className="eyebrow mb-4">Process</p>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[2.5rem] tracking-tight leading-[1.1]">
                HOW WE WORK
              </h2>
            </div>
            <Link
              to="/how-we-work"
              className="text-xs font-medium tracking-[0.1em] uppercase text-argos-gray hover:text-argos-black transition-colors inline-flex items-center gap-2 shrink-0"
            >
              Full process
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-argos-gray-lighter">
            {processSteps.map((step, i) => (
              <div key={step.step} className="bg-white p-8 lg:p-10 relative">
                <span className="text-[2rem] lg:text-[2.5rem] font-heading font-bold text-argos-gray-lighter leading-none mb-4 block">
                  {step.step}
                </span>
                <h3 className="font-heading font-semibold text-sm tracking-[0.02em]">
                  {step.label}
                </h3>
                {i < processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 w-5 h-5 text-argos-gray-lighter -translate-y-1/2 z-10 bg-white" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10 INSIGHTS ── */}
      <section className="section-padding py-20 lg:py-28 bg-argos-gray-lightest">
        <div className="container-argos">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-center">
            <div>
              <p className="eyebrow mb-4">Analysis</p>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[2.5rem] tracking-tight leading-[1.1] mb-4">
                INSIGHTS
              </h2>
              <p className="text-argos-gray text-base leading-relaxed mb-8 max-w-[480px]">
                Market analysis, commodity commentary, and trade intelligence — prepared by our
                research and brokerage teams.
              </p>
              <Link
                to="/insights"
                className="btn-primary"
              >
                Read Insights
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="hidden lg:block aspect-[4/3] overflow-hidden">
              <img
                src="/images/home/warehouse.jpg"
                alt="Commodity warehouse and storage facility"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 11 PEOPLE ── */}
      <section className="section-padding py-24 lg:py-32">
        <div className="container-argos">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow mb-4">Team</p>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[2.5rem] tracking-tight leading-[1.1]">
                PEOPLE
              </h2>
            </div>
            <Link
              to="/about/people"
              className="text-xs font-medium tracking-[0.1em] uppercase text-argos-gray hover:text-argos-black transition-colors inline-flex items-center gap-2 shrink-0"
            >
              Meet the team
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-argos-gray-lighter max-w-[800px]">
            {people.map((person) => (
              <div key={person.name} className="bg-white p-8 lg:p-10">
                <h3 className="font-heading font-semibold text-base tracking-[0.02em] mb-1">
                  {person.name}
                </h3>
                <p className="text-[0.8125rem] text-argos-gray mb-4">{person.role}</p>
                <a
                  href={`mailto:${person.email}`}
                  className="text-[0.8125rem] text-argos-charcoal hover:text-argos-accent transition-colors"
                >
                  {person.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12 CONFIDENTIAL MANDATE CTA ── */}
      <section className="relative bg-argos-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/commodities/freight.jpg"
            alt="Freight and logistics corridor"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-argos-black/80" />
        </div>
        <div className="section-padding py-24 lg:py-32 relative z-10">
          <div className="container-argos text-center">
            <p className="eyebrow !text-argos-gray-light mb-6">Private Desks</p>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-[2.75rem] tracking-tight leading-[1.1] mb-6 max-w-[600px] mx-auto">
              SUBMIT A CONFIDENTIAL MANDATE
            </h2>
            <p className="text-argos-gray-light text-base leading-relaxed max-w-[480px] mx-auto mb-10">
              Specify your commodity, volume, and requirements. Our team will respond within one business day.
            </p>
            <Link to="/submit-mandate" className="btn-primary !bg-white !text-argos-black hover:!bg-argos-gray-lightest">
              START A MANDATE
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 13 CONTACT PREVIEW ── */}
      <section className="section-padding py-20 lg:py-28">
        <div className="container-argos">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <p className="eyebrow mb-4">Reach Us</p>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl tracking-tight leading-[1.1] mb-6">
                CONTACT
              </h2>
              <p className="text-argos-gray text-base leading-relaxed mb-8 max-w-[400px]">
                For inquiries, mandate submissions, or to speak with a broker,
                please reach out directly.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:info@argosworldwide.com"
                  className="flex items-center gap-3 text-sm text-argos-charcoal hover:text-argos-accent transition-colors"
                >
                  <Send className="w-4 h-4 text-argos-accent" strokeWidth={1.5} />
                  info@argosworldwide.com
                </a>
                <a
                  href="tel:+442012345678"
                  className="flex items-center gap-3 text-sm text-argos-charcoal hover:text-argos-accent transition-colors"
                >
                  <FileCheck className="w-4 h-4 text-argos-accent" strokeWidth={1.5} />
                  +44 (0) 20 1234 5678
                </a>
              </div>
            </div>

            <div className="flex items-end justify-start lg:justify-end">
              <Link
                to="/contact"
                className="btn-primary"
              >
                Full Contact
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
