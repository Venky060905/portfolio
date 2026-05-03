"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center relative px-6 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-600/20 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-cyan-400 font-medium tracking-wider text-sm md:text-base mb-4 uppercase">
            Data Analyst | SQL | Python | Power BI | AWS
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
            Hi, I&apos;m <span className="text-gradient">Venkatesh Kothamasu</span>.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
            Transforming raw data into actionable business insights. I specialize in building dashboards, 
            running complex analyses, and driving data-informed decisions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 flex-wrap"
        >
          <Link
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-background font-medium rounded-full overflow-hidden transition-transform hover:scale-105"
          >
            <span>View Projects</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="/Venkatesh_Kothamasu_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-medium rounded-full hover:bg-white/10 transition-colors"
          >
            <span>Resume</span>
            <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
          </a>
          <Link
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-medium rounded-full hover:bg-white/10 transition-colors"
          >
            <span>Contact Me</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
