import { Code, Globe, Lightbulb, Layers } from "lucide-react";
import { NextPage } from "next";

const About: NextPage = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know more about me, my background, and what drives me as a
            developer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up delay-100">
            <div className="bg-white dark:bg-[#020817] border border-transparent dark:border-gray-700 rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                My Story
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I&#39;m a passionate frontend developer focused on creating
                clean, user-friendly, and responsive web applications. With a
                strong foundation in modern JavaScript frameworks
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I specialize in Next.js React development, with expertise in
                TypeScript, modern JavaScript, and responsive design principles.
                I&#39;m committed to writing clean, maintainable code and
                creating seamless user experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                I&#39;m constantly learning and exploring new technologies to
                stay at the forefront of web development. I believe in the power
                of collaboration and enjoy working with teams to bring ideas to
                life.
              </p>
            </div>
          </div>

          <div className="animate-slide-up delay-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-[#020817] rounded-xl p-6 shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full mb-4">
                  <Code
                    size={24}
                    className="text-blue-600 dark:text-blue-400"
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Frontend Development
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Proficient in React, TypeScript, JavaScript, HTML, CSS, and
                  Tailwind CSS.
                </p>
              </div>

              <div className="bg-white dark:bg-[#020817] rounded-xl p-6 shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-4 rounded-full mb-4">
                  <Layers
                    size={24}
                    className="text-indigo-600 dark:text-indigo-400"
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  State Management
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Experience with Redux, Context API, and other state management
                  solutions.
                </p>
              </div>

              <div className="bg-white dark:bg-[#020817] rounded-xl p-6 shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-full mb-4">
                  <Globe
                    size={24}
                    className="text-purple-600 dark:text-purple-400"
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Responsive Design
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Creating websites that look great on all devices and screen
                  sizes.
                </p>
              </div>

              <div className="bg-white dark:bg-[#020817] rounded-xl p-6 shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="bg-pink-100 dark:bg-pink-900/30 p-4 rounded-full mb-4">
                  <Lightbulb
                    size={24}
                    className="text-pink-600 dark:text-pink-400"
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Problem Solving
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Strong analytical skills with a focus on finding efficient
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
