import { ExploreButton } from "src/components/ui/explore";

export function CallToAction() {
  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white text-center px-6">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Let’s Build Something Great
        </h3>
        <p className="mb-8 text-gray-700 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Whether you need help with AI, data engineering, SAP, or security — we&apos;re here to help you thrive.
        </p>
        <ExploreButton /> {/* The button itself likely already adapts to dark/light mode */}
      </div>
    </section>
  );
}
