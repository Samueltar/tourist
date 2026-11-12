import React, { useState } from 'react'
import { ArrowRight, Compass, ShieldCheck, Heart, Sparkles, MapPin, Calendar, Clock, ChevronDown, CheckCircle2 } from 'lucide-react'
import { tours, destinations, journalPosts } from '../data/tours'
import TourCard from '../components/TourCard'
import { useMesob } from '../components/MesobTransition'
import { useLanguage } from '../context/LanguageContext'
import {
  TiletBorderPrimary,
  TiletDivider,
  TiletMotif,
  TiletCorner,
  TiletBackgroundPattern,
} from '../components/TiletPatterns'
import EthiopiaMap from '../components/EthiopiaMap'

export default function Home({
  savedTourIds = [],
  onToggleSaveTour = () => {},
  onSelectTourModal = () => {},
}) {
  const { navigateWithMesob } = useMesob()
  const { t, language } = useLanguage()
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeRegionTab, setActiveRegionTab] = useState('all')

  const filteredTours = activeCategory === 'all'
    ? tours.slice(0, 4)
    : tours.filter((t) => t.category === activeCategory).slice(0, 4)

  const regionDestinations = activeRegionTab === 'all'
    ? destinations.slice(0, 6)
    : destinations.filter((d) => d.region.toLowerCase() === activeRegionTab.toLowerCase())

  return (
    <div className="min-h-screen bg-white text-[#302B24] overflow-x-hidden selection:bg-[#B58A43] selection:text-white">
      {/* ── 1. HERO SECTION (EDITORIAL WHITE, GOLD & DESTINATION BACKDROP) ─── */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#F8F5EE]">
        {/* Destination Photography with Radiant Editorial Lighting */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/dw1ohipim/image/upload/v1784044758/ohuohsbdy66wnnbgc6zw.jpg"
            alt="Lalibela Rock Church in Ethiopia"
            className="w-full h-full object-cover ken-burns brightness-[0.82] contrast-[1.02]"
          />
          {/* Radiant white, ivory & gold gradient scrim for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/45 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-white/70" />
        </div>

        {/* Hero Corner Tilet Ornaments */}
        <div className="absolute top-20 left-6 sm:left-12 z-10 pointer-events-none opacity-60">
          <TiletCorner position="top-left" className="w-12 h-12 text-[#B58A43]" />
        </div>
        <div className="absolute top-20 right-6 sm:right-12 z-10 pointer-events-none opacity-60">
          <TiletCorner position="top-right" className="w-12 h-12 text-[#B58A43]" />
        </div>
        <div className="absolute bottom-12 left-6 sm:left-12 z-10 pointer-events-none opacity-60">
          <TiletCorner position="bottom-left" className="w-12 h-12 text-[#B58A43]" />
        </div>
        <div className="absolute bottom-12 right-6 sm:right-12 z-10 pointer-events-none opacity-60">
          <TiletCorner position="bottom-right" className="w-12 h-12 text-[#B58A43]" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 text-center flex flex-col items-center">
          {/* Live Indicator Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#B58A43]/40 text-[#302B24] text-[11px] font-sans uppercase tracking-[0.2em] mb-6 shadow-sm animate-fade-in font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#B58A43] animate-ping" />
            <span>{t('liveIndicator')}</span>
          </div>

          {/* Main Editorial Headline with Ethiopian Tilet Accent */}
          <div className="space-y-2 max-w-5xl">
            <span className="block font-sans text-xs sm:text-sm uppercase tracking-[0.4em] text-[#B58A43] font-bold">
              {t('heroEyebrow')}
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#302B24] tracking-tight leading-[1.05]">
              {t('heroTitle1')} <span className="italic font-normal text-[#B58A43]">{t('heroTitle2')}</span>
            </h1>
          </div>

          {/* Delicate Horizontal Tilet Separator */}
          <TiletDivider className="py-4 max-w-md w-full" />

          {/* Editorial Subtitle */}
          <p className="max-w-2xl font-sans text-sm sm:text-base md:text-lg text-[#302B24]/85 font-normal leading-relaxed">
            {t('heroSubtitle')}
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => navigateWithMesob('/tours')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#B58A43] to-[#9E7432] hover:from-[#c49a50] hover:to-[#B58A43] text-white font-sans text-xs uppercase tracking-widest font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <span>{t('exploreJourneysBtn')}</span>
              <ArrowRight className="w-4 h-4 text-[#DDC28D]" />
            </button>

            <button
              onClick={() => navigateWithMesob('/destinations')}
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/90 hover:bg-white backdrop-blur-md border border-[#B58A43]/40 text-[#302B24] font-sans text-xs uppercase tracking-widest font-bold shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4 text-[#B58A43]" />
              <span>{t('discoverRegionsBtn')}</span>
            </button>
          </div>

          {/* Quick Route Highlights Pill Row */}
          <div className="mt-14 hidden md:flex items-center gap-6 text-xs text-[#302B24]/80 border-t border-[#B58A43]/20 pt-6">
            <span className="text-[#B58A43] uppercase font-bold tracking-wider">{t('signatureRoutes')}</span>
            <button onClick={() => navigateWithMesob('/destinations/lalibela')} className="hover:text-[#B58A43] transition-colors font-medium">
              {language === 'am' ? 'ላሊበላ' : 'Lalibela Rock Sanctuaries'}
            </button>
            <span>•</span>
            <button onClick={() => navigateWithMesob('/destinations/simien-mountains')} className="hover:text-[#B58A43] transition-colors font-medium">
              {language === 'am' ? 'የስሜን ተራሮች' : 'Simien Roof of Africa'}
            </button>
            <span>•</span>
            <button onClick={() => navigateWithMesob('/destinations/bale-mountains')} className="hover:text-[#B58A43] transition-colors font-medium">
              {language === 'am' ? 'የባሌ ተራሮች' : 'Bale Cloud Forests'}
            </button>
            <span>•</span>
            <button onClick={() => navigateWithMesob('/destinations/omo-valley')} className="hover:text-[#B58A43] transition-colors font-medium">
              {language === 'am' ? 'የኦሞ ሸለቆ' : 'Omo Valley Cultures'}
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-[#302B24]/60">
          <span className="text-[9px] uppercase tracking-widest mb-1 font-semibold">
            {language === 'am' ? 'ለመመልከት ይሸብልሉ' : 'Scroll to discover'}
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#B58A43]" />
        </div>
      </section>

      {/* Prominent Horizontal Tilet Border below Hero */}
      <TiletBorderPrimary height={20} className="border-y border-[#B58A43]/30 bg-[#FAF8F5]" />

      {/* ── 2. EDITORIAL STATEMENT / MANIFESTO (PURE WHITE & GOLD) ───── */}
      <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[#B58A43]">
                <Sparkles className="w-3.5 h-3.5 text-[#B58A43]" />
                <span>{t('ethosEyebrow')}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#302B24] leading-tight">
                {t('ethosTitle1')}<br />
                <span className="italic font-normal text-[#B58A43]">{t('ethosTitle2')}</span>
              </h2>

              <p className="font-sans text-sm sm:text-base text-[#302B24]/85 leading-relaxed">
                {t('ethosBody')}
              </p>

              <blockquote className="border-l-3 border-[#B58A43] pl-5 italic font-serif text-lg sm:text-xl text-[#302B24] py-1 bg-[#FAF8F5]/50 rounded-r-xl">
                {t('ethosQuote')}
              </blockquote>

              <div className="pt-2 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#B58A43] shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=200&q=80"
                    alt="Abenezer Sisay"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="block font-serif text-base font-bold text-[#302B24]">
                    {t('ethosAuthor')}
                  </span>
                  <span className="block font-sans text-xs text-[#B58A43] uppercase tracking-wider font-semibold">
                    {t('ethosRole')}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Asymmetric Image Composition with Tilet Framing */}
            <div className="lg:col-span-5 relative">
              {/* Tilet Corner Ornaments around Image Frame */}
              <div className="absolute -top-3 -left-3 z-20 pointer-events-none">
                <TiletCorner position="top-left" className="w-8 h-8 text-[#B58A43]" />
              </div>
              <div className="absolute -top-3 -right-3 z-20 pointer-events-none">
                <TiletCorner position="top-right" className="w-8 h-8 text-[#B58A43]" />
              </div>

              <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl border-2 border-[#B58A43]/40 p-1.5 bg-white">
                <div className="rounded-2xl overflow-hidden relative">
                  <img
                    src="https://res.cloudinary.com/dw1ohipim/image/upload/v1784044760/uaxjuqytkud5kywfxamz.jpg"
                    alt="Lalibela Ethiopian Priest holding ancient brass cross"
                    className="w-full h-[450px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-[10px] uppercase tracking-widest text-[#DDC28D] font-bold">
                      {language === 'am' ? 'ሕያው ቅርስ' : 'Living Heritage'}
                    </span>
                    <p className="font-serif text-lg text-white font-medium mt-1">
                      {language === 'am'
                        ? 'የቤተ ማርያም ካህን የ12ኛውን ክፍለ ዘመን የላሊበላ መስቀል ይዘው።'
                        : 'Priest of Bete Maryam holding the 12th-century Lalibela processional cross.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative accent card floating in background */}
              <div className="absolute -bottom-6 -left-6 z-20 bg-white text-[#302B24] p-5 rounded-2xl shadow-xl max-w-xs border border-[#B58A43]/40 hidden sm:block">
                <div className="flex items-center gap-2 text-[#B58A43] mb-1.5 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-[#B58A43]" />
                  <span>{t('thoughtfulBadge')}</span>
                </div>
                <p className="text-xs text-[#302B24]/80 leading-relaxed">
                  {t('thoughtfulBadgeDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. FEATURED CURATED JOURNEYS (WARM IVORY & GOLD TILET ACCENTS) ─ */}
      <section className="py-20 sm:py-28 bg-[#F8F5EE] border-y border-[#B58A43]/20 relative">
        <TiletBackgroundPattern className="opacity-[0.03]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header with Category Filter Buttons */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B58A43] font-bold">
                {t('curatedEyebrow')}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#302B24] mt-1">
                {t('curatedTitle')} <span className="italic font-normal text-[#B58A43]">{t('curatedTitleHighlight')}</span>
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: t('allJourneys') },
                { id: 'historical', label: t('historical') },
                { id: 'wildlife', label: t('wildlife') },
                { id: 'cultural', label: t('cultural') },
                { id: 'spiritual', label: t('spiritual') },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-sans uppercase tracking-wider font-semibold transition-all border ${
                    activeCategory === cat.id
                      ? 'bg-[#B58A43] text-white border-[#B58A43] shadow-xs'
                      : 'bg-white text-[#302B24]/75 border-[#B58A43]/30 hover:border-[#B58A43] hover:text-[#B58A43]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Tour Cards with Featured Tilet Accents */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredTours.map((tour, idx) => (
              <TourCard
                key={tour.id}
                tour={tour}
                isSaved={savedTourIds.includes(tour.id)}
                onToggleSave={onToggleSaveTour}
                onQuickView={onSelectTourModal}
                featured={idx === 0}
              />
            ))}
          </div>

          {/* Bottom Explore All CTA */}
          <div className="mt-14 text-center">
            <button
              onClick={() => navigateWithMesob('/tours')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#302B24] hover:bg-[#B58A43] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-md hover:shadow-lg"
            >
              <span>{t('viewAllJourneys')}</span>
              <ArrowRight className="w-4 h-4 text-[#DDC28D]" />
            </button>
          </div>
        </div>
      </section>

      {/* Fine Ornamental Tilet Divider */}
      <TiletDivider className="py-2" />

      {/* ── 4. DESTINATION DISCOVERY MATRIX (PURE WHITE & INTERACTIVE MAP) ─ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B58A43] font-bold">
              {t('destEyebrow')}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#302B24] mt-1">
              {t('destTitle')} <span className="italic font-normal text-[#B58A43]">{t('destTitleHighlight')}</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#302B24]/75 mt-3 leading-relaxed">
              {t('destSubtitle')}
            </p>

            {/* Region Tabs */}
            <div className="mt-8 inline-flex p-1.5 rounded-full bg-[#FAF8F5] border border-[#B58A43]/30 shadow-xs">
              {[
                { id: 'all', label: t('allRegions') },
                { id: 'north', label: t('theNorth') },
                { id: 'south', label: t('theSouth') },
                { id: 'east', label: t('theEast') },
                { id: 'central', label: t('central') },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveRegionTab(tab.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-sans uppercase tracking-wider font-bold transition-all ${
                    activeRegionTab === tab.id
                      ? 'bg-[#B58A43] text-white shadow-xs'
                      : 'text-[#302B24]/70 hover:text-[#B58A43]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Destinations Grid with Gold Tilet Frames */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {regionDestinations.map((dest, idx) => (
              <div
                key={dest.id}
                onClick={() => navigateWithMesob(`/destinations/${dest.id}`)}
                className="group relative rounded-3xl overflow-hidden cursor-pointer h-96 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-[#B58A43]/30 p-1.5 bg-white"
              >
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 group-hover:from-black/90 transition-colors" />

                  {/* Corner Accent on First Card */}
                  {idx === 0 && (
                    <div className="absolute top-2 right-2 pointer-events-none">
                      <TiletCorner position="top-right" className="w-6 h-6 text-[#DDC28D]" />
                    </div>
                  )}

                  {/* Region Tag at Top */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[#B58A43] text-[10px] font-bold uppercase tracking-wider border border-[#B58A43]/40 shadow-xs">
                      {dest.region} Ethiopia
                    </span>
                  </div>

                  {/* Bottom Details */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-[11px] uppercase tracking-widest text-[#DDC28D] font-semibold">
                      {dest.tagline}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white group-hover:text-[#DDC28D] transition-colors mt-0.5">
                      {dest.name}
                    </h3>
                    <p className="font-sans text-xs text-white/80 line-clamp-2 mt-2 leading-relaxed">
                      {dest.summary}
                    </p>

                    <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs text-[#DDC28D]">
                      <span className="font-sans font-medium">{t('altitude')}: {dest.altitude}</span>
                      <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform font-bold">
                        <span>{t('explore')}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Expedition Map */}
          <div className="mt-16">
            <EthiopiaMap />
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => navigateWithMesob('/destinations')}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-[#B58A43] hover:bg-[#B58A43] hover:text-white text-[#B58A43] text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
            >
              <span>{t('exploreAllDestinations')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Prominent Horizontal Tilet Border */}
      <TiletBorderPrimary height={20} className="border-y border-[#B58A43]/30 bg-[#FAF8F5]" />

      {/* ── 5. THE LIVING RITUAL SPOTLIGHT: THE BUNA CEREMONY & MESOB ── */}
      <section className="py-20 sm:py-28 bg-[#F8F5EE] relative overflow-hidden">
        <TiletBackgroundPattern className="opacity-[0.035]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Left: Mesob & Coffee Ceremony Photography with Gold Tilet Frame */}
            <div className="lg:col-span-6 relative">
              {/* Tilet Corner Ornaments */}
              <div className="absolute -top-3 -left-3 z-20 pointer-events-none">
                <TiletCorner position="top-left" className="w-8 h-8 text-[#B58A43]" />
              </div>
              <div className="absolute -top-3 -right-3 z-20 pointer-events-none">
                <TiletCorner position="top-right" className="w-8 h-8 text-[#B58A43]" />
              </div>

              <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-[#B58A43]/40 p-1.5 bg-white">
                <div className="rounded-2xl overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
                    alt="Traditional Ethiopian Coffee Ceremony with Frankincense"
                    className="w-full h-[480px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-[10px] uppercase tracking-widest text-[#DDC28D] font-bold">
                      {language === 'am' ? 'የክብር አቀባበል' : 'The Sacred Welcome'}
                    </span>
                    <p className="font-serif text-xl text-white font-medium mt-1">
                      {language === 'am'
                        ? 'ቡና እና ዕጣን፡ የኢትዮጵያ የልብ እንግዳ ተቀባይነት ጥንታዊ ጥበብ።'
                        : 'Buna & Frankincense: The Ancient Art and Soul of Ethiopian Hospitality.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white text-[#302B24] p-4 rounded-2xl shadow-xl border border-[#B58A43]/40 text-center hidden sm:block">
                <span className="block font-serif text-2xl font-bold text-[#B58A43]">1,000+</span>
                <span className="block text-[9px] uppercase tracking-wider font-sans font-semibold text-[#302B24]/70">
                  {language === 'am' ? 'የቡና ሥነ-ሥርዓት ታሪክ' : 'Years of Buna Ritual'}
                </span>
              </div>
            </div>

            {/* Narrative Right: The Mesob & Dining Heritage */}
            <div className="lg:col-span-6 space-y-6">
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B58A43] font-bold">
                {t('bunaEyebrow')}
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#302B24] leading-tight">
                {t('bunaTitle')} <span className="italic font-normal text-[#B58A43]">{t('bunaTitleHighlight')}</span>
              </h2>

              <p className="font-sans text-sm sm:text-base text-[#302B24]/85 leading-relaxed">
                {t('bunaBody')}
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-[#B58A43]/25 shadow-xs">
                  <span className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#B58A43] text-[#B58A43] flex items-center justify-center font-serif font-bold shrink-0">
                    1
                  </span>
                  <div>
                    <h4 className="font-serif text-base text-[#302B24] font-bold">{t('gurshaTitle')}</h4>
                    <p className="text-xs text-[#302B24]/75 mt-0.5 leading-relaxed">
                      {t('gurshaDesc')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-[#B58A43]/25 shadow-xs">
                  <span className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#B58A43] text-[#B58A43] flex items-center justify-center font-serif font-bold shrink-0">
                    2
                  </span>
                  <div>
                    <h4 className="font-serif text-base text-[#302B24] font-bold">{t('threeRoundsTitle')}</h4>
                    <p className="text-xs text-[#302B24]/75 mt-0.5 leading-relaxed">
                      {t('threeRoundsDesc')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => navigateWithMesob('/journal/coffee-ceremony')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B58A43] hover:bg-[#9E7432] text-white text-xs font-bold uppercase tracking-widest shadow-md transition-all"
                >
                  <span>{t('readBunaEssay')}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#DDC28D]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fine Ornamental Tilet Divider */}
      <TiletDivider className="py-2" />

      {/* ── 6. EDITORIAL STORIES / JOURNAL DISPATCHES (PURE WHITE) ───── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B58A43] font-bold">
                {t('journalEyebrow')}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#302B24] mt-1">
                {t('journalTitle')} <span className="italic font-normal text-[#B58A43]">{t('journalTitleHighlight')}</span>
              </h2>
            </div>

            <button
              onClick={() => navigateWithMesob('/journal')}
              className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-widest text-[#B58A43] hover:underline transition-colors"
            >
              <span>{t('exploreAllEssays')}</span>
              <ArrowRight className="w-4 h-4 text-[#B58A43]" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {journalPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => navigateWithMesob(`/journal/${post.id}`)}
                className="group cursor-pointer flex flex-col bg-white rounded-3xl overflow-hidden border border-[#B58A43]/25 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 p-1.5"
              >
                <div className="relative h-56 overflow-hidden rounded-2xl border border-[#B58A43]/20">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[#B58A43] text-[10px] font-bold uppercase tracking-wider border border-[#B58A43]/30">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] text-[#302B24]/60 mb-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-serif text-xl font-semibold text-[#302B24] group-hover:text-[#B58A43] transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="font-sans text-xs text-[#302B24]/75 mt-2.5 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#B58A43]/20 flex items-center justify-between text-xs text-[#B58A43] font-bold">
                    <span>{t('readFullEssay')}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6.5. VOICES FROM THE PATH (GUEST PERSPECTIVES) ── */}
      <section className="py-20 sm:py-24 bg-[#FAF8F5] border-t border-[#B58A43]/20 relative">
        <TiletBackgroundPattern className="opacity-[0.025]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B58A43] font-bold">
              {t('guestEyebrow')}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#302B24] mt-1">
              {t('guestTitle')} <span className="italic font-normal text-[#B58A43]">{t('guestTitleHighlight')}</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#302B24]/70 mt-2">
              {t('guestSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-[#B58A43]/30 shadow-sm flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex text-[#B58A43] text-sm">★★★★★</div>
                <blockquote className="font-serif italic text-base sm:text-lg text-[#302B24] leading-relaxed">
                  "Lalibela was transcendent, but what truly elevated our expedition was Ancient Path's access. Chanting with priests before dawn, sleeping at Limalimo above the cloud canyons, and Abenezer's gentle mastery of every detail."
                </blockquote>
              </div>
              <div className="pt-4 border-t border-[#B58A43]/20">
                <span className="block font-serif text-base font-bold text-[#302B24]">
                  Lady Camilla & Lord Edward St. John
                </span>
                <span className="block text-[11px] text-[#302B24]/60 uppercase tracking-wider font-semibold">
                  London, UK • Ancient Kingdoms (14 Days)
                </span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#B58A43]/30 shadow-sm flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex text-[#B58A43] text-sm">★★★★★</div>
                <blockquote className="font-serif italic text-base sm:text-lg text-[#302B24] leading-relaxed">
                  "Tracking the Ethiopian Wolf across the afro-alpine plateau with Daniel was world-class guiding. Truly ethical, dignified cultural exchanges in the Omo that completely avoided the tourist-bus feeling."
                </blockquote>
              </div>
              <div className="pt-4 border-t border-[#B58A43]/20">
                <span className="block font-serif text-base font-bold text-[#302B24]">
                  Markus & Astrid Helfenstein
                </span>
                <span className="block text-[11px] text-[#302B24]/60 uppercase tracking-wider font-semibold">
                  Zurich, Switzerland • Bale & Omo Expeditions
                </span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#B58A43]/30 shadow-sm flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex text-[#B58A43] text-sm">★★★★★</div>
                <blockquote className="font-serif italic text-base sm:text-lg text-[#302B24] leading-relaxed">
                  "Standing on the rim of the active Erta Ale lava lake under the desert stars was one of the most unforgettable moments of our lives. The expedition logistics, camp chef, and safety were utterly impeccable."
                </blockquote>
              </div>
              <div className="pt-4 border-t border-[#B58A43]/20">
                <span className="block font-serif text-base font-bold text-[#302B24]">
                  Dr. Julian & Vivienne Sato
                </span>
                <span className="block text-[11px] text-[#302B24]/60 uppercase tracking-wider font-semibold">
                  Tokyo & New York • Danakil & Harar
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prominent Repeating Tilet Border before CTA */}
      <TiletBorderPrimary height={20} className="border-y border-[#B58A43]/30 bg-[#FAF8F5]" />

      {/* ── 7. PRIVATE BESPOKE CURATION CTA BANNER (WARM IVORY & GOLD) ───── */}
      <section className="py-20 sm:py-28 bg-[#F8F5EE] text-[#302B24] relative overflow-hidden">
        <TiletBackgroundPattern className="opacity-[0.04]" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B58A43] font-bold">
            {t('ctaEyebrow')}
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light leading-tight">
            {t('ctaTitle')}<br />
            <span className="italic font-normal text-[#B58A43]">{t('ctaTitleHighlight')}</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#302B24]/80 max-w-2xl mx-auto leading-relaxed">
            {t('ctaSubtitle')}
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigateWithMesob('/book')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#B58A43] to-[#9E7432] hover:from-[#c49a50] hover:to-[#B58A43] text-white font-sans text-xs uppercase tracking-widest font-bold shadow-lg hover:shadow-xl transition-all"
            >
              {t('startPlanBtn')}
            </button>
            <button
              onClick={() => navigateWithMesob('/contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#B58A43] hover:bg-white text-[#302B24] font-sans text-xs uppercase tracking-widest font-bold transition-all shadow-xs"
            >
              {t('speakConciergeBtn')}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
