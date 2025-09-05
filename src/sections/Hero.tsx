import HeroClient from "@/sections/HeroClient";

export default function Hero() {
  const skills = [
    "Next.js",
    "React",
    "Prisma",
    "TypeScript",
    "JavaScript",
    "Redux",
    "HTML",
    "CSS",
    "Tailwind CSS",
  ];

  return <HeroClient skills={skills} />;
}
