export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 bg-zinc-900 text-white px-4"> {/* Dark background, generous padding */}
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Why Choose Unison?</h3> {/* Larger, white title */}
        <p className="text-zinc-400 mb-10 max-w-3xl mx-auto"> {/* Lighter grey text, centered, max-width */}
          We don&apos;t just deliver technology — we deliver measurable impact. Our team ensures each solution is tailor-made and ROI-driven.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          <div className="bg-zinc-800/70 p-6 rounded-lg border border-zinc-700 shadow-md flex items-center gap-3">
            <span className="text-indigo-400 text-2xl">✔️</span> {/* Accent color for checkmark */}
            <strong className="text-white text-lg">Industry Expertise:</strong> <span className="text-zinc-300">We bring deep domain knowledge.</span>
          </div>
          <div className="bg-zinc-800/70 p-6 rounded-lg border border-zinc-700 shadow-md flex items-center gap-3">
            <span className="text-indigo-400 text-2xl">✔️</span>
            <strong className="text-white text-lg">Agile & Scalable:</strong> <span className="text-zinc-300">Our solutions grow with you.</span>
          </div>
          <div className="bg-zinc-800/70 p-6 rounded-lg border border-zinc-700 shadow-md flex items-center gap-3">
            <span className="text-indigo-400 text-2xl">✔️</span>
            <strong className="text-white text-lg">End-to-End Delivery:</strong> <span className="text-zinc-300">From ideation to rollout and beyond.</span>
          </div>
          <div className="bg-zinc-800/70 p-6 rounded-lg border border-zinc-700 shadow-md flex items-center gap-3">
            <span className="text-indigo-400 text-2xl">✔️</span>
            <strong className="text-white text-lg">Proven Results:</strong> <span className="text-zinc-300">We build systems that drive business growth.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
