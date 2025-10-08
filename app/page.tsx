import BlogSection from "@/components/home/BlogSection";
import HeroSection from "@/components/home/HeroSection";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string }>;
}) {
  const params = await searchParams;
  const category = params.cat || "All";
  return (
    <main className="max-w-3xl mx-auto w-full px-4 sm:px-6 py-10">
      <HeroSection />
      <BlogSection category={category} />
    </main>
  );
}
