import { useState, useCallback, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

/* 
  Mesob Transition Hook
  ─────────────────────
  The Mesob is a traditional Ethiopian woven food basket with a conical lid.
  This hook creates a page-transition animation inspired by the Mesob lid 
  being lifted off — a circular pattern expands (like the lid being removed)
  revealing the new content underneath.
*/
export function useMesobTransition() {
  const [phase, setPhase] = useState('idle') // idle | expanding | lifting | done
  const navigate = useNavigate()
  const location = useLocation()

  const triggerTransition = useCallback((to) => {
    if (to === location.pathname) return
    
    setPhase('expanding')
    
    setTimeout(() => {
      navigate(to)
      window.scrollTo(0, 0)
      setPhase('lifting')
    }, 700)

    setTimeout(() => {
      setPhase('idle')
    }, 1400)
  }, [navigate, location.pathname])

  return { phase, triggerTransition }
}

/* Mesob Overlay Component */
export function MesobOverlay({ phase }) {
  if (phase === 'idle') return null

  return (
    <div className="mesob-overlay">
      <div className={`mesob-pattern ${phase}`} />
    </div>
  )
}
