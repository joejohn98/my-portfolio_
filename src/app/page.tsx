import Header from "@/components/Header";
import Hero from "@/sections/Hero";

export default function Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#020817] text-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}
