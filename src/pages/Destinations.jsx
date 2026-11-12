import React, { useState } from 'react'
import { MapPin, Compass, ArrowRight, Mountain, Sun, CloudRain } from 'lucide-react'
import { destinations } from '../data/tours'
import { useMesob } from '../components/MesobTransition'
import { useLanguage } from '../context/LanguageContext'
import { TiletBorderPrimary, TiletDivider, TiletCorner } from '../components/TiletPatterns'

export default function Destinations() {
  const { navigateWithMesob } = useMesob()
  const { t, language } = useLanguage()
  const [selectedRegion, setSelectedRegion] = useState('all')

  const regions = [
    { id: 'all', label: t('allRegions') },
    { id: 'north', label: t('theNorth') },
    { id: 'south', label: t('theSouth') },
    { id: 'east', label: t('theEast') },
    { id: 'central', label: t('central') },
  ]

  const filteredDestinations = selectedRegion === 'all'
    ? destinations
    : destinations.filter((d) => d.region.toLowerCase() === selectedRegion.toLowerCase())

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1713] pt-24 sm:pt-28 pb-20 selection:bg-[#B58A43] selection:text-white">
      {/* Editorial Header with Ethiopian Tilet Accents */}
      <div className="relative bg-gradient-to-b from-[#F3EEE5] to-[#FAF8F5] border-b border-[#B58A43]/20 py-16 sm:py-20 overflow-hidden">
        <TiletBorderPrimary className="absolute top-0 left-0 right-0 w-full text-[#B58A43] opacity-60" height={10} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#B58A43]/30 text-[#B58A43] text-[11px] font-sans font-bold uppercase tracking-[0.25em] shadow-sm">
            <span>{t('destHeaderEyebrow')}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1A1713] tracking-tight">
            {language === 'am' ? 'የኢትዮጵያ ድንቅ' : 'Ethiopian'}{' '}
            <span className="italic font-light text-[#B58A43]">
              {language === 'am' ? 'መዳረሻዎች' : 'Destinations'}
            </span>
          </h1>

          <p className="font-sans text-xs sm:text-sm text-[#302B24]/80 max-w-2xl mx-auto font-light leading-relaxed">
            {t('destSubtitle')}
          </p>

          <TiletDivider className="w-56 mx-auto text-[#B58A43] pt-2 opacity-75" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Region Filter Bar */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#B58A43]/25 p-4 sm:p-5 flex flex-wrap items-center justify-center gap-2 relative">
          {regions.map((reg) => (
            <button
              key={reg.id}
              onClick={() => setSelectedRegion(reg.id)}
              className={`px-5 py-2 rounded-full text-xs font-sans uppercase tracking-wider font-semibold transition-all ${
                selectedRegion === reg.id
                  ? 'bg-[#1A1713] text-[#FAF8F5] shadow'
                  : 'bg-[#FAF8F5] border border-[#B58A43]/20 text-[#302B24]/80 hover:bg-[#EFE7D9] hover:text-[#1A1713]'
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
              className="group bg-white rounded-2xl overflow-hidden border border-[#B58A43]/25 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col transform hover:-translate-y-1 relative"
            >
              <TiletCorner position="top-right" className="text-[#B58A43]/30 pointer-events-none z-10" size={24} />

              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#1A1713] text-[10px] font-bold uppercase tracking-wider border border-[#B58A43]/40 shadow-sm">
                    {dest.region}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-[#DDC28D] font-medium">
                    {dest.tagline}
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-white group-hover:text-[#DDC28D] transition-colors mt-0.5">
                    {dest.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="font-sans text-xs text-[#302B24]/80 leading-relaxed line-clamp-3 mb-4 font-light">
                    {dest.summary}
                  </p>

                  {/* Fast Facts Bar */}
                  <div className="bg-[#FAF8F5] rounded-xl p-3 border border-[#B58A43]/20 space-y-1.5 text-[11px] text-[#302B24]/80 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[#302B24]/60">{t('altitude')}:</span>
                      <span className="font-semibold text-[#1A1713]">{dest.altitude}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#302B24]/60">{t('bestSeason')}:</span>
                      <span className="font-semibold text-[#1A1713] truncate max-w-[170px]">{dest.bestTimeToVisit}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  {dest.highlights && (
                    <div className="space-y-1.5 mb-4">
                      {dest.highlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="flex items-center gap-2 text-[11px] text-[#302B24]/75">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B58A43] shrink-0" />
                          <span className="truncate">{hl}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer action */}
                <div className="pt-4 border-t border-[#B58A43]/15 flex items-center justify-between text-xs text-[#B58A43] font-bold uppercase tracking-wider group-hover:text-[#916B2D]">
                  <span>{language === 'am' ? 'ክልሉን ያስሱ' : 'Explore Region'}</span>
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
