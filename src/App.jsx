import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import ActivitySearchBar from './components/Activities/ActivitySearchBar'
import Hero from './components/Hero/Hero'
import Description from './components/Description/Description'
import Gallery from './components/Gallery/Gallery'
import Itinerary from './components/Itinerary/Itinerary'
import Activities from './components/Activities/Activities'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'
import BackToTop from './components/BackToTop/BackToTop'
import QuoteCalculator from './components/QuoteCalculator/QuoteCalculator'
import ContactModal from './components/ContactModal/ContactModal'

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  const closeSearch = () => {
    setIsSearchOpen(false)
    setSearchQuery('')
  }

  const handleToggleSearch = () => {
    if (isSearchOpen) {
      closeSearch()
    } else {
      setIsSearchOpen(true)
      document.getElementById('actividades')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div id="top">
      <Navbar onToggleSearch={handleToggleSearch} />

      <ActivitySearchBar
        isOpen={isSearchOpen}
        query={searchQuery}
        onQueryChange={setSearchQuery}
        onClose={closeSearch}
      />

      <Hero onOpenQuote={() => setIsQuoteOpen(true)} />

      <main>
        <Description />
        <hr />
        <Gallery />
        <hr />
        <Itinerary />
        <hr />
        <Activities searchQuery={searchQuery} />
        <hr />
        <Testimonials />
      </main>

      <Footer onOpenContact={() => setIsContactOpen(true)} />

      <BackToTop />

      <QuoteCalculator isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  )
}

export default App
