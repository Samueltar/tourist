import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { MesobProvider } from './components/MesobTransition'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WishlistDrawer from './components/WishlistDrawer'
import TourModal from './components/TourModal'
import { tours } from './data/tours'

// Pages
import Home from './pages/Home'
import Tours from './pages/Tours'
import TourDetail from './pages/TourDetail'
import Destinations from './pages/Destinations'
import DestinationDetail from './pages/DestinationDetail'
import About from './pages/About'
import Journal from './pages/Journal'
import JournalDetail from './pages/JournalDetail'
import Faqs from './pages/Faqs'
import Contact from './pages/Contact'
import Book from './pages/Book'

export default function App() {
  // Wishlist / Saved journeys state with localStorage persistence
  const [savedTourIds, setSavedTourIds] = useState(() => {
    try {
      const stored = localStorage.getItem('ancient_path_saved_tours')
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  // Wishlist Drawer open state
  const [wishlistOpen, setWishlistOpen] = useState(false)

  // Tour Quick Preview Modal state
  const [modalTour, setModalTour] = useState(null)

  // Sync saved tours to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ancient_path_saved_tours', JSON.stringify(savedTourIds))
    } catch (e) {
      console.warn('Could not save to localStorage', e)
    }
  }, [savedTourIds])

  const handleToggleSaveTour = (tourId) => {
    setSavedTourIds((prev) =>
      prev.includes(tourId) ? prev.filter((id) => id !== tourId) : [...prev, tourId]
    )
  }

  const handleRemoveFromWishlist = (tourId) => {
    setSavedTourIds((prev) => prev.filter((id) => id !== tourId))
  }

  const savedToursList = tours.filter((t) => savedTourIds.includes(t.id))

  return (
    <Router>
      <MesobProvider>
        <div className="flex flex-col min-h-screen bg-[#F5F0E6] text-[#202622] font-sans antialiased selection:bg-[#B86B48] selection:text-white">
          {/* Header Navigation with Mesob Page Transition support */}
          <Navbar
            savedCount={savedTourIds.length}
            onOpenWishlist={() => setWishlistOpen(true)}
          />

          {/* Main Route Content */}
          <main className="flex-1">
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    savedTourIds={savedTourIds}
                    onToggleSaveTour={handleToggleSaveTour}
                    onSelectTourModal={(tour) => setModalTour(tour)}
                  />
                }
              />
              <Route
                path="/tours"
                element={
                  <Tours
                    savedTourIds={savedTourIds}
                    onToggleSaveTour={handleToggleSaveTour}
                    onSelectTourModal={(tour) => setModalTour(tour)}
                  />
                }
              />
              <Route
                path="/tours/:id"
                element={
                  <TourDetail
                    savedTourIds={savedTourIds}
                    onToggleSaveTour={handleToggleSaveTour}
                    onSelectTourModal={(tour) => setModalTour(tour)}
                  />
                }
              />
              <Route path="/destinations" element={<Destinations />} />
              <Route
                path="/destinations/:id"
                element={
                  <DestinationDetail
                    savedTourIds={savedTourIds}
                    onToggleSaveTour={handleToggleSaveTour}
                    onSelectTourModal={(tour) => setModalTour(tour)}
                  />
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/journal/:slug" element={<JournalDetail />} />
              <Route path="/faqs" element={<Faqs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/book" element={<Book />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          {/* Editorial Footer */}
          <Footer />

          {/* Wishlist Drawer */}
          <WishlistDrawer
            isOpen={wishlistOpen}
            onClose={() => setWishlistOpen(false)}
            savedTours={savedToursList}
            onRemoveTour={handleRemoveFromWishlist}
            onOpenTourModal={(tour) => {
              setWishlistOpen(false)
              setModalTour(tour)
            }}
          />

          {/* Tour Quick Preview Modal */}
          <TourModal
            tour={modalTour}
            isOpen={!!modalTour}
            onClose={() => setModalTour(null)}
            isSaved={modalTour ? savedTourIds.includes(modalTour.id) : false}
            onToggleSave={handleToggleSaveTour}
          />
        </div>
      </MesobProvider>
    </Router>
  )
}
