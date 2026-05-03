"use client";

import { motion } from "framer-motion";
import { Database, BarChart3, TrendingUp, Code2 } from "lucide-react";

const stats = [
  { label: "Data Projects Completed", value: "15+", icon: Database },
  { label: "Dashboards Created", value: "10+", icon: BarChart3 },
  { label: "SQL Queries Written", value: "500+", icon: Code2 },
  { label: "Datasets Processed", value: "20+", icon: TrendingUp },
];

export default function DataInsights() {
  return (
    <section className="px-6 relative z-10 -mt-10 md:-mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-6 rounded-2xl flex flex-col items-center text-center group hover:bg-white/5 transition-colors"
              >
                <div className="p-3 bg-white/5 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
