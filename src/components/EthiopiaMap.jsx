import React, { useState } from 'react'
import { MapPin, ArrowRight, Compass, Sparkles } from 'lucide-react'
import { destinations } from '../data/tours'
import { useMesob } from './MesobTransition'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { TiletBorderPrimary, TiletCorner, TiletMotif } from './TiletPatterns'

export default function EthiopiaMap() {
  const { navigateWithMesob } = useMesob()
  const { t, language } = useLanguage()
  const { isDark } = useTheme()
  const [activePin, setActivePin] = useState(destinations[1]) // Default Lalibela
  const [activeCircuit, setActiveCircuit] = useState('all')

  const pinCoordinates = {
    'addis-ababa': { x: 400, y: 345, label: 'Addis Ababa (Capital)', circuit: 'all' },
    'lalibela': { x: 425, y: 220, label: 'Lalibela (Rock Churches)', circuit: 'north' },
    'gondar': { x: 350, y: 205, label: 'Gondar (Royal Castles)', circuit: 'north' },
    'simien-mountains': { x: 375, y: 175, label: 'Simien Mountains (4,550m)', circuit: 'north' },
    'bahir-dar': { x: 340, y: 250, label: 'Bahir Dar & Lake Tana', circuit: 'north' },
    'bale-mountains': { x: 460, y: 440, label: 'Bale Mountains (Wolf Sanctuary)', circuit: 'south' },
    'arba-minch': { x: 365, y: 490, label: 'Arba Minch & Rift Lakes', circuit: 'south' },
    'omo-valley': { x: 310, y: 550, label: 'Lower Omo Valley Tribes', circuit: 'south' },
    'harar': { x: 560, y: 340, label: 'Harar Jugol (Walled City)', circuit: 'east' },
    'afar': { x: 520, y: 210, label: 'Danakil Depression & Erta Ale', circuit: 'east' },
  }

  return (
    <div className="bg-[#FAF8F5] text-[#302B24] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#B58A43]/30 shadow-xl overflow-hidden relative">
      {/* Corner Tilet Ornaments */}
      <div className="absolute top-3 left-3 pointer-events-none opacity-40">
        <TiletCorner position="top-left" className="w-8 h-8 text-[#B58A43]" />
      </div>
      <div className="absolute top-3 right-3 pointer-events-none opacity-40">
        <TiletCorner position="top-right" className="w-8 h-8 text-[#B58A43]" />
      </div>

      {/* Header Bar */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 relative z-10 border-b border-[#B58A43]/20 pb-6">
        <div>
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B58A43] font-bold flex items-center gap-2">
            <Compass className="w-4 h-4" />
            <span>{language === 'am' ? 'የኢትዮጵያ በይነ-መረብ ካርታ' : 'Interactive Expedition Map'}</span>
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-[#302B24] font-light mt-1">
            {language === 'am' ? (
              <>የአፍሪካ ቀንድ <span className="italic font-normal text-[#B58A43]">መልክዓ-ምድር</span></>
            ) : (
              <>The Geography of the <span className="italic font-normal text-[#B58A43]">Horn</span></>
            )}
          </h3>
          <p className="font-sans text-xs sm:text-sm text-[#302B24]/75 max-w-xl mt-1 font-light">
            {language === 'am'
              ? 'መዳረሻዎችን በካርታው ላይ በመጫን ዝርዝር መረጃዎችን፣ ከፍታን እና ተያያዥ ጉዞዎችን ይመርምሩ።'
              : 'Click any pin to inspect the topography, altitude, and connected journeys across the highlands, deserts, and valleys.'}
          </p>
        </div>

        {/* Circuit Filters */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-white rounded-full border border-[#B58A43]/30 text-xs shadow-xs">
          {[
            { id: 'all', label: language === 'am' ? 'ሁሉም መስመሮች' : 'All Circuits' },
            { id: 'north', label: language === 'am' ? 'የሰሜኑ መስመር' : 'Northern Kingdoms' },
            { id: 'south', label: language === 'am' ? 'የደቡቡ ስምጥ ሸለቆ' : 'Southern Rift & Omo' },
            { id: 'east', label: language === 'am' ? 'የምሥራቁ በርሃ' : 'Eastern Desert' },
          ].map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCircuit(c.id)}
              className={`px-3.5 py-1.5 rounded-full font-sans uppercase tracking-wider text-[11px] font-bold transition-all ${
                activeCircuit === c.id
                  ? 'bg-[#B58A43] text-white shadow-xs'
                  : 'text-[#302B24]/70 hover:text-[#B58A43]'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Map + Spotlight Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left: The Interactive SVG Map on White/Cream Surface */}
        <div className="lg:col-span-7 relative bg-white rounded-2xl p-4 sm:p-6 border border-[#B58A43]/25 shadow-sm">
          <svg
            viewBox="0 0 800 650"
            className="w-full h-auto drop-shadow-sm select-none"
            aria-label="Interactive Map of Ethiopia"
          >
            {/* Ethiopian Boundary Contour */}
            <path
              d="M 280 140
                 C 320 100, 420 110, 480 130
                 C 540 150, 620 190, 680 270
                 C 740 350, 770 420, 700 480
                 C 630 540, 540 580, 470 590
                 C 400 600, 320 620, 260 570
                 C 200 520, 180 440, 200 360
                 C 220 280, 240 180, 280 140 Z"
              fill={isDark ? '#181612' : '#F8F5EE'}
              stroke="#B58A43"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            {/* Highland Plateau Shaded Mass (The Roof of Africa) */}
            <path
              d="M 330 180
                 C 380 160, 440 170, 470 230
                 C 500 290, 480 380, 440 430
                 C 400 480, 350 460, 330 390
                 C 310 320, 290 220, 330 180 Z"
              fill={isDark ? '#242019' : '#EFE7D9'}
              stroke="#B58A43"
              strokeWidth="1.5"
            />

            {/* Great Rift Valley Trench Line */}
            <path
              d="M 540 190 Q 420 340 330 560"
              fill="none"
              stroke="#B86B48"
              strokeWidth="2"
              strokeDasharray="6 4"
              opacity="0.8"
            />
            <text x="545" y="195" fill="#B86B48" fontSize="10" fontFamily="sans-serif" letterSpacing="2" fontWeight="bold">
              GREAT RIFT VALLEY
            </text>

            {/* Connecting Circuit Routes */}
            {(activeCircuit === 'all' || activeCircuit === 'north') && (
              <path
                d="M 400 345 L 340 250 L 350 205 L 375 175 L 425 220 Z"
                fill="none"
                stroke="#B58A43"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-pulse"
              />
            )}

            {(activeCircuit === 'all' || activeCircuit === 'south') && (
              <path
                d="M 400 345 L 460 440 L 365 490 L 310 550"
                fill="none"
                stroke="#B58A43"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="5 3"
              />
            )}

            {(activeCircuit === 'all' || activeCircuit === 'east') && (
              <path
                d="M 400 345 L 560 340 M 400 345 L 520 210"
                fill="none"
                stroke="#B58A43"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="5 3"
              />
            )}

            {/* Destination Pinpoints */}
            {destinations.map((dest) => {
              const coords = pinCoordinates[dest.id]
              if (!coords) return null

              const isHighlighted =
                activeCircuit === 'all' ||
                coords.circuit === 'all' ||
                coords.circuit === activeCircuit

              const isSelected = activePin?.id === dest.id

              return (
                <g
                  key={dest.id}
                  transform={`translate(${coords.x}, ${coords.y})`}
                  onClick={() => setActivePin(dest)}
                  className="cursor-pointer group"
                >
                  {/* Ping Animation on Selected Pin */}
                  {isSelected && (
                    <circle
                      r="16"
                      fill="#B58A43"
                      fillOpacity="0.25"
                      className="animate-ping origin-center"
                    />
                  )}

                  {/* Outer circle */}
                  <circle
                    r={isSelected ? '9' : '6'}
                    fill={isSelected ? '#B58A43' : '#DDC28D'}
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    className="transition-all duration-300 group-hover:scale-125"
                    opacity={isHighlighted ? 1 : 0.35}
                  />

                  {/* Center Dot */}
                  <circle
                    r="2.5"
                    fill="#302B24"
                    opacity={isHighlighted ? 1 : 0.35}
                  />

                  {/* Label */}
                  <text
                    x="12"
                    y="4"
                    fill={isSelected ? '#B58A43' : '#302B24'}
                    fontSize={isSelected ? '12' : '10'}
                    fontWeight={isSelected ? 'bold' : '600'}
                    fontFamily="serif"
                    letterSpacing="0.5"
                    className="select-none transition-all group-hover:fill-[#B58A43]"
                    opacity={isHighlighted ? 1 : 0.4}
                  >
                    {dest.name}
                  </text>
                </g>
              )
            })}
          </svg>

          {/* Map Legend */}
          <div className="mt-4 flex flex-wrap items-center justify-between text-[11px] text-[#302B24]/70 border-t border-[#B58A43]/20 pt-3">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B58A43]" />
                <span className="font-semibold">{language === 'am' ? 'የተመረጠ መዳረሻ' : 'Selected Destination'}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DDC28D]" />
                <span>{language === 'am' ? 'የቅርስ ስፍራ' : 'Heritage Site'}</span>
              </span>
            </div>
            <span className="italic text-[#B58A43] font-medium">
              {language === 'am' ? 'አዲስ አበባ ዋናው የበረራ ማዕከል ናት' : 'Addis Ababa is central flight hub'}
            </span>
          </div>
        </div>

        {/* Right: Selected Destination Spotlight Card */}
        <div className="lg:col-span-5">
          {activePin ? (
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#B58A43]/40 shadow-lg space-y-5 animate-scale-in relative">
              {/* Corner Ornament */}
              <div className="absolute top-2 right-2 pointer-events-none opacity-30">
                <TiletCorner position="top-right" className="w-6 h-6 text-[#B58A43]" />
              </div>

              {/* Destination Image & Badge */}
              <div className="relative h-44 rounded-2xl overflow-hidden border border-[#B58A43]/30">
                <img
                  src={activePin.image}
                  alt={activePin.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/90 text-[#B58A43] text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border border-[#B58A43]/30">
                    {activePin.region} Circuit
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-[#DDC28D] block font-semibold">
                    {activePin.tagline}
                  </span>
                  <h4 className="font-serif text-2xl text-white font-medium leading-tight">
                    {activePin.name}
                  </h4>
                </div>
              </div>

              {/* Fast Stats */}
              <div className="grid grid-cols-2 gap-2 text-xs bg-[#FAF8F5] p-3 rounded-2xl border border-[#B58A43]/20">
                <div>
                  <span className="block text-[10px] uppercase text-[#302B24]/60 font-semibold">{t('altitude')}</span>
                  <span className="font-bold text-[#B58A43]">{activePin.altitude}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-[#302B24]/60 font-semibold">{t('bestSeason')}</span>
                  <span className="font-bold text-[#302B24] truncate block">{activePin.bestTimeToVisit}</span>
                </div>
              </div>

              {/* Short Summary */}
              <p className="font-sans text-xs text-[#302B24]/80 leading-relaxed line-clamp-3">
                {activePin.summary}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => navigateWithMesob(`/destinations/${activePin.id}`)}
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#B58A43] to-[#9E7432] text-white font-sans text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <span>{language === 'am' ? 'ክልሉን ያስሱ' : 'Explore Region'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => navigateWithMesob(`/book?destination=${activePin.id}`)}
                  className="px-4 py-2.5 rounded-xl border border-[#B58A43]/40 text-[#302B24] font-sans text-xs font-semibold uppercase tracking-wider hover:bg-[#FAF8F5] transition-colors"
                >
                  {language === 'am' ? 'ጉዞ ይንደፉ' : 'Plan Trip'}
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 text-xs text-[#302B24]/60">
              Select any point on the map to inspect destination details.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
