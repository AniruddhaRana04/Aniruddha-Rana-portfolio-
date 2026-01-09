import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import { projects } from '../data/projects'

export default function Home() {
  const featured = projects.slice(0, 2)

  return (
    <main>
      <section className="hero fade-in flex flex-col md:flex-row items-center gap-6">
        <img src="/avatar.jpg" alt="Aniruddha" className="w-28 h-28 rounded-full shadow-lg" />
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Hi, I'm <span className="gradient-text">Aniruddha Rana</span></h1>
          <p className="text-lg text-slate-700 dark:text-slate-300 mt-3">Python || Data Science </p>
          <div className="pt-6">
            <a href="/resume.pdf" className="inline-block bg-sky-600 text-white px-4 py-2 rounded transform transition hover:-translate-y-1" target="_blank" rel="noopener noreferrer" download aria-label="Download resume">Download Resume</a>
            {' '}
            <a href="/projects" className="inline-block bg-sky-600 text-white px-4 py-2 rounded transform transition hover:-translate-y-1">See projects</a>
          </div>
        </div>
      </section>

      <section id="projects" className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Selected Projects</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((p) => (
            <Reveal key={p.title}>
              <ProjectCard title={p.title} description={p.description} image={p.image} href={p.href}/>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  )
}
