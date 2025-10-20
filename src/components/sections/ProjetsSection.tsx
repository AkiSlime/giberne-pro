'use client'

import SectionTitle from '@/components/ui/SectionTitle'
import ProjectCardModal from '@/components/ui/ProjectCardModal'

export default function ProjetsSection() {
  const projects = [
    {
      image: '/images/moretales.jpg',
      tag: 'MORETALES',
      type: 'Direction Artistique • Identité Visuelle • Développement Web',
      sections: [
        {
          title: 'Le Projet',
          content: 'Moretales est une marque de vêtement que j\'ai créée de A à Z. De la gestion de la société à l\'identité visuelle, en passant par le design des logos, le graphisme textile, et le développement de la plateforme e-commerce. Un projet complet où j\'ai exploré toutes les facettes de la création d\'une marque : stratégie, direction artistique, design produit, et implémentation technique.',
        },
        {
          title: 'Réalisations',
          content: 'Création de l\'identité visuelle complète, design de collections textiles, photographie de produits, développement du site e-commerce avec système de paiement, gestion des stocks, et stratégie de communication digitale. Chaque aspect a été pensé pour créer une expérience de marque cohérente et mémorable.',
        },
      ],
      link: 'https://akisama.fr/moretales',
    },
    {
      image: '/images/1heure42.png',
      tag: '1HEURE42',
      type: 'Développement Web • Direction Artistique • Design d\'Interface (UI/UX)',
      sections: [
        {
          title: 'Le Défi',
          content: 'Créer plus qu\'un simple site vitrine pour le DJ et producteur 1HEURE42. Il fallait traduire son univers musical unique — un mélange d\'afro-électronique, bass music et RnB — en une expérience digitale immersive qui captive l\'auditeur et serve de plateforme professionnelle pour les organisateurs d\'événements.',
        },
        {
          title: 'Mon Approche',
          content: 'Mon approche s\'est concentrée sur la création d\'une plateforme qui plonge immédiatement le visiteur dans l\'ambiance musicale de l\'artiste. J\'ai conçu l\'expérience autour de trois points clés : un player audio intégré pour une écoute sans friction, une galerie média dynamique pour le storytelling visuel, et une section "Dates" claire et fonctionnelle. Le résultat est une extension digitale de son identité artistique.',
        },
      ],
      link: 'https://1eure42.vercel.app',
    },
    {
      image: '/images/virtual-space.png',
      tag: 'VIRTUAL SPACES',
      type: 'Expérience Immersive • Développement Web • Design 3D',
      sections: [
        {
          title: 'L\'Intention',
          content: 'Virtual Spaces est un projet personnel explorant la composition et la narration dans un espace en 3D. L\'objectif était d\'aller au-delà d\'une simple galerie d\'images pour créer un espace d\'exposition virtuel immersif, beau et performant.',
        },
        {
          title: 'Développement',
          content: 'En utilisant Three.js, mon travail s\'est concentré sur la gestion de la lumière, la composition spatiale et l\'optimisation des performances pour créer une expérience de visite fluide et mémorable, directement depuis le navigateur. Une preuve qu\'il est possible de fusionner art et innovation numérique.',
        },
      ],
      link: 'https://akisama.fr/virtual-spaces',
    },
    {
      image: '/images/playlyst.png',
      tag: 'PLAYLYST',
      type: 'Design d\'Interface (UI/UX) • Développement Web',
      sections: [
        {
          title: 'Le Défi',
          content: 'Concevoir une application pour les passionnés de jeux vidéo, capable de centraliser leurs collections et de suivre les actualités du gaming, tout en offrant une interface intuitive et agréable à utiliser au quotidien. Un outil qui répond au besoin de mieux organiser sa ludothèque numérique.',
        },
        {
          title: 'Ma Vision',
          content: 'Mon rôle a été de traduire une idée complexe en une interface utilisateur claire et fonctionnelle. J\'ai travaillé sur l\'architecture de l\'information, le design des composants et l\'ergonomie générale pour garantir que l\'expérience soit aussi ludique que le sujet qu\'elle traite. Le résultat est une plateforme qui rend la gestion de sa collection de jeux simple et plaisante.',
        },
      ],
      link: 'https://playlyst.akisama.fr',
    },
  ]

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionTitle title="Mes Projets" />

        <p className="mx-auto mt-6 max-w-3xl text-center text-base font-normal text-muted">
          Une sélection de projets où design, développement et stratégie créative se rencontrent.
        </p>

        {/* Grille de projets */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 md:grid-cols-4 lg:gap-4">
          {projects.map((project, index) => (
            <ProjectCardModal
              key={index}
              project={project}
              allProjects={projects}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
