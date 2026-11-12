import React, { useState, useMemo } from 'react'
import { Search, SlidersHorizontal, Grid, List, Sparkles, Clock, MapPin, X } from 'lucide-react'
import { tours } from '../data/tours'
import TourCard from '../components/TourCard'
import { useMesob } from '../components/MesobTransition'
import { EthiopianDivider } from '../components/EthiopianPattern'

export default function Tours({
  savedTourIds = [],
  onToggleSaveTour = () => {},
  onSelectTourModal = () => {},
}) {
  const { navigateWithMesob } = useMesob()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedDuration, setSelectedDuration] = useState('all')
  const [layoutMode, setLayoutMode] = useState('grid') // 'grid' | 'list'

  const categories = [
    { id: 'all', label: 'All Styles' },
    { id: 'historical', label: 'Historical' },
    { id: 'wildlife', label: 'Wildlife & Nature' },
    { id: 'cultural', label: 'Cultural & Tribal' },
    { id: 'spiritual', label: 'Spiritual' },
    { id: 'adventure', label: 'Adventure' },
    { id: 'city', label: 'City Escape' },
  ]

  const durations = [
    { id: 'all', label: 'Any Duration' },
    { id: 'short', label: 'Short (1–5 Days)' },
    { id: 'medium', label: 'Medium (6–10 Days)' },
    { id: 'long', label: 'Epic (11–15 Days)' },
  ]

  const filteredTours = useMemo(() => {
    return tours.filter((tour) => {
      // Category match
      if (selectedCategory !== 'all' && tour.category !== selectedCategory) {
        return false
      }

      // Duration match
      if (selectedDuration === 'short' && (tour.daysCount > 5 || !tour.daysCount)) {
        return false
      }
      if (selectedDuration === 'medium' && (tour.daysCount < 6 || tour.daysCount > 10)) {
        return false
      }
      if (selectedDuration === 'long' && tour.daysCount < 11) {
        return false
      }

      // Search match
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
    <div className="min-h-screen bg-[#F5F0E6] text-[#202622] pt-24 sm:pt-28 pb-20 selection:bg-[#B86B48] selection:text-white">
      {/* Editorial Header Banner */}
      <div className="bg-[#173D32] text-[#F5F0E6] py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#C3A16A] font-semibold">
            Handcrafted Expeditions
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight">
            Curated <span className="italic font-normal text-[#C3A16A]">Journeys</span>
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#E9E0D1]/85 max-w-2xl mx-auto font-light leading-relaxed">
            Every itinerary in our collection is 100% private, carefully paced, and escorted by senior local scholars and naturalists. 
            Select an established journey or customize any element to suit your preferences.
          </p>
        </div>

        {/* Subtle decorative background circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#C3A16A]/10 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Filter and Search Bar Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#C3A16A]/30 p-5 sm:p-6 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-[#C3A16A] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by destination, keyword, monastery, or wildlife..."
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-[#C3A16A]/30 bg-[#F5F0E6]/30 text-xs text-[#202622] placeholder-[#202622]/50 focus:outline-none focus:border-[#173D32] transition-colors"
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
                className="w-full px-4 py-2.5 rounded-xl border border-[#C3A16A]/30 bg-[#F5F0E6]/30 text-xs text-[#202622] focus:outline-none focus:border-[#173D32]"
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
                    ? 'bg-[#173D32] text-[#F5F0E6] border-[#173D32]'
                    : 'bg-white text-[#202622]/60 border-[#C3A16A]/30 hover:bg-[#F5F0E6]'
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
                    ? 'bg-[#173D32] text-[#F5F0E6] border-[#173D32]'
                    : 'bg-white text-[#202622]/60 border-[#C3A16A]/30 hover:bg-[#F5F0E6]'
                }`}
                title="Detailed list view"
                aria-label="Detailed list view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="pt-2 border-t border-[#C3A16A]/20 flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-sans uppercase tracking-wider font-semibold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-[#173D32] text-[#F5F0E6] shadow-sm'
                      : 'bg-[#F5F0E6] text-[#202622]/70 hover:bg-[#E9E0D1] hover:text-[#173D32]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="text-[11px] text-[#202622]/60 font-sans">
              Showing <strong className="text-[#173D32]">{filteredTours.length}</strong> journeys
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
            <div className="text-center py-20 bg-white rounded-2xl border border-[#C3A16A]/30 p-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#E9E0D1]/60 flex items-center justify-center mx-auto text-[#B86B48]">
                <Search className="w-8 h-8 opacity-50" />
              </div>
              <h3 className="font-serif text-2xl text-[#173D32] font-semibold">
                No matching journeys found
              </h3>
              <p className="text-xs text-[#202622]/70 max-w-md mx-auto leading-relaxed">
                We couldn't find an itinerary matching your current search criteria. 
                Reset your filters or allow our concierges to tailor-make a journey specifically for you.
              </p>
              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleResetFilters}
                  className="px-5 py-2.5 rounded-full border border-[#173D32] text-[#173D32] text-xs font-semibold uppercase tracking-wider hover:bg-[#173D32] hover:text-white transition-colors"
                >
                  Reset All Filters
                </button>
                <button
                  onClick={() => navigateWithMesob('/book')}
                  className="px-5 py-2.5 rounded-full bg-[#B86B48] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#a35c3b] transition-colors"
                >
                  Plan Custom Itinerary
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Custom Tailor-Made Banner at bottom of tours list */}
        <div className="mt-20 bg-gradient-to-r from-[#173D32] to-[#284D3C] text-[#F5F0E6] rounded-2xl p-8 sm:p-12 shadow-xl border border-[#C3A16A]/30 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C3A16A] font-bold">
              Private Curation
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
              Prefer a completely customized route?
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#E9E0D1]/80 leading-relaxed font-light">
              Every itinerary can be adjusted in length, accommodation tier, private flight inclusions, or special cultural access.
            </p>
          </div>

          <button
            onClick={() => navigateWithMesob('/book')}
            className="px-7 py-3.5 rounded-full bg-[#B86B48] hover:bg-[#a35c3b] text-white font-sans text-xs uppercase tracking-widest font-bold shadow-lg transition-all shrink-0"
          >
            Design Your Own Journey
          </button>
        </div>
      </div>
    </div>
  )
}
