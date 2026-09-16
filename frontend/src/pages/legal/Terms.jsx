import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import BackLink from '../../components/BackLink'

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Use, Argos Worldwide</title>
        <meta name="description" content="Terms of Use for the Argos Worldwide website and services." />
      </Helmet>

      <section className="section-padding py-24 lg:py-32">
        <div className="container-argos">
          <div className="max-w-3xl">
            <BackLink to="/" label="Back to Home" variant="light" className="mb-4" />
            <p className="eyebrow text-argos-gray mb-4">Legal</p>
            <h1 className="heading-display text-3xl sm:text-4xl lg:text-5xl mb-4">
              Terms of Use
            </h1>
            <p className="text-sm text-argos-gray mb-2">Draft, Pending Legal Review</p>
            <p className="text-sm text-argos-gray mb-12">Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

            <div className="space-y-10 text-argos-charcoal leading-relaxed">
              <section>
                <h2 className="heading-section text-xl mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using the Argos Worldwide website and services, you agree to be bound by these Terms of Use. If you do not agree, you must not access or use this website. These Terms constitute a legally binding agreement between you and Argos Worldwide.
                </p>
              </section>

              <section>
                <h2 className="heading-section text-xl mb-4">2. Use of Website</h2>
                <p className="mb-4">
                  This website is provided for informational purposes and to facilitate communication between Argos Worldwide and prospective clients. You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use of the website.
                </p>
                <p>
                  You may not use this website to transmit misleading, fraudulent, or harmful content, or to attempt to gain unauthorised access to any part of the website or its systems.
                </p>
              </section>

              <section>
                <h2 className="heading-section text-xl mb-4">3. Intellectual Property</h2>
                <p>
                  All content on this website, including text, graphics, logos, icons, images, data compilations, and software, is the property of Argos Worldwide or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without prior written consent.
                </p>
              </section>

              <section>
                <h2 className="heading-section text-xl mb-4">4. No Guarantee of Availability</h2>
                <p>
                  We strive to maintain accurate and up-to-date information on this website, but we make no warranties or representations regarding the completeness, accuracy, reliability, or availability of any content. Commodity markets are dynamic, and information may become outdated without notice.
                </p>
              </section>

              <section>
                <h2 className="heading-section text-xl mb-4">5. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, Argos Worldwide shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of this website or reliance on any information contained herein. Our total liability for any claim arising from website use shall not exceed the amount you paid to us, if anything, for the use of this website.
                </p>
              </section>

              <section>
                <h2 className="heading-section text-xl mb-4">6. Confidentiality</h2>
                <p>
                  Information exchanged between Argos Worldwide and clients or prospective clients in the course of business is treated as confidential. Neither party shall disclose the other's confidential information to third parties without prior written consent, except as required by law or regulation.
                </p>
              </section>

              <section>
                <h2 className="heading-section text-xl mb-4">7. No Agency or Partnership</h2>
                <p>
                  Use of this website and engagement with Argos Worldwide does not create any agency, partnership, joint venture, or employment relationship unless expressly agreed in writing.
                </p>
              </section>

              <section>
                <h2 className="heading-section text-xl mb-4">8. Governing Law</h2>
                <p>
                  These Terms of Use are governed by and construed in accordance with applicable law. Any disputes arising from or related to these Terms shall be subject to the exclusive jurisdiction of the relevant courts.
                </p>
              </section>

              <section>
                <h2 className="heading-section text-xl mb-4">9. Changes to These Terms</h2>
                <p>
                  Argos Worldwide reserves the right to amend these Terms of Use at any time. Changes will be posted on this page with an updated revision date. Continued use of the website after changes are posted constitutes acceptance of the revised Terms.
                </p>
              </section>

              <section>
                <h2 className="heading-section text-xl mb-4">10. Contact</h2>
                <p>
                  For questions about these Terms of Use, contact:
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
