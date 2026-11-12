import React, { useState } from 'react'
import { Mail, Phone, MessageCircle, MapPin, Send, CheckCircle2, Clock } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { TiletBorderPrimary, TiletDivider, TiletCorner } from '../components/TiletPatterns'

export default function Contact() {
  const { t, language } = useLanguage()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      return
    }

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1713] pt-24 sm:pt-28 pb-20 selection:bg-[#B58A43] selection:text-white">
      {/* Editorial Header with Ethiopian Tilet Accents */}
      <div className="relative bg-gradient-to-b from-[#F3EEE5] to-[#FAF8F5] border-b border-[#B58A43]/20 py-16 sm:py-20 overflow-hidden">
        <TiletBorderPrimary className="absolute top-0 left-0 right-0 w-full text-[#B58A43] opacity-60" height={10} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#B58A43]/30 text-[#B58A43] text-[11px] font-sans font-bold uppercase tracking-[0.25em] shadow-sm">
            <span>{t('contactHeaderEyebrow')}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1A1713] tracking-tight">
            {language === 'am' ? 'ከጥንታዊ ጎዳና ጋር' : 'Connect with'}{' '}
            <span className="italic font-light text-[#B58A43]">
              {language === 'am' ? 'ይገናኙ' : 'Ancient Path'}
            </span>
          </h1>

          <p className="font-sans text-xs sm:text-sm text-[#302B24]/80 max-w-xl mx-auto font-light leading-relaxed">
            {language === 'am'
              ? 'የአዲስ አበባ ከፍተኛ የጉዞ ባለሙያዎቻችን ለጥያቄዎችዎ ምላሽ ለመስጠት ዝግጁ ናቸው።'
              : 'Begin the dialogue with our senior travel designers. Every consultation is personal and tailored.'}
          </p>

          <TiletDivider className="w-56 mx-auto text-[#B58A43] pt-2 opacity-75" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white rounded-3xl p-8 sm:p-12 border border-[#B58A43]/25 shadow-xl relative overflow-hidden">
          <TiletCorner position="top-right" className="text-[#B58A43]/30 pointer-events-none" size={32} />

          {/* Left Column: Direct Concierge Contacts */}
          <div className="lg:col-span-5 space-y-8 lg:border-r lg:border-[#B58A43]/20 lg:pr-10">
            <div>
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B58A43] font-bold">
                {language === 'am' ? 'ቀጥተኛ መስመሮች' : 'Direct Channels'}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1713] font-normal mt-1">
                {language === 'am' ? 'የጉዞ አማካሪዎቻችን' : 'Reach Our Concierge'}
              </h2>
              <p className="font-sans text-xs text-[#302B24]/75 mt-2 leading-relaxed font-light">
                {language === 'am'
                  ? 'በስልክ፣ በኢሜይል ወይም በዋትስአፕ በቀጥታ ያነጋግሩን።'
                  : 'Whether you prefer a direct telephone conversation, an email discussion, or a quick WhatsApp exchange, we are at your service.'}
              </p>
            </div>

            <div className="space-y-4 text-xs text-[#302B24]/85">
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/251911234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#FAF8F5] border border-[#B58A43]/30 hover:border-[#B58A43] transition-all group shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-[#B58A43]/40 text-[#B58A43] flex items-center justify-center shrink-0 shadow-sm">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-[#B58A43]">
                    {language === 'am' ? 'ፈጣን ምላሽ' : 'Fastest Response'}
                  </span>
                  <span className="font-serif text-base font-semibold text-[#1A1713] group-hover:text-[#B58A43] transition-colors">
                    WhatsApp Concierge
                  </span>
                  <span className="block text-[11px] text-[#302B24]/70 font-mono">+251 91 123 4567</span>
                </div>
              </a>

              {/* Email */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FAF8F5] border border-[#B58A43]/20">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#B58A43]/30 text-[#B58A43] flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-5 h-5 text-[#B58A43]" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-[#302B24]/60 font-semibold">{language === 'am' ? 'ኢሜይል' : 'Written Inquiries'}</span>
                  <a href="mailto:journeys@ancientpathethiopia.com" className="font-semibold text-xs text-[#1A1713] hover:text-[#B58A43] transition-colors">
                    journeys@ancientpathethiopia.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FAF8F5] border border-[#B58A43]/20">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#B58A43]/30 text-[#B58A43] flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-5 h-5 text-[#B58A43]" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-[#302B24]/60 font-semibold">{language === 'am' ? 'ዋና የስልክ መስመር' : 'Headquarters Direct Line'}</span>
                  <a href="tel:+251116789012" className="font-semibold text-xs text-[#1A1713] hover:text-[#B58A43] transition-colors">
                    +251 11 678 9012
                  </a>
                </div>
              </div>

              {/* Office Location */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FAF8F5] border border-[#B58A43]/20">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#B58A43]/30 text-[#B58A43] flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5 text-[#B58A43]" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-[#302B24]/60 font-semibold">{language === 'am' ? 'የቢሮ አድራሻ' : 'Headquarters Address'}</span>
                  <span className="font-semibold text-xs text-[#1A1713]">
                    {language === 'am' ? 'ቦሌ መድኃኔዓለም፣ አዲስ አበባ፣ ኢትዮጵያ' : 'Bole Medhanialem Avenue, Addis Ababa, Ethiopia'}
                  </span>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-2 text-[11px] text-[#302B24]/65 pt-2">
                <Clock className="w-4 h-4 text-[#B58A43]" />
                <span>{language === 'am' ? 'የአገልግሎት ሰዓት: 8:00 AM – 8:00 PM (EAT)' : 'Concierge Desk: 8:00 AM – 8:00 PM East Africa Time (EAT)'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4 animate-scale-in">
                <div className="w-16 h-16 rounded-full bg-white border border-[#B58A43] text-[#B58A43] flex items-center justify-center shadow-md">
                  <CheckCircle2 className="w-8 h-8 text-[#B58A43]" />
                </div>
                <h3 className="font-serif text-3xl text-[#1A1713] font-normal">
                  {language === 'am' ? 'እናመሰግናለን!' : "Amesege'nalew! (Thank You)"}
                </h3>
                <p className="text-xs text-[#302B24]/80 max-w-md leading-relaxed font-light">
                  {t('inquirySuccess')}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({ fullName: '', email: '', phone: '', subject: 'General Inquiry', message: '' })
                  }}
                  className="px-6 py-2.5 rounded-full border border-[#1A1713] text-xs font-semibold uppercase tracking-wider text-[#1A1713] hover:bg-[#1A1713] hover:text-white transition-colors"
                >
                  {language === 'am' ? 'ሌላ መልእክት ይላኩ' : 'Send Another Message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B58A43] font-bold">
                    {language === 'am' ? 'መልእክት ይላኩ' : 'Send an Inquiry'}
                  </span>
                  <h3 className="font-serif text-2xl text-[#1A1713] font-normal mt-0.5">
                    {language === 'am' ? 'ምን ልናግዝዎት እንችላለን?' : 'How May We Assist You?'}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#302B24]/70 font-semibold mb-1.5">
                      {t('fullName')} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full px-4 py-3 rounded-xl border border-[#B58A43]/30 bg-[#FAF8F5] text-xs text-[#1A1713] focus:outline-none focus:border-[#B58A43]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#302B24]/70 font-semibold mb-1.5">
                      {t('emailAddress')} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. eleanor@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#B58A43]/30 bg-[#FAF8F5] text-xs text-[#1A1713] focus:outline-none focus:border-[#B58A43]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#302B24]/70 font-semibold mb-1.5">
                      {t('phoneNumber')}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-[#B58A43]/30 bg-[#FAF8F5] text-xs text-[#1A1713] focus:outline-none focus:border-[#B58A43]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#302B24]/70 font-semibold mb-1.5">
                      {language === 'am' ? 'የጉዳዩ ርዕስ' : 'Inquiry Topic'}
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#B58A43]/30 bg-[#FAF8F5] text-xs text-[#1A1713] focus:outline-none focus:border-[#B58A43]"
                    >
                      <option value="General Inquiry">{language === 'am' ? 'አጠቃላይ ጥያቄ' : 'General Question'}</option>
                      <option value="Private Tour Customization">{language === 'am' ? 'ብጁ የጉዞ ዝግጅት' : 'Private Tour Customization'}</option>
                      <option value="Helicopter & Aviation Safaris">{language === 'am' ? 'የሄሊኮፕተርና የአየር ላይ ጉዞዎች' : 'Helicopter & Aviation Safaris'}</option>
                      <option value="Photographic Expedition">{language === 'am' ? 'የፎቶግራፍ ጉዞ' : 'Photographic Expedition'}</option>
                      <option value="Media or Press Inquiry">{language === 'am' ? 'የሚዲያና የጋዜጠኞች ጥያቄ' : 'Media or Press Inquiry'}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#302B24]/70 font-semibold mb-1.5">
                    {language === 'am' ? 'መልእክትዎ / የጉዞ ፍላጎትዎ *' : 'Your Message / Travel Vision *'}
                  </label>
                  <textarea
                    required
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t('additionalNotes')}
                    className="w-full px-4 py-3 rounded-xl border border-[#B58A43]/30 bg-[#FAF8F5] text-xs text-[#1A1713] focus:outline-none focus:border-[#B58A43]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#B58A43] to-[#916B2D] hover:from-[#C49A50] hover:to-[#B58A43] text-white font-sans text-xs uppercase tracking-widest font-bold shadow-md transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>{language === 'am' ? 'በመላክ ላይ...' : 'Sending your inquiry...'}</span>
                  ) : (
                    <>
                      <span>{t('submitInquiry')}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
