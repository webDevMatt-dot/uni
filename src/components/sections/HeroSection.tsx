import { ExploreButton } from "src/components/ui/explore";
import { ScheduleButton } from "src/components/ui/schedule";

export function HeroSection() {
  return (
    <section
      className="relative text-center
                 min-h-screen flex flex-col items-center justify-center
                 px-6 md:px-10 lg:px-12 // Horizontal padding for content
                 py-12 md:py-20 lg:py-28 // Vertical padding for content
                 pt-[5rem] md:pt-[6rem] lg:pt-[7rem] // Dynamic padding-top to clear fixed Navbar
                 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 // Subtle dark gradient background
                 max-w-7xl mx-auto // Constrain content width and center it
                 "
    >
      {/* All content is now directly within the section */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 leading-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-emerald-400">
          Unison
        </span>
        <br />
        <span className="block text-lg sm:text-xl md:text-2xl font-semibold text-zinc-300 mt-2">
          Empowering Digital Excellence Through Innovation, Data, and Skills
        </span>
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-3xl mx-auto mb-6 leading-relaxed">
        Leading provider of AI & Machine Learning solutions, Data Engineering, SAP implementations, and comprehensive Cybersecurity Services.
      </p>
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-center justify-center mb-8">
        <div><ExploreButton /></div>
        <div><ScheduleButton /></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center mt-6 text-zinc-200 font-medium">
        <div><strong className="block text-xl sm:text-2xl font-bold text-indigo-400">7+</strong> Years Experience</div>
        <div><strong className="block text-xl sm:text-2xl font-bold text-indigo-400">100+</strong> Projects Completed</div>
        <div><strong className="block text-xl sm:text-2xl font-bold text-indigo-400">100+</strong> Happy Clients</div>
        <div><strong className="block text-xl sm:text-2xl font-bold text-indigo-400">24/7</strong> Support</div>
      </div>
    </section>
  );
}