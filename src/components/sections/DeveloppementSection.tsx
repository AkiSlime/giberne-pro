import SectionTitle from '@/components/ui/SectionTitle'
import ServiceCardModal from '@/components/ui/ServiceCardModal'

export default function DeveloppementSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionTitle title="Développement Web & Design d'interface" />

        <p className="mx-auto mt-6 max-w-3xl text-center text-base font-normal text-muted">
          De la maquette à la mise en ligne, je construis des expériences digitales robustes, esthétiques et performantes. Que vous ayez besoin de réparer, de moderniser ou de créer, voici mes solutions.
        </p>

        {/* Grille de services avec modales */}
        <div className="mt-12 grid grid-cols-1 gap-3 sm:mt-16 md:grid-cols-4 lg:gap-3">
          <ServiceCardModal
            index={0}
            title="Finalisation de Site IA"
            description="Vous avez un prototype généré par une IA, mais le résultat est instable, buggé ou impersonnel."
            details="Je prends le relais là où l'IA s'arrête. J'audite, nettoie et restructure votre code pour le transformer en un site professionnel, rapide et prêt à être lancé. Je suis le partenaire qui assure les 20% de finition qui font toute la différence."
          />

          <ServiceCardModal
            index={1}
            title="Refonte de Site Existant"
            description="Votre site actuel est vieillissant, lent, ne s'affiche pas correctement sur mobile."
            details="Je repense l'architecture, modernise le design et optimise la technique pour redonner vie à votre présence en ligne. L'objectif est simple : améliorer l'expérience de vos utilisateurs et la performance de votre site pour qu'il redevienne un véritable atout."
          />

          <ServiceCardModal
            index={2}
            title="Création de Site Web Complet"
            description="Vous partez de zéro et vous avez besoin d'une vitrine digitale pour lancer votre projet."
            details="Nous partons de votre vision pour développer un site sur mesure. De la page unique percutante pour un lancement, au site multi-pages pour présenter votre activité en détail, je construis une solution esthétique et fonctionnelle qui répond précisément à vos objectifs."
          />

          <ServiceCardModal
            index={3}
            title="Design d'Interface (UI/UX)"
            description="Vous voulez sécuriser votre investissement en validant l'ergonomie et le design avant d'écrire du code."
            details="Je conçois les maquettes haute-fidélité de votre site ou application sur Figma. Ce n'est pas juste un dessin, c'est le plan de construction interactif de votre future plateforme. Ce service garantit un développement fluide, sans surprise, et un résultat final parfaitement aligné avec vos attentes."
          />
        </div>
      </div>
    </section>
  )
}
