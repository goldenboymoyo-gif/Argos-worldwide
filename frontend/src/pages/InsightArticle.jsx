import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function InsightArticle() {
  const { slug } = useParams()

  return (
    <>
      <Helmet>
        <title>Article — Argos Worldwide</title>
        <meta name="description" content="This article is being prepared for publication by Argos Worldwide." />
      </Helmet>

      <section className="section-padding py-24 lg:py-32">
        <div className="container-argos">
          <div className="max-w-3xl mx-auto text-center">
            <p className="eyebrow text-argos-gray mb-6">Insight</p>
            <h1 className="heading-section text-2xl sm:text-3xl lg:text-4xl mb-8">
              This article is being prepared for publication.
            </h1>
            <p className="text-argos-gray leading-relaxed mb-10 max-w-xl mx-auto">
              The content for this insight is currently under review by our team. New analysis and commentary will be published as it becomes available.
            </p>
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.1em] uppercase text-argos-black hover:text-argos-gray transition-colors duration-200"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Insights
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
