import { ExploreButton } from "src/components/ui/explore";

export function CallToAction() {
  return (
    <section className="py-16 sm:py-20 bg-zinc-900 text-white text-center px-6"> {/* Dark background, generous padding */}
      <div className="max-w-4xl mx-auto"> {/* Max width for content, centered */}
        <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Let’s Build Something Great</h3> {/* Larger, white title */}
        <p className="mb-8 text-zinc-400 max-w-2xl mx-auto leading-relaxed"> {/* Lighter grey text, more margin */}
          Whether you need help with AI, data engineering, SAP, or security — we&apos;re here to help you thrive.
        </p>
        <ExploreButton /> {/* Your themed button */}
      </div>
    </section>
  );
}
