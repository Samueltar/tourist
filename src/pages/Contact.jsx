import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  Mail, Phone, MessageCircle, MapPin, Send, CheckCircle2,
  Clock, Check, Sparkles, ChevronDown, ChevronUp, ShieldCheck, HelpCircle
} from 'lucide-react'
import { tours, destinations, faqs } from '../data/tours'
import { useLanguage } from '../context/LanguageContext'
import { TiletBorderPrimary, TiletDivider } from '../components/TiletPatterns'

export default function Contact() {
  const [searchParams] = useSearchParams()
  const { t, language } = useLanguage()

  // Tab switcher: 'book' (Plan Custom Journey) | 'inquiry' (General Inquiry)
  const initialTab = searchParams.get('tab') === 'inquiry' ? 'inquiry' : 'book'
  const [activeTab, setActiveTab] = useState(initialTab)

  // Booking Form State
  const tourParam = searchParams.get('tour')
  const destParam = searchParams.get('destination')
  const initialTour = tours.find((t) => t.id === tourParam)
  const initialDest = destinations.find((d) => d.id === destParam)

  const [bookData, setBookData] = useState({
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
    customNotes: '',
  })

  // Quick Inquiry Form State
  const [inquiryData, setInquiryData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  const destinationOptions = [
    language === 'am' ? 'የላሊበላ ፍልፍል አብያተ ክርስቲያናት' : 'Lalibela Rock Churches',
    language === 'am' ? 'የስሜን ተራሮች (ጭላዳ ዝንጀሮ)' : 'Simien Mountains (Gelada Troops)',
    language === 'am' ? 'የፋሲል ግቢ ጎንደር' : 'Gondar Royal Enclosure',
    language === 'am' ? 'የጣና ሐይቅ ገዳማት' : 'Lake Tana Island Monasteries',
    language === 'am' ? 'የባሌ ተራሮች (ቀይ ቀበሮ)' : 'Bale Mountains (Ethiopian Wolf)',
    language === 'am' ? 'የኦሞ ሸለቆ ባህሎች' : 'Omo Valley Living Cultures',
    language === 'am' ? 'የሐረር ጁጎል ቅጥር ከተማ' : 'Harar Walled City',
    language === 'am' ? 'የዳሎል ጨው ምድርና ኤርታሌ' : 'Danakil Depression & Erta Ale',
  ]

  const toggleDestination = (destName) => {
    setBookData((prev) => {
      const exists = prev.selectedDestinations.includes(destName)
      return {
        ...prev,
        selectedDestinations: exists
          ? prev.selectedDestinations.filter((d) => d !== destName)
          : [...prev.selectedDestinations, destName],
      }
    })
  }

  const handleBookSubmit = (e) => {
    e.preventDefault()
    if (!bookData.fullName.trim() || !bookData.email.trim()) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  const handleInquirySubmit = (e) => {
    e.preventDefault()
    if (!inquiryData.fullName.trim() || !inquiryData.email.trim()) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#0E0D0B] text-[#1A1713] dark:text-[#F5F2EB] pt-24 sm:pt-28 pb-20 selection:bg-[#B58A43] selection:text-white transition-colors duration-300">
      {/* Editorial Header */}
      <div className="relative bg-gradient-to-b from-[#F3EEE5] to-[#FAF8F5] dark:from-[#161410] dark:to-[#0E0D0B] border-b border-[#B58A43]/20 py-14 sm:py-18 overflow-hidden">
        <TiletBorderPrimary className="absolute top-0 left-0 right-0 w-full text-[#B58A43] opacity-60" height={10} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 dark:bg-[#1A1814] border border-[#B58A43]/30 text-[#B58A43] text-[11px] font-sans font-bold uppercase tracking-[0.25em] shadow-sm">
            <span>{language === 'am' ? 'የግል ጉዞ አማካሪ' : 'PRIVATE TRAVEL CONCIERGE'}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#1A1713] dark:text-[#F5F2EB] tracking-tight">
            {language === 'am' ? 'ከጎብኚው ጋር' : 'Connect with'}{' '}
            <span className="italic font-normal text-[#B58A43]">
              {language === 'am' ? 'ይገናኙ' : 'The Tourist'}
            </span>
          </h1>

          <p className="font-sans text-xs sm:text-sm text-[#302B24]/75 dark:text-[#D1C7BA] max-w-xl mx-auto font-light leading-relaxed">
            {language === 'am'
              ? 'የአዲስ አበባ የጉዞ ባለሙያዎቻችን ለጥያቄዎችዎ ምላሽ ለመስጠት እና የተሟላ የግል ጉዞ ለማዘጋጀት ዝግጁ ናቸው።'
              : 'Our senior travel designers in Addis Ababa craft bespoke itineraries tailored to your dates, pace, and interests.'}
          </p>

          <TiletDivider className="w-48 mx-auto text-[#B58A43] pt-1 opacity-70" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Main Portal Card with Unified Tab Switcher */}
        <div className="bg-white dark:bg-[#161410] rounded-3xl p-6 sm:p-12 border border-[#B58A43]/25 shadow-xl relative overflow-hidden">

          {/* Segmented Mode Selector: Custom Journey vs Quick Inquiry */}
          {!submitted && (
            <div className="flex items-center justify-center mb-8">
              <div className="inline-flex p-1 rounded-full bg-[#FAF8F5] dark:bg-[#1A1814] border border-[#B58A43]/30">
                <button
                  type="button"
                  onClick={() => setActiveTab('book')}
                  className={`px-5 py-2 rounded-full text-xs font-sans uppercase tracking-wider font-bold transition-all ${
                    activeTab === 'book'
                      ? 'bg-[#B58A43] text-white shadow-xs'
                      : 'text-[#302B24]/70 dark:text-[#D1C7BA] hover:text-[#B58A43]'
                  }`}
                >
                  {language === 'am' ? 'የግል ጉዞ ማዘጋጃ' : 'Plan Custom Journey'}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('inquiry')}
                  className={`px-5 py-2 rounded-full text-xs font-sans uppercase tracking-wider font-bold transition-all ${
                    activeTab === 'inquiry'
                      ? 'bg-[#B58A43] text-white shadow-xs'
                      : 'text-[#302B24]/70 dark:text-[#D1C7BA] hover:text-[#B58A43]'
                  }`}
                >
                  {language === 'am' ? 'አጠቃላይ ጥያቄ' : 'Quick Inquiry & Contacts'}
                </button>
              </div>
            </div>
          )}

          {submitted ? (
            <div className="text-center py-12 space-y-4 animate-scale-in">
              <div className="w-16 h-16 rounded-full bg-[#FAF8F5] dark:bg-[#1A1814] border border-[#B58A43] text-[#B58A43] flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8 text-[#B58A43]" />
              </div>
              <h3 className="font-serif text-3xl text-[#1A1713] dark:text-[#F5F2EB] font-normal">
                {language === 'am' ? 'እናመሰግናለን!' : "Amesege'nalew! (Thank You)"}
              </h3>
              <p className="text-xs sm:text-sm text-[#302B24]/80 dark:text-[#D1C7BA] max-w-md mx-auto leading-relaxed font-light">
                {language === 'am'
                  ? 'የጉዞ ጥያቄዎ ደርሶናል። በአዲስ አበባ የሚገኘው ከፍተኛ የጉዞ አማካሪያችን በ24 ሰዓት ውስጥ ምላሽ ይሰጥዎታል።'
                  : 'Your request has been received. Our senior travel curator will review your details and respond within 24 hours.'}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full border border-[#B58A43] text-xs font-semibold uppercase tracking-wider text-[#1A1713] dark:text-[#F5F2EB] hover:bg-[#B58A43] hover:text-white transition-colors"
                >
                  {language === 'am' ? 'ሌላ ጥያቄ ያስገቡ' : 'Submit Another Request'}
                </button>
              </div>
            </div>
          ) : activeTab === 'book' ? (
            /* ── TAB 1: BESPOKE JOURNEY PLANNER ── */
            <form onSubmit={handleBookSubmit} className="space-y-8 animate-fade-in">
              {initialTour && (
                <div className="bg-[#FAF8F5] dark:bg-[#1A1814] border border-[#B58A43]/30 p-4 rounded-2xl flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#B58A43] font-bold block">
                      {language === 'am' ? 'የተመረጠ ጉዞ' : 'Preselected Itinerary'}
                    </span>
                    <h4 className="font-serif text-base sm:text-lg font-normal text-[#1A1713] dark:text-[#F5F2EB]">
                      {initialTour.title} ({initialTour.duration})
                    </h4>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#B58A43] text-white text-[10px] font-bold uppercase tracking-wider">
                    {initialTour.category}
                  </span>
                </div>
              )}

              {/* 1. Regions */}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B58A43] block mb-1">
                  {language === 'am' ? 'ደረጃ 1' : 'Step 1'} • {language === 'am' ? 'መዳረሻዎች' : 'Destinations of Interest'}
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
                  {destinationOptions.map((dest) => {
                    const isSelected = bookData.selectedDestinations.includes(dest)
                    return (
                      <button
                        type="button"
                        key={dest}
                        onClick={() => toggleDestination(dest)}
                        className={`p-2.5 rounded-xl border text-xs text-left transition-all ${
                          isSelected
                            ? 'bg-[#B58A43] text-white border-[#B58A43] font-semibold'
                            : 'bg-[#FAF8F5] dark:bg-[#1A1814] text-[#302B24]/80 dark:text-[#D1C7BA] border-[#B58A43]/20 hover:border-[#B58A43]'
                        }`}
                      >
                        <span className="line-clamp-1">{dest}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* 2. Timing & Party */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#B58A43]/15">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#302B24]/70 dark:text-[#D1C7BA] font-semibold mb-1">
                    {language === 'am' ? 'የጉዞ ወር' : 'Approximate Dates'}
                  </label>
                  <input
                    type="text"
                    value={bookData.travelMonth}
                    onChange={(e) => setBookData({ ...bookData, travelMonth: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#B58A43]/30 bg-[#FAF8F5] dark:bg-[#1A1814] text-xs text-[#1A1713] dark:text-[#F5F2EB] focus:outline-none focus:border-[#B58A43]"
                    placeholder="e.g. November 2025"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#302B24]/70 dark:text-[#D1C7BA] font-semibold mb-1">
                    {language === 'am' ? 'የጉዞ ርዝመት' : 'Duration'}
                  </label>
                  <select
                    value={bookData.tripDuration}
                    onChange={(e) => setBookData({ ...bookData, tripDuration: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#B58A43]/30 bg-[#FAF8F5] dark:bg-[#1A1814] text-xs text-[#1A1713] dark:text-[#F5F2EB] focus:outline-none focus:border-[#B58A43]"
                  >
                    <option value="3 - 5 Days">3–5 Days (Short)</option>
                    <option value="6 - 9 Days">6–9 Days (Highlights)</option>
                    <option value="10 - 14 Days">10–14 Days (Grand Expedition)</option>
                    <option value="15+ Days">15+ Days (Comprehensive)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#302B24]/70 dark:text-[#D1C7BA] font-semibold mb-1">
                    {language === 'am' ? 'የተጓዦች ብዛት' : 'Party Size'}
                  </label>
                  <select
                    value={bookData.partySize}
                    onChange={(e) => setBookData({ ...bookData, partySize: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#B58A43]/30 bg-[#FAF8F5] dark:bg-[#1A1814] text-xs text-[#1A1713] dark:text-[#F5F2EB] focus:outline-none focus:border-[#B58A43]"
                  >
                    <option value="Solo Traveler">Solo Traveler</option>
                    <option value="Couple (2 Travelers)">Couple (2 Travelers)</option>
                    <option value="Small Family (3–4)">Small Family (3–4)</option>
                    <option value="Private Group (5–8)">Private Group (5–8)</option>
                  </select>
                </div>
              </div>

              {/* 3. Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#B58A43]/15">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#302B24]/70 dark:text-[#D1C7BA] font-semibold mb-1">
                    {language === 'am' ? 'ሙሉ ስም *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={bookData.fullName}
                    onChange={(e) => setBookData({ ...bookData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#B58A43]/30 bg-[#FAF8F5] dark:bg-[#1A1814] text-xs text-[#1A1713] dark:text-[#F5F2EB] focus:outline-none focus:border-[#B58A43]"
                    placeholder="e.g. Elena Vance"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#302B24]/70 dark:text-[#D1C7BA] font-semibold mb-1">
                    {language === 'am' ? 'ኢሜይል *' : 'Email Address *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={bookData.email}
                    onChange={(e) => setBookData({ ...bookData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#B58A43]/30 bg-[#FAF8F5] dark:bg-[#1A1814] text-xs text-[#1A1713] dark:text-[#F5F2EB] focus:outline-none focus:border-[#B58A43]"
                    placeholder="e.g. elena@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#302B24]/70 dark:text-[#D1C7BA] font-semibold mb-1">
                  {language === 'am' ? 'ተጨማሪ ማስታወሻዎች' : 'Special Wishes or Mobility Notes'}
                </label>
                <textarea
                  rows="3"
                  value={bookData.customNotes}
                  onChange={(e) => setBookData({ ...bookData, customNotes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#B58A43]/30 bg-[#FAF8F5] dark:bg-[#1A1814] text-xs text-[#1A1713] dark:text-[#F5F2EB] focus:outline-none focus:border-[#B58A43]"
                  placeholder={language === 'am' ? 'ስለሚፈልጓቸው ልዩ አገልግሎቶች ይንገሩን...' : 'Special dietary preferences, photographic focus, private flights, etc.'}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#B58A43] to-[#9E7432] hover:from-[#c49a50] hover:to-[#B58A43] text-white font-sans text-xs uppercase tracking-widest font-bold shadow-md transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>{language === 'am' ? 'በመላክ ላይ...' : 'Preparing Your Dossier...'}</span>
                ) : (
                  <>
                    <span>{language === 'am' ? 'የግል ጉዞ ጥያቄ ይላኩ' : 'Request Bespoke Journey Proposal'}</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          ) : (
            /* ── TAB 2: DIRECT CONCIERGE & QUICK INQUIRY ── */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in">
              {/* Direct Channels */}
              <div className="lg:col-span-5 space-y-4 lg:border-r lg:border-[#B58A43]/20 lg:pr-6">
                <div>
                  <h3 className="font-serif text-xl text-[#1A1713] dark:text-[#F5F2EB] font-normal">
                    {language === 'am' ? 'ቀጥተኛ መስመሮች' : 'Direct Concierge Desk'}
                  </h3>
                  <p className="font-sans text-xs text-[#302B24]/75 dark:text-[#D1C7BA] mt-1 font-light">
                    {language === 'am' ? 'በስልክ ወይም በዋትስአፕ በቀጥታ ያነጋግሩን።' : 'Available daily 8:00 AM – 8:00 PM (EAT).'}
                  </p>
                </div>

                <a
                  href="https://wa.me/251911234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FAF8F5] dark:bg-[#1A1814] border border-[#B58A43]/30 hover:border-[#B58A43] transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white dark:bg-[#25221C] border border-[#B58A43]/30 text-[#B58A43] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-[#B58A43]">
                      {language === 'am' ? 'ፈጣን ምላሽ' : 'WhatsApp'}
                    </span>
                    <span className="text-xs font-semibold text-[#1A1713] dark:text-[#F5F2EB] font-mono">+251 91 123 4567</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FAF8F5] dark:bg-[#1A1814] border border-[#B58A43]/20">
                  <div className="w-10 h-10 rounded-lg bg-white dark:bg-[#25221C] border border-[#B58A43]/30 text-[#B58A43] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#B58A43]" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-[#302B24]/60 dark:text-[#D1C7BA]/70 font-semibold">{language === 'am' ? 'ኢሜይል' : 'Email'}</span>
                    <a href="mailto:concierge@thetouristethiopia.com" className="font-semibold text-xs text-[#1A1713] dark:text-[#F5F2EB] hover:text-[#B58A43]">
                      concierge@thetouristethiopia.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FAF8F5] dark:bg-[#1A1814] border border-[#B58A43]/20">
                  <div className="w-10 h-10 rounded-lg bg-white dark:bg-[#25221C] border border-[#B58A43]/30 text-[#B58A43] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#B58A43]" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase text-[#302B24]/60 dark:text-[#D1C7BA]/70 font-semibold">{language === 'am' ? 'አድራሻ' : 'Headquarters'}</span>
                    <span className="text-xs text-[#1A1713] dark:text-[#F5F2EB]">
                      Bole Medhanialem, Addis Ababa
                    </span>
                  </div>
                </div>
              </div>

              {/* Inquiry Message Form */}
              <div className="lg:col-span-7">
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#302B24]/70 dark:text-[#D1C7BA] font-semibold mb-1">
                        {language === 'am' ? 'ሙሉ ስም *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={inquiryData.fullName}
                        onChange={(e) => setInquiryData({ ...inquiryData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl border border-[#B58A43]/30 bg-[#FAF8F5] dark:bg-[#1A1814] text-xs text-[#1A1713] dark:text-[#F5F2EB] focus:outline-none focus:border-[#B58A43]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#302B24]/70 dark:text-[#D1C7BA] font-semibold mb-1">
                        {language === 'am' ? 'ኢሜይል *' : 'Email Address *'}
                      </label>
                      <input
                        type="email"
                        required
                        value={inquiryData.email}
                        onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl border border-[#B58A43]/30 bg-[#FAF8F5] dark:bg-[#1A1814] text-xs text-[#1A1713] dark:text-[#F5F2EB] focus:outline-none focus:border-[#B58A43]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#302B24]/70 dark:text-[#D1C7BA] font-semibold mb-1">
                      {language === 'am' ? 'መልእክት *' : 'Message *'}
                    </label>
                    <textarea
                      required
                      rows="4"
                      value={inquiryData.message}
                      onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#B58A43]/30 bg-[#FAF8F5] dark:bg-[#1A1814] text-xs text-[#1A1713] dark:text-[#F5F2EB] focus:outline-none focus:border-[#B58A43]"
                      placeholder="How may our team assist you?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#B58A43] to-[#9E7432] hover:from-[#c49a50] hover:to-[#B58A43] text-white font-sans text-xs uppercase tracking-widest font-bold shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>{language === 'am' ? 'መልእክት ይላኩ' : 'Send Message'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>

        {/* ── EMBEDDED CONCISE TRAVEL GUIDE (FAQS) ── */}
        <div className="mt-14 space-y-4">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#B58A43] font-bold">
              {language === 'am' ? 'የጉዞ መመሪያ' : 'Essential Travel Guide'}
            </span>
            <h3 className="font-serif text-2xl text-[#1A1713] dark:text-[#F5F2EB] font-normal mt-0.5">
              {language === 'am' ? 'ተደጋጋሚ ጥያቄዎች' : 'Frequently Asked Questions'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {faqs.slice(0, 4).map((faq, idx) => {
              const isOpen = openFaqIndex === idx
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#161410] rounded-2xl border border-[#B58A43]/20 p-4 cursor-pointer hover:border-[#B58A43]/50 transition-all"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                >
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-serif text-sm font-semibold text-[#1A1713] dark:text-[#F5F2EB]">
                      {faq.question}
                    </h4>
                    <span className="text-[#B58A43] shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </div>
                  {isOpen && (
                    <p className="mt-2 text-xs text-[#302B24]/75 dark:text-[#D1C7BA] leading-relaxed pt-2 border-t border-[#B58A43]/15 font-light animate-fade-in">
                      {faq.answer}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
