import { type SanityDocument } from "next-sanity"
import Image from "next/image"
import Link from "next/link"

interface BlogListProps {
  posts: SanityDocument[]
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <div className="grid grid-rows-2 gap-6 h-full">
      {posts.map((post) => (
        <Link key={post._id} href={`/blog/${post.slug}`} className="block">
          <div className="bg-uk-background-primary-light shadow-lg rounded-2xl 
                          overflow-hidden hover:scale-[1.02] transition-transform duration-200 
                          flex flex-col h-full">
            {post.imageUrl && (
              <div className="relative w-full h-48">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                {post.description || "No description available."}
              </p>
              <span className="text-sm text-gray-400 mt-auto">
                {new Date(post.publishedAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}