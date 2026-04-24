
import Header from './components/header'
import { HeroSection } from './components/HeroSection'
import { ValueBanner } from './components/ValueBanner'
import { FeatureCards } from './components/FeatureCards'
import { AIFeaturesGrid } from './components/AIFeaturesGrid'
import { PricingSection } from './components/PricingSection'
import { StudyExamModeSection } from './components/StudyExamModeSection'
import { PersonalGroupStudySection } from './components/PersonalGroupStudySection'
import { SmartStudyPlannerSection } from './components/SmartStudyPlannerSection'
import { ContentCredibilitySection } from './components/ContentCredibilitySection'
import { BenefitsStripSection } from './components/BenefitsStripSection'
import { WhoCanUseSection } from './components/WhoCanUseSection'
import { AIStudySection } from './components/AIStudySection'
import { MentorsSection } from './components/MentorsSection'
import { CTASection } from './components/CTASection'
import { FAQSection } from './components/FAQSection'
import { TermsConditionsPage } from './components/TermsConditionsPage'
import { RefundPolicyPage } from './components/RefundPolicyPage'
import { CookiePolicyPage } from './components/CookiePolicyPage'
import { CopyrightPolicyPage } from './components/CopyrightPolicyPage'
import { DisclaimerPolicyPage } from './components/DisclaimerPolicyPage'
import { PolicyHeader } from './components/PolicyHeader'
import { Footer } from './components/Footer'
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react'


function App() {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";
  const isTermsPage = pathname === "/terms-and-conditions-zyura-e";
  const isRefundPage = pathname === "/refund-policy-zyura-edu";
  const isCookiePage = pathname === "/cookie-policy-zyura-e";
  const isCopyrightPage = pathname === "/copyright-policy-zyura-e";
  const isDisclaimerPage = pathname === "/disclaimer-policy-zyura-e";

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 40,
      easing: "ease-out-cubic",
    });
  }, []);

  if (isTermsPage) {
    return (
      <div className='relative'>
        <PolicyHeader />
        <TermsConditionsPage />
        <Footer />
      </div>
    )
  }

  if (isRefundPage) {
    return (
      <div className='relative'>
        <PolicyHeader />
        <RefundPolicyPage />
        <Footer />
      </div>
    )
  }

  if (isCookiePage) {
    return (
      <div className='relative'>
        <PolicyHeader />
        <CookiePolicyPage />
        <Footer />
      </div>
    )
  }

  if (isCopyrightPage) {
    return (
      <div className='relative'>
        <PolicyHeader />
        <CopyrightPolicyPage />
        <Footer />
      </div>
    )
  }

  if (isDisclaimerPage) {
    return (
      <div className='relative'>
        <PolicyHeader />
        <DisclaimerPolicyPage />
        <Footer />
      </div>
    )
  }

  return (
    <>
      <div className='relative overflow-hidden'>
        <Header />
        <HeroSection />
        <ValueBanner />
        <FeatureCards />
        <AIFeaturesGrid />
        
        <StudyExamModeSection />
        <ContentCredibilitySection />
        <PersonalGroupStudySection />
        
        <SmartStudyPlannerSection />
        <BenefitsStripSection />
        <PricingSection />
        
        <AIStudySection />
        <WhoCanUseSection />
        <MentorsSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </div>
    </>
  )
}

export default App
