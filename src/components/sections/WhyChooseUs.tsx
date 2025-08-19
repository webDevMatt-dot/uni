export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Why Choose Unison?
        </h3>
        <p className="text-gray-700 dark:text-zinc-400 mb-10 max-w-3xl mx-auto">
          We don&apos;t just deliver technology — we deliver measurable impact. Our team ensures each solution is tailor-made and ROI-driven.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {[
            { title: "Industry Expertise:", desc: "We bring deep domain knowledge." },
            { title: "Agile & Scalable:", desc: "Our solutions grow with you." },
            { title: "End-to-End Delivery:", desc: "From ideation to rollout and beyond." },
            { title: "Proven Results:", desc: "We build systems that drive business growth." },
          ].map(({ title, desc }, i) => (
            <div
              key={i}
              className="
                bg-gray-100/70 dark:bg-zinc-800/70 
                p-6 rounded-lg 
                border border-gray-200 dark:border-zinc-700 
                shadow-md flex items-center gap-3
              "
            >
              <span className="text-indigo-400 text-2xl">✔️</span>
              <strong className="text-gray-900 dark:text-white text-lg">{title}</strong>
              <span className="text-gray-700 dark:text-zinc-300">{desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
