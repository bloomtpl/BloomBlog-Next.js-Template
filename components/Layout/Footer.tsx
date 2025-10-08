import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 dark:border-neutral-800 py-8 text-sm max-w-3xl mx-auto">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div className="text-lg">Bloom Blog</div>

        <div className="flex gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5 hover:text-blue-600 transition-colors" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 hover:text-blue-600 transition-colors" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 hover:text-blue-600 transition-colors" />
          </a>
        </div>
      </div>

      <div className="mt-6 px-4 sm:px-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Bloom Blog. All rights reserved.
      </div>
    </footer>
  );
}
