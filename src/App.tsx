
import Header from './components/header'
import ScrollReveal from './ui/ScrollReveal'
import { HeroSection } from './components/HeroSection'
import { ValueBanner } from './components/ValueBanner'
import { FeatureCards } from './components/FeatureCards'
import { AIFeaturesGrid } from './components/AIFeaturesGrid'
import { PricingSection } from './components/PricingSection'
import { AIStudySection } from './components/AIStudySection'
import { MentorsSection } from './components/MentorsSection'
import { CTASection } from './components/CTASection'
import { Footer } from './components/Footer'


function App() {
  return (
    <>
      <div className='relative'>
        <Header />
        <HeroSection />
        <ValueBanner />
        <FeatureCards />
        <AIFeaturesGrid />
        <PricingSection />
        <AIStudySection />
        <MentorsSection />
        <CTASection />
        <Footer />
      </div>
    </>
  )
}

export default App
