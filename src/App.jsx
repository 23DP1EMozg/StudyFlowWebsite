import './App.css'
import { DownloadSection } from './components/Download'
import { Footer } from './components/Footer'
import { GuideSection } from './components/Guide'
import { Header } from './components/Header'
import { HeroSection } from './components/Hero'
import { InformationSection } from './components/Information'

function App() {
    
  return (
    <>
      <Header/>
      <HeroSection/>
      <InformationSection/>
      <DownloadSection/>
      <GuideSection/>
      <Footer/>
    </>
  )
}

export default App
