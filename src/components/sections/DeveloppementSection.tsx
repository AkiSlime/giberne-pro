import SectionTitle from '@/components/ui/SectionTitle'
import ServiceCardModal from '@/components/ui/ServiceCardModal'

export default function DeveloppementSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionTitle title="Développement Web & Design d'interface" />

        <p className="mx-auto mt-6 max-w-3xl text-center text-base font-normal text-muted">
          De la maquette à la mise en ligne, je conçois des expériences digitales modernes et performantes, dans mon atelier, ou simplement de moderniser ce qui existe.
        </p>

        {/* Grille de services avec modales */}
        <div className="mt-12 grid grid-cols-1 gap-3 sm:mt-16 md:grid-cols-4 lg:gap-3">
          <ServiceCardModal
            index={0}
            title="Finalisation de Site"
            description="Vous avez un projet en cours qui nécessite une finition professionnelle."
            details="Vous avez déjà un prototype ou un site partiellement développé, mais il manque cette touche finale pour le rendre vraiment professionnel. Je prends en charge l'optimisation, les derniers ajustements de design, l'intégration des fonctionnalités manquantes, et la mise en ligne. Mon objectif : transformer votre projet en un produit fini et prêt à conquérir votre audience."
          />

          <ServiceCardModal
            index={1}
            title="Refonte de Site Existant"
            description="Votre site actuel ne reflète plus votre image ou n'est plus performant."
            details="Votre site est vieillissant, lent, ne s'affiche pas correctement sur mobile ou ne reflète plus la qualité de votre travail. Je repense l'architecture, modernise le design et optimise la technique pour redonner vie à votre présence en ligne. Ensemble, nous créons une version améliorée qui respecte votre identité tout en apportant une expérience utilisateur moderne et fluide."
          />

          <ServiceCardModal
            index={2}
            title="Création de Site Web Complet"
            description="Démarrage d'un projet web de zéro, de l'idée à la mise en ligne."
            details="Vous partez de zéro et avez besoin d'un accompagnement complet. De la conception de la maquette à la mise en ligne, je gère toutes les étapes : définition de votre identité visuelle, création du design, développement technique, optimisation SEO et déploiement. Vous obtenez un site web sur mesure, performant et aligné avec vos objectifs business."
          />

          <ServiceCardModal
            index={3}
            title="Design d'Interface (UI/UX)"
            description="Conception d'interfaces utilisateur intuitives et esthétiques."
            details="L'expérience utilisateur est au cœur de tout projet réussi. Je conçois des interfaces élégantes et fonctionnelles, en mettant l'accent sur l'ergonomie, l'accessibilité et l'esthétique. Que ce soit pour une application web, un site vitrine ou un outil interne, chaque élément est pensé pour offrir une navigation fluide et agréable qui engage vos utilisateurs."
          />
        </div>
      </div>
    </section>
  )
}
