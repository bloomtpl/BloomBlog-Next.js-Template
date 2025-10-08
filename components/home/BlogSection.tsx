import { posts } from "@/data/posts";
import Image from "next/image";
import Link from "next/link";

interface BlogSectionProps {
  category: string;
}

export default function BlogSection({ category }: BlogSectionProps) {
  const filteredPosts =
    category === "All"
      ? posts
      : posts.filter((post) => post.category === category);

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h2 className="text-2xl font-semibold mb-8">
        {category === "All" ? "Latest Articles" : `${category}`}
      </h2>
      <div className="space-y-16">
        {filteredPosts.map((post, index: number) => (
          <article key={post.id} className="flex flex-col gap-4">
            <Image
              width={800}
              height={400}
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-[400px] max-h-[400px] object-cover rounded-md shadow-xl"
              priority={index === 0}
              fetchPriority={index === 0 ? "high" : "auto"}
              sizes="(max-width: 768px) 100vw, 800px"
            />
            <div className="text-sm text-gray-500 flex gap-3">
              <Link
                href={`/?cat=${post.category}`}
                className="uppercase font-medium text-blue-600 hover:underline"
              >
                {post.category}
              </Link>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <Link
                href={`/authors/${post.authorSlug}`}
                className="underline hover:text-blue-600"
              >
                By {post.author}
              </Link>
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
    </section>
  );
}
