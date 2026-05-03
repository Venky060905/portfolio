"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Data cleaning and preprocessing",
  "Exploratory Data Analysis (EDA)",
  "Dashboard creation",
  "Business insights and decision-making",
  "AWS basic knowledge",
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                As a passionate Data Analyst, I specialize in transforming complex datasets 
                into clear, actionable business strategies. My approach bridges the gap between 
                technical data manipulation and strategic business objectives.
              </p>
              <p>
                I thrive on uncovering hidden patterns and building intuitive dashboards 
                that empower stakeholders to make informed, data-driven decisions confidently.
              </p>
            </div>
          </div>

          <div className="glass p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-[-50%] right-[-50%] w-full h-full bg-indigo-500/10 rounded-full blur-[80px]" />
            <h3 className="text-xl font-semibold mb-6 text-white relative z-10">Professional Focus</h3>
            <ul className="space-y-4 relative z-10">
              {highlights.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
