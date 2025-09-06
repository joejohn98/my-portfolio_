"use client"

import { Phone, Mail, Check } from "lucide-react"
import { motion } from "framer-motion"
import ContactForm from "@/components/ContactForm"

export default function Contact() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }

  return (
    <section id="contact" className="py-16 bg-white dark:bg-[#020817]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to chat? Feel free to reach out to me using the form below.
          </p>
        </motion.div>

        {/* Contact Content - Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            className="space-y-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Contact Information */}
            <motion.div variants={item}>
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
              <div className="space-y-4">
                <motion.div
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Mail className="h-5 w-5 text-blue-500 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-200">Email</p>
                    <a
                      href="mailto:joejohnkj@gmail.com"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                    >
                      joejohnkj@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Phone className="h-5 w-5 text-blue-500 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-200">Phone</p>
                    <a
                      href="tel:+917095835845"
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                    >
                      +91 7095835845
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Career Goals */}
            <motion.div
              className="p-6 bg-white dark:bg-[#020817] rounded-lg border dark:border-gray-700 shadow-sm"
              variants={item}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Career Goals</h3>
              <ul className="space-y-2">
                <motion.li
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                >
                  <Check className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    To master advanced frontend architecture patterns
                  </span>
                </motion.li>
                <motion.li
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <Check className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    To contribute to meaningful projects that improve people&#39;s lives
                  </span>
                </motion.li>
                <motion.li
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <Check className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    To mentor others and share knowledge within the developer community
                  </span>
                </motion.li>
              </ul>
            </motion.div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Follow Me</h3>
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/joejohn98"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 border dark:border-gray-700 hover:bg-blue-500 hover:border-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:border-blue-500 transition-colors"
                >
                  {/* GitHub icon (inline SVG to match original) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/joejohn-jj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 border dark:border-gray-700 hover:bg-blue-500 hover:border-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:border-blue-500 transition-colors"
                >
                  {/* LinkedIn icon (inline SVG to match original) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-[#020817] border border-transparent dark:border-gray-700 rounded-xl p-6 shadow-lg h-full">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
