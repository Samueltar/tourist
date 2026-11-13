import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Heart, Menu, X, ArrowUpRight, Phone, MessageCircle, Globe, Sun, Moon } from 'lucide-react'
import { useMesob } from './MesobTransition'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { TiletBorderPrimary } from './TiletPatterns'

export default function Navbar({ savedCount = 0, onOpenWishlist = () => {} }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { navigateWithMesob } = useMesob()
  const { language, setLanguage, toggleLanguage, t } = useLanguage()
  const { theme, toggleTheme, isDark } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  // Streamlined, design-led primary navigation
  const navLinks = [
    { label: t('navTours'), href: '/tours' },
    { label: t('navDestinations'), href: '/destinations' },
    { label: t('navAbout'), href: '/about' },
    { label: t('navJournal'), href: '/journal' },
    { label: t('navContact'), href: '/contact' },
  ]

  const handleNavClick = (href) => {
    setMobileMenuOpen(false)
    navigateWithMesob(href)
  }

  const isHome = location.pathname === '/'

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 flex flex-col ${
          isScrolled
            ? 'bg-white/95 dark:bg-[#0E0D0B]/95 backdrop-blur-md shadow-md border-b border-[#B58A43]/20 dark:border-[#B58A43]/30'
            : isHome
            ? 'bg-gradient-to-b from-white/90 via-white/70 to-transparent dark:from-[#0E0D0B]/90 dark:via-[#0E0D0B]/70 dark:to-transparent backdrop-blur-sm'
            : 'bg-white dark:bg-[#0E0D0B] border-b border-[#B58A43]/20 dark:border-[#B58A43]/30 shadow-sm'
        }`}
      >
        {/* Prominent Repeating Gold Ethiopian Tilet Ornamental Band along Upper Edge */}
        <TiletBorderPrimary height={16} className="bg-[#FAF8F5] dark:bg-[#161411] border-b border-[#B58A43]/30" />

        {/* Main Navbar Bar */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex items-center justify-between">
          {/* Brand Logo & Wordmark — ጎብኚው (The Tourist in English) */}
          <button
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-3 text-left focus:outline-none group select-none"
            aria-label="The Tourist — ጎብኚው"
          >
            {/* Elegant Gold Emblem */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#B58A43] flex items-center justify-center bg-[#FAF8F5] dark:bg-[#1E1B16] group-hover:bg-[#B58A43]/15 transition-colors relative shadow-sm">
              <svg viewBox="0 0 40 40" className="w-6 h-6 text-[#B58A43]" fill="currentColor">
                <circle cx="20" cy="8" r="2.5" />
                <path d="M 20 12 L 32 24 L 8 24 Z" opacity="0.9" />
                <path d="M 11 25 L 29 25 L 27 34 L 13 34 Z" opacity="0.8" />
                <polygon points="20,16 23,20 20,24 17,20" fill={isDark ? '#1E1B16' : '#FFFFFF'} />
              </svg>
            </div>

            <div>
              <span className="block font-serif text-lg sm:text-xl text-[#302B24] dark:text-[#F5F2EB] tracking-[0.08em] font-semibold leading-none group-hover:text-[#B58A43] transition-colors">
                {t('brandName')}
              </span>
              <span className="block font-sans text-[9px] uppercase tracking-[0.25em] text-[#B58A43] font-bold mt-1">
                {t('brandTagline')}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links with Clear, Real Related Names */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3.5 py-1.5 rounded-full font-sans text-xs tracking-wider uppercase transition-all duration-300 relative ${
                    isActive
                      ? 'text-[#B58A43] font-bold bg-[#FAF8F5] dark:bg-[#1A1815] shadow-xs'
                      : 'text-[#302B24]/85 dark:text-[#E8E2D5]/85 hover:text-[#B58A43] hover:bg-[#FAF8F5] dark:hover:bg-[#1A1815]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#B58A43] rounded-full" />
                  )}
                </button>
              )
            })}
          </nav>

          {/* Right Action Icons: Language Toggle + Theme Toggle + Wishlist + CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Segmented Language Selector (EN | አማ) — Explicit, Foolproof */}
            <div className="flex items-center rounded-full border border-[#B58A43]/40 bg-[#FAF8F5] dark:bg-[#1E1B16] p-0.5 shadow-xs">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all ${
                  language === 'en'
                    ? 'bg-[#B58A43] text-white shadow-xs'
                    : 'text-[#302B24]/70 dark:text-[#E8E2D5]/70 hover:text-[#B58A43]'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('am')}
                className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all ${
                  language === 'am'
                    ? 'bg-[#B58A43] text-white shadow-xs'
                    : 'text-[#302B24]/70 dark:text-[#E8E2D5]/70 hover:text-[#B58A43]'
                }`}
                aria-label="Switch to Amharic (አማርኛ)"
              >
                አማ
              </button>
            </div>

            {/* Dark / Light Mode Switcher Pill */}
            <button
              onClick={toggleTheme}
              className="p-2 sm:px-2.5 sm:py-1.5 rounded-full border border-[#B58A43]/40 hover:border-[#B58A43] bg-[#FAF8F5] dark:bg-[#1E1B16] text-xs font-semibold flex items-center gap-1.5 transition-all text-[#302B24] dark:text-[#F5F2EB] shadow-xs hover:shadow-sm"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme mode"
            >
              {isDark ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-[#E5C378]" />
                  <span className="hidden xl:inline text-[10px] uppercase font-bold text-[#E5C378]">Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-[#B58A43]" />
                  <span className="hidden xl:inline text-[10px] uppercase font-bold text-[#B58A43]">Dark</span>
                </>
              )}
            </button>

            {/* Wishlist Counter Pill */}
            <button
              onClick={onOpenWishlist}
              className="relative p-2 sm:px-3 sm:py-1.5 rounded-full border border-[#B58A43]/30 hover:border-[#B58A43] bg-[#FAF8F5] dark:bg-[#1E1B16] hover:bg-white dark:hover:bg-[#25221C] text-[#302B24] dark:text-[#F5F2EB] transition-all flex items-center gap-2 text-xs shadow-xs"
              title="View Saved Tours"
              aria-label={`Wishlist with ${savedCount} saved tours`}
            >
              <Heart
                className={`w-3.5 h-3.5 ${
                  savedCount > 0 ? 'text-[#C49A50] fill-[#C49A50]' : 'text-[#B58A43]'
                }`}
              />
              <span className="hidden sm:inline font-sans text-[11px] uppercase tracking-wider text-[#302B24]/80 dark:text-[#E8E2D5]/80">
                {t('saved')}
              </span>
              {savedCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#B58A43] text-white text-[10px] font-bold flex items-center justify-center leading-none">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Book a Tour CTA Button */}
            <button
              onClick={() => handleNavClick('/book')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#B58A43] to-[#9E7432] hover:from-[#c49a50] hover:to-[#B58A43] text-white font-sans text-xs uppercase tracking-widest font-bold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>{t('curateJourney')}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#302B24] dark:text-[#F5F2EB] hover:bg-[#FAF8F5] dark:hover:bg-[#1E1B16] focus:outline-none transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#B58A43]" /> : <Menu className="w-6 h-6 text-[#B58A43]" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-white dark:bg-[#0E0D0B] animate-fade-in text-[#302B24] dark:text-[#F5F2EB]">
          {/* Top Tilet Band inside Drawer */}
          <TiletBorderPrimary height={16} className="bg-[#FAF8F5] dark:bg-[#161411]" />

          {/* Drawer Top Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#B58A43]/20 dark:border-[#B58A43]/30 bg-[#FAF8F5] dark:bg-[#161411]">
            <div>
              <span className="block font-serif text-lg font-bold text-[#302B24] dark:text-[#F5F2EB] tracking-wider">
                {t('brandName')}
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#B58A43] font-semibold">
                {t('brandTagline')}
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full border border-[#B58A43]/30 text-[#B58A43] hover:bg-white dark:hover:bg-[#1E1B16]"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links List */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-3">
            {/* Controls Row: Theme + Language in Mobile Drawer */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-3 bg-[#FAF8F5] dark:bg-[#161411] rounded-xl border border-[#B58A43]/25 flex items-center justify-between"
              >
                <span className="text-xs font-semibold text-[#302B24]/80 dark:text-[#F5F2EB]/80 flex items-center gap-1.5">
                  {isDark ? <Sun className="w-4 h-4 text-[#E5C378]" /> : <Moon className="w-4 h-4 text-[#B58A43]" />}
                  <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                </span>
                <span className="w-2 h-2 rounded-full bg-[#B58A43]" />
              </button>

              {/* Segmented Language Selector in Mobile Drawer */}
              <div className="p-2 bg-[#FAF8F5] dark:bg-[#161411] rounded-xl border border-[#B58A43]/25 flex items-center justify-between">
                <span className="text-xs font-semibold text-[#302B24]/80 dark:text-[#F5F2EB]/80 flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-[#B58A43]" />
                  <span>Lang</span>
                </span>
                <div className="flex items-center rounded-lg border border-[#B58A43]/30 p-0.5 bg-white dark:bg-[#1E1B16]">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                      language === 'en'
                        ? 'bg-[#B58A43] text-white'
                        : 'text-[#302B24]/70 dark:text-[#E8E2D5]/70'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLanguage('am')}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                      language === 'am'
                        ? 'bg-[#B58A43] text-white'
                        : 'text-[#302B24]/70 dark:text-[#E8E2D5]/70'
                    }`}
                  >
                    አማ
                  </button>
                </div>
              </div>
            </div>

            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`w-full text-left py-3 px-4 rounded-xl font-serif text-2xl transition-all flex items-center justify-between ${
                  location.pathname === link.href
                    ? 'text-[#B58A43] bg-[#FAF8F5] dark:bg-[#161411] font-bold pl-5 border-l-4 border-[#B58A43]'
                    : 'text-[#302B24] dark:text-[#F5F2EB] hover:text-[#B58A43] hover:bg-[#FAF8F5] dark:hover:bg-[#161411]'
                }`}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-5 h-5 text-[#B58A43]/60" />
              </button>
            ))}

            <div className="pt-4 border-t border-[#B58A43]/20 space-y-2.5">
              <button
                onClick={() => handleNavClick('/book')}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#B58A43] to-[#9E7432] text-white font-sans text-xs uppercase tracking-widest font-bold shadow-md flex items-center justify-center gap-2"
              >
                <span>{t('curateJourney')}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenWishlist()
                }}
                className="w-full py-3 rounded-xl border border-[#B58A43]/40 text-[#302B24] dark:text-[#F5F2EB] font-sans text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 hover:bg-[#FAF8F5] dark:hover:bg-[#161411]"
              >
                <Heart className={`w-4 h-4 ${savedCount > 0 ? 'text-[#C49A50] fill-[#C49A50]' : 'text-[#B58A43]'}`} />
                <span>{t('saved')} ({savedCount})</span>
              </button>
            </div>
          </div>

          {/* Direct Concierge Contact in Mobile Drawer */}
          <div className="p-4 bg-[#FAF8F5] dark:bg-[#161411] border-t border-[#B58A43]/20 flex items-center justify-around text-xs text-[#302B24] dark:text-[#F5F2EB]">
            <a
              href="https://wa.me/251911234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#B58A43] font-semibold hover:text-[#9E7432]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <span className="text-[#B58A43]/40">•</span>
            <a href="tel:+251911234567" className="flex items-center gap-1.5 text-[#302B24] dark:text-[#F5F2EB] hover:text-[#B58A43]">
              <Phone className="w-4 h-4 text-[#B58A43]" />
              <span>+251 91 123 4567</span>
            </a>
          </div>
        </div>
      )}
    </>
  )
}