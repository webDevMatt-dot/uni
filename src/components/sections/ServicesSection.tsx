import Link from "next/link";
import { Button } from "src/components/ui/button";
import { Card, CardContent } from "src/components/ui/card"; // Assuming Card components are also themed or will be
import { services } from "src/data/services"; // Assuming this data structure is correct

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-zinc-950 text-white"> {/* Dark background, generous padding */}
      <h3 className="text-center text-3xl sm:text-4xl font-bold mb-4 text-white">Our Core Expertise</h3> {/* Larger, white title */}
      <p className="text-center mb-12 text-zinc-400 max-w-3xl mx-auto px-4"> {/* Lighter grey text, centered, max-width */}
        We provide comprehensive technology solutions to help your business thrive in the digital age.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-6 max-w-7xl mx-auto"> {/* Responsive grid, wider max-width */}
        {services.map(({ title, items, link, emoji }, i) => (
          <Card
            key={i}
            className="
              bg-zinc-800/70 border border-zinc-700 rounded-xl
              hover:border-indigo-500 transition-all duration-300
              transform hover:scale-105 hover:shadow-xl cursor-pointer
              overflow-hidden
            " // Darker card background, subtle border, hover effects
          >
            <CardContent className="p-6 flex flex-col h-full justify-between text-white"> {/* White text inside card */}
              <div style={{ animationDelay: `${i * 150}ms` }} className="flex flex-col h-full">
                <h4 className="font-bold mb-3 text-xl text-indigo-400"> {/* Accent color for title */}
                  <span className="text-3xl mr-2">{emoji}</span> {title} {/* Larger emoji */}
                </h4>
                <ul className="list-disc list-inside text-sm text-zinc-300 mb-6 flex-grow"> {/* Lighter grey text, more margin */}
                  {items.map((item, index) => (
                    <li key={index} className="mb-1">{item}</li> // Small margin for list items
                  ))}
                </ul>
                <Link href={link} passHref className="mt-auto"> {/* Ensure button is at the bottom of the card */}
                  {/* IMPORTANT: Removed conflicting classes and variant from Button usage */}
                  <Button>
                    View More Info
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}