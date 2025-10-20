'use client'

import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useState, useRef } from 'react'
import { X } from 'lucide-react'

interface ServiceCardModalProps {
  title: string
  description: string
  details: string
  index?: number
}

export default function ServiceCardModal({
  title,
  description,
  details,
  index = 0,
}: ServiceCardModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: false, margin: '-100px' })

  const baseStyles =
    'group relative w-full cursor-pointer overflow-hidden rounded-xl border border-black/10 bg-white/60 px-4 py-3 text-left text-black shadow-lg backdrop-blur-md transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:border-black/20 dark:border-white/10 dark:bg-black/40 dark:text-white dark:shadow-[0_8px_32px_rgba(255,255,255,0.1)] dark:hover:border-white/20 dark:hover:shadow-[0_8px_48px_rgba(255,255,255,0.15)] sm:px-5 sm:py-4'

  return (
    <>
      {/* Card cliquable avec animation au scroll */}
      <motion.div
        ref={cardRef}
        onClick={() => setIsOpen(true)}
        className={baseStyles}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{
          duration: 1.2,
          delay: index * 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{
          y: -8,
          transition: { duration: 0.3, ease: 'easeOut' }
        }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Effet de lumière au hover */}
        <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-white/20 via-transparent to-transparent dark:from-white/10" />

        {/* Titre */}
        <h3 className="relative mb-3 text-base font-semibold sm:text-lg">{title}</h3>

        {/* Description courte */}
        <p className="relative text-base font-light leading-relaxed opacity-80">
          {description}
        </p>

        {/* Indicateur "Cliquer pour en savoir plus" */}
        <div className="relative mt-4 flex items-center gap-2 text-xs font-mono uppercase tracking-wider opacity-60 transition-all group-hover:opacity-100">
          <span>En savoir plus</span>
          <span className="transition-transform group-hover:translate-x-2">→</span>
        </div>
      </motion.div>

      {/* Modale */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop avec blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md"
            />

            {/* Contenu de la modale */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="fixed left-1/2 top-1/2 z-50 w-[90%] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl dark:border-white/10 dark:bg-black/95 dark:shadow-[0_20px_80px_rgba(255,255,255,0.1)] sm:p-12"
            >
              {/* Effet de lumière subtil */}
              <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-b from-black/5 to-transparent blur-3xl dark:from-white/5" />
              {/* Bouton fermer */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 rounded-full p-2 transition-colors hover:bg-black/10 dark:hover:bg-white/10"
                aria-label="Fermer"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Contenu */}
              <div className="relative space-y-6">
                {/* Titre */}
                <h2 className="pr-12 text-2xl font-semibold sm:text-3xl">{title}</h2>

                {/* Description courte */}
                <p className="text-base font-normal text-muted">{description}</p>

                {/* Séparateur avec dégradé */}
                <div className="h-px bg-gradient-to-r from-transparent via-black/20 to-transparent dark:via-white/20" />

                {/* Détails complets */}
                <div className="space-y-4">
                  <h3 className="text-base font-semibold sm:text-lg">Description complète</h3>
                  <p className="text-base font-light leading-relaxed">{details}</p>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full rounded-2xl border border-black/20 bg-gradient-to-br from-black to-black/90 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl dark:border-white/20 dark:from-white dark:to-white/90 dark:text-black sm:w-auto"
                  >
                    Compris
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
