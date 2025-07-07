import { ExploreButton } from "src/components/ui/explore";

export function CallToAction() {
  return (
    <section className="py-14 sm:py-16 bg-indigo-600 text-white text-center px-6">
      <h3 className="text-2xl font-bold mb-4">Let’s Build Something Great</h3>
      <p className="mb-6 max-w-xl mx-auto">
        Whether you need help with AI, data engineering, SAP, or security — we&apos;re here to help you thrive.
      </p>
      <ExploreButton />
    </section>
  );
}