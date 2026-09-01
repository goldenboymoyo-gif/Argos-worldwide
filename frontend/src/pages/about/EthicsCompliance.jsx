import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Scale, FileCheck, Eye } from 'lucide-react'

const principles = [
  {
    icon: Shield,
    title: 'Integrity',
    body: 'We conduct all business with honesty and transparency. We do not misrepresent our capabilities, our relationships, or the nature of any transaction.',
  },
  {
    icon: Scale,
    title: 'Compliance',
    body: 'We are committed to operating in full compliance with applicable laws and regulations in the jurisdictions where we conduct business.',
  },
  {
    icon: FileCheck,
    title: 'Due Diligence',
    body: 'We apply rigorous verification processes to suppliers, counterparties, and transactions. We do not shortcut the work that trust requires.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    body: 'We are clear about our role, our interests, and our limitations. We disclose conflicts of interest and operate with full visibility to our clients.',
  },
]

export default function EthicsCompliance() {
  return (
    <>
      <Helmet>
        <title>Ethics & Compliance — Argos Worldwide</title>
        <meta name="description" content="Argos Worldwide's commitment to ethical conduct and regulatory compliance in commodity trading." />
      </Helmet>

      {/* Hero */}
      <section className="bg-argos-black text-white">
        <div className="section-padding py-24 lg:py-32">
          <div className="container-argos">
            <p className="eyebrow text-argos-gray-light mb-4">About Argos</p>
            <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl text-balance">
              ETHICS & COMPLIANCE
            </h1>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="section-padding py-20 lg:py-28">
        <div className="container-argos">
          <div className="max-w-3xl">
            <h2 className="heading-section text-2xl sm:text-3xl mb-8">
              Our commitment
            </h2>
            <div className="space-y-6 text-argos-charcoal leading-relaxed text-lg">
              <p>
                Argos Worldwide is committed to operating with integrity in all aspects of our business. Our compliance framework is designed to ensure adherence to applicable laws and regulations in the jurisdictions where we operate.
              </p>
              <p>
                In the commodity trading industry, ethical conduct is not a matter of optics — it is a precondition for sustained business. Trust is the foundation of every transaction we facilitate, and we understand that trust is earned through consistent, verifiable behaviour over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-padding pb-20 lg:pb-28 bg-argos-gray-lightest">
        <div className="container-argos">
          <div className="grid-argos">
            {principles.map((item) => (
              <div key={item.title} className="card-argos">
                <item.icon className="w-5 h-5 text-argos-accent mb-4" />
                <h3 className="heading-section text-base mb-3">{item.title}</h3>
                <p className="text-argos-charcoal leading-relaxed text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework */}
      <section className="section-padding py-20 lg:py-28">
        <div className="container-argos">
          <div className="max-w-3xl">
            <h2 className="heading-section text-2xl sm:text-3xl mb-8">
              Our compliance framework
            </h2>
            <div className="space-y-6 text-argos-charcoal leading-relaxed">
              <p>
                Our compliance framework encompasses the following areas:
              </p>
              <ul className="space-y-4 ml-0">
                {[
                  'Anti-money laundering (AML) procedures for client and counterparty onboarding',
                  'Know Your Customer (KYC) verification processes',
                  'Adherence to applicable trade regulations and export control requirements',
                  'Conflict of interest identification and management',
                  'Record-keeping and audit trail standards',
                  'Data protection and confidentiality obligations',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-argos-accent shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="section-padding pb-20 lg:pb-28">
        <div className="container-argos">
          <div className="max-w-3xl border border-argos-gray-lighter p-8 lg:p-12">
            <p className="eyebrow text-argos-accent mb-3">Note</p>
            <p className="text-argos-charcoal leading-relaxed">
              This page outlines the general principles and framework of Argos Worldwide's approach to ethics and compliance. Specific certifications, licences, or regulatory memberships will be listed here as they are obtained and verified. Argos Worldwide does not claim credentials it cannot substantiate.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-16 lg:py-20 bg-argos-gray-lightest">
        <div className="container-argos">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="eyebrow mb-2">Legal</p>
              <h2 className="heading-section text-xl sm:text-2xl">
                Review our legal documents
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/terms" className="btn-primary">
                Terms of Use
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link to="/privacy" className="btn-secondary">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
