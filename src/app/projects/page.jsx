import ProjectCard from '../../components/ProjectCard'
import { projects } from '../../data/projects'
import Reveal from '../../components/Reveal'

export default function Projects() {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <p className="text-slate-700">A selection of projects I've built. Click to view details.</p>

      <section className="mt-6 grid gap-6 md:grid-cols-2 items-stretch">
        {projects.map((p) => (
          <Reveal key={p.id}>
            <ProjectCard {...p} />
          </Reveal>
        ))}
      </section>
    </main>
  )
}
