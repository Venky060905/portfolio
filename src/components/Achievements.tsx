"use client";

import { motion } from "framer-motion";
import { Trophy, Code, Database } from "lucide-react";

const achievements = [
  {
    title: "LeetCode Problem Solver",
    description: "Successfully solved 40+ LeetCode problems, demonstrating strong algorithmic and problem-solving skills.",
    icon: Trophy,
  },
  {
    title: "DSA Repository Creator",
    description: "Built a comprehensive Data Structures and Algorithms repository complete with detailed time and space complexity analysis.",
    icon: Code,
  },
  {
    title: "Real-world Data Handler",
    description: "Extensive hands-on experience processing, cleaning, and analyzing messy real-world datasets across various domains.",
    icon: Database,
  }
];

export default function Achievements() {
  return (
    <section className="px-6 py-24 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Notable <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Continuous learning and application of core computer science and data concepts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-8 rounded-2xl text-center group hover:bg-white/5 transition-colors"
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
