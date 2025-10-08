import BlogSection from "@/components/home/BlogSection";
import HeroSection from "@/components/home/HeroSection";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto w-full px-4 sm:px-6 py-10">
      <HeroSection />
      <Suspense fallback={<div>Loading posts...</div>}>
        <BlogSection />
      </Suspense>
    </main>
  );
}
