import React, { createContext, useContext, useState, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const MesobTransitionContext = createContext({
  navigateWithMesob: () => {},
  isTransitioning: false,
})

export const useMesob = () => useContext(MesobTransitionContext)

export function MesobProvider({ children }) {
  const [transitionState, setTransitionState] = useState('idle') // 'idle' | 'covering' | 'uncovering'
  const [targetDestination, setTargetDestination] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const navigateWithMesob = useCallback(
    (to) => {
      if (to === location.pathname || transitionState !== 'idle') return

      setTargetDestination(to)
      setTransitionState('covering')

      // Halfway: change the route and scroll to top
      setTimeout(() => {
        navigate(to)
        window.scrollTo({ top: 0, behavior: 'instant' })
        setTransitionState('uncovering')
      }, 750)

      // Complete transition
      setTimeout(() => {
        setTransitionState('idle')
        setTargetDestination('')
      }, 1450)
    },
    [navigate, location.pathname, transitionState]
  )

  return (
    <MesobTransitionContext.Provider
      value={{ navigateWithMesob, isTransitioning: transitionState !== 'idle' }}
    >
      {children}
      <MesobCurtain state={transitionState} />
    </MesobTransitionContext.Provider>
  )
}

/*
  Ethiopian Mesob Animated Curtain
  ───────────────────────────────
  Features an authentic handcrafted Ethiopian Mesob basket:
  - Intricate woven chevron & diamond patterns (Tibeb motifs)
  - Conical lid with woven crown knob
  - Dynamic toss & lid-reveal transition
*/
function MesobCurtain({ state }) {
  if (state === 'idle') return null

  const isCovering = state === 'covering'

  return (
    <div
      className={`fixed inset-0 z-[9999] pointer-events-auto flex items-center justify-center overflow-hidden transition-opacity duration-300 ${
        state === 'idle' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      {/* Background radial parchment & forest green veil */}
      <div
        className={`absolute inset-0 bg-[#173D32] transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isCovering ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
        }`}
        style={{
          transitionDuration: isCovering ? '650ms' : '600ms',
        }}
      >
        {/* Subtle decorative concentric Ethiopian woven straw rings */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#C3A16A_1px,_transparent_1px)] bg-[size:28px_28px]" />
        
        {/* Decorative corner woven bands */}
        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#B86B48] via-[#C3A16A] to-[#173D32]" />
        <div className="absolute bottom-0 inset-x-0 h-2 bg-gradient-to-r from-[#173D32] via-[#C3A16A] to-[#B86B48]" />
      </div>

      {/* Mesob Basket Centerpiece Animation */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center transition-all ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isCovering
            ? 'scale-100 translate-y-0 opacity-100 duration-600'
            : 'scale-90 -translate-y-12 opacity-0 duration-500'
        }`}
      >
        {/* The Mesob SVG Artwork */}
        <div className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center">
          {/* Animated tossed Mesob Lid */}
          <div
            className={`absolute top-2 w-52 h-40 transition-transform ease-out duration-700 ${
              isCovering
                ? 'translate-y-0 rotate-0 scale-100'
                : '-translate-y-32 -rotate-12 scale-110 opacity-70'
            }`}
          >
            <svg viewBox="0 0 200 140" className="w-full h-full drop-shadow-2xl">
              {/* Lid Knob (Crown) */}
              <circle cx="100" cy="18" r="9" fill="#C3A16A" stroke="#284D3C" strokeWidth="2" />
              <rect x="97" y="24" width="6" height="12" rx="2" fill="#B86B48" />

              {/* Conical Lid Shell */}
              <path
                d="M 100 32 L 180 125 C 180 125, 100 138, 20 125 Z"
                fill="#E9E0D1"
                stroke="#202622"
                strokeWidth="2.5"
              />

              {/* Terracotta Chevron Band */}
              <path
                d="M 75 58 L 100 70 L 125 58 L 140 82 L 100 98 L 60 82 Z"
                fill="#B86B48"
              />

              {/* Brass Diamond Motifs */}
              <polygon points="100,45 108,55 100,65 92,55" fill="#C3A16A" />
              <polygon points="68,78 76,88 68,98 60,88" fill="#C3A16A" />
              <polygon points="132,78 140,88 132,98 124,88" fill="#C3A16A" />

              {/* Forest Green Base Rim of the Lid */}
              <path
                d="M 20 125 Q 100 142 180 125 Q 100 132 20 125"
                fill="#173D32"
                stroke="#C3A16A"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Mesob Basket Base */}
          <div className="absolute bottom-4 w-60 h-44">
            <svg viewBox="0 0 220 150" className="w-full h-full drop-shadow-2xl">
              {/* Flared Pedestal Base */}
              <path
                d="M 30 15 Q 110 32 190 15 L 175 110 Q 110 130 45 110 Z"
                fill="#F5F0E6"
                stroke="#202622"
                strokeWidth="2.5"
              />

              {/* Lower Stand Footing */}
              <path
                d="M 50 110 Q 110 125 170 110 L 182 138 Q 110 148 38 138 Z"
                fill="#173D32"
                stroke="#C3A16A"
                strokeWidth="2"
              />

              {/* Intricate Geometric Woven Band (Middle) */}
              <g fill="#B86B48">
                <polygon points="50,45 70,30 90,45 70,60" />
                <polygon points="90,45 110,30 130,45 110,60" />
                <polygon points="130,45 150,30 170,45 150,60" />
                <polygon points="70,65 90,50 110,65 90,80" fill="#C3A16A" />
                <polygon points="110,65 130,50 150,65 130,80" fill="#C3A16A" />
              </g>

              {/* Traditional Zigzag Weave Border */}
              <path
                d="M 40 85 L 50 95 L 60 85 L 70 95 L 80 85 L 90 95 L 100 85 L 110 95 L 120 85 L 130 95 L 140 85 L 150 95 L 160 85 L 170 95 L 180 85"
                fill="none"
                stroke="#173D32"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Editorial Text Caption during transition */}
        <div className="mt-4 text-center">
          <span className="block font-serif italic text-2xl sm:text-3xl text-[#E9E0D1] tracking-wide">
            Uncovering Ethiopia
          </span>
          <span className="block mt-1 font-sans text-[11px] uppercase tracking-[0.3em] text-[#C3A16A] font-semibold">
            Ancient Path • Beyond the Expected
          </span>
        </div>
      </div>
    </div>
  )
}
