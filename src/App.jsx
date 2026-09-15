import Navbar from './components/Navbar'
import Footer from './components/Footer'

import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import ProjectsSection from './sections/ProjectsSection'
import ContactSection from './sections/ContactSection'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}

export default App

