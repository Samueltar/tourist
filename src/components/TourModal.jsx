import React, { useEffect } from 'react'
import { X, Heart, Clock, MapPin, Check, ArrowRight, Calendar, Sparkles } from 'lucide-react'
import { useMesob } from './MesobTransition'

export default function TourModal({
  tour,
  isOpen,
  onClose,
  isSaved,
  onToggleSave,
}) {
  const { navigateWithMesob } = useMesob()

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
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#F5F0E6] border border-[#C3A16A]/40 w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl flex flex-col relative animate-scale-in max-h-[90vh]">
        {/* Top Image Banner */}
        <div className="relative h-60 sm:h-72 w-full shrink-0 overflow-hidden">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#173D32] via-[#173D32]/40 to-black/60" />

          {/* Top Floating Controls */}
          <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
            <button
              onClick={() => onToggleSave(tour.id)}
              className={`p-2.5 rounded-full backdrop-blur-md transition-all shadow-md ${
                isSaved ? 'bg-[#B86B48] text-white' : 'bg-black/50 text-[#F5F0E6] hover:bg-black/80'
              }`}
              title={isSaved ? 'Remove from saved' : 'Save journey'}
            >
              <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-[#F5F0E6] backdrop-blur-md transition-all shadow-md"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Title on Image */}
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#C3A16A] text-[#173D32] font-bold text-[10px] uppercase tracking-wider">
                {tour.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-[#E9E0D1]">
                <Clock className="w-3.5 h-3.5 text-[#C3A16A]" />
                {tour.duration}
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium leading-tight text-white drop-shadow">
              {tour.title}
            </h2>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Route Bar */}
          <div className="flex items-center gap-2 text-xs text-[#B86B48] font-semibold uppercase tracking-wider bg-white p-3 rounded-xl border border-[#C3A16A]/20">
            <MapPin className="w-4 h-4 shrink-0" />
            <span>{tour.route}</span>
          </div>

          {/* Overview Paragraphs */}
          <div>
            <h3 className="font-serif text-lg text-[#173D32] font-semibold mb-2">
              About This Curated Expedition
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#202622]/80 leading-relaxed whitespace-pre-line">
              {tour.overview || tour.summary}
            </p>
          </div>

          {/* Highlights Grid */}
          {tour.highlights && (
            <div>
              <h3 className="font-serif text-lg text-[#173D32] font-semibold mb-3">
                Key Experiences & Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {tour.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#202622]/80 bg-white/70 p-2.5 rounded-lg border border-[#C3A16A]/20">
                    <Check className="w-4 h-4 text-[#B86B48] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Inclusions summary */}
          {tour.inclusions && (
            <div className="bg-[#284D3C]/10 border border-[#284D3C]/20 rounded-xl p-4">
              <span className="block font-sans text-[11px] uppercase tracking-wider text-[#173D32] font-bold mb-2">
                What Makes It Luxury & Thoughtful
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#202622]/80">
                {tour.inclusions.slice(0, 4).map((inc, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Sparkles className="w-3 h-3 text-[#C3A16A] shrink-0" />
                    <span className="line-clamp-1">{inc}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Sticky Bottom Actions */}
        <div className="p-4 sm:p-5 bg-white border-t border-[#C3A16A]/20 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div>
            <span className="block text-[10px] uppercase tracking-widest text-[#202622]/60">
              Pricing Guidance
            </span>
            <span className="text-sm font-semibold text-[#173D32]">
              {tour.priceEstimate || 'Tailor-Made Luxury Quotation'}
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleGoToItinerary}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-[#173D32] text-[#173D32] hover:bg-[#173D32] hover:text-[#F5F0E6] text-xs font-semibold uppercase tracking-wider transition-all"
            >
              Full Day-by-Day Itinerary
            </button>
            <button
              onClick={handlePlanWithTour}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#B86B48] to-[#9E5536] hover:from-[#c2734f] hover:to-[#B86B48] text-white text-xs font-bold uppercase tracking-wider shadow transition-all flex items-center justify-center gap-1.5"
            >
              <span>Book Journey</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
