import { client } from "@/lib/client"
import { type SanityDocument } from "next-sanity"
import Image from "next/image"
import Link from "next/link"

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
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Latest Posts</h1>
      <ul className="flex flex-col gap-y-6">
        {posts.map((post) => (
          <li
            key={post._id}
            className="p-4 bg-white rounded-lg shadow hover:shadow-lg hover:underline transition"
          >
            <Link href={`/blog/${post.slug}`}>
              {/* Render Image only if a url is present */}
              {post.imageUrl && (
                <div className="mb-4">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded"
                  />
                </div>
              )}
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-gray-500 text-sm mt-1">
                {new Date(post.publishedAt).toLocaleDateString()}
                {post.description && ` - ${post.description}`}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}