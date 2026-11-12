import React from 'react'

/**
 * ETHIOPIAN TILET (ጥለት) ORNAMENTAL DESIGN SYSTEM
 * Authentic geometric patterns inspired by Ethiopian traditional woven borders (Tibeb/Tilet).
 *
 * Pattern Family:
 * - Heritage Gold: #B58A43
 * - Ornamental Gold: #C49A50
 * - Light Gold: #DDC28D
 * - Warm Ivory: #F8F5EE
 * - Charcoal: #302B24
 */

/* ── 1. PATTERN A: PRIMARY TILET BORDER ──────────────────────────────────
   Prominent repeating gold geometric textile band used at top header,
   section boundaries, hero frame, and footer top.
*/
export function TiletBorderPrimary({ className = '', height = 24, variant = 'gold' }) {
  const isDark = variant === 'dark'
  const primaryGold = isDark ? '#DDC28D' : '#B58A43'
  const accentGold = isDark ? '#F8F5EE' : '#C49A50'
  const lightGold = isDark ? '#C49A50' : '#EFE7D9'

  return (
    <div
      className={`w-full overflow-hidden flex items-center select-none ${className}`}
      style={{ height: `${height}px` }}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="repeat-x"
        viewBox="0 0 120 24"
      >
        <defs>
          <pattern
            id={`tilet-primary-${variant}`}
            width="60"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            {/* Top & Bottom Thin Woven Braids */}
            <line x1="0" y1="1" x2="60" y2="1" stroke={primaryGold} strokeWidth="1" />
            <line x1="0" y1="3" x2="60" y2="3" stroke={accentGold} strokeWidth="0.75" strokeDasharray="2 2" />
            <line x1="0" y1="21" x2="60" y2="21" stroke={accentGold} strokeWidth="0.75" strokeDasharray="2 2" />
            <line x1="0" y1="23" x2="60" y2="23" stroke={primaryGold} strokeWidth="1" />

            {/* Central Stepped Ethiopian Diamond (መሰረታዊ የጥለት ቅርጽ) */}
            <polygon
              points="30,4 38,12 30,20 22,12"
              fill="none"
              stroke={primaryGold}
              strokeWidth="1.2"
            />
            {/* Inner Concentric Diamond */}
            <polygon
              points="30,7 35,12 30,17 25,12"
              fill={lightGold}
              fillOpacity="0.4"
              stroke={accentGold}
              strokeWidth="0.8"
            />
            {/* Core Center Cross / Diamond Point */}
            <rect
              x="28.5"
              y="10.5"
              width="3"
              height="3"
              transform="rotate(45 30 12)"
              fill={primaryGold}
            />

            {/* Flanking Chevron Ribbons (የጥለት አክናፍ) */}
            <path
              d="M 12 12 L 18 6 L 20 6 L 14 12 L 20 18 L 18 18 Z"
              fill={primaryGold}
            />
            <path
              d="M 48 12 L 42 6 L 40 6 L 46 12 L 40 18 L 42 18 Z"
              fill={primaryGold}
            />

            {/* Connecting Side Nodes */}
            <circle cx="0" cy="12" r="1.5" fill={primaryGold} />
            <polygon points="0,9 3,12 0,15 -3,12" fill={accentGold} />
            <circle cx="60" cy="12" r="1.5" fill={primaryGold} />
            <polygon points="60,9 63,12 60,15 57,12" fill={accentGold} />

            {/* Micro Stepped Pyramid Accents (Top/Bottom) */}
            <polygon points="30,3 32,5 28,5" fill={accentGold} />
            <polygon points="30,21 32,19 28,19" fill={accentGold} />
          </pattern>
        </defs>
        <rect width="100%" height="24" fill={`url(#tilet-primary-${variant})`} />
      </svg>
    </div>
  )
}

