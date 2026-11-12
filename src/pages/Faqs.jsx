import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Search, MessageCircle, Mail, Phone, HelpCircle } from 'lucide-react'
import { faqs } from '../data/tours'
import { useMesob } from '../components/MesobTransition'
import { useLanguage } from '../context/LanguageContext'
import { TiletBorderPrimary, TiletDivider, TiletCorner } from '../components/TiletPatterns'

export default function Faqs() {
  const { navigateWithMesob } = useMesob()
  const { t, language } = useLanguage()
  const [openIndex, setOpenIndex] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredFaqs = faqs.filter(
    (f) =>
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1713] pt-24 sm:pt-28 pb-20 selection:bg-[#B58A43] selection:text-white">
      {/* Header Banner with Ethiopian Tilet Accents */}
      <div className="relative bg-gradient-to-b from-[#F3EEE5] to-[#FAF8F5] border-b border-[#B58A43]/20 py-16 sm:py-20 overflow-hidden">
        <TiletBorderPrimary className="absolute top-0 left-0 right-0 w-full text-[#B58A43] opacity-60" height={10} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#B58A43]/30 text-[#B58A43] text-[11px] font-sans font-bold uppercase tracking-[0.25em] shadow-sm">
            <span>{t('faqsHeaderEyebrow')}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1A1713] tracking-tight">
            {language === 'am' ? 'ተደጋግመው የሚጠየቁ' : 'Frequently Asked'}{' '}
            <span className="italic font-light text-[#B58A43]">
              {language === 'am' ? 'ጥያቄዎች' : 'Questions'}
            </span>
          </h1>

          <p className="font-sans text-xs sm:text-sm text-[#302B24]/80 max-w-xl mx-auto font-light leading-relaxed">
            {t('faqsHeaderTitle')}
          </p>

          <TiletDivider className="w-56 mx-auto text-[#B58A43] pt-2 opacity-75" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#B58A43]/25 p-4 relative mb-10">
          <Search className="w-4 h-4 text-[#B58A43] absolute left-6 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={language === 'am' ? 'በቪዛ፣ በደህንነት፣ በከፍታ ወይም በበረራ ፈልግ...' : 'Search questions by visa, safety, altitude, currency, flights...'}
            className="w-full pl-10 pr-4 py-2 text-xs text-[#1A1713] placeholder-[#302B24]/45 focus:outline-none"
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
                    ? 'border-[#B58A43] shadow-md'
                    : 'border-[#B58A43]/20 hover:border-[#B58A43]/50'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <h3 className="font-serif text-lg sm:text-xl font-normal text-[#1A1713]">
                    {faq.question}
                  </h3>
                  <div className="text-[#B58A43] shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#302B24]/80 leading-relaxed border-t border-[#B58A43]/15 font-light animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-16 bg-white border border-[#B58A43]/25 rounded-3xl p-8 text-center space-y-4 shadow-sm relative overflow-hidden">
          <TiletCorner position="top-right" className="text-[#B58A43]/20 pointer-events-none" size={26} />
          
          <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#B58A43]/30 flex items-center justify-center mx-auto text-[#B58A43]">
            <HelpCircle className="w-6 h-6" />
          </div>

          <h3 className="font-serif text-2xl text-[#1A1713] font-normal">
            {language === 'am' ? 'እዚህ ያልተመለሰ የተለየ ጥያቄ አለዎት?' : 'Have a specific question not covered here?'}
          </h3>
          <p className="text-xs text-[#302B24]/75 max-w-md mx-auto leading-relaxed font-light">
            {language === 'am'
              ? 'የአዲስ አበባ የጉዞ አማካሪዎቻችን ስለ ልዩ ምግቦች፣ የግል ቻርተር በረራዎችና ሌሎች ዝርዝሮች ሊያብራሩልዎ ዝግጁ ናቸው።'
              : 'Our Addis Ababa concierges are on hand to advise on special diets, private charter flights, medical precautions, and photography permits.'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => navigateWithMesob('/contact')}
              className="px-6 py-2.5 rounded-full bg-[#1A1713] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider hover:bg-[#B58A43] transition-colors"
            >
              {language === 'am' ? 'አማካሪዎቻችንን ያነጋግሩ' : 'Contact Support'}
            </button>
            <a
              href="https://wa.me/251911234567"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full border border-[#B58A43]/40 text-[#1A1713] text-xs font-semibold uppercase tracking-wider hover:border-[#1A1713] transition-colors flex items-center gap-2 bg-[#FAF8F5]"
            >
              <MessageCircle className="w-4 h-4 text-[#B58A43]" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
