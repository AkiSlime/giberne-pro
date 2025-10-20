'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { useModal } from '@/contexts/ModalContext'

export default function Header() {
  const { scrollY } = useScroll()
  const { theme } = useTheme()
  const { isModalOpen } = useModal()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Le header apparaît progressivement entre 300px et 400px de scroll
  const headerOpacity = useTransform(scrollY, [300, 400], [0, 1])
  const headerY = useTransform(scrollY, [300, 400], [-100, 0])

  // Cacher le header quand la modale est ouverte
  if (isModalOpen) {
    return null
  }

  return (
    <motion.header
      style={{
        opacity: headerOpacity,
        y: headerY,
      }}
      className="pointer-events-none fixed left-0 right-0 top-0 z-50"
    >
      {/* Gradient background qui part du top - même couleur que le bg de la page */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 sm:h-28 lg:h-32"
        style={{
          background: mounted && theme === 'dark'
            ? 'linear-gradient(to bottom, #020612 0%, rgba(2, 6, 18, 0.99) 50%, rgba(2, 6, 18, 0) 100%)'
            : 'linear-gradient(to bottom, #f0eeea 0%, rgba(240, 238, 234, 0.99) 50%, rgba(240, 238, 234, 0) 100%)'
        }}
      />

      <div className="relative mx-auto flex max-w-7xl items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
        {/* Titre centré - plus petit sur mobile */}
        <h1 className="pointer-events-auto flex items-center gap-2 font-bold uppercase leading-none tracking-tight text-xs sm:text-sm">
          <span>Thomas</span>
          <span>Giberné</span>
        </h1>

        {/* ThemeToggle à droite en position absolue */}
        <div className="pointer-events-auto absolute right-4 sm:right-6 lg:right-8">
          <ThemeToggle inHeader={true} />
        </div>
      </div>
    </motion.header>
  )
}
