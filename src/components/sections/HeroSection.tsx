import { ExploreButton } from "src/components/ui/explore";
import { ScheduleButton } from "src/components/ui/schedule";

export function HeroSection() {
  return (
    <section
      className="
        relative text-center
        min-h-screen flex flex-col items-center justify-center
        px-6 md:px-10 lg:px-12
        py-12 md:py-20 lg:py-28
        pt-[5rem] md:pt-[6rem] lg:pt-[7rem]
        bg-gradient-to-br 
          from-white/95 via-gray-100/95 to-white/95 
          dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950
        max-w-7xl mx-auto
      "
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 leading-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-emerald-400">
          Unison
        </span>
        <br />
        <span className="block text-lg sm:text-xl md:text-2xl font-semibold mt-2 text-gray-800 dark:text-zinc-300">
          Empowering Digital Excellence Through Innovation, Data, and Skills
        </span>
      </h1>
      <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-6 leading-relaxed text-gray-700 dark:text-zinc-400">
        Leading provider of AI & Machine Learning solutions, Data Engineering, SAP implementations, and comprehensive Cybersecurity Services.
      </p>
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-center justify-center mb-8">
        <div><ExploreButton /></div>
        <div><ScheduleButton /></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center mt-6 font-medium text-gray-800 dark:text-zinc-200">
        <div><strong className="block text-xl sm:text-2xl font-bold text-indigo-400">7+</strong> Years Experience</div>
        <div><strong className="block text-xl sm:text-2xl font-bold text-indigo-400">100+</strong> Projects Completed</div>
        <div><strong className="block text-xl sm:text-2xl font-bold text-indigo-400">100+</strong> Happy Clients</div>
        <div><strong className="block text-xl sm:text-2xl font-bold text-indigo-400">24/7</strong> Support</div>
      </div>
    </section>
  );
}
