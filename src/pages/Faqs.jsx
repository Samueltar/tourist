import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Search, MessageCircle, Mail, Phone, HelpCircle } from 'lucide-react'
import { faqs } from '../data/tours'
import { useMesob } from '../components/MesobTransition'

export default function Faqs() {
  const { navigateWithMesob } = useMesob()
  const [openIndex, setOpenIndex] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredFaqs = faqs.filter(
    (f) =>
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-[#F5F0E6] text-[#202622] pt-24 sm:pt-28 pb-20 selection:bg-[#B86B48] selection:text-white">
      {/* Header Banner */}
      <div className="bg-[#173D32] text-[#F5F0E6] py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-3">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#C3A16A] font-semibold">
            Travel Practicalities
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight">
            Frequently Asked <span className="italic font-normal text-[#C3A16A]">Questions</span>
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#E9E0D1]/85 max-w-xl mx-auto font-light leading-relaxed">
            Everything you need to know about preparing for your private expedition to Ethiopia.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#C3A16A]/30 p-4 relative mb-10">
          <Search className="w-4 h-4 text-[#C3A16A] absolute left-6 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions by visa, safety, altitude, currency, flights..."
            className="w-full pl-10 pr-4 py-2 text-xs text-[#202622] placeholder-[#202622]/50 focus:outline-none"
          />
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-[#C3A16A] shadow-md'
                    : 'border-[#C3A16A]/20 hover:border-[#C3A16A]/60'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-[#173D32]">
                    {faq.question}
                  </h3>
                  <div className="text-[#C3A16A] shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#202622]/80 leading-relaxed border-t border-[#C3A16A]/10 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-16 bg-[#284D3C]/10 border border-[#284D3C]/20 rounded-3xl p-8 text-center space-y-4">
          <HelpCircle className="w-8 h-8 text-[#173D32] mx-auto" />
          <h3 className="font-serif text-2xl text-[#173D32] font-semibold">
            Have a specific question not covered here?
          </h3>
          <p className="text-xs text-[#202622]/80 max-w-md mx-auto leading-relaxed">
            Our Addis Ababa concierges are on hand to advise on special diets, private charter flights, medical precautions, and photography permits.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => navigateWithMesob('/contact')}
              className="px-6 py-2.5 rounded-full bg-[#173D32] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#284D3C] transition-colors"
            >
              Contact Support
            </button>
            <a
              href="https://wa.me/251911234567"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full border border-[#173D32] text-[#173D32] text-xs font-semibold uppercase tracking-wider hover:bg-[#173D32] hover:text-white transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#C3A16A]" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
