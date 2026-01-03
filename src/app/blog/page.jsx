import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

export default function Blog() {
  const postsDir = path.join(process.cwd(), 'src', 'content', 'blog')
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.mdx'))
  const posts = files.map(file => {
    const slug = file.replace(/\.mdx$/, '')
    const content = fs.readFileSync(path.join(postsDir, file), 'utf8')
    const { data } = matter(content)
    return { slug, ...data }
  })

  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <ul className="space-y-4">
        {posts.map(p => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="text-sky-600 font-semibold">{p.title}</Link>
            <p className="text-sm text-slate-600 dark:text-slate-300">{p.short_description}</p>
            <p className="text-xs text-slate-500">{new Date(p.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
