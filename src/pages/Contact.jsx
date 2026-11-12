import React, { useState } from 'react'
import { Mail, Phone, MessageCircle, MapPin, Send, CheckCircle2, Clock } from 'lucide-react'

export default function Contact() {
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
    <div className="min-h-screen bg-[#F5F0E6] text-[#202622] pt-24 sm:pt-28 pb-20 selection:bg-[#B86B48] selection:text-white">
      {/* Editorial Header */}
      <div className="bg-[#173D32] text-[#F5F0E6] py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#C3A16A] font-semibold">
            We are Here in Addis Ababa
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight">
            Connect with <span className="italic font-normal text-[#C3A16A]">Ancient Path</span>
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#E9E0D1]/85 max-w-xl mx-auto font-light leading-relaxed">
            Begin the dialogue with our senior travel designers. Every consultation is personal and tailored.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white rounded-3xl p-8 sm:p-12 border border-[#C3A16A]/30 shadow-xl">
          {/* Left Column: Direct Concierge Contacts */}
          <div className="lg:col-span-5 space-y-8 lg:border-r lg:border-[#C3A16A]/20 lg:pr-10">
            <div>
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B86B48] font-bold">
                Direct Channels
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#173D32] font-medium mt-1">
                Reach Our Concierge
              </h2>
              <p className="font-sans text-xs text-[#202622]/70 mt-2 leading-relaxed">
                Whether you prefer a direct telephone conversation, an email discussion, or a quick WhatsApp exchange, we are at your service.
              </p>
            </div>

            <div className="space-y-5 text-xs text-[#202622]/85">
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/251911234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#284D3C]/10 border border-[#284D3C]/20 hover:border-[#173D32] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#173D32] text-[#C3A16A] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-[#B86B48]">
                    Fastest Response
                  </span>
                  <span className="font-serif text-base font-semibold text-[#173D32] group-hover:text-[#B86B48] transition-colors">
                    WhatsApp Concierge
                  </span>
                  <span className="block text-[11px] text-[#202622]/60">+251 91 123 4567</span>
                </div>
              </a>

              {/* Email */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#F5F0E6]/50 border border-[#C3A16A]/20">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#C3A16A]/30 text-[#173D32] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#C3A16A]" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-[#202622]/60">Written Inquiries</span>
                  <a href="mailto:journeys@ancientpathethiopia.com" className="font-semibold text-xs text-[#173D32] hover:underline">
                    journeys@ancientpathethiopia.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#F5F0E6]/50 border border-[#C3A16A]/20">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#C3A16A]/30 text-[#173D32] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#C3A16A]" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-[#202622]/60">Headquarters Direct Line</span>
                  <a href="tel:+251116789012" className="font-semibold text-xs text-[#173D32] hover:underline">
                    +251 11 678 9012
                  </a>
                </div>
              </div>

              {/* Office Location */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#F5F0E6]/50 border border-[#C3A16A]/20">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#C3A16A]/30 text-[#173D32] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#C3A16A]" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-[#202622]/60">Headquarters Address</span>
                  <span className="font-semibold text-xs text-[#173D32]">
                    Bole Medhanialem Avenue, Addis Ababa, Ethiopia
                  </span>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-2 text-[11px] text-[#202622]/60 pt-2">
                <Clock className="w-4 h-4 text-[#C3A16A]" />
                <span>Concierge Desk: 8:00 AM – 8:00 PM East Africa Time (EAT)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4 animate-scale-in">
                <div className="w-16 h-16 rounded-full bg-[#173D32] text-[#C3A16A] flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-[#173D32] font-semibold">
                  Amesege'nalew! (Thank You)
                </h3>
                <p className="text-xs text-[#202622]/80 max-w-md leading-relaxed">
                  Your inquiry has been delivered directly to Abenezer and our expedition leads. 
                  We will review your message and email you at <strong className="text-[#173D32]">{formData.email}</strong> within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({ fullName: '', email: '', phone: '', subject: 'General Inquiry', message: '' })
                  }}
                  className="px-6 py-2.5 rounded-full border border-[#173D32] text-xs font-semibold uppercase tracking-wider text-[#173D32] hover:bg-[#173D32] hover:text-white transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B86B48] font-bold">
                    Send an Inquiry
                  </span>
                  <h3 className="font-serif text-2xl text-[#173D32] font-medium mt-0.5">
                    How May We Assist You?
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#202622]/70 font-semibold mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full px-4 py-3 rounded-xl border border-[#C3A16A]/30 bg-[#F5F0E6]/30 text-xs text-[#202622] focus:outline-none focus:border-[#173D32]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#202622]/70 font-semibold mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. eleanor@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#C3A16A]/30 bg-[#F5F0E6]/30 text-xs text-[#202622] focus:outline-none focus:border-[#173D32]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#202622]/70 font-semibold mb-1.5">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-[#C3A16A]/30 bg-[#F5F0E6]/30 text-xs text-[#202622] focus:outline-none focus:border-[#173D32]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#202622]/70 font-semibold mb-1.5">
                      Inquiry Topic
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#C3A16A]/30 bg-[#F5F0E6]/30 text-xs text-[#202622] focus:outline-none focus:border-[#173D32]"
                    >
                      <option value="General Inquiry">General Question</option>
                      <option value="Private Tour Customization">Private Tour Customization</option>
                      <option value="Helicopter & Aviation Safaris">Helicopter & Aviation Safaris</option>
                      <option value="Photographic Expedition">Photographic Expedition</option>
                      <option value="Media or Press Inquiry">Media or Press Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#202622]/70 font-semibold mb-1.5">
                    Your Message / Travel Vision *
                  </label>
                  <textarea
                    required
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the destinations you wish to visit, your estimated dates, party size, or any specific interests..."
                    className="w-full px-4 py-3 rounded-xl border border-[#C3A16A]/30 bg-[#F5F0E6]/30 text-xs text-[#202622] focus:outline-none focus:border-[#173D32]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#B86B48] to-[#9E5536] hover:from-[#c2734f] hover:to-[#B86B48] text-white font-sans text-xs uppercase tracking-widest font-bold shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Sending your inquiry...</span>
                  ) : (
                    <>
                      <span>Transmit Inquiry to Concierge</span>
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
