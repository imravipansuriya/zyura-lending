
import Header from './components/header'
import { HeroSection } from './components/HeroSection'
import { ValueBanner } from './components/ValueBanner'
import { FeatureCards } from './components/FeatureCards'
import { AIFeaturesGrid } from './components/AIFeaturesGrid'
import { PricingSection } from './components/PricingSection'
import { StudyExamModeSection } from './components/StudyExamModeSection'
import { PersonalGroupStudySection } from './components/PersonalGroupStudySection'
import { AIStudySection } from './components/AIStudySection'
import { MentorsSection } from './components/MentorsSection'
import { CTASection } from './components/CTASection'
import { Footer } from './components/Footer'
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react'


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <div className='relative'>
        <Header />
        <HeroSection />
        <ValueBanner />
        <FeatureCards />
        <AIFeaturesGrid />
        <PricingSection />
        <StudyExamModeSection />
        <PersonalGroupStudySection />
        <AIStudySection />
        <MentorsSection />
        <CTASection />
        <Footer />
      </div>
    </>
  )
}

export default App