/* ── 2. PATTERN B: GEOMETRIC TILET MOTIF (ጥለት ማህተም) ─────────────────────
   Repeatable motif used in hero corners, featured card frames,
   and subtle watermark backgrounds.
*/
export function TiletMotif({ className = '', color = '#B58A43', secondaryColor = '#C49A50', size = 36 }) {
  return (
    <svg
      width={size}
      height={size}
      style={{ width: `${size}px`, height: `${size}px`, maxWidth: `${size}px`, maxHeight: `${size}px` }}
      viewBox="0 0 60 60"
      fill="none"
      className={`select-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Stepped Diamond */}
      <polygon
        points="30,2 58,30 30,58 2,30"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Intermediate Stepped Border */}
      <polygon
        points="30,8 52,30 30,52 8,30"
        stroke={secondaryColor}
        strokeWidth="1"
        strokeDasharray="3 2"
      />
      {/* Central Solid Diamond */}
      <polygon
        points="30,15 45,30 30,45 15,30"
        fill="currentColor"
        fillOpacity="0.12"
        stroke={color}
        strokeWidth="1.2"
      />

      {/* Traditional 8-Pointed Ethiopian Cross Accent */}
      <polygon points="30,19 33,27 41,30 33,33 30,41 27,33 19,30 27,27" fill={color} />
      <circle cx="30" cy="30" r="2.5" fill="#FFFFFF" />

      {/* Four Stepped Corner Pyramids */}
      <polygon points="30,2 33,6 27,6" fill={color} />
      <polygon points="58,30 54,33 54,27" fill={color} />
      <polygon points="30,58 33,54 27,54" fill={color} />
      <polygon points="2,30 6,33 6,27" fill={color} />
    </svg>
  )
}

/* ── 3. PATTERN C: FINE TILET DIVIDER ────────────────────────────────────
   Delicate repeating ornamental line separating sections,
   stories, and major content areas.
*/
export function TiletDivider({ className = '', variant = 'gold' }) {
  const gold = variant === 'dark' ? '#DDC28D' : '#B58A43'
  const light = variant === 'dark' ? '#C49A50' : '#EFE7D9'

  return (
    <div className={`flex items-center justify-center gap-3 py-6 select-none ${className}`} aria-hidden="true">
      {/* Left fine gradient line with dashed tilet rhythm */}
      <div className="h-[1px] flex-1 max-w-32 sm:max-w-48 bg-gradient-to-r from-transparent via-[#C49A50]/40 to-[#B58A43]" />

      {/* Central Ethiopian Tilet Geometric Emblem */}
      <div className="flex items-center gap-1.5 px-1">
        {/* Flanking mini diamonds */}
        <span className="w-1.5 h-1.5 rotate-45 border border-[#B58A43] bg-transparent" />
        <span className="w-2 h-2 rotate-45 bg-[#C49A50]" />

        {/* Core Ethiopian Tilet Cross / Medallion */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <polygon points="12,2 22,12 12,22 2,12" stroke={gold} strokeWidth="1.5" />
          <polygon points="12,6 18,12 12,18 6,12" fill={light} stroke={gold} strokeWidth="0.8" />
          <circle cx="12" cy="12" r="2" fill={gold} />
        </svg>

        {/* Flanking mini diamonds */}
        <span className="w-2 h-2 rotate-45 bg-[#C49A50]" />
        <span className="w-1.5 h-1.5 rotate-45 border border-[#B58A43] bg-transparent" />
      </div>

      {/* Right fine gradient line */}
      <div className="h-[1px] flex-1 max-w-32 sm:max-w-48 bg-gradient-to-l from-transparent via-[#C49A50]/40 to-[#B58A43]" />
    </div>
  )
}

/* ── 4. TILET CORNER ORNAMENT (የጥለት ማዕዘን) ─────────────────────────────
   90-degree decorative corner ornament used on featured destination cards,
   editorial hero frames, and quote boxes.
*/
export function TiletCorner({ className = '', position = 'top-left', size = 32 }) {
  const rotationMap = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  }

  const posMap = {
    'top-left': 'top-2.5 left-2.5',
    'top-right': 'top-2.5 right-2.5',
    'bottom-right': 'bottom-2.5 right-2.5',
    'bottom-left': 'bottom-2.5 left-2.5',
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      style={{ width: `${size}px`, height: `${size}px`, maxWidth: `${size}px`, maxHeight: `${size}px` }}
      className={`absolute ${posMap[position] || 'top-2.5 left-2.5'} pointer-events-none select-none ${rotationMap[position]} text-[#B58A43] ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* L-shaped dual stepped corner borders */}
      <path d="M 2 38 L 2 2 L 38 2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M 6 34 L 6 6 L 34 6" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.7" />

      {/* Corner Stepped Rosette */}
      <polygon points="12,6 18,12 12,18 6,12" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
      <rect x="10.5" y="10.5" width="3" height="3" fill="currentColor" />

      {/* Terminal Accents */}
      <circle cx="2" cy="38" r="1.5" fill="currentColor" />
      <circle cx="38" cy="2" r="1.5" fill="currentColor" />
    </svg>
  )
}

/* ── 5. TILET BACKGROUND MESH (የጥለት ጀርባ) ──────────────────────────────
   Subtle, elegant low-opacity vector geometric grid for warm ivory backgrounds.
*/
export function TiletBackgroundPattern({ className = 'opacity-[0.035]' }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none ${className}`}
      aria-hidden="true"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23B58A43' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M40 0L80 40L40 80L0 40zM40 10L70 40L40 70L10 40z' fill='none' stroke='%23B58A43' stroke-width='1'/%3E%3Ccircle cx='40' cy='40' r='2' fill='%23B58A43'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '40px 40px',
      }}
    />
  )
}
