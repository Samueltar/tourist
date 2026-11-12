import React from 'react'
import { Heart, Clock, MapPin, ArrowRight, Eye, Sparkles } from 'lucide-react'
import { useMesob } from './MesobTransition'

export default function TourCard({
  tour,
  isSaved = false,
  onToggleSave = () => {},
  onQuickView = () => {},
  layout = 'vertical', // 'vertical' | 'horizontal' | 'editorial'
}) {
  const { navigateWithMesob } = useMesob()

  const handleCardClick = () => {
    navigateWithMesob(`/tours/${tour.id}`)
  }

  const categoryColorMap = {
    historical: 'bg-[#173D32] text-[#E9E0D1]',
    wildlife: 'bg-[#284D3C] text-[#F5F0E6]',
    cultural: 'bg-[#B86B48] text-white',
    spiritual: 'bg-[#C3A16A] text-[#173D32]',
    adventure: 'bg-[#9E5536] text-white',
    city: 'bg-[#202622] text-[#E9E0D1]',
    nature: 'bg-[#284D3C] text-[#E9E0D1]',
  }

  const badgeColor = categoryColorMap[tour.category] || 'bg-[#173D32] text-[#E9E0D1]'

  if (layout === 'horizontal') {
    return (
      <div className="group bg-white rounded-2xl overflow-hidden border border-[#C3A16A]/20 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row">
        {/* Image Container */}
        <div className="relative md:w-2/5 h-64 md:h-auto overflow-hidden cursor-pointer" onClick={handleCardClick}>
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

          {/* Badges on Image */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${badgeColor}`}>
              {tour.category}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#F5F0E6] text-[11px] font-semibold flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#C3A16A]" />
              {tour.duration}
            </span>
          </div>

          {/* Quick View and Wishlist Actions */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5">
            <button
              onClick={(e) => {
                e.stopPropagation()
                onQuickView(tour)
              }}
              className="p-2 rounded-full bg-white/80 hover:bg-white text-[#202622] backdrop-blur-sm transition-transform hover:scale-110 shadow"
              title="Quick preview"
            >
              <Eye className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                onToggleSave(tour.id)
              }}
              className={`p-2 rounded-full backdrop-blur-sm transition-transform hover:scale-110 shadow ${
                isSaved ? 'bg-[#B86B48] text-white' : 'bg-white/80 hover:bg-white text-[#202622]'
              }`}
              title={isSaved ? 'Remove from saved' : 'Save journey'}
            >
              <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Content Container */}
        <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs text-[#B86B48] font-semibold uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5" />
              <span className="truncate">{tour.route}</span>
            </div>

            <h3
              onClick={handleCardClick}
              className="font-serif text-2xl sm:text-3xl font-medium text-[#173D32] group-hover:text-[#B86B48] transition-colors cursor-pointer leading-tight mb-3"
            >
              {tour.title}
            </h3>

            <p className="font-sans text-xs sm:text-sm text-[#202622]/80 leading-relaxed mb-4 line-clamp-2">
              {tour.summary}
            </p>

            {/* Highlights List */}
            {tour.highlights && (
              <div className="space-y-1.5 mb-6">
                {tour.highlights.slice(0, 3).map((hl, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#202622]/75">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C3A16A] mt-1.5 shrink-0" />
                    <span className="line-clamp-1">{hl}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Card Footer */}
          <div className="pt-4 border-t border-[#C3A16A]/20 flex items-center justify-between">
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-[#202622]/60">
                Experience Style
              </span>
              <span className="text-xs font-semibold text-[#173D32]">
                {tour.groupType || 'Private Tailor-Made'}
              </span>
            </div>

            <button
              onClick={handleCardClick}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#173D32] hover:bg-[#284D3C] text-[#F5F0E6] text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <span>Explore Itinerary</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C3A16A]" />
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Default Editorial Vertical Layout
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-[#C3A16A]/20 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full transform hover:-translate-y-1">
      {/* Image Container with Badges */}
      <div className="relative h-64 sm:h-72 overflow-hidden cursor-pointer shrink-0" onClick={handleCardClick}>
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${badgeColor}`}>
            {tour.category}
          </span>
          <span className="px-2 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#F5F0E6] text-[10px] font-semibold flex items-center gap-1">
            <Clock className="w-3 h-3 text-[#C3A16A]" />
            {tour.duration}
          </span>
        </div>

        {/* Action Buttons Top Right */}
        <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5">
          <button
            onClick={(e) => {
              e.stopPropagation()
              onQuickView(tour)
            }}
            className="p-2 rounded-full bg-white/80 hover:bg-white text-[#202622] backdrop-blur-sm transition-transform hover:scale-110 shadow"
            title="Quick view"
          >
            <Eye className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onToggleSave(tour.id)
            }}
            className={`p-2 rounded-full backdrop-blur-sm transition-transform hover:scale-110 shadow ${
              isSaved ? 'bg-[#B86B48] text-white' : 'bg-white/80 hover:bg-white text-[#202622]'
            }`}
            title={isSaved ? 'Remove from saved' : 'Save to wishlist'}
          >
            <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Route pinned at bottom of image */}
        <div className="absolute bottom-3 left-3 right-3 text-[11px] text-[#E9E0D1] flex items-center gap-1.5 truncate">
          <MapPin className="w-3 h-3 text-[#C3A16A] shrink-0" />
          <span className="truncate">{tour.route}</span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3
            onClick={handleCardClick}
            className="font-serif text-xl sm:text-2xl font-medium text-[#173D32] group-hover:text-[#B86B48] transition-colors cursor-pointer leading-snug mb-2 line-clamp-2"
          >
            {tour.title}
          </h3>

          <p className="font-sans text-xs text-[#202622]/75 leading-relaxed line-clamp-3 mb-4">
            {tour.summary}
          </p>

          {/* Highlights */}
          {tour.highlights && (
            <div className="space-y-1.5 mb-5">
              {tour.highlights.slice(0, 2).map((hl, i) => (
                <div key={i} className="flex items-center gap-2 text-[11px] text-[#202622]/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C3A16A] shrink-0" />
                  <span className="truncate">{hl}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-[#C3A16A]/20 flex items-center justify-between">
          <div>
            <span className="block text-[9px] uppercase tracking-wider text-[#202622]/60">
              Curation
            </span>
            <span className="text-xs font-semibold text-[#173D32]">
              100% Private
            </span>
          </div>

          <button
            onClick={handleCardClick}
            className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-[#173D32] hover:bg-[#284D3C] text-[#F5F0E6] text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            <span>Explore</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C3A16A]" />
          </button>
        </div>
      </div>
    </div>
  )
}
