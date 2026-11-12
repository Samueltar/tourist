import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, MapPin, Mountain, Sun, Calendar, Check, ArrowRight, Compass } from 'lucide-react'
import { destinations, tours } from '../data/tours'
import { useMesob } from '../components/MesobTransition'
import { useLanguage } from '../context/LanguageContext'
import TourCard from '../components/TourCard'
import { TiletBorderPrimary, TiletDivider, TiletCorner } from '../components/TiletPatterns'

export default function DestinationDetail({
  savedTourIds = [],
  onToggleSaveTour = () => {},
  onSelectTourModal = () => {},
}) {
  const { id } = useParams()
  const { navigateWithMesob } = useMesob()
  const { t, language } = useLanguage()

  const destination = destinations.find((d) => d.id === id)

  if (!destination) {
    return <Navigate to="/destinations" replace />
  }

  // Find all tours connected to this destination
  const connectedTours = tours.filter((t) => {
    if (destination.connectedTourIds?.includes(t.id)) return true
    return t.route?.toLowerCase().includes(destination.name.toLowerCase())
  })

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1713] pt-24 pb-20 selection:bg-[#B58A43] selection:text-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <button
          onClick={() => navigateWithMesob('/destinations')}
          className="flex items-center gap-1.5 text-xs text-[#302B24]/70 hover:text-[#B58A43] transition-colors font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{language === 'am' ? 'ወደ ሁሉም መዳረሻዎች ተመለስ' : 'Back to All Destinations'}</span>
        </button>
      </div>

      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        <div className="relative h-80 sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-[#B58A43]/30">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/30" />

          {/* Overlay Content */}
          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 text-white max-w-3xl">
            <span className="px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#1A1713] text-[10px] font-bold uppercase tracking-wider border border-[#B58A43]/40 shadow-sm">
              {destination.region} {language === 'am' ? 'ኢትዮጵያ' : 'Ethiopia'}
            </span>
            <span className="block font-sans text-xs sm:text-sm uppercase tracking-[0.25em] text-[#DDC28D] mt-3 font-medium">
              {destination.tagline}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white leading-tight mt-1">
              {destination.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Narrative & Fast Facts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-8 space-y-10">
            {/* Story */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#B58A43]/20 shadow-sm space-y-4 relative">
              <TiletCorner position="top-right" className="text-[#B58A43]/25 pointer-events-none" size={26} />
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B58A43] font-bold">
                {language === 'am' ? 'ስለ ክልሉ' : 'About The Region'}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1713] font-normal">
                {language === 'am' ? 'ባህላዊ እና የተፈጥሮ ቅርስ' : 'Cultural & Natural Heritage'}
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#302B24]/85 leading-relaxed whitespace-pre-line font-light">
                {destination.fullDescription || destination.summary}
              </p>
            </div>

            {/* Highlights */}
            {destination.highlights && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#B58A43]/20 shadow-sm">
                <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B58A43] font-bold">
                  {language === 'am' ? 'የሚጎበኙ ቦታዎች' : 'What to Discover'}
                </span>
                <h3 className="font-serif text-2xl text-[#1A1713] font-normal mt-1 mb-6">
                  {language === 'am' ? 'ዋና ዋና መስህቦችና ቅርሶች' : 'Key Experiences & Landmarks'}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {destination.highlights.map((hl, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF8F5] border border-[#B58A43]/20 text-xs text-[#302B24]/85"
                    >
                      <Check className="w-4 h-4 text-[#B58A43] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery Mosaic */}
            {destination.gallery && destination.gallery.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-[#1A1713] font-normal">
                  {language === 'am' ? 'የመልክዓ ምድሩ ምስሎች' : 'Perspectives & Landscapes'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {destination.gallery.map((img, i) => (
                    <div key={i} className="h-60 rounded-2xl overflow-hidden border border-[#B58A43]/20 shadow-sm">
                      <img src={img} alt={`${destination.name} landscape ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Fast Facts Sidebar */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-white rounded-2xl border border-[#B58A43]/30 p-6 sm:p-7 shadow-xl space-y-5 relative overflow-hidden">
              <TiletCorner position="top-right" className="text-[#B58A43]/30 pointer-events-none" size={26} />
              
              <span className="text-[10px] uppercase tracking-widest text-[#B58A43] font-bold">
                {language === 'am' ? 'የመዳረሻው መገለጫ' : 'Destination Profile'}
              </span>
              <h3 className="font-serif text-2xl text-[#1A1713] font-normal">
                {language === 'am' ? 'አስፈላጊ መረጃዎች' : 'Fast Facts'}
              </h3>

              <div className="space-y-3.5 text-xs text-[#302B24]/80 border-t border-[#B58A43]/15 pt-4">
                <div>
                  <span className="block text-[10px] uppercase text-[#302B24]/60 font-semibold">{t('altitude')}</span>
                  <span className="font-semibold text-[#1A1713] text-sm">{destination.altitude}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-[#302B24]/60 font-semibold">{t('bestSeason')}</span>
                  <span className="font-semibold text-[#1A1713]">{destination.bestTimeToVisit}</span>
                </div>
                {destination.climate && (
                  <div>
                    <span className="block text-[10px] uppercase text-[#302B24]/60 font-semibold">{language === 'am' ? 'የአየር ሁኔታ' : 'Climate'}</span>
                    <span className="font-semibold text-[#1A1713] leading-snug">{destination.climate}</span>
                  </div>
                )}
                <div>
                  <span className="block text-[10px] uppercase text-[#302B24]/60 font-semibold">{language === 'am' ? 'ክልል' : 'Region'}</span>
                  <span className="font-semibold text-[#1A1713]">{destination.region} {language === 'am' ? 'ኢትዮጵያ' : 'Ethiopia'}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigateWithMesob(`/book?destination=${destination.id}`)}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#B58A43] to-[#916B2D] hover:from-[#C49A50] hover:to-[#B58A43] text-white font-sans text-xs uppercase tracking-widest font-bold shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>{language === 'am' ? `ወደ ${destination.name} ጉዞ ይጀምሩ` : `Plan Trip to ${destination.name}`}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connected Curated Journeys */}
      {connectedTours.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-16 border-t border-[#B58A43]/20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B58A43] font-bold">
              {language === 'am' ? 'ይህንን ቦታ የሚያካትቱ ጉዞዎች' : 'Itineraries Visiting Here'}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#1A1713] font-normal mt-1">
              {language === 'am' ? `${destination.name}ን የሚያስሱ ጉዞዎች` : `Journeys Exploring ${destination.name}`}
            </h3>
            <TiletDivider className="w-48 mx-auto text-[#B58A43] pt-2 opacity-60" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {connectedTours.map((t) => (
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
      )}
    </div>
  )
}
