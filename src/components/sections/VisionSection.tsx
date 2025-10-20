import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'

export default function VisionSection() {
  return (
    <section className="px-8 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <SectionTitle title="De la vision au produit fini" />

        {/* Paragraphe explicatif */}
        <p className="mb-8 mt-6 text-base font-normal text-muted sm:mb-10">
          Que vous ayez un prototype à finaliser, ou une vision solidaire à concrétiser, je vous accompagne avec une réactivité exemplaire pour transformer votre idée en un produit digital robuste et esthétique.
        </p>

        {/* Bouton CTA + Label Gratuit */}
        <div className="flex flex-col items-center gap-2">
          <Button variant="primary" size="lg" >
            Réserver un appel
          </Button>
          <span className="text-xs tracking-wider text-muted sm:text-sm">
            Gratuit
          </span>
        </div>
      </div>
    </section>
  )
}
