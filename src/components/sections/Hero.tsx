'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import CircleIcon from '@/components/ui/CircleIcon'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { useRef } from 'react'

export default function Hero() {
  const heroRef = useRef(null)
  const { scrollY } = useScroll()

  // Transformations basées sur le scroll (0 à 400px de scroll)
  // Taille du prénom : 36px -> 14px
  const firstNameSize = useTransform(scrollY, [0, 400], [36, 14])
  // Taille du nom : 72px -> 14px
  const lastNameSize = useTransform(scrollY, [0, 400], [72, 14])
  // Position Y : 0 -> scroll vers le haut
  const titleY = useTransform(scrollY, [0, 400], [0, -200])
  // Opacité du sous-titre
  const subtitleOpacity = useTransform(scrollY, [0, 200], [1, 0])

  // Fonctions de scroll vers les sections
  const handleDirectionClick = () => {
    const section = document.getElementById('direction-artistique')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleDevClick = () => {
    const section = document.getElementById('developpement-web')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section ref={heroRef} className="relative flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Bouton Dark Mode - Position fixe centrée en haut */}
      <motion.div
        style={{ opacity: useTransform(scrollY, [0, 200], [1, 0]) }}
        className="fixed left-1/2 top-4 z-50 -translate-x-1/2 sm:top-6 lg:top-8"
      >
        <ThemeToggle />
      </motion.div>

      {/* Contenu centré avec padding-top pour éviter le ThemeToggle */}
      <div className="flex flex-col items-center space-y-12 pt-24 text-center sm:space-y-16 sm:pt-0 lg:space-y-24">
        {/* Nom principal - animation progressive avec le scroll */}
        <div className="space-y-3">
          <motion.h1
            style={{ y: titleY }}
            className="flex flex-col items-center font-bold uppercase leading-none tracking-tight"
          >
            {/* Prénom - Taille qui rétrécit avec le scroll */}
            <motion.span style={{ fontSize: firstNameSize }}>Thomas</motion.span>
            {/* Nom - Taille qui rétrécit avec le scroll */}
            <motion.span style={{ fontSize: lastNameSize }}>Giberné</motion.span>
          </motion.h1>
          <motion.p
            style={{ opacity: subtitleOpacity }}
            className="font-mono text-base font-light text-muted sm:text-lg lg:text-xl"
          >
            Développeur & Designer
          </motion.p>
        </div>

        {/* 3 Cercles graphiques animés avec fade in progressif */}
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-8 lg:gap-18">
          <CircleIcon label="Identité Visuelle" variant="triple" onClick={handleDirectionClick} />
          <CircleIcon label="Développement Web" variant="double" onClick={handleDevClick} />
          <CircleIcon label="Expérience immersive" variant="full" onClick={handleDevClick} />
        </div>
      </div>
    </section>
  )
}
