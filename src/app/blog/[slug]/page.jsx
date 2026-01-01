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
      <MDXRemote source={mdxSource} />
    </main>
  )
}
