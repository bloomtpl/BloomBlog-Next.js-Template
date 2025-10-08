import { posts } from "@/data/posts";
import Image from "next/image";
import Link from "next/link";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <p className="text-center py-20">Post not found</p>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link
        href="/"
        className="inline-flex items-center text-sm hover:underline py-4"
      >
        ← Back to home
      </Link>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      <p className="text-sm text-gray-500 mb-4">
        By{" "}
        <Link
          href={`/authors/${post.authorSlug}`}
          className="underline hover:text-blue-600"
        >
          {post.author}
        </Link>
        • {new Date(post.date).toLocaleDateString()}
      </p>

      <Image
        src={post.imageUrl}
        alt={post.title}
        width={1000}
        height={1000}
        className="w-full h-64 sm:h-120 object-cover rounded-md mb-4"
      />

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p>{post.excerpt}</p>
      </div>
    </div>
  );
}
