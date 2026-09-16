import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import BackLink from '../../components/BackLink'

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy, Argos Worldwide</title>
        <meta name="description" content="Privacy Policy for Argos Worldwide commodity trading services." />
      </Helmet>

      <section className="section-padding py-24 lg:py-32">
        <div className="container-argos">
          <div className="max-w-3xl">
            <BackLink to="/" label="Back to Home" variant="light" className="mb-4" />
            <p className="eyebrow text-argos-gray mb-4">Legal</p>
            <h1 className="heading-display text-3xl sm:text-4xl lg:text-5xl mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm text-argos-gray mb-2">Draft, Pending Legal Review</p>
            <p className="text-sm text-argos-gray mb-12">Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

            <div className="space-y-10 text-argos-charcoal leading-relaxed">
              <section>
                <h2 className="heading-section text-xl mb-4">1. Introduction</h2>
                <p className="mb-4">
                  Argos Worldwide ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
                <p>
                  By accessing or using our website, you agree to the terms of this Privacy Policy. If you do not agree, please refrain from using our website.
                </p>
              </section>

              <section>
                <h2 className="heading-section text-xl mb-4">2. Information We Collect</h2>
                <p className="mb-4">We may collect the following categories of information:</p>
                <ul className="space-y-2 ml-4 list-disc">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, company name, job title, and any information provided through contact forms, mandate submissions, or direct correspondence.</li>
                  <li><strong>Business Information:</strong> Details about commodity requirements, supply capabilities, transaction preferences, and related commercial information voluntarily provided during the course of business.</li>
                  <li><strong>Technical Information:</strong> IP address, browser type, operating system, referring URLs, pages visited, and access times collected automatically through standard web server logs and analytics tools.</li>
                  <li><strong>Cookies:</strong> Small data files placed on your device to improve site functionality and user experience. See Section 7 for details.</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-section text-xl mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">We use the information collected for the following purposes:</p>
                <ul className="space-y-2 ml-4 list-disc">
                  <li>To respond to inquiries and provide requested services</li>
                  <li>To facilitate commodity transactions and brokerage services</li>
                  <li>To communicate market intelligence, insights, and service updates</li>
                  <li>To verify identities and conduct due diligence as required by applicable regulations</li>
                  <li>To maintain accurate business records</li>
                  <li>To improve our website, services, and user experience</li>
                  <li>To comply with legal obligations and regulatory requirements</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-section text-xl mb-4">4. Data Sharing</h2>
                <p className="mb-4">
                  We do not sell your personal information. We may share your information only in the following circumstances:
                </p>
                <ul className="space-y-2 ml-4 list-disc">
                  <li><strong>With Transaction Counterparties:</strong> Where necessary to facilitate a commodity transaction you have initiated or authorised.</li>
                  <li><strong>With Service Providers:</strong> Third-party providers who assist in our operations (e.g., hosting, analytics, communications), bound by contractual obligations to protect your data.</li>
                  <li><strong>For Legal Compliance:</strong> When required by law, regulation, legal process, or governmental request.</li>
                  <li><strong>With Your Consent:</strong> When you have given explicit permission for sharing.</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-section text-xl mb-4">5. Data Retention</h2>
                <p>
                  We retain personal information only for as long as necessary to fulfil the purposes described in this policy, maintain accurate records as required by applicable regulations, and resolve disputes. Business correspondence and transaction records may be retained for a period consistent with our legal and regulatory obligations.
                </p>
              </section>

              <section>
                <h2 className="heading-section text-xl mb-4">6. Data Security</h2>
                <p>
                  We implement reasonable administrative, technical, and physical safeguards to protect your information from unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="heading-section text-xl mb-4">7. Cookies</h2>
                <p className="mb-4">
                  Our website uses cookies to maintain site functionality, remember preferences, and collect anonymised analytics data. You can control cookie settings through your browser. Disabling cookies may affect certain site features.
                </p>
                <p className="mb-2"><strong>Essential Cookies:</strong> Required for basic site functionality.</p>
                <p><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.</p>
              </section>

              <section>
                <h2 className="heading-section text-xl mb-4">8. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party site you visit.
                </p>
              </section>

              <section>
                <h2 className="heading-section text-xl mb-4">9. Your Rights</h2>
                <p className="mb-4">Depending on your jurisdiction, you may have the right to:</p>
                <ul className="space-y-2 ml-4 list-disc">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to or restrict certain processing of your data</li>
                  <li>Data portability</li>
                  <li>Withdraw consent where processing is based on consent</li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, please contact us using the information provided below.
                </p>
              </section>

              <section>
                <h2 className="heading-section text-xl mb-4">10. Contact</h2>
                <p>
                  For questions about this Privacy Policy or to exercise your data rights, contact:
                </p>
                <p className="mt-2">
                  <strong>Argos Worldwide</strong><br />
                  Email: <a href="mailto:arthur@argosworldwide.com" className="underline hover:text-argos-black">arthur@argosworldwide.com</a>
                </p>
              </section>

              <section>
                <h2 className="heading-section text-xl mb-4">11. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Continued use of our website after changes are posted constitutes acceptance of the revised policy.
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
