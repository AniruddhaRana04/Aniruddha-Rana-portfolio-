export default function CertificateCard({ title, issuer, date, description, image = '/certificates/placeholder.svg', href }) {
  return (
    <article className="card flex gap-4 items-start">
      <img src={image} alt={title} className="w-28 h-20 object-cover rounded" />
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-xs text-slate-500 mt-1">{issuer} • {date}</p>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 text-justify">{description}</p>
        {href && <a href={href} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sky-600">View certificate</a>}
      </div>
    </article>
  )
}
