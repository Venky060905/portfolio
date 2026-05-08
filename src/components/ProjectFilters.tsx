"use client";

import { motion } from "framer-motion";
import { categories } from "@/data/projects";

interface ProjectFiltersProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ProjectFilters({
  activeCategory,
  onCategoryChange,
}: ProjectFiltersProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap gap-3 justify-center mb-12"
    >
      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange(category)}
          className={`relative px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
            activeCategory === category
              ? "text-background"
              : "text-muted hover:text-foreground"
          }`}
        >
          {activeCategory === category && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 bg-accent rounded-full -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {category}
        </motion.button>
      ))}
    </motion.div>
  );
}
