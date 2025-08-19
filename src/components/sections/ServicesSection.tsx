import Link from "next/link";
import { Button } from "src/components/ui/button";
import { Card, CardContent } from "src/components/ui/card";
import { services } from "src/data/services";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="
        py-16 sm:py-20 
        bg-white dark:bg-zinc-950 
        text-gray-900 dark:text-white
      "
    >
      <h3 className="text-center text-3xl sm:text-4xl font-bold mb-4">
        Our Core Expertise
      </h3>
      <p className="text-center mb-12 text-gray-700 dark:text-zinc-400 max-w-3xl mx-auto px-4">
        We provide comprehensive technology solutions to help your business thrive in the digital age.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-6 max-w-7xl mx-auto">
        {services.map(({ title, items, link, emoji }, i) => (
          <Card
            key={i}
            className="
              bg-gray-100/70 dark:bg-zinc-800/70 
              border border-gray-200 dark:border-zinc-700 
              rounded-xl
              hover:border-indigo-500 
              transition-all duration-300
              transform hover:scale-105 hover:shadow-xl cursor-pointer
              overflow-hidden
            "
          >
            <CardContent className="p-6 flex flex-col h-full justify-between text-gray-900 dark:text-white">
              <div style={{ animationDelay: `${i * 150}ms` }} className="flex flex-col h-full">
                <h4 className="font-bold mb-3 text-xl text-indigo-400">
                  <span className="text-3xl mr-2">{emoji}</span> {title}
                </h4>
                <ul className="list-disc list-inside text-sm text-gray-700 dark:text-zinc-300 mb-6 flex-grow">
                  {items.map((item, index) => (
                    <li key={index} className="mb-1">{item}</li>
                  ))}
                </ul>
                <Link href={link} passHref className="mt-auto">
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
