import React, { useState, useMemo } from 'react'
import { Search, Grid, List, Clock, X, ArrowRight } from 'lucide-react'
import { tours } from '../data/tours'
import TourCard from '../components/TourCard'
import { useMesob } from '../components/MesobTransition'
import { useLanguage } from '../context/LanguageContext'
import { TiletBorderPrimary, TiletDivider } from '../components/TiletPatterns'

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
    { id: 'all', label: language === 'am' ? 'ሁሉም ዓይነቶች' : 'All Tours' },
    { id: 'historical', label: language === 'am' ? 'ታሪካዊ' : 'Historical' },
    { id: 'cultural', label: language === 'am' ? 'ባህላዊ' : 'Cultural & Heritage' },
    { id: 'spiritual', label: language === 'am' ? 'መንፈሳዊ' : 'Spiritual' },
    { id: 'wildlife', label: language === 'am' ? 'ዱር አራዊት' : 'Wildlife' },
    { id: 'adventure', label: language === 'am' ? 'ጀብዱ' : 'Highland Treks' },
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
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#0E0D0B] text-[#1A1713] dark:text-[#F5F2EB] pt-24 sm:pt-28 pb-20 selection:bg-[#B58A43] selection:text-white transition-colors duration-300">
      {/* Editorial Header Banner */}
      <div className="relative bg-gradient-to-b from-[#F3EEE5] to-[#FAF8F5] dark:from-[#161410] dark:to-[#0E0D0B] border-b border-[#B58A43]/20 py-14 sm:py-18 overflow-hidden">
        <TiletBorderPrimary className="absolute top-0 left-0 right-0 w-full text-[#B58A43] opacity-60" height={10} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 dark:bg-[#1A1814] border border-[#B58A43]/30 text-[#B58A43] text-[11px] font-sans font-bold uppercase tracking-[0.25em] shadow-sm">
            <span>{language === 'am' ? 'የተመረጡ ጉዞዎች' : 'Cultural Tours in Ethiopia'}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#1A1713] dark:text-[#F5F2EB] tracking-tight">
            {language === 'am' ? 'የኢትዮጵያ ባህላዊ' : 'Cultural'}{' '}
            <span className="italic font-normal text-[#B58A43]">
              {language === 'am' ? 'ጉዞዎች' : 'Tours'}
            </span>
          </h1>

          <p className="font-sans text-xs sm:text-sm text-[#302B24]/75 dark:text-[#D1C7BA] max-w-xl mx-auto font-light leading-relaxed">
            {t('toursHeaderDesc')}
          </p>

          <TiletDivider className="w-48 mx-auto text-[#B58A43] pt-1 opacity-70" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Simple & Clean Filter Bar */}
        <div className="bg-white dark:bg-[#161410] rounded-2xl shadow-md border border-[#B58A43]/25 p-4 sm:p-5 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            {/* Search Input */}
            <div className="md:col-span-7 relative">
              <Search className="w-4 h-4 text-[#B58A43] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('searchPlaceholder')}
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-[#B58A43]/25 bg-[#FAF8F5] dark:bg-[#1A1814] text-xs text-[#1A1713] dark:text-[#F5F2EB] placeholder-[#302B24]/45 dark:placeholder-[#8C806E] focus:outline-none focus:border-[#B58A43] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Duration Selector */}
            <div className="md:col-span-3">
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-[#B58A43]/25 bg-[#FAF8F5] dark:bg-[#1A1814] text-xs text-[#1A1713] dark:text-[#F5F2EB] focus:outline-none focus:border-[#B58A43]"
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
                className={`p-2 rounded-lg border transition-colors ${
                  layoutMode === 'grid'
                    ? 'bg-[#B58A43] text-white border-[#B58A43]'
                    : 'bg-transparent text-[#302B24]/60 dark:text-[#D1C7BA] border-[#B58A43]/25 hover:bg-[#FAF8F5] dark:hover:bg-[#1E1B16]'
                }`}
                title="Grid view"
                aria-label="Grid view"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setLayoutMode('list')}
                className={`p-2 rounded-lg border transition-colors ${
                  layoutMode === 'list'
                    ? 'bg-[#B58A43] text-white border-[#B58A43]'
                    : 'bg-transparent text-[#302B24]/60 dark:text-[#D1C7BA] border-[#B58A43]/25 hover:bg-[#FAF8F5] dark:hover:bg-[#1E1B16]'
                }`}
                title="Detailed list view"
                aria-label="Detailed list view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="pt-2 border-t border-[#B58A43]/15 flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1 rounded-full text-[11px] font-sans uppercase tracking-wider font-semibold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-[#B58A43] text-white shadow-xs'
                      : 'bg-[#FAF8F5] dark:bg-[#1A1814] border border-[#B58A43]/20 text-[#302B24]/80 dark:text-[#D1C7BA] hover:border-[#B58A43]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="text-[11px] text-[#302B24]/60 dark:text-[#9E9382] font-sans">
              {language === 'am' ? 'የሚታዩት' : 'Showing'}{' '}
              <strong className="text-[#B58A43] font-bold">{filteredTours.length}</strong>{' '}
              {language === 'am' ? 'ጉዞዎች' : 'tours'}
            </div>
          </div>
        </div>

        {/* Results Area - Clean, Spacious & Simple for the eyes */}
        <div className="mt-8">
          {filteredTours.length > 0 ? (
            layoutMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
              <div className="space-y-5">
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
            <div className="text-center py-16 bg-white dark:bg-[#161410] rounded-2xl border border-[#B58A43]/25 p-8 space-y-3">
              <h3 className="font-serif text-2xl text-[#1A1713] dark:text-[#F5F2EB] font-normal">
                {t('noToursFound')}
              </h3>
              <p className="text-xs text-[#302B24]/70 dark:text-[#D1C7BA] max-w-md mx-auto leading-relaxed">
                {language === 'am'
                  ? 'በመረጡት መስፈርት የተገኘ ጉዞ የለም። እባክዎ ምርጫዎን ያጽዱ ወይም ልዩ ጉዞ እንዲዘጋጅልዎ ይጠይቁ።'
                  : "We couldn't find an itinerary matching your current search criteria. Reset your filters or allow our concierges to tailor-make a journey specifically for you."}
              </p>
              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleResetFilters}
                  className="px-5 py-2 rounded-full border border-[#B58A43] text-[#B58A43] text-xs font-semibold uppercase tracking-wider hover:bg-[#B58A43] hover:text-white transition-colors"
                >
                  {t('resetFilters')}
                </button>
                <button
                  onClick={() => navigateWithMesob('/book')}
                  className="px-5 py-2 rounded-full bg-[#B58A43] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#9E7432] transition-colors"
                >
                  {language === 'am' ? 'ብጁ ጉዞ ያዘጋጁ' : 'Plan Custom Itinerary'}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Tailor-Made Banner at bottom */}
        <div className="mt-16 bg-white dark:bg-[#161410] rounded-2xl p-6 sm:p-10 shadow-sm border border-[#B58A43]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl text-center md:text-left">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B58A43] font-bold">
              {language === 'am' ? 'የግል ብጁ ዝግጅት' : 'Private Curation'}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1713] dark:text-[#F5F2EB] font-normal">
              {language === 'am'
                ? 'ሙሉ በሙሉ እንደ ፍላጎትዎ የተዘጋጀ ጉዞ ይፈልጋሉ?'
                : 'Prefer a completely customized cultural route?'}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#302B24]/75 dark:text-[#D1C7BA] leading-relaxed font-light">
              {language === 'am'
                ? 'እያንዳንዱ የጉዞ መስመር በቆይታ ጊዜ፣ በማረፊያ ደረጃ ወይም በልዩ ባህላዊ ተደራሽነት እንደ ፍላጎትዎ ሊስተካከል ይችላል።'
                : 'Every itinerary can be adjusted in length, accommodation tier, domestic flights, or special cultural access.'}
            </p>
          </div>

          <button
            onClick={() => navigateWithMesob('/book')}
            className="px-7 py-3 rounded-full bg-gradient-to-r from-[#B58A43] to-[#9E7432] hover:from-[#c49a50] hover:to-[#B58A43] text-white font-sans text-xs uppercase tracking-widest font-bold shadow-md transition-all shrink-0 flex items-center gap-2"
          >
            <span>{language === 'am' ? 'የራስዎን ጉዞ ይንደፉ' : 'Design Your Own Journey'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
