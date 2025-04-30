import BlogSection from "@/components/HomePage/BlogSection";
import Newsletter from "@/components/HomePage/Newsletter";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Newsletter />
      <Suspense fallback={<div>Loading posts...</div>}>
        <BlogSection />
      </Suspense>
    </div>
  );
}
