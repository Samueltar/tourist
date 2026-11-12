import React from 'react'

/**
 * Authentic Ethiopian Decorative Elements
 * Inspired by traditional Tibeb woven patterns and Lalibela rock carvings
 */
export function EthiopianDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 py-6 ${className}`} aria-hidden="true">
      <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-[#C3A16A]/60" />
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#C3A16A]">
        {/* Ethiopian Cross / Diamond Motif */}
        <polygon points="12,2 14.5,9.5 22,12 14.5,14.5 12,22 9.5,14.5 2,12 9.5,9.5" fill="currentColor" fillOpacity="0.8" />
        <circle cx="12" cy="12" r="2.5" fill="#173D32" />
      </svg>
      <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-[#C3A16A]/60" />
    </div>
  )
}

export function EthiopianBorderBand({ className = '' }) {
  return (
    <div className={`w-full overflow-hidden h-2.5 flex items-center ${className}`} aria-hidden="true">
      <div className="w-full h-full ethiopian-border opacity-70" />
    </div>
  )
}

export function EthiopianDiamondIcon({ className = 'w-4 h-4 text-[#C3A16A]' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <polygon points="12,2 22,12 12,22 2,12" />
      <polygon points="12,6 18,12 12,18 6,12" fill="#F5F0E6" />
    </svg>
  )
}
