import React, { useState } from 'react'
import { Mail, Phone, MessageCircle, MapPin, ArrowUpRight, Send, CheckCircle2 } from 'lucide-react'
import { useMesob } from './MesobTransition'
import { EthiopianBorderBand, EthiopianDivider } from './EthiopianPattern'

export default function Footer() {
  const { navigateWithMesob } = useMesob()
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
    <footer className="relative bg-[#173D32] text-[#F5F0E6] overflow-hidden">
      {/* Decorative Ethiopian woven border strip at top */}
      <EthiopianBorderBand />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12">
        {/* Top Editorial Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-[#C3A16A]/20">
          <div className="lg:col-span-7 space-y-4">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-[#C3A16A] font-semibold">
              The Heritage of the Horn
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#F5F0E6] leading-tight">
              Beyond the expected.<br />
              <span className="italic font-normal text-[#C3A16A]">Where ancient pathways</span> remain alive.
            </h2>
            <p className="font-sans text-sm text-[#E9E0D1]/80 max-w-xl leading-relaxed pt-2">
              Ancient Path Ethiopia crafts private, thoughtful journeys across a land that was never colonized. 
              From the 12th-century subterranean churches of Lalibela to the dramatic heights of the Simien range 
              and the living cultures of the Omo Valley, we connect travelers to the authentic soul of Ethiopia.
            </p>
          </div>

          {/* Newsletter / Field Dispatches Subscription */}
          <div className="lg:col-span-5 bg-[#284D3C]/40 border border-[#C3A16A]/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="font-sans text-[11px] uppercase tracking-widest text-[#C3A16A] font-semibold">
                Field Dispatches
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#F5F0E6] font-medium mt-1">
                Receive our curated stories
              </h3>
              <p className="font-sans text-xs text-[#E9E0D1]/70 mt-2 leading-relaxed">
                Essays on Ethiopian culture, private expedition updates, and seasonal travel dispatches. Never spam.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="mt-6">
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-[#C3A16A] bg-[#173D32] p-3 rounded-xl border border-[#C3A16A]/40">
                  <CheckCircle2 className="w-4 h-4 text-[#C3A16A]" />
                  <span>Amesege'nalew! You are on our private dispatch list.</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 bg-[#173D32] p-1.5 rounded-xl border border-[#C3A16A]/30 focus-within:border-[#C3A16A]">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 bg-transparent px-3 py-2 text-xs text-[#F5F0E6] placeholder-[#E9E0D1]/40 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-[#B86B48] hover:bg-[#a35c3b] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 shrink-0"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3 h-3" />
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Multi-column Navigation Links */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 py-14 border-b border-[#C3A16A]/20">
          {/* Column 1: Curated Journeys */}
          <div>
            <h4 className="font-serif text-base text-[#C3A16A] font-medium tracking-wide mb-4">
              Curated Journeys
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E9E0D1]/80">
              <li>
                <button
                  onClick={() => navigateWithMesob('/tours/ancient-kingdoms')}
                  className="hover:text-white transition-colors text-left"
                >
                  Ancient Kingdoms (14 Days)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateWithMesob('/tours/landscapes-lakes')}
                  className="hover:text-white transition-colors text-left"
                >
                  Landscapes & Lakes (14 Days)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateWithMesob('/tours/lalibela-sacred')}
                  className="hover:text-white transition-colors text-left"
                >
                  Lalibela: Sacred Journey (5 Days)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateWithMesob('/tours/rift-to-harar')}
                  className="hover:text-white transition-colors text-left"
                >
                  Rift Valley to Harar (14 Days)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateWithMesob('/tours/omo-valley-tribes')}
                  className="hover:text-white transition-colors text-left"
                >
                  Omo Valley Living Cultures (10 Days)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateWithMesob('/tours/danakil-depression')}
                  className="hover:text-white transition-colors text-left"
                >
                  Danakil Depression (6 Days)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateWithMesob('/tours')}
                  className="text-[#C3A16A] font-semibold flex items-center gap-1 hover:underline pt-1"
                >
                  <span>View All 9 Journeys</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Destinations */}
          <div>
            <h4 className="font-serif text-base text-[#C3A16A] font-medium tracking-wide mb-4">
              Iconic Destinations
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E9E0D1]/80">
              <li>
                <button onClick={() => navigateWithMesob('/destinations/lalibela')} className="hover:text-white transition-colors text-left">
                  Lalibela Rock Churches
                </button>
              </li>
              <li>
                <button onClick={() => navigateWithMesob('/destinations/simien-mountains')} className="hover:text-white transition-colors text-left">
                  Simien Mountains
                </button>
              </li>
              <li>
                <button onClick={() => navigateWithMesob('/destinations/gondar')} className="hover:text-white transition-colors text-left">
                  Gondar Royal Enclosure
                </button>
              </li>
              <li>
                <button onClick={() => navigateWithMesob('/destinations/bahir-dar')} className="hover:text-white transition-colors text-left">
                  Lake Tana & Bahir Dar
                </button>
              </li>
              <li>
                <button onClick={() => navigateWithMesob('/destinations/bale-mountains')} className="hover:text-white transition-colors text-left">
                  Bale Mountains
                </button>
              </li>
              <li>
                <button onClick={() => navigateWithMesob('/destinations/harar')} className="hover:text-white transition-colors text-left">
                  Harar Walled City
                </button>
              </li>
              <li>
                <button onClick={() => navigateWithMesob('/destinations/afar')} className="hover:text-white transition-colors text-left">
                  Afar & Danakil Depression
                </button>
              </li>
              <li>
                <button onClick={() => navigateWithMesob('/destinations')} className="text-[#C3A16A] font-semibold flex items-center gap-1 hover:underline pt-1">
                  <span>Explore All 10 Regions</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: The Ethos & Journal */}
          <div>
            <h4 className="font-serif text-base text-[#C3A16A] font-medium tracking-wide mb-4">
              The Experience
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E9E0D1]/80">
              <li>
                <button onClick={() => navigateWithMesob('/about')} className="hover:text-white transition-colors text-left">
                  About Ancient Path & Team
                </button>
              </li>
              <li>
                <button onClick={() => navigateWithMesob('/about')} className="hover:text-white transition-colors text-left">
                  Abenezer's Story & Philosophy
                </button>
              </li>
              <li>
                <button onClick={() => navigateWithMesob('/journal')} className="hover:text-white transition-colors text-left">
                  Editorial Field Journal
                </button>
              </li>
              <li>
                <button onClick={() => navigateWithMesob('/journal/coffee-ceremony')} className="hover:text-white transition-colors text-left">
                  The Ethiopian Buna Ritual
                </button>
              </li>
              <li>
                <button onClick={() => navigateWithMesob('/faqs')} className="hover:text-white transition-colors text-left">
                  Practicalities & Travel FAQs
                </button>
              </li>
              <li>
                <button onClick={() => navigateWithMesob('/book')} className="text-[#B86B48] font-bold flex items-center gap-1 hover:underline pt-1">
                  <span>Plan Tailor-Made Trip</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Private Concierge */}
          <div>
            <h4 className="font-serif text-base text-[#C3A16A] font-medium tracking-wide mb-4">
              Private Concierge
            </h4>
            <ul className="space-y-3 text-xs text-[#E9E0D1]/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C3A16A] shrink-0 mt-0.5" />
                <span>Bole Medhanialem, Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C3A16A] shrink-0" />
                <a href="mailto:journeys@ancientpathethiopia.com" className="hover:text-white transition-colors">
                  journeys@ancientpathethiopia.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C3A16A] shrink-0" />
                <a href="tel:+251911234567" className="hover:text-white transition-colors">
                  +251 91 123 4567
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#C3A16A] shrink-0" />
                <a
                  href="https://wa.me/251911234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-[#C3A16A] font-medium transition-colors"
                >
                  WhatsApp Instant Concierge
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Heritage Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#E9E0D1]/60">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Ancient Path Ethiopia. All rights reserved.</span>
            <span>•</span>
            <span className="text-[#C3A16A]">Handcrafted in Addis Ababa</span>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => navigateWithMesob('/faqs')} className="hover:text-white">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => navigateWithMesob('/faqs')} className="hover:text-white">
              Terms of Journey
            </button>
            <span>•</span>
            <button onClick={() => navigateWithMesob('/contact')} className="hover:text-white">
              Contact Desk
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
