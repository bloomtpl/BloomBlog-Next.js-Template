export default function HeroSection() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight min-h-[3.5rem]">
        Welcome to the Bloom Blog
      </h1>
      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 min-h-[2.5rem]">
        Discover insights on design, development, and creativity — delivered
        with simplicity.
      </p>

      <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:w-auto flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm transition-colors"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
