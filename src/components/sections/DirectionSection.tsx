import SectionTitle from '@/components/ui/SectionTitle'
import ServiceCardModal from '@/components/ui/ServiceCardModal'

export default function DirectionSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionTitle title="Direction Artistique & Identité Visuelle" />

        <p className="mx-auto mt-6 max-w-3xl text-center text-base font-normal text-muted">
          Un grand projet a besoin de plus que de la fonctionnalité ; il a besoin d&apos;une âme. C&apos;est ici que nous définissons l&apos;ADN visuel et émotionnel de votre marque, pour créer une identité qui captive, qui dure, et qui vous ressemble.
        </p>

        {/* Grille de services avec modales */}
        <div className="mt-12 grid gap-4 sm:mt-16 md:grid-cols-3 lg:gap-4">
          <ServiceCardModal
            index={0}
            title="Création de Logo"
            description="Vous avez le projet, mais il vous manque le symbole qui l&apos;incarnera."
            details="Votre logo est le visage de votre marque. Je travaille avec vous pour créer un signe puissant et sur mesure qui incarne les valeurs fondamentales de votre projet. C&apos;est le point de départ de votre reconnaissance."
          />

          <ServiceCardModal
            index={1}
            title="Identité Visuelle (Charte Graphique)"
            description="Vous voulez garantir que votre marque soit toujours professionnelle et cohérente."
            details="Au-delà du logo, une marque forte a besoin de cohérence. Je construis votre système visuel complet : une palette de couleurs stratégique, une hiérarchie de typographies professionnelles et des règles claires d&apos;utilisation. C&apos;est le guide qui assure que votre marque soit toujours impeccable et reconnaissable."
          />

          <ServiceCardModal
            index={2}
            title="Stratégie de Marque & Moodboard"
            description="Vous êtes au tout début de votre projet et vous avez besoin de définir une direction créative claire."
            details="C&apos;est l&apos;étape fondamentale. Avant de dessiner quoi que ce soit, nous nous immergeons dans votre univers. À travers des ateliers et la création d&apos;un moodboard riche, nous explorons des territoires créatifs, nous définissons la personnalité de votre marque et nous établissons la direction émotionnelle. C&apos;est la boussole qui guidera toutes les futures décisions créatives."
          />
        </div>
      </div>
    </section>
  )
}
