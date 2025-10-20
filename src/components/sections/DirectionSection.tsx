import SectionTitle from '@/components/ui/SectionTitle'
import ServiceCardModal from '@/components/ui/ServiceCardModal'

export default function DirectionSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionTitle title="Direction Artistique & Identité Visuelle" />

        <p className="mx-auto mt-6 max-w-3xl text-center text-base font-normal text-muted">
          Votre identité, conçue et sublimée.
        </p>

        {/* Grille de services avec modales */}
        <div className="mt-12 grid gap-4 sm:mt-16 md:grid-cols-3 lg:gap-4">
          <ServiceCardModal
            index={0}
            title="Création de Logo"
            description="Un logo unique qui incarne votre marque et vous démarque."
            details="Votre logo est la première impression que vous donnez. Je conçois des logos mémorables, intemporels et parfaitement adaptés à votre secteur d'activité. Qu'il s'agisse d'un design minimaliste ou d'une création plus élaborée, chaque élément est pensé pour refléter vos valeurs et capter l'attention de votre audience cible. Vous recevez plusieurs propositions, des déclinaisons en couleur et noir & blanc, ainsi que tous les fichiers sources."
          />

          <ServiceCardModal
            index={1}
            title="Identité Visuelle"
            description="Une charte graphique cohérente pour tous vos supports."
            details="Au-delà du logo, votre identité visuelle englobe l'ensemble des éléments graphiques qui définissent votre marque : palette de couleurs, typographies, iconographie, style photographique, et règles d'utilisation. Je crée une charte graphique complète qui garantit une cohérence visuelle sur tous vos supports (web, print, réseaux sociaux). Votre marque devient instantanément reconnaissable et professionnelle."
          />

          <ServiceCardModal
            index={2}
            title="Stratégie de Marque & Moodboard"
            description="Définir l'essence de votre marque avant de créer."
            details="Avant de dessiner, il faut penser. Je vous accompagne dans la définition de votre positionnement, votre ton, vos valeurs et votre univers visuel à travers des moodboards inspirants. Cette étape stratégique permet de poser les bonnes bases créatives et de s'assurer que chaque décision graphique est alignée avec votre vision. C'est l'étape fondamentale pour construire une identité forte et authentique."
          />
        </div>
      </div>
    </section>
  )
}
