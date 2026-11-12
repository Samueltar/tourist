import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, MapPin, Mountain, Sun, Calendar, Check, ArrowRight, Compass } from 'lucide-react'
import { destinations, tours } from '../data/tours'
import { useMesob } from '../components/MesobTransition'
import { useLanguage } from '../context/LanguageContext'
import TourCard from '../components/TourCard'
import { TiletBorderPrimary, TiletDivider } from '../components/TiletPatterns'

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
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#0E0D0B] text-[#1A1713] dark:text-[#F5F2EB] pt-24 pb-20 selection:bg-[#B58A43] selection:text-white transition-colors duration-300">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <button
          onClick={() => navigateWithMesob('/destinations')}
          className="flex items-center gap-1.5 text-xs text-[#302B24]/70 dark:text-[#E8E2D5]/70 hover:text-[#B58A43] transition-colors font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{language === 'am' ? 'ወደ ሁሉም መዳረሻዎች ተመለስ' : 'Back to Destinations'}</span>
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

          <div className="absolute bottom-8 left-6 sm:left-10 right-6 sm:right-10 text-white space-y-2">
            <span className="px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#B58A43] text-[10px] font-bold uppercase tracking-wider border border-[#B58A43]/40 shadow-xs inline-block">
              {destination.region} Ethiopia
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
              {destination.name}
            </h1>
            <p className="font-sans text-xs sm:text-sm text-white/85 max-w-2xl font-light leading-relaxed">
              {destination.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Fast Facts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-8 space-y-10">
            {/* Story */}
            <div className="bg-white dark:bg-[#161411] rounded-2xl p-6 sm:p-8 border border-[#B58A43]/20 dark:border-[#B58A43]/30 shadow-sm space-y-4 relative">
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B58A43] font-bold">
                {language === 'am' ? 'ስለ ክልሉ' : 'About The Region'}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1713] dark:text-[#F5F2EB] font-normal">
                {language === 'am' ? 'ባህላዊ እና የተፈጥሮ ቅርስ' : 'Cultural & Natural Heritage'}
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#302B24]/85 dark:text-[#E8E2D5]/85 leading-relaxed whitespace-pre-line font-light">
                {destination.fullDescription || destination.summary}
              </p>
            </div>

            {/* Highlights */}
            {destination.highlights && (
              <div className="bg-white dark:bg-[#161411] rounded-2xl p-6 sm:p-8 border border-[#B58A43]/20 dark:border-[#B58A43]/30 shadow-sm">
                <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B58A43] font-bold">
                  {language === 'am' ? 'የማያመልጡ' : 'Key Highlights'}
                </span>
                <h3 className="font-serif text-2xl text-[#1A1713] dark:text-[#F5F2EB] font-normal mt-1 mb-6">
                  {language === 'am' ? 'በዚህ መዳረሻ የሚገኙ ልዩ ቅርሶች' : 'Notable Sights & Experiences'}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {destination.highlights.map((hl, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF8F5] dark:bg-[#1E1B16] border border-[#B58A43]/20 dark:border-[#B58A43]/30 text-xs text-[#302B24]/85 dark:text-[#E8E2D5]/85"
                    >
                      <Check className="w-4 h-4 text-[#B58A43] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Travel Advisory / Tip */}
            {destination.insiderTip && (
              <div className="bg-[#FAF8F5] dark:bg-[#1E1B16] rounded-2xl p-6 border-l-4 border-[#B58A43] text-xs sm:text-sm text-[#302B24]/85 dark:text-[#E8E2D5]/85 leading-relaxed">
                <strong className="block text-[#1A1713] dark:text-[#F5F2EB] font-serif text-base mb-1">
                  {language === 'am' ? 'የአካባቢው ባለሙያ ምክር' : 'Curator’s Field Advice'}
                </strong>
                {destination.insiderTip}
              </div>
            )}
          </div>

          {/* Fast Facts Sidebar */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-white dark:bg-[#161411] rounded-2xl border border-[#B58A43]/30 p-6 sm:p-7 shadow-xl space-y-5 relative overflow-hidden">
              <span className="text-[10px] uppercase tracking-widest text-[#B58A43] font-bold">
                {language === 'am' ? 'የመዳረሻው መገለጫ' : 'Destination Profile'}
              </span>
              <h3 className="font-serif text-2xl text-[#1A1713] dark:text-[#F5F2EB] font-normal">
                {language === 'am' ? 'አስፈላጊ መረጃዎች' : 'Fast Facts'}
              </h3>

              <div className="space-y-3.5 text-xs text-[#302B24]/80 dark:text-[#E8E2D5]/80 border-t border-[#B58A43]/15 pt-4">
                <div>
                  <span className="block text-[10px] uppercase text-[#302B24]/60 dark:text-[#E8E2D5]/60 font-semibold">{t('altitude')}</span>
                  <span className="font-semibold text-[#1A1713] dark:text-[#F5F2EB] text-sm">{destination.altitude}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-[#302B24]/60 dark:text-[#E8E2D5]/60 font-semibold">{t('bestSeason')}</span>
                  <span className="font-semibold text-[#1A1713] dark:text-[#F5F2EB] text-sm">{destination.bestSeason}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-[#302B24]/60 dark:text-[#E8E2D5]/60 font-semibold">{language === 'am' ? 'ተስማሚ ቀናት' : 'Ideal Length'}</span>
                  <span className="font-semibold text-[#1A1713] dark:text-[#F5F2EB] text-sm">{destination.idealDays || '2 – 4 Days'}</span>
                </div>
                {destination.airport && (
                  <div>
                    <span className="block text-[10px] uppercase text-[#302B24]/60 dark:text-[#E8E2D5]/60 font-semibold">{language === 'am' ? 'አቅራቢያ አየር ማረፊያ' : 'Nearest Airport'}</span>
                    <span className="font-semibold text-[#1A1713] dark:text-[#F5F2EB] text-sm">{destination.airport}</span>
                  </div>
                )}
              </div>

              <button
                onClick={() => navigateWithMesob(`/book?destination=${destination.id}`)}
                className="w-full py-3.5 rounded-xl bg-[#1A1713] dark:bg-[#B58A43] text-white dark:text-[#0E0D0B] font-sans text-xs uppercase tracking-wider font-semibold hover:bg-[#B58A43] dark:hover:bg-[#C49A50] transition-colors flex items-center justify-center gap-2"
              >
                <span>{language === 'am' ? 'ወደዚህ መዳረሻ ጉዞ ይንደፉ' : 'Curate Journey Here'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Connected Tours */}
      {connectedTours.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-16 border-t border-[#B58A43]/20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B58A43] font-bold">
              {language === 'am' ? 'የተገናኙ ጉዞዎች' : 'Featured Routes'}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#1A1713] dark:text-[#F5F2EB] font-normal mt-1">
              {language === 'am' ? `${destination.name}ን የሚያካትቱ ጉዞዎች` : `Journeys That Feature ${destination.name}`}
            </h3>
            <TiletDivider className="w-48 mx-auto text-[#B58A43] pt-2 opacity-60" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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