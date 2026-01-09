import CertificateCard from '../../components/CertificateCard'
import { certificates } from '../../data/certificates'
import Reveal from '../../components/Reveal'

export default function Certificates() {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">Certificates</h1>
      <p className="text-slate-700">A selection of certificates and courses I've completed. Click through to view details.</p>

      <section className="mt-6 grid gap-6 md:grid-cols-2 items-stretch">
        {certificates.map((c) => (
          <Reveal key={c.id}>
            <CertificateCard {...c} />
          </Reveal>
        ))}
      </section>
    </main>
  )
}
