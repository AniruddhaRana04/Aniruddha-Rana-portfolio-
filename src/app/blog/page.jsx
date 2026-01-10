import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import BlogCard from '../../components/BlogCard'

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map(p => (
          <BlogCard
            key={p.slug}
            title={p.title}
            date={p.date}
            short_description={p.short_description}
            slug={p.slug}
            image={p.cover || '/blogs/placeholder-1.svg'}
          />
        ))}
      </div>
    </main>
  )
}
