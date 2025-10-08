import { authors } from "@/data/authors";
import { posts } from "@/data/posts";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const author = authors.find((a) => a.slug === slug);

  if (!author) notFound();

  const authoredPosts = posts.filter((post) => post.authorSlug === slug);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8 text-center">
        <Image
          src={author.image}
          alt={author.name}
          width={96}
          height={96}
          className="mx-auto mb-4 rounded-full"
        />
        <h1 className="text-2xl font-bold mb-2">{author.name}</h1>
        <p className="text-gray-600 dark:text-gray-400">{author.bio}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Posts by {author.name}</h2>
        <ul className="space-y-4">
          {authoredPosts.map((post) => (
            <li key={post.slug}>
              <Image
                width={1000}
                height={1000}
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-64 md:h-100 object-cover rounded-md mb-2"
              />
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-600 hover:underline"
              >
                {post.title}
              </Link>
              <p className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
