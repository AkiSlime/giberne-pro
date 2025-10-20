'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { useModal } from '@/contexts/ModalContext'

interface ProjectSection {
  title: string
  content: string
}

interface Project {
  image: string
  tag: string
  type: string
  sections: ProjectSection[]
  link?: string
}

interface ProjectCardModalProps {
  project: Project
  allProjects: Project[]
  index: number
}

export default function ProjectCardModal({ project, allProjects, index }: ProjectCardModalProps) {
  const { setIsModalOpen } = useModal()
  const [isOpen, setIsOpen] = useState(false)
  const [currentProjectIndex, setCurrentProjectIndex] = useState(index)
  const [direction, setDirection] = useState(0)

  const currentProject = allProjects[currentProjectIndex]

  // Synchroniser l'état local avec le contexte global
  useEffect(() => {
    setIsModalOpen(isOpen)
  }, [isOpen, setIsModalOpen])

  const goToNext = () => {
    setDirection(1)
    setCurrentProjectIndex((prev) => (prev + 1) % allProjects.length)
  }

  const goToPrevious = () => {
    setDirection(-1)
    setCurrentProjectIndex((prev) => (prev - 1 + allProjects.length) % allProjects.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  }

  return (
    <>
      {/* Card cliquable */}
      <motion.div
        onClick={() => {
          setCurrentProjectIndex(index)
          setIsOpen(true)
        }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-100px' }}
        transition={{
          duration: 1.2,
          delay: index * 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{
          y: -8,
          transition: { duration: 0.3, ease: 'easeOut' }
        }}
        className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl dark:bg-black/40"
      >
        {/* Image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.tag}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay au hover */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        {/* Titre */}
        <div className="p-4">
          <h3 className="text-lg font-semibold sm:text-xl">
            {project.tag}
          </h3>
        </div>

        {/* Effet de lumière au hover */}
        <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-white/20 via-transparent to-transparent dark:from-white/10" />
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md"
            />

            {/* Contenu de la modale */}
            <div className="fixed inset-0 z-50 flex items-center justify-center gap-4 p-4 sm:gap-8">
              {/* Navigation gauche */}
              {allProjects.length > 1 && (
                <button
                  onClick={goToPrevious}
                  className="hidden rounded-full bg-white/90 p-3 transition-all hover:scale-110 hover:bg-white dark:bg-black/90 dark:hover:bg-black sm:block"
                  aria-label="Projet précédent"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              )}

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.3)] dark:border-white/10 dark:bg-black/95 dark:shadow-[0_20px_80px_rgba(255,255,255,0.1)]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Bouton fermer */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 transition-colors hover:bg-white dark:bg-black/90 dark:hover:bg-black"
                  aria-label="Fermer"
                >
                  <X className="h-6 w-6" />
                </button>

                {/* Contenu animé */}
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentProjectIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: 'spring', stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                  >
                    {/* Image bannière 16:9 */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src={currentProject.image}
                        alt={currentProject.tag}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Contenu */}
                    <div className="p-8 sm:p-12">
                      <div className="space-y-6">
                        {/* Tag/Titre */}
                        <h2 className="text-3xl font-semibold sm:text-4xl">
                          {currentProject.tag}
                        </h2>

                        {/* Badge type de projet - sous l'image */}
                        <div className="inline-block rounded-lg bg-black/5 px-4 py-2 dark:bg-white/5">
                          <span className="text-sm text-muted">
                            {currentProject.type}
                          </span>
                        </div>

                        {/* Sections dynamiques du projet */}
                        {currentProject.sections.map((section, idx) => (
                          <div key={idx}>
                            <h3 className="mb-2 font-semibold text-base">{section.title}</h3>
                            <p className="text-base font-light leading-relaxed text-muted">
                              {section.content}
                            </p>
                          </div>
                        ))}

                        {/* Bouton voir le projet */}
                        {currentProject.link && (
                          <div className="pt-4">
                            <a
                              href={currentProject.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-2xl border-2 border-black bg-gradient-to-br from-black to-black/90 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl dark:border-white dark:from-white dark:to-white/90 dark:text-black"
                            >
                              Voir le projet
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Navigation droite */}
              {allProjects.length > 1 && (
                <button
                  onClick={goToNext}
                  className="hidden rounded-full bg-white/90 p-3 transition-all hover:scale-110 hover:bg-white dark:bg-black/90 dark:hover:bg-black sm:block"
                  aria-label="Projet suivant"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              )}
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
