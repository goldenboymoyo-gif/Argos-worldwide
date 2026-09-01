import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const categories = [
  'COMMODITIES',
  'MARKETS',
  'FREIGHT',
  'TRADE',
  'GEOPOLITICS',
  'SUPPLY CHAINS',
]

const placeholderArticles = [
  {
    slug: 'market-analysis-coming-soon',
    category: 'MARKETS',
    title: 'Market Analysis Coming Soon',
    excerpt: 'Detailed analysis of current commodity market conditions will be published here.',
    date: 'Publication pending',
  },
  {
    slug: 'freight-rates-outlook',
    category: 'FREIGHT',
    title: 'Freight Rates Outlook',
    excerpt: 'A review of global freight rate trends and their impact on commodity pricing.',
    date: 'Publication pending',
  },
  {
    slug: 'supply-chain-disruptions',
    category: 'SUPPLY CHAINS',
    title: 'Supply Chain Disruptions',
    excerpt: 'Tracking current and emerging supply chain risks across key commodity corridors.',
    date: 'Publication pending',
  },
  {
    slug: 'geopolitical-risk-assessment',
    category: 'GEOPOLITICS',
    title: 'Geopolitical Risk Assessment',
    excerpt: 'How geopolitical developments are influencing commodity markets and trade flows.',
    date: 'Publication pending',
  },
]

export default function Insights() {
  return (
    <>
      <Helmet>
        <title>Insights — Argos Worldwide</title>
        <meta name="description" content="Market analysis, commentary, and insight from the Argos Worldwide desk." />
      </Helmet>

      {/* Hero */}
      <section className="relative bg-argos-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/home/warehouse.jpg"
            alt="Commodity warehousing and storage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-argos-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-argos-black via-argos-black/60 to-transparent" />
        </div>
        <div className="section-padding py-24 lg:py-32 relative z-10">
          <div className="container-argos">
            <p className="eyebrow text-argos-gray-light mb-4">Analysis</p>
            <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl text-balance mb-6">
              INSIGHTS
            </h1>
            <p className="text-lg text-argos-gray-light max-w-2xl">
              Analysis and commentary from the Argos desk. Market intelligence drawn from our daily engagement with commodity markets, freight, and global trade.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="section-padding border-b border-argos-gray-lighter">
        <div className="container-argos">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-4 -mx-1">
            <button className="px-4 py-2 text-xs font-medium tracking-[0.1em] uppercase text-white bg-argos-black shrink-0">
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 text-xs font-medium tracking-[0.1em] uppercase text-argos-gray hover:text-argos-black transition-colors duration-200 shrink-0"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Empty State */}
      <section className="section-padding py-20 lg:py-28">
        <div className="container-argos">
          <div className="max-w-2xl text-center mx-auto mb-16">
            <p className="text-argos-gray leading-relaxed">
              Analysis and commentary from the Argos desk. Articles are reviewed and published by our team. Check back for market analysis, freight commentary, and trade intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Placeholder Cards */}
      <section className="section-padding pb-20 lg:pb-28 -mt-12">
        <div className="container-argos">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-argos-gray-lighter">
            {placeholderArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/insights/${article.slug}`}
                className="group bg-white p-8 lg:p-10 hover:bg-argos-gray-lightest transition-colors duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <p className="eyebrow text-argos-accent">{article.category}</p>
                  <ArrowUpRight className="w-4 h-4 text-argos-gray-lighter group-hover:text-argos-black transition-colors duration-300 shrink-0" />
                </div>
                <h3 className="heading-section text-lg sm:text-xl mb-3 group-hover:text-argos-accent transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-sm text-argos-gray leading-relaxed mb-6">
                  {article.excerpt}
                </p>
                <p className="text-xs text-argos-gray-light">{article.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="section-padding py-16 lg:py-20 bg-argos-gray-lightest">
        <div className="container-argos">
          <div className="max-w-3xl text-center mx-auto">
            <p className="text-sm text-argos-gray">
              Articles published on this page represent the analysis and opinion of Argos Worldwide. They do not constitute investment advice, trading recommendations, or guarantees of accuracy. Commodity markets carry inherent risk. Consult qualified professionals before making trading or investment decisions.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
