import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { serialize } from 'next-mdx-remote/serialize'

export default async function Post({ params }) {
  const { slug } = params
  const filePath = path.join(process.cwd(), 'src', 'content', 'blog', `${slug}.mdx`)
  const source = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(source)
  const mdxSource = await serialize(content)

  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="text-xs text-slate-500 mt-4">{new Date(data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 text-justify">{data.short_description}</p>
      <div className="mdx-content mt-6">
        <MDXRemote source={content} />
      </div>
    </main>
  )
}
