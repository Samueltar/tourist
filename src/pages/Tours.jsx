import React, { useState, useMemo } from 'react'
import { Search, Grid, List, Sparkles, Clock, MapPin, X, Compass, ArrowRight } from 'lucide-react'
import { tours } from '../data/tours'
import TourCard from '../components/TourCard'
import { useMesob } from '../components/MesobTransition'
import { useLanguage } from '../context/LanguageContext'
import { TiletBorderPrimary, TiletDivider, TiletCorner } from '../components/TiletPatterns'

export default function Tours({
  savedTourIds = [],
  onToggleSaveTour = () => {},
  onSelectTourModal = () => {},
}) {
  const { navigateWithMesob } = useMesob()
  const { t, language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedDuration, setSelectedDuration] = useState('all')
  const [layoutMode, setLayoutMode] = useState('grid')

  const categories = [
    { id: 'all', label: language === 'am' ? 'ሁሉም ዓይነቶች' : 'All Styles' },
    { id: 'historical', label: language === 'am' ? 'ታሪካዊ' : 'Historical' },
    { id: 'wildlife', label: language === 'am' ? 'ዱር አራዊት' : 'Wildlife & Nature' },
    { id: 'cultural', label: language === 'am' ? 'ባህላዊ' : 'Cultural & Tribal' },
    { id: 'spiritual', label: language === 'am' ? 'መንፈሳዊ' : 'Spiritual' },
    { id: 'adventure', label: language === 'am' ? 'ጀብዱ' : 'Adventure' },
    { id: 'city', label: language === 'am' ? 'የከተማ እረፍት' : 'City Escape' },
  ]

  const durations = [
    { id: 'all', label: language === 'am' ? 'ማንኛውም ቆይታ' : 'Any Duration' },
    { id: 'short', label: language === 'am' ? 'አጭር (1–5 ቀናት)' : 'Short (1–5 Days)' },
    { id: 'medium', label: language === 'am' ? 'መካከለኛ (6–10 ቀናት)' : 'Medium (6–10 Days)' },
    { id: 'long', label: language === 'am' ? 'ረጅም (11–15 ቀናት)' : 'Epic (11–15 Days)' },
  ]

  const filteredTours = useMemo(() => {
    return tours.filter((tour) => {
      if (selectedCategory !== 'all' && tour.category !== selectedCategory) {
        return false
      }
      if (selectedDuration === 'short' && (tour.daysCount > 5 || !tour.daysCount)) {
        return false
      }
      if (selectedDuration === 'medium' && (tour.daysCount < 6 || tour.daysCount > 10)) {
        return false
      }
      if (selectedDuration === 'long' && tour.daysCount < 11) {
        return false
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase()
        const matchTitle = tour.title.toLowerCase().includes(query)
        const matchRoute = tour.route.toLowerCase().includes(query)
        const matchSummary = tour.summary.toLowerCase().includes(query)
        const matchHighlights = tour.highlights?.some((h) => h.toLowerCase().includes(query))
        if (!matchTitle && !matchRoute && !matchSummary && !matchHighlights) {
          return false
        }
      }
      return true
    })
  }, [selectedCategory, selectedDuration, searchQuery])

  const handleResetFilters = () => {
    setSelectedCategory('all')
    setSelectedDuration('all')
    setSearchQuery('')
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1713] pt-24 sm:pt-28 pb-20 selection:bg-[#B58A43] selection:text-white">
      {/* Editorial Header Banner with Ethiopian Tilet Accents */}
      <div className="relative bg-gradient-to-b from-[#F3EEE5] to-[#FAF8F5] border-b border-[#B58A43]/20 py-16 sm:py-20 overflow-hidden">
        <TiletBorderPrimary className="absolute top-0 left-0 right-0 w-full text-[#B58A43] opacity-60" height={10} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#B58A43]/30 text-[#B58A43] text-[11px] font-sans font-bold uppercase tracking-[0.25em] shadow-sm">
            <span>{t('toursHeaderEyebrow')}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1A1713] tracking-tight">
            {language === 'am' ? 'የተመረጡ' : 'Curated'}{' '}
            <span className="italic font-light text-[#B58A43]">
              {language === 'am' ? 'ጉዞዎች' : 'Journeys'}
            </span>
          </h1>

          <p className="font-sans text-xs sm:text-sm text-[#302B24]/80 max-w-2xl mx-auto font-light leading-relaxed">
            {t('toursHeaderDesc')}
          </p>

          <TiletDivider className="w-56 mx-auto text-[#B58A43] pt-2 opacity-75" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Filter and Search Bar Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#B58A43]/25 p-5 sm:p-6 space-y-5 relative">
          <TiletCorner position="top-right" className="text-[#B58A43]/30 pointer-events-none" size={28} />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-[#B58A43] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('searchPlaceholder')}
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-[#B58A43]/30 bg-[#FAF8F5] text-xs text-[#1A1713] placeholder-[#302B24]/45 focus:outline-none focus:border-[#B58A43] focus:ring-1 focus:ring-[#B58A43] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Duration Selector */}
            <div className="md:col-span-4">
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#B58A43]/30 bg-[#FAF8F5] text-xs text-[#1A1713] focus:outline-none focus:border-[#B58A43]"
              >
                {durations.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Layout Toggle (Grid vs List) */}
            <div className="md:col-span-2 flex items-center justify-end gap-1.5">
              <button
                onClick={() => setLayoutMode('grid')}
                className={`p-2.5 rounded-lg border transition-colors ${
                  layoutMode === 'grid'
                    ? 'bg-[#1A1713] text-[#FAF8F5] border-[#1A1713]'
                    : 'bg-white text-[#302B24]/60 border-[#B58A43]/30 hover:bg-[#FAF8F5]'
                }`}
                title="Grid view"
                aria-label="Grid view"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setLayoutMode('list')}
                className={`p-2.5 rounded-lg border transition-colors ${
                  layoutMode === 'list'
                    ? 'bg-[#1A1713] text-[#FAF8F5] border-[#1A1713]'
                    : 'bg-white text-[#302B24]/60 border-[#B58A43]/30 hover:bg-[#FAF8F5]'
                }`}
                title="Detailed list view"
                aria-label="Detailed list view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="pt-3 border-t border-[#B58A43]/15 flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-[11px] font-sans uppercase tracking-wider font-semibold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-[#1A1713] text-[#FAF8F5] shadow-sm'
                      : 'bg-[#FAF8F5] border border-[#B58A43]/20 text-[#302B24]/80 hover:bg-[#EFE7D9] hover:text-[#1A1713]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="text-[11px] text-[#302B24]/70 font-sans">
              {language === 'am' ? 'የሚታዩት' : 'Showing'}{' '}
              <strong className="text-[#B58A43] font-bold">{filteredTours.length}</strong>{' '}
              {language === 'am' ? 'ጉዞዎች' : 'journeys'}
            </div>
          </div>
        </div>

        {/* Results Area */}
        <div className="mt-10">
          {filteredTours.length > 0 ? (
            layoutMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTours.map((tour) => (
                  <TourCard
                    key={tour.id}
                    tour={tour}
                    isSaved={savedTourIds.includes(tour.id)}
                    onToggleSave={onToggleSaveTour}
                    onQuickView={onSelectTourModal}
                    layout="vertical"
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredTours.map((tour) => (
                  <TourCard
                    key={tour.id}
                    tour={tour}
                    isSaved={savedTourIds.includes(tour.id)}
                    onToggleSave={onToggleSaveTour}
                    onQuickView={onSelectTourModal}
                    layout="horizontal"
                  />
                ))}
              </div>
            )
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-[#B58A43]/25 p-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FAF8F5] border border-[#B58A43]/30 flex items-center justify-center mx-auto text-[#B58A43]">
                <Search className="w-7 h-7 opacity-50" />
              </div>
              <h3 className="font-serif text-2xl text-[#1A1713] font-semibold">
                {t('noToursFound')}
              </h3>
              <p className="text-xs text-[#302B24]/70 max-w-md mx-auto leading-relaxed">
                {language === 'am'
                  ? 'በመረጡት መስፈርት የተገኘ ጉዞ የለም። እባክዎ ምርጫዎን ያጽዱ ወይም ልዩ ጉዞ እንዲዘጋጅልዎ ይጠይቁ።'
                  : "We couldn't find an itinerary matching your current search criteria. Reset your filters or allow our concierges to tailor-make a journey specifically for you."}
              </p>
              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleResetFilters}
                  className="px-5 py-2.5 rounded-full border border-[#1A1713] text-[#1A1713] text-xs font-semibold uppercase tracking-wider hover:bg-[#1A1713] hover:text-white transition-colors"
                >
                  {t('resetFilters')}
                </button>
                <button
                  onClick={() => navigateWithMesob('/book')}
                  className="px-5 py-2.5 rounded-full bg-[#B58A43] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#916B2D] transition-colors"
                >
                  {language === 'am' ? 'ብጁ ጉዞ ያዘጋጁ' : 'Plan Custom Itinerary'}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Custom Tailor-Made Banner at bottom of tours list */}
        <div className="mt-20 bg-white text-[#1A1713] rounded-2xl p-8 sm:p-12 shadow-xl border border-[#B58A43]/30 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <TiletCorner position="top-left" className="text-[#B58A43]/25 pointer-events-none" size={36} />
          <TiletCorner position="bottom-right" className="text-[#B58A43]/25 pointer-events-none" size={36} />

          <div className="space-y-2 max-w-xl text-center md:text-left relative z-10">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#B58A43] font-bold">
              {language === 'am' ? 'የግል ብጁ ዝግጅት' : 'Private Curation'}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1713] font-medium">
              {language === 'am'
                ? 'ሙሉ በሙሉ እንደ ፍላጎትዎ የተዘጋጀ ጉዞ ይፈልጋሉ?'
                : 'Prefer a completely customized route?'}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#302B24]/75 leading-relaxed font-light">
              {language === 'am'
                ? 'እያንዳንዱ የጉዞ መስመር በቆይታ ጊዜ፣ በማረፊያ ደረጃ፣ በግል በረራ ወይም በልዩ ባህላዊ ተደራሽነት እንደ ፍላጎትዎ ሊስተካከል ይችላል።'
                : 'Every itinerary can be adjusted in length, accommodation tier, private flight inclusions, or special cultural access.'}
            </p>
          </div>

          <button
            onClick={() => navigateWithMesob('/book')}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#B58A43] to-[#916B2D] hover:from-[#C49A50] hover:to-[#B58A43] text-white font-sans text-xs uppercase tracking-widest font-bold shadow-md transition-all shrink-0 flex items-center gap-2 relative z-10"
          >
            <span>{language === 'am' ? 'የራስዎን ጉዞ ይንደፉ' : 'Design Your Own Journey'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
