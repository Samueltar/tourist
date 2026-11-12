import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, MapPin, Mountain, Sun, Calendar, Check, ArrowRight, Compass } from 'lucide-react'
import { destinations, tours } from '../data/tours'
import { useMesob } from '../components/MesobTransition'
import TourCard from '../components/TourCard'

export default function DestinationDetail({
  savedTourIds = [],
  onToggleSaveTour = () => {},
  onSelectTourModal = () => {},
}) {
  const { id } = useParams()
  const { navigateWithMesob } = useMesob()

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
    <div className="min-h-screen bg-[#F5F0E6] text-[#202622] pt-24 pb-20 selection:bg-[#B86B48] selection:text-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <button
          onClick={() => navigateWithMesob('/destinations')}
          className="flex items-center gap-1.5 text-xs text-[#202622]/60 hover:text-[#173D32] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Destinations</span>
        </button>
      </div>

      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        <div className="relative h-80 sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-[#C3A16A]/30">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#173D32] via-[#173D32]/30 to-black/40" />

          {/* Overlay Content */}
          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 text-white max-w-3xl">
            <span className="px-3 py-1 rounded-full bg-[#C3A16A] text-[#173D32] text-[10px] font-bold uppercase tracking-wider">
              {destination.region} Ethiopia
            </span>
            <span className="block font-sans text-xs sm:text-sm uppercase tracking-[0.25em] text-[#E9E0D1] mt-2 font-light">
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
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#C3A16A]/20 shadow-sm space-y-4">
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B86B48] font-bold">
                About The Region
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#173D32] font-medium">
                Cultural & Natural Heritage
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#202622]/85 leading-relaxed whitespace-pre-line">
                {destination.fullDescription || destination.summary}
              </p>
            </div>

            {/* Highlights */}
            {destination.highlights && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#C3A16A]/20 shadow-sm">
                <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B86B48] font-bold">
                  What to Discover
                </span>
                <h3 className="font-serif text-2xl text-[#173D32] font-medium mt-1 mb-6">
                  Key Experiences & Landmarks
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {destination.highlights.map((hl, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F5F0E6]/50 border border-[#C3A16A]/20 text-xs text-[#202622]/85"
                    >
                      <Check className="w-4 h-4 text-[#B86B48] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery Mosaic */}
            {destination.gallery && destination.gallery.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-[#173D32] font-medium">
                  Perspectives & Landscapes
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {destination.gallery.map((img, i) => (
                    <div key={i} className="h-60 rounded-2xl overflow-hidden border border-[#C3A16A]/20 shadow-sm">
                      <img src={img} alt={`${destination.name} landscape ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Fast Facts Sidebar */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-white rounded-2xl border border-[#C3A16A]/30 p-6 sm:p-7 shadow-xl space-y-5">
              <span className="text-[10px] uppercase tracking-widest text-[#B86B48] font-bold">
                Destination Profile
              </span>
              <h3 className="font-serif text-2xl text-[#173D32] font-medium">
                Fast Facts
              </h3>

              <div className="space-y-3.5 text-xs text-[#202622]/80 border-t border-[#C3A16A]/20 pt-4">
                <div>
                  <span className="block text-[10px] uppercase text-[#202622]/60">Altitude</span>
                  <span className="font-semibold text-[#173D32] text-sm">{destination.altitude}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-[#202622]/60">Best Time to Visit</span>
                  <span className="font-semibold text-[#173D32]">{destination.bestTimeToVisit}</span>
                </div>
                {destination.climate && (
                  <div>
                    <span className="block text-[10px] uppercase text-[#202622]/60">Climate</span>
                    <span className="font-semibold text-[#173D32] leading-snug">{destination.climate}</span>
                  </div>
                )}
                <div>
                  <span className="block text-[10px] uppercase text-[#202622]/60">Region</span>
                  <span className="font-semibold text-[#173D32]">{destination.region} Ethiopia</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigateWithMesob(`/book?destination=${destination.id}`)}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#B86B48] to-[#9E5536] hover:from-[#c2734f] hover:to-[#B86B48] text-white font-sans text-xs uppercase tracking-widest font-bold shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Plan Trip to {destination.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connected Curated Journeys */}
      {connectedTours.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-16 border-t border-[#C3A16A]/20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B86B48] font-bold">
              Itineraries Visiting Here
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#173D32] font-medium mt-1">
              Journeys Exploring {destination.name}
            </h3>
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
