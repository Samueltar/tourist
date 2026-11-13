import React, { useState } from 'react'
import {
  ArrowRight,
  Compass,
  Sparkles,
  MapPin,
  Clock,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Eye,
  Heart,
  Check,
  Flame,
} from 'lucide-react'
import { tours } from '../data/tours'
import { useMesob } from '../components/MesobTransition'
import { useLanguage } from '../context/LanguageContext'
import {
  TiletBorderPrimary,
  TiletDivider,
  TiletBackgroundPattern,
} from '../components/TiletPatterns'
import ethiopiaTourVideo from '../assets/ethiopia_tour.mp4'

// Authentic Ethiopian Coffee Bean Emblem
export function CoffeeBeanIcon({ className = 'w-4 h-4', color = 'currentColor' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M18.8 6.2C16.8 3.5 12.8 2.2 9.2 3.6C5.6 5 3.4 8.8 4.2 12.6C5 16.4 8.6 19.8 12.4 20.4C16.2 21 19.8 18.6 20.6 14.8C21.4 11 20.8 8.9 18.8 6.2Z"
        fill={color}
        fillOpacity="0.25"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M8.8 4.8C10.5 7.8 13.2 9.8 11.8 13C10.4 16.2 13 18.2 14.8 19.2"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

// Traditional Ethiopian Coffee Ceremony (የኢትዮጵያ ቡና ሥነ-ሥርዓት) Stages
const BUNA_CEREMONY_STEPS = [
  {
    id: 'roast',
    beanCount: 1,
    num: '01',
    title: 'Washing & Charcoal Roasting',
    amTitle: 'ማጠብ፣ ማመስ እና ዕጣን',
    eyebrow: 'The Aromatic Awakening',
    amEyebrow: 'የመዓዛው መነቃቃት',
    image: 'https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=1200&q=80',
    description:
      'Green highland Arabica beans (ቡና ጥሬ) are washed in clear water, then gently roasted in a flat iron pan (menkeshkensh) over glowing charcoal coals. Frankincense resin (ዕጣን) is ignited on a clay burner, releasing sacred fragrant white smoke.',
    amDescription:
      'ጥሬው የሀበሻ ቡና በጥንቃቄ ታጥቦ በብረት ምጣድ ላይ በከሰል ፍም ይቆላል። በጭሱ መካከል ነጭ ዕጣን በግርግሬ ላይ ተደርጎ ቤቱን በጣፋጭ መዓዛ ይሞላል።',
    quote: 'The host carries the smoking pan to each guest, who wafts the sweet aroma toward their face with both hands as a sign of welcome and respect.',
    amQuote: 'እመቤቲቱ የቡናውን ጢስ ወደ እንግዶቿ ይዛ በመዞር እንግዶች መዓዛውን በእጆቻቸው ወደ ፊታቸው እንዲስቡ ታደርጋለች፤ ይህም የክብር ሰላምታ ነው።',
    ritualItem: 'Menkeshkensh & Frankincense (ምጣድ እና ዕጣን)',
  },
  {
    id: 'brew',
    beanCount: 2,
    num: '02',
    title: 'Mortar Pounding & The Clay Jebena',
    amTitle: 'መውቀጥ እና የጀበና ፍላት',
    eyebrow: 'The Ancient Vessel',
    amEyebrow: 'ጥንታዊቷ ጀበና',
    image: 'https://res.cloudinary.com/dw1ohipim/image/upload/v1786277684/ejs4hjczvizttiqkkvcm.jpg',
    description:
      'The dark, glistening beans are hand-crushed in a heavy wooden mortar (mukecha) with a pestle (zenezena). The fragrant grinds are poured with spring water into the spherical black clay Jebena (ጀበና) and brought to a slow, bubbling boil on charcoal embers.',
    amDescription:
      'የተቆላው ቡና በሙቀጫና በዘነዘና ተወቅጦ በሸክላ ጀበና ከውሃ ጋር ይፈላል። ጀበናዋ አተላው ወደ ታች እንዲቀመጥ ተደርጋ በጥንቃቄ እንድታረግፍ ትቀመጣለች።',
    quote: 'The handcrafted clay Jebena has brewed Ethiopia’s mountain coffee for over a thousand years, filtering the grinds naturally without paper or metal.',
    amQuote: 'የሸክላ ጀበና ለሺህ ዓመታት የኢትዮጵያን ተፈጥሯዊ ቡና ያለ ምንም ማጣሪያ አጣርታ የምታፈላ ድንቅ ባህላዊ ዕቃ ናት።',
    ritualItem: 'Mukecha & Black Clay Jebena (ሙቀጫና ጥቁር ጀበና)',
  },
  {
    id: 'rounds',
    beanCount: 3,
    num: '03',
    title: 'The Three Sacred Rounds',
    amTitle: 'ሦስቱ ዙሮች፡ አቦል፣ ቶና፣ በረካ',
    eyebrow: 'Abol, Tona & Bereka',
    amEyebrow: 'አቦል፣ ቶና እና በረካ',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
    description:
      'Coffee is poured from high above in an unbroken golden stream into handleless ceramic cups (cini) arranged on a wooden table (rekebot) over freshly strewn river grass (ketema), accompanied by freshly popped corn (fendisha).',
    amDescription:
      'ቡናው ከከፍታ ላይ በረጅሙ ተንቆርቁሮ በቄጠማ ላይ በተዘረጋው ረከቦት ላይ ባሉ ሲኒዎች ውስጥ ይቀዳል። ከፈንድሻና ከቆሎ ጋር በሦስት ዙር ይቀርባል።',
    rounds: [
      { name: '01. አቦል (Abol)', desc: 'The First & Strongest: awakens the mind and establishes respect.' },
      { name: '02. ቶና (Tona)', desc: 'The Second: deepens fellowship, laughter, and storytelling.' },
      { name: '03. በረካ (Bereka)', desc: 'The Final Cup of Blessing: confers peace and safe journeys.' },
    ],
    quote: 'Drinking all three rounds signifies that you have arrived as a stranger and leave as part of the family.',
    amQuote: 'ሦስቱንም ዙሮች አጠናቆ መጠጣት ባይተዋር ሆኖ ገብቶ የቤተሰብ አባል ሆኖ የመውጣት ምሳሌ ነው።',
    ritualItem: 'Rekebot, Cini Cups & Fresh Ketema Grass (ረከቦት፣ ሲኒ እና ቄጠማ)',
  },
  {
    id: 'mesob',
    beanCount: 4,
    num: '04',
    title: 'The Shared Mesob & Sacred Gursha',
    amTitle: 'የመሶብ ማዕድ እና የጉርሻ ፍቅር',
    eyebrow: 'Communal Communion',
    amEyebrow: 'የጋራ ማዕድ',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=1200&q=80',
    description:
      'In Ethiopia, coffee flows naturally into communal dining around the handwoven straw Mesob. Breaking teff injera together and offering Gursha—placing food directly into another person’s mouth—cements bonds that transcend words.',
    amDescription:
      'በኢትዮጵያ ቡናና የመሶብ ማዕድ የማይነጣጠሉ ናቸው። በመሶብ ዙሪያ ተሰብስቦ እንጀራ መቆረስና ጉርሻ መጉረስ የልብ ፍቅርና የመተሳሰብ ከፍተኛ መገለጫ ነው።',
    quote: '“Those who share from the same Mesob are bound by honor and peace for a lifetime.”',
    amQuote: '«ከአንድ መሶብ የበላና የጠጣ ለዘላለም በሰላምና በክብር የተሳሰረ ነው» — የሀበሻ አባባል',
    ritualItem: 'Woven Straw Mesob & Teff Injera (ባህላዊ መሶብ እና የጤፍ እንጀራ)',
  },
]

export default function Home({
  savedTourIds = [],
  onToggleSaveTour = () => {},
  onSelectTourModal = () => {},
}) {
  const { navigateWithMesob } = useMesob()
  const { t, language } = useLanguage()
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeTourIndex, setActiveTourIndex] = useState(0)
  const [activeBunaStep, setActiveBunaStep] = useState(0)

  const filteredTours = activeCategory === 'all'
    ? tours.slice(0, 4)
    : tours.filter((t) => t.category === activeCategory).slice(0, 4)

  return (
    <div className="min-h-screen bg-white dark:bg-[#0E0D0B] text-[#302B24] dark:text-[#F5F2EB] overflow-x-hidden selection:bg-[#B58A43] selection:text-white transition-colors duration-300">

      {/* ── 1. CINEMATIC TOUR HERO (LOCAL OFFLINE VIDEO, ZERO BUTTONS) ───── */}
      <section className="relative min-h-[96vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0908]">
        {/* Full-bleed Native HTML5 Video Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=2000&q=85"
            className="w-full h-full object-cover transform scale-105 pointer-events-none"
            src={ethiopiaTourVideo}
          >
            <source src={ethiopiaTourVideo} type="video/mp4" />
          </video>

          {/* Balanced Cinematic Scrims - Vivid Video Clarity with High Legibility */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/30 to-black/45 pointer-events-none" />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 via-transparent to-black/40 pointer-events-none" />
          <div className="absolute inset-0 z-10 bg-black/15 pointer-events-none" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 text-center flex flex-col items-center">
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
      </section>

      {/* Prominent Repeating Tilet Border */}
      <TiletBorderPrimary height={16} className="border-y border-[#B58A43]/30 bg-[#FAF8F5] dark:bg-[#161410]" />

      {/* ── 2. DYNAMIC PANORAMIC ITINERARY STAGE ─────────────────────────── */}
      <section className="py-20 sm:py-24 bg-[#F8F5EE] dark:bg-[#12110E] relative overflow-hidden">
        <TiletBackgroundPattern className="opacity-[0.03]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Row with Editorial Title, Category Filter & Interactive Navigation */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B58A43]" />
                <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B58A43] font-bold">
                  {language === 'am' ? 'የተመረጡ ጉዞዎች' : 'Featured Journeys'}
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#1A1713] dark:text-[#F5F2EB] mt-1">
                {language === 'am' ? 'የኢትዮጵያ ምርጥ' : 'Crafted for'}{' '}
                <span className="italic font-normal text-[#B58A43]">
                  {language === 'am' ? 'የጉዞ መስመሮች' : 'Depth & Wonder'}
                </span>
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#302B24]/75 dark:text-[#D1C7BA] mt-2 font-light">
                {language === 'am'
                  ? 'በፓኖራሚክ መድረክ የጉዞ መስመሮችን፣ ቀኖችንና ልዩ ገጠመኞችን ይመርምሩ።'
                  : 'An interactive panoramic stage — explore key waypoints, durations, and curated highlights.'}
              </p>
            </div>

            {/* Filter Pills & Interactive Stage Controls */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Category Pills */}
              <div className="flex flex-wrap gap-1.5 p-1 rounded-full bg-white dark:bg-[#1A1814] border border-[#B58A43]/25 shadow-xs">
                {[
                  { id: 'all', label: language === 'am' ? 'ሁሉም' : 'All Tours' },
                  { id: 'historical', label: language === 'am' ? 'ታሪካዊ' : 'Historical' },
                  { id: 'wildlife', label: language === 'am' ? 'ዱር አራዊት' : 'Wildlife' },
                  { id: 'cultural', label: language === 'am' ? 'ባህላዊ' : 'Cultural' },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id)
                      setActiveTourIndex(0)
                    }}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-sans uppercase tracking-wider font-semibold transition-all ${
                      activeCategory === cat.id
                        ? 'bg-[#B58A43] text-white shadow-xs'
                        : 'text-[#302B24]/75 dark:text-[#D1C7BA] hover:text-[#B58A43]'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Prev / Next Quick Cycling */}
              <div className="hidden sm:flex items-center gap-1.5 bg-white dark:bg-[#1A1814] p-1 rounded-full border border-[#B58A43]/25 shadow-xs">
                <button
                  onClick={() => setActiveTourIndex((prev) => (prev - 1 + filteredTours.length) % filteredTours.length)}
                  className="p-1.5 rounded-full text-[#302B24] dark:text-[#F5F2EB] hover:bg-[#B58A43] hover:text-white transition-colors"
                  aria-label="Previous tour"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="px-2 text-xs font-mono font-bold text-[#B58A43]">
                  {String(activeTourIndex + 1).padStart(2, '0')} / {String(filteredTours.length).padStart(2, '0')}
                </span>
                <button
                  onClick={() => setActiveTourIndex((prev) => (prev + 1) % filteredTours.length)}
                  className="p-1.5 rounded-full text-[#302B24] dark:text-[#F5F2EB] hover:bg-[#B58A43] hover:text-white transition-colors"
                  aria-label="Next tour"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* ── DESKTOP DYNAMIC PANORAMIC ACCORDION ── */}
          <div className="hidden lg:flex h-[560px] xl:h-[600px] gap-3 p-3 rounded-3xl bg-[#0E0C09] border border-[#B58A43]/35 shadow-2xl relative overflow-hidden">
            {filteredTours.map((tour, idx) => {
              const isActive = idx === activeTourIndex
              const isSaved = savedTourIds.includes(tour.id)
              const routeStops = tour.route ? tour.route.split('•').map((s) => s.trim()) : []

              return (
                <div
                  key={tour.id}
                  onClick={() => setActiveTourIndex(idx)}
                  onMouseEnter={() => setActiveTourIndex(idx)}
                  className={`relative rounded-2xl overflow-hidden cursor-pointer transition-[flex] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive
                      ? 'flex-[4] border border-[#E5C378]/60 shadow-2xl'
                      : 'flex-1 bg-black/50 border border-white/10 hover:border-[#E5C378]/40 hover:bg-black/40 group'
                  }`}
                >
                  {/* Backdrop Photo */}
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className={`absolute inset-0 w-full h-full object-cover transform transition-transform duration-1000 ${
                      isActive ? 'scale-105' : 'scale-100 opacity-40 group-hover:opacity-60'
                    }`}
                  />

                  {/* Gradient Scrims */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      isActive
                        ? 'bg-gradient-to-t from-black/95 via-black/40 to-black/30'
                        : 'bg-black/65 group-hover:bg-black/45'
                    }`}
                  />
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent pointer-events-none" />
                  )}

                  {/* ── EXPANDED CONTENT ── */}
                  {isActive ? (
                    <div className="relative h-full z-10 p-6 xl:p-8 flex flex-col justify-between text-white">
                      {/* Top Header inside card */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md border border-[#E5C378]/60 text-[#E5C378]">
                            {tour.category}
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white/90 text-[11px] font-medium">
                            <Clock className="w-3.5 h-3.5 text-[#E5C378]" />
                            <span>{tour.duration}</span>
                          </span>
                          {tour.difficulty && (
                            <span className="hidden xl:inline-flex px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] text-white/80 border border-white/15">
                              {tour.difficulty}
                            </span>
                          )}
                        </div>

                        {/* Quick View and Wishlist Actions */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              onSelectTourModal(tour)
                            }}
                            className="p-2.5 rounded-full bg-black/60 hover:bg-[#B58A43] text-white backdrop-blur-md border border-white/20 hover:border-[#E5C378] transition-all hover:scale-110 shadow-lg"
                            title="Quick overview modal"
                          >
                            <Eye className="w-4 h-4 text-[#E5C378]" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              onToggleSaveTour(tour.id)
                            }}
                            className={`p-2.5 rounded-full backdrop-blur-md border transition-all hover:scale-110 shadow-lg ${
                              isSaved
                                ? 'bg-[#B58A43] text-white border-[#E5C378]'
                                : 'bg-black/60 hover:bg-black/80 text-white border-white/20 hover:border-[#E5C378]'
                            }`}
                            title={isSaved ? 'Remove from saved' : 'Save journey'}
                          >
                            <Heart className={`w-4 h-4 ${isSaved ? 'fill-white text-white' : 'text-[#E5C378]'}`} />
                          </button>
                        </div>
                      </div>

                      {/* Main Center/Bottom Details */}
                      <div className="space-y-4 max-w-3xl">
                        <div>
                          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#E5C378] font-bold">
                            0{idx + 1} • {tour.daysCount || 14} DAYS EXPEDITION
                          </span>
                          <h3 className="font-serif text-3xl xl:text-4xl font-light text-white leading-tight mt-1">
                            {tour.title}
                          </h3>
                        </div>

                        <p className="text-xs xl:text-sm text-white/85 font-light leading-relaxed line-clamp-2 max-w-2xl">
                          {tour.summary}
                        </p>

                        {/* Dynamic Route Waypoints */}
                        {routeStops.length > 0 && (
                          <div className="pt-1">
                            <span className="text-[10px] uppercase tracking-wider text-white/50 block mb-1.5 font-semibold">
                              {language === 'am' ? 'የጉዞ ማዕከላት' : 'Curated Route Milestones'}
                            </span>
                            <div className="flex flex-wrap items-center gap-1.5">
                              {routeStops.map((stop, sIdx) => (
                                <React.Fragment key={sIdx}>
                                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] text-white/95 font-medium shadow-sm">
                                    <MapPin className="w-2.5 h-2.5 text-[#E5C378]" />
                                    <span>{stop}</span>
                                  </span>
                                  {sIdx < routeStops.length - 1 && (
                                    <span className="text-[#E5C378]/70 text-xs px-0.5">→</span>
                                  )}
                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Top Highlights Preview */}
                        {tour.highlights && tour.highlights.length > 0 && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                            {tour.highlights.slice(0, 2).map((h, hIdx) => (
                              <div key={hIdx} className="flex items-center gap-2 text-xs text-white/90">
                                <span className="w-4 h-4 rounded-full bg-[#B58A43]/40 border border-[#E5C378]/70 flex items-center justify-center shrink-0">
                                  <Check className="w-2.5 h-2.5 text-[#FFE2A4]" />
                                </span>
                                <span className="truncate">{h}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Action Bar */}
                        <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-white/15">
                          <span className="text-xs text-white/70 italic font-sans hidden sm:inline">
                            {tour.groupType || 'Private 4x4 Expedition • Heritage Lodges'}
                          </span>

                          <div className="flex items-center gap-2.5">
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                onSelectTourModal(tour)
                              }}
                              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold uppercase tracking-wider transition-all"
                            >
                              {language === 'am' ? 'ፈጣን ዕይታ' : 'Quick Preview'}
                            </button>

                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                navigateWithMesob(`/tours/${tour.id}`)
                              }}
                              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#B58A43] via-[#C99C4E] to-[#9E7432] hover:from-[#d4a856] hover:to-[#B58A43] text-white text-xs font-bold uppercase tracking-widest shadow-xl transition-all transform hover:-translate-y-0.5"
                            >
                              <span>{language === 'am' ? 'ሙሉ ጉዞውን ይመልከቱ' : 'Explore Itinerary'}</span>
                              <ArrowRight className="w-3.5 h-3.5 text-[#FFF0D0]" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* ── COLLAPSED SLICE ── */
                    <div className="relative h-full z-10 p-4 flex flex-col justify-between items-center text-white">
                      {/* Slender Top Number */}
                      <span className="text-xs font-mono font-bold text-[#E5C378] px-2 py-0.5 rounded-full bg-black/60 border border-white/10">
                        0{idx + 1}
                      </span>

                      {/* Vertical Title Bar */}
                      <div className="[writing-mode:vertical-rl] rotate-180 flex items-center gap-3">
                        <span className="font-serif text-lg tracking-wide text-white/90 group-hover:text-[#FFE2A4] transition-colors whitespace-nowrap">
                          {tour.title}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E5C378]/70" />
                        <span className="text-[10px] uppercase tracking-widest font-sans text-white/60">
                          {tour.duration}
                        </span>
                      </div>

                      {/* Bottom Prompt */}
                      <div className="w-7 h-7 rounded-full bg-black/60 border border-white/20 flex items-center justify-center group-hover:border-[#E5C378] group-hover:bg-[#B58A43]/50 transition-colors">
                        <ChevronRight className="w-3.5 h-3.5 text-[#E5C378]" />
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* ── MOBILE & TABLET ADAPTIVE DYNAMIC STAGE ── */}
          <div className="lg:hidden space-y-4">
            {/* Mobile Tour Number Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1">
              {filteredTours.map((tItem, mIdx) => (
                <button
                  key={tItem.id}
                  onClick={() => setActiveTourIndex(mIdx)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all shrink-0 flex items-center gap-2 ${
                    mIdx === activeTourIndex
                      ? 'bg-[#B58A43] text-white shadow-md font-bold'
                      : 'bg-white dark:bg-[#1A1814] text-[#302B24] dark:text-[#F5F2EB] border border-[#B58A43]/20'
                  }`}
                >
                  <span className="font-mono text-[11px]">0{mIdx + 1}</span>
                  <span className="truncate max-w-[140px]">{tItem.title}</span>
                </button>
              ))}
            </div>

            {/* Featured Active Tour Card */}
            {filteredTours[activeTourIndex] && (() => {
              const activeMobileTour = filteredTours[activeTourIndex]
              const isSaved = savedTourIds.includes(activeMobileTour.id)
              const stops = activeMobileTour.route ? activeMobileTour.route.split('•').map((s) => s.trim()) : []

              return (
                <div className="rounded-3xl overflow-hidden bg-[#0E0C09] border border-[#B58A43]/40 shadow-2xl relative">
                  <div className="relative h-64 sm:h-72 overflow-hidden">
                    <img
                      src={activeMobileTour.image}
                      alt={activeMobileTour.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C09] via-black/40 to-black/30" />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/65 backdrop-blur-md text-[#E5C378] border border-[#E5C378]/60">
                          {activeMobileTour.category}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md text-white text-[10px] font-medium border border-white/20">
                          {activeMobileTour.duration}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onSelectTourModal(activeMobileTour)}
                          className="p-2 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20"
                        >
                          <Eye className="w-3.5 h-3.5 text-[#E5C378]" />
                        </button>
                        <button
                          onClick={() => onToggleSaveTour(activeMobileTour.id)}
                          className="p-2 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20"
                        >
                          <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-white text-white' : 'text-[#E5C378]'}`} />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 text-white space-y-3.5 -mt-6 relative z-10">
                    <div>
                      <span className="text-[10px] font-mono text-[#E5C378] tracking-widest font-bold">
                        0{activeTourIndex + 1} OF 0{filteredTours.length}
                      </span>
                      <h3 className="font-serif text-2xl font-light text-white mt-0.5">
                        {activeMobileTour.title}
                      </h3>
                    </div>

                    <p className="text-xs text-white/80 line-clamp-2 font-light">
                      {activeMobileTour.summary}
                    </p>

                    {stops.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        {stops.slice(0, 4).map((s, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 text-[10px] text-white/90 border border-white/10"
                          >
                            <MapPin className="w-2.5 h-2.5 text-[#E5C378]" />
                            {s}
                          </span>
                        ))}
                        {stops.length > 4 && (
                          <span className="text-[10px] text-[#E5C378]">+{stops.length - 4} more</span>
                        )}
                      </div>
                    )}

                    <div className="pt-2 flex items-center gap-2">
                      <button
                        onClick={() => onSelectTourModal(activeMobileTour)}
                        className="flex-1 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider"
                      >
                        {language === 'am' ? 'ፈጣን ዕይታ' : 'Quick View'}
                      </button>
                      <button
                        onClick={() => navigateWithMesob(`/tours/${activeMobileTour.id}`)}
                        className="flex-1 py-2.5 rounded-full bg-[#B58A43] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5"
                      >
                        <span>{language === 'am' ? 'ዝርዝር' : 'Details'}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#FFF0D0]" />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })()}

            {/* Prev / Next Bottom Controls */}
            <div className="flex items-center justify-between px-2 pt-1">
              <button
                onClick={() => setActiveTourIndex((prev) => (prev - 1 + filteredTours.length) % filteredTours.length)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white dark:bg-[#1A1814] border border-[#B58A43]/30 text-xs font-semibold text-[#302B24] dark:text-[#F5F2EB]"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>{language === 'am' ? 'ቀዳሚ' : 'Previous'}</span>
              </button>

              <div className="flex items-center gap-1.5">
                {filteredTours.map((_, dotIdx) => (
                  <span
                    key={dotIdx}
                    className={`h-1.5 rounded-full transition-all ${
                      dotIdx === activeTourIndex ? 'w-5 bg-[#B58A43]' : 'w-1.5 bg-[#B58A43]/30'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setActiveTourIndex((prev) => (prev + 1) % filteredTours.length)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white dark:bg-[#1A1814] border border-[#B58A43]/30 text-xs font-semibold text-[#302B24] dark:text-[#F5F2EB]"
              >
                <span>{language === 'am' ? 'ቀጣይ' : 'Next'}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => navigateWithMesob('/tours')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1A1713] dark:bg-[#B58A43] hover:bg-[#B58A43] dark:hover:bg-[#C49A50] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span>{language === 'am' ? 'ሁሉንም 12 ጉዞዎች እና የዋጋ ዝርዝር ይመልከቱ' : 'View All Tours & Custom Itineraries'}</span>
              <ArrowRight className="w-4 h-4 text-[#DDC28D]" />
            </button>
          </div>
        </div>
      </section>

      {/* Fine Ornamental Tilet Divider */}
      <TiletDivider className="py-2" />

      {/* ── 3. LIVING RITUAL SPOTLIGHT: THE SACRED BUNA & MESOB CEREMONY ── */}
      <section className="py-20 sm:py-28 bg-[#F8F5EE] dark:bg-[#12110E] relative overflow-hidden">
        <TiletBackgroundPattern className="opacity-[0.035]" />

        {/* Floating Coffee Bean Signs Watermark */}
        <div className="absolute -top-10 -right-10 opacity-5 pointer-events-none select-none text-[#B58A43]">
          <CoffeeBeanIcon className="w-96 h-96 transform rotate-45" />
        </div>
        <div className="absolute -bottom-10 -left-10 opacity-5 pointer-events-none select-none text-[#B58A43]">
          <CoffeeBeanIcon className="w-80 h-80 transform -rotate-12" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#1A1814] border border-[#B58A43]/35 shadow-xs">
              <CoffeeBeanIcon className="w-3.5 h-3.5 text-[#B58A43]" />
              <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#B58A43] font-bold">
                {language === 'am' ? 'ሕያው ቅርስ • የኢትዮጵያ ቡና ሥነ-ሥርዓት' : 'LIVING HERITAGE • ETHIOPIAN COFFEE CEREMONY'}
              </span>
              <CoffeeBeanIcon className="w-3.5 h-3.5 text-[#B58A43]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#1A1713] dark:text-[#F5F2EB] leading-tight">
              {language === 'am' ? 'የመሶብ እና የቡና' : 'The Sacred Mesob & Buna'}{' '}
              <span className="italic font-normal text-[#B58A43]">
                {language === 'am' ? 'ማዕድ ፍሰት' : 'Ceremony Flow'}
              </span>
            </h2>

            <p className="font-sans text-xs sm:text-base text-[#302B24]/80 dark:text-[#D1C7BA] max-w-2xl mx-auto font-light leading-relaxed">
              {language === 'am'
                ? 'ከከሰል ፍም ማመስ አንስቶ እስከ ሦስቱ ዙሮች (አቦል፣ ቶና፣ በረካ) እና የጋራ መሶብ ማዕድ ድረስ፡ ለ3,000 ዓመታት ያልተቋረጠው የክብር አቀባበል።'
                : 'From the fragrant charcoal roast and clay Jebena to the three sacred cups (Abol, Tona, Bereka) and the shared Mesob table.'}
            </p>

            {/* Interactive Stage Selector Tabs with Coffee Bean Signs */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {BUNA_CEREMONY_STEPS.map((step, sIdx) => {
                const isCurrent = sIdx === activeBunaStep
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveBunaStep(sIdx)}
                    className={`group relative px-4 py-2.5 rounded-full text-xs font-sans uppercase tracking-wider font-semibold transition-all flex items-center gap-2 ${
                      isCurrent
                        ? 'bg-[#B58A43] text-white shadow-lg border border-[#E5C378]'
                        : 'bg-white dark:bg-[#1A1814] text-[#302B24]/75 dark:text-[#D1C7BA] border border-[#B58A43]/25 hover:border-[#B58A43] hover:text-[#B58A43]'
                    }`}
                  >
                    {/* Coffee Bean Sign */}
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: step.beanCount }).map((_, bI) => (
                        <CoffeeBeanIcon
                          key={bI}
                          className={`w-3 h-3 ${isCurrent ? 'text-white' : 'text-[#B58A43]'}`}
                        />
                      ))}
                    </div>
                    <span>{step.num}. {language === 'am' ? step.amTitle.split(' ')[0] : step.title.split(' ')[0]}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Dynamic Interactive Stage Card */}
          {(() => {
            const currentStep = BUNA_CEREMONY_STEPS[activeBunaStep]
            return (
              <div className="rounded-3xl bg-white dark:bg-[#161410] border border-[#B58A43]/35 shadow-2xl p-4 sm:p-8 lg:p-10 relative overflow-hidden transition-all duration-700">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Authentic Photography with Dynamic Glow Frame */}
                  <div className="lg:col-span-6 relative">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#B58A43]/40 aspect-[4/3] sm:h-[420px] bg-black">
                      <img
                        key={currentStep.image}
                        src={currentStep.image}
                        alt={currentStep.title}
                        className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20" />

                      {/* Top Overlay Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-[#E5C378]/60 text-white text-xs">
                          <span className="font-mono font-bold text-[#E5C378]">{currentStep.num}</span>
                          <span className="text-white/40">•</span>
                          <span className="font-semibold">{language === 'am' ? currentStep.amEyebrow : currentStep.eyebrow}</span>
                        </div>

                        {/* Coffee Bean Signs Cluster */}
                        <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/20">
                          {Array.from({ length: currentStep.beanCount }).map((_, bIdx) => (
                            <CoffeeBeanIcon key={bIdx} className="w-3.5 h-3.5 text-[#E5C378]" />
                          ))}
                        </div>
                      </div>

                      {/* Bottom Caption on Image */}
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#E5C378] font-bold block mb-1">
                          {language === 'am' ? 'የሥነ-ሥርዓቱ መገለጫ' : 'RITUAL VESSEL & ELEMENTS'}
                        </span>
                        <p className="font-sans text-xs sm:text-sm font-medium text-white/95 drop-shadow-md">
                          {currentStep.ritualItem}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic Narrative & Cultural Details */}
                  <div className="lg:col-span-6 space-y-5">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1 text-[#B58A43]">
                          {Array.from({ length: currentStep.beanCount }).map((_, bI) => (
                            <CoffeeBeanIcon key={bI} className="w-4 h-4 text-[#B58A43]" />
                          ))}
                        </div>
                        <span className="text-xs uppercase tracking-[0.25em] text-[#B58A43] font-bold">
                          {language === 'am' ? currentStep.amEyebrow : currentStep.eyebrow}
                        </span>
                      </div>

                      <h3 className="font-serif text-3xl sm:text-4xl text-[#1A1713] dark:text-[#F5F2EB] font-light leading-tight">
                        {language === 'am' ? currentStep.amTitle : currentStep.title}
                      </h3>
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-[#302B24]/85 dark:text-[#D1C7BA] leading-relaxed font-light">
                      {language === 'am' ? currentStep.amDescription : currentStep.description}
                    </p>

                    {/* Step 3 Special: The Three Sacred Rounds Cards */}
                    {currentStep.rounds && (
                      <div className="space-y-2 pt-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#B58A43] block">
                          {language === 'am' ? 'ሦስቱ ዙሮች (የመጠጣት ቅደም ተከተል)' : 'The Three Consecutive Cups:'}
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                          {currentStep.rounds.map((rnd, rIdx) => (
                            <div
                              key={rIdx}
                              className="p-3 rounded-xl bg-[#FAF8F5] dark:bg-[#1E1B16] border border-[#B58A43]/30 flex flex-col justify-between"
                            >
                              <div className="flex items-center gap-1 text-[#B58A43] mb-1">
                                {Array.from({ length: rIdx + 1 }).map((_, cbI) => (
                                  <CoffeeBeanIcon key={cbI} className="w-3 h-3" />
                                ))}
                              </div>
                              <span className="font-serif font-bold text-sm text-[#1A1713] dark:text-[#F5F2EB]">
                                {rnd.name}
                              </span>
                              <p className="text-[11px] text-[#302B24]/75 dark:text-[#D1C7BA] mt-1 leading-snug">
                                {rnd.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Proverb / Wisdom Quote Card */}
                    <div className="p-4 rounded-2xl bg-[#FAF8F5] dark:bg-[#1A1814] border-l-4 border-[#B58A43] space-y-1 shadow-xs">
                      <div className="flex items-center gap-1.5 text-[#B58A43]">
                        <CoffeeBeanIcon className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-mono uppercase tracking-widest font-bold">
                          {language === 'am' ? 'የሀበሻ ጥበብና ፍልስፍና' : 'Cultural Etiquette & Wisdom'}
                        </span>
                      </div>
                      <p className="font-serif text-sm sm:text-base italic text-[#1A1713] dark:text-[#F5F2EB] leading-relaxed">
                        {language === 'am' ? currentStep.amQuote : currentStep.quote}
                      </p>
                    </div>

                    {/* Step Navigation & Action Buttons */}
                    <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-[#B58A43]/20">
                      {/* Prev / Next Step Buttons */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setActiveBunaStep((prev) => (prev - 1 + BUNA_CEREMONY_STEPS.length) % BUNA_CEREMONY_STEPS.length)}
                          className="p-2 rounded-full border border-[#B58A43]/30 hover:border-[#B58A43] hover:bg-[#B58A43] hover:text-white transition-colors text-[#302B24] dark:text-[#F5F2EB]"
                          aria-label="Previous step"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <span className="text-xs font-mono font-bold text-[#B58A43]">
                          {String(activeBunaStep + 1).padStart(2, '0')} / {String(BUNA_CEREMONY_STEPS.length).padStart(2, '0')}
                        </span>
                        <button
                          onClick={() => setActiveBunaStep((prev) => (prev + 1) % BUNA_CEREMONY_STEPS.length)}
                          className="p-2 rounded-full border border-[#B58A43]/30 hover:border-[#B58A43] hover:bg-[#B58A43] hover:text-white transition-colors text-[#302B24] dark:text-[#F5F2EB]"
                          aria-label="Next step"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Read Full Buna Guide CTA */}
                      <button
                        onClick={() => navigateWithMesob('/journal/coffee-ceremony')}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#B58A43] hover:bg-[#9E7432] text-white text-xs font-bold uppercase tracking-widest shadow-md transition-all transform hover:-translate-y-0.5"
                      >
                        <CoffeeBeanIcon className="w-3.5 h-3.5 text-white" />
                        <span>{language === 'am' ? 'የቡና ሥነ-ሥርዓት መመሪያን አንብቡ' : 'Read Full Buna Guide'}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#FFF0D0]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })()}
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
