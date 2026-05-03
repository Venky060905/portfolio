"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 bg-white/[0.02] border-y border-white/5 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Where I&apos;ve applied my skills in the real world.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-6 pl-8 md:pl-12">
          {/* Timeline Dot */}
          <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-cyan-500 border-4 border-background" />

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass p-8 rounded-2xl relative"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Backend/Data Intern</h3>
                <h4 className="text-xl text-cyan-400 font-medium">UVXYZ</h4>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10">
                <Briefcase size={16} />
                Internship
              </div>
            </div>

            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1.5">•</span>
                <span>Built a comprehensive Django dashboard for product analytics and monitoring.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1.5">•</span>
                <span>Designed and optimized database schemas to ensure efficient data storage and retrieval.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1.5">•</span>
                <span>Wrote complex SQL queries for deep-dive analysis and reporting.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1.5">•</span>
                <span>Implemented dynamic pricing logic algorithms to maximize profitability.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1.5">•</span>
                <span>Analyzed product ratings and user feedback to derive actionable product insights.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 mt-1.5">•</span>
                <span>Successfully optimized database performance, reducing query execution times significantly.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
