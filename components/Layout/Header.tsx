"use client";

import { ThemeToggle } from "@/components/Layout/ThemeToggle";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const categories = ["Design", "Development", "Travel", "Lifestyle", "Writing"];

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
    router.refresh();
    setOpen(false);
  };

  return (
    <header className="border-b border-neutral-200 dark:border-neutral-800 px-4 pb-4">
      <div className="flex items-center justify-between">
        <button onClick={handleLogoClick} className="text-xl cursor-pointer">
          Bloom Blog
        </button>

        <nav className="hidden md:flex gap-4 text-sm items-center">
          {categories.map((cat) => (
            <Link key={cat} href={`/?cat=${cat}`} className="hover:underline">
              {cat}
            </Link>
          ))}
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </nav>

        <div className="flex items-center md:hidden gap-2">
          <button
            onClick={() => setOpen(!open)}
            className="text-sm p-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800"
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>
          <ThemeToggle />
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 mt-6 text-sm md:hidden">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/?cat=${cat}`}
              onClick={() => setOpen(false)}
              className="hover:underline"
            >
              {cat}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
