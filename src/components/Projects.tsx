"use client";

import { motion } from "framer-motion";
import FeaturedProject from "./FeaturedProject";
import { projects } from "@/data/projects";

export default function Projects() {
  const allProjects = projects;

  return (
    <section id="projects" className="px-6 py-24 scroll-mt-20 bg-gradient-to-b from-background via-background to-slate-50/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <div className="mb-6 flex justify-center">
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Real-world problems solved through modern design and premium execution. Explore how great product design meets technical excellence.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <FeaturedProject projects={allProjects} />
      </div>
    </section>
  );
}
