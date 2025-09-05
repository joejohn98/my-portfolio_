import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";

import Header from "@/components/Header";
import About from "@/sections/About";


export default function Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#020817] text-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
      </main>
    </div>
  );
}
