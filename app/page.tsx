import BlogSection from "@/components/home/BlogSection";
import HeroSection from "@/components/home/HeroSection";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Suspense fallback={<div>Loading posts...</div>}>
        <BlogSection />
      </Suspense>
    </div>
  );
}
