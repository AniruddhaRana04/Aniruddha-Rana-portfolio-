export default function CertificateCard({
  title,
  issuer,
  date,
  description,
  image,
}) {
  return (
    <article className="card flex gap-4 items-start">
      <img src={image} alt={title} className="w-28 h-20 rounded" />

      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-xs text-slate-500">
          {issuer} • {date}
        </p>
        <p className="text-sm mt-2">{description}</p>

        <a
          href={image}
          className="mt-2 inline-block text-sky-600"
        >
          View certificate
        </a>
      </div>
    </article>
  )
}
