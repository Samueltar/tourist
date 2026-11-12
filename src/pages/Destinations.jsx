import React, { useState } from 'react'
import { MapPin, Compass, ArrowRight, Mountain, Sun, CloudRain } from 'lucide-react'
import { destinations } from '../data/tours'
import { useMesob } from '../components/MesobTransition'

export default function Destinations() {
  const { navigateWithMesob } = useMesob()
  const [selectedRegion, setSelectedRegion] = useState('all')

  const regions = [
    { id: 'all', label: 'All Regions' },
    { id: 'north', label: 'The High North' },
    { id: 'south', label: 'The Deep South' },
    { id: 'east', label: 'The Historic East' },
    { id: 'central', label: 'Central Capital' },
  ]

  const filteredDestinations = selectedRegion === 'all'
    ? destinations
    : destinations.filter((d) => d.region.toLowerCase() === selectedRegion.toLowerCase())

  return (
    <div className="min-h-screen bg-[#F5F0E6] text-[#202622] pt-24 sm:pt-28 pb-20 selection:bg-[#B86B48] selection:text-white">
      {/* Editorial Header */}
      <div className="bg-[#173D32] text-[#F5F0E6] py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#C3A16A] font-semibold">
            Geographic & Cultural Diversity
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight">
            Ethiopian <span className="italic font-normal text-[#C3A16A]">Destinations</span>
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#E9E0D1]/85 max-w-2xl mx-auto font-light leading-relaxed">
            From the 4,500-meter peaks of the Simien range to the mineral terraces of Danakil, 
            explore ten distinct destinations shaping the history and spirit of Ethiopia.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Region Filter Bar */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#C3A16A]/30 p-4 sm:p-5 flex flex-wrap items-center justify-center gap-2">
          {regions.map((reg) => (
            <button
              key={reg.id}
              onClick={() => setSelectedRegion(reg.id)}
              className={`px-5 py-2 rounded-full text-xs font-sans uppercase tracking-wider font-semibold transition-all ${
                selectedRegion === reg.id
                  ? 'bg-[#173D32] text-[#F5F0E6] shadow'
                  : 'bg-[#F5F0E6] text-[#202622]/70 hover:bg-[#E9E0D1] hover:text-[#173D32]'
              }`}
            >
              {reg.label}
            </button>
          ))}
        </div>

        {/* Destination Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              onClick={() => navigateWithMesob(`/destinations/${dest.id}`)}
              className="group bg-white rounded-2xl overflow-hidden border border-[#C3A16A]/20 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col transform hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#C3A16A] text-[10px] font-bold uppercase tracking-wider border border-[#C3A16A]/40">
                    {dest.region}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-[#E9E0D1]/80 font-semibold">
                    {dest.tagline}
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-white group-hover:text-[#C3A16A] transition-colors mt-0.5">
                    {dest.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="font-sans text-xs text-[#202622]/80 leading-relaxed line-clamp-3 mb-4">
                    {dest.summary}
                  </p>

                  {/* Fast Facts Bar */}
                  <div className="bg-[#F5F0E6]/60 rounded-xl p-3 border border-[#C3A16A]/20 space-y-1 text-[11px] text-[#202622]/75 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[#202622]/60">Altitude:</span>
                      <span className="font-semibold text-[#173D32]">{dest.altitude}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#202622]/60">Best Season:</span>
                      <span className="font-semibold text-[#173D32] truncate max-w-[170px]">{dest.bestTimeToVisit}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  {dest.highlights && (
                    <div className="space-y-1.5 mb-4">
                      {dest.highlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="flex items-center gap-2 text-[11px] text-[#202622]/70">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C3A16A] shrink-0" />
                          <span className="truncate">{hl}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer action */}
                <div className="pt-4 border-t border-[#C3A16A]/20 flex items-center justify-between text-xs text-[#B86B48] font-semibold">
                  <span>Explore Region</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
