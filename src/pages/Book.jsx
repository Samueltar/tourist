import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Check, Sparkles, Send, CheckCircle2, Heart, ArrowRight, ShieldCheck } from 'lucide-react'
import { tours, destinations } from '../data/tours'
import { useMesob } from '../components/MesobTransition'

export default function Book() {
  const [searchParams] = useSearchParams()
  const { navigateWithMesob } = useMesob()

  const tourParam = searchParams.get('tour')
  const destParam = searchParams.get('destination')
  const savedParam = searchParams.get('saved')

  const initialTour = tours.find((t) => t.id === tourParam)
  const initialDest = destinations.find((d) => d.id === destParam)

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    travelMonth: 'October - November 2025',
    tripDuration: '10 - 14 Days',
    partySize: '2 Travelers',
    accommodationTier: 'Luxury Boutique Lodges & Heritage Retreats',
    selectedDestinations: initialDest ? [initialDest.name] : [],
    preferredTour: initialTour ? initialTour.title : '',
    specialInterests: [],
    customNotes: '',
  })

  useEffect(() => {
    if (initialTour && !formData.preferredTour) {
      setFormData((prev) => ({ ...prev, preferredTour: initialTour.title }))
    }
  }, [initialTour])

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const destinationOptions = [
    'Lalibela Rock Churches',
    'Simien Mountains (Gelada Troops)',
    'Gondar Royal Enclosure',
    'Lake Tana Island Monasteries',
    'Bale Mountains (Ethiopian Wolf)',
    'Omo Valley Living Cultures',
    'Harar Walled City',
    'Danakil Depression & Erta Ale',
    'Addis Ababa Gastronomy & Culture',
    'Great Rift Valley Lakes',
  ]

  const interestOptions = [
    'Specialist Historian Escort',
    'Coffee Ceremony Masterclasses',
    'Wildlife & Birding Photography',
    'Orthodox Festivals (Timkat / Genna)',
    'Helicopter Aerial Transfers',
    'Highland Hiking & Trekking',
    'Tribal Market Days',
    'Culinary & Wine Pairings',
  ]

  const toggleDestination = (destName) => {
    setFormData((prev) => {
      const exists = prev.selectedDestinations.includes(destName)
      return {
        ...prev,
        selectedDestinations: exists
          ? prev.selectedDestinations.filter((d) => d !== destName)
          : [...prev.selectedDestinations, destName],
      }
    })
  }

  const toggleInterest = (interest) => {
    setFormData((prev) => {
      const exists = prev.specialInterests.includes(interest)
      return {
        ...prev,
        specialInterests: exists
          ? prev.specialInterests.filter((i) => i !== interest)
          : [...prev.specialInterests, interest],
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.fullName.trim() || !formData.email.trim()) return

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 850)
  }

  return (
    <div className="min-h-screen bg-[#F5F0E6] text-[#202622] pt-24 sm:pt-28 pb-20 selection:bg-[#B86B48] selection:text-white">
      {/* Editorial Header */}
      <div className="bg-[#173D32] text-[#F5F0E6] py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#C3A16A] font-semibold">
            Bespoke Expedition Design
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight">
            Curate Your <span className="italic font-normal text-[#C3A16A]">Journey</span>
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#E9E0D1]/85 max-w-xl mx-auto font-light leading-relaxed">
            Tell us about your travel aspirations. Our senior local specialists in Addis Ababa will weave your passions into an unforgettable, private itinerary.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-[#C3A16A]/30 shadow-xl">
          {submitted ? (
            <div className="text-center py-12 space-y-5 animate-scale-in">
              <div className="w-16 h-16 rounded-full bg-[#173D32] text-[#C3A16A] flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#B86B48] font-bold block">
                Expedition Proposal Requested
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#173D32] font-medium">
                Amesege'nalew, {formData.fullName}!
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#202622]/80 max-w-md mx-auto leading-relaxed">
                We have received your travel preferences. One of our senior travel designers will contact you at <strong className="text-[#173D32]">{formData.email}</strong> within 24 hours with a thoughtful preliminary proposal and quotation.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => navigateWithMesob('/tours')}
                  className="px-6 py-2.5 rounded-full bg-[#173D32] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#284D3C] transition-colors"
                >
                  Browse More Journeys
                </button>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full border border-[#173D32] text-xs font-semibold uppercase tracking-wider text-[#173D32] hover:bg-[#F5F0E6] transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Selected Tour Banner if prefilled */}
              {initialTour && (
                <div className="bg-[#173D32] text-[#F5F0E6] p-4 sm:p-5 rounded-2xl flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#C3A16A] font-bold block">
                      Planning Around Established Tour
                    </span>
                    <h4 className="font-serif text-lg sm:text-xl font-medium text-white">
                      {initialTour.title} ({initialTour.duration})
                    </h4>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#C3A16A] text-[#173D32] text-[10px] font-bold uppercase tracking-wider shrink-0">
                    Preselected
                  </span>
                </div>
              )}

              {/* 1. Destinations Selection */}
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B86B48] block mb-1">
                  Step 1 of 4
                </span>
                <h3 className="font-serif text-2xl text-[#173D32] font-medium mb-3">
                  Which regions capture your imagination?
                </h3>
                <p className="text-xs text-[#202622]/70 mb-4">
                  Select all destinations you would love to experience.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {destinationOptions.map((dest) => {
                    const isSelected = formData.selectedDestinations.includes(dest)
                    return (
                      <button
                        type="button"
                        key={dest}
                        onClick={() => toggleDestination(dest)}
                        className={`p-3 rounded-xl border text-xs text-left flex items-center justify-between transition-all ${
                          isSelected
                            ? 'bg-[#173D32] text-[#F5F0E6] border-[#173D32] font-semibold'
                            : 'bg-[#F5F0E6]/40 text-[#202622]/80 border-[#C3A16A]/30 hover:border-[#C3A16A]'
                        }`}
                      >
                        <span>{dest}</span>
                        {isSelected && <Check className="w-4 h-4 text-[#C3A16A]" />}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* 2. Special Interests */}
              <div className="pt-6 border-t border-[#C3A16A]/20">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B86B48] block mb-1">
                  Step 2 of 4
                </span>
                <h3 className="font-serif text-2xl text-[#173D32] font-medium mb-3">
                  Tailored Experiences & Focus
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {interestOptions.map((interest) => {
                    const isSelected = formData.specialInterests.includes(interest)
                    return (
                      <button
                        type="button"
                        key={interest}
                        onClick={() => toggleInterest(interest)}
                        className={`p-3 rounded-xl border text-xs text-left flex items-center justify-between transition-all ${
                          isSelected
                            ? 'bg-[#284D3C] text-white border-[#284D3C] font-semibold'
                            : 'bg-[#F5F0E6]/40 text-[#202622]/80 border-[#C3A16A]/30 hover:border-[#C3A16A]'
                        }`}
                      >
                        <span>{interest}</span>
                        {isSelected && <Check className="w-4 h-4 text-[#C3A16A]" />}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* 3. Travel Parameters */}
              <div className="pt-6 border-t border-[#C3A16A]/20 space-y-4">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B86B48] block mb-1">
                  Step 3 of 4
                </span>
                <h3 className="font-serif text-2xl text-[#173D32] font-medium">
                  Travel Timing & Party Size
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#202622]/70 font-semibold mb-1">
                      Estimated Month
                    </label>
                    <input
                      type="text"
                      value={formData.travelMonth}
                      onChange={(e) => setFormData({ ...formData, travelMonth: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#C3A16A]/30 bg-[#F5F0E6]/30 text-xs text-[#202622] focus:outline-none focus:border-[#173D32]"
                      placeholder="e.g. October 2025"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#202622]/70 font-semibold mb-1">
                      Desired Length
                    </label>
                    <select
                      value={formData.tripDuration}
                      onChange={(e) => setFormData({ ...formData, tripDuration: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#C3A16A]/30 bg-[#F5F0E6]/30 text-xs text-[#202622] focus:outline-none focus:border-[#173D32]"
                    >
                      <option value="3 - 5 Days">3 - 5 Days (Short Gateway)</option>
                      <option value="6 - 9 Days">6 - 9 Days (Core Highlights)</option>
                      <option value="10 - 14 Days">10 - 14 Days (Grand Explorer)</option>
                      <option value="15+ Days">15+ Days (Comprehensive Odyssey)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#202622]/70 font-semibold mb-1">
                      Party Size
                    </label>
                    <select
                      value={formData.partySize}
                      onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#C3A16A]/30 bg-[#F5F0E6]/30 text-xs text-[#202622] focus:outline-none focus:border-[#173D32]"
                    >
                      <option value="Solo Traveler">Solo Traveler</option>
                      <option value="Couple (2 Travelers)">Couple (2 Travelers)</option>
                      <option value="Small Family (3–4)">Small Family (3–4)</option>
                      <option value="Private Group (5–8)">Private Group (5–8)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#202622]/70 font-semibold mb-1">
                    Accommodation Tier Preference
                  </label>
                  <select
                    value={formData.accommodationTier}
                    onChange={(e) => setFormData({ ...formData, accommodationTier: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#C3A16A]/30 bg-[#F5F0E6]/30 text-xs text-[#202622] focus:outline-none focus:border-[#173D32]"
                  >
                    <option value="Luxury Boutique Lodges & Heritage Retreats">
                      Luxury Boutique Lodges & Heritage Retreats (Sheraton, Kuriftu, Limalimo)
                    </option>
                    <option value="Curated Comfort & Scenic Eco-Lodges">
                      Curated Comfort & Scenic Eco-Lodges
                    </option>
                    <option value="Expedition Glamping & Wilderness Camps">
                      Expedition Glamping & Wilderness Camps (Danakil & Omo)
                    </option>
                  </select>
                </div>
              </div>

              {/* 4. Traveler Contact Details */}
              <div className="pt-6 border-t border-[#C3A16A]/20 space-y-4">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B86B48] block mb-1">
                  Step 4 of 4
                </span>
                <h3 className="font-serif text-2xl text-[#173D32] font-medium">
                  Your Contact Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#202622]/70 font-semibold mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#C3A16A]/30 bg-[#F5F0E6]/30 text-xs text-[#202622] focus:outline-none focus:border-[#173D32]"
                      placeholder="e.g. Marcus Aurelius"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#202622]/70 font-semibold mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#C3A16A]/30 bg-[#F5F0E6]/30 text-xs text-[#202622] focus:outline-none focus:border-[#173D32]"
                      placeholder="e.g. marcus@travel.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#202622]/70 font-semibold mb-1">
                      Phone / WhatsApp (With Country Code)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#C3A16A]/30 bg-[#F5F0E6]/30 text-xs text-[#202622] focus:outline-none focus:border-[#173D32]"
                      placeholder="+44 7911 123456"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#202622]/70 font-semibold mb-1">
                      Country of Residence
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#C3A16A]/30 bg-[#F5F0E6]/30 text-xs text-[#202622] focus:outline-none focus:border-[#173D32]"
                      placeholder="e.g. United Kingdom"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#202622]/70 font-semibold mb-1">
                    Special Wishes, Dietary Notes, or Questions
                  </label>
                  <textarea
                    rows="4"
                    value={formData.customNotes}
                    onChange={(e) => setFormData({ ...formData, customNotes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#C3A16A]/30 bg-[#F5F0E6]/30 text-xs text-[#202622] focus:outline-none focus:border-[#173D32]"
                    placeholder="Tell us about mobility needs, dietary requirements, celebration occasions, or specific sites you must see..."
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#B86B48] to-[#9E5536] hover:from-[#c2734f] hover:to-[#B86B48] text-white font-sans text-xs uppercase tracking-widest font-bold shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Designing Your Preliminary Itinerary...</span>
                  ) : (
                    <>
                      <span>Submit Bespoke Journey Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <div className="flex items-center justify-center gap-2 text-[11px] text-[#202622]/60 mt-3 text-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#284D3C]" />
                  <span>No obligation. 100% private. We respond within 24 hours.</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
