import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'

export default function EchangeSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <SectionTitle title="Tout commence par un échange" />

        <p className="mb-8 mt-6 text-base font-normal text-muted sm:mb-10">
          Discutons-y sans appel téléphonique gratuit, sans compromis.
        </p>

        <div className="flex flex-col items-center gap-3">
          <Button variant="primary" size="lg">
            Réserver un appel
          </Button>
          <span className="font-mono text-xs uppercase tracking-wider text-muted sm:text-sm">
            Gratuit
          </span>
        </div>
      </div>
    </section>
  )
}
