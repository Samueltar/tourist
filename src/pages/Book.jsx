import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Check, Sparkles, Send, CheckCircle2, Heart, ArrowRight, ShieldCheck } from 'lucide-react'
import { tours, destinations } from '../data/tours'
import { useMesob } from '../components/MesobTransition'
import { useLanguage } from '../context/LanguageContext'
import { TiletBorderPrimary, TiletDivider } from '../components/TiletPatterns'

export default function Book() {
  const [searchParams] = useSearchParams()
  const { navigateWithMesob } = useMesob()
  const { t, language } = useLanguage()

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
    language === 'am' ? 'የላሊበላ ፍልፍል አብያተ ክርስቲያናት' : 'Lalibela Rock Churches',
    language === 'am' ? 'የስሜን ተራሮች (ጭላዳ ዝንጀሮ)' : 'Simien Mountains (Gelada Troops)',
    language === 'am' ? 'የፋሲል ግቢ ጎንደር' : 'Gondar Royal Enclosure',
    language === 'am' ? 'የጣና ሐይቅ ገዳማት' : 'Lake Tana Island Monasteries',
    language === 'am' ? 'የባሌ ተራሮች (ቀይ ቀበሮ)' : 'Bale Mountains (Ethiopian Wolf)',
    language === 'am' ? 'የኦሞ ሸለቆ ባህሎች' : 'Omo Valley Living Cultures',
    language === 'am' ? 'የሐረር ጁጎል ቅጥር ከተማ' : 'Harar Walled City',
    language === 'am' ? 'የዳሎል ጨው ምድርና ኤርታሌ' : 'Danakil Depression & Erta Ale',
    language === 'am' ? 'አዲስ አበባ ባህልና ምግብ' : 'Addis Ababa Gastronomy & Culture',
    language === 'am' ? 'የስምጥ ሸለቆ ሐይቆች' : 'Great Rift Valley Lakes',
  ]

  const interestOptions = [
    language === 'am' ? 'ከፍተኛ የታሪክ ምሁር መሪ' : 'Specialist Historian Escort',
    language === 'am' ? 'የቡና ሥነ-ሥርዓት ልዩ ትምህርት' : 'Coffee Ceremony Masterclasses',
    language === 'am' ? 'የዱር አራዊትና ወፎች ፎቶግራፍ' : 'Wildlife & Birding Photography',
    language === 'am' ? 'የጥምቀትና የገና በዓላት' : 'Orthodox Festivals (Timkat / Genna)',
    language === 'am' ? 'የሄሊኮፕተር በረራዎች' : 'Helicopter Aerial Transfers',
    language === 'am' ? 'የደጋማ ቦታዎች የእግር ጉዞ' : 'Highland Hiking & Trekking',
    language === 'am' ? 'የገበያ ቀናት ጉብኝት' : 'Tribal Market Days',
    language === 'am' ? 'ባህላዊ የምግብ ጥበብ' : 'Culinary & Wine Pairings',
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
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1713] pt-24 sm:pt-28 pb-20 selection:bg-[#B58A43] selection:text-white">
      {/* Editorial Header with Ethiopian Tilet Accents */}
      <div className="relative bg-gradient-to-b from-[#F3EEE5] to-[#FAF8F5] border-b border-[#B58A43]/20 py-16 sm:py-20 overflow-hidden">
        <TiletBorderPrimary className="absolute top-0 left-0 right-0 w-full text-[#B58A43] opacity-60" height={10} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#B58A43]/30 text-[#B58A43] text-[11px] font-sans font-bold uppercase tracking-[0.25em] shadow-sm">
            <span>{t('bookHeaderEyebrow')}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1A1713] tracking-tight">
            {language === 'am' ? 'የህልም ጉዞዎን' : 'Curate Your'}{' '}
            <span className="italic font-light text-[#B58A43]">
              {language === 'am' ? 'ይንደፉ' : 'Journey'}
            </span>
          </h1>

          <p className="font-sans text-xs sm:text-sm text-[#302B24]/80 max-w-xl mx-auto font-light leading-relaxed">
            {language === 'am'
              ? 'ስለ ጉዞ ፍላጎትዎ ይንገሩን። የአዲስ አበባ የጉዞ ባለሙያዎቻችን የማይረሳ የግል ፕሮግራም ያዘጋጁልዎታል።'
              : 'Tell us about your travel aspirations. Our senior local specialists in Addis Ababa will weave your passions into an unforgettable, private itinerary.'}
          </p>

          <TiletDivider className="w-56 mx-auto text-[#B58A43] pt-2 opacity-75" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-[#B58A43]/25 shadow-xl relative overflow-hidden">

          {submitted ? (
            <div className="text-center py-12 space-y-5 animate-scale-in">
              <div className="w-16 h-16 rounded-full bg-white border border-[#B58A43] text-[#B58A43] flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8 text-[#B58A43]" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#B58A43] font-bold block">
                {language === 'am' ? 'የጉዞ ጥያቄዎ ደርሶናል' : 'Expedition Proposal Requested'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1713] font-normal">
                {language === 'am' ? `እናመሰግናለን፣ ${formData.fullName}!` : `Amesege'nalew, ${formData.fullName}!`}
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#302B24]/80 max-w-md mx-auto leading-relaxed font-light">
                {t('inquirySuccess')}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => navigateWithMesob('/tours')}
                  className="px-6 py-2.5 rounded-full bg-[#1A1713] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#B58A43] transition-colors"
                >
                  {language === 'am' ? 'ተጨማሪ ጉዞዎችን ይመልከቱ' : 'Browse More Journeys'}
                </button>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full border border-[#B58A43]/40 text-xs font-semibold uppercase tracking-wider text-[#1A1713] hover:bg-[#FAF8F5] transition-colors"
                >
                  {language === 'am' ? 'ሌላ ጥያቄ ያስገቡ' : 'Submit Another Request'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Selected Tour Banner if prefilled */}
              {initialTour && (
                <div className="bg-[#FAF8F5] border border-[#B58A43]/30 text-[#1A1713] p-4 sm:p-5 rounded-2xl flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#B58A43] font-bold block">
                      {language === 'am' ? 'በተመረጠ ጉዞ መሠረት ማዘጋጀት' : 'Planning Around Established Tour'}
                    </span>
                    <h4 className="font-serif text-lg sm:text-xl font-normal text-[#1A1713]">
                      {initialTour.title} ({initialTour.duration})
                    </h4>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#B58A43] text-white text-[10px] font-bold uppercase tracking-wider shrink-0">
                    {language === 'am' ? 'ተመርጧል' : 'Preselected'}
                  </span>
                </div>
              )}

              {/* 1. Destinations Selection */}
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B58A43] block mb-1">
                  {language === 'am' ? 'ደረጃ 1 ከ 4' : 'Step 1 of 4'}
                </span>
                <h3 className="font-serif text-2xl text-[#1A1713] font-normal mb-3">
                  {language === 'am' ? 'የትኞቹን አካባቢዎች መጎብኘት ይፈልጋሉ?' : 'Which regions capture your imagination?'}
                </h3>
                <p className="text-xs text-[#302B24]/70 mb-4 font-light">
                  {language === 'am' ? 'መጎብኘት የሚፈልጓቸውን ቦታዎች በሙሉ ይምረጡ።' : 'Select all destinations you would love to experience.'}
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
                            ? 'bg-[#1A1713] text-[#FAF8F5] border-[#1A1713] font-semibold'
                            : 'bg-[#FAF8F5] text-[#302B24]/80 border-[#B58A43]/25 hover:border-[#B58A43]'
                        }`}
                      >
                        <span>{dest}</span>
                        {isSelected && <Check className="w-4 h-4 text-[#B58A43]" />}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* 2. Special Interests */}
              <div className="pt-6 border-t border-[#B58A43]/15">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B58A43] block mb-1">
                  {language === 'am' ? 'ደረጃ 2 ከ 4' : 'Step 2 of 4'}
                </span>
                <h3 className="font-serif text-2xl text-[#1A1713] font-normal mb-3">
                  {language === 'am' ? 'ልዩ የትኩረት መስኮች' : 'Tailored Experiences & Focus'}
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
                            ? 'bg-[#B58A43] text-white border-[#B58A43] font-semibold'
                            : 'bg-[#FAF8F5] text-[#302B24]/80 border-[#B58A43]/25 hover:border-[#B58A43]'
                        }`}
                      >
                        <span>{interest}</span>
                        {isSelected && <Check className="w-4 h-4 text-white" />}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* 3. Travel Parameters */}
              <div className="pt-6 border-t border-[#B58A43]/15 space-y-4">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B58A43] block mb-1">
                  {language === 'am' ? 'ደረጃ 3 ከ 4' : 'Step 3 of 4'}
                </span>
                <h3 className="font-serif text-2xl text-[#1A1713] font-normal">
                  {language === 'am' ? 'የጉዞ ጊዜና የተጓዦች ብዛት' : 'Travel Timing & Party Size'}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#302B24]/70 font-semibold mb-1">
                      {t('preferredDates')}
                    </label>
                    <input
                      type="text"
                      value={formData.travelMonth}
                      onChange={(e) => setFormData({ ...formData, travelMonth: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#B58A43]/30 bg-[#FAF8F5] text-xs text-[#1A1713] focus:outline-none focus:border-[#B58A43]"
                      placeholder="e.g. October 2025"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#302B24]/70 font-semibold mb-1">
                      {language === 'am' ? 'የጉዞው ርዝመት' : 'Desired Length'}
                    </label>
                    <select
                      value={formData.tripDuration}
                      onChange={(e) => setFormData({ ...formData, tripDuration: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#B58A43]/30 bg-[#FAF8F5] text-xs text-[#1A1713] focus:outline-none focus:border-[#B58A43]"
                    >
                      <option value="3 - 5 Days">{language === 'am' ? '3 - 5 ቀናት (አጭር ጉዞ)' : '3 - 5 Days (Short Gateway)'}</option>
                      <option value="6 - 9 Days">{language === 'am' ? '6 - 9 ቀናት (ዋና ዋና ቦታዎች)' : '6 - 9 Days (Core Highlights)'}</option>
                      <option value="10 - 14 Days">{language === 'am' ? '10 - 14 ቀናት (ጥልቅ ጉዞ)' : '10 - 14 Days (Grand Explorer)'}</option>
                      <option value="15+ Days">{language === 'am' ? '15+ ቀናት (ሙሉ አሰሳ)' : '15+ Days (Comprehensive Odyssey)'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#302B24]/70 font-semibold mb-1">
                      {t('travelerCount')}
                    </label>
                    <select
                      value={formData.partySize}
                      onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#B58A43]/30 bg-[#FAF8F5] text-xs text-[#1A1713] focus:outline-none focus:border-[#B58A43]"
                    >
                      <option value="Solo Traveler">{language === 'am' ? 'ብቸኛ ተጓዥ' : 'Solo Traveler'}</option>
                      <option value="Couple (2 Travelers)">{language === 'am' ? 'ጥንዶች (2 ተጓዦች)' : 'Couple (2 Travelers)'}</option>
                      <option value="Small Family (3–4)">{language === 'am' ? 'ቤተሰብ (3–4 ተጓዦች)' : 'Small Family (3–4)'}</option>
                      <option value="Private Group (5–8)">{language === 'am' ? 'የግል ቡድን (5–8 ተጓዦች)' : 'Private Group (5–8)'}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#302B24]/70 font-semibold mb-1">
                    {language === 'am' ? 'የማረፊያ ደረጃ ምርጫ' : 'Accommodation Tier Preference'}
                  </label>
                  <select
                    value={formData.accommodationTier}
                    onChange={(e) => setFormData({ ...formData, accommodationTier: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#B58A43]/30 bg-[#FAF8F5] text-xs text-[#1A1713] focus:outline-none focus:border-[#B58A43]"
                  >
                    <option value="Luxury Boutique Lodges & Heritage Retreats">
                      {language === 'am' ? 'የቅንጦት ሎጆች እና ሆቴሎች' : 'Luxury Boutique Lodges & Heritage Retreats (Sheraton, Kuriftu, Limalimo)'}
                    </option>
                    <option value="Curated Comfort & Scenic Eco-Lodges">
                      {language === 'am' ? 'ምቹ የተፈጥሮ ኢኮ-ሎጆች' : 'Curated Comfort & Scenic Eco-Lodges'}
                    </option>
                    <option value="Expedition Glamping & Wilderness Camps">
                      {language === 'am' ? 'የበረሃና የዱር አራዊት ካምፖች (ዳናኪልና ኦሞ)' : 'Expedition Glamping & Wilderness Camps (Danakil & Omo)'}
                    </option>
                  </select>
                </div>
              </div>

              {/* 4. Traveler Contact Details */}
              <div className="pt-6 border-t border-[#B58A43]/15 space-y-4">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B58A43] block mb-1">
                  {language === 'am' ? 'ደረጃ 4 ከ 4' : 'Step 4 of 4'}
                </span>
                <h3 className="font-serif text-2xl text-[#1A1713] font-normal">
                  {language === 'am' ? 'የግል መረጃዎ' : 'Your Contact Information'}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#302B24]/70 font-semibold mb-1">
                      {t('fullName')} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#B58A43]/30 bg-[#FAF8F5] text-xs text-[#1A1713] focus:outline-none focus:border-[#B58A43]"
                      placeholder="e.g. Marcus Aurelius"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#302B24]/70 font-semibold mb-1">
                      {t('emailAddress')} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#B58A43]/30 bg-[#FAF8F5] text-xs text-[#1A1713] focus:outline-none focus:border-[#B58A43]"
                      placeholder="e.g. marcus@travel.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#302B24]/70 font-semibold mb-1">
                      {t('phoneNumber')}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#B58A43]/30 bg-[#FAF8F5] text-xs text-[#1A1713] focus:outline-none focus:border-[#B58A43]"
                      placeholder="+44 7911 123456"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#302B24]/70 font-semibold mb-1">
                      {language === 'am' ? 'የሚኖሩበት ሀገር' : 'Country of Residence'}
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#B58A43]/30 bg-[#FAF8F5] text-xs text-[#1A1713] focus:outline-none focus:border-[#B58A43]"
                      placeholder="e.g. United Kingdom"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#302B24]/70 font-semibold mb-1">
                    {t('additionalNotes')}
                  </label>
                  <textarea
                    rows="4"
                    value={formData.customNotes}
                    onChange={(e) => setFormData({ ...formData, customNotes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#B58A43]/30 bg-[#FAF8F5] text-xs text-[#1A1713] focus:outline-none focus:border-[#B58A43]"
                    placeholder={language === 'am' ? 'ስለ ጤና፣ ምግብ ወይም ልዩ መጎብኘት ስለሚፈልጉት ቦታ ይንገሩን...' : 'Tell us about mobility needs, dietary requirements, celebration occasions, or specific sites you must see...'}
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#B58A43] to-[#916B2D] hover:from-[#C49A50] hover:to-[#B58A43] text-white font-sans text-xs uppercase tracking-widest font-bold shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>{language === 'am' ? 'የጉዞ ዕቅድ በማዘጋጀት ላይ...' : 'Designing Your Preliminary Itinerary...'}</span>
                  ) : (
                    <>
                      <span>{language === 'am' ? 'የግል የጉዞ ዕቅድ ጥያቄዎን ይላኩ' : 'Submit Bespoke Journey Request'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <div className="flex items-center justify-center gap-2 text-[11px] text-[#302B24]/65 mt-3 text-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B58A43]" />
                  <span>{language === 'am' ? 'ምንም ዓይነት ግዴታ የለበትም። 100% የግል። በ24 ሰዓት ውስጥ ምላሽ እንሰጣለን።' : 'No obligation. 100% private. We respond within 24 hours.'}</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
