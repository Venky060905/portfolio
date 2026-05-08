"use client";

import { motion } from "framer-motion";

interface TechBadgeProps {
  label: string;
  variant?: "primary" | "secondary" | "tertiary";
  animated?: boolean;
}

export default function TechBadge({
  label,
  variant = "primary",
  animated = true,
}: TechBadgeProps) {
  const variants = {
    primary: "text-accent bg-accent/10 border-accent/30 hover:bg-accent/20",
    secondary: "text-accent-secondary bg-accent-secondary/10 border-accent-secondary/30 hover:bg-accent-secondary/20",
    tertiary: "text-accent-tertiary bg-accent-tertiary/10 border-accent-tertiary/30 hover:bg-accent-tertiary/20",
  };

  return (
    <motion.span
      whileHover={animated ? { scale: 1.05 } : {}}
      className={`px-3 py-1.5 text-xs md:text-sm font-medium rounded-full border transition-all duration-300 ${variants[variant]}`}
    >
      {label}
    </motion.span>
  );
}
