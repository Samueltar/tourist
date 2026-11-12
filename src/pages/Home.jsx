import React, { useState } from 'react'
import { ArrowRight, Compass, ShieldCheck, Heart, Sparkles, MapPin, Calendar, Clock, ChevronDown, CheckCircle2 } from 'lucide-react'
import { tours, destinations, journalPosts } from '../data/tours'
import TourCard from '../components/TourCard'
import { useMesob } from '../components/MesobTransition'
import { EthiopianDivider, EthiopianBorderBand } from '../components/EthiopianPattern'

export default function Home({
  savedTourIds = [],
  onToggleSaveTour = () => {},
  onSelectTourModal = () => {},
}) {
  const { navigateWithMesob } = useMesob()
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeRegionTab, setActiveRegionTab] = useState('all')

  const filteredTours = activeCategory === 'all'
    ? tours.slice(0, 4)
    : tours.filter((t) => t.category === activeCategory).slice(0, 4)

  const regionDestinations = activeRegionTab === 'all'
    ? destinations.slice(0, 6)
    : destinations.filter((d) => d.region.toLowerCase() === activeRegionTab.toLowerCase())

  return (
    <div className="min-h-screen bg-[#F5F0E6] text-[#202622] overflow-x-hidden selection:bg-[#B86B48] selection:text-white">
      {/* ── 1. HERO SECTION ─────────────────────────────────── */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#173D32]">
        {/* Cinematic Backdrop Image with Ken Burns Zoom */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/dw1ohipim/image/upload/v1784044758/ohuohsbdy66wnnbgc6zw.jpg"
            alt="Lalibela Rock Church in Ethiopia"
            className="w-full h-full object-cover ken-burns brightness-[0.7] contrast-[1.05]"
          />
          {/* Subtle multi-layer editorial gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#173D32] via-[#173D32]/40 to-black/60" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#173D32]/30 to-[#173D32]/80" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 text-center flex flex-col items-center">
          {/* Top Live Highland Indicator */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-[#C3A16A]/40 text-[#E9E0D1] text-[11px] font-sans uppercase tracking-[0.2em] mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#C3A16A] animate-ping" />
            <span>Addis Ababa • Gateway to 3,000 Years of Heritage</span>
          </div>

          {/* Main Editorial Headline */}
          <div className="space-y-2 max-w-5xl">
            <span className="block font-sans text-xs sm:text-sm uppercase tracking-[0.4em] text-[#C3A16A] font-semibold">
              Ancient Path Ethiopia
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#F5F0E6] tracking-tight leading-[1.05]">
              Beyond the <span className="italic font-normal text-[#C3A16A]">Expected.</span>
            </h1>
          </div>

          {/* Editorial Subtitle */}
          <p className="mt-6 max-w-2xl font-sans text-sm sm:text-base md:text-lg text-[#E9E0D1]/90 font-light leading-relaxed">
            Thoughtful, private journeys through 3,000 years of living history, 
            soaring alpine highlands, and the spiritual soul of the Horn of Africa.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => navigateWithMesob('/tours')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#B86B48] to-[#9E5536] hover:from-[#c2734f] hover:to-[#B86B48] text-white font-sans text-xs uppercase tracking-widest font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <span>Explore Curated Journeys</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigateWithMesob('/destinations')}
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-[#C3A16A]/40 text-[#F5F0E6] font-sans text-xs uppercase tracking-widest font-semibold transition-all flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4 text-[#C3A16A]" />
              <span>Discover Regions</span>
            </button>
          </div>

          {/* Quick Route Highlights Pill Row */}
          <div className="mt-14 hidden md:flex items-center gap-6 text-xs text-[#E9E0D1]/80 border-t border-[#C3A16A]/20 pt-6">
            <span className="text-[#C3A16A] uppercase font-bold tracking-wider">Signature Routes:</span>
            <button onClick={() => navigateWithMesob('/destinations/lalibela')} className="hover:text-white transition-colors">
              Lalibela Rock Sanctuaries
            </button>
            <span>•</span>
            <button onClick={() => navigateWithMesob('/destinations/simien-mountains')} className="hover:text-white transition-colors">
              Simien Roof of Africa
            </button>
            <span>•</span>
            <button onClick={() => navigateWithMesob('/destinations/bale-mountains')} className="hover:text-white transition-colors">
              Bale Cloud Forests
            </button>
            <span>•</span>
            <button onClick={() => navigateWithMesob('/destinations/omo-valley')} className="hover:text-white transition-colors">
              Omo Valley Cultures
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-[#E9E0D1]/60">
          <span className="text-[9px] uppercase tracking-widest mb-1">Scroll to discover</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#C3A16A]" />
        </div>
      </section>

      {/* ── 2. EDITORIAL STATEMENT / MANIFESTO ─────────────── */}
      <section className="relative py-20 sm:py-28 bg-[#F5F0E6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[#B86B48]">
                <Sparkles className="w-3.5 h-3.5 text-[#C3A16A]" />
                <span>The Unbroken Continuum</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#173D32] leading-tight">
                Not a museum of ruins.<br />
                <span className="italic font-normal text-[#B86B48]">An unbroken, living civilization.</span>
              </h2>

              <p className="font-sans text-sm sm:text-base text-[#202622]/85 leading-relaxed">
                Ethiopia is unlike any other country on Earth. It is the only African nation that was never 
                colonized, preserving an indigenous script, a distinct calendar seven years behind the Gregorian, 
                and a continuous Christian, Islamic, and indigenous heritage dating back millennia.
              </p>

              <blockquote className="border-l-2 border-[#C3A16A] pl-5 italic font-serif text-lg sm:text-xl text-[#173D32]">
                "When you stand inside a rock-hewn sanctuary in Lalibela, the priest chanting before you is singing the 
                same Ge'ez prayers his ancestors chanted eight hundred years ago. The flame was lit in the 12th century 
                and has never been extinguished."
              </blockquote>

              <div className="pt-2 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#C3A16A]">
                  <img
                    src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=200&q=80"
                    alt="Abenezer Sisay"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="block font-serif text-base font-semibold text-[#173D32]">
                    Abenezer Sisay
                  </span>
                  <span className="block font-sans text-xs text-[#202622]/60 uppercase tracking-wider">
                    Founder, Ancient Path Ethiopia
                  </span>
                </div>
              </div>
            </div>

            {/* Right Asymmetric Image Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-[#C3A16A]/30">
                <img
                  src="https://res.cloudinary.com/dw1ohipim/image/upload/v1784044760/uaxjuqytkud5kywfxamz.jpg"
                  alt="Lalibela Ethiopian Priest holding ancient brass cross"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173D32]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-[#C3A16A] font-semibold">
                    Living Heritage
                  </span>
                  <p className="font-serif text-lg text-white font-medium mt-1">
                    Priest of Bete Maryam holding the 12th-century Lalibela processional cross.
                  </p>
                </div>
              </div>

              {/* Decorative accent card floating in background */}
              <div className="absolute -bottom-6 -left-6 z-20 bg-[#173D32] text-[#F5F0E6] p-6 rounded-2xl shadow-xl max-w-xs border border-[#C3A16A]/40 hidden sm:block">
                <div className="flex items-center gap-2 text-[#C3A16A] mb-2 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Thoughtful Travel</span>
                </div>
                <p className="text-xs text-[#E9E0D1]/90 leading-relaxed">
                  Every expedition directly funds local highland heritage conservation and family-run micro-enterprises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. FEATURED CURATED JOURNEYS ─────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#E9E0D1]/40 border-y border-[#C3A16A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Category Filter Buttons */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B86B48] font-semibold">
                Curated Expeditions
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#173D32] mt-1">
                Journeys Crafted for <span className="italic font-normal text-[#C3A16A]">Depth</span>
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Journeys' },
                { id: 'historical', label: 'Historical' },
                { id: 'wildlife', label: 'Wildlife' },
                { id: 'cultural', label: 'Cultural' },
                { id: 'spiritual', label: 'Spiritual' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-sans uppercase tracking-wider font-semibold transition-all ${
                    activeCategory === cat.id
                      ? 'bg-[#173D32] text-[#F5F0E6] shadow'
                      : 'bg-white/80 text-[#202622]/70 hover:bg-white hover:text-[#173D32]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Tour Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredTours.map((tour) => (
              <TourCard
                key={tour.id}
                tour={tour}
                isSaved={savedTourIds.includes(tour.id)}
                onToggleSave={onToggleSaveTour}
                onQuickView={onSelectTourModal}
              />
            ))}
          </div>

          {/* Bottom Explore All CTA */}
          <div className="mt-14 text-center">
            <button
              onClick={() => navigateWithMesob('/tours')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#173D32] hover:bg-[#284D3C] text-[#F5F0E6] text-xs font-bold uppercase tracking-widest transition-all shadow-md hover:shadow-lg"
            >
              <span>View All 9 Curated Journeys</span>
              <ArrowRight className="w-4 h-4 text-[#C3A16A]" />
            </button>
          </div>
        </div>
      </section>

      {/* ── 4. DESTINATION DISCOVERY MATRIX ─────────────────── */}
      <section className="py-20 sm:py-28 bg-[#F5F0E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B86B48] font-semibold">
              Destination Discovery
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#173D32] mt-1">
              The Landscapes of <span className="italic font-normal text-[#C3A16A]">Ethiopia</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#202622]/80 mt-3 leading-relaxed">
              From 4,500-meter afro-alpine summits to salt depressions 120 meters below sea level, 
              explore ten distinct geographical and cultural regions across the country.
            </p>

            {/* Region Tabs */}
            <div className="mt-8 inline-flex p-1.5 rounded-full bg-[#E9E0D1]/60 border border-[#C3A16A]/30">
              {[
                { id: 'all', label: 'All Regions' },
                { id: 'north', label: 'The North' },
                { id: 'south', label: 'The South' },
                { id: 'east', label: 'The East' },
                { id: 'central', label: 'Central' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveRegionTab(tab.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-sans uppercase tracking-wider font-semibold transition-all ${
                    activeRegionTab === tab.id
                      ? 'bg-[#173D32] text-[#F5F0E6] shadow-sm'
                      : 'text-[#202622]/70 hover:text-[#173D32]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {regionDestinations.map((dest) => (
              <div
                key={dest.id}
                onClick={() => navigateWithMesob(`/destinations/${dest.id}`)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer h-96 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-[#C3A16A]/20"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 group-hover:from-black/90 transition-colors" />

                {/* Region Tag at Top */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#C3A16A] text-[10px] font-bold uppercase tracking-wider border border-[#C3A16A]/40">
                    {dest.region} Ethiopia
                  </span>
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[11px] uppercase tracking-widest text-[#E9E0D1]/80 font-light">
                    {dest.tagline}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white group-hover:text-[#C3A16A] transition-colors mt-0.5">
                    {dest.name}
                  </h3>
                  <p className="font-sans text-xs text-[#E9E0D1]/85 line-clamp-2 mt-2 leading-relaxed">
                    {dest.summary}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs text-[#C3A16A]">
                    <span className="font-sans font-medium">Altitude: {dest.altitude}</span>
                    <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Explore</span>
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
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-[#173D32] hover:bg-[#173D32] hover:text-[#F5F0E6] text-[#173D32] text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <span>Explore All 10 Destinations & Regional Maps</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* ── 5. THE LIVING RITUAL SPOTLIGHT: THE BUNA CEREMONY & MESOB ── */}
      <section className="py-20 sm:py-28 bg-[#173D32] text-[#F5F0E6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Left: Mesob & Coffee Ceremony Photography */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#C3A16A]/40">
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
                  alt="Traditional Ethiopian Coffee Ceremony with Frankincense"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173D32]/90 via-transparent to-black/30" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] uppercase tracking-widest text-[#C3A16A] font-bold">
                    The Sacred Welcome
                  </span>
                  <p className="font-serif text-xl text-white font-medium mt-1">
                    Buna & Frankincense: The Ancient Art and Soul of Ethiopian Hospitality.
                  </p>
                </div>
              </div>

              {/* Decorative Corner Badge */}
              <div className="absolute -top-4 -right-4 bg-[#B86B48] text-white p-4 rounded-xl shadow-lg border border-[#C3A16A]/40 text-center hidden sm:block">
                <span className="block font-serif text-2xl font-bold">1,000+</span>
                <span className="block text-[9px] uppercase tracking-wider font-sans">
                  Years of Buna Ritual
                </span>
              </div>
            </div>

            {/* Narrative Right: The Mesob & Dining Heritage */}
            <div className="lg:col-span-6 space-y-6">
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#C3A16A] font-semibold">
                Cultural Intimacy
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#F5F0E6] leading-tight">
                The Mesob: Where travel becomes a <span className="italic font-normal text-[#C3A16A]">shared table</span>.
              </h2>

              <p className="font-sans text-sm sm:text-base text-[#E9E0D1]/85 leading-relaxed">
                In Ethiopian tradition, dining is never a solitary act. Food is served inside the 
                <strong className="text-[#C3A16A] font-semibold"> Mesob</strong>—a handwoven lidded basket crafted from vibrant dried grass. 
                When the conical lid is lifted off, it reveals a round platter of Injera lined with fragrant stews, 
                inviting everyone present to eat from the single shared plate.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 bg-[#284D3C]/40 p-4 rounded-xl border border-[#C3A16A]/20">
                  <span className="w-8 h-8 rounded-full bg-[#C3A16A]/20 border border-[#C3A16A] text-[#C3A16A] flex items-center justify-center font-serif font-bold shrink-0">
                    1
                  </span>
                  <div>
                    <h4 className="font-serif text-base text-[#F5F0E6] font-medium">The Gursha Gesture</h4>
                    <p className="text-xs text-[#E9E0D1]/75 mt-0.5">
                      The act of placing a morsel of food directly into the mouth of another—a sacred expression of friendship and mutual care.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#284D3C]/40 p-4 rounded-xl border border-[#C3A16A]/20">
                  <span className="w-8 h-8 rounded-full bg-[#C3A16A]/20 border border-[#C3A16A] text-[#C3A16A] flex items-center justify-center font-serif font-bold shrink-0">
                    2
                  </span>
                  <div>
                    <h4 className="font-serif text-base text-[#F5F0E6] font-medium">The Three Rounds of Buna</h4>
                    <p className="text-xs text-[#E9E0D1]/75 mt-0.5">
                      Awel (the first brew), Kalei (the second reflection), and Bereka (the final blessing)—bringing conversation to its deepest place.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => navigateWithMesob('/journal/coffee-ceremony')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B86B48] hover:bg-[#a35c3b] text-white text-xs font-bold uppercase tracking-widest shadow transition-all"
                >
                  <span>Read Essay: The Buna Ritual</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. EDITORIAL STORIES / JOURNAL DISPATCHES ───────── */}
      <section className="py-20 sm:py-28 bg-[#F5F0E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B86B48] font-semibold">
                Field Journal
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#173D32] mt-1">
                Dispatches from the <span className="italic font-normal text-[#C3A16A]">Path</span>
              </h2>
            </div>

            <button
              onClick={() => navigateWithMesob('/journal')}
              className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-widest text-[#173D32] hover:text-[#B86B48] transition-colors"
            >
              <span>Explore All Field Essays</span>
              <ArrowRight className="w-4 h-4 text-[#C3A16A]" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {journalPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => navigateWithMesob(`/journal/${post.id}`)}
                className="group cursor-pointer flex flex-col bg-white rounded-2xl overflow-hidden border border-[#C3A16A]/20 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#173D32] text-[#F5F0E6] text-[10px] font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] text-[#202622]/60 mb-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-serif text-xl font-medium text-[#173D32] group-hover:text-[#B86B48] transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="font-sans text-xs text-[#202622]/75 mt-2.5 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#C3A16A]/20 flex items-center justify-between text-xs text-[#B86B48] font-semibold">
                    <span>Read Full Essay</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. PRIVATE BESPOKE CURATION CTA BANNER ──────────── */}
      <section className="py-20 sm:py-28 bg-gradient-to-r from-[#173D32] via-[#284D3C] to-[#173D32] text-[#F5F0E6] relative overflow-hidden">
        {/* Subtle decorative geometry */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#C3A16A_1px,_transparent_1px)] bg-[size:32px_32px]" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#C3A16A] font-semibold">
            Bespoke Curation
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light leading-tight">
            No two journeys should ever be identical.<br />
            <span className="italic font-normal text-[#C3A16A]">Let us design yours.</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#E9E0D1]/85 max-w-2xl mx-auto leading-relaxed">
            Whether you envision helicopter flights over the Danakil volcanic craters, 
            private dawn liturgical viewings in Lalibela, or trekking the high plateau of the Bale Mountains, 
            our travel designers will craft an itinerary matched precisely to your pace and passions.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigateWithMesob('/book')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#B86B48] to-[#9E5536] hover:from-[#c2734f] hover:to-[#B86B48] text-white font-sans text-xs uppercase tracking-widest font-bold shadow-xl transition-all"
            >
              Start Your Custom Plan
            </button>
            <button
              onClick={() => navigateWithMesob('/contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#C3A16A]/40 hover:bg-[#173D32] text-[#F5F0E6] font-sans text-xs uppercase tracking-widest font-semibold transition-all"
            >
              Speak with a Concierge
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
