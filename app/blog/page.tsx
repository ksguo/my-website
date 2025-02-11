
import { client } from "@/lib/client"
import { type SanityDocument } from "next-sanity"

import BlogList from "@/components/BlogList"


const POSTS_QUERY = `*[
  _type == "post" 
  && defined(slug.current)
] | order(publishedAt desc)[0...12]{
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  description,
  "imageUrl": image.asset->url
}`

const options = { next: { revalidate: 30 } }

export default async function BlogPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options)



  return (
    <main className="container mx-auto min-h-screen max-w-4xl p-8">
      <h1 className="text-3xl font-primary mb-8">Blog</h1>
      <BlogList posts={posts} />
    </main>
  )
}