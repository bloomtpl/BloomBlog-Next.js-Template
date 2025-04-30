'use client'

import { useSearchParams } from 'next/navigation'
import { posts } from '@/data/posts'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogSection() {
  const searchParams = useSearchParams()
  const category = searchParams.get('cat') || 'All'

  const filteredPosts = category === 'All'
    ? posts
    : posts.filter((post) => post.category === category)

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h2 className="text-2xl font-semibold mb-8">
        {category === 'All' ? 'Latest Articles' : `Category: ${category}`}
      </h2>

      {filteredPosts.length === 0 ? (
        <p className="text-gray-500">No posts in this category.</p>
      ) : (
        <div className="space-y-16">
          {filteredPosts.map((post) => (
            <article key={post.id} className="flex flex-col gap-4">
              <Image
                width={1000}
                height={1000}
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-64 md:h-100 object-cover rounded-md"
              />
              <div className="text-sm text-gray-500 flex gap-3">
                <span className="uppercase font-medium text-blue-600">
                  {post.category}
                </span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>By {post.author}</span>
              </div>
              <h3 className="text-xl font-semibold underline">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-600 hover:underline text-sm font-medium"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
