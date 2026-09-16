import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const navItems = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'What We Do',
    path: '/what-we-do',
  },
  {
    label: 'Commodities',
    path: '/commodities',
    children: [
      { label: 'Energy', path: '/commodities/energy' },
      { label: 'Metals', path: '/commodities/metals' },
      { label: 'Minerals', path: '/commodities/minerals' },
      { label: 'Agriculture', path: '/commodities/agriculture' },
      { label: 'Construction Materials', path: '/commodities/construction-materials' },
      { label: 'Specialist Sourcing', path: '/commodities/specialist-sourcing' },
    ],
  },
  {
    label: 'Markets',
    path: '/markets',
    children: [
      { label: 'Market Intelligence', path: '/markets/intelligence' },
      { label: 'Commodity Prices', path: '/markets/prices' },
      { label: 'Freight', path: '/markets/freight' },
      { label: 'Market Insights', path: '/markets/insights' },
    ],
  },
  {
    label: 'How We Work',
    path: '/how-we-work',
  },
  {
    label: 'About',
    path: '/about/story',
    children: [
      { label: 'Our Story', path: '/about/story' },
      { label: 'Our Approach', path: '/about/approach' },
      { label: 'Our People', path: '/about/people' },
      { label: 'Ethics & Compliance', path: '/about/ethics' },
    ],
  },
  {
    label: 'Contact',
    path: '/contact',
  },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [location])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/')

  return (
    <>
      {/* Desktop Header */}
      <header className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(0,0,0,0.06)]' : 'bg-white'}`}>
        <div className="max-w-[1440px] mx-auto px-5 xl:px-12">
          <div className="flex items-center justify-between h-16 xl:h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0 py-2">
              <img
                src="/images/logo/argos-logo-dark.png"
                alt="Argos Worldwide"
                className="h-11 xl:h-12 w-auto object-contain"
              />
              <span className="font-heading font-bold text-base xl:text-lg tracking-[0.08em] uppercase">Argos Worldwide</span>
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.children ? item.path : item.path}
                    className={`flex items-center gap-1 px-3 py-2 text-[0.8125rem] font-medium transition-colors duration-200 ${
                      isActive(item.path)
                        ? 'text-argos-black'
                        : 'text-argos-gray hover:text-argos-black'
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.children && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 w-64 bg-white border border-argos-gray-lighter shadow-lg py-2 animate-fade-in">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-5 py-2.5 text-[0.8125rem] transition-colors duration-200 ${
                            location.pathname === child.path
                              ? 'text-argos-black font-medium bg-argos-gray-lightest'
                              : 'text-argos-gray hover:text-argos-black hover:bg-argos-gray-lightest'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA */}
            <Link
              to="/submit-mandate"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-argos-black text-white text-[0.6875rem] font-medium tracking-[0.12em] uppercase hover:bg-argos-charcoal transition-colors duration-300"
            >
              Submit Mandate
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-argos-gray-lighter">
        <div className="flex items-center justify-between h-14 px-5">
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="/images/logo/argos-logo-dark.png"
              alt="Argos Worldwide"
              className="h-9 w-auto object-contain"
            />
            <span className="font-heading font-bold text-sm tracking-[0.08em] uppercase">Argos Worldwide</span>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-14 left-0 right-0 bg-white border-b border-argos-gray-lighter shadow-lg max-h-[calc(100vh-56px)] overflow-y-auto">
            <nav className="py-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.path}
                    className={`block px-5 py-3 text-[0.875rem] font-medium ${
                      isActive(item.path) ? 'text-argos-black' : 'text-argos-gray'
                    }`}
                    onClick={() => !item.children && setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-8">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-5 py-2 text-[0.8125rem] ${
                            location.pathname === child.path
                              ? 'text-argos-black font-medium'
                              : 'text-argos-gray'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-5 pt-4 mt-2 border-t border-argos-gray-lighter">
                <Link
                  to="/submit-mandate"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-argos-black text-white text-[0.75rem] font-medium tracking-[0.1em] uppercase"
                  onClick={() => setIsOpen(false)}
                >
                  Submit Mandate
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Spacer to offset fixed headers */}
      <div className="h-14 lg:h-16 xl:h-[72px]" />
    </>
  )
}
