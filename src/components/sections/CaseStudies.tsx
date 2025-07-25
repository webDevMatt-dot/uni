export function CaseStudies() {
  return (
    <section className="py-16 sm:py-20 bg-zinc-950 text-white px-4"> {/* Dark background, generous padding */}
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Success Stories</h3> {/* Larger, white title */}
        <p className="text-zinc-400 mb-10 max-w-3xl mx-auto"> {/* Lighter grey text, centered, max-width */}
          Explore how Unison has helped businesses like yours achieve their digital transformation goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="bg-zinc-800/70 p-6 rounded-lg border border-zinc-700 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"> {/* Card styling */}
            <h4 className="font-semibold text-xl mb-2 text-indigo-400">Retail AI Forecasting</h4> {/* Accent color for title */}
            <p className="text-zinc-300 text-base"> {/* Lighter grey text */}
              Helped a major retailer reduce overstock by 30% with predictive demand forecasting using AI.
            </p>
          </div>
          <div className="bg-zinc-800/70 p-6 rounded-lg border border-zinc-700 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"> {/* Card styling */}
            <h4 className="font-semibold text-xl mb-2 text-indigo-400">SAP Integration for Logistics</h4> {/* Accent color for title */}
            <p className="text-zinc-300 text-base"> {/* Lighter grey text */}
              Migrated and integrated SAP for a large logistics firm, improving reporting time by 40%.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
