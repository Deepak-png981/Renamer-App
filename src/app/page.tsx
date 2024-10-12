'use client'

import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import DownloadSection from '@/components/DownloadSection'
import Footer from '@/components/Footer'

export default function Home() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  // Start animations when section comes into view
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        
        {/* Ref is passed to the FeaturesSection to trigger animation */}
        <section ref={ref}>
          <FeaturesSection controls={controls} fadeInUp={fadeInUp} />
        </section>

        <HowItWorksSection controls={controls} fadeInUp={fadeInUp} />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  )
}
