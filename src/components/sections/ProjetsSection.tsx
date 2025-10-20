'use client'

import SectionTitle from '@/components/ui/SectionTitle'
import ProjectCard from '@/components/ui/ProjectCard'
import { useState } from 'react'

export default function ProjetsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects = [
    {
      image: '/images/project-1.jpg',
      tag: 'MORETALES',
      defi: 'Créer une maquette de monde 3x4 & qui bascule horizontal et une vision contemporaine, en lui donnant une identité visuelle singulier et un branding complet.',
      vision: 'J\'ai produit une direction créative de la conception logo et la réalisation digitale jusqu\'à la mise au déploiement du site, offrant une vitrine moderne percutante.',
    },
  ]

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionTitle title="Mes Projets" />

        <p className="mx-auto mt-6 max-w-3xl text-center text-base font-normal text-muted">
          Quelques réalises (projet fictive)avec intégralement réalisés (bientôt remplacé).
        </p>

        {/* Carousel */}
        <div className="relative mt-8 sm:mt-12">
          {/* Card */}
          <ProjectCard {...projects[currentIndex]} />

          {/* Navigation */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prevProject}
              className="rounded-lg border border-black px-4 py-2 font-mono text-sm uppercase transition-colors hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
              aria-label="Projet précédent"
            >
              ← Précédent
            </button>

            {/* Dots indicator */}
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === currentIndex
                      ? 'bg-black dark:bg-white'
                      : 'bg-black/30 dark:bg-white/30'
                  }`}
                  aria-label={`Aller au projet ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              className="rounded-lg border border-black px-4 py-2 font-mono text-sm uppercase transition-colors hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
              aria-label="Projet suivant"
            >
              Suivant →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
