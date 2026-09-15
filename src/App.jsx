import Navbar from './components/Navbar'
import Footer from './components/Footer'

import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ServicesSection from './sections/ServicesSection'
import SkillsSection from './sections/SkillsSection'
import JourneySection from './sections/JourneySection'
import ContactSection from './sections/ContactSection'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <JourneySection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}

export default App

