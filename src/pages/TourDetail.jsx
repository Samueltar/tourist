import React, { useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import {
  Clock, MapPin, Heart, Check, X, Shield, Sparkles, MessageCircle,
  Calendar, Users, Compass, ChevronDown, ChevronUp, Share2, ArrowLeft, ArrowRight
} from 'lucide-react'
import { tours } from '../data/tours'
import { useMesob } from '../components/MesobTransition'
import { useLanguage } from '../context/LanguageContext'
import TourCard from '../components/TourCard'
import { TiletBorderPrimary, TiletDivider, TiletCorner } from '../components/TiletPatterns'

export default function TourDetail({
  savedTourIds = [],
  onToggleSaveTour = () => {},
  onSelectTourModal = () => {},
}) {
  const { id } = useParams()
  const { navigateWithMesob } = useMesob()
  const { t, language } = useLanguage()
  const [activeDayIndex, setActiveDayIndex] = useState(0)
  const [expandedAllDays, setExpandedAllDays] = useState(false)
  const [activeGalleryImage, setActiveGalleryImage] = useState(null)
  const [copiedLink, setCopiedLink] = useState(false)

  const tour = tours.find((t) => t.id === id)

  if (!tour) {
    return <Navigate to="/tours" replace />
  }

  const isSaved = savedTourIds.includes(tour.id)

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href)
      setCopiedLink(true)
      setTimeout(() => setCopiedLink(false), 3000)
    }
  }

  const relatedTours = tours.filter((t) => t.id !== tour.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1713] pt-24 pb-20 selection:bg-[#B58A43] selection:text-white">
      {/* ── BREADCRUMB & UTILITIES ────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between text-xs text-[#302B24]/70">
        <button
          onClick={() => navigateWithMesob('/tours')}
          className="flex items-center gap-1.5 hover:text-[#B58A43] transition-colors font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{language === 'am' ? 'ወደ ሁሉም ጉዞዎች ተመለስ' : 'Back to All Journeys'}</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 text-xs hover:text-[#B58A43] transition-colors"
          >
            <Share2 className="w-3.5 h-3.5 text-[#B58A43]" />
            <span>{copiedLink ? (language === 'am' ? 'ሊንኩ ተቀድቷል!' : 'Link Copied!') : (language === 'am' ? 'አጋራ' : 'Share')}</span>
          </button>

          <button
            onClick={() => onToggleSaveTour(tour.id)}
            className={`flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all ${
              isSaved
                ? 'bg-[#B58A43] text-white border-[#B58A43]'
                : 'border-[#B58A43]/40 text-[#1A1713] hover:bg-white'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
            <span>{isSaved ? (language === 'am' ? 'ተመርጧል' : 'Saved') : (language === 'am' ? 'ይምረጡ' : 'Save')}</span>
          </button>
        </div>
      </div>

      {/* ── CINEMATIC HERO & TITLE ───────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        <div className="space-y-3 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#1A1713] text-[#FAF8F5] text-[10px] font-bold uppercase tracking-widest">
              {tour.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-[#B58A43] font-bold">
              <Clock className="w-3.5 h-3.5" />
              {tour.duration}
            </span>
            <span className="text-gray-300">•</span>
            <span className="text-xs text-[#302B24]/75 font-sans">
              {language === 'am' ? 'የጉዞው ደረጃ:' : 'Difficulty:'}{' '}
              <strong className="text-[#1A1713]">{tour.difficulty || 'Moderate'}</strong>
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#1A1713] leading-tight">
            {tour.title}
          </h1>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#B58A43] font-medium uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-[#B58A43] shrink-0" />
            <span>{tour.route}</span>
          </div>
        </div>

        {/* Photography Mosaic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 rounded-3xl overflow-hidden shadow-xl border border-[#B58A43]/30 bg-white p-2 relative">
          <TiletCorner position="top-left" className="text-[#B58A43]/30 pointer-events-none" size={32} />
          
          <div className="lg:col-span-8 h-80 sm:h-[480px] relative overflow-hidden rounded-2xl group">
            <img
              src={activeGalleryImage || tour.image}
              alt={tour.title}
              className="w-full h-full object-cover transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Side Thumbnail Stack */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
            {tour.gallery && tour.gallery.slice(0, 3).map((imgUrl, i) => (
              <div
                key={i}
                onClick={() => setActiveGalleryImage(imgUrl)}
                className="h-36 sm:h-[150px] relative rounded-xl overflow-hidden cursor-pointer group border border-[#B58A43]/20 hover:border-[#B58A43] transition-colors"
              >
                <img
                  src={imgUrl}
                  alt={`${tour.title} gallery ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT & STICKY BOOKING CARD ───────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Itinerary & Narrative */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview / Story */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#B58A43]/20 shadow-sm space-y-4 relative">
              <TiletCorner position="top-right" className="text-[#B58A43]/25 pointer-events-none" size={26} />
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B58A43] font-bold">
                {language === 'am' ? 'የጉዞው ፍልስፍና' : 'The Expedition Ethos'}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1713] font-normal">
                {language === 'am' ? 'የጉዞው አጠቃላይ መግለጫ' : 'Journey Overview'}
              </h2>
              <div className="font-sans text-sm text-[#302B24]/85 leading-relaxed space-y-3 whitespace-pre-line font-light">
                {tour.overview || tour.summary}
              </div>

              {tour.bestSuitedTo && (
                <div className="pt-4 border-t border-[#B58A43]/15 mt-6 text-xs text-[#302B24]/80">
                  <strong className="text-[#1A1713] font-semibold">{language === 'am' ? 'ይበልጥ ተስማሚ የሚሆነው:' : 'Best Suited To:'}</strong> {tour.bestSuitedTo}
                </div>
              )}
            </div>

            {/* Highlights Grid */}
            {tour.highlights && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#B58A43]/20 shadow-sm">
                <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B58A43] font-bold">
                  {language === 'am' ? 'ልዩ አጋጣሚዎች' : 'Curated Moments'}
                </span>
                <h3 className="font-serif text-2xl text-[#1A1713] font-normal mt-1 mb-6">
                  {language === 'am' ? 'የሚያገኟቸው ልዩ ተሞክሮዎች' : 'What You Will Experience'}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {tour.highlights.map((hl, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF8F5] border border-[#B58A43]/20 text-xs text-[#302B24]/85"
                    >
                      <Sparkles className="w-4 h-4 text-[#B58A43] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Day-by-Day Suggested Itinerary */}
            {tour.suggestedJourney && tour.suggestedJourney.length > 0 && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#B58A43]/20 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B58A43] font-bold">
                      {language === 'am' ? 'የዕለት ከዕለት ፕሮግራም' : 'Day-by-Day Unfolding'}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1713] font-normal mt-1">
                      {language === 'am' ? 'የተጠቆመው የጉዞ መስመር' : 'The Suggested Path'}
                    </h3>
                  </div>

                  <button
                    onClick={() => setExpandedAllDays(!expandedAllDays)}
                    className="text-xs text-[#B58A43] font-bold uppercase tracking-wider hover:underline"
                  >
                    {expandedAllDays ? (language === 'am' ? 'ሁሉንም አሳንስ' : 'Collapse All') : (language === 'am' ? 'ሁሉንም ዘርጋ' : 'Expand All')}
                  </button>
                </div>

                <div className="space-y-4">
                  {tour.suggestedJourney.map((dayItem, idx) => {
                    const isOpen = expandedAllDays || activeDayIndex === idx
                    return (
                      <div
                        key={dayItem.day}
                        className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                          isOpen
                            ? 'border-[#B58A43] bg-[#FAF8F5] shadow-sm'
                            : 'border-[#B58A43]/20 bg-white hover:border-[#B58A43]/50'
                        }`}
                      >
                        <button
                          onClick={() => setActiveDayIndex(isOpen && !expandedAllDays ? -1 : idx)}
                          className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4"
                        >
                          <div className="flex items-center gap-3.5 min-w-0">
                            <span className="w-8 h-8 rounded-full bg-[#1A1713] text-[#FAF8F5] flex items-center justify-center font-serif font-bold text-xs shrink-0">
                              {dayItem.day}
                            </span>
                            <div className="min-w-0">
                              <span className="block font-sans text-[10px] uppercase tracking-wider text-[#B58A43] font-bold">
                                {dayItem.location}
                              </span>
                              <h4 className="font-serif text-base sm:text-lg text-[#1A1713] font-semibold truncate">
                                {dayItem.title}
                              </h4>
                            </div>
                          </div>

                          <div className="text-[#B58A43] shrink-0">
                            {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                          </div>
                        </button>

                        {isOpen && (
                          <div className="px-5 pb-5 pt-1 space-y-3 border-t border-[#B58A43]/15 animate-fade-in">
                            <p className="font-sans text-xs sm:text-sm text-[#302B24]/80 leading-relaxed font-light">
                              {dayItem.description}
                            </p>

                            <div className="flex flex-wrap items-center gap-4 pt-3 text-[11px] text-[#302B24]/75 border-t border-dashed border-[#B58A43]/20">
                              {dayItem.meals && (
                                <div>
                                  <strong className="text-[#1A1713]">{language === 'am' ? 'ምግቦች:' : 'Meals:'}</strong> {dayItem.meals}
                                </div>
                              )}
                              {dayItem.accommodation && (
                                <div>
                                  <strong className="text-[#1A1713]">{language === 'am' ? 'ማረፊያ:' : 'Stay:'}</strong> {dayItem.accommodation}
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inclusions */}
              <div className="bg-white rounded-2xl p-6 border border-[#B58A43]/20 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-[#1A1713]">
                  <Check className="w-5 h-5 text-[#B58A43]" />
                  <h4 className="font-serif text-xl font-bold">{language === 'am' ? 'የተካተቱ አገልግሎቶች' : 'Everything Included'}</h4>
                </div>
                <ul className="space-y-2 text-xs text-[#302B24]/80">
                  {tour.inclusions ? (
                    tour.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B58A43] mt-1.5 shrink-0" />
                        <span>{inc}</span>
                      </li>
                    ))
                  ) : (
                    <>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B58A43] mt-1.5 shrink-0" />
                        <span>{language === 'am' ? 'የግል ባለ አየር ማቀዝቀዣ 4WD የመሬት ትራንስፖርት' : 'All private ground transport in air-conditioned 4WD'}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B58A43] mt-1.5 shrink-0" />
                        <span>{language === 'am' ? 'ልምድ ያለው የጉዞ ባለሙያ እና መሪ' : 'Dedicated licensed English-speaking senior guide'}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B58A43] mt-1.5 shrink-0" />
                        <span>{language === 'am' ? 'የተመረጡ ደረጃቸውን የጠበቁ ማረፊያዎች' : 'Handpicked boutique accommodations and lodges'}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B58A43] mt-1.5 shrink-0" />
                        <span>{language === 'am' ? 'የፓርክና የቦታዎች መግቢያ ፈቃዶች እና ክፍያዎች' : 'All park permits, church fees, and village entry contributions'}</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="bg-white rounded-2xl p-6 border border-[#B58A43]/20 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-[#1A1713]">
                  <X className="w-5 h-5 text-gray-400" />
                  <h4 className="font-serif text-xl font-bold">{language === 'am' ? 'ያልተካተቱ ነገሮች' : 'Not Included'}</h4>
                </div>
                <ul className="space-y-2 text-xs text-[#302B24]/70">
                  {tour.exclusions ? (
                    tour.exclusions.map((exc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0" />
                        <span>{exc}</span>
                      </li>
                    ))
                  ) : (
                    <>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0" />
                        <span>{language === 'am' ? 'ዓለም አቀፍ የበረራ ትኬት' : 'International intercontinental roundtrip flights'}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0" />
                        <span>{language === 'am' ? 'የኢትዮጵያ ቪዛ ክፍያ' : 'Ethiopian tourist visa (obtainable online via eVisa)'}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0" />
                        <span>{language === 'am' ? 'የጉዞ እና የህክምና መድን' : 'Comprehensive travel & medical evacuation insurance'}</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Booking & Concierge Card */}
          <div className="lg:col-span-4 sticky top-28 space-y-5">
            <div className="bg-white rounded-2xl border border-[#B58A43]/35 p-6 sm:p-7 shadow-xl space-y-6 relative overflow-hidden">
              <TiletCorner position="top-right" className="text-[#B58A43]/30 pointer-events-none" size={26} />
              
              {/* Header with Pricing */}
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#B58A43] font-bold">
                  {language === 'am' ? 'ብጁ የቅንጦት ጉዞ' : 'Bespoke Journey'}
                </span>
                <div className="font-serif text-2xl font-bold text-[#1A1713] mt-0.5">
                  {tour.priceEstimate || t('pricingGuidance')}
                </div>
                <p className="text-[11px] text-[#302B24]/70 mt-1">
                  {language === 'am' ? '100% የግል። እንደ ቀናትዎ፣ የተጓዥ ብዛትና ምርጫዎ የሚዘጋጅ።' : '100% private. Customized to your dates, party size & preferred luxury tier.'}
                </p>
              </div>

              {/* Fast Spec Icons */}
              <div className="py-4 border-y border-[#B58A43]/20 space-y-3 text-xs text-[#302B24]/80">
                <div className="flex items-center justify-between">
                  <span className="text-[#302B24]/70 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#B58A43]" /> {language === 'am' ? 'ቆይታ' : 'Duration'}
                  </span>
                  <span className="font-semibold text-[#1A1713]">{tour.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#302B24]/70 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#B58A43]" /> {language === 'am' ? 'የቡድን ዓይነት' : 'Group Type'}
                  </span>
                  <span className="font-semibold text-[#1A1713]">{language === 'am' ? 'የግል (እርስዎና አጋሮችዎ)' : 'Private (You & Companions)'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#302B24]/70 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-[#B58A43]" /> {language === 'am' ? 'አስጎብኚ' : 'Escort'}
                  </span>
                  <span className="font-semibold text-[#1A1713]">{language === 'am' ? 'ከፍተኛ የጉዞ ባለሙያ' : 'Dedicated Senior Host'}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => navigateWithMesob(`/book?tour=${tour.id}`)}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#B58A43] to-[#916B2D] hover:from-[#C49A50] hover:to-[#B58A43] text-white font-sans text-xs uppercase tracking-widest font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <span>{t('bookThisJourney')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/251911234567?text=Hello%20Ancient%20Path,%20I%20am%20interested%20in%20the%20"${encodeURIComponent(tour.title)}"%20journey.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl border border-[#B58A43]/40 hover:border-[#1A1713] text-[#1A1713] font-sans text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 bg-[#FAF8F5]"
                >
                  <MessageCircle className="w-4 h-4 text-[#B58A43]" />
                  <span>{language === 'am' ? 'በዋትስአፕ ያነጋግሩን' : 'Ask Concierge on WhatsApp'}</span>
                </a>
              </div>

              <div className="text-[11px] text-[#302B24]/65 text-center leading-relaxed font-light">
                {language === 'am'
                  ? 'የሀገር ውስጥ በረራዎች ይፈልጋሉ? ሁሉም ጉዞዎቻችን የኢትዮጵያ አየር መንገድ በረራዎችን በቀላሉ ያካትታሉ።'
                  : 'Need domestic flights included? All our itineraries seamlessly incorporate scheduled Ethiopian Airlines transfers.'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED JOURNEYS ─────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-16 border-t border-[#B58A43]/20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B58A43] font-bold">
            {language === 'am' ? 'ተጨማሪ ያስሱ' : 'Continue Exploring'}
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-[#1A1713] font-normal mt-1">
            {language === 'am' ? 'ሊወዷቸው የሚችሉ ሌሎች ጉዞዎች' : 'Other Journeys You May Love'}
          </h3>
          <TiletDivider className="w-48 mx-auto text-[#B58A43] pt-2 opacity-60" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedTours.map((t) => (
            <TourCard
              key={t.id}
              tour={t}
              isSaved={savedTourIds.includes(t.id)}
              onToggleSave={onToggleSaveTour}
              onQuickView={onSelectTourModal}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
