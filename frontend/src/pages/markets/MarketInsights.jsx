import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Newspaper, FileText } from 'lucide-react'

const placeholderArticles = [
  { category: 'Energy', date: 'Date 2026' },
  { category: 'Metals', date: 'Date 2026' },
  { category: 'Agriculture', date: 'Date 2026' },
  { category: 'Freight', date: 'Date 2026' },
]

export default function MarketInsights() {
  return (
    <>
      <Helmet>
        <title>Market Insights | Argos Worldwide</title>
        <meta
          name="description"
          content="Market analysis and commentary from the Argos desk — commodity markets, freight and supply chain intelligence."
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-argos-black text-white">
        <div className="container-argos section-padding pt-28 lg:pt-40 pb-16 lg:pb-20">
          <p className="eyebrow text-argos-accent mb-5">Intelligence</p>
          <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl mb-6">
            MARKET INSIGHTS
          </h1>
          <p className="text-argos-gray-light text-base lg:text-lg max-w-2xl leading-relaxed">
            Market analysis and commentary from the Argos desk. Articles are
            reviewed and published by our team.
          </p>
        </div>
      </section>

      {/* Empty state */}
      <section className="section-padding">
        <div className="container-argos py-16 lg:py-20">
          <div className="border border-argos-gray-lighter bg-argos-gray-lightest px-6 sm:px-12 py-16 lg:py-20 text-center">
            <span className="inline-flex items-center justify-center w-12 h-12 mb-6">
              <Newspaper className="w-6 h-6 text-argos-gray" />
            </span>
            <h2 className="heading-section text-xl sm:text-2xl mb-3">
              Articles are on the way
            </h2>
            <p className="text-sm text-argos-gray max-w-xl mx-auto leading-relaxed mb-8">
              Market analysis and commentary from the Argos desk. Articles are
              reviewed and published by our team.
            </p>
            <Link to="/insights" className="btn-primary inline-flex">
              View Articles
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Layout structure preview */}
      <section className="section-padding">
        <div className="container-argos pb-20 lg:pb-28">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="eyebrow mb-4">Upcoming</p>
              <h2 className="heading-section text-2xl sm:text-3xl">
                What the desk will publish
              </h2>
            </div>
            <div className="hidden sm:block h-px bg-argos-gray-lighter flex-1 max-w-xs mb-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-argos-gray-lighter border border-argos-gray-lighter">
            {placeholderArticles.map((article) => (
              <article key={article.category} className="card-argos">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[0.6875rem] font-medium tracking-[0.15em] uppercase text-argos-gray">
                    {article.category}
                  </span>
                  <FileText className="w-4 h-4 text-argos-gray-lighter" />
                </div>
                <h3 className="heading-section text-base mb-2 leading-snug">
                  Analysis coming soon
                </h3>
                <p className="text-xs text-argos-gray mb-8 font-mono uppercase tracking-wide">
                  {article.date}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-[0.1em] uppercase text-argos-gray">
                  Read
                  <ArrowRight className="w-3 h-3" />
                </span>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 border-t border-argos-gray-lighter pt-8">
            <p className="text-sm text-argos-gray max-w-xl leading-relaxed">
              The full article listing — including historical commentary — is
              maintained on the central insights index.
            </p>
            <Link to="/insights" className="btn-secondary justify-center shrink-0">
              All Insights
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
