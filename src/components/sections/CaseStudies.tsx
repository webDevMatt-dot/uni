export function CaseStudies() {
  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-zinc-950 text-gray-900 dark:text-white px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Success Stories
        </h3>
        <p className="text-gray-700 dark:text-zinc-400 mb-10 max-w-3xl mx-auto">
          Explore how Unison has helped businesses like yours achieve their digital transformation goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {[
            {
              title: "Retail AI Forecasting",
              desc: "Helped a major retailer reduce overstock by 30% with predictive demand forecasting using AI."
            },
            {
              title: "SAP Integration for Logistics",
              desc: "Migrated and integrated SAP for a large logistics firm, improving reporting time by 40%."
            }
          ].map(({ title, desc }, i) => (
            <div
              key={i}
              className="
                bg-gray-100/70 dark:bg-zinc-800/70 
                p-6 rounded-lg border border-gray-200 dark:border-zinc-700 
                shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg
              "
            >
              <h4 className="font-semibold text-xl mb-2 text-indigo-400">{title}</h4>
              <p className="text-gray-700 dark:text-zinc-300 text-base">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
