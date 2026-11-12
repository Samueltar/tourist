import React, { useEffect } from 'react'
import { X, Heart, Clock, Trash2, ArrowRight, Compass } from 'lucide-react'
import { useMesob } from './MesobTransition'
import { useLanguage } from '../context/LanguageContext'
import { TiletBorderPrimary, TiletDivider } from './TiletPatterns'

export default function WishlistDrawer({
  isOpen,
  onClose,
  savedTours = [],
  onRemoveTour,
  onOpenTourModal,
}) {
  const { navigateWithMesob } = useMesob()
  const { t } = useLanguage()

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
      <div className="bg-[#FAF8F5] dark:bg-[#0E0D0B] text-[#302B24] dark:text-[#F5F2EB] border-l border-[#B58A43]/30 w-full max-w-md h-full flex flex-col shadow-2xl relative animate-slide-right">
        {/* Top Gold Tilet Strip */}
        <TiletBorderPrimary className="w-full text-[#B58A43] opacity-80" height={10} />

        {/* Drawer Header */}
        <div className="p-5 sm:p-6 border-b border-[#B58A43]/20 dark:border-[#B58A43]/30 flex items-center justify-between bg-white dark:bg-[#161410]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#FAF8F5] dark:bg-[#1E1B16] border border-[#B58A43]/40 flex items-center justify-center text-[#B58A43]">
              <Heart className="w-4 h-4 fill-[#B58A43]" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#1A1713] dark:text-[#F5F2EB]">
                {t('wishlistTitle')}
              </h3>
              <span className="text-[10px] uppercase tracking-wider text-[#302B24]/70 dark:text-[#D1C7BA] font-semibold">
                {savedTours.length} {savedTours.length === 1 ? 'itinerary' : 'itineraries'} shortlisted
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#302B24]/60 dark:text-[#D1C7BA] hover:text-[#1A1713] dark:hover:text-white hover:bg-[#EFE7D9] dark:hover:bg-[#1E1B16] transition-colors"
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
                className="bg-white dark:bg-[#161410] border border-[#B58A43]/25 hover:border-[#B58A43] rounded-xl p-3.5 flex items-center gap-3.5 group shadow-sm hover:shadow-md transition-all"
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
                  <h4 className="font-serif text-sm font-semibold text-[#1A1713] dark:text-[#F5F2EB] group-hover:text-[#B58A43] transition-colors truncate">
                    {tour.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#302B24]/70 dark:text-[#D1C7BA] mt-1">
                    <Clock className="w-3 h-3 text-[#B58A43]" />
                    <span>{tour.duration}</span>
                    <span>•</span>
                    <span className="capitalize">{tour.category}</span>
                  </div>
                </div>

                {/* Remove button */}
                <button
                  onClick={() => onRemoveTour(tour.id)}
                  className="p-2 text-[#302B24]/40 dark:text-[#9E9382] hover:text-red-500 transition-colors shrink-0"
                  title="Remove from saved"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-16 space-y-3 px-4">
              <div className="w-16 h-16 rounded-full bg-white dark:bg-[#161410] border border-[#B58A43]/30 flex items-center justify-center mx-auto text-[#B58A43] shadow-sm">
                <Heart className="w-7 h-7 opacity-40 text-[#B58A43]" />
              </div>
              <h4 className="font-serif text-lg text-[#1A1713] dark:text-[#F5F2EB] font-semibold">
                {t('shortlistEmpty')}
              </h4>
              <p className="text-xs text-[#302B24]/75 dark:text-[#D1C7BA] leading-relaxed max-w-xs mx-auto">
                {t('shortlistEmptyDesc')}
              </p>
              <button
                onClick={() => {
                  onClose()
                  navigateWithMesob('/tours')
                }}
                className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A1713] dark:bg-[#B58A43] hover:bg-[#B58A43] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
              >
                <Compass className="w-3.5 h-3.5 text-[#B58A43] dark:text-white" />
                <span>{t('browseAllJourneys')}</span>
              </button>
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {savedTours.length > 0 && (
          <div className="p-5 bg-white dark:bg-[#161410] border-t border-[#B58A43]/20 dark:border-[#B58A43]/30 space-y-2.5">
            <button
              onClick={handlePlanWithSaved}
              className="w-full py-3.5 bg-gradient-to-r from-[#B58A43] to-[#916B2D] hover:from-[#C49A50] hover:to-[#B58A43] text-white font-sans font-bold text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <span>{t('planWithSaved')} ({savedTours.length})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-center text-[10px] text-[#302B24]/70">
              {t('bespokeSummary')}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
