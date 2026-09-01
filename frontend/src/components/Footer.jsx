import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail } from 'lucide-react'

const footerLinks = {
  Markets: [
    { label: 'Energy', path: '/commodities/energy' },
    { label: 'Metals', path: '/commodities/metals' },
    { label: 'Minerals', path: '/commodities/minerals' },
    { label: 'Agriculture', path: '/commodities/agriculture' },
    { label: 'Construction Materials', path: '/commodities/construction-materials' },
    { label: 'Specialist Sourcing', path: '/commodities/specialist-sourcing' },
  ],
  Intelligence: [
    { label: 'Market Intelligence', path: '/markets/intelligence' },
    { label: 'Commodity Prices', path: '/markets/prices' },
    { label: 'Freight', path: '/markets/freight' },
    { label: 'Market Insights', path: '/markets/insights' },
  ],
  Company: [
    { label: 'Active Desk', path: '/active-desk' },
    { label: 'Global Network', path: '/global-network' },
    { label: 'How We Work', path: '/how-we-work' },
    { label: 'Our Story', path: '/about/story' },
    { label: 'Our People', path: '/about/people' },
    { label: 'Insights', path: '/insights' },
  ],
  Connect: [
    { label: 'Contact', path: '/contact' },
    { label: 'Submit a Mandate', path: '/submit-mandate' },
    { label: 'Ethics & Compliance', path: '/about/ethics' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-argos-black text-white">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 xl:px-24">
        {/* Main Footer */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-4">
              <Link to="/" className="flex items-center gap-3 mb-6">
                <img
                  src="/images/logo/argos-logo.png"
                  alt="Argos Worldwide"
                  className="h-8 w-auto object-contain"
                />
                <span className="font-heading font-bold text-sm tracking-[0.08em] uppercase">Argos Worldwide</span>
              </Link>
              <p className="text-[0.8125rem] leading-relaxed text-argos-gray-light max-w-sm mb-8">
                Connecting commodity buyers with the right suppliers — anywhere in the world. The precision of technology, the trust of a handshake.
              </p>
              <a
                href="mailto:arthur@argosworldwide.com"
                className="inline-flex items-center gap-2 text-[0.8125rem] text-argos-gray-light hover:text-white transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                arthur@argosworldwide.com
              </a>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="lg:col-span-2">
                <h3 className="text-[0.6875rem] font-medium tracking-[0.15em] uppercase text-argos-gray-light mb-5">
                  {title}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-[0.8125rem] text-argos-gray hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[0.75rem] text-argos-gray">
            &copy; {new Date().getFullYear()} Argos Worldwide. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-[0.75rem] text-argos-gray hover:text-white transition-colors duration-200">
              Privacy
            </Link>
            <Link to="/terms" className="text-[0.75rem] text-argos-gray hover:text-white transition-colors duration-200">
              Terms
            </Link>
            <Link to="/disclaimer" className="text-[0.75rem] text-argos-gray hover:text-white transition-colors duration-200">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
