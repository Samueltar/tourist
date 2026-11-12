import React, { useEffect } from 'react'
import { X, Heart, Clock, Trash2, ArrowRight, Compass } from 'lucide-react'
import { useMesob } from './MesobTransition'

export default function WishlistDrawer({
  isOpen,
  onClose,
  savedTours = [],
  onRemoveTour,
  onOpenTourModal,
}) {
  const { navigateWithMesob } = useMesob()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const handlePlanWithSaved = () => {
    onClose()
    const ids = savedTours.map((t) => t.id).join(',')
    navigateWithMesob(`/book?saved=${ids}`)
  }

  const handleViewTour = (tourId) => {
    onClose()
    navigateWithMesob(`/tours/${tourId}`)
  }

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end animate-fade-in"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#F5F0E6] border-l border-[#C3A16A]/30 w-full max-w-md h-full flex flex-col shadow-2xl relative animate-slide-right">
        {/* Drawer Header */}
        <div className="p-5 sm:p-6 border-b border-[#C3A16A]/20 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2.5">
            <Heart className="w-5 h-5 text-[#B86B48] fill-[#B86B48]" />
            <div>
              <h3 className="font-serif text-xl font-bold text-[#173D32]">
                Saved Journeys
              </h3>
              <span className="text-[10px] uppercase tracking-wider text-[#202622]/60">
                {savedTours.length} {savedTours.length === 1 ? 'itinerary' : 'itineraries'} shortlisted
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#202622]/60 hover:text-[#173D32] hover:bg-[#E9E0D1]/60 transition-colors"
            aria-label="Close wishlist drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-3.5">
          {savedTours.length > 0 ? (
            savedTours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white border border-[#C3A16A]/20 rounded-xl p-3.5 flex items-center gap-3.5 group shadow-sm hover:border-[#C3A16A] transition-all"
              >
                {/* Thumbnail */}
                <img
                  src={tour.image}
                  alt={tour.title}
                  onClick={() => handleViewTour(tour.id)}
                  className="w-16 h-16 rounded-lg object-cover shrink-0 cursor-pointer group-hover:scale-105 transition-transform"
                />

                {/* Details */}
                <div
                  className="flex-1 min-w-0 cursor-pointer"
                  onClick={() => handleViewTour(tour.id)}
                >
                  <h4 className="font-serif text-sm font-semibold text-[#173D32] group-hover:text-[#B86B48] transition-colors truncate">
                    {tour.title}
                  </h4>
                  <div className="flex items-center gap-1 text-[11px] text-[#202622]/60 mt-1">
                    <Clock className="w-3 h-3 text-[#C3A16A]" />
                    <span>{tour.duration}</span>
                    <span>•</span>
                    <span className="capitalize">{tour.category}</span>
                  </div>
                </div>

                {/* Remove button */}
                <button
                  onClick={() => onRemoveTour(tour.id)}
                  className="p-2 text-[#202622]/40 hover:text-red-600 transition-colors shrink-0"
                  title="Remove from saved"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-16 space-y-3 px-4">
              <div className="w-16 h-16 rounded-full bg-[#E9E0D1]/50 border border-[#C3A16A]/30 flex items-center justify-center mx-auto text-[#B86B48]">
                <Heart className="w-8 h-8 opacity-40" />
              </div>
              <h4 className="font-serif text-lg text-[#173D32] font-semibold">
                Your shortlist is empty
              </h4>
              <p className="text-xs text-[#202622]/70 leading-relaxed max-w-xs mx-auto">
                Explore our curated journeys and click the heart icon on any itinerary to save and compare your favorites.
              </p>
              <button
                onClick={() => {
                  onClose()
                  navigateWithMesob('/tours')
                }}
                className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#173D32] text-[#F5F0E6] text-xs font-semibold uppercase tracking-wider"
              >
                <Compass className="w-3.5 h-3.5 text-[#C3A16A]" />
                <span>Browse All Journeys</span>
              </button>
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {savedTours.length > 0 && (
          <div className="p-5 bg-white border-t border-[#C3A16A]/20 space-y-2.5">
            <button
              onClick={handlePlanWithSaved}
              className="w-full py-3.5 bg-gradient-to-r from-[#B86B48] to-[#9E5536] hover:from-[#c2734f] hover:to-[#B86B48] text-white font-sans font-bold text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <span>Plan Trip With Saved ({savedTours.length})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-center text-[10px] text-[#202622]/60">
              Our travel designers will weave your selected highlights into one bespoke itinerary.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
