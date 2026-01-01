export default function ProjectCard({ title, description, href, image = '/projects/placeholder-1.svg' }) {
  return (
    <div className="card flex flex-col md:flex-row gap-4 items-start">
      <img src={image} alt={title} className="w-full md:w-40 h-28 object-cover rounded" />
      <div className="flex-1">
        <h3 className="font-semibold gradient-text">{title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">{description}</p>
        {href && <a className="text-sky-600 mt-3 inline-flex items-center gap-2" href={href}>View project <span aria-hidden>→</span></a>}
      </div>
    </div>
  )
}
