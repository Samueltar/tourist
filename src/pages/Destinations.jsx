import React, { useState } from 'react'
import { MapPin, Compass, ArrowRight, Grid, Map } from 'lucide-react'
import { destinations } from '../data/tours'
import { useMesob } from '../components/MesobTransition'
import { useLanguage } from '../context/LanguageContext'
import { TiletBorderPrimary, TiletDivider } from '../components/TiletPatterns'
import EthiopiaMap from '../components/EthiopiaMap'

export default function Destinations() {
  const { navigateWithMesob } = useMesob()
  const { t, language } = useLanguage()
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [viewMode, setViewMode] = useState('grid') // 'grid' | 'map'

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
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#0E0D0B] text-[#1A1713] dark:text-[#F5F2EB] pt-24 sm:pt-28 pb-20 selection:bg-[#B58A43] selection:text-white transition-colors duration-300">
      {/* Editorial Header */}
      <div className="relative bg-gradient-to-b from-[#F3EEE5] to-[#FAF8F5] dark:from-[#161410] dark:to-[#0E0D0B] border-b border-[#B58A43]/20 py-14 sm:py-18 overflow-hidden">
        <TiletBorderPrimary className="absolute top-0 left-0 right-0 w-full text-[#B58A43] opacity-60" height={10} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 dark:bg-[#1A1814] border border-[#B58A43]/30 text-[#B58A43] text-[11px] font-sans font-bold uppercase tracking-[0.25em] shadow-sm">
            <span>{t('destHeaderEyebrow')}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#1A1713] dark:text-[#F5F2EB] tracking-tight">
            {language === 'am' ? 'የኢትዮጵያ ድንቅ' : 'Cultural Landscapes of'}{' '}
            <span className="italic font-normal text-[#B58A43]">
              {language === 'am' ? 'መዳረሻዎች' : 'Ethiopia'}
            </span>
          </h1>

          <p className="font-sans text-xs sm:text-sm text-[#302B24]/75 dark:text-[#D1C7BA] max-w-xl mx-auto font-light leading-relaxed">
            {t('destSubtitle')}
          </p>

          <TiletDivider className="w-48 mx-auto text-[#B58A43] pt-1 opacity-70" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Controls Card: Region Filter Bar + View Mode Toggle */}
        <div className="bg-white dark:bg-[#161410] rounded-2xl shadow-md border border-[#B58A43]/25 p-4 flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Region Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {regions.map((reg) => (
              <button
                key={reg.id}
                onClick={() => {
                  setSelectedRegion(reg.id)
                  if (viewMode === 'map') setViewMode('grid')
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-sans uppercase tracking-wider font-semibold transition-all ${
                  selectedRegion === reg.id && viewMode === 'grid'
                    ? 'bg-[#B58A43] text-white shadow-xs'
                    : 'bg-[#FAF8F5] dark:bg-[#1A1814] border border-[#B58A43]/20 text-[#302B24]/80 dark:text-[#D1C7BA] hover:border-[#B58A43]'
                }`}
              >
                {reg.label}
              </button>
            ))}
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-1 p-1 bg-[#FAF8F5] dark:bg-[#1A1814] rounded-xl border border-[#B58A43]/25 shrink-0">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-sans uppercase tracking-wider font-semibold transition-all ${
                viewMode === 'grid'
                  ? 'bg-white dark:bg-[#25221C] text-[#1A1713] dark:text-[#F5F2EB] shadow-xs border border-[#B58A43]/30'
                  : 'text-[#302B24]/65 dark:text-[#9E9382] hover:text-[#1A1713]'
              }`}
            >
              <Grid className="w-3.5 h-3.5 text-[#B58A43]" />
              <span>{language === 'am' ? 'ካርዶች' : 'Cards'}</span>
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-sans uppercase tracking-wider font-semibold transition-all ${
                viewMode === 'map'
                  ? 'bg-white dark:bg-[#25221C] text-[#1A1713] dark:text-[#F5F2EB] shadow-xs border border-[#B58A43]/30'
                  : 'text-[#302B24]/65 dark:text-[#9E9382] hover:text-[#1A1713]'
              }`}
            >
              <Map className="w-3.5 h-3.5 text-[#B58A43]" />
              <span>{language === 'am' ? 'ካርታ' : 'Map View'}</span>
            </button>
          </div>
        </div>

        {/* View Mode: Map or Grid */}
        {viewMode === 'map' ? (
          <div className="mt-8 animate-fade-in">
            <EthiopiaMap />
          </div>
        ) : (
          /* Clean & Calm Destination Cards Grid */
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredDestinations.map((dest) => (
              <div
                key={dest.id}
                onClick={() => navigateWithMesob(`/destinations/${dest.id}`)}
                className="group bg-white dark:bg-[#161410] rounded-2xl overflow-hidden border border-[#B58A43]/25 shadow-sm hover:shadow-lg transition-all duration-500 cursor-pointer flex flex-col transform hover:-translate-y-1"
              >
                {/* Image Container with Crisp Altitude & Region Overlay */}
                <div className="relative h-60 sm:h-64 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-[#1A1814]/90 backdrop-blur-md text-[#1A1713] dark:text-[#F5F2EB] text-[10px] font-bold uppercase tracking-wider border border-[#B58A43]/40 shadow-xs">
                      {dest.region}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase tracking-widest text-[#DDC28D] font-medium block">
                      {dest.tagline}
                    </span>
                    <h3 className="font-serif text-2xl font-normal text-white group-hover:text-[#DDC28D] transition-colors">
                      {dest.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <p className="font-sans text-xs text-[#302B24]/75 dark:text-[#D1C7BA] leading-relaxed line-clamp-2 font-light">
                    {dest.summary}
                  </p>

                  {/* Fast Facts Bar */}
                  <div className="bg-[#FAF8F5] dark:bg-[#1A1814] rounded-xl p-2.5 border border-[#B58A43]/20 space-y-1 text-[11px] text-[#302B24]/80 dark:text-[#D1C7BA]">
                    <div className="flex items-center justify-between">
                      <span className="text-[#302B24]/60 dark:text-[#8C806E]">{t('altitude')}:</span>
                      <span className="font-semibold text-[#1A1713] dark:text-[#F5F2EB]">{dest.altitude}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#302B24]/60 dark:text-[#8C806E]">{t('bestSeason')}:</span>
                      <span className="font-semibold text-[#1A1713] dark:text-[#F5F2EB] truncate max-w-[160px]">{dest.bestTimeToVisit}</span>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-2 border-t border-[#B58A43]/15 flex items-center justify-between text-xs text-[#B58A43] font-bold uppercase tracking-wider group-hover:text-[#9E7432]">
                    <span>{language === 'am' ? 'ክልሉን ያስሱ' : 'Explore Region'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
