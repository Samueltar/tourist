import React, { createContext, useContext, useState, useCallback, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const MesobTransitionContext = createContext({
  navigateWithMesob: () => {},
  isTransitioning: false,
})

export const useMesob = () => useContext(MesobTransitionContext)

export function MesobProvider({ children }) {
  const [transitionState, setTransitionState] = useState('idle') // 'idle' | 'covering' | 'uncovering'
  const [transitionType, setTransitionType] = useState('netela') // 'netela' | 'mesob'
  const transitionCounter = useRef(0)
  const navigate = useNavigate()
  const location = useLocation()

  const navigateWithMesob = useCallback(
    (to) => {
      if (to === location.pathname || transitionState !== 'idle') return

      // Alternate between Netela scarf breeze and Mesob basket reveal
      transitionCounter.current += 1
      const nextType = transitionCounter.current % 2 === 1 ? 'netela' : 'mesob'
      setTransitionType(nextType)

      setTransitionState('covering')

      // Halfway: switch route and scroll to top
      setTimeout(() => {
        navigate(to)
        window.scrollTo({ top: 0, behavior: 'instant' })
        setTransitionState('uncovering')
      }, 700)

      // Complete transition
      setTimeout(() => {
        setTransitionState('idle')
      }, 1350)
    },
    [navigate, location.pathname, transitionState]
  )

  return (
    <MesobTransitionContext.Provider
      value={{ navigateWithMesob, isTransitioning: transitionState !== 'idle' }}
    >
      {children}
      {transitionState !== 'idle' && (
        transitionType === 'netela' ? (
          <NetelaTransition state={transitionState} />
        ) : (
          <MesobCurtain state={transitionState} />
        )
      )}
    </MesobTransitionContext.Provider>
  )
}

/**
 * ── 1. NETELA SCARF BREEZE TRANSITION (የነጠላ ነፋሻማ ሽግግር) ─────────────────
 * An ethereal, lightweight Ethiopian white cotton Netela scarf with radiant
 * gold-woven Tilet (Tibeb) embroidered hem floating and billowing across the
 * viewport like an Addis Ababa highland breeze, carrying the user to the next page.
 */
function NetelaTransition({ state }) {
  const isCovering = state === 'covering'
  const { language } = useLanguage()

  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-auto flex items-center justify-center overflow-hidden"
      aria-hidden="true"
    >
      {/* Background Soft Scrim */}
      <div
        className={`absolute inset-0 bg-[#0E0D0B]/60 backdrop-blur-md transition-opacity duration-500 ${
          isCovering ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* The Billowing Netela Scarf Layer */}
      <div
        className={`absolute inset-0 flex flex-col justify-center items-center transition-transform ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isCovering
            ? 'translate-x-0 duration-700'
            : 'translate-x-full duration-650'
        }`}
        style={{
          transform: isCovering ? 'translateX(0%)' : 'translateX(105%)',
          transitionDuration: isCovering ? '650ms' : '600ms',
        }}
      >
        {/* The Translucent White Cotton Shemma Scarf Body */}
        <div className="relative w-[115vw] h-[85vh] -rotate-2 shadow-2xl rounded-3xl overflow-hidden bg-gradient-to-r from-[#FAF8F5]/98 via-[#FFFFFF]/95 to-[#F3EEE5]/95 border-y-4 border-[#B58A43]/50 flex flex-col justify-between p-6 sm:p-10">
          {/* Top Woven Gold Tilet Border on Scarf */}
          <div className="w-full flex flex-col gap-1">
            <div className="h-1.5 w-full bg-gradient-to-r from-[#B58A43] via-[#C49A50] to-[#DDC28D]" />
            <div className="h-4 w-full flex items-center justify-around opacity-80">
              {Array.from({ length: 30 }).map((_, i) => (
                <span key={i} className="w-2 h-2 rotate-45 border border-[#B58A43] bg-[#C49A50]" />
              ))}
            </div>
            <div className="h-1 w-full bg-[#B58A43]/60" />
          </div>

          {/* Scarf Delicate Center Texture & Poetic Caption */}
          <div className="flex-1 flex flex-col items-center justify-center text-center px-4 relative z-10">
            {/* Traditional Ethiopian Cross Medallion Embroidered on Scarf */}
            <div className="w-16 h-16 mb-4 rounded-full border border-[#B58A43]/40 flex items-center justify-center bg-white/60 shadow-sm animate-pulse">
              <svg viewBox="0 0 40 40" className="w-10 h-10 text-[#B58A43]" fill="currentColor">
                <circle cx="20" cy="8" r="2" />
                <polygon points="20,12 26,18 20,24 14,18" />
                <polygon points="20,24 28,32 12,32" />
              </svg>
            </div>

            <span className="font-serif italic text-3xl sm:text-4xl text-[#1A1713] tracking-wide">
              {language === 'am' ? 'በነጠላ ነፋስ...' : 'Woven with Heritage'}
            </span>
            <span className="font-serif text-lg sm:text-xl text-[#302B24] mt-1 font-light">
              {language === 'am' ? 'የተፈተለ ባህልና ውበት' : 'The Living Culture of Ethiopia'}
            </span>
            <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#B58A43] font-bold mt-2">
              {language === 'am' ? 'ጎብኚው • የኢትዮጵያ ባህላዊ ጉዞዎች' : 'The Tourist • Cultural Tours in Ethiopia'}
            </span>
          </div>

          {/* Bottom Woven Gold Tilet Hem Ribbon on Scarf */}
          <div className="w-full flex flex-col gap-1">
            <div className="h-1 w-full bg-[#B58A43]/60" />
            <div className="h-5 w-full flex items-center justify-around bg-gradient-to-r from-[#FAF8F5] via-[#EFE7D9] to-[#FAF8F5] border-y border-[#B58A43]/40">
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={i} className="flex items-center gap-0.5">
                  <span className="w-1.5 h-1.5 rotate-45 bg-[#B58A43]" />
                  <span className="w-1.5 h-1.5 rotate-45 bg-[#C49A50]" />
                </div>
              ))}
            </div>
            <div className="h-2 w-full bg-gradient-to-r from-[#B58A43] via-[#DDC28D] to-[#B58A43]" />
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * ── 2. ETHIOPIAN MESOB BASKET REVEAL CURTAIN ─────────────────────────────
 * Handcrafted Ethiopian woven Mesob basket in radiant warm ivory & gold:
 * Conical lid lifts up, unveiling the next page.
 */
function MesobCurtain({ state }) {
  const isCovering = state === 'covering'
  const { language } = useLanguage()

  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-auto flex items-center justify-center overflow-hidden"
      aria-hidden="true"
    >
      {/* Background Soft Radial Parchment & Gold Scrim */}
      <div
        className={`absolute inset-0 bg-[#FAF8F5] dark:bg-[#0E0D0B] transition-opacity duration-500 ${
          isCovering ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,_#B58A43_1px,_transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#B58A43] via-[#C49A50] to-[#DDC28D]" />
        <div className="absolute bottom-0 inset-x-0 h-2 bg-gradient-to-r from-[#DDC28D] via-[#C49A50] to-[#B58A43]" />
      </div>

      {/* Mesob Basket Centerpiece Animation */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center transition-all ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isCovering
            ? 'scale-100 translate-y-0 opacity-100 duration-600'
            : 'scale-90 -translate-y-12 opacity-0 duration-500'
        }`}
      >
        {/* Mesob Basket Art */}
        <div className="relative w-72 h-72 sm:w-84 sm:h-84 flex items-center justify-center">
          {/* Animated Tossed Conical Lid */}
          <div
            className={`absolute top-2 w-52 h-40 transition-transform ease-out duration-700 ${
              isCovering
                ? 'translate-y-0 rotate-0 scale-100'
                : '-translate-y-36 -rotate-12 scale-110 opacity-70'
            }`}
          >
            <svg viewBox="0 0 200 140" className="w-full h-full drop-shadow-xl">
              {/* Lid Knob (Crown) */}
              <circle cx="100" cy="18" r="9" fill="#C49A50" stroke="#B58A43" strokeWidth="2" />
              <rect x="97" y="24" width="6" height="12" rx="2" fill="#B58A43" />

              {/* Conical Lid Shell */}
              <path
                d="M 100 32 L 180 125 C 180 125, 100 138, 20 125 Z"
                fill="#FAF8F5"
                stroke="#B58A43"
                strokeWidth="2.5"
              />

              {/* Gold Chevron Woven Band */}
              <path
                d="M 75 58 L 100 70 L 125 58 L 140 82 L 100 98 L 60 82 Z"
                fill="#C49A50"
              />

              {/* Diamonds */}
              <polygon points="100,45 108,55 100,65 92,55" fill="#B58A43" />
              <polygon points="68,78 76,88 68,98 60,88" fill="#B58A43" />
              <polygon points="132,78 140,88 132,98 124,88" fill="#B58A43" />

              {/* Gold Base Rim of the Lid */}
              <path
                d="M 20 125 Q 100 142 180 125 Q 100 132 20 125"
                fill="#B58A43"
                stroke="#C49A50"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Mesob Basket Base */}
          <div className="absolute bottom-4 w-60 h-44">
            <svg viewBox="0 0 220 150" className="w-full h-full drop-shadow-xl">
              {/* Flared Pedestal Base */}
              <path
                d="M 30 15 Q 110 32 190 15 L 175 110 Q 110 130 45 110 Z"
                fill="#FFFFFF"
                stroke="#B58A43"
                strokeWidth="2.5"
              />

              {/* Lower Stand Footing */}
              <path
                d="M 50 110 Q 110 125 170 110 L 182 138 Q 110 148 38 138 Z"
                fill="#1A1713"
                stroke="#B58A43"
                strokeWidth="2"
              />

              {/* Intricate Geometric Woven Band */}
              <g fill="#B58A43">
                <polygon points="50,45 70,30 90,45 70,60" />
                <polygon points="90,45 110,30 130,45 110,60" />
                <polygon points="130,45 150,30 170,45 150,60" />
                <polygon points="70,65 90,50 110,65 90,80" fill="#C49A50" />
                <polygon points="110,65 130,50 150,65 130,80" fill="#C49A50" />
              </g>

              {/* Zigzag Weave Border */}
              <path
                d="M 40 85 L 50 95 L 60 85 L 70 95 L 80 85 L 90 95 L 100 85 L 110 95 L 120 85 L 130 95 L 140 85 L 150 95 L 160 85 L 170 95 L 180 85"
                fill="none"
                stroke="#B58A43"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Editorial Text Caption */}
        <div className="mt-4 text-center">
          <span className="block font-serif italic text-2xl sm:text-3xl text-[#1A1713] dark:text-[#F5F2EB] tracking-wide">
            {language === 'am' ? 'የመሶብ ማዕድ...' : 'The Sacred Table'}
          </span>
          <span className="block mt-1 font-sans text-[11px] uppercase tracking-[0.3em] text-[#B58A43] font-bold">
            {language === 'am' ? 'ጎብኚው • የኢትዮጵያ ባህላዊ ጉዞዎች' : 'The Tourist • Cultural Tours in Ethiopia'}
          </span>
        </div>
      </div>
    </div>
  )
}
