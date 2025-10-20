'use client'

import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import VisionSection from '@/components/sections/VisionSection'
import DeveloppementSection from '@/components/sections/DeveloppementSection'
import DirectionSection from '@/components/sections/DirectionSection'
import EchangeSection from '@/components/sections/EchangeSection'
import PhilosophieSection from '@/components/sections/PhilosophieSection'
import ProjetsSection from '@/components/sections/ProjetsSection'
import Footer from '@/components/sections/Footer'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Home() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && (theme === 'dark' || resolvedTheme === 'dark')

  return (
    <div className="relative min-h-screen">
      {/* Gradient Light - toujours présent */}
      <div className="fixed inset-0 bg-gradient-light" />

      {/* Gradient Dark - fade in/out selon le thème */}
      <div
        className="fixed inset-0 bg-gradient-dark"
        style={{
          opacity: isDark ? 1 : 0,
          transition: 'opacity 800ms ease-in-out'
        }}
      />

      {/* Header sticky animé */}
      <Header />

      {/* Contenu par-dessus avec marges globales */}
      <div className="relative z-10 px-2 sm:px-4 lg:px-12">
        <Hero />
        <VisionSection />
        <DeveloppementSection />
        <DirectionSection />
        <EchangeSection />
        <PhilosophieSection />
        <ProjetsSection />
        <Footer />
      </div>
    </div>
  )
}
