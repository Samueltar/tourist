import React from 'react'
import { Heart, Clock, MapPin, ArrowRight, Eye } from 'lucide-react'
import { useMesob } from './MesobTransition'
import { useLanguage } from '../context/LanguageContext'

export default function TourCard({
  tour,
  isSaved = false,
  onToggleSave = () => {},
  onQuickView = () => {},
  layout = 'vertical', // 'vertical' | 'horizontal'
  featured = false,
}) {
  const { navigateWithMesob } = useMesob()
  const { t, language } = useLanguage()

  const handleCardClick = () => {
    navigateWithMesob(`/tours/${tour.id}`)
  }

  const categoryBadgeMap = {
    historical: 'border-[#B58A43] text-[#B58A43] bg-[#FAF8F5] dark:bg-[#1E1B16] dark:text-[#DDC28D]',
    wildlife: 'border-[#284D3C] text-[#284D3C] bg-[#FAF8F5] dark:bg-[#1E1B16] dark:text-[#72A287]',
    cultural: 'border-[#B86B48] text-[#B86B48] bg-[#FAF8F5] dark:bg-[#1E1B16] dark:text-[#DDA287]',
    spiritual: 'border-[#B58A43] text-[#B58A43] bg-[#FAF8F5] dark:bg-[#1E1B16] dark:text-[#DDC28D]',
    adventure: 'border-[#9E5536] text-[#9E5536] bg-[#FAF8F5] dark:bg-[#1E1B16] dark:text-[#DDA287]',
    city: 'border-[#302B24] text-[#302B24] bg-[#FAF8F5] dark:bg-[#1E1B16] dark:text-[#E8E2D5]',
    nature: 'border-[#284D3C] text-[#284D3C] bg-[#FAF8F5] dark:bg-[#1E1B16] dark:text-[#72A287]',
  }

  const badgeStyle = categoryBadgeMap[tour.category] || 'border-[#B58A43] text-[#B58A43] bg-[#FAF8F5]'

  if (layout === 'horizontal') {
    return (
      <div className="group bg-white dark:bg-[#161411] rounded-3xl overflow-hidden border border-[#B58A43]/25 dark:border-[#B58A43]/30 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row relative">
        {/* Image Container with Gold Border Frame */}
        <div className="relative md:w-2/5 h-64 md:h-auto overflow-hidden cursor-pointer p-2.5 sm:p-3" onClick={handleCardClick}>
          <div className="w-full h-full rounded-2xl overflow-hidden relative border border-[#B58A43]/30">
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

            {/* Badges on Image */}
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <span className={`px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border backdrop-blur-md ${badgeStyle}`}>
                {tour.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/90 dark:bg-[#1E1B16]/90 backdrop-blur-md text-[#302B24] dark:text-[#F5F2EB] text-[10px] font-bold flex items-center gap-1 border border-[#B58A43]/30">
                <Clock className="w-3 h-3 text-[#B58A43]" />
                {tour.duration}
              </span>
            </div>

            {/* Quick View and Wishlist Actions */}
            <div className="absolute top-3 right-3 flex items-center gap-1.5">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onQuickView(tour)
                }}
                className="p-2 rounded-full bg-white/90 dark:bg-[#1E1B16]/90 hover:bg-white text-[#302B24] dark:text-[#F5F2EB] border border-[#B58A43]/30 backdrop-blur-sm transition-transform hover:scale-110 shadow-xs"
                title="Quick preview"
              >
                <Eye className="w-3.5 h-3.5 text-[#B58A43]" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onToggleSave(tour.id)
                }}
                className={`p-2 rounded-full backdrop-blur-sm transition-transform hover:scale-110 shadow-xs border ${
                  isSaved
                    ? 'bg-[#B58A43] text-white border-[#B58A43]'
                    : 'bg-white/90 dark:bg-[#1E1B16]/90 hover:bg-white text-[#302B24] dark:text-[#F5F2EB] border-[#B58A43]/30'
                }`}
                title={isSaved ? 'Remove from saved' : 'Save journey'}
              >
                <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs text-[#B58A43] font-bold uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{tour.route}</span>
            </div>

            <h3
              onClick={handleCardClick}
              className="font-serif text-2xl sm:text-3xl font-semibold text-[#302B24] dark:text-[#F5F2EB] group-hover:text-[#B58A43] transition-colors cursor-pointer leading-tight mb-3"
            >
              {tour.title}
            </h3>

            <p className="font-sans text-xs sm:text-sm text-[#302B24]/75 dark:text-[#E8E2D5]/75 leading-relaxed mb-4 line-clamp-2">
              {tour.summary}
            </p>

            {/* Highlights List with Ethiopian gold diamond bullets */}
            {tour.highlights && (
              <div className="space-y-1.5 mb-6">
                {tour.highlights.slice(0, 3).map((hl, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#302B24]/75 dark:text-[#E8E2D5]/75">
                    <span className="w-1.5 h-1.5 rotate-45 bg-[#B58A43] mt-1.5 shrink-0" />
                    <span className="line-clamp-1">{hl}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Card Footer */}
          <div className="pt-4 border-t border-[#B58A43]/20 flex items-center justify-between">
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-[#302B24]/60 dark:text-[#E8E2D5]/60 font-medium">
                {language === 'am' ? 'የጉዞ ዓይነት' : 'Experience Style'}
              </span>
              <span className="text-xs font-bold text-[#B58A43]">
                {tour.groupType || t('privateTailorMade')}
              </span>
            </div>

            <button
              onClick={handleCardClick}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FAF8F5] dark:bg-[#1E1B16] hover:bg-[#B58A43] hover:text-white text-[#B58A43] border border-[#B58A43]/30 text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
            >
              <span>{t('explore')}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B58A43] group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Default Editorial Vertical Layout
  return (
    <div className="group bg-white dark:bg-[#161411] rounded-3xl overflow-hidden border border-[#B58A43]/25 dark:border-[#B58A43]/30 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full transform hover:-translate-y-1 relative">
      {/* Image Container with Gold Border Accent */}
      <div className="relative h-64 sm:h-72 overflow-hidden cursor-pointer shrink-0 p-2.5 sm:p-3" onClick={handleCardClick}>
        <div className="w-full h-full rounded-2xl overflow-hidden relative border border-[#B58A43]/30">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5">
            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border backdrop-blur-md ${badgeStyle}`}>
              {tour.category}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-white/90 dark:bg-[#1E1B16]/90 backdrop-blur-md text-[#302B24] dark:text-[#F5F2EB] text-[10px] font-bold flex items-center gap-1 border border-[#B58A43]/30">
              <Clock className="w-3 h-3 text-[#B58A43]" />
              {tour.duration}
            </span>
          </div>

          {/* Action Buttons Top Right */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5">
            <button
              onClick={(e) => {
                e.stopPropagation()
                onQuickView(tour)
              }}
              className="p-2 rounded-full bg-white/90 dark:bg-[#1E1B16]/90 hover:bg-white text-[#302B24] dark:text-[#F5F2EB] border border-[#B58A43]/30 backdrop-blur-sm transition-transform hover:scale-110 shadow-xs"
              title="Quick view"
            >
              <Eye className="w-3.5 h-3.5 text-[#B58A43]" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                onToggleSave(tour.id)
              }}
              className={`p-2 rounded-full backdrop-blur-sm transition-transform hover:scale-110 shadow-xs border ${
                isSaved
                  ? 'bg-[#B58A43] text-white border-[#B58A43]'
                  : 'bg-white/90 dark:bg-[#1E1B16]/90 hover:bg-white text-[#302B24] dark:text-[#F5F2EB] border-[#B58A43]/30'
              }`}
              title={isSaved ? 'Remove from saved' : 'Save to wishlist'}
            >
              <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
            </button>
          </div>

          {/* Route pinned at bottom of image */}
          <div className="absolute bottom-3 left-3 right-3 text-[11px] text-white flex items-center gap-1.5 truncate">
            <MapPin className="w-3 h-3 text-[#DDC28D] shrink-0" />
            <span className="truncate drop-shadow-sm font-medium">{tour.route}</span>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3
            onClick={handleCardClick}
            className="font-serif text-xl sm:text-2xl font-semibold text-[#302B24] dark:text-[#F5F2EB] group-hover:text-[#B58A43] transition-colors cursor-pointer leading-snug mb-2 line-clamp-2"
          >
            {tour.title}
          </h3>

          <p className="font-sans text-xs text-[#302B24]/75 dark:text-[#E8E2D5]/75 leading-relaxed line-clamp-3 mb-4">
            {tour.summary}
          </p>

          {/* Highlights */}
          {tour.highlights && (
            <div className="space-y-1.5 mb-5">
              {tour.highlights.slice(0, 2).map((hl, i) => (
                <div key={i} className="flex items-center gap-2 text-[11px] text-[#302B24]/70 dark:text-[#E8E2D5]/70">
                  <span className="w-1.5 h-1.5 rotate-45 bg-[#B58A43] shrink-0" />
                  <span className="truncate">{hl}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-[#B58A43]/20 flex items-center justify-between">
          <div>
            <span className="block text-[9px] uppercase tracking-wider text-[#302B24]/50 dark:text-[#E8E2D5]/50 font-bold">
              {language === 'am' ? 'ደረጃ' : 'Format'}
            </span>
            <span className="text-xs font-bold text-[#B58A43]">
              {t('privateTailorMade')}
            </span>
          </div>

          <button
            onClick={handleCardClick}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FAF8F5] dark:bg-[#1E1B16] hover:bg-[#B58A43] hover:text-white text-[#B58A43] border border-[#B58A43]/30 text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
          >
            <span>{t('explore')}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#B58A43] group-hover:text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}