import React, { useState } from 'react'
import {
  ArrowRight,
  Compass,
  Sparkles,
  MapPin,
  Clock,
  ChevronDown,
  Play,
} from 'lucide-react'
import { tours, destinations, journalPosts } from '../data/tours'
import TourCard from '../components/TourCard'
import { useMesob } from '../components/MesobTransition'
import { useLanguage } from '../context/LanguageContext'
import {
  TiletBorderPrimary,
  TiletDivider,
  TiletBackgroundPattern,
} from '../components/TiletPatterns'

// Curated 4K Ethiopian Tour Film (Scenic Relaxation: Lalibela, Simien, Danakil, Omo, Harar)
const YOUTUBE_TOUR_ID = '2AocxT8KurU'

export default function Home({
  savedTourIds = [],
  onToggleSaveTour = () => {},
  onSelectTourModal = () => {},
}) {
  const { navigateWithMesob } = useMesob()
  const { t, language } = useLanguage()
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeRegionTab, setActiveRegionTab] = useState('all')

  const filteredTours = activeCategory === 'all'
    ? tours.slice(0, 4)
    : tours.filter((t) => t.category === activeCategory).slice(0, 4)

  const regionDestinations = activeRegionTab === 'all'
    ? destinations.slice(0, 6)
    : destinations.filter((d) => d.region.toLowerCase() === activeRegionTab.toLowerCase())

  return (
    <div className="min-h-screen bg-white dark:bg-[#0E0D0B] text-[#302B24] dark:text-[#F5F2EB] overflow-x-hidden selection:bg-[#B58A43] selection:text-white transition-colors duration-300">

      {/* ── 1. CINEMATIC SINGLE YOUTUBE TOUR HERO ───────────────────────── */}
      <section className="relative min-h-[96vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0908]">
        {/* Full-bleed YouTube Video Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* High-resolution fallback Ethiopian photography poster */}
          <img
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=2000&q=85"
            alt="Ethiopia Tour"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* 16:9 Full Bleed YouTube Embed */}
          <iframe
            className="absolute top-1/2 left-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full -translate-x-1/2 -translate-y-1/2 object-cover scale-[1.35] sm:scale-125 md:scale-110 pointer-events-none"
            src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_TOUR_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_TOUR_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1&enablejsapi=1`}
            title="Tour of Ethiopia 4K"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />

          {/* Balanced Cinematic Scrims - Vivid Video Clarity with High Legibility */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/30 to-black/45 pointer-events-none" />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 via-transparent to-black/40 pointer-events-none" />
          <div className="absolute inset-0 z-10 bg-black/15 pointer-events-none" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-32 sm:pt-36 sm:pb-36 text-center flex flex-col items-center">
          {/* Live Heritage Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#B58A43]/70 text-[#E5C378] text-[10px] sm:text-xs font-sans uppercase tracking-[0.25em] mb-6 shadow-xl font-bold">
            <span className="w-2 h-2 rounded-full bg-[#E5C378] animate-ping" />
            <span>{language === 'am' ? 'የኢትዮጵያ ባህላዊ ጉዞዎች' : 'CULTURAL TOURS IN ETHIOPIA'}</span>
          </div>

          {/* Main Editorial Headline with High Contrast Shadow */}
          <div className="space-y-2">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-[1.05] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
              {language === 'am' ? 'ከተጠበቀው' : 'Beyond the'}{' '}
              <span className="italic font-normal text-[#E5C378]">
                {language === 'am' ? 'በላይ።' : 'Expected.'}
              </span>
            </h1>
          </div>

          {/* Fine Ornamental Tilet Divider */}
          <TiletDivider className="py-3 max-w-xs w-full text-[#E5C378] drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]" />

          {/* Clean, Jargon-free Subtitle */}
          <p className="max-w-2xl font-sans text-sm sm:text-lg text-white/95 font-light leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            {language === 'am'
              ? 'በግል መሪ የሚመሩ፣ በጥንቃቄ የተዘጋጁ ታሪካዊና ተፈጥሯዊ የኢትዮጵያ ጉዞዎች።'
              : 'Thoughtfully paced, private cultural journeys through 3,000 years of living history and alpine highlands.'}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
            <button
              onClick={() => navigateWithMesob('/tours')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#B58A43] via-[#C99C4E] to-[#9E7432] hover:from-[#d4a856] hover:to-[#B58A43] text-white font-sans text-xs uppercase tracking-widest font-bold shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
            >
              <span>{language === 'am' ? 'ጉዞዎችን ይመልከቱ' : 'Explore Tours'}</span>
              <ArrowRight className="w-4 h-4 text-[#FFF0D0]" />
            </button>

            <button
              onClick={() => navigateWithMesob('/about')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-black/45 hover:bg-black/65 backdrop-blur-md border border-white/35 hover:border-[#E5C378] text-white font-sans text-xs uppercase tracking-widest font-semibold transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Compass className="w-4 h-4 text-[#E5C378]" />
              <span>{language === 'am' ? 'ስለ እኛ' : 'Our Story'}</span>
            </button>
          </div>
        </div>

        {/* ── SINGLE YOUTUBE VIDEO BADGE & EXTERNAL LINK ── */}
        <div className="absolute bottom-5 sm:bottom-7 inset-x-0 z-30 px-4 sm:px-8 max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
          <div className="flex items-center gap-2.5 bg-black/65 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 shadow-md text-xs">
            <span className="w-2 h-2 rounded-full bg-[#E5C378] animate-pulse" />
            <span className="font-semibold tracking-wide text-white text-[11px] sm:text-xs">
              {language === 'am' ? 'የኢትዮጵያ ዙረት • 4ኬ ቪዲዮ' : 'Tour of Ethiopia • 4K Film'}
            </span>
            <span className="hidden sm:inline text-white/40">•</span>
            <span className="hidden sm:inline text-white/70 text-[11px] italic">
              {language === 'am' ? 'ላሊበላ • ስሜን • ዳሎል • ኦሞ' : 'Lalibela • Simien • Danakil • Omo'}
            </span>
          </div>

          <a
            href={`https://www.youtube.com/watch?v=${YOUTUBE_TOUR_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-black/65 hover:bg-black/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 hover:border-[#E5C378] text-white/80 hover:text-white text-xs transition-colors shadow-md"
            title="Watch full film on YouTube"
          >
            <Play className="w-3.5 h-3.5 text-[#E5C378] fill-[#E5C378]" />
            <span className="text-[11px] font-medium hidden sm:inline">
              {language === 'am' ? 'በዩቲዩብ ይመልከቱ' : 'Watch on YouTube'}
            </span>
          </a>
        </div>
      </section>

      {/* Prominent Repeating Tilet Border */}
      <TiletBorderPrimary height={16} className="border-y border-[#B58A43]/30 bg-[#FAF8F5] dark:bg-[#161410]" />

      {/* ── 2. CURATED TOURS SHOWCASE ─────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-[#F8F5EE] dark:bg-[#12110E] relative">
        <TiletBackgroundPattern className="opacity-[0.03]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B58A43] font-bold">
                {language === 'am' ? 'የተመረጡ ጉዞዎች' : 'Featured Journeys'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1A1713] dark:text-[#F5F2EB] mt-1">
                {language === 'am' ? 'የኢትዮጵያ ምርጥ' : 'Crafted for'}{' '}
                <span className="italic font-normal text-[#B58A43]">
                  {language === 'am' ? 'የጉዞ መስመሮች' : 'Depth & Wonder'}
                </span>
              </h2>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: language === 'am' ? 'ሁሉም' : 'All Tours' },
                { id: 'historical', label: language === 'am' ? 'ታሪካዊ' : 'Historical' },
                { id: 'wildlife', label: language === 'am' ? 'ዱር አራዊት' : 'Wildlife' },
                { id: 'cultural', label: language === 'am' ? 'ባህላዊ' : 'Cultural' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-sans uppercase tracking-wider font-semibold transition-all border ${
                    activeCategory === cat.id
                      ? 'bg-[#B58A43] text-white border-[#B58A43] shadow-xs'
                      : 'bg-white dark:bg-[#1A1814] text-[#302B24]/75 dark:text-[#D1C7BA] border-[#B58A43]/25 hover:border-[#B58A43]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredTours.map((tour, idx) => (
              <TourCard
                key={tour.id}
                tour={tour}
                isSaved={savedTourIds.includes(tour.id)}
                onToggleSave={onToggleSaveTour}
                onQuickView={onSelectTourModal}
                featured={idx === 0}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => navigateWithMesob('/tours')}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#1A1713] dark:bg-[#B58A43] hover:bg-[#B58A43] dark:hover:bg-[#C49A50] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-md"
            >
              <span>{language === 'am' ? 'ሁሉንም ጉዞዎች ይመልከቱ' : 'View All Tours'}</span>
              <ArrowRight className="w-4 h-4 text-[#DDC28D]" />
            </button>
          </div>
        </div>
      </section>

      {/* Fine Ornamental Tilet Divider */}
      <TiletDivider className="py-2" />

      {/* ── 3. DESTINATIONS PANORAMA ──────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white dark:bg-[#0E0D0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B58A43] font-bold">
              {language === 'am' ? 'መዳረሻዎች' : 'Destinations'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1A1713] dark:text-[#F5F2EB] mt-1">
              {language === 'am' ? 'ልዩ ልዩ' : 'Ten Distinct'}{' '}
              <span className="italic font-normal text-[#B58A43]">
                {language === 'am' ? 'የኢትዮጵያ ዓለማት' : 'Ethiopian Landscapes'}
              </span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#302B24]/75 dark:text-[#D1C7BA] mt-2 font-light">
              {language === 'am'
                ? 'ከተራራ ጫፎች አንስቶ እስከ ጥንታዊ ቅጥር ከተሞችና የጨው ሜዳዎች ድረስ።'
                : 'From 4,500m afro-alpine summits to salt depressions below sea level.'}
            </p>

            {/* Region Tabs */}
            <div className="mt-6 inline-flex p-1 rounded-full bg-[#FAF8F5] dark:bg-[#1A1814] border border-[#B58A43]/30">
              {[
                { id: 'all', label: language === 'am' ? 'ሁሉም' : 'All' },
                { id: 'north', label: language === 'am' ? 'ሰሜን' : 'North' },
                { id: 'south', label: language === 'am' ? 'ደቡብ' : 'South' },
                { id: 'east', label: language === 'am' ? 'ምሥራቅ' : 'East' },
                { id: 'central', label: language === 'am' ? 'መካከለኛ' : 'Central' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveRegionTab(tab.id)}
                  className={`px-3.5 py-1 rounded-full text-xs font-sans uppercase tracking-wider font-semibold transition-all ${
                    activeRegionTab === tab.id
                      ? 'bg-[#B58A43] text-white shadow-xs'
                      : 'text-[#302B24]/70 dark:text-[#D1C7BA] hover:text-[#B58A43]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regionDestinations.map((dest) => (
              <div
                key={dest.id}
                onClick={() => navigateWithMesob(`/destinations/${dest.id}`)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer h-80 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-[#B58A43]/30 bg-white dark:bg-[#161410]"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 group-hover:from-black/90 transition-colors" />

                <div className="absolute top-3.5 left-3.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/95 dark:bg-[#1A1814]/95 text-[#B58A43] text-[10px] font-bold uppercase tracking-wider border border-[#B58A43]/40">
                    {dest.region}
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-[#DDC28D] font-medium">
                    {dest.tagline}
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-white group-hover:text-[#DDC28D] transition-colors mt-0.5">
                    {dest.name}
                  </h3>
                  <div className="mt-3 pt-2.5 border-t border-white/20 flex items-center justify-between text-xs text-[#DDC28D]">
                    <span className="font-sans font-light">{dest.altitude}</span>
                    <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform font-bold">
                      <span>{language === 'am' ? 'ተመልከት' : 'Explore'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => navigateWithMesob('/destinations')}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-[#B58A43] hover:bg-[#B58A43] hover:text-white text-[#B58A43] text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
            >
              <span>{language === 'am' ? 'ሁሉንም 10 መዳረሻዎች እና ካርታ ተመልከት' : 'Explore All 10 Destinations'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Prominent Repeating Tilet Border */}
      <TiletBorderPrimary height={16} className="border-y border-[#B58A43]/30 bg-[#FAF8F5] dark:bg-[#161410]" />

      {/* ── 4. LIVING RITUAL SPOTLIGHT (BUNA & HOSPITALITY) ───────────────── */}
      <section className="py-20 sm:py-24 bg-[#F8F5EE] dark:bg-[#12110E] relative overflow-hidden">
        <TiletBackgroundPattern className="opacity-[0.035]" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual Left */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border-2 border-[#B58A43]/40 p-1 bg-white dark:bg-[#161410]">
                <div className="rounded-2xl overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
                    alt="Traditional Ethiopian Coffee Ceremony with Frankincense"
                    className="w-full h-80 sm:h-[420px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-[10px] uppercase tracking-widest text-[#DDC28D] font-bold">
                      {language === 'am' ? 'የክብር አቀባበል' : 'The Sacred Welcome'}
                    </span>
                    <p className="font-serif text-lg text-white font-medium mt-0.5">
                      {language === 'am'
                        ? 'ቡና እና ዕጣን፡ የኢትዮጵያ የልብ እንግዳ ተቀባይነት ጥንታዊ ጥበብ።'
                        : 'Buna & Frankincense: The Ancient Art of Ethiopian Hospitality.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative Right */}
            <div className="lg:col-span-6 space-y-4">
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B58A43] font-bold">
                {language === 'am' ? 'ሕያው ባህል' : 'Living Culture'}
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1A1713] dark:text-[#F5F2EB] leading-tight">
                {language === 'am' ? 'የመሶብ እና የቡና' : 'The Mesob & Buna'}{' '}
                <span className="italic font-normal text-[#B58A43]">
                  {language === 'am' ? 'ማዕድ' : 'Tradition'}
                </span>
              </h2>

              <p className="font-sans text-xs sm:text-sm text-[#302B24]/85 dark:text-[#D1C7BA] leading-relaxed font-light">
                {language === 'am'
                  ? 'በኢትዮጵያ ምግብ መመገብ ማህበራዊ ትስስር ነው። በመሶብ ዙሪያ አንድ ላይ መቀመጥ፣ ጉርሻ መጋራት እና የተጠበሰውን ቡና መዓዛ ማጣጣም ለዘመናት የቆየው የክብር አቀባበል ምልክት ነው።'
                  : 'In Ethiopia, dining is an act of communion. Sitting around the woven Mesob, sharing Gursha, and savoring freshly roasted coffee with frankincense is a three-millennia ritual of unconditional welcome.'}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => navigateWithMesob('/journal/coffee-ceremony')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B58A43] hover:bg-[#9E7432] text-white text-xs font-bold uppercase tracking-widest shadow-md transition-all"
                >
                  <span>{language === 'am' ? 'ስለ ቡና ሥነ-ሥርዓት አንብብ' : 'Read Buna Story'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#DDC28D]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prominent Repeating Tilet Border */}
      <TiletBorderPrimary height={16} className="border-y border-[#B58A43]/30 bg-[#FAF8F5] dark:bg-[#161410]" />

      {/* ── 5. PRIVATE CURATION INVITATION (MINIMALIST LUXURY CTA) ────────── */}
      <section className="py-20 sm:py-24 bg-white dark:bg-[#0E0D0B] text-[#1A1713] dark:text-[#F5F2EB] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B58A43] font-bold">
            {language === 'am' ? 'የግል ጉዞ ማዘጋጃ' : 'Private Concierge'}
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-light leading-tight">
            {language === 'am' ? 'የህልም ጉዞዎን' : 'Curate Your Private'}{' '}
            <span className="italic font-normal text-[#B58A43]">
              {language === 'am' ? 'ይንደፉ' : 'Ethiopian Odyssey'}
            </span>
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#302B24]/75 dark:text-[#D1C7BA] max-w-lg mx-auto leading-relaxed font-light">
            {language === 'am'
              ? 'የጉዞ ፍላጎትዎን ለአዲስ አበባ የጉዞ አማካሪዎቻችን ያካፍሉ። በ24 ሰዓት ውስጥ የተሟላ የግል ፕሮግራም እናዘጋጃለን።'
              : 'Share your travel vision with our senior team in Addis Ababa. We craft bespoke private itineraries tailored to your dates, pace, and interests.'}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={() => navigateWithMesob('/book')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#B58A43] to-[#9E7432] hover:from-[#c49a50] hover:to-[#B58A43] text-white font-sans text-xs uppercase tracking-widest font-bold shadow-lg hover:shadow-xl transition-all"
            >
              {language === 'am' ? 'የግል ጉዞ ይጀምሩ' : 'Start Planning'}
            </button>
            <button
              onClick={() => navigateWithMesob('/contact')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-[#B58A43]/40 hover:bg-[#FAF8F5] dark:hover:bg-[#1A1814] text-[#1A1713] dark:text-[#F5F2EB] font-sans text-xs uppercase tracking-widest font-semibold transition-all shadow-xs"
            >
              {language === 'am' ? 'አማካሪ ያነጋግሩ' : 'Speak with Concierge'}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
