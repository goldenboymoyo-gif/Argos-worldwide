import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import BackLink from '../../components/BackLink'

export default function Disclaimer() {
  return (
    <>
      <Helmet>
        <title>Disclaimer, Argos Worldwide</title>
        <meta name="description" content="Disclaimer for Argos Worldwide commodity trading services and website content." />
      </Helmet>

      <section className="section-padding py-24 lg:py-32">
        <div className="container-argos">
          <div className="max-w-3xl">
            <BackLink to="/" label="Back to Home" variant="light" className="mb-4" />
            <p className="eyebrow text-argos-gray mb-4">Legal</p>
            <h1 className="heading-display text-3xl sm:text-4xl lg:text-5xl mb-4">
              Disclaimer
            </h1>
            <p className="text-sm text-argos-gray mb-2">Draft, Pending Legal Review</p>
            <p className="text-sm text-argos-gray mb-12">Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

            <div className="space-y-10 text-argos-charcoal leading-relaxed">
              <section>
                <h2 className="heading-section text-xl mb-4">No Investment or Trading Advice</h2>
                <p>
                  The information provided on the Argos Worldwide website, including market analysis, commentary, commodity data, freight information, and insights, is provided for general informational purposes only. It does not constitute investment advice, trading advice, financial advice, or any other form of professional advice. You should not rely on any information from this website as the basis for making any trading, investment, or commercial decision.
                </p>
              </section>

              <section>
                <h2 className="heading-section text-xl mb-4">No Guarantee of Accuracy</h2>
                <p>
                  While Argos Worldwide makes reasonable efforts to ensure that information on this website is accurate and current, we make no representations or warranties of any kind, express or implied, regarding the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website. Commodity markets are inherently volatile, and conditions may change without notice.
                </p>
              </section>

              <section>
                <h2 className="heading-section text-xl mb-4">Risk Disclosure</h2>
                <p>
                  Commodity trading involves significant risk. Prices can fluctuate substantially due to factors including but not limited to supply and demand changes, geopolitical events, weather conditions, regulatory changes, currency movements, and market sentiment. Past performance is not indicative of future results. You should carefully consider your risk tolerance and seek independent professional advice before engaging in any commodity transaction.
                </p>
              </section>

              <section>
                <h2 className="heading-section text-xl mb-4">Third-Party Content</h2>
                <p>
                  This website may contain or reference data, analysis, or commentary from third-party sources. Argos Worldwide does not endorse, verify, or assume responsibility for the accuracy or completeness of any third-party content. Inclusion of third-party information does not imply endorsement by Argos Worldwide.
                </p>
              </section>

              <section>
                <h2 className="heading-section text-xl mb-4">No Endorsement of Transactions</h2>
                <p>
                  The presence of any commodity, supplier, buyer, or market information on this website does not constitute an endorsement, recommendation, or guarantee of any particular transaction, counterparty, or outcome. All transactions facilitated through Argos Worldwide are subject to independent due diligence, negotiation, and agreement between the parties involved.
                </p>
              </section>

              <section>
                <h2 className="heading-section text-xl mb-4">Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by applicable law, Argos Worldwide shall not be liable for any loss or damage, including without limitation indirect or consequential loss or damage, arising from or in connection with the use of this website or reliance on any information provided herein. This includes, but is not limited to, loss of profits, data, business opportunities, or goodwill.
                </p>
              </section>

              <section>
                <h2 className="heading-section text-xl mb-4">Professional Consultation</h2>
                <p>
                  Users of this website are strongly encouraged to seek independent legal, financial, and professional advice before entering into any commodity transaction. Argos Worldwide is not a law firm, financial advisor, or licensed investment firm, and nothing on this website should be construed as legal, financial, or investment advice.
                </p>
              </section>

              <section>
                <h2 className="heading-section text-xl mb-4">Changes to This Disclaimer</h2>
                <p>
                  Argos Worldwide reserves the right to amend this Disclaimer at any time. Changes will be posted on this page with an updated revision date. Continued use of the website after changes are posted constitutes acceptance of the revised Disclaimer.
                </p>
              </section>

              <section>
                <h2 className="heading-section text-xl mb-4">Contact</h2>
                <p>
                  For questions about this Disclaimer, contact:
                </p>
                <p className="mt-2">
                  <strong>Argos Worldwide</strong><br />
                  Email: <a href="mailto:arthur@argosworldwide.com" className="underline hover:text-argos-black">arthur@argosworldwide.com</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Back */}
      <section className="section-padding pb-16 lg:pb-20">
        <div className="container-argos">
          <Link
            to="/"
            className="text-xs font-medium tracking-[0.1em] uppercase text-argos-gray hover:text-argos-black transition-colors duration-200"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </>
  )
}
