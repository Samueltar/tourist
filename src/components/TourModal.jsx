import React, { useEffect } from 'react'
import { X, Heart, Clock, MapPin, Check, ArrowRight, Sparkles } from 'lucide-react'
import { useMesob } from './MesobTransition'
import { useLanguage } from '../context/LanguageContext'
import { TiletCorner, TiletBorderPrimary } from './TiletPatterns'

export default function TourModal({
  tour,
  isOpen,
  onClose,
  isSaved,
  onToggleSave,
}) {
  const { navigateWithMesob } = useMesob()
  const { t, language } = useLanguage()

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen || !tour) return null

  const handleGoToItinerary = () => {
    onClose()
    navigateWithMesob(`/tours/${tour.id}`)
  }

  const handlePlanWithTour = () => {
    onClose()
    navigateWithMesob(`/book?tour=${tour.id}`)
  }

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white border-2 border-[#B58A43]/40 w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl flex flex-col relative animate-scale-in max-h-[90vh]">
        {/* Top Tilet Border Accent */}
        <TiletBorderPrimary height={14} className="border-b border-[#B58A43]/30 bg-[#FAF8F5]" />

        {/* Top Image Banner */}
        <div className="relative h-60 sm:h-72 w-full shrink-0 overflow-hidden">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/50" />

          {/* Top Floating Controls */}
          <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
            <button
              onClick={() => onToggleSave(tour.id)}
              className={`p-2.5 rounded-full backdrop-blur-md transition-all shadow-md ${
                isSaved ? 'bg-[#B58A43] text-white' : 'bg-black/50 text-white hover:bg-black/80'
              }`}
              title={isSaved ? 'Remove from saved' : 'Save journey'}
            >
              <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-all shadow-md"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Title on Image */}
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#B58A43] text-white font-bold text-[10px] uppercase tracking-wider">
                {tour.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-[#DDC28D] font-bold">
                <Clock className="w-3.5 h-3.5 text-[#DDC28D]" />
                {tour.duration}
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold leading-tight text-white drop-shadow">
              {tour.title}
            </h2>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 bg-white text-[#302B24]">
          {/* Route Bar */}
          <div className="flex items-center gap-2 text-xs text-[#B58A43] font-bold uppercase tracking-wider bg-[#FAF8F5] p-3 rounded-xl border border-[#B58A43]/20">
            <MapPin className="w-4 h-4 shrink-0 text-[#B58A43]" />
            <span>{tour.route}</span>
          </div>

          {/* Overview Paragraphs */}
          <div>
            <h3 className="font-serif text-lg text-[#302B24] font-bold mb-2">
              {language === 'am' ? 'የጉዞው አጭር መግለጫ' : 'About This Curated Expedition'}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#302B24]/80 leading-relaxed whitespace-pre-line">
              {tour.overview || tour.summary}
            </p>
          </div>

          {/* Highlights Grid */}
          {tour.highlights && (
            <div>
              <h3 className="font-serif text-lg text-[#302B24] font-bold mb-3">
                {language === 'am' ? 'ዋና ዋና ተሞክሮዎች' : 'Key Experiences & Highlights'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {tour.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#302B24]/80 bg-[#FAF8F5] p-2.5 rounded-xl border border-[#B58A43]/20">
                    <Check className="w-4 h-4 text-[#B58A43] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Inclusions summary */}
          {tour.inclusions && (
            <div className="bg-[#FAF8F5] border border-[#B58A43]/30 rounded-2xl p-4">
              <span className="block font-sans text-[11px] uppercase tracking-wider text-[#B58A43] font-bold mb-2">
                {language === 'am' ? 'የቅንጦት እና ጥንቃቄ ዝርዝር' : 'What Makes It Luxury & Thoughtful'}
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#302B24]/80">
                {tour.inclusions.slice(0, 4).map((inc, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Sparkles className="w-3 h-3 text-[#B58A43] shrink-0" />
                    <span className="line-clamp-1">{inc}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Sticky Bottom Actions */}
        <div className="p-4 sm:p-5 bg-[#FAF8F5] border-t border-[#B58A43]/20 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div>
            <span className="block text-[10px] uppercase tracking-widest text-[#302B24]/60 font-semibold">
              {t('pricingGuidance')}
            </span>
            <span className="text-sm font-bold text-[#B58A43]">
              {tour.priceEstimate || 'Tailor-Made Luxury Quotation'}
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleGoToItinerary}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-[#B58A43] text-[#B58A43] hover:bg-[#B58A43] hover:text-white text-xs font-bold uppercase tracking-wider transition-all"
            >
              {t('exploreItinerary')}
            </button>
            <button
              onClick={handlePlanWithTour}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#B58A43] to-[#9E7432] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-1.5"
            >
              <span>{t('bookThisJourney')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
