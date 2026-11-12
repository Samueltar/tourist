import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Heart, Menu, X, Compass, ArrowUpRight, Phone, MessageCircle } from 'lucide-react'
import { useMesob } from './MesobTransition'

export default function Navbar({ savedCount = 0, onOpenWishlist = () => {} }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { navigateWithMesob } = useMesob()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  const navLinks = [
    { label: 'Journeys', href: '/tours' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'The Ethos', href: '/about' },
    { label: 'Stories', href: '/journal' },
    { label: 'Practicalities', href: '/faqs' },
    { label: 'Contact', href: '/contact' },
  ]

  const handleNavClick = (href) => {
    setMobileMenuOpen(false)
    navigateWithMesob(href)
  }

  const isHome = location.pathname === '/'

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#173D32]/95 backdrop-blur-md shadow-lg py-3.5 border-b border-[#C3A16A]/20'
            : isHome
            ? 'bg-gradient-to-b from-[#173D32]/80 via-[#173D32]/40 to-transparent py-5 sm:py-6'
            : 'bg-[#173D32] py-4 border-b border-[#C3A16A]/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Editorial Wordmark */}
          <button
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-3 text-left focus:outline-none group"
            aria-label="Ancient Path Ethiopia Home"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#C3A16A]/60 flex items-center justify-center bg-[#284D3C]/60 group-hover:border-[#C3A16A] transition-colors relative overflow-hidden">
              {/* Subtle Mesob silhouette logo icon */}
              <svg viewBox="0 0 40 40" className="w-6 h-6 text-[#C3A16A]" fill="currentColor">
                <circle cx="20" cy="10" r="2.5" />
                <path d="M 20 14 L 32 25 L 8 25 Z" opacity="0.9" />
                <path d="M 11 26 L 29 26 L 27 34 L 13 34 Z" opacity="0.8" />
              </svg>
            </div>
            <div>
              <span className="block font-serif text-lg sm:text-xl text-[#F5F0E6] tracking-[0.08em] font-medium leading-none group-hover:text-[#C3A16A] transition-colors">
                ANCIENT PATH
              </span>
              <span className="block font-sans text-[9px] uppercase tracking-[0.3em] text-[#C3A16A] font-semibold mt-1">
                Ethiopia • Beyond the Expected
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3.5 py-1.5 rounded-full font-sans text-xs tracking-wider uppercase transition-all duration-300 relative ${
                    isActive
                      ? 'text-[#F5F0E6] font-semibold bg-[#284D3C]/80 shadow-sm'
                      : 'text-[#E9E0D1]/80 hover:text-[#F5F0E6] hover:bg-[#284D3C]/40'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#C3A16A] rounded-full" />
                  )}
                </button>
              )
            })}
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Wishlist Counter Pill */}
            <button
              onClick={onOpenWishlist}
              className="relative p-2 sm:px-3 sm:py-2 rounded-full border border-[#C3A16A]/40 hover:border-[#C3A16A] bg-[#284D3C]/50 hover:bg-[#284D3C] text-[#F5F0E6] transition-all flex items-center gap-2 text-xs"
              title="View Saved Journeys"
              aria-label={`Wishlist with ${savedCount} saved journeys`}
            >
              <Heart
                className={`w-4 h-4 ${
                  savedCount > 0 ? 'text-[#B86B48] fill-[#B86B48]' : 'text-[#C3A16A]'
                }`}
              />
              <span className="hidden sm:inline font-sans text-[11px] uppercase tracking-wider text-[#E9E0D1]">
                Saved
              </span>
              {savedCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#B86B48] text-white text-[10px] font-bold flex items-center justify-center leading-none">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Curate Journey CTA Button */}
            <button
              onClick={() => handleNavClick('/book')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#B86B48] to-[#9E5536] hover:from-[#c2734f] hover:to-[#B86B48] text-white font-sans text-xs uppercase tracking-widest font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Curate Journey</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#F5F0E6] hover:bg-[#284D3C] focus:outline-none transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#C3A16A]" /> : <Menu className="w-6 h-6 text-[#C3A16A]" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#173D32] animate-fade-in text-[#F5F0E6]">
          {/* Top Bar inside Drawer */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#C3A16A]/20">
            <div>
              <span className="block font-serif text-lg text-[#F5F0E6] tracking-wider">
                ANCIENT PATH ETHIOPIA
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#C3A16A]">
                Beyond the Expected
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full border border-[#C3A16A]/30 text-[#C3A16A] hover:bg-[#284D3C]"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links List */}
          <div className="flex-1 overflow-y-auto px-6 py-8 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`w-full text-left py-3 px-4 rounded-xl font-serif text-2xl transition-all flex items-center justify-between ${
                  location.pathname === link.href
                    ? 'text-[#C3A16A] bg-[#284D3C]/60 font-semibold pl-6 border-l-4 border-[#C3A16A]'
                    : 'text-[#E9E0D1] hover:text-[#F5F0E6] hover:bg-[#284D3C]/30'
                }`}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-5 h-5 text-[#C3A16A]/60" />
              </button>
            ))}

            <div className="pt-6 border-t border-[#C3A16A]/20 space-y-3">
              <button
                onClick={() => handleNavClick('/book')}
                className="w-full py-4 rounded-xl bg-[#B86B48] hover:bg-[#c2734f] text-white font-sans text-xs uppercase tracking-widest font-bold shadow-md flex items-center justify-center gap-2"
              >
                <span>Plan Your Bespoke Journey</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenWishlist()
                }}
                className="w-full py-3.5 rounded-xl border border-[#C3A16A]/40 text-[#F5F0E6] font-sans text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 hover:bg-[#284D3C]"
              >
                <Heart className={`w-4 h-4 ${savedCount > 0 ? 'text-[#B86B48] fill-[#B86B48]' : 'text-[#C3A16A]'}`} />
                <span>Saved Journeys ({savedCount})</span>
              </button>
            </div>
          </div>

          {/* Direct Concierge Contact on Mobile */}
          <div className="p-6 bg-[#202622] border-t border-[#C3A16A]/20 flex items-center justify-around text-xs text-[#E9E0D1]">
            <a
              href="https://wa.me/251911234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#C3A16A] hover:text-white"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Concierge</span>
            </a>
            <a href="tel:+251911234567" className="flex items-center gap-2 text-[#C3A16A] hover:text-white">
              <Phone className="w-4 h-4" />
              <span>Direct Call</span>
            </a>
          </div>
        </div>
      )}
    </>
  )
}
