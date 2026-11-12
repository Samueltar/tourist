import React, { useState } from 'react'
import { Mail, Phone, MessageCircle, MapPin, ArrowUpRight, Send, CheckCircle2 } from 'lucide-react'
import { useMesob } from './MesobTransition'
import { useLanguage } from '../context/LanguageContext'
import { TiletBorderPrimary, TiletDivider, TiletMotif } from './TiletPatterns'

export default function Footer() {
  const { navigateWithMesob } = useMesob()
  const { t, language } = useLanguage()
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!newsletterEmail.trim()) return
    setSubscribed(true)
    setTimeout(() => {
      setSubscribed(false)
      setNewsletterEmail('')
    }, 4000)
  }

  return (
    <footer className="relative bg-[#F8F5EE] dark:bg-[#0E0D0B] text-[#302B24] dark:text-[#F5F2EB] overflow-hidden border-t border-[#B58A43]/20 dark:border-[#B58A43]/30 transition-colors duration-300">
      {/* Prominent Repeating Gold Ethiopian Tilet Ornamental Band across Footer Top */}
      <TiletBorderPrimary height={20} className="border-b border-[#B58A43]/30 bg-white dark:bg-[#161410]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12">
        {/* Top Editorial Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-[#B58A43]/20">
          <div className="lg:col-span-7 space-y-4">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#B58A43] font-bold">
              {language === 'am' ? 'የአፍሪካ ቀንድ ኩራት' : 'The Heritage of the Horn'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#302B24] dark:text-[#F5F2EB] leading-tight">
              {language === 'am' ? (
                <>
                  ከተጠበቀው በላይ።<br />
                  <span className="italic font-normal text-[#B58A43]">ጥንታዊ ጎዳናዎች</span> ዛሬም ሕያው ናቸው።
                </>
              ) : (
                <>
                  Beyond the expected.<br />
                  <span className="italic font-normal text-[#B58A43]">Where ancient pathways</span> remain alive.
                </>
              )}
            </h2>
            <p className="font-sans text-sm text-[#302B24]/80 dark:text-[#E8E2D5]/80 max-w-xl leading-relaxed pt-1 font-light">
              {language === 'am'
                ? 'ጎብኚው (The Tourist) በቅኝ ግዛት ባልተገዛችው ታሪካዊት ምድር ውስጥ ጥንቃቄ የተሞላባቸው የግል ጉዞዎችን ያዘጋጃል። ከ12ኛው ክፍለ ዘመን የላሊበላ ፍልፍል አብያተ ክርስቲያናት አንስቶ እስከ ስሜን ተራሮች እና የኦሞ ሸለቆ ድረስ ከእውነተኛው የሀገራችን መንፈስ ጋር እናገናኝዎታለን።'
                : 'The Tourist (ጎብኚው) — Cultural Tours in Ethiopia crafts private, thoughtful journeys across a land that was never colonized. From the 12th-century subterranean churches of Lalibela to the dramatic heights of the Simien range and the living cultures of the Omo Valley, we connect travelers to the authentic soul of Ethiopia.'}
            </p>
          </div>

          {/* Newsletter / Field Dispatches Subscription Card */}
          <div className="lg:col-span-5 bg-white dark:bg-[#161410] border border-[#B58A43]/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
            {/* Subtle Tilet Corner Accent */}
            <div className="absolute top-3 right-3 opacity-20 pointer-events-none">
              <TiletMotif className="w-12 h-12 text-[#B58A43]" />
            </div>

            <div>
              <span className="font-sans text-[11px] uppercase tracking-widest text-[#B58A43] font-bold">
                {language === 'am' ? 'የመስክ ማስታወሻዎች' : 'Field Dispatches'}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#302B24] dark:text-[#F5F2EB] font-medium mt-1">
                {language === 'am' ? 'የተመረጡ ታሪኮችን በኢሜይል ያግኙ' : 'Receive our curated stories'}
              </h3>
              <p className="font-sans text-xs text-[#302B24]/70 dark:text-[#E8E2D5]/70 mt-2 leading-relaxed font-light">
                {language === 'am'
                  ? 'ስለ ኢትዮጵያ ባህል፣ ልዩ ጉዞዎች እና ወቅታዊ የጉዞ ምክሮች የሚላኩ ጽሑፎች።'
                  : 'Essays on Ethiopian culture, private expedition updates, and seasonal travel dispatches. Never spam.'}
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="mt-6">
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-[#B58A43] bg-[#FAF8F5] dark:bg-[#1E1B16] p-3 rounded-xl border border-[#B58A43]/40">
                  <CheckCircle2 className="w-4 h-4 text-[#B58A43]" />
                  <span>{language === 'am' ? 'እናመሰግናለን! በደብዳቤ ዝርዝራችን ውስጥ ተካተዋል።' : "Amesege'nalew! You are on our private dispatch list."}</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 bg-[#FAF8F5] dark:bg-[#1E1B16] p-1.5 rounded-xl border border-[#B58A43]/30 focus-within:border-[#B58A43]">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder={language === 'am' ? 'የኢሜይል አድራሻዎን ያስገቡ' : 'Enter your email address'}
                    className="flex-1 bg-transparent px-3 py-2 text-xs text-[#302B24] dark:text-[#F5F2EB] placeholder-[#302B24]/50 dark:placeholder-[#E8E2D5]/50 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-[#B58A43] hover:bg-[#9E7432] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 shrink-0 shadow-xs"
                  >
                    <span>{language === 'am' ? 'ይመዝገቡ' : 'Subscribe'}</span>
                    <Send className="w-3 h-3" />
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Multi-column Navigation Links */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 py-14 border-b border-[#B58A43]/20">
          {/* Column 1: Cultural Tours */}
          <div>
            <h4 className="font-serif text-base text-[#B58A43] font-semibold tracking-wide mb-4">
              {language === 'am' ? 'ባህላዊ ጉዞዎች' : 'Cultural Tours'}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#302B24]/80 dark:text-[#E8E2D5]/80 font-light">
              <li>
                <button
                  onClick={() => navigateWithMesob('/tours/ancient-kingdoms')}
                  className="hover:text-[#B58A43] transition-colors text-left"
                >
                  Ancient Kingdoms (14 Days)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateWithMesob('/tours/landscapes-lakes')}
                  className="hover:text-[#B58A43] transition-colors text-left"
                >
                  Landscapes & Lakes (14 Days)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateWithMesob('/tours/lalibela-sacred')}
                  className="hover:text-[#B58A43] transition-colors text-left"
                >
                  Lalibela: Sacred Journey (5 Days)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateWithMesob('/tours/rift-to-harar')}
                  className="hover:text-[#B58A43] transition-colors text-left"
                >
                  Rift Valley to Harar (14 Days)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateWithMesob('/tours/omo-valley-tribes')}
                  className="hover:text-[#B58A43] transition-colors text-left"
                >
                  Omo Valley Living Cultures (10 Days)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateWithMesob('/tours/danakil-depression')}
                  className="hover:text-[#B58A43] transition-colors text-left"
                >
                  Danakil Depression (6 Days)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateWithMesob('/tours')}
                  className="text-[#B58A43] font-bold flex items-center gap-1 hover:underline pt-1"
                >
                  <span>{language === 'am' ? 'ሁሉንም 9 ጉዞዎች ይመልከቱ' : 'View All 9 Journeys'}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Destinations */}
          <div>
            <h4 className="font-serif text-base text-[#B58A43] font-semibold tracking-wide mb-4">
              {language === 'am' ? 'ታዋቂ መዳረሻዎች' : 'Iconic Destinations'}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#302B24]/80 dark:text-[#E8E2D5]/80 font-light">
              <li>
                <button onClick={() => navigateWithMesob('/destinations/lalibela')} className="hover:text-[#B58A43] transition-colors text-left">
                  {language === 'am' ? 'የላሊበላ ፍልፍል አብያተ ክርስቲያናት' : 'Lalibela Rock Churches'}
                </button>
              </li>
              <li>
                <button onClick={() => navigateWithMesob('/destinations/simien-mountains')} className="hover:text-[#B58A43] transition-colors text-left">
                  {language === 'am' ? 'የስሜን ተራሮች ብሔራዊ ፓርክ' : 'Simien Mountains'}
                </button>
              </li>
              <li>
                <button onClick={() => navigateWithMesob('/destinations/gondar')} className="hover:text-[#B58A43] transition-colors text-left">
                  {language === 'am' ? 'የጎንደር ፋሲል ግቢ' : 'Gondar Royal Enclosure'}
                </button>
              </li>
              <li>
                <button onClick={() => navigateWithMesob('/destinations/bahir-dar')} className="hover:text-[#B58A43] transition-colors text-left">
                  {language === 'am' ? 'ባሕር ዳር እና ጣና ሐይቅ' : 'Lake Tana & Bahir Dar'}
                </button>
              </li>
              <li>
                <button onClick={() => navigateWithMesob('/destinations/bale-mountains')} className="hover:text-[#B58A43] transition-colors text-left">
                  {language === 'am' ? 'የባሌ ተራሮች' : 'Bale Mountains'}
                </button>
              </li>
              <li>
                <button onClick={() => navigateWithMesob('/destinations/harar')} className="hover:text-[#B58A43] transition-colors text-left">
                  {language === 'am' ? 'የሐረር ጁጎል ከተማ' : 'Harar Walled City'}
                </button>
              </li>
              <li>
                <button onClick={() => navigateWithMesob('/destinations/afar')} className="hover:text-[#B58A43] transition-colors text-left">
                  {language === 'am' ? 'ዳናኪል እና አፋር' : 'Afar & Danakil Depression'}
                </button>
              </li>
              <li>
                <button onClick={() => navigateWithMesob('/destinations')} className="text-[#B58A43] font-bold flex items-center gap-1 hover:underline pt-1">
                  <span>{language === 'am' ? 'ሁሉንም 10 መዳረሻዎች ያስሱ' : 'Explore All 10 Regions'}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: The Ethos & Journal */}
          <div>
            <h4 className="font-serif text-base text-[#B58A43] font-semibold tracking-wide mb-4">
              {language === 'am' ? 'ልዩ ተሞክሮ' : 'The Experience'}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#302B24]/80 dark:text-[#E8E2D5]/80 font-light">
              <li>
                <button onClick={() => navigateWithMesob('/about')} className="hover:text-[#B58A43] transition-colors text-left">
                  {language === 'am' ? 'ስለ ጥንታዊ ጎዳና እና ቡድናችን' : 'Living Culture & Ethos'}
                </button>
              </li>
              <li>
                <button onClick={() => navigateWithMesob('/about')} className="hover:text-[#B58A43] transition-colors text-left">
                  {language === 'am' ? 'የአበነዘር ታሪክ እና ፍልስፍና' : "Abenezer's Story & Philosophy"}
                </button>
              </li>
              <li>
                <button onClick={() => navigateWithMesob('/journal')} className="hover:text-[#B58A43] transition-colors text-left">
                  {language === 'am' ? 'የመስክ የጉዞ ማስታወሻዎች' : 'Field Journal Dispatches'}
                </button>
              </li>
              <li>
                <button onClick={() => navigateWithMesob('/journal/coffee-ceremony')} className="hover:text-[#B58A43] transition-colors text-left">
                  {language === 'am' ? 'የኢትዮጵያ የቡና ሥነ-ሥርዓት' : 'The Ethiopian Buna Ritual'}
                </button>
              </li>
              <li>
                <button onClick={() => navigateWithMesob('/faqs')} className="hover:text-[#B58A43] transition-colors text-left">
                  {language === 'am' ? 'የጉዞ መመሪያ እና ጥያቄዎች' : 'Travel Guide & FAQs'}
                </button>
              </li>
              <li>
                <button onClick={() => navigateWithMesob('/book')} className="text-[#B58A43] font-bold flex items-center gap-1 hover:underline pt-1">
                  <span>{language === 'am' ? 'ብጁ ጉዞ ይንደፉ' : 'Curate Tailor-Made Journey'}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Private Concierge */}
          <div>
            <h4 className="font-serif text-base text-[#B58A43] font-semibold tracking-wide mb-4">
              {language === 'am' ? 'የግል የጉዞ አማካሪ' : 'Private Concierge'}
            </h4>
            <ul className="space-y-3 text-xs text-[#302B24]/80 dark:text-[#E8E2D5]/80 font-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B58A43] shrink-0 mt-0.5" />
                <span>{language === 'am' ? 'ቦሌ መድኃኔዓለም፣ አዲስ አበባ፣ ኢትዮጵያ' : 'Bole Medhanialem, Addis Ababa, Ethiopia'}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B58A43] shrink-0" />
                <a href="mailto:journeys@ancientpathethiopia.com" className="hover:text-[#B58A43] transition-colors">
                  journeys@ancientpathethiopia.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B58A43] shrink-0" />
                <a href="tel:+251911234567" className="hover:text-[#B58A43] transition-colors">
                  +251 91 123 4567
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#B58A43] shrink-0" />
                <a
                  href="https://wa.me/251911234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#9E7432] text-[#B58A43] font-bold transition-colors"
                >
                  WhatsApp Instant Concierge
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Fine Ornamental Tilet Divider */}
        <TiletDivider className="py-8" />

        {/* Bottom Bar & Heritage Note */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#302B24]/60 dark:text-[#E8E2D5]/60 font-light">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {language === 'am' ? 'ጎብኚው — የኢትዮጵያ ባህላዊ ጉዞዎች' : 'The Tourist — Cultural Tours in Ethiopia'}.</span>
            <span>•</span>
            <span className="text-[#B58A43] font-semibold">{language === 'am' ? 'በአዲስ አበባ የተነደፈ' : 'Handcrafted in Addis Ababa'}</span>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => navigateWithMesob('/faqs')} className="hover:text-[#B58A43]">
              {language === 'am' ? 'የግላዊነት ፖሊሲ' : 'Privacy Policy'}
            </button>
            <span>•</span>
            <button onClick={() => navigateWithMesob('/faqs')} className="hover:text-[#B58A43]">
              {language === 'am' ? 'የጉዞ ደንቦች' : 'Terms of Journey'}
            </button>
            <span>•</span>
            <button onClick={() => navigateWithMesob('/contact')} className="hover:text-[#B58A43]">
              {language === 'am' ? 'ያግኙን' : 'Contact Desk'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}